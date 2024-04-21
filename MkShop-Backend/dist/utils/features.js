import mongoose from 'mongoose';
import { nodeCache } from '../app.js';
import { Product } from '../models/product.js';
export const connectDB = (uri) => {
    mongoose
        .connect(uri, {
        dbName: 'Ecommerce_24',
    })
        .then((c) => console.log(`DB connected to ${c.connection.host}`))
        .catch((error) => console.log(error));
};
export const invalidateCache = ({ product, order, admin, userId, orderId, productId, }) => {
    if (product) {
        const productKeys = [
            'latest-products',
            'categories',
            'all-products',
        ];
        if (typeof productId === 'string') {
            productKeys.push(`product-${productId}`);
        }
        if (typeof productId === 'object') {
            productId.forEach((id) => productKeys.push(`product-${id}`));
        }
        nodeCache.del(productKeys);
    }
    if (order) {
        const orderKeys = [
            'all-orders',
            `my-orders-${userId}`,
            `order-${orderId}`,
        ];
        nodeCache.del(orderKeys);
    }
    if (admin) {
        nodeCache.del([
            'admin-stats',
            'admin-pie-charts',
            'admin-bar-charts',
            'admin-line-charts',
        ]);
    }
};
export const reduceStock = async (orderItems) => {
    for (let index = 0; index < orderItems.length; index++) {
        const order = orderItems[index];
        const product = await Product.findById(order.productId);
        if (!product) {
            throw new Error('Product not found');
        }
        product.stock -= order.quantity;
        await product.save();
    }
};
export const calculatePercentage = (thisMonth, lastMonth) => {
    if (lastMonth == 0) {
        return thisMonth * 100;
    }
    const percent = (thisMonth / lastMonth) * 100;
    return Number(percent.toFixed(0));
};
export const getInventories = async ({ categories, productsCount, }) => {
    const categoriesCountPromise = categories.map((category) => {
        return Product.countDocuments({ category });
    });
    const categoryCount = [];
    const categoriesCount = await Promise.all(categoriesCountPromise);
    categories.forEach((category, index) => {
        categoryCount.push({
            [category]: Math.round((categoriesCount[index] / productsCount) * 100),
        });
    });
    return categoryCount;
};
export const getChartData = ({ length, docArr, today, property, }) => {
    const data = new Array(length).fill(0);
    docArr.forEach((i) => {
        const creationDate = i.createdAt;
        const monthDifference = (today.getMonth() - creationDate.getMonth() + 12) % 12;
        if (monthDifference < length) {
            if (property) {
                data[length - monthDifference - 1] += i[property];
            }
            else {
                data[length - monthDifference - 1] += 1;
            }
        }
    });
    return data;
};
