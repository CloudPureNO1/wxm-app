<template>
    <div class="wxm-footer" :id="footerId">
        <van-tabbar v-model="active" @change="handleChange" :z-index="100" safe-area-inset-bottom placeholder>
            <van-tabbar-item icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item icon="apps-o">分类</van-tabbar-item>
            <van-tabbar-item icon="cart-o" :badge="goodsCount" class="wxm-cart-footer"
                @click="showCart">购物车</van-tabbar-item>
            <van-tabbar-item icon="user-o" dot>我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script lang="ts" setup>
import { ref} from 'vue'
import {init} from '../ts/WxmFooter'

type FooterType={
    type:string 
}
const props = defineProps<FooterType>()
const footerId=ref<string>('footerId'+props.type)

const { active, goodsCount, handleChange, showCart }=init()

</script>
