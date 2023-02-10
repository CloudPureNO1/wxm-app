
import { onMounted, ref} from 'vue'
import type {GridGoodsType } from '../../../types/Home'
import {  useRouter } from 'vue-router'
// import {useTabbarStore} from '../../stores/system'
// 引入自定义组件
import GoodsCard from '../../../components//goodsCard/vue/GoodsCard.vue';
import WxmFooter from '../../../components/footer/vue/WxmFooter.vue'

import {toLocale} from '../../../composable/TransI18n'

export const init = () => {
    console.log('>>>>>>>>translate>>>>',toLocale('greet'))

    // 路由
    const router =useRouter()
    // store
    // const {active,changeActive}=useTabbarStore()
    // 搜索框值
    const searchValue = ref<string>('')
    // avatar 
    const avatarImgSrc = ref<string>('')
    // swipe 轮播图片
    const images = ref<Array<string>>([])
    // grid
    const gridData = ref<Array<GridGoodsType>>([])
  
    const topH=ref<number>(0)
    const swipeH=ref<number>(0)
    const gridH=ref<number>(0)
    const bottomH=ref<number>(0)
    const ctHeight=ref<string>('')

    avatarImgSrc.value = 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg'
    images.value = [
        'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
        'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
        'https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg',
    ];
    gridData.value = [
        {
            imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
            goodsType: 'type1',
            title: '数码',
        },
        {
            imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
            goodsType: 'type1,type2',
            title: '家电、电子'
        },
        {
            imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg',
            goodsType: 'type22',
            title: '笔记本',
        }
        ,
        {
            imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg',
            goodsType: 'type11',
            title: '平板',
        },
        {
            imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
            goodsType: 'type3',
            title: '猫',
        },
        {
            imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
            goodsType: 'type5',
            title: '数码',
        },
        {
            imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
            goodsType: 'typoe7',
            title: '家电',
        },
        {
            imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg',
            goodsType: 'pad',
            title: '笔记本',
        }
        ,
        {
            imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg',
            goodsType: 'type9',
            title: '平板',
        },
        {
            imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
            goodsType: 'cat',
            title: '猫',
        }
    ]

 
    // methods
    // 点击分类时，跳转到单独的分类界面显示结果数据
    const showPage = (goodsType: string,title:string) => {
        router.push({
            name:'goods',
            params:{
                goodsType:goodsType,
                title:title
            }
        })
    }

    onMounted(()=>{
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
        ctHeight.value = (window.screen.height - topH.value -swipeH.value- gridH.value-bottomH.value) + 'px'
    })
 
 
    return {
        GoodsCard,WxmFooter,
        searchValue, avatarImgSrc, images, gridData,ctHeight,
        showPage
    }
}