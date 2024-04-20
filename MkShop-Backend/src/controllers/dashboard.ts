import { nodeCache } from '../app.js';
import { TryCatch } from '../middlewares/error.js';
import { Order } from '../models/order.js';
import { Product } from '../models/product.js';
import { User } from '../models/user.js';
import { calculatePercentage } from '../utils/features.js';

export const getDashboardStats = TryCatch(async (request, response, next) => {
  let stats = {};
  if (nodeCache.has('admin-stats')) {
    stats = JSON.parse(nodeCache.get('admin-stats') as string);
  } else {
    const today = new Date();

    const thisMonth = {
      start: new Date(today.getFullYear(), today.getMonth(), 1),
      end: today,
    };

    const lastMonth = {
      start: new Date(today.getFullYear(), today.getMonth() - 1, 1),
      end: new Date(today.getFullYear(), today.getMonth(), 0),
    };

    const thisMonthProductsPromise = Product.find({
      createdAt: {
        $gte: thisMonth.start,
        $lte: thisMonth.end,
      },
    });

    const lastMonthProductsPromise = Product.find({
      createdAt: {
        $gte: lastMonth.start,
        $lte: lastMonth.end,
      },
    });

    const thisMonthUsersPromise = User.find({
      createdAt: {
        $gte: thisMonth.start,
        $lte: thisMonth.end,
      },
    });

    const lastMonthUsersPromise = User.find({
      createdAt: {
        $gte: lastMonth.start,
        $lte: lastMonth.end,
      },
    });

    const thisMonthOrdersPromise = Order.find({
      createdAt: {
        $gte: thisMonth.start,
        $lte: thisMonth.end,
      },
    });

    const lastMonthOrdersPromise = Order.find({
      createdAt: {
        $gte: lastMonth.start,
        $lte: lastMonth.end,
      },
    });

    const [
      thisMonthProducts,
      thisMonthUsers,
      thisMonthOrders,
      lastMonthProducts,
      lastMonthUsers,
      lastMonthOrders,
    ] = await Promise.all([
      thisMonthProductsPromise,
      thisMonthUsersPromise,
      thisMonthOrdersPromise,
      lastMonthProductsPromise,
      lastMonthUsersPromise,
      lastMonthOrdersPromise,
    ]);
    const changePercent = {
      revenue: calculatePercentage(500000, 300000),
      product: calculatePercentage(
        thisMonthProducts.length,
        lastMonthProducts.length
      ),
      user: calculatePercentage(thisMonthUsers.length, lastMonthUsers.length),
      order: calculatePercentage(
        thisMonthOrders.length,
        lastMonthOrders.length
      ),
    };

    stats = {
      changePercent,
    };
    nodeCache.set('admin-stats', stats);
  }

  return response.status(200).json({
    success: true,
    stats,
  });
});

export const getPieChart = TryCatch(async (request, response, next) => {});

export const getBarChart = TryCatch(async (request, response, next) => {});

export const getLineChart = TryCatch(async (request, response, next) => {});
