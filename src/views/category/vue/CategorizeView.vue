<template>
    <div class="wxm-categorize">
        <van-sticky :offset-top="0" class="search-sticky">
            <div class="search">
                <van-search v-model="searchValue" placeholder="请输入搜索关键词" />
            </div>
        </van-sticky>

        <div class="body">
            <div class="left" :style="'height:' + ctHeight">
                <van-sticky :offset-top="topH" class="ht" :style="'height:' + footerH + 'px'">
                    <van-sidebar v-model="activeLeft" class="ht o-y-flow">
                        <van-sidebar-item v-for="item in menuList" :key="item.categoryId" :title="item.categoryName"
                            @click="showGoods(item)" />
                    </van-sidebar>
                </van-sticky>
            </div>
            <div class="right">

                <div class="title">{{ title }}</div>
                <div class="content category_content" id="categoryCtId">
                    <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad"
                        :style="'height:' + ctHeight + ';overflow:auto;'" class="test">
                        <van-cell v-for="(item, index) in goodsData" :key="index">
                            <van-card class="card" :origin-price="item.originalPrice? item.originalPrice : 0" centered
                                :title="item.title" currency="￥" :thumb="item.mainImageUrl||''">
                                <template #tags>
                                    <div class="discounts-box" v-if="item.discounts && item.discounts.length !== 0">
                                        <div class="discounts" v-for=" discount in item.discounts"
                                            :key="discount.promotionId">
                                            <div :class="loadDiscountClass(discount)"
                                                v-if="discount.type === 'spend_&_save'">
                                                <div class="vouchers-title">券</div>
                                                <div class="vouchers-content">{{ discount.promotionName }}</div>
                                            </div>
                                            <div :class="loadDiscountClass(discount)" v-else> {{ discount.promotionName
                                                }}</div>
                                        </div>
                                    </div>

                                </template>
                                <template #price>
                                    <div class="price-box">
                                        <div class="price">
                                            <div class="present-price">{{ '￥' + item.discountedPrice }}</div>
                                        </div>
                                    </div>
                                </template>
                                <template #num>
                                    <van-icon name="add" color="#f70606" size="1.25rem"
                                        @click.stop="(e) => addCart(item,e)" class="add-cart"
                                        :id="'addCardId' + index" />
                                </template>
                            </van-card>

                        </van-cell>
                    </van-list>

                </div>
            </div>


        </div>

        <WxmFooter type="Category" class="category-footer" />



        <div class="ball-container">
            <div>
                <transition name="cast-ball" @before-enter="ballBeforeEnter" @enter="ballEnter"
                    @after-enter="ballAfterEnter">
                    <div class="horiz-ball" v-show="showBall" :style="horizBallStyle">
                        <div class="ball">
                            <img :src="imgSrcBall" alt="" :style="ballStyle" />
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
// import { ref } from 'vue'
// import { init } from '../ts/CategorizeViewOld'
import { init } from '../ts/CategorizeView'
const {
    WxmFooter,
    searchValue, activeLeft, ctHeight, topH, menuList, title, goodsData,
    loading, finished, footerH, showBall, imgSrcBall, horizBallStyle, ballStyle,
    loadDiscountClass,showGoods, onLoad, addCart, ballBeforeEnter, ballEnter, ballAfterEnter
} = init()



// import { useLoadImg } from '../../../composable/staticImgUtil'
 
// const showBall = ref<boolean>(false)
// const imgSrcBall = ref<string>('')
// const elBall = ref<any>(null)
// const horizBallStyle = ref<any>({
//     position: 'fixed',
//     left: '25px',
//     bottom: '20px'
// })
// const ballStyle = ref<any>({
//     width: '40px',
//     height:'40px'
// })
// const addCount = (item: any, ev: any) => {
//     let rect= document.querySelector('.category_content .van-image__img')?.getBoundingClientRect()
//     const left = rect!.left as number
//     const width = rect!.width as number
//     const height = rect!.height as number
//     horizBallStyle.value = {
//         position: 'fixed',
//         left: `${left}px !important`,
//         bottom: '20px',
//     }
//     ballStyle.value = {
//         width: `${width}px`,
//         height: `${height}px`
//     }

 
 
    
//     castBall(item, ev.target)
// };
// const castBall = (item: any, el: any) => {
    
