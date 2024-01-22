const { createApp } = Vue;

const app = createApp({
    name: 'VueCarousel',
    data() {
        return {
            destinations,
        }
    }
});

app.mount('#root');