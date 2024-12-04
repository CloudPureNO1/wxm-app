<template>
    <div class="product-container">
        <img ref="productImage" :src="product.imageUrl" alt="Product" @click="animateToCart" style="width:100px; height:100px;" />
        <div class="cart-container" ref="cart">
            <img src="@/assets/cart.png" alt="Shopping Cart" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import gsap from 'gsap';
import { useLoadImg } from '../../../composable/staticImgUtil'

const product = {
    imageUrl: useLoadImg('../../src/assets/img/flower.jpeg'),
};

// 明确指定类型为HTMLImageElement
const productImage = ref<HTMLImageElement | null>(null);
const cart = ref<HTMLDivElement | null>(null);

const animateToCart = () => {
    if (productImage.value && cart.value) {
        const startX = productImage.value.getBoundingClientRect().left + productImage.value.offsetWidth / 2;
        const startY = productImage.value.getBoundingClientRect().top + productImage.value.offsetHeight / 2;
        const endX = cart.value.getBoundingClientRect().left + cart.value.offsetWidth / 2;
        const endY = cart.value.getBoundingClientRect().top + cart.value.offsetHeight / 2;
        const controlX = startX + (endX - startX) / 2;
        const controlY = startY;

        const pathData = `M${startX},${startY} C${controlX},${controlY} ${controlX},${endY} ${endX},${endY}`;

        gsap.to(productImage.value, {
            duration: 3,
            css: {
                scale: 0.1,
                x: endX,
                y: endY
            },
            motionPath: {
                path: pathData,
                align: pathData,
                alignOrigin: [0.5, 0.5],
                autoRotate: false
            },
            ease: 'power1.out',
            onComplete: () => {
                productImage.value!.style.display = 'none';
            }
        });
    }
};
</script>

<style scoped>
.product-container {
    position: relative;
    height: 100vh;
    /* 仅作示例，根据实际页面布局调整 */
}

.cart-container {
    position: absolute;
    bottom: 20px;
    right: 20px;
}
</style>