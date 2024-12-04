<template>
  <div class="wrapper">
    <div class="list-wrapper" >
      <div class="item">
        <div class="left">
          <img src="./caomei.jpg" alt="" />
          <a class="text-wrapper" href="javascript:;">
            <span class="tit">【精选】巧克力草莓 约500g/份</span>
            <span class="desc">鲜嫩多汁，入口即化，果肉细腻，果皮较薄</span>
            <span class="sale">月售1024件；好评86%</span>
            <span class="price">￥39.8</span>
          </a>
        </div>
        <div class="right">
          <div class="add">
            <span :class="['opt', { active: count1 > 0 }]" v-show="count1 > 0"
              >-</span
            >
            <span class="num" v-show="count1 > 0">{{ count1 }}</span>
            <span class="opt active" @click="addCount(1, $event)">+</span>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="left">
          <img src="./chougan.jpg" alt="" />
          <a class="text-wrapper" href="javascript:;">
            <span class="tit">四川不知火丑柑 约500g/份</span>
            <span class="sale">月售1024件；好评72%</span>
            <span class="price">￥6.6</span>
          </a>
        </div>
        <div class="right">
          <div class="add">
            <span :class="['opt', { active: count2 > 0 }]" v-show="count2 > 0"
              >-</span
            >
            <span class="num" v-show="count2 > 0">{{ count2 }}</span>
            <span class="opt active" @click="addCount(2, $event)">+</span>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="left">
          <img src="./boluo.jpg" alt="" />
          <a class="text-wrapper" href="javascript:;">
            <span class="tit">【鲜切】菠萝 约250g/份</span>
            <span class="sale">月售1024件；好评95%</span>
            <span class="price">￥9.8</span>
          </a>
        </div>
        <div class="right">
          <div class="add">
            <span :class="['opt', { active: count3 > 0 }]" v-show="count3 > 0"
              >-</span
            >
            <span class="num" v-show="count3 > 0">{{ count3 }}</span>
            <span class="opt active" @click="addCount(3, $event)">+</span>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="left">
          <img src="./yingtao.jpg" alt="" />
          <a class="text-wrapper" href="javascript:;">
            <span class="tit">本地 樱桃 【精选】 约250g/盒</span>
            <span class="desc">本地樱桃刚上市，可能有稍微一丁点的酸味哦~</span>
            <span class="sale">月售1024件；好评86%</span>
            <span class="price">￥19.9</span>
          </a>
        </div>
        <div class="right">
          <div class="add">
            <span :class="['opt', { active: count4 > 0 }]" v-show="count4 > 0"
              >-</span
            >
            <span class="num" v-show="count4 > 0">{{ count4 }}</span>
            <span class="opt active" @click="addCount(4, $event)">+</span>
          </div>
        </div>
      </div>
    </div>
 

    <div class="footer">
      <div :class="['cart', { 'cart__active':isActive,'cart__active_color':count>0}]" >
        <img src="./cart.png" alt="" />
        <span class="count" v-show="count > 0">{{ count }}</span>
      </div>
      <div :class="['cart', { 'cart__active':isActive,'cart__active_color':count>0}]" id="cartCenterId" >
        <img src="./cart.png" alt="" />
        <span class="count" v-show="count > 0">{{ count }}</span>
      </div>
      <div :class="['check', { 'cart__active_color': count > 0 }]">去结算</div>
    </div>


    <div class="ball-container">
 
      <div v-for="(ball,index) in balls" :key="genUniqKey(ball)">
        <transition
          name="cast-ball"
          @before-enter="ballBeforeEnter"
          @enter="ballEnter"
          @after-enter="ballAfterEnter"
        >
          <div class="horiz-ball" v-show="ball.show">
            <div class="ball">
              <img :src="ball.imgSrc" alt="" :id="'ball'+index"/>
            </div>
          </div>
        </transition>
      </div>
 
    </div>
  </div>
</template>

 <script lang="ts" setup>
import { computed, ref } from "vue";
import {useLoadImg} from '../../../composable/staticImgUtil'

 
type BallType = {
  show: boolean;
  el?: any;
  type?: number;
  imgSrc?:string
};
const isActive = ref<boolean>(false);
 
const count1 = ref<number>(0);
const count2 = ref<number>(0);
const count3 = ref<number>(0);
const count4 = ref<number>(0);
const balls = ref<Array<BallType>>([
  { show: false },
  { show: false },
  { show: false },
  { show: false },
  { show: false },
]);

const castBalls = ref<Array<BallType>>([]);

const count = computed(() => {
  return count1.value + count2.value + count3.value + count4.value;
});

