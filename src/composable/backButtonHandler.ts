// backButtonHandler.ts
// 用于监听Android和iOS设备上的返回按钮事件，并提供自定义的退出逻辑。

// import { useRouter } from 'vue-router';

export function setupBackButtonListener(router:any) {
    // const router = useRouter();

    const handleBackButton = (event: PopStateEvent) => {
        const currentRoute = router.currentRoute.value;
        if (shouldExitApp(currentRoute.path)) {
            // 如果是需要退出的应用页面，这里可以调用原生方法退出应用（如果是原生应用环境）
            console.log('退出应用');
            event.preventDefault(); // 阻止默认的回退行为
            return false;
        }
        return true; // 允许正常的回退操作
    };

    if (typeof window !== 'undefined' && 'addEventListener' in window) {
        window.addEventListener('popstate', handleBackButton);

        // 返回一个卸载监听器的函数，以便在组件卸载时清理
        return () => {
            window.removeEventListener('popstate', handleBackButton);
        };
    }
}

function shouldExitApp(path: string) {
    // 自定义退出应用的条件，例如首页时退出
    return path === '/'|| path === '/home';
}