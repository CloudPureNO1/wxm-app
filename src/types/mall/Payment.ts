// 在 TypeScript 中，import type 是一种特殊的导入语法，专门用于导入类型（如接口、类型别名等）。当你使用 import type 时，你明确地告诉 TypeScript 编译器，你只关心导入的类型信息，而不会在运行时使用这些导入的值
import type { ICreator, IOperator } from "./Base"


export interface IPayment{
    paymentId: string; // 支付记录ID // Payment record ID
    orderId: string; // 订单ID // Order ID
    userId: string; // 用户ID // User ID
    amount: number; // 支付金额 // Payment amount
    paymentMethod: 'credit_card' | 'debit_card' | 'paypal' | 'alipay' | 'wechat_pay'; // 支付方式 // Payment method
    paymentStatus: 'pending' | 'success' | 'failed' | 'refunded'; // 支付状态 // Payment status
    paymentTime: Date; // 支付时间 // Payment time
}

export type TPayment = IPayment & ICreator & IOperator;

// mall_payment 表的接口定义 // Interface definition for the mall_payment table
export interface IMallPayment {
    paymentId: string; // 支付记录ID // Payment record ID
    orderId: string; // 订单ID // Order ID
    userId: string; // 用户ID // User ID
    amount: number; // 支付金额 // Payment amount
    paymentMethod: 'credit_card' | 'debit_card' | 'paypal' | 'alipay' | 'wechat_pay'; // 支付方式 // Payment method
    paymentStatus: 'pending' | 'success' | 'failed' | 'refunded'; // 支付状态 // Payment status
    paymentTime: Date; // 支付时间 // Payment time
    operator: string; // 最近一次操作者 // Last operator
    creator: string; // 创建者 // Creator
    createTime: Date; // 创建时间 // Creation time
    updateTime: Date; // 更新时间 // Update time
}