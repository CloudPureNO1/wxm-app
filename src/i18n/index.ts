import { createI18n } from 'vue-i18n'
import type { I18n } from 'vue-i18n'

import enUS from './locales/en-US'
import zhCN from './locales/zh-CN'

// Type-define 'en-US' as the master schema for the resource
type MessageSchema = typeof zhCN

//   You must call useI18n at top of the setup.
// To compose with useI18n in setup of Vue 3, there is one thing you need to do, 
// you need set the legacy option of the createI18n function to false.
// The following is an example of adding the legacy option to createI18n:
// 2. Create i18n instance with options
const i18n = createI18n<[MessageSchema], 'en-US' | 'zh-CN'>({
    legacy: false, // you must set `false`, to use Composition API
    locale: 'zh-CN', // set locale
    fallbackLocale: 'en-US', // set fallback locale
    messages:{
        'en-US': enUS,
        'zh-CN': zhCN
    }, // set locale messages
    // If you need to specify other options, you can set other options
    // ...
  })
export default i18n

export function setI18nLanguage (i18n:I18n, locale:string) {
  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale
  } else {
    const test = i18n.global.locale
    i18n.global.locale.value = locale
    console.log(test)
  }
}