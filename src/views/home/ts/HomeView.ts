
import { onMounted, ref } from 'vue'
import type { IAvatarUser } from '../../../types/mall/User'
import type { IBaseProduct } from '../../../types/mall/Product'
import type { ICategory } from '../../../types/mall/Category'

import { useRouter } from 'vue-router'
// import {useTabbarStore} from '../../stores/system'
// 引入自定义组件
import GoodsCard from '../../../components//goodsCard/vue/GoodsCard.vue';
import WxmFooter from '../../../components/footer/vue/WxmFooter.vue'

import { useLocaleMsg } from '../../../composable/TransI18n'

export const init = () => {
    console.log('>>>>>>>>translate>>>>', useLocaleMsg('greet'))

    // 路由
    const router = useRouter()
    // store
    // const {active,changeActive}=useTabbarStore()
    // 搜索框值
    const searchValue = ref<string>('')
    // avatar 
    const avatarImgSrc = ref<string>('')
    // swipe 轮播图片
    const swipeGoods = ref<Array<IBaseProduct>>([])
    // grid
    const gridData = ref<Array<ICategory>>([])

    const topH = ref<number>(0)
    const swipeH = ref<number>(0)
    const gridH = ref<number>(0)
    const bottomH = ref<number>(0)
    const ctHeight = ref<string>('')

    const user = sessionStorage.getItem('user')
    const avatarUser: IAvatarUser = JSON.parse(user as string)

    avatarImgSrc.value = avatarUser?.avatarUrl ? avatarUser.avatarUrl : 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png'


    swipeGoods.value = [
        { productId: '10001', mainImageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg', title: 'apple-1' },
        { productId: '10001', mainImageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg', title: 'apple-2' },
        { productId: '10001', mainImageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg', title: 'apple-3' },

    ];


    gridData.value = [
        {
            categoryImageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
            categoryId: 'type1',
            categoryName: '数码',
        },
        {
            categoryImageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
            categoryId: 'type1,type2',
            categoryName: '家电、电子'
        },
        {
            categoryImageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg',
            categoryId: 'type22',
            categoryName: '笔记本',
        }
        ,
        {
            categoryImageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg',
            categoryId: 'type11',
            categoryName: '平板',
        },
        {
            categoryImageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
            categoryId: 'type3',
            categoryName: '猫',
        },
        {
            categoryImageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
            categoryId: 'type5',
            categoryName: '数码',
        },
        {
            categoryImageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
            categoryId: 'typoe7',
            categoryName: '家电',
        },
        {
            categoryImageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg',
            categoryId: 'pad',
            categoryName: '笔记本',
        }
        ,
        {
            categoryImageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg',
            categoryId: 'type9',
            categoryName: '平板',
        },
        {
            categoryImageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
            categoryId: 'cat',
            categoryName: '猫',
        }
    ]


    // methods
    // 点击分类时，跳转到单独的分类界面显示结果数据
    const showPage = (item: ICategory) => {
        console.log('>>>>>>>>>>>>>', item, item)
        router.push({
            name: 'goods',
            params: {
                categoryId: item.categoryId,
                name: item.categoryName
            }
        })
    }
    const showScan = () => {
        router.push({
            name: 'scan',

        })
    }

    const showGoodsInfo = (item: IBaseProduct) => {
        router.push({
            path: '/goodsInfo',
            query: {
                goodsId: item.productId
            }
        })
    }


    onMounted(() => {
        const element: any = document.querySelector('.home-sticky')
        if (element) {
            topH.value = element.offsetHeight
        }
        // const elementSwipe: any = document.querySelector('.wxm-swipe')
        // if (elementSwipe) {
        //     swipeH.value = elementSwipe.offsetHeight
        // }
        // const elementGrid: any = document.querySelector('.type-grid')
        // if (elementGrid) {
        //     gridH.value = elementGrid.offsetHeight
        // }
        const elementBottom: any = document.querySelector('.home-footer')
        if (elementBottom) {
            bottomH.value = elementBottom.offsetHeight
        }
        ctHeight.value = (window.screen.height - topH.value - swipeH.value - gridH.value - bottomH.value) + 'px'
    })


    return {
        GoodsCard, WxmFooter,
        searchValue, avatarImgSrc, swipeGoods, gridData, ctHeight,
        showPage, showScan, showGoodsInfo
    }
}