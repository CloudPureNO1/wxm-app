<template>
    <div class="wxm-categorize">
        <van-sticky :offset-top="0" class="search-sticky">
            <div class="search">
                <van-search v-model="searchValue" placeholder="请输入搜索关键词" />
            </div>
        </van-sticky>

        <div class="body">
            <div class="left" :style="'height:' + ctHeight">
                <van-sticky :offset-top="topH" class="ht" :style="'height:'+footerH+'px'">
                    <van-sidebar v-model="activeLeft" class="ht o-y-flow">
                        <van-sidebar-item v-for="item in menuList" :key="item.category" :title="item.title"
                            @click="showGoods(item)" />
                    </van-sidebar>
                </van-sticky>
            </div>
            <div class="right">

                <div class="title">{{ title }}</div>
                <div class="content"  id="categoryCtId">
                    <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" :style="'height:' + ctHeight+';overflow:auto;'" class="test">
                        <van-cell v-for="(item, index) in goodsData" :key="index">
                            <van-card class="card"
                                :origin-price="item.originalPrice && item.originalPrice !== '' ? item.originalPrice : ''"
                                centered :title="item.title" :currency="item.currency" :thumb="item.imgSrc">
                                <template #tags>
                                    <div class="discounts-box" v-if="item.discounts">
                                        <div class="discounts"
                                            v-if="item.discounts.reduce && item.discounts.reduce !== ''">
                                            <div class="font reduce">{{ item.discounts.reduce }}</div>
                                        </div>
                                        <div class="discounts" v-if="item.discounts.gift && item.discounts.gift !== ''">
                                            <div class="font gift">{{ item.discounts.gift }}</div>
                                        </div>
                                        <div class="discounts"
                                            v-if="item.discounts.vouchers && item.discounts.vouchers !== ''">
                                            <div class="font vouchers">
                                                <div class="vouchers-title">券</div>
                                                <div class="vouchers-content">{{ item.discounts.vouchers }}</div>
                                            </div>
                                        </div>
                                    </div>

                                </template>
                                <template #price>
                                    <div class="price-box">
                                        <div class="price">
                                            <div class="present-price">{{ item.currency + item.presentPrice }}</div>
                                        </div>
                                    </div>
                                </template>
                                <template #num>
                                        <van-icon name="add" color="#f70606" size="1.25rem" @click.stop="(e) => addCart(e, item)"  class="add-cart" :id="'addCardId' + index"/>
                                </template>
                            </van-card>

                        </van-cell>
                    </van-list>

                </div>
            </div>

            
        </div>

        <WxmFooter type="Category" class="category-footer"/>
    </div>
</template>
<script lang="ts" setup>
import {init} from '../ts/CategorizeView'
const {
    WxmFooter,
    searchValue,activeLeft,ctHeight,topH,menuList,title,goodsData,
    loading,finished,footerH,
    showGoods,onLoad,addCart
}=init()
 
</script>
<style scoped lang="scss">
@import '../css/CategorizeView.scss';

:deep(.van-cell) {
    padding: 0 !important;
}

:deep(.van-cell__value) {
    text-align: left !important;
    overflow: auto !important;;
}
:deep(.van-card__content){
    border-bottom: 1px solid #e3e5ef !important;
}

:deep(.van-sidebar-item){
    background: #eff0f5;
    &:active{
        background: var(--van-card-background);
    }
    &:hover{
        background: var(--van-card-background);
    }
    
}
</style>