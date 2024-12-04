
/**
 * 手机回退按钮或者返回键的处理
 */

// Above the createApp() line
import { defineCustomElements } from '@ionic/pwa-elements/loader';
defineCustomElements(window);

import { Toast } from '@capacitor/toast';

const showHelloToast = async (msg: any = '') => {
    await Toast.show({
        text: `${msg}!`,
    });
};


// import { useRouter } from 'vue-router';
// 导入Capacitor的App插件

import { App } from '@capacitor/app';


// 处理逻辑： 1s内，连续两次按返回键，则退出应用；
let first = 0;
// 定义一个处理回退按钮的函数
async function handleBackButton(router:any): Promise<void> {
    // 使用Vue Router的全局实例来进行回退操作
    // const router = useRouter();
    const currentRoute = router.currentRoute.value;

    if (currentRoute.name !== 'home') { // 示例：在首页时不处理回退
        first = 0;
        await router.go(-1); // 回到上一页

    } else {
        if (first <= 0) {
            first = Date.now();//记录第一次按下回退键的时间
            showHelloToast("再按一次退出应用");
        } else {
            showHelloToast((new Date().getTime() - first) + '');
            if ((Date.now() - first) < 1000) {
                first=0
                //如果两次按下的时间小于1s
                App.exitApp(); //那么就退出app
            }
            // 如果已经是首页，根据需要决定是否退出App
            // 这里可以选择调用CapacitorApp.exitApp()来退出，或者什么都不做
            // App.exitApp()
        }

    }
}


export function useBackButton(router:any) {
    // 监听手机的回退按钮事件
    App.addListener('backButton', async () => {
        await handleBackButton(router);
    });
}
 