<template>
    <div class="wxm-goods">
        <van-nav-bar :title="title" fixed :z-index="9999" left-text="返回" left-arrow safe-area-inset-top
            @click-left="handleClickLeft">
            <template #right>
                <div @click="showCart">
                    <van-badge :content="goodsCount"><van-icon name="cart-o" size="18" /></van-badge>
                </div>
            </template>
        </van-nav-bar>
        <div class="special-display">
            <p>11111111</p>

        </div>
        <div class="goods-list">
            <GoodsCard />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { init } from '../ts/GoodsView'
const {
    GoodsCard,
    title, goodsCount,
    handleClickLeft,showCart
} = init()
</script>
