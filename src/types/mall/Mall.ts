import type { IBasePromotion } from "./Promotion"
import type { IProduct } from "./Product"

export interface IGoods extends IProduct {
    discounts?:IBasePromotion[]
}

