import { createApp } 
          from 'https://unpkg.com/vue@3.0.0-rc.7/dist/vue.esm-browser.js' 

    const Counter = { 

       template: '<h1>Counter: {{ counter }}</h1>',

       data() { 
          return { counter: 0 } 
       }, 
       mounted() { 
          setInterval(() => { this.counter++ }, 1000) 
      } 
} 
createApp(Counter).mount('#counter')
