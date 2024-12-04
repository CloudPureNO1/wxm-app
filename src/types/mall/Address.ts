// 在 TypeScript 中，import type 是一种特殊的导入语法，专门用于导入类型（如接口、类型别名等）。当你使用 import type 时，你明确地告诉 TypeScript 编译器，你只关心导入的类型信息，而不会在运行时使用这些导入的值
import type { ICreator, IOperator } from "./Base"

export interface IAddress{
    // 地址ID - Address ID
    // The unique identifier for the delivery address
    addressId: string;
    // 用户ID - User ID
    // The unique identifier for the user
    userId: string;
    // 收件人姓名 - Receiver Name
    // The name of the person receiving the delivery
    receiverName: string;
    // 联系电话 - Phone Number
    // The phone number for contact purposes
    phone: string;
    // 省份 - Province
    // The province part of the delivery address
    province: string;
    // 城市 - City
    // The city part of the delivery address
    city: string;
    // 区县 - District
    // The district part of the delivery address
    district: string;
    // 详细地址 - Address Line
    // The detailed street address for delivery
    addressLine: string;
    // 是否默认地址 - Is Default Address
    // Whether this address is the default delivery address
    isDefault: boolean;
}

export type TAddress = IAddress & ICreator & IOperator;

// 收货地址表 - MallAddress Table
// 商家收货地址定义
// Definition of merchant delivery addresses
export interface IMallAddress {
    // 地址ID - Address ID
    // The unique identifier for the delivery address
    addressId: string;
    // 用户ID - User ID
    // The unique identifier for the user
    userId: string;
    // 收件人姓名 - Receiver Name
    // The name of the person receiving the delivery
    receiverName: string;
    // 联系电话 - Phone Number
    // The phone number for contact purposes
    phone: string;
    // 省份 - Province
    // The province part of the delivery address
    province: string;
    // 城市 - City
    // The city part of the delivery address
    city: string;
    // 区县 - District
    // The district part of the delivery address
    district: string;
    // 详细地址 - Address Line
    // The detailed street address for delivery
    addressLine: string;
    // 是否默认地址 - Is Default Address
    // Whether this address is the default delivery address
    isDefault: boolean;
    // 最近一次操作者 - Operator
    // The person who last updated the address
    operator: string;
    // 创建者 - Creator
    // The person who created the address
    creator: string;
    // 创建时间 - Create Time
    // The time when the address was created
    createTime: Date;
    // 更新时间 - Update Time
    // The time when the address was last updated
    updateTime: Date;
}