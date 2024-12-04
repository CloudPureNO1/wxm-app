import type { IBaseCart } from '../../../types/mall/Cart'
import { computed, ref } from 'vue'
import { useRouter, useRoute } from "vue-router"
import GoodsCard from '../../../components/goodsCard/vue/GoodsCard.vue'
import { useCartGoodsStore } from '../../../stores/cart'
import { useTabbarStore } from '../../../stores/system'
export const init = () => {
    // 路由
    const router = useRouter()
    const route = useRoute()
    // store
    const cartGoodsStore = useCartGoodsStore()
    const cartGoods = computed(() => cartGoodsStore.cartGoods)
    const goodsCount = computed(() => cartGoods.value.reduce((quantity: number, item: IBaseCart) => quantity + item.quantity, 0))

    const {changeActive} = useTabbarStore()
    // 响应式变量
    // const goodsType=ref<string>(route.params.goodsType as string)
    const name = ref<string>(route.params.name as string)


    // methods
    const handleClickLeft = () => {
        router.go(-1)
    }
    const showCart=()=>{
        changeActive(2)
        router.push('/cart')
    }

    // 生命周期函数
    
    return {
        // 自定义组件
        GoodsCard,
        name,goodsCount,
        handleClickLeft,showCart
    }
}