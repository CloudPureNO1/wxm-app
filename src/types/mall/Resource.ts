// 在 TypeScript 中，import type 是一种特殊的导入语法，专门用于导入类型（如接口、类型别名等）。当你使用 import type 时，你明确地告诉 TypeScript 编译器，你只关心导入的类型信息，而不会在运行时使用这些导入的值
import type { ICreator, IOperator } from "./Base"

export interface IBaseResource{
    resourceId: string; // 资源ID // Resource ID
    fileName: string; // 文件名 // File name
    filePath: string; // 文件路径 // File path
    fileType: 'image' | 'video' | 'document'; // 文件类型 // File type
}

export interface IResource extends IBaseResource{
    fileSize: number; // 文件大小（字节） // File size (bytes)
    uploadTime: Date; // 上传时间 // Upload time
}

export type TResource = IResource & ICreator & IOperator;

// mall_resource 表的接口定义 // Interface definition for the mall_resource table
export interface IMallResource {
    resourceId: string; // 资源ID // Resource ID
    fileName: string; // 文件名 // File name
    filePath: string; // 文件路径 // File path
    fileType: 'image' | 'video' | 'document'; // 文件类型 // File type
    fileSize: number; // 文件大小（字节） // File size (bytes)
    uploadTime: Date; // 上传时间 // Upload time
    operator: string; // 最近一次操作者 // Last operator
    creator: string; // 创建者 // Creator
    createTime: Date; // 创建时间 // Creation time
    updateTime: Date; // 更新时间 // Update time
}