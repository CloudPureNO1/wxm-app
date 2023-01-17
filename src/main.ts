import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import i18n from './i18n'

// import global style
import  './assets/global.scss'

// vant 按需引入的样式放在main.ts 中，以避免不同模块重复引入
// 1. 引入你需要的组件
// import { ConfigProvider,NavBar, Tabbar, TabbarItem, Button, Card } from "vant";
import Vant from 'vant'
// 2. 引入组件样式
import 'vant/lib/index.css';

// 瀑布流插件
import {VueMasonryPlugin} from 'vue-masonry';

const app = createApp(App);

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
