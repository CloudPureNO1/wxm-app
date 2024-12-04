<template>
    <div class="app">
        <div class="product-list">
            <div v-for="(product, index) in products" :key="index" class="product"
                @click="animateToCart(product, index)">
                <img :src="product.image" :alt="product.name" ref="productImages"
                    :class="{ shrinking: isAnimating[index] }" style="width:100px;height:100px;" />
                <p>{{ product.name }}</p>
            </div>
        </div>

        <div class="cart-container">
            <img :src="cartImgSrc" alt="Shopping Cart" ref="cart" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';
import gsap from 'gsap';
import { useLoadImg } from '../../../composable/staticImgUtil'
interface Product {
    name: string;
    image: string;
}
const cartImgSrc = useLoadImg('../../src/assets/img/11.jpeg')
const products = reactive<Product[]>([
    { name: 'flower', image: useLoadImg('../../src/assets/img/flower.jpeg') },
    { name: 'girl', image: useLoadImg('../../src/assets/img/girl.jpeg') },
    { name: 'apple', image: useLoadImg('../../src/assets/img/fruit-apple.jpg') },
    // 更多产品...
]);

const productImages = ref<HTMLImageElement[]>([]);
const cart = ref<HTMLImageElement | null>(null);
const isAnimating = ref<Array<boolean>>(products.map(() => false));

onMounted(() => {
    productImages.value = Array.from(document.querySelectorAll('.product img'));
});

// const animateToCart = (product: Product, index: number) => {
//     if (!cart.value || !productImages.value[index]) return;

//     // 标记当前商品正在动画中
//     isAnimating.value[index] = true;

//     const startTop = productImages.value[index].getBoundingClientRect().top + window.scrollY;
//     const startLeft = productImages.value[index].getBoundingClientRect().left + window.scrollX;
//     const endTop = cart.value.getBoundingClientRect().top + window.scrollY;
//     const endLeft = cart.value.getBoundingClientRect().left + window.scrollX;

//     gsap.to(productImages.value[index], {
//         duration: 0.8,
//         scale: 0.5, // 缩小商品图片
//         x: endLeft, // 移动到购物车位置
//         y: endTop,
//         ease: 'power1.out', // 抛物线效果可以通过更复杂的插值函数实现，这里简化处理
//         onComplete: () => {
//             // 动画完成后，可以考虑隐藏或移除图片
//             isAnimating.value[index] = false;
//             // 这里可以添加更多处理，比如更新购物车数量等
//         }
//     });
// };

const animateToCart = (product: Product, index: number) => {
    if (!cart.value || !productImages.value[index]) return;

    isAnimating.value[index] = true;

    const productRect = productImages.value[index].getBoundingClientRect();
    const cartRect = cart.value.getBoundingClientRect();

    // 简化处理，尝试模拟抛物线效果
    const startX = productRect.left + window.scrollX;
    const startY = productRect.top + productRect.height / 2 + window.scrollY; // 从图片中心开始
    const midX = (startX + cartRect.left + cartRect.width / 2 + window.scrollX) / 2; // 控制点近似
    const midY = startY; // 简化处理，保持Y轴不变以模拟抛物线效果
    const endX = cartRect.left + cartRect.width / 2 + window.scrollX;
    const endY = cartRect.top + cartRect.height / 2 + window.scrollY;

    const pathData = `M${startX} ${startY} C${midX} ${midY}, ${midX} ${midY}, ${endX} ${endY}`;

    gsap.to(productImages.value[index], {
        duration: 1,
        attr: { // 使用attr修改SVG属性，如果是普通元素则需调整为CSS或transform
            d: pathData, // 使用构造的路径数据
        },
        ease: 'power1.out',
        scale: 0.5, // 缩小图片
        x: endX, // 移动到购物车位置
        y: endY,
        onComplete: () => {
            isAnimating.value[index] = false;
            // 动画完成后处理，如隐藏图片
        }
    });
};
</script>

<style scoped>
.product {
    display: flex;
    flex-direction: column;
    align-items: left;
    cursor: pointer;
}

.shrinking {
    transform-origin: center;
}
</style>