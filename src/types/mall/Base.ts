
/**
 * 创建者 信息
 */
export interface ICreator {
    creator?: string | null; // 创建者
    createTime?: Date | null; // 创建时间
}

/**
 * 当前操作者接口
 */
export interface IOperator {
    operator?: string | null; // 最近一次操作者
    updateTime?: Date | null; // 更新时间
}
