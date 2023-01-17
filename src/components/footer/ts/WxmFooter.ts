import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useTabbarStore } from '../../../stores/system'
import { useCartGoodsCountStore } from '../../../stores/cart'
export const init = () => {
    // 路由
    const router = useRouter()
    // store
    const tabbarStore = useTabbarStore()
    //
    const active = computed(() => tabbarStore.active)
    const changeActive = tabbarStore.changeActive

    const cartGoodsCountStore=useCartGoodsCountStore()
    const goodsCount=computed(()=>cartGoodsCountStore.goodsCount)
    // methods
    // tabbar 标签栏改变时触发
    const handleChange = (currentActive: number | string) => {
        switch (currentActive) {
            case 0:
                changeActive(currentActive)
                router.push('/home')
                break;
            case 1:
                changeActive(currentActive)
                router.push('/categorize')
                break;
            case 2:
                changeActive(currentActive)
                router.push('/cart')
                break;
            case 3:
                changeActive(currentActive)
                router.push('/userCenter')
                break;
        }
    }
    return {
        active,goodsCount,handleChange
    }
}