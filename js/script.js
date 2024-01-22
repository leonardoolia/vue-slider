const { createApp } = Vue;

const app = createApp({
    name: 'VueCarousel',
    data() {
        return {
            destinations,
            currentIndex: 0,
            autoPlay: null,
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
        },

        stopAutoPlay() {
            clearInterval(this.autoPlay)
        },

        startAutoPlay() {
            this.autoPlay = setInterval(() => {
                this.goNext()
            }, 3000);
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
        this.startAutoPlay()
    }

});

app.mount('#root');