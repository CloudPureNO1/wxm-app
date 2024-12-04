// 在 TypeScript 中，import type 是一种特殊的导入语法，专门用于导入类型（如接口、类型别名等）。当你使用 import type 时，你明确地告诉 TypeScript 编译器，你只关心导入的类型信息，而不会在运行时使用这些导入的值
import type { ICreator, IOperator } from "./Base"



export interface IPromotionProduct {
    mappingId: string; // 映射ID // Mapping ID
    promotionId: string; // 促销活动ID // Promotion activity ID
    productId: string; // 商品ID // Product ID
    variantId?: string; // 变体ID // Variant ID
}

export type TPromotionProduct = IPromotionProduct & ICreator & IOperator;

// mall_promotion_product 表的接口定义 // Interface definition for the mall_promotion_product table
export interface IMallPromotionProduct {
    mappingId: string; // 映射ID // Mapping ID
    promotionId: string; // 促销活动ID // Promotion activity ID
    productId: string; // 商品ID // Product ID
    variantId?: string; // 变体ID // Variant ID
    operator: string; // 最近一次操作者 // Last operator
    creator: string; // 创建者 // Creator
    createTime: Date; // 创建时间 // Creation time
    updateTime: Date; // 更新时间 // Update time
}