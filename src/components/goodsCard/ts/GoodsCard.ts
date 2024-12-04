import { onMounted,onUnmounted, ref } from 'vue'
import type { IGoods } from '../../../types/mall/Mall'
import type { IBasePromotion } from '../../../types/mall/Promotion'
import GoodsCardMasonry from '../../goodsCardMasonry/vue/GoodsCardMasonry.vue'
export const init = () => {
 
    // 响应式变量
    // 下拉刷新
    const refreshing = ref<boolean>(false);
    const goodsData = ref<Array<IGoods>>([])
     // 滚动刷新数据时的外部容器 
     const scrollComponent = ref(null)

    // methods
    // 加载goodsData
    const initGoodsData=()=>{
        const discounts: IBasePromotion [] = [
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
        const discounts3: IBasePromotion [] = [
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
                productId:'1001',
                title:'apple-iphone28 Plus 12cmx15cm',
                mainImageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                description: 'apple-iphone28 Plus 12cmx15cm',
                discountedPrice: 130,
                originalPrice: 150,
                stock:0,
                soldCount:0,
                discounts: discounts
            },
            {
                productId:'1002',
                title:'apple-iphone28 Plus 12cmx15cm',
                mainImageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                description: 'apple-iphone28 Plus 12cmx15cm',
                discountedPrice: 130,
                originalPrice: 150,
                stock:0,
                soldCount:0,
                discounts: discounts1
            },
            {
                productId:'1003',
                title:'apple-iphone28 Plus 12cmx15cm',
                mainImageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                description: 'apple-iphone28 Plus 12cmx15cm',
                discountedPrice: 130,
                originalPrice: 150,
                stock:0,
                soldCount:0,
                discounts: discounts2
            },
            {
                productId:'1004',
                title:'apple-iphone28 Plus 12cmx15cm',
                mainImageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                description: 'apple-iphone28 Plus 12cmx15cm',
                discountedPrice: 130,
                originalPrice: 150,
                stock:0,
                soldCount:0,
                discounts: discounts3
            },
 
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
        const discounts4: IBasePromotion [] =  [
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
        const discounts5: IBasePromotion []=[
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
        const data: Array<IGoods> = [
            {
                productId: '2001',
                title: 'apple-iphone28 Plus 12cmx15cm',
                mainImageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                description: 'apple-iphone28 Plus 12cmx15cm',
                discountedPrice: 130,
                originalPrice: 150,
                stock: 0,
                soldCount: 0,
                discounts: discounts4
            },
            {
                productId: '2002',
                title: 'apple-iphone28 Plus 12cmx15cm',
                mainImageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                description: 'apple-iphone28 Plus 12cmx15cm',
                discountedPrice: 130,
                originalPrice: 150,
                stock: 0,
                soldCount: 0,
                discounts: discounts5
            },
            {
                productId: '2003',
                title: 'apple-iphone28 Plus 12cmx15cm',
                mainImageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                description: 'apple-iphone28 Plus 12cmx15cm',
                discountedPrice: 130,
                originalPrice: 150,
                stock: 0,
                soldCount: 0,
                discounts: discounts4
            },
            {
                productId: '2004',
                title: 'apple-iphone28 Plus 12cmx15cm',
                mainImageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                description: 'apple-iphone28 Plus 12cmx15cm',
                discountedPrice: 130,
                originalPrice: 150,
                stock: 0,
                soldCount: 0,
                discounts: discounts5
            },
        ]
        goodsData.value = data
        refreshing.value = false
    }

    // 列表滚动
    const loadMorePosts = () => {
        const discounts6: IBasePromotion []=[
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
        const discounts7: IBasePromotion [] = [
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
         
        const data: Array<IGoods> = [
            {
                productId: '3001',
                title: 'apple-iphone28 Plus 12cmx15cm',
                mainImageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                description: 'apple-iphone28 Plus 12cmx15cm',
                discountedPrice: 130,
                originalPrice: 150,
                stock: 0,
                soldCount: 0,
                discounts: discounts6
            },
            {
                productId: '3002',
                title: 'apple-iphone28 Plus 12cmx15cm',
                mainImageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                description: 'apple-iphone28 Plus 12cmx15cm',
                discountedPrice: 130,
                originalPrice: 150,
                stock: 0,
                soldCount: 0,
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