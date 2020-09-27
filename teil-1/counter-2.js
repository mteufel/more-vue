const Counter = { 

    template: '<h1>Counter: {{ counter }}</h1>',

    data() { 
        return { counter: 0 } 
    }, 
    mounted() { 
        setInterval(() => { this.counter++ }, 1000) 
    } 
} 
Vue.createApp(Counter).mount('#counter')
