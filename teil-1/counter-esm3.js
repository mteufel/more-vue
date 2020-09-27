import { createApp, h } from 'https://unpkg.com/vue@3.0.0-rc.7/dist/vue.runtime.esm-browser.js' 

const Counter = { 
   render() {
        return h('div' , { id: 'threeCounters' },
                        [ h('h1', `Counter1: ${this.counter}`), 
                          h('h1', `Counter2: ${this.counter2}`), 
                          h('h1', `Counter3: ${this.counter3}`) ] ) 
   }, 
   data() { 
    return { counter: 0,
            counter2: 5000,
            counter3: 8000
            }
   }, 
   mounted() { 
       setInterval(() => {
            this.counter++
            this.counter2--
            this.counter3++
        }, 1000) 
   } 
} 
createApp(Counter).mount('#counter')

