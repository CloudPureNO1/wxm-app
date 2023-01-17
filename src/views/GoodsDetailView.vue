<template>
    <div class="wxm-goods-page">
        <van-nav-bar  fixed :z-index="9999" left-text="返回" left-arrow safe-area-inset-top @click-left="handleClickLeft">
            <template #right>
                <van-icon name="cart-o" size="18" />
            </template>
        </van-nav-bar>
    </div>
</template>
<script lang="ts" setup>
import {ref} from 'vue'
import { useRouter,useRoute } from "vue-router"
const router=useRouter()
const route=useRoute()
 
 const handleClickLeft=()=>{
    router.go(-1)
 }
const goodsId=ref<string>(route.query.goodsId as string)
console.log('goodsType',goodsId.value)
</script>
