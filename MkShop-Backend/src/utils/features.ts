import mongoose from 'mongoose';
import { InvalidateCacheProps, OrderItemType } from '../types/types.js';
import { nodeCache } from '../app.js';
import { Product } from '../models/product.js';
import { Order } from '../models/order.js';

export const connectDB = (uri: string) => {
  mongoose
    .connect(uri, {
      dbName: 'Ecommerce_24',
    })
    .then((c) => console.log(`DB connected to ${c.connection.host}`))
    .catch((error) => console.log(error));
};

export const invalidateCache = async ({
  product,
  order,
  admin,
  userId,
  orderId,
  productId,
}: InvalidateCacheProps) => {
  if (product) {
    const productKeys: string[] = [
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
    const orderKeys: string[] = [
      'all-orders',
      `my-orders-${userId}`,
      `order-${orderId}`,
    ];

    nodeCache.del(orderKeys);
  }
  if (admin) {
  }
};

export const reduceStock = async (orderItems: OrderItemType[]) => {
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

export const calculatePercentage = (thisMonth: number, lastMonth: number) => {
  if (lastMonth == 0) {
    return thisMonth * 100;
  }
  const percent = ((thisMonth - lastMonth) / lastMonth) * 100;
  return Number(percent.toFixed(0));
};