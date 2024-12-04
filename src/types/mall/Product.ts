// 在 TypeScript 中，import type 是一种特殊的导入语法，专门用于导入类型（如接口、类型别名等）。当你使用 import type 时，你明确地告诉 TypeScript 编译器，你只关心导入的类型信息，而不会在运行时使用这些导入的值
import type { ICreator,IOperator } from "./Base"

export interface IBaseProduct {
    productId: string; // 商品ID
    title: string; // 商品标题
    mainImageUrl?: string | null; // 主图URL
    mainImageResourceId?: string | null; // 商品主图资源ID
}

 

/**
 * 产品mall_product  表  的interface
 */
export interface IProduct extends IBaseProduct{
    description?: string | null; // 商品描述
    originalPrice: number; // 原价
    discountedPrice?: number | null; // 折后价
    stock: number; // 库存量
    soldCount: number; // 销量
    categoryId?: string | null; // 类别ID
    shopId?: string; // 店铺ID
}


/**
 * 产品mall_product  表  的类型
 */
 
export type ProductType = IProduct & ICreator & IOperator;



// Interface representing the product information in the mall_product table
// 表示 mall_product 表中的商品信息的接口
export interface MallProduct {
    // 商品ID
    // Product ID
    productId: string;

    // 店铺ID
    // Shop ID
    shopId: string;

    // 商品标题
    // Product title
    title: string;

    // 商品描述
    // Product description
    description?: string | null;

    // 原价
    // Original price
    originalPrice: number;

    // 折后价
    // Discounted price
    discountedPrice?: number | null;

    // 库存量
    // Stock quantity
    stock: number;

    // 销量
    // Sales count
    soldCount: number;

    // 类别ID
    // Category ID
    categoryId?: number | null;

    // 主图URL
    // Main image URL
    mainImageUrl?: string | null;

    // 最近一次操作者
    // Last operator
    operator?: string | null;

    // 创建者
    // Creator
    creator?: string | null;

    // 创建时间
    // Creation time
    createTime?: Date | null;

    // 更新时间
    // Update time
    updateTime?: Date | null;
}
