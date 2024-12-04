// 在 TypeScript 中，import type 是一种特殊的导入语法，专门用于导入类型（如接口、类型别名等）。当你使用 import type 时，你明确地告诉 TypeScript 编译器，你只关心导入的类型信息，而不会在运行时使用这些导入的值
import type { ICreator, IOperator } from "./Base"


export interface IReview{
    // 评价ID - Review ID
    // The unique identifier for the review
    reviewId: string;
    // 用户ID - User ID
    // The unique identifier for the user who wrote the review
    userId: string;
    // 商品ID - Product ID
    // The unique identifier for the product being reviewed
    productId: string;
    // 评分 - Rating
    // The rating given by the user (1-5)
    rating: number;
    // 评论内容 - Comment
    // The content of the review
    comment?: string;
}

export type TReview= IReview & ICreator & IOperator;

// 评价表 - MallReview Table
// 商家商品评价定义
// Definition of merchant product reviews
export interface IMallReview {
    // 评价ID - Review ID
    // The unique identifier for the review
    reviewId: string;
    // 用户ID - User ID
    // The unique identifier for the user who wrote the review
    userId: string;
    // 商品ID - Product ID
    // The unique identifier for the product being reviewed
    productId: string;
    // 评分 - Rating
    // The rating given by the user (1-5)
    rating: string;
    // 评论内容 - Comment
    // The content of the review
    comment?: string;
    // 最近一次操作者 - Operator
    // The person who last updated the review
    operator: string;
    // 创建者 - Creator
    // The person who created the review
    creator: string;
    // 创建时间 - Create Time
    // The time when the review was created
    createTime: Date;
    // 更新时间 - Update Time
    // The time when the review was last updated
    updateTime: Date;
}