import { createApp } from 'vue'
import App from '@/App'
import '@/styles/index.less'

console.log('【dy-vue-admin】进入 Main.ts 文件', App)

// 创建 Vue 实例
const app = createApp(App)

// 挂载到实例上
app.mount('#app') 
