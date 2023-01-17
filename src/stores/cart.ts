import { ref } from "vue";
import { defineStore } from "pinia";
 

export const useCartGoodsCountStore=defineStore('cartGoodsCount',()=>{
    const goodsCount=ref<number>(0)
    const changeCartGoodsCount=(count:number)=>{
        goodsCount.value=count
    }
    const addCartGoodsCount=()=>{
        goodsCount.value++
    }
    return {goodsCount,changeCartGoodsCount,addCartGoodsCount}
})