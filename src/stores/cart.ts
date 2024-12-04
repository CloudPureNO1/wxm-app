import type { IBaseCart } from './../types/mall/Cart';
import { ref } from "vue";
import { defineStore } from "pinia";

// 定义store
export const useCartGoodsStore = defineStore('cartGoodsStore', () => {

    const cartGoods = ref<IBaseCart[]>([])
    // 方法用于更改商品数量
    const changeCartGoodsCount = (baseCart: IBaseCart) => {
        if (cartGoods.value.length === 0) {
            cartGoods.value.push(baseCart)
        } else {
            cartGoods.value.forEach((item: IBaseCart) => {
                if (item.productId === baseCart.productId) {
                    item.quantity = baseCart.quantity
                }
            })
        }
    }

    // 方法用于增加/减少商品数量
    const addCartGoodsCount = (baseCart: IBaseCart) => {
        cartGoods.value.forEach((item: IBaseCart) => {
            if (item.productId === baseCart.productId) {
                item.quantity += baseCart.quantity
            }
        })
        cartGoods.value = cartGoods.value.filter((item: IBaseCart) => item.quantity > 0)
    }

    // 返回store中的状态和方法
    return { cartGoods, changeCartGoodsCount, addCartGoodsCount }
})