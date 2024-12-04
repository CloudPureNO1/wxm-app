// backButtonHandler.ts
// 用于监听Android和iOS设备上的返回按钮事件，并提供自定义的退出逻辑。

// import { useRouter } from 'vue-router';

// 导入Capacitor的App插件

import { App } from '@capacitor/app';
// Above the createApp() line
import { defineCustomElements } from '@ionic/pwa-elements/loader';
defineCustomElements(window);

import { Toast } from '@capacitor/toast';

const showHelloToast = async (msg: any = '') => {
    await Toast.show({
        text: `${msg}!`,
    });
};


export function setupBackButtonListener(router: any) {
    // const router = useRouter();
    let first = 0;
    const handleBackButton = (event: PopStateEvent) => {
        console.log('1111111111111');

        console.log('>>>>路由：', router);
        console.log('>>>>路由：', router.currentRoute.value);
        const currentRoute = router.currentRoute.value;
        console.log('>>>>路由：', currentRoute.path);
        if (first === 1 || shouldExitApp(currentRoute.path)) {
            // 如果是需要退出的应用页面，这里可以调用原生方法退出应用（如果是原生应用环境）
            if (first === 0) {
                first = 1
                showHelloToast("再按一次退出应用");
                event.preventDefault(); // 阻止默认的回退行为
            } else {
                console.log('退出应用', first);
                first = 0
                App.exitApp(); //那么就退出app
            }
        } else {
            first = 0
            return true; // 允许正常的回退操作
        }

    };

    if (typeof window !== 'undefined' && 'addEventListener' in window) {
        window.addEventListener('popstate', handleBackButton);

        // 返回一个卸载监听器的函数，以便在组件卸载时清理
        return () => {
            console.log('66666666666：');
            window.removeEventListener('popstate', handleBackButton);
        };
    }



}

function shouldExitApp(path: string) {
    // 自定义退出应用的条件，例如首页时退出
    return path === '/' || path === '/home';
}