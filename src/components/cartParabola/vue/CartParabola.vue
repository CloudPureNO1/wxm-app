<template>
  <div class="cart-parabola">
    <!-- 抛物线小球，5个 -->
    <div class="ball-container">
      <div v-for="ball in balls" :key="genUniqKey(ball)">
        <transition
          name="cast-ball"
          @before-enter="ballBeforeEnter"
          @enter="ballEnter"
          @after-enter="ballAfterEnter"
        >
        <!-- 抛物线 -->
        <!-- 水平移动盒子 -->
          <div class="horizontal-box" v-show="ball.show">
            <!-- 赛贝尔移动 -->
            <div class="ball">
              <!-- 内部图片覆盖小球 -->
              <img :src="ball.imgSrc" alt=""/>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { init } from "../js/CartParabola";
const {
  balls,
  genUniqKey,
  ballBeforeEnter,
  ballEnter,
  ballAfterEnter
}=init();
</script>


<style scoped lang="scss">
@import "../css/CartParabola.scss";
</style>