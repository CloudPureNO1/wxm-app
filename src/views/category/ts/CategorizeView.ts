import { ref, onMounted } from 'vue'
import WxmFooter from '../../../components/footer/vue/WxmFooter.vue'
import type { SidebarType } from '../../../types/Sidebar'
import type { DisCountType, GoodsType } from '../../../types/disCount'
import { useCartGoodsCountStore } from '../../../stores/cart'
export const init = () => {
    // store
    const {addCartGoodsCount}=useCartGoodsCountStore()
    // 响应式变量
    const searchValue = ref<string>('')
    const activeLeft = ref<number>(0)
    const ctHeight = ref<string>('0px')
    const topH = ref<number>(0)
    const bottomH = ref<number>(0)
    const footerH=ref<number>(0)
    const menuList = ref<Array<SidebarType>>([])

    const menuListData: Array<SidebarType> = [
        { num: 1, category: 'sell', title: '推荐、促销' },
        { num: 2, category: 'mobile', title: '手机通讯' },
        { num: 3, category: 'householdAppliances', title: '家电电器' },
        { num: 4, category: 'digital', title: '数码' },
        { num: 5, category: 'computer, office', title: '电脑、办公' },
        { num: 6, category: 'leatherBags', title: '箱包皮具' },
        { num: 7, category: 'present', title: '礼品' },
        { num: 8, category: 'personalCare', title: '个人护理' },
        { num: 9, category: 'food', title: '食品' },
        { num: 10, category: 'wine,drink', title: '酒水、饮料' },
        { num: 11, category: 'homeTextiles', title: '家纺' },
        { num: 12, category: 'medicalCare', title: '医疗保健' },
        { num: 13, category: 'stationery', title: '文具' },
        { num: 14, category: 'movement', title: '运动' }
    ]
    menuList.value = menuListData

    const title = ref<string>('')
    const goodsData = ref<Array<GoodsType>>([]);

    const loading = ref<boolean>(false);
    const finished = ref<boolean>(false);


    // 函数
    const loadGoods = (category: string) => {
        console.log('>>>>>>', category)
        const discounts: DisCountType = {
            reduce: '一件减￥31',
            gift: '赠送一条毛巾',
            vouchers: '满200减30'
        }
        const discounts1: DisCountType = {
            reduce: '一件减￥31',
            // gift:'赠送一条毛巾',
            vouchers: '满200减30'
        }
        const discounts2: DisCountType = {
            // reduce:'一件减￥31',
            gift: '赠送一条毛巾',
            vouchers: '满200减30'
        }
        const discounts3: DisCountType = {
            // reduce:'一件减￥31',
            gift: '赠送一条毛巾',
            vouchers: '8.8折'
        }
        const data: Array<GoodsType> = [
            {
                goodsId: '1001',
                imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                introduction: 'apple-iphone28 Plus 12cmx15cm',
                presentPrice: '130',
                originalPrice: '150',
                currency: '￥',
                title: '佳农 烟台苹果 红富士 一级果 10斤装 苹果 单果重约160g-200g 生鲜水果',
                discounts: discounts
            },
            {
                goodsId: '1002',
                imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                introduction: 'apple-iphone28 Plus 12cmx15cm',
                presentPrice: '130',
                originalPrice: '150',
                currency: '￥',
                title: '佳农 烟台苹果 红富士 一级果 10斤装 苹果 单果重约160g-200g 生鲜水果',
                discounts: discounts1
            },
            {
                goodsId: '1003',
                imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                introduction: 'apple-iphone28 Plus 12cmx15cm',
                presentPrice: '130',
                originalPrice: '150',
                currency: '￥',
                title: '佳农 烟台苹果 红富士 一级果 10斤装 苹果 单果重约160g-200g 生鲜水果',
                discounts: discounts2
            },
            {
                goodsId: '1004',
                imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                introduction: 'apple-iphone28 Plus 12cmx15cm',
                presentPrice: '130',
                originalPrice: '150',
                currency: '￥',
                title: '佳农 烟台苹果 红富士 一级果 10斤装 苹果 单果重约160g-200g 生鲜水果',
                discounts: discounts3
            },
            {
                goodsId: '1005',
                imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                introduction: 'apple-iphone28 Plus 12cmx15cm',
                presentPrice: '130',
                originalPrice: '150',
                currency: '￥',
                title: '佳农 烟台苹果 红富士 一级果 10斤装 苹果 单果重约160g-200g 生鲜水果',
                discounts: discounts3
            },
            {
                goodsId: '1006',
                imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                introduction: 'apple-iphone28 Plus 12cmx15cm',
                presentPrice: '130',
                originalPrice: '150',
                currency: '￥',
                title: '佳农 烟台苹果 红富士 一级果 10斤装 苹果 单果重约160g-200g 生鲜水果',
                discounts: discounts3
            },
            {
                goodsId: '1007',
                imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                introduction: 'apple-iphone28 Plus 12cmx15cm',
                presentPrice: '130',
                originalPrice: '150',
                currency: '￥',
                title: '佳农 烟台苹果 红富士 一级果 10斤装 苹果 单果重约160g-200g 生鲜水果',
                discounts: discounts3
            },
            {
                goodsId: '1008',
                imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                introduction: 'apple-iphone28 Plus 12cmx15cm',
                presentPrice: '130',
                originalPrice: '150',
                currency: '￥',
                title: '佳农 烟台苹果 红富士 一级果 10斤装 苹果 单果重约160g-200g 生鲜水果',
                discounts: discounts3
            },
            {
                goodsId: '1009',
                imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                introduction: 'apple-iphone28 Plus 12cmx15cm',
                presentPrice: '130',
                originalPrice: '150',
                currency: '￥',
                title: '佳农 烟台苹果 红富士 一级果 10斤装 苹果 单果重约160g-200g 生鲜水果',
                discounts: discounts3
            },
            {
                goodsId: '10011',
                imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                introduction: 'apple-iphone28 Plus 12cmx15cm',
                presentPrice: '130',
                originalPrice: '150',
                currency: '￥',
                title: '佳农 烟台苹果 红富士 一级果 10斤装 苹果 单果重约160g-200g 生鲜水果',
                discounts: discounts3
            },
            {
                goodsId: '10012',
                imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                introduction: 'apple-iphone28 Plus 12cmx15cm',
                presentPrice: '130',
                originalPrice: '150',
                currency: '￥',
                title: '佳农 烟台苹果 红富士 一级果 10斤装 苹果 单果重约160g-200g 生鲜水果',
                discounts: discounts3
            },
            {
                goodsId: '10013',
                imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                introduction: 'apple-iphone28 Plus 12cmx15cm',
                presentPrice: '130',
                originalPrice: '150',
                currency: '￥',
                title: '佳农 烟台苹果 红富士 一级果 10斤装 苹果 单果重约160g-200g 生鲜水果',
                discounts: discounts3
            },
            {
                goodsId: '10014',
                imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                introduction: 'apple-iphone28 Plus 12cmx15cm',
                presentPrice: '130',
                originalPrice: '150',
                currency: '￥',
                title: '佳农 烟台苹果 红富士 一级果 10斤装 苹果 单果重约160g-200g 生鲜水果',
                discounts: discounts3
            },
            {
                goodsId: '10015',
                imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                introduction: 'apple-iphone28 Plus 12cmx15cm',
                presentPrice: '130',
                originalPrice: '150',
                currency: '￥',
                title: '佳农 烟台苹果 红富士 一级果 10斤装 苹果 单果重约160g-200g 生鲜水果',
                discounts: discounts3
            },
            {
                goodsId: '10016',
                imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                introduction: 'apple-iphone28 Plus 12cmx15cm',
                presentPrice: '130',
                originalPrice: '150',
                currency: '￥',
                title: '佳农 烟台苹果 红富士 一级果 10斤装 苹果 单果重约160g-200g 生鲜水果',
                discounts: discounts3
            }
        ]

        goodsData.value.push(...data)
    }
    const showGoods = (item: SidebarType) => {
        console.log('>>>>', item)
        title.value = item.title
        loadGoods(item.category)
    }


    const loadMorePosts = () => {
        // 异步更新数据
        // setTimeout 仅做示例，真实场景中一般为 ajax 请求

        console.log('111111111111111')
        const discounts: DisCountType = {
            reduce: '一件减￥31',
            gift: '赠送一条毛巾',
            vouchers: '满200减30'
        }
        const discounts1: DisCountType = {
            reduce: '一件减￥31',
            // gift:'赠送一条毛巾',
            vouchers: '满200减30'
        }
        const discounts2: DisCountType = {
            // reduce:'一件减￥31',
            gift: '赠送一条毛巾',
            vouchers: '满200减30'
        }
        const discounts3: DisCountType = {
            // reduce:'一件减￥31',
            gift: '赠送一条毛巾',
            vouchers: '8.8折'
        }
        const data: Array<GoodsType> = [
            {
                goodsId: '10017',
                imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                introduction: 'apple-iphone28 Plus 12cmx15cm',
                presentPrice: '130',
                originalPrice: '150',
                currency: '￥',
                title: '佳农 生鲜水果',
                discounts: discounts
            },
            {
                goodsId: '10018',
                imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                introduction: 'apple-iphone28 Plus 12cmx15cm',
                presentPrice: '130',
                originalPrice: '150',
                currency: '￥',
                title: '佳农生鲜水果',
                discounts: discounts1
            },
            {
                goodsId: '10019',
                imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                introduction: 'apple-iphone28 Plus 12cmx15cm',
                presentPrice: '130',
                originalPrice: '150',
                currency: '￥',
                title: '佳农 生鲜水果',
                discounts: discounts2
            },
            {
                goodsId: '100111',
                imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                introduction: 'apple-iphone28 Plus 12cmx15cm',
                presentPrice: '130',
                originalPrice: '150',
                currency: '￥',
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

    //获得页面向左、向上卷动的距离
    const getScroll=()=> {
        const leftScroll =window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
        const topScroll=window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
        return { leftScroll,topScroll}
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
        bar.style.zIndex='999999'
    
    
        document.body.appendChild(bar)
        // 添加动画属性
        setTimeout(() => {
            const {leftScroll,topScroll}=getScroll()
            console.log('>>>>>scroll>>>',leftScroll,topScroll)
    
            const target = document.querySelector('.wxm-cart-footer') as any
            bar.style.left = (target.offsetLeft + target.offsetWidth / 2) + 'px'
    
            const targetF = document.getElementById('footerIdCategory') as any
            const top = targetF?.offsetTop as number
            const height = targetF?.offsetHeight as number
            const targetY = top  +topScroll -height/3*2
            bar.style.top = (targetY) + 'px'
        }, 0);
    
    
        addCartGoodsCount() // 购物车数量加1
        /**
         * 动画结束后，删除自己
         */
        bar.ontransitionend = function () {
            bar.remove()
        }
    }

    const addCart = (e: any, item: GoodsType) => {
        console.log('添加商品到购物车：>>>>', item.goodsId)
        const x = e.pageX;
        const y = e.pageY;
        createBall(x, y)
    }

    // 生命周期函数
    onMounted(() => {
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
        loading, finished,footerH,
        showGoods,onLoad,addCart
    }
}