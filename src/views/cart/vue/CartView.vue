<template>
    <div class="wxm-cart">
        <van-sticky class="header-sticky" :z-index="100">
            <div class="header">
                <div class="bar">
                    <div class="left">
                        <div :class="['cart-btn', isActive ? 'label__active' : '']">
                            <span>购物车</span>
                            <span>(</span>
                            <span>2</span>
                            <span>)</span>
                        </div>
                        <div class="frequently-bought" @click="reSetStyle">我常买</div>
                    </div>
                    <div class="right" @click="reSetStyle">
                        <span>管理</span>
                    </div>
                </div>
                <div class="body">
                    <div class="prefix"><van-icon name="location-o" /></div>
                    <div class="address"><span>浙大网新软件园</span></div>
                    <div class="suffix"><van-icon name="arrow-down" /></div>
                </div>
                <div class="search">
                    <!-- click-input -->
                    <van-search placeholder="搜索" shape="round" @click-input="clickInput" background="#eff2f5">
                        <!-- <template #action>
                        <div @click="onClickButton">搜索</div>
                    </template> -->
                    </van-search>

                    <van-action-sheet v-model:show="showSearch">
                        <van-search v-model="searchValue" id="searchId" placeholder="请输入搜索关键词" shape="round" show-action
                            @search="onSearch">
                            <template #action>
                                <div @click="onClickButton">搜索</div>
                            </template>
                        </van-search>

                        <div class="search-goods-list">1111111111111111111</div>
                    </van-action-sheet>
                </div>
            </div>
        </van-sticky>

        <div class="cart-goods-list" >
            <div class="scroll" ref="scrollComponent"  :style="'height:' + ctHeight+';overflow:auto;'">

                <div v-for="(item, index) in list" :key="index" class="list-box">
                    <div>{{ item }}</div>
                </div>

            </div>
        </div>

        <WxmFooter type="Cart" class="cart-footer"/>
    </div>
</template>
<script lang="ts" setup>
import { init } from "../ts/CartView";

const {
    scrollComponent,
    WxmFooter,
    isActive,
    searchValue,
    showSearch,
    list,
    ctHeight,
    reSetStyle,
    clickInput,
    onClickButton,
    onSearch,
} = init();
</script>

<style scoped lang="scss">
@import "../css/CartView.scss";
</style>