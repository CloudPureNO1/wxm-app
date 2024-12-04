<template>
    <div class="goods-card">
        <div v-masonry fit-width="true" transition-duration="0s" item-selector=".goods-box" class="container">
            <div v-masonry-tile v-for="(item, index) in props.goodsData" :key="index" class="goods-box"
                @click="showGoodsInfo(item.productId)">
                <div class="goods">
                    <div class="goods-content wxm-background">
                        <div class="wxm-img">
                            <img :src="item.mainImageUrl||''" style="width: 100%; height: 150px" />
                        </div>
                        <div class="introduction">
                            <span>{{ item.description }}</span>
                        </div>
                        <div class="discounts-box" v-if="item.discounts&&item.discounts.length!==0">
                            <div class="discounts" v-for=" discount in item.discounts" :key="discount.promotionId">
                                <div :class="loadDiscountClass(discount)" v-if="discount.type ==='spend_&_save'">
                                    <div class="vouchers-title">券</div>
                                    <div class="vouchers-content">{{ discount.promotionName }}</div>
                                </div>
                                <div :class="loadDiscountClass(discount)" v-else> {{ discount.promotionName }}</div>
                            </div>
                        </div>
                        <div class="price-box">
                            <div class="price" v-if="item.originalPrice">
                                <div class="present-price">{{ item.discountedPrice }}</div>
                                <div class="original-price">{{ item.originalPrice }}</div>
                            </div>
                            <div class="price" v-else>
                                <div class="present-price">{{ item.discountedPrice }}</div>
                            </div>
                            <div class="add-cart" @click.stop="(e) => addCart(e, item)">
                                <van-icon name="add" color="#f70606" size="1.25rem" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


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
import { init } from '../ts/GoodsCardMasonry'
import type { IGoods } from '../../../types/mall/Mall'

type GoodsListType = {
    goodsData?: Array<IGoods>,
    type?: string
}
const props = defineProps<GoodsListType>()

const {
    loadDiscountClass,showGoodsInfo, addCart,
     showBall, imgSrcBall, horizBallStyle, ballStyle,
    ballBeforeEnter, ballEnter, ballAfterEnter

} = init(props.type)

</script>
<style scoped lang="scss">
@import '../css/GoodsCardMasonry'
</style>