// 在 TypeScript 中，import type 是一种特殊的导入语法，专门用于导入类型（如接口、类型别名等）。当你使用 import type 时，你明确地告诉 TypeScript 编译器，你只关心导入的类型信息，而不会在运行时使用这些导入的值
import type { ICreator, IOperator } from "./Base"

export interface IBasePromotion {
    promotionId: string; // 促销活动ID // Promotion activity ID
    promotionName: string; // 活动名称 // Activity name
    type: 'percentage' | 'fixed_amount' | 'buy_x_get_y' | 'spend_&_save'  |'free_shipping'; // 促销类型 // Promotion type
    value: number; // 优惠值（百分比或固定金额） // Discount value (percentage or fixed amount)
}

export interface IPromotion{
    promotionId: string; // 促销活动ID // Promotion activity ID
    promotionName: string; // 活动名称 // Activity name
    description?: string; // 活动描述 // Activity description
    type: 'percentage' | 'fixed_amount' | 'buy_x_get_y' | 'spend_&_save' |'free_shipping'; // 促销类型 // Promotion type
    value: number; // 优惠值（百分比或固定金额） // Discount value (percentage or fixed amount)
    startDate: Date; // 开始日期 // Start date
    endDate: Date; // 结束日期 // End date
    applyToAll: boolean; // 是否适用于所有商品 // Whether applicable to all products
    productIds?: string; // 特定商品ID列表 // List of specific product IDs
}

export type TPromotion = IPromotion & ICreator & IOperator;

// mall_promotion 表的接口定义 // Interface definition for the mall_promotion table
export interface IMallPromotion {
    promotionId: string; // 促销活动ID // Promotion activity ID
    promotionName: string; // 活动名称 // Activity name
    description?: string; // 活动描述 // Activity description
    type: 'percentage' | 'fixed_amount' | 'buy_x_get_y' | 'spend_&_save' |'free_shipping'; // 促销类型 // Promotion type
    value: number; // 优惠值（百分比或固定金额） // Discount value (percentage or fixed amount)
    startDate: Date; // 开始日期 // Start date
    endDate: Date; // 结束日期 // End date
    applyToAll: boolean; // 是否适用于所有商品 // Whether applicable to all products
    productIds?: string; // 特定商品ID列表 // List of specific product IDs
    operator: string; // 最近一次操作者 // Last operator
    creator: string; // 创建者 // Creator
    createTime: Date; // 创建时间 // Creation time
    updateTime: Date; // 更新时间 // Update time
}