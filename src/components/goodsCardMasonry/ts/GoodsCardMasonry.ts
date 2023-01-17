import { useRouter } from 'vue-router';
import type { GoodsType } from '../../../types/disCount'
import { useCartGoodsCountStore } from '../../../stores/cart'
import { showSuccessToast } from 'vant';
export const init = (type?:string) => {
    // 路由
    const router = useRouter()
    // store
    const {addCartGoodsCount}=useCartGoodsCountStore()
    // methods

    const showGoodsInfo = (item: GoodsType) => {
        router.push({
            path: '/goodsInfo',
            query: {
                goodsId: item.goodsId
            }
        })
    }
    const createBall=(left: number, top: number)=> {

        const bar = document.createElement('div');
        bar.style.position = 'absolute'
        bar.style.left = (left) + 'px'
        bar.style.top = (top) + 'px'
        bar.style.width = '0.533333rem'
        bar.style.height = '0.533333rem'
        bar.style.borderRadius = '50%'
        bar.style.backgroundColor = '#f70606'
        bar.style.transition = 'left .6s linear, top .6s cubic-bezier(0.5, -0.5, 1, 1)'
    
        // bar.style.zIndex = '9999999'
    
        document.body.appendChild(bar)
        // 添加动画属性
        setTimeout(() => {
            const screenWidth = window.screen.width as number
            const bFlag: boolean = left > screenWidth / 2 ? true : false
    
            const target = document.querySelector('.wxm-cart-footer') as any
            bar.style.left = (bFlag ? (target.offsetLeft + target.offsetWidth / 5) : (target.offsetLeft + target.offsetWidth / 3 * 2)) + 'px'
            // let targetF = document.querySelector('.wxm-footer') as any
            const targetF = document.getElementById('footerIdHome') as any
            const top = targetF?.offsetTop as number
            // const height=targetF?.offsetHeight as number
            const targetY = top
            bar.style.top = (targetY) + 'px'
        }, 0);
    
        // changeCartGoodsCount(22)
        addCartGoodsCount()
    
        /**
         * 动画结束后，删除自己
         */
        bar.ontransitionend = function () {
            bar.remove()
        }
    }

    const addCart = (e: any, item: GoodsType) => {
        console.log('添加商品到购物车：>>>>', item.goodsId)
    
 

        // 首界面，进行贝尔曲线 添加购物车动画
        if(type&&type==='Home'){
            const x = e.pageX;
            const y = e.pageY;
            createBall(x, y)
        }else{
            addCartGoodsCount()
            showSuccessToast('加入购物车成功！');
        }
    
    }
    return {
        showGoodsInfo,addCart
    }
}