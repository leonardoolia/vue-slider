const { createApp } = Vue;

const app = createApp({
    name: 'VueCarousel',
    data() {
        return {
            destinations,
            currentIndex: 0,
        }
    },

    methods: {
        goNext() {
            const lastIndex = this.isLastIndex;
            if (this.currentIndex === lastIndex) this.currentIndex = 0;
            else this.currentIndex++
        },

        goBack() {
            const lastIndex = this.isLastIndex;
            if (this.firstIndex) this.currentIndex = lastIndex
            else this.currentIndex--
        }
    },

    computed: {
        isLastIndex() {
            return this.destinations.length - 1;
        },

        firstIndex() {
            return this.currentIndex === 0;
        }
    },

    mounted() {
        setInterval(() => {
            this.goNext()
        }, 3000);
    }

});

app.mount('#root');