//     // 找到第一个show为false（可用）的小球，然后就跳出循环
//     showBall.value = true;
//     imgSrcBall.value = useLoadImg(item.imgSrc)

//     elBall.value = el

//     // castBalls.value.push(ball);
// };

// const ballBeforeEnter = (el: any) => {
     

//     let rect = elBall.value?.getBoundingClientRect();
    
//     // let x = rect!.left - 40;
//     let y = rect!.top - window.innerHeight + 40;
//     // let y = rect!.top;
//     // el.style.webkitTransform = `translate3d(${x}px,0,0)`;
//     // el.style.transform = `translate3d(${x}px,0,0)`;
//     el.style.webkitTransform = `translate3d(0,0,0)`;
//     el.style.transform = `translate3d(0,0,0)`;
//     // 直接设置在样式中，因为过渡是用在父元素中，子元素图片实现scale 放大和缩小，而不影响父元素的过渡效果
//     // el.style.transition="0.4s all cubic-bezier(0.49, -0.29, 0.75, 0.41)"

//     let child = el.children[0];

//     // transform :translate3d 实现x,y,z轴的转换， scale 设置放大和缩小，在子元素中
//     child.style.transform = `translate3d(0,${y}px,0) scale(0.75)`;
//     child.style.webkitTransform = `translate3d(0,${y}px,0)  scale(0.75)`;


// };
// const ballEnter = (el: any, done: any) => {
    
//     el.timer = setTimeout(() => {

//         // const left = document.getElementById('cartCenterId')?.getBoundingClientRect().left as number
//         const left = document.querySelector('.wxm-cart-footer .van-tabbar-item__icon')?.getBoundingClientRect().left as number
//         const width = document.querySelector('.wxm-cart-footer .van-tabbar-item__icon')?.getBoundingClientRect().width as number
//         el.style.webkitTransform = `translate3d(${left + width/2}px,0,0)`;
//         el.style.transform = `translate3d(${left+width/2}px,0,0)`;

//         let child = el.children[0];
//         // transform :translate3d 实现x,y,z轴的转换， scale 设置放大和缩小，在子元素中，
//         // 通过transition 实现过渡 
//         // child.style.transform = `translate3d(0,0,0) scale(0.15)`;
//         // child.style.webkitTransform = `translate3d(0,0,0) scale(0.15)`;


//         child.style.transform = `translate3d(0,0,0) scale(0.15)`;
//         child.style.webkitTransform = `translate3d(0,0,0) scale(0.15)`;

//         el.addEventListener("transitionEnd", done);
//         el.addEventListener("webkitTransitionEnd", done);


//     }, 30);

// };
// const count = ref<number>(0)
// const ballAfterEnter = (el: any) => {
//     clearTimeout(el.timer);
//     showBall.value = false
//     count.value++
//     el.style.display = "none";
// };


</script>
<style scoped lang="scss">
@import '../css/CategorizeView.scss';

:deep(.van-cell) {
    padding: 0 !important;
}

:deep(.van-cell__value) {
    text-align: left !important;
    overflow: auto !important;
    ;
}

:deep(.van-card__content) {
    border-bottom: 1px solid #e3e5ef !important;
}

:deep(.van-sidebar-item) {
    background: #eff0f5;

    &:active {
        background: var(--van-card-background);
    }

    &:hover {
        background: var(--van-card-background);
    }

}



.ball-container {
            // img {
            //         width: 88px;
            //     }

    /* 这里是外层的盒子做水平运动 */
    .horiz-ball {
        // position: fixed;
        // left: 25px;
        // bottom: 20px;
        z-index: 9999;
        transition: 0.4s all linear;

        .ball {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #47b34f;
            /* 小球本身做加速运动 通过贝塞尔来模拟 */
            // transition: 0.4s all cubic-bezier(0.49, -0.29, 0.75, 0.41);
            // transition: 0.4s all cubic-bezier(.55,.07,.92,.37);
            // transition: 0.4s all cubic-bezier(.55,.07,.79,.41);
            // transition: 0.4s all cubic-bezier(.64,.29,.96,.94) reverse;
            // transition: 0.4s all cubic-bezier(.64,.29,.96,.94);
            // transition: 0.4s all cubic-bezier(.66, .13, .96, .72);
            transition: 0.4s all cubic-bezier(.66, .13, .96, .72);
        }
    }
}
</style>