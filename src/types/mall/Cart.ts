// 在 TypeScript 中，import type 是一种特殊的导入语法，专门用于导入类型（如接口、类型别名等）。当你使用 import type 时，你明确地告诉 TypeScript 编译器，你只关心导入的类型信息，而不会在运行时使用这些导入的值
import type { ICreator, IOperator } from "./Base"

export interface IBaseCart {
    productId: string,
    quantity: number
}    

export interface ICart{
    // 购物车条目ID - Cart Entry ID
    // The unique identifier for the cart entry
    cartId: string;
    // 用户ID - User ID
    // The unique identifier for the user
    userId: string;
    // 商品变体ID - Product Variant ID
    // The unique identifier for the product variant
    variantId: string;
    // 数量 - Quantity
    // The quantity of the product in the cart
    quantity: number;
}

export type TCart=ICart & ICreator & IOperator;

// 购物车表 - MallCart Table
// 商家购物车定义
// Definition of merchant shopping cart
export interface IMallCart {
    // 购物车条目ID - Cart Entry ID
    // The unique identifier for the cart entry
    cartId: string;
    // 用户ID - User ID
    // The unique identifier for the user
    userId: string;
    // 商品变体ID - Product Variant ID
    // The unique identifier for the product variant
    variantId: string;
    // 数量 - Quantity
    // The quantity of the product in the cart
    quantity: number;
    // 最近一次操作者 - Operator
    // The person who last updated the cart entry
    operator: string;
    // 创建者 - Creator
    // The person who created the cart entry
    creator: string;
    // 创建时间 - Create Time
    // The time when the cart entry was created
    createTime: Date;
    // 更新时间 - Update Time
    // The time when the cart entry was last updated
    updateTime: Date;
}
