import WxmFooter from '../../../components/footer/vue/WxmFooter.vue'
import {nextTick, ref,onMounted,onUnmounted} from 'vue'
import { showToast } from 'vant';
export const init=()=>{
    const isActive=ref<boolean>(true)
    const searchValue=ref<string>('')
    const showSearch=ref<boolean>(false)

    const list = ref<number[]>([]);
 
    const scrollComponent=ref()
    const topH=ref<number>(0)
    const bottomH=ref<number>(0)
    const ctHeight=ref<string>('')
    // methods

    const handleScroll = (e: any) => {
        console.log(e)
        const element: any = scrollComponent.value
        const domReact = element!.getBoundingClientRect() as DOMRect
        console.log('滚动', domReact.bottom, window.innerHeight)
        if (domReact.bottom >= window.innerHeight) {
            onLoad()
        }
    }

    // 生命周期行数
    onMounted(()=>{
        window.addEventListener("scroll", handleScroll)
        onLoad()

        const element: any = document.querySelector('.header-sticky')
        if (element) {
            topH.value = element.offsetHeight
        }
        const elementBottom: any = document.querySelector('.cart-footer')
        if (elementBottom) {
            bottomH.value = elementBottom.offsetHeight
        }
        ctHeight.value = (window.screen.height - topH.value - bottomH.value) + 'px'
 
   
    })
    onUnmounted(() => {
        window.removeEventListener("scroll", handleScroll)
    })
 
    const onLoad = () => {
        // 异步更新数据
        // setTimeout 仅做示例，真实场景中一般为 ajax 请求
        setTimeout(() => {
            for (let i = 0; i < 17; i++) {
                list.value.push(list.value.length + 1);
            }
 
        }, 1000);
    }
    const reSetStyle=()=>{
        isActive.value=false
    }
    const clickInput=()=>{
        showSearch.value=true

    
        nextTick(()=>{
            document.getElementById('searchId')?.focus()
        })
    }
    const onClickButton=()=>{
        console.log(searchValue.value)
        onSearch(searchValue.value)
    }
    const onSearch=(value:string)=>{
        showToast(value);
    }
 
    return {
        scrollComponent,
        WxmFooter,
        isActive,searchValue,showSearch,
        list,ctHeight,
        reSetStyle,clickInput,onClickButton,onSearch,onLoad
    }
}