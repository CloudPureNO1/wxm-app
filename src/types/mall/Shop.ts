// 在 TypeScript 中，import type 是一种特殊的导入语法，专门用于导入类型（如接口、类型别名等）。当你使用 import type 时，你明确地告诉 TypeScript 编译器，你只关心导入的类型信息，而不会在运行时使用这些导入的值
import type { ICreator, IOperator } from "./Base"

export interface IBaseShop{
    // 店铺ID
    shopId: string;
    // 店铺名称
    shopName: string;
    // 店铺Logo URL
    logoUrl?: string | null;
    // 店铺封面图片URL
    coverImageUrl?: string | null;
    // 店铺平均评分
    rating: number;
    // 评价数量
    reviewCount: number;
}

export interface IShop extends IBaseShop{
    // 店主ID
    userId: string;
    // 店铺描述
    description?: string | null;
    // 地理位置
    location?: string | null;
    // 营业时间
    businessHours?: string | null;
    // 成立日期
    establishmentDate?: Date | null;
}


export type TShop = IShop & ICreator & IOperator;

// 店铺信息表
export interface MallShop {
    // 店铺ID
    shopId: string;
    // 店主ID
    userId: string;
    // 店铺名称
    shopName: string;
    // 店铺描述
    description?: string | null;
    // 店铺Logo URL
    logoUrl?: string | null;
    // 店铺封面图片URL
    coverImageUrl?: string | null;
    // 地理位置
    location?: string | null;
    // 营业时间
    businessHours?: string | null;
    // 成立日期
    establishmentDate?: Date | null;
    // 店铺平均评分
    rating: number;
    // 评价数量
    reviewCount: number;
    // 最近一次操作者
    operator?: string | null;
    // 创建者
    creator?: string | null;
    // 创建时间
    createTime?: Date | null;
    // 更新时间
    updateTime?: Date | null;
}