const { createApp } = Vue;

const app = createApp({
    name: 'VueCarousel',
    data() {
        return {
            destinations,
            currentIndex: 0,
        }
    }
});

app.mount('#root');