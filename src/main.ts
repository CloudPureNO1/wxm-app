import { createApp } from "vue";
import { createPinia } from "pinia";

import AppVue from "./App.vue";
import router from "./router";
import i18n from './i18n'

// import global style
import './assets/global.scss'



// vant 按需引入的样式放在main.ts 中，以避免不同模块重复引入
// 1. 引入你需要的组件
// import { ConfigProvider,NavBar, Tabbar, TabbarItem, Button, Card } from "vant";
import Vant from 'vant'
// 2. 引入组件样式
import 'vant/lib/index.css';

// 瀑布流插件
import { VueMasonryPlugin } from 'vue-masonry';

 
const app = createApp(AppVue);

app.use(createPinia());
app.use(router);
app.use(i18n)
app.use(Vant)
app.use(VueMasonryPlugin)

 

// app.use(ConfigProvider);
// app.use(Button);
// app.use(Card);
// app.use(NavBar);
// app.use(Tabbar);
// app.use(TabbarItem);

app.mount("#app");







// import { setupBackButtonListener } from './composable/backButtonHandler';
// import { setupBackButtonListener } from './composable/backButtonHandlerCapacitor';


// 设置回退按钮监听器

//  setupBackButtonListener(router);


// App.addListener('backButton', async () => {
//     await handleBackButton();
// });

// 在Vue实例创建后设置监听器
// let unmountCleanup: (() => void) | null = null;


// 注意：Vue 3 应用通常不需要手动卸载，以下代码仅作演示
// 如果你的应用有特定的场景需要手动卸载应用，请根据实际情况调整
// app.unmount(() => {
//   if (unmountCleanup) {
//     unmountCleanup();
//   }
// });

// 实际上，对于大多数场景，你可能不需要手动调用unmount，监听器的清理逻辑
// 可能需要根据你的应用架构来灵活调整位置和时机。














// Above the createApp() line
// import { defineCustomElements } from '@ionic/pwa-elements/loader';
// defineCustomElements(window);

// import { Toast } from '@capacitor/toast';

// const showHelloToast = async (msg: any = '') => {
//     await Toast.show({
//         text: `${msg}!`,
//     });
// };


// // import { useRouter } from 'vue-router';
// // 导入Capacitor的App插件

// import { App } from '@capacitor/app';


// // 处理逻辑： 1s内，连续两次按返回键，则退出应用；
// let first = 0;
// // 定义一个处理回退按钮的函数
// async function handleBackButton(): Promise<void> {
//     // 使用Vue Router的全局实例来进行回退操作
//     // const router = useRouter();
//     const currentRoute = router.currentRoute.value;

//     if (currentRoute.name !== 'home') { // 示例：在首页时不处理回退
//         first = 0;
//         await router.go(-1); // 回到上一页

//     } else {
//         if (first<=0) {
//             first = Date.now();//记录第一次按下回退键的时间
//             showHelloToast("再按一次退出应用");
//         } else {
//             showHelloToast((new Date().getTime() - first)+'');
//             if ((Date.now() - first) < 1000) {
//                 //如果两次按下的时间小于1s
//                 App.exitApp(); //那么就退出app
//             }
//             // 如果已经是首页，根据需要决定是否退出App
//             // 这里可以选择调用CapacitorApp.exitApp()来退出，或者什么都不做
//             // App.exitApp()
//         }

//     }
// }


// App.addListener('backButton', async () => {
//     await handleBackButton();
// });


import { useBackButton } from './composable/backButton'
useBackButton(router)