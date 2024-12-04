<template>
    <QrcodeStream :paused="paused" @detect="onDetect" @camera-on="onCameraOn" @error="onError" @decode="onDecode"
        @init="onInit" :constraints="{ facingMode: 'environment' }">
        <van-overlay :show="loading">
            <div class="wrapper">
                <van-loading type="spinner" />
            </div>
        </van-overlay>
        <div v-if="!loading" style="position: relative;">
            <div class="qr-scanner">
                <div class="box">
                    <div class="line"></div>
                    <div class="angle"></div>
                </div>
            </div>
        </div>
    </QrcodeStream>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { QrcodeStream } from 'vue3-qrcode-reader';

const paused = ref<boolean>(false)
const showScan = ref<boolean>(false)
const loading = ref<boolean>(false)
/**
 * 扫码方法
 * @param detectedCodes
 */
const onDetect = async (detectedCodes: any[]) => {
    console.log('Detected:', detectedCodes);

    const target = detectedCodes[0];
    if (target && target.rawValue) {
        // target.rawValue 扫出来的内容
        paused.value = true;
        // 延时 做出扫出来之后暂停一下的效果
        await timeout(100);
        //  扫描同样的二维码 会有缓存 paused 改变会清除缓存 重新扫描
        paused.value = false;

        console.log('扫描出来的内容', target.rawValue);
        // 扫描成功之后 关闭扫码界面
        showScan.value = false;
        // 调用父组件的方法
        // 父组件调用子组件的方法
        // 父组件调用子组件的方法
        // 父组件调用子组件的方法
        // 父组件调用子组件的方法
        // 父组件调用子组件的方法
        // 父组件调用子组件的方法
        // 父组件调用子组件的方法
    }
};
async function timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
/**
 * 相机加载指示器 
 * 相机调用出来之前 一个loading效果
 */
const onCameraOn = () => {
    loading.value = false;
    console.log('Camera is ready');
};
const onError = (error: any) => {
    console.error('Camera error:', error);
};

const result = ref('')

const onDecode = ({ data }) => {
    // 扫描到二维码时的回调函数
    result.value = data
    console.log('结果', result.value)
    // 处理扫描结果
}

const onInit = () => {
    // 初始化成功时的回调函数
    console.log('Initiated')
}
</script>

<style scoped>
.qr-scanner {
    background-image:
        linear-gradient(0deg,
            transparent 24%,
            rgba(32, 255, 77, 0.1) 25%,
            rgba(32, 255, 77, 0.1) 26%,
            transparent 27%,
            transparent 74%,
            rgba(32, 255, 77, 0.1) 75%,
            rgba(32, 255, 77, 0.1) 76%,
            transparent 77%,
            transparent),
        linear-gradient(90deg,
            transparent 24%,
            rgba(32, 255, 77, 0.1) 25%,
            rgba(32, 255, 77, 0.1) 26%,
            transparent 27%,
            transparent 74%,
            rgba(32, 255, 77, 0.1) 75%,
            rgba(32, 255, 77, 0.1) 76%,
            transparent 77%,
            transparent);
    background-size: 3rem 3rem;
    background-position: -1rem -1rem;
    width: 100%;
    /* height: 100%; */
    height: 100vh;
    position: relative;
    background-color: #1110;

    /* background-color: #111; */
}

.qr-scanner .box {
    width: 213px;
    height: 213px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    border: 0.1rem solid rgba(0, 255, 51, 0.2);
    background-color: #1110;
}

.qr-scanner .line {
    height: calc(100% - 2px);
    width: 100%;
    background: linear-gradient(180deg, rgba(0, 255, 51, 0) 43%, #00ff33 211%);
    border-bottom: 3px solid #00ff33;
    transform: translateY(-100%);
    animation: radar-beam 2s infinite alternate;
    animation-timing-function: cubic-bezier(0.53, 0, 0.43, 0.99);
    animation-delay: 1.4s;
}

.qr-scanner .box:after,
.qr-scanner .box:before,
.qr-scanner .angle:after,
.qr-scanner .angle:before {
    content: '';
    display: block;
    position: absolute;
    width: 3vw;
    height: 3vw;

    border: 0.2rem solid transparent;
}

.qr-scanner .box:after,
.qr-scanner .box:before {
    top: 0;
    border-top-color: #00ff33;
}

.qr-scanner .angle:after,
.qr-scanner .angle:before {
    bottom: 0;
    border-bottom-color: #00ff33;
}

.qr-scanner .box:before,
.qr-scanner .angle:before {
    left: 0;
    border-left-color: #00ff33;
}

.qr-scanner .box:after,
.qr-scanner .angle:after {
    right: 0;
    border-right-color: #00ff33;
}

@keyframes radar-beam {
    0% {
        transform: translateY(-100%);
    }

    100% {
        transform: translateY(0);
    }
}
</style>