const addCount = (type: number, ev: any) => {
  balls.value.forEach(item => {
    if(type===1) item.imgSrc=useLoadImg('../../../../src/views/user/vue/caomei.jpg')
    if(type===2) item.imgSrc=useLoadImg('../../../../src/views/user/vue/chougan.jpg')
    if(type===3) item.imgSrc=useLoadImg('../../../../src/views/user/vue/boluo.jpg')
    if(type===4) item.imgSrc=useLoadImg('../../../../src/views/user/vue/yingtao.jpg')
  });

  castBall(type, ev.target);
};
const castBall = (type: number, el: any) => {
  // 找到第一个show为false（可用）的小球，然后就跳出循环
  balls.value.some((ball: BallType) => {
    if (!ball.show) {
      ball.show = true;
      ball.el = el;
      ball.type = type;
      castBalls.value.push(ball);
      return true;
    }
  });
};
const ballBeforeEnter = (el: any) => {
 

  const len = balls.value.length;
  for (let i = 0; i < len; i++) {
    let ball = balls.value[i];
    if (ball.show) {

      let rect = ball.el?.getBoundingClientRect();
      // let x = rect!.left - 40;
      let y = rect!.top - window.innerHeight + 40;
      // el.style.webkitTransform = `translate3d(${x}px,0,0)`;
      // el.style.transform = `translate3d(${x}px,0,0)`;
      el.style.webkitTransform = `translate3d(0,0,0)`;
      el.style.transform = `translate3d(0,0,0)`;
      // 直接设置在样式中，因为过渡是用在父元素中，子元素图片实现scale 放大和缩小，而不影响父元素的过渡效果
      // el.style.transition="0.4s all cubic-bezier(0.49, -0.29, 0.75, 0.41)"

      let child = el.children[0];

      // transform :translate3d 实现x,y,z轴的转换， scale 设置放大和缩小，在子元素中
      child.style.transform = `translate3d(0,${y}px,0) scale(0.75)`;
      child.style.webkitTransform = `translate3d(0,${y}px,0)  scale(0.75)`;


    }
  }
};
const ballEnter = (el: any, done: any) => {
  isActive.value=true
  el.timer = setTimeout(() => {

    const left=document.getElementById('cartCenterId')?.getBoundingClientRect().left as number
    el.style.webkitTransform = `translate3d(${left-10}px,0,0)`;
    el.style.transform = `translate3d(${left-10}px,0,0)`;
  
    let child = el.children[0];
    // transform :translate3d 实现x,y,z轴的转换， scale 设置放大和缩小，在子元素中，
    // 通过transition 实现过渡 
    // child.style.transform = `translate3d(0,0,0) scale(0.15)`;
    // child.style.webkitTransform = `translate3d(0,0,0) scale(0.15)`;

    
    child.style.transform = `translate3d(0,0,0) scale(0.15)`;
    child.style.webkitTransform = `translate3d(0,0,0) scale(0.15)`;

    el.addEventListener("transitionEnd", done);
    el.addEventListener("webkitTransitionEnd", done);

 
  }, 30);
 
};
const ballAfterEnter = (el: any) => {
  isActive.value=false
  let ball = castBalls.value.shift();
  if (ball) {
    ball.show = false;
    el.style.display = "none";
    clearTimeout(el.timer);
    switch (ball.type) {
      case 1:
        count1.value += 1;
        break;
      case 2:
        count2.value += 1;
        break;
      case 3:
        count3.value += 1;
        break;
      case 4:
        count4.value += 1;
        break;
    }
  }
};

const genUniqKey = (k: any) => {
  return Symbol(k).toString();
};
</script>



<style lang="scss" scoped>
.wrapper {
  height: 100%;
  .list-wrapper {
    background-color: #fff;
    padding: 0 5px 0 10px;
    .item {
      display: flex;
      border-bottom: 1px solid #f4f4f4;
      padding: 14px 0;
      .left {
        display: flex;
        flex: 1;

        .text-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .tit {
          color: #333;
        }

        .desc,
        .sale {
          font-size: 12px;
          color: #999;
        }
      }

      .right {
        flex: 0 0 84px;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        .add {
          display: flex;
          align-items: center;
          background-color: #fff;
          position: relative;
          z-index: 200;
          span {
            color: #818181;
          }

          .opt {
            width: 28px;
            height: 28px;
            line-height: 28px;
            text-align: center;
            font-size: 20px;
            &:active {
              color: #47b34f;
            }
          }
          .num {
            width: 28px;
            height: 28px;
            line-height: 28px;
            text-align: center;
            font-size: 20px;
            &:active {
              color: #47b34f;
            }

            font-size: 16px;
          }
        }
      }
    }
  }

  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    height: 48px;
    border: 1px solid #d9d9d9;
    justify-content: space-between;
    z-index: 1000;



    .cart {
      flex: 0 0 40px;
      height: 40px;
      background-color: #bebebe;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 5px 10px;
      border-radius: 50%;
      transition: 0.4s cubic-bezier(0.17, 0.67, 0.59, 1.48);
      &:active {
        background-color: #47b34f;
        flex: 0 0 50px;
        height: 50px;
        transform: translateY(-12px);
      }



      img {
        width: 25px;
      }

      .count {
        position: absolute;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        top: 0;
        right: 0;
        border-radius: 50%;
        background-color: #ff5d5c;
        color: #ffffff;
        font-size: 12px;
      }
    }

    /**添加商品时 */
    .cart__active {
        background-color: #47b34f !important;
        flex: 0 0 50px;
        height: 50px;
        transform: translateY(-12px);
      }
      /**购物车有商品时 */
      .cart__active_color {
        background-color: #47b34f !important;
      }

    .text {
      flex: 1;
      background-color: #fff;
      display: flex;
      align-items: center;
      color: #999;
      padding-left: 10px;
    }

    .check {
      flex: 0 0 115px;
      width: 115px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #bebebe;
      color: #ffffff;
      &:active {
        background-color: #47b34f;
      }
    }
  }

  .ball-container {
    /* 这里是外层的盒子做水平运动 */
    .horiz-ball {
      position: fixed;
      left: 25px;
      bottom: 20px;
      z-index: 100;
      transition: 0.4s all linear;
      .ball {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #47b34f;
        /* 小球本身做加速运动 通过贝塞尔来模拟 */
        // transition: 0.4s all cubic-bezier(0.49, -0.29, 0.75, 0.41);
        // transition: 0.4s all cubic-bezier(.55,.07,.92,.37);
        // transition: 0.4s all cubic-bezier(.55,.07,.79,.41);
        // transition: 0.4s all cubic-bezier(.64,.29,.96,.94) reverse;
        // transition: 0.4s all cubic-bezier(.64,.29,.96,.94);
        transition: 0.4s all cubic-bezier(.66,.13,.96,.72);
      }
    }
  }
}

 
</style>
