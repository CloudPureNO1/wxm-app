// 在 TypeScript 中，import type 是一种特殊的导入语法，专门用于导入类型（如接口、类型别名等）。当你使用 import type 时，你明确地告诉 TypeScript 编译器，你只关心导入的类型信息，而不会在运行时使用这些导入的值
import type { ICreator, IOperator } from "./Base"

export interface IBaseOrder {
    // 订单ID - Order ID
    // The unique identifier for an order
    orderId: string;
    // 用户ID - User ID
    // The unique identifier for the user who placed the order
    userId: string;
    // 店铺ID - Shop ID
    // The unique identifier for the shop where the order was placed
    shopId: string;
}

export interface IOrder extends IBaseOrder {
    // 地址ID - Address ID
    // The unique identifier for the delivery address
    addressId: string;
    // 订单状态 - Order Status
    // The current status of the order
    orderStatus: 'pending' | 'paid' | 'processing' | 'shipped' | 'delivered' | 'completed' | 'cancelled';
    // 总金额 - Total Amount
    // The total amount of the order
    totalAmount: number;
    // 运费 - Shipping Fee
    // The shipping fee for the order
    shippingFee: number;
    // 折扣金额 - Discount Amount
    // The discount applied to the order
    discountAmount: number;
    // 支付方式 - Payment Method
    // The method used to pay for the order
    paymentMethod?: 'credit_card' | 'debit_card' | 'paypal' | 'alipay' | 'wechat_pay';
    // 下单时间 - Order Time
    // The time when the order was placed
    orderTime: Date;
    // 预计送达时间 - Estimated Delivery
    // The estimated delivery date for the order
    estimatedDelivery?: Date;
}





export type TOrder=IOrder & ICreator & IOperator;




// 订单信息表 - MallOrder Table
// 商家订单信息定义
// Definition of merchant order information
export interface IMallOrder {
    // 订单ID - Order ID
    // The unique identifier for an order
    orderId: string;
    // 用户ID - User ID
    // The unique identifier for the user who placed the order
    userId: string;
    // 地址ID - Address ID
    // The unique identifier for the delivery address
    addressId: string;
    // 店铺ID - Shop ID
    // The unique identifier for the shop where the order was placed
    shopId: string;
    // 订单状态 - Order Status
    // The current status of the order
    orderStatus: 'pending' | 'paid' | 'processing' | 'shipped' | 'delivered' | 'completed' | 'cancelled';
    // 总金额 - Total Amount
    // The total amount of the order
    totalAmount: number;
    // 运费 - Shipping Fee
    // The shipping fee for the order
    shippingFee: number;
    // 折扣金额 - Discount Amount
    // The discount applied to the order
    discountAmount: number;
    // 支付方式 - Payment Method
    // The method used to pay for the order
    paymentMethod?: 'credit_card' | 'debit_card' | 'paypal' | 'alipay' | 'wechat_pay';
    // 下单时间 - Order Time
    // The time when the order was placed
    orderTime: Date;
    // 预计送达时间 - Estimated Delivery
    // The estimated delivery date for the order
    estimatedDelivery?: Date;
    // 最近一次操作者 - Operator
    // The person who last updated the order
    operator: string;
    // 创建者 - Creator
    // The person who created the order
    creator: string;
    // 创建时间 - Create Time
    // The time when the order was created
    createTime: Date;
    // 更新时间 - Update Time
    // The time when the order was last updated
    updateTime: Date;
}
