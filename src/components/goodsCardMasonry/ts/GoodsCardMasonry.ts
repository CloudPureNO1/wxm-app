import type { IGoods } from '../../../types/mall/Mall'
import type { IBaseCart } from '../../../types/mall/Cart';
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { useCartGoodsStore } from '../../../stores/cart'
import { showSuccessToast } from 'vant';
import { useLoadImg } from '../../../composable/staticImgUtil'
import type { IBasePromotion } from '@/types/mall/Promotion';

export const init = (type?: string) => {
    // 路由
    const router = useRouter()
    // store
    const { addCartGoodsCount } = useCartGoodsStore()

    // 响应式变量
    const showBall = ref<boolean>(false)
    const imgSrcBall = ref<string>('')
    const elBall = ref<any>(null)
    const horizBallStyle = ref<any>({
        position: 'fixed',
        left: '25px',
        bottom: `0px`,
    })
    const ballStyle = ref<any>({
        width: '40px',
        height: '40px'
    })
    const width = ref<number>(0)
    const height = ref<number>(0)
    const endFlag = ref<boolean>(false)

    // methods

    const loadDiscountClass = (discount: IBasePromotion)=>{
        if (discount.type === 'percentage' || discount.type === 'fixed_amount') return 'font reduce'
        if (discount.type === 'buy_x_get_y') return 'font gift'
        if (discount.type === 'spend_&_save') return 'font vouchers'
        return ''
    }

    const showGoodsInfo = (productId: string) => {
        router.push({
            path: '/goodsInfo',
            query: {
                productId: productId
            }
        })
    }


    const addCart = (e: any, item: IGoods) => {
        console.log('添加商品到购物车：>>>>', item.productId)
        // 首界面，进行贝尔曲线 添加购物车动画
        if (type && type === 'Home') {
            // const rect = document.querySelector('.goods-content .wxm-img')?.getBoundingClientRect()
            const rect = e.target.parentNode.parentNode.parentNode.querySelector('.wxm-img')?.getBoundingClientRect()
            const left = rect!.left as number
            width.value = rect!.width as number
            height.value = rect!.height as number
            horizBallStyle.value = {
                position: 'fixed',
                left: `${left}px !important`,
                bottom: `0px`,
            }
            ballStyle.value = {
                width: `${width.value}px`,
                height: `${height.value}px`
            }

            castBall(item, e.target)
            if(endFlag.value){
                const baseCart: IBaseCart = {
                    productId: item.productId,
                    quantity: 1
                }
                addCartGoodsCount(baseCart) // 购物车数量加1
            }
        } else {
            const baseCart: IBaseCart = {
                productId: item.productId,
                quantity: 1
            }
            addCartGoodsCount(baseCart)
            showSuccessToast('加入购物车成功！');
        }
    }

    const castBall = (item: any, el: any) => {
        endFlag.value=false
        // 找到第一个show为false（可用）的小球，然后就跳出循环
        showBall.value = true;
        imgSrcBall.value = useLoadImg(item.mainImageUrl)

        elBall.value = el

        // castBalls.value.push(ball);
    };

    const ballBeforeEnter = (el: any) => {


        const rect = elBall.value?.getBoundingClientRect();

        // let x = rect!.left - 40;
        // const y = rect!.top - window.innerHeight + 40;
        const y = rect!.top - window.innerHeight + 40;
        // const y = rect!.top;
        // el.style.webkitTransform = `translate3d(${x}px,0,0)`;
        // el.style.transform = `translate3d(${x}px,0,0)`;
        el.style.webkitTransform = `translate3d(0,0,0)`;
        el.style.transform = `translate3d(0,0,0)`;
        // 直接设置在样式中，因为过渡是用在父元素中，子元素图片实现scale 放大和缩小，而不影响父元素的过渡效果
        // el.style.transition="0.4s all cubic-bezier(0.49, -0.29, 0.75, 0.41)"

        const child = el.children[0];

        // transform :translate3d 实现x,y,z轴的转换， scale 设置放大和缩小，在子元素中
        child.style.transform = `translate3d(0,${y}px,0) scale(0.75)`;
        child.style.webkitTransform = `translate3d(0,${y}px,0)  scale(0.75)`;


    };
    const ballEnter = (el: any, done: any) => {

        el.timer = setTimeout(() => {

            // const left = document.getElementById('cartCenterId')?.getBoundingClientRect().left as number
            const leftCart = document.querySelector('.wxm-cart-footer .van-tabbar-item__icon')?.getBoundingClientRect().left as number
            const widthCart = document.querySelector('.wxm-cart-footer .van-tabbar-item__icon')?.getBoundingClientRect().width as number
            el.style.webkitTransform = `translate3d(${leftCart + widthCart / 2 - width.value}px,0,0)`;
            el.style.transform = `translate3d(${leftCart + widthCart / 2 - width.value}px,0,0)`;

            const child = el.children[0];
            // transform :translate3d 实现x,y,z轴的转换， scale 设置放大和缩小，在子元素中，
            // 通过transition 实现过渡 
            // child.style.transform = `translate3d(0,0,0) scale(0.15)`;
            // child.style.webkitTransform = `translate3d(0,0,0) scale(0.15)`;


            child.style.transform = `translate3d(0,0,0) scale(0.15)`;
            child.style.webkitTransform = `translate3d(0,0,0) scale(0.15)`;

            el.addEventListener("transitionEnd", done);
            el.addEventListener("webkitTransitionEnd", done);


        }, 30);

    };
    const ballAfterEnter = (el: any) => {
        clearTimeout(el.timer);
        showBall.value = false

        endFlag.value=true
        el.style.display = "none";
    };



    return {
        showBall, imgSrcBall, horizBallStyle, ballStyle,
        loadDiscountClass,showGoodsInfo, addCart, ballBeforeEnter, ballEnter, ballAfterEnter
    }
}