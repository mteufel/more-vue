import { createApp, h } 
          from 'https://unpkg.com/vue@3.0.0-rc.7/dist/vue.runtime.esm-browser.js' 

    const Counter = { 

       render() {
           return h('h1', `Counter ${this.counter}`) 
       },

       data() { 
          return { counter: 0 } 
       }, 
       mounted() { 
          setInterval(() => { this.counter++ }, 1000) 
       } 
} 
createApp(Counter).mount('#counter')
