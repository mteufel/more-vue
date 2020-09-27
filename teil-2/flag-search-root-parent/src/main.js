import { createApp, h } from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'


const rootInstance = createApp( {
    data() {
      return { initialCountry: 'ro' }
    },
    render() {
      return h(App)
    }
  }
)
rootInstance.config.productionTip = false;
rootInstance.use(Antd)
rootInstance.mount('#app')
