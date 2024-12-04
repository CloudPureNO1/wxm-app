import type { IBasePromotion } from '../../../types/mall/Promotion'
import type { IGoods } from '../../../types/mall/Mall'
import type { IBaseCart } from '../../../types/mall/Cart'
import type { IBaseCategory } from '../../../types/mall/Category'
import { ref, onMounted } from 'vue'
import WxmFooter from '../../../components/footer/vue/WxmFooter.vue'
import { useCartGoodsStore } from '../../../stores/cart'
import { useLoadImg } from '../../../composable/staticImgUtil'
export const init = () => {
    // store
    const { addCartGoodsCount } = useCartGoodsStore()
    // 响应式变量
    const searchValue = ref<string>('')
    const activeLeft = ref<number>(0)
    const ctHeight = ref<string>('0px')
    const topH = ref<number>(0)
    const bottomH = ref<number>(0)
    const footerH=ref<number>(0)
    const menuList = ref<Array<IBaseCategory>>([])

    const menuListData: Array<IBaseCategory> = [
        { categoryId: 'sell', categoryName: '推荐、促销' },
        { categoryId: 'mobile', categoryName: '手机通讯' },
        { categoryId: 'householdAppliances', categoryName: '家电电器' },
        { categoryId: 'digital', categoryName: '数码' },
        { categoryId: 'computer, office', categoryName: '电脑、办公' },
        { categoryId: 'leatherBags', categoryName: '箱包皮具' },
        { categoryId: 'present', categoryName: '礼品' },
        { categoryId: 'personalCare', categoryName: '个人护理' },
        { categoryId: 'food', categoryName: '食品' },
        { categoryId: 'wine,drink', categoryName: '酒水、饮料' },
        { categoryId: 'homeTextiles', categoryName: '家纺' },
        { categoryId: 'medicalCare', categoryName: '医疗保健' },
        { categoryId: 'stationery', categoryName: '文具' },
        { categoryId: 'movement', categoryName: '运动' }
    ]
    menuList.value = menuListData

    const title = ref<string>('')
    const goodsData = ref<Array<IGoods>>([]);

    const loading = ref<boolean>(false);
    const finished = ref<boolean>(false);

    const showBall = ref<boolean>(false)
    const imgSrcBall = ref<string>('')
    const elBall = ref<any>(null)
    const horizBallStyle = ref<any>({
        position: 'fixed',
        left: '25px',
        bottom: '20px'
    })
    const ballStyle = ref<any>({
        width: '40px',
        height: '40px'
    })

    const endFlag = ref<boolean>(false)

    // 函数
    const loadDiscountClass = (discount: IBasePromotion) => {
        if (discount.type === 'percentage' || discount.type === 'fixed_amount') return 'font reduce'
        if (discount.type === 'buy_x_get_y') return 'font gift'
        if (discount.type === 'spend_&_save') return 'font vouchers'
        return ''
    }

    const loadGoods = (categoryId?: string) => {
        console.log('>>>>>>', categoryId)
        const discounts: IBasePromotion[] = [
            {
                promotionId: '10001',
                promotionName: '一件减￥31',
                type: 'fixed_amount',
                value: 31
            },
            {
                promotionId: '10002',
                promotionName: '赠送一条毛巾',
                type: 'buy_x_get_y',
                value: 0
            },
            {
                promotionId: '10003',
                promotionName: '满200减30',
                type: 'spend_&_save',
                value: 30
            }

        ]
        const discounts1: IBasePromotion[] = [
            {
                promotionId: '10001',
                promotionName: '一件减￥31',
                type: 'fixed_amount',
                value: 31
            },
            {
                promotionId: '10003',
                promotionName: '满200减30',
                type: 'spend_&_save',
                value: 30
            }
        ]


        const discounts2: IBasePromotion[] = [
            {
                promotionId: '10002',
                promotionName: '赠送一条毛巾',
                type: 'buy_x_get_y',
                value: 0
            },
            {
                promotionId: '10003',
                promotionName: '满200减30',
                type: 'spend_&_save',
                value: 30
            }
        ]
        const discounts3: IBasePromotion[] = [
            {
                promotionId: '10001',
                promotionName: '8.8折',
                type: 'percentage',
                value: 8.8
            },
            {
                promotionId: '10002',
                promotionName: '赠送一条毛巾',
                type: 'buy_x_get_y',
                value: 0
            },
        ]
        const data: Array<IGoods> = [
            {
                productId: '1001',
                mainImageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                description: 'apple-iphone28 Plus 12cmx15cm',
                discountedPrice: 130,
                originalPrice: 150,
                stock:0,
                soldCount:0,
                title: '佳农 烟台苹果 红富士 一级果 10斤装 苹果 单果重约160g-200g 生鲜水果',
                discounts: discounts
            },
            {
                productId: '1002',
                mainImageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                description: 'apple-iphone28 Plus 12cmx15cm',
                discountedPrice: 130,
                originalPrice: 150,
                stock:0,
                soldCount:0,
                title: '佳农 烟台苹果 红富士 一级果 10斤装 苹果 单果重约160g-200g 生鲜水果',
                discounts: discounts1
            },
            {
                productId: '1003',
                mainImageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                description: 'apple-iphone28 Plus 12cmx15cm',
                discountedPrice: 130,
                originalPrice: 150,
                stock:0,
                soldCount:0,
                title: '佳农 烟台苹果 红富士 一级果 10斤装 苹果 单果重约160g-200g 生鲜水果',
                discounts: discounts2
            },
            {
                productId: '1004',
                mainImageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                description: 'apple-iphone28 Plus 12cmx15cm',
                discountedPrice: 130,
                originalPrice: 150,
                stock:0,
                soldCount:0,
                title: '佳农 烟台苹果 红富士 一级果 10斤装 苹果 单果重约160g-200g 生鲜水果',
                discounts: discounts3
            },
            {
                productId: '1005',
                mainImageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                description: 'apple-iphone28 Plus 12cmx15cm',
                discountedPrice: 130,
                originalPrice: 150,
                stock:0,
                soldCount:0,
                title: '佳农 烟台苹果 红富士 一级果 10斤装 苹果 单果重约160g-200g 生鲜水果',
                discounts: discounts3
            },
            {
                productId: '1006',
                mainImageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                description: 'apple-iphone28 Plus 12cmx15cm',
                discountedPrice: 130,
                originalPrice: 150,
                stock:0,
                soldCount:0,
                title: '佳农 烟台苹果 红富士 一级果 10斤装 苹果 单果重约160g-200g 生鲜水果',
                discounts: discounts3
            },
            {
                productId: '1007',
                mainImageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                description: 'apple-iphone28 Plus 12cmx15cm',
                discountedPrice: 130,
                originalPrice: 150,
                stock:0,
                soldCount:0,
                title: '佳农 烟台苹果 红富士 一级果 10斤装 苹果 单果重约160g-200g 生鲜水果',
                discounts: discounts3
            },
            {
                productId: '1008',
                mainImageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                description: 'apple-iphone28 Plus 12cmx15cm',
                discountedPrice: 130,
                originalPrice: 150,
                stock:0,
                soldCount:0,
                title: '佳农 烟台苹果 红富士 一级果 10斤装 苹果 单果重约160g-200g 生鲜水果',
                discounts: discounts3
            },
            {
                productId: '1009',
                mainImageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                description: 'apple-iphone28 Plus 12cmx15cm',
                discountedPrice: 130,
                originalPrice: 150,
                stock:0,
                soldCount:0,
                title: '佳农 烟台苹果 红富士 一级果 10斤装 苹果 单果重约160g-200g 生鲜水果',
                discounts: discounts3
            },
            {
                productId: '10011',
                mainImageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                description: 'apple-iphone28 Plus 12cmx15cm',
                discountedPrice: 130,
                originalPrice: 150,
                stock:0,
                soldCount:0,
                title: '佳农 烟台苹果 红富士 一级果 10斤装 苹果 单果重约160g-200g 生鲜水果',
                discounts: discounts3
            },
            {
                productId: '10012',
                mainImageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                description: 'apple-iphone28 Plus 12cmx15cm',
                discountedPrice: 130,
                originalPrice: 150,
                stock:0,
                soldCount:0,
                title: '佳农 烟台苹果 红富士 一级果 10斤装 苹果 单果重约160g-200g 生鲜水果',
                discounts: discounts3
            },
            {
                productId: '10013',
                mainImageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                description: 'apple-iphone28 Plus 12cmx15cm',
                discountedPrice: 130,
                originalPrice: 150,
                stock:0,
                soldCount:0,
                title: '佳农 烟台苹果 红富士 一级果 10斤装 苹果 单果重约160g-200g 生鲜水果',
                discounts: discounts3
            },
            {
                productId: '10014',
                mainImageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                description: 'apple-iphone28 Plus 12cmx15cm',
                discountedPrice: 130,
                originalPrice: 150,
                stock:0,
                soldCount:0,
                title: '佳农 烟台苹果 红富士 一级果 10斤装 苹果 单果重约160g-200g 生鲜水果',
                discounts: discounts3
            },
            {
                productId: '10015',
                mainImageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                description: 'apple-iphone28 Plus 12cmx15cm',
                discountedPrice: 130,
                originalPrice: 150,
                stock:0,
                soldCount:0,
                title: '佳农 烟台苹果 红富士 一级果 10斤装 苹果 单果重约160g-200g 生鲜水果',
                discounts: discounts3
            },
            {
                productId: '10016',
                mainImageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                description: 'apple-iphone28 Plus 12cmx15cm',
                discountedPrice: 130,
                originalPrice: 150,
                stock:0,
                soldCount:0,
                title: '佳农 烟台苹果 红富士 一级果 10斤装 苹果 单果重约160g-200g 生鲜水果',
                discounts: discounts3
            }
        ]

        goodsData.value.push(...data)
    }
    const showGoods = (item: IBaseCategory) => {
        console.log('>>>>', item)
        title.value = item.categoryName
        loadGoods(item.categoryId)
    }


    const loadMorePosts = () => {
        // 异步更新数据
        // setTimeout 仅做示例，真实场景中一般为 ajax 请求

        console.log('111111111111111')
        const discounts: IBasePromotion[] = [
            {
                promotionId: '10001',
                promotionName: '一件减￥31',
                type: 'fixed_amount',
                value: 31
            },
            {
                promotionId: '10002',
                promotionName: '赠送一条毛巾',
                type: 'buy_x_get_y',
                value: 0
            },
            {
                promotionId: '10003',
                promotionName: '满200减30',
                type: 'spend_&_save',
                value: 30
            }

        ]
        const discounts1: IBasePromotion[] = [
            {
                promotionId: '10001',
                promotionName: '一件减￥31',
                type: 'fixed_amount',
                value: 31
            },
            {
                promotionId: '10003',
                promotionName: '满200减30',
                type: 'spend_&_save',
                value: 30
            }
        ]


        const discounts2: IBasePromotion[] = [
            {
                promotionId: '10002',
                promotionName: '赠送一条毛巾',
                type: 'buy_x_get_y',
                value: 0
            },
            {
                promotionId: '10003',
                promotionName: '满200减30',
                type: 'spend_&_save',
                value: 30
            }
        ]
        const discounts3: IBasePromotion[] = [
            {
                promotionId: '10001',
                promotionName: '8.8折',
                type: 'percentage',
                value: 8.8
            },
            {
                promotionId: '10002',
                promotionName: '赠送一条毛巾',
                type: 'buy_x_get_y',
                value: 0
            },
        ]
        const data: Array<IGoods> = [
            {
                productId: '10017',
                mainImageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                description: 'apple-iphone28 Plus 12cmx15cm',
                discountedPrice: 130,
                originalPrice: 150,
                stock:0,
                soldCount:0,
                title: '佳农 生鲜水果',
                discounts: discounts
            },
            {
                productId: '10018',
                mainImageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                description: 'apple-iphone28 Plus 12cmx15cm',
                discountedPrice: 130,
                originalPrice: 150,
                stock:0,
                soldCount:0,
                title: '佳农生鲜水果',
                discounts: discounts1
            },
            {
                productId: '10019',
                mainImageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                description: 'apple-iphone28 Plus 12cmx15cm',
                discountedPrice: 130,
                originalPrice: 150,
                stock:0,
                soldCount:0,
                title: '佳农 生鲜水果',
                discounts: discounts2
            },
            {
                productId: '100111',
                mainImageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                description: 'apple-iphone28 Plus 12cmx15cm',
                discountedPrice: 130,
                originalPrice: 150,
                stock:0,
                soldCount:0,
                title: '佳农  生鲜水果',
                discounts: discounts3
            }]
        goodsData.value.push(...data)
    };
    const onLoad = () => {
        // 异步更新数据
        // setTimeout 仅做示例，真实场景中一般为 ajax 请求
        loadMorePosts()
        // 加载状态结束
        loading.value = false;
    };

 
  
 

    const width =ref<number>(0)
    const height =ref<number>(0)
    const addCart = (item: IGoods, ev: any) => {
        const rect = document.querySelector('.category_content .van-image__img')?.getBoundingClientRect()
        const left = rect!.left as number
        width.value = rect!.width as number
        height.value = rect!.height as number
        horizBallStyle.value = {
            position: 'fixed',
            left: `${left}px !important`,
            bottom: '20px',
        }
        ballStyle.value = {
            width: `${width.value}px`,
            height: `${height.value}px`
        }

        castBall(item, ev.target)
        if (endFlag.value) {
            const baseCart: IBaseCart = {
                productId: item.productId,
                quantity: 1
            }
            addCartGoodsCount(baseCart) // 购物车数量加1
        }
    };


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
        const y = rect!.top - window.innerHeight + 40;
        // let y = rect!.top;
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
            el.style.webkitTransform = `translate3d(${leftCart + widthCart / 2-width.value}px,0,0)`;
            el.style.transform = `translate3d(${leftCart + widthCart / 2-width.value}px,0,0)`;

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

    // 生命周期函数
    onMounted(() => {
        loadGoods()
        const element: any = document.querySelector('.search-sticky')
        if (element) {
            topH.value = element.offsetHeight
        }
        const elementBottom: any = document.querySelector('.category-footer')
        if (elementBottom) {
            bottomH.value = elementBottom.offsetHeight
        }
        ctHeight.value = (window.screen.height - topH.value - bottomH.value) + 'px'

        const eleFooter:any=document.querySelector('.wxm-footer')
        if(eleFooter){
            footerH.value=eleFooter.offsetHeight
        }
        footerH.value=document.documentElement.clientHeight-footerH.value-topH.value
    })

    return {
        WxmFooter,
        searchValue, activeLeft, ctHeight, topH, menuList, title, goodsData,
        loading, finished, footerH, showBall, imgSrcBall, horizBallStyle, ballStyle,
        loadDiscountClass,showGoods, onLoad, addCart, ballBeforeEnter, ballEnter,ballAfterEnter,
    }
}