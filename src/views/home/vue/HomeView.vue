<template>
  <div class="wxm-welcome">
    <van-sticky :offset-top="0" class="home-sticky">
      <div class="header">
        <div class="content">
          <div class="left">
            <div class="avatar">
              <van-image round width="2rem" height="2rem" :src="avatarImgSrc" />
            </div>
            <div class="msg">{{ $t('greet', { 'name': $t('name') }) }}</div>
          </div>
          <div class="right">
            <van-space>
              <van-icon name="qr" size="1.5rem" />
              <van-icon name="scan" size="1.5rem" />
            </van-space>
          </div>
        </div>
        <div class="search">
          <van-search v-model="searchValue" placeholder="请输入搜索关键词" />
        </div>
      </div>
    </van-sticky>

    <div class="body" >
      <van-swipe :autoplay="1000" lazy-render class="wxm-swipe">
        <van-swipe-item v-for="image in images" :key="image">
          <img :src="image" style=" height:200px;width:80%;" />
        </van-swipe-item>
      </van-swipe>


      <div class="type-grid">
        <van-grid :border="false" :column-num="5" square :gutter="2" icon-size="1rem">
          <van-grid-item v-for="(item, index) in gridData" :key="index" @click="showPage(item.goodsType, item.title)">
            <van-image :src="item.imgSrc" width="3rem" height="3rem" />
          </van-grid-item>
        </van-grid>
      </div>


      <!-- 
   <van-pull-refresh v-model="refreshing" @refresh="onRefresh">  
     <div class="scroll" ref="scrollComponent">
       <GoodsCardMasonry :goodsData="goodsData" type="Home"/>
     </div>
  </van-pull-refresh> -->
      <div class="goods-list">
        <GoodsCard type="Home" />
      </div>

    </div>

    <WxmFooter type="Home" class="home-footer" />
  </div>

</template>
<script lang="ts" setup>

import { init } from '../ts/HomeView'
const {
  GoodsCard, WxmFooter,
  searchValue, avatarImgSrc, images, gridData,
  showPage
} = init()
</script>

<style scoped lang="scss">
@import '../css/HomeView.scss'
</style>
