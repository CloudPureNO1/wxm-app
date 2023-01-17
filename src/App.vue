<template>
  <van-config-provider :theme="themeStore.theme">
    <div class="app">
      <router-view />
    </div>
  </van-config-provider>
</template>
<script lang="ts" setup>
import { useThemeStore } from './stores/system'
const themeStore = useThemeStore() // 解构 const {theme}=useThemeStore() 将会失去响应
</script>
