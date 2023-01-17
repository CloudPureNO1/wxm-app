<template>
    <div class="goods-card" >
        <div v-masonry fit-width="true" transition-duration="0s" item-selector=".goods-box" class="container" >
            <div v-masonry-tile v-for="(item, index) in props.goodsData" :key="index" class="goods-box"
                @click="showGoodsInfo(item)">
                <div class="goods">
                    <div class="goods-content wxm-background">
                        <div class="img">
                            <img :src="item.imgSrc" style="width: 100%; height: 150px" />
                        </div>
                        <div class="introduction">
                            <span>{{ item.introduction }}</span>
                        </div>
                        <div class="discounts-box" v-if="item.discounts">
                            <div class="discounts" v-if="item.discounts.reduce && item.discounts.reduce !== ''">
                                <div class="font reduce">{{ item.discounts.reduce }}</div>
                            </div>
                            <div class="discounts" v-if="item.discounts.gift && item.discounts.gift !== ''">
                                <div class="font gift">{{ item.discounts.gift }}</div>
                            </div>
                            <div class="discounts" v-if="item.discounts.vouchers && item.discounts.vouchers !== ''">
                                <div class="font vouchers">
                                    <div class="vouchers-title">券</div>
                                    <div class="vouchers-content">{{ item.discounts.vouchers }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="price-box">
                            <div class="price" v-if="item.originalPrice && item.originalPrice !== ''">
                                <div class="present-price">{{ item.presentPrice }}</div>
                                <div class="original-price">{{ item.originalPrice }}</div>
                            </div>
                            <div class="price" v-else>
                                <div class="present-price">{{ item.presentPrice }}</div>
                            </div>
                            <div class="add-cart" @click.stop="(e) => addCart(e, item)">
                                <van-icon name="add" color="#f70606" size="1.25rem" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>


</template>
<script lang="ts" setup>
import { init } from '../ts/GoodsCardMasonry'
import type { GoodsType } from '../../../types/disCount'

type GoodsListType = {
    goodsData?: Array<GoodsType>,
    type?:string 
}
const props = defineProps<GoodsListType>()

const { showGoodsInfo, addCart } = init(props.type)

</script>
<style scoped lang="scss">
@import '../css/GoodsCardMasonry.scss'
</style>
 