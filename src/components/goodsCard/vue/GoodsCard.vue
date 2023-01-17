<template>
    <div class="wxm-goods-card">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <div class="scroll" ref="scrollComponent" >
                <GoodsCardMasonry :goodsData="goodsData" :type="props.type" />
            </div>
        </van-pull-refresh>
    </div>
</template>
<script lang="ts" setup>
import {init} from '../ts/GoodsCard'

type GoodsCardType = {
    type?:string 
}
const props = defineProps<GoodsCardType>()
 const {
    GoodsCardMasonry,
    scrollComponent,
    refreshing,goodsData,
    onRefresh
 }=init()
</script>
