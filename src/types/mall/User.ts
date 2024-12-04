// 在 TypeScript 中，import type 是一种特殊的导入语法，专门用于导入类型（如接口、类型别名等）。当你使用 import type 时，你明确地告诉 TypeScript 编译器，你只关心导入的类型信息，而不会在运行时使用这些导入的值
import type { ICreator, IOperator } from "./Base"

export interface IBaseUser{
    // 主键, Primary Key
    userId: string;
    // 用户名, Username
    username: string;
    // 用户类别：U-SUPER-ADMIN 超级管理员，U-ADMIN 系统管理员，U-MANAGER 系统管理员，U-BIZ 业务员，U-ORDINARY 普通用户, User type: U-SUPER-ADMIN Super Admin, U-ADMIN System Admin, U-MANAGER Manager, U-BIZ Biz User, U-ORDINARY Ordinary User
    userType: string;
    // 用户级别：NON-MEMBER 普通会员，SILVER-MEMBER 白银会员 GOLD-MEMBER 黄金会员 PLATINUM-MEMBER 白金会员 DIAMOND-MEMBER 钻石会员, User level: NON-MEMBER Normal Member, SILVER-MEMBER Silver Member, GOLD-MEMBER Gold Member, PLATINUM-MEMBER Platinum Member, DIAMOND-MEMBER Diamond Member
    userRate: string;
    // 0 无效，1 正常，2 注销，3锁定, Status: 0 Invalid, 1 Normal, 2注销, 3 Locked
    userStatus: string;
    // 昵称, Nickname
    nickname?: string | null;
    // 性别, Gender
    gender?: 'male' | 'female' | 'other' | null;
}

export interface IAcount{
    // 密码，密文, Password, encrypted
    passwd: string;
    // 账号过期时间, Account expiration time
    accountExpiredTime?: Date | null;
    // 密码过期时间, Password expiration time
    passwordExpiredTime?: Date | null;
    // 账号锁定时间, Account lock time
    lockTime?: Date | null;
    // 账号解锁时间, Account unlock time
    unlockTime?: Date | null;
}
export interface IAvatar{
    // 头像URL, Avatar URL
    avatarUrl?: string | null;
    // 头像资源ID, Avatar resource ID
    avatarResourceId?: number | null;
}

export interface IOthers {
    // 联系电话, Phone number
    phoneNumber?: string | null;
    // Facebook ID（社交账号关联）, Facebook ID (Social account association)
    facebookId?: string | null;
    // 微信OpenID（社交账号关联）, WeChat OpenID (Social account association)
    wechatOpenid?: string | null;
    // 座机, Landline
    tel?: string | null;
    // 邮箱, Email
    email?: string | null;
    // 生日, Birthday
    birthday?: Date | null;
    // 注册IP, Registration IP
    registrationIp?: string | null;
    // 注册时间, Registration time
    registerTime?: Date | null;
    // 最后登录时间, Last login time
    lastLogin?: Date | null;
    // 用户积分, Membership points
    membershipPoint?: number | null;
}

export interface ILoginUser extends IBaseUser, IAcount {
 
}

export interface IAvatarUser extends IBaseUser, IAvatar {

}

export interface IUser extends IBaseUser, IAcount, IAvatar , IOthers{

}

export type TUser = IUser & ICreator & IOperator;


 

// 用户表接口定义
// Interface definition for user table

export interface WxmUser {
    // 主键, Primary Key
    userId: string;
    // 用户名, Username
    username: string;
    // 密码，密文, Password, encrypted
    passwd: string;
    // 用户类别：U-SUPER-ADMIN 超级管理员，U-ADMIN 系统管理员，U-MANAGER 系统管理员，U-BIZ 业务员，U-ORDINARY 普通用户, User type: U-SUPER-ADMIN Super Admin, U-ADMIN System Admin, U-MANAGER Manager, U-BIZ Biz User, U-ORDINARY Ordinary User
    userType: string;
    // 用户级别：NON-MEMBER 普通会员，SILVER-MEMBER 白银会员 GOLD-MEMBER 黄金会员 PLATINUM-MEMBER 白金会员 DIAMOND-MEMBER 钻石会员, User level: NON-MEMBER Normal Member, SILVER-MEMBER Silver Member, GOLD-MEMBER Gold Member, PLATINUM-MEMBER Platinum Member, DIAMOND-MEMBER Diamond Member
    userRate: string;
    // 0 无效，1 正常，2 注销，3锁定, Status: 0 Invalid, 1 Normal, 2注销, 3 Locked
    userStatus: string;
    // 账号过期时间, Account expiration time
    accountExpiredTime?: Date | null;
    // 密码过期时间, Password expiration time
    passwordExpiredTime?: Date | null;
    // 账号锁定时间, Account lock time
    lockTime?: Date | null;
    // 账号解锁时间, Account unlock time
    unlockTime?: Date | null;
    // 描述, Description
    userDesc?: string | null;
    // 最近一次操作者, Last operator
    operator?: string | null;
    // 创建者, Creator
    creator?: string | null;
    // 创建时间, Creation time
    createTime?: Date | null;
    // 更新时间, Update time
    updateTime?: Date | null;
    // 联系电话, Phone number
    phoneNumber?: string | null;
    // Facebook ID（社交账号关联）, Facebook ID (Social account association)
    facebookId?: string | null;
    // 微信OpenID（社交账号关联）, WeChat OpenID (Social account association)
    wechatOpenid?: string | null;
    // 座机, Landline
    tel?: string | null;
    // 邮箱, Email
    email?: string | null;
    // 头像URL, Avatar URL
    avatarUrl?: string | null;
    // 昵称, Nickname
    nickname?: string | null;
    // 性别, Gender
    gender?: 'male' | 'female' | 'other' | null;
    // 头像资源ID, Avatar resource ID
    avatarResourceId?: number | null;
    // 生日, Birthday
    birthday?: Date | null;
    // 注册IP, Registration IP
    registrationIp?: string | null;
    // 注册时间, Registration time
    registerTime?: Date | null;
    // 最后登录时间, Last login time
    lastLogin?: Date | null;
    // 用户积分, Membership points
    membershipPoint?: number | null;
}