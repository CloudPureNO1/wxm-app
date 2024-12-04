<template>
    <div class="parabola-container" v-if="show">
        <canvas ref="canvas" :width="width" :height="height"></canvas>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watchEffect } from 'vue';

interface Props {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    duration?: number;
}

const props = withDefaults(defineProps<Props>(), { duration: 1000 });
const emit = defineEmits(['finish']);
const canvasRef = ref<HTMLCanvasElement | null>(null);
const ctx = ref<CanvasRenderingContext2D | null>(null);
const show = ref(false);
let animationFrameId: number | null = null;
const width = 600;
const height = 400;
const startTime = ref(0);

const calculateControlPoints = (from: { x: number, y: number }, to: { x: number, y: number }): { c1: { x: number, y: number }, c2: { x: number, y: number } } => {
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const cpDist = Math.sqrt(dx ** 2 + dy ** 2) / 4;
    return {
        c1: { x: from.x + dx / 2 - dy / cpDist, y: from.y + dy / 2 + dx / cpDist },
        c2: { x: to.x - dx / 2 - dy / cpDist, y: to.y - dy / 2 - dx / cpDist },
    };
};

const animate = (timestamp: number) => {
    if (!ctx.value || !startTime.value) return;
    const timeElapsed = timestamp - startTime.value;
    if (timeElapsed >= props.duration) {
        cancelAnimationFrame(animationFrameId!);
        show.value = false;
        emit('finish');
        return;
    }

    const progress = timeElapsed / props.duration;
    const currentX = props.startX + (props.endX - props.startX) * progress;
    const currentY = props.startY + (props.endY - props.startY) * progress;
    const controlPoints = calculateControlPoints({ x: props.startX, y: props.startY }, { x: props.endX, y: props.endY });

    ctx.value.clearRect(0, 0, width, height);
    ctx.value.beginPath();
    ctx.value.moveTo(props.startX, props.startY);
    ctx.value.bezierCurveTo(
        controlPoints.c1.x,
        controlPoints.c1.y,
        controlPoints.c2.x,
        controlPoints.c2.y,
        currentX,
        currentY
    );
    ctx.value.strokeStyle = '#000';
    ctx.value.stroke();

    animationFrameId = requestAnimationFrame(animate);
};

onMounted(() => {
    // ctx.value = canvasRef.value?.getContext('2d');
    if (canvasRef.value !== null && canvasRef.value !== undefined) {
        ctx.value = canvasRef.value.getContext('2d');
    } else {
        // 处理canvas为null或undefined的情况
    }
});

watchEffect(() => {
    if (props.startX !== undefined && props.endX !== undefined) {
        show.value = true;
        startTime.value = performance.now();
        animationFrameId = requestAnimationFrame(animate);
    }
});

onUnmounted(() => {
    cancelAnimationFrame(animationFrameId as number);
});
</script>

<style scoped>
.parabola-container {
    position: relative;
    width: 100%;
    height: 100%;
}
</style>