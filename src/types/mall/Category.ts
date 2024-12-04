// 在 TypeScript 中，import type 是一种特殊的导入语法，专门用于导入类型（如接口、类型别名等）。当你使用 import type 时，你明确地告诉 TypeScript 编译器，你只关心导入的类型信息，而不会在运行时使用这些导入的值
import type { ICreator, IOperator } from "./Base"

export interface IBaseCategory {
    // 分类ID
    categoryId: string;
    // 分类名称
    categoryName: string;
}

export interface ICategory {
    // 分类ID
    categoryId: string;
    // 分类名称
    categoryName: string;
    // 父分类ID
    parentId?: string | null;
    // 层级深度
    level?: number;
    // 分类图片URL
    categoryImageUrl?: string | null;
    // 分类图片资源ID
    categoryImageResourceId?: string | null;
}

export type TCategory = ICategory & ICreator & IOperator;

// 商品分类表
export interface MallCategory {
    // 分类ID
    categoryId: string;
    // 分类名称
    categoryName: string;
    // 父分类ID
    parentId?: string | null;
    // 层级深度
    level?: number;
    // 分类图片URL
    categoryImageUrl?: string | null;
    // 分类图片资源ID
    categoryImageResourceId?: string | null;
    // 最近一次操作者
    operator?: string | null;
    // 创建者
    creator?: string | null;
    // 创建时间
    createTime?: Date | null;
    // 更新时间
    updateTime?: Date | null;
}