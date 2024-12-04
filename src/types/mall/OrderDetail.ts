// 在 TypeScript 中，import type 是一种特殊的导入语法，专门用于导入类型（如接口、类型别名等）。当你使用 import type 时，你明确地告诉 TypeScript 编译器，你只关心导入的类型信息，而不会在运行时使用这些导入的值
import type { ICreator, IOperator } from "./Base"



export interface IOrderdetail {
    // 详情ID - Detail ID
    // The unique identifier for the order detail
    detailId: string;
    // 订单ID - Order ID
    // The unique identifier for the order
    orderId: number;
    // 变体ID - string ID
    // The unique identifier for the product variant
    variantId: string;
    // 数量 - Quantity
    // The quantity of the product in the order
    quantity: number;
    // 单价 - Price
    // The price per unit of the product
    price: number;
}



export type TOrderDetail = IOrderdetail & ICreator & IOperator;



// 订单详情表 - MallOrderDetail Table
// 商家订单商品详情定义
// Definition of merchant order product details
export interface IMallOrderDetail {
    // 详情ID - Detail ID
    // The unique identifier for the order detail
    detailId: string;
    // 订单ID - Order ID
    // The unique identifier for the order
    orderId: string;
    // 变体ID - Variant ID
    // The unique identifier for the product variant
    variantId: string;
    // 数量 - Quantity
    // The quantity of the product in the order
    quantity: string;
    // 单价 - Price
    // The price per unit of the product
    price: number;
    // 最近一次操作者 - Operator
    // The person who last updated the detail
    operator: string;
    // 创建者 - Creator
    // The person who created the detail
    creator: string;
    // 创建时间 - Create Time
    // The time when the detail was created
    createTime: Date;
    // 更新时间 - Update Time
    // The time when the detail was last updated
    updateTime: Date;
}
