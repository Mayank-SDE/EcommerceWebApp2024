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
export const invalidateCache = async ({ product, order, admin, userId, orderId, productId, }) => {
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
            productId.forEach((id) => productKeys.push(`product-${productId}`));
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
    const percent = ((thisMonth - lastMonth) / lastMonth) * 100;
    return Number(percent.toFixed(0));
};
