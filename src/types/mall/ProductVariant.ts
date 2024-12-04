// 在 TypeScript 中，import type 是一种特殊的导入语法，专门用于导入类型（如接口、类型别名等）。当你使用 import type 时，你明确地告诉 TypeScript 编译器，你只关心导入的类型信息，而不会在运行时使用这些导入的值
import type { ICreator, IOperator } from "./Base"


export interface IProductVariant{
    // 变体ID
    variantId: string;
    // 商品ID
    productId: string;
    // SKU
    sku: string;
    // 颜色
    color?: string | null;
    // 尺寸
    size?: string | null;
    // 价格
    price: number;
    // 库存
    stock: number;
    // 图片URL
    imageUrl?: string | null;
}

export type TProductVariant = IProductVariant & ICreator & IOperator;

// 商品变体表
export interface MallProductVariant {
    // 变体ID
    variantId: string;
    // 商品ID
    productId: string;
    // SKU
    sku: string;
    // 颜色
    color?: string | null;
    // 尺寸
    size?: string | null;
    // 价格
    price: number;
    // 库存
    stock: number;
    // 图片URL
    imageUrl?: string | null;
    // 最近一次操作者
    operator?: string | null;
    // 创建者
    creator?: string | null;
    // 创建时间
    createTime?: Date | null;
    // 更新时间
    updateTime?: Date | null;
}