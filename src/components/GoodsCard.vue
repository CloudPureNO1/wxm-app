<template>
  <div class="goods-card">
    <div class="goods" v-for="(item ,index) in props.goodsData" :key="index">
      <div class="img">
        <img :src="item.imgSrc" style="width: 100%; height: 150px" />
      </div>
      <div class="introduction">
        <span>{{item.introduction}}</span>
      </div>
      <div class="discounts-box" v-if="item.discounts">
        <div class="discounts" v-if="item.discounts.reduce&&item.discounts.reduce!==''">
          <div class="font">{{ item.discounts.reduce }}</div>
        </div>
        <div class="discounts" v-if="item.discounts.gift&&item.discounts.gift!==''">
          <div class="font">{{ item.discounts.gift }}</div>
        </div>
        <div class="discounts" v-if="item.discounts.vouchers&&item.discounts.vouchers!==''">
          <div class="font vouchers">
            <div class="vouchers-title">券</div>
            <div class="vouchers-content">{{ item.discounts.vouchers }}</div>
          </div>
        </div>
      </div>
      <div class="price-box">
        <div class="price" v-if="item.originalPrice&&item.originalPrice!==''">
          <div class="present-price">{{ item.presentPrice }}</div>
          <div class="original-price">{{ item.originalPrice }}</div>
        </div>
        <div class="price" v-else>
          <div class="present-price">{{ item.presentPrice }}</div>
        </div>
        <div class="add-cart">
          <van-icon name="add" color="#f70606" size="1.25rem" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type {GoodsType} from '../types/disCount'

type GoodsListType={
    goodsData?:Array<GoodsType>
}
 

const props=defineProps<GoodsListType>()
</script>
<style scoped lang="scss">
.goods-card {
  /*margin-bottom: 60px;*/
  column-gap: 10px; // 卡片间距
  column-count: 2; // 卡片列数
  // margin: 10px 10px 40px;
  padding: 10px;
  font-size: 14px;

  .goods {
    break-inside: avoid; // 不设置这个，卡片会被拦腰截断
    
    border: 1px solid #dddddd;
    padding: 10px;
    margin-bottom: 10px;

    .img {
      padding: 0 0 10px 0;
    }

    .introduction {
      padding: 0 2px 5px 0;
      font-weight: 700;
      font-size: 12px;
    }

    .discounts-box {
      display: flex;
      flex-wrap: wrap;
      .discounts {
        margin-top:2px;
        .font {
          color: #f70606;
          border: 0.1px solid #f70606;
          border-radius: 3px;
          transform: scale(0.7);
          margin: -7px 0 0 -12px;
          padding: 0 2px 0 0px;
        }

        .vouchers {
            display: flex;
          .vouchers-title {
            background: #f70606;
            color:#fff;
            padding:0 2px 0 2px;
          }
          .vouchers-content{
            padding:0 0 0 5px;
          }
        }
      }
    }

    .price-box {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .present-price {
        color: #f70606;
        padding: 5px 0 0 0;
        font-weight: 700;
      }

      .original-price {
        transform: scale(0.6);
        text-decoration: line-through;
        margin: -5px 0 0 -10px;
      }

      .add-cart {
        padding: 10px 10px 0 0px;
      }
    }
  }
}
</style>