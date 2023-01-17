import { onMounted,onUnmounted, ref } from 'vue'
import type { DisCountType, GoodsType } from '../../../types/disCount'
import GoodsCardMasonry from '../../goodsCardMasonry/vue/GoodsCardMasonry.vue'
export const init = () => {
 
    // 响应式变量
    // 下拉刷新
    const refreshing = ref<boolean>(false);
    const goodsData = ref<Array<GoodsType>>([])
     // 滚动刷新数据时的外部容器 
     const scrollComponent = ref(null)

    // methods
    // 加载goodsData
    const initGoodsData=()=>{
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
                goodsId:'1001',
                imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                introduction: 'apple-iphone28 Plus 12cmx15cm',
                presentPrice: '￥130',
                originalPrice: '￥150',
                discounts: discounts
            },
            {
                goodsId:'1002',
                imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                introduction: 'apple-iphone28 Plus 12cmx15cm',
                presentPrice: '￥130',
                originalPrice: '￥150',
                discounts: discounts1
            },
            {
                goodsId:'1003',
                imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                introduction: 'apple-iphone28 Plus 12cmx15cm',
                presentPrice: '￥130',
                originalPrice: '￥150',
                discounts: discounts2
            },
            {
                goodsId:'1004',
                imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                introduction: 'apple-iphone28 Plus 12cmx15cm',
                presentPrice: '￥130',
                originalPrice: '￥150',
                discounts: discounts3
            },
            {
                goodsId:'1003',
                imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                introduction: 'apple-iphone28 Plus 12cmx15cm',
                presentPrice: '￥130',
                originalPrice: '￥150',
                discounts: discounts2
            },
            {
                goodsId:'1004',
                imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                introduction: 'apple-iphone28 Plus 12cmx15cm',
                presentPrice: '￥130',
                originalPrice: '￥150',
                discounts: discounts3
            },
            {
                goodsId:'1003',
                imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                introduction: 'apple-iphone28 Plus 12cmx15cm',
                presentPrice: '￥130',
                originalPrice: '￥150',
                discounts: discounts2
            },
            {
                goodsId:'1004',
                imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                introduction: 'apple-iphone28 Plus 12cmx15cm',
                presentPrice: '￥130',
                originalPrice: '￥150',
                discounts: discounts3
            }
        ]
        goodsData.value = data
    }

    // 下拉刷新数据
    const onRefresh = () => {
        // 重新加载数据
        onLoad();
    };
    // 加载数据
    const onLoad = () => {
        const discounts4: DisCountType = {
            // reduce:'一件减￥31',
            gift: '赠送一条毛巾赠送一条毛巾',
            vouchers: '8.8折'
        }
        const discounts5: DisCountType = {
            // reduce:'一件减￥31',
            gift: '赠送一条毛巾赠送一条毛巾',
            vouchers: '8.8折'
        }
        const data: Array<GoodsType> = [
            {
                goodsId: '2001',
                imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                introduction: 'apple-iphone28 Plus 12cmx15cm',
                presentPrice: '￥130',
                originalPrice: '￥150',
                discounts: discounts4
            },
            {
                goodsId: '2002',
                imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                introduction: 'apple-iphone28 Plus 12cmx15cm',
                presentPrice: '￥130',
                originalPrice: '￥150',
                discounts: discounts5
            },
            {
                goodsId: '2003',
                imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                introduction: 'apple-iphone28 Plus 12cmx15cm',
                presentPrice: '￥130',
                originalPrice: '￥150',
                discounts: discounts4
            },
            {
                goodsId: '2004',
                imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                introduction: 'apple-iphone28 Plus 12cmx15cm',
                presentPrice: '￥130',
                originalPrice: '￥150',
                discounts: discounts5
            }
        ]
        goodsData.value = data
        refreshing.value = false
    }

    // 列表滚动
    const loadMorePosts = () => {
        const discounts5: DisCountType = {
            // reduce:'一件减￥31',
            gift: '赠送一条毛巾22',
            vouchers: '8.88折'
        }
        const discounts6: DisCountType = {
            // reduce:'一件减￥31',
            gift: '赠送一条毛巾12',
            vouchers: '8.88折'
        }
        const discounts7: DisCountType = {
            reduce: '满三件减20',
            gift: '赠送一双袜子',
            vouchers: '满1000减50'
        }
        const data: Array<GoodsType> = [
            {
                goodsId:'3001',
                imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                introduction: 'apple-iphone28 Plus 12cmx15cm',
                presentPrice: '￥130',
                originalPrice: '￥150',
                discounts: discounts5
            },
            {
                goodsId:'3002',
                imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                introduction: 'apple-iphone28 Plus 12cmx15cm',
                presentPrice: '￥130',
                originalPrice: '￥150',
                discounts: discounts6
            },
            {
                goodsId:'3003',
                imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                introduction: 'apple-iphone28 Plus 12cmx15cm',
                presentPrice: '￥130',
                originalPrice: '￥150',
                discounts: discounts7
            },
        ]
        goodsData.value.push(...data)
    }
    const handleScroll = (e: any) => {
        console.log(e)
        const element: any = scrollComponent.value
        const domReact = element!.getBoundingClientRect() as DOMRect
        console.log('滚动', domReact.bottom, window.innerHeight)
        if (domReact.bottom >= window.innerHeight) {
            loadMorePosts()
        }
    }

    // 生命周期行数
    onMounted(()=>{
        window.addEventListener("scroll", handleScroll)
        initGoodsData()
    })
    onUnmounted(() => {
        window.removeEventListener("scroll", handleScroll)
    })
    return {
        // 自定义组件
        GoodsCardMasonry,
        scrollComponent,
        refreshing,goodsData,
        onRefresh
    }
}