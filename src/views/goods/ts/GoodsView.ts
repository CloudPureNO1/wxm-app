import { computed, ref } from 'vue'
import { useRouter, useRoute } from "vue-router"
import GoodsCard from '../../../components/goodsCard/vue/GoodsCard.vue'
import { useCartGoodsCountStore } from '../../../stores/cart'
import { useTabbarStore } from '../../../stores/system'
export const init = () => {
    // 路由
    const router = useRouter()
    const route = useRoute()
    // store
    const cartGoodsCountStore=useCartGoodsCountStore()
    const goodsCount=computed(()=>cartGoodsCountStore.goodsCount)

    const {changeActive} = useTabbarStore()
    // 响应式变量
    // const goodsType=ref<string>(route.params.goodsType as string)
    const title = ref<string>(route.params.title as string)


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
        title,goodsCount,
        handleClickLeft,showCart
    }
}