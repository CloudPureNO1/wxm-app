// 在 TypeScript 中，import type 是一种特殊的导入语法，专门用于导入类型（如接口、类型别名等）。当你使用 import type 时，你明确地告诉 TypeScript 编译器，你只关心导入的类型信息，而不会在运行时使用这些导入的值
import type { ICreator, IOperator } from "./Base"

export interface ICoupon{
    couponId: string; // 优惠券ID // Coupon ID
    code: string; // 优惠券代码 // Coupon code
    promotionId?: string; // 关联促销活动ID // Associated promotion activity ID
    userId?: string; // 用户ID // User ID
    minSpend?: number; // 最小消费金额 // Minimum spend amount
    discountAmount: number; // 优惠金额 // Discount amount
    useCountLimit?: number; // 使用次数限制 // Use count limit
    usedCount: number; // 已使用次数 // Used count
    validFrom: Date; // 有效起始时间 // Valid from
    validTo: Date; // 有效结束时间 // Valid to
    status: 'active' | 'used' | 'expired' | 'cancelled'; // 优惠券状态 // Coupon status
}

export type TCoupon = ICoupon & ICreator & IOperator;

// mall_coupon 表的接口定义 // Interface definition for the mall_coupon table
export interface IMallCoupon {
    couponId: string; // 优惠券ID // Coupon ID
    code: string; // 优惠券代码 // Coupon code
    promotionId?: string; // 关联促销活动ID // Associated promotion activity ID
    userId?: string; // 用户ID // User ID
    minSpend?: number; // 最小消费金额 // Minimum spend amount
    discountAmount: number; // 优惠金额 // Discount amount
    useCountLimit?: number; // 使用次数限制 // Use count limit
    usedCount: number; // 已使用次数 // Used count
    validFrom: Date; // 有效起始时间 // Valid from
    validTo: Date; // 有效结束时间 // Valid to
    status: 'active' | 'used' | 'expired' | 'cancelled'; // 优惠券状态 // Coupon status
    operator: string; // 最近一次操作者 // Last operator
    creator: string; // 创建者 // Creator
    createTime: Date; // 创建时间 // Creation time
    updateTime: Date; // 更新时间 // Update time
}