import { ref } from "vue";
import { defineStore } from "pinia";
import type { ConfigProviderTheme } from "vant";
export const useThemeStore = defineStore("theme", () => {
    //   ref ==》state
    //   computed() => getters
    //   函数=>actions
    const theme = ref<ConfigProviderTheme>("light");
    const changeTheme = (value: ConfigProviderTheme | string) => {
        theme.value = value as ConfigProviderTheme;
    };
    return { theme, changeTheme };
});

export const useTabbarStore=defineStore('tabbar',()=>{
    const active=ref<number>(0)
    const changeActive=(currentActive:number)=>{
        active.value=currentActive
    }
    return {active,changeActive}
})
 