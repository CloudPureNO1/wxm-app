<template>
    <div>
        <img ref="productImage" :src="imageUrl" alt="Product" class="product-image" style="width: 100px;height:100px;"
            @click="animateToCart" />
        <div ref="cart" class="cart"></div>
        
    </div>
</template>


<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useLoadImg } from '../../../composable/staticImgUtil'

const imageUrl=useLoadImg('../../src/assets/img/flower.jpeg')

// 商品图片和购物车的引用
const productImage = ref<HTMLImageElement | null>(null);
const cart = ref<HTMLDivElement | null>(null);

// 动画状态
let animationId: number | null = null;
let startTime: number | null = null;
const duration = 1000; // 动画总时长，可根据需要调整
const gravity = 0.0005; // 重力加速度，影响抛物线形状
const startX = 0; // 商品图片初始X位置
const startY = 100; // 商品图片初始Y位置
const endX = 300; // 购物车X位置
const maxHeight = 50; // 抛物线最大高度估计

// 计算抛物线运动的Y坐标
const calculateY = (t: number) => {
    const tPrime = t / duration;
    const yPos = startY + maxHeight * (tPrime * (1 - tPrime)) - gravity * t * t / 2;
    return yPos;
};

// 动画函数
const animate = (timestamp: number) => {
    if (!startTime) startTime = timestamp;
    const timeElapsed = timestamp - startTime;

    if (timeElapsed <= duration) {
        const yPos = calculateY(timeElapsed);
        if (productImage.value) {
            // 确保productImage.value存在再进行赋值
            productImage.value.style.transform = `translate(${endX - startX}px, ${yPos}px)`;
        }
        // productImage.value?.style.transform = `translate(${endX - startX}px, ${yPos}px)`;
        animationId = requestAnimationFrame(animate);
    } else {
        // 动画结束，可以在这里处理后续动作，比如隐藏商品图片或将其移除
        cancelAnimationFrame(animationId??0);
        productImage.value?.classList.add('hidden');
    }
};

// 按钮点击事件触发动画
const animateToCart = () => {
    if (productImage.value && cart.value) {
        // 开始动画
        startTime = null;
        animationId = requestAnimationFrame(animate);
    }
};

// 生命周期钩子
onMounted(() => {
    // 初始化商品图片位置
    if (productImage.value) {
        productImage.value.style.transform = `translate(0px, ${startY}px)`;
    }
});

onUnmounted(() => {
    // 清理动画
    if (animationId !== null) {
        cancelAnimationFrame(animationId);
    }
});
</script>

<style scoped>
.product-image.hidden {
    display: none;
}

.cart {
    /* 购物车样式 */
}
</style>