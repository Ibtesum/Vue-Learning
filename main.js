const app = Vue.createApp({
    data(){
        return {
            product: "Sock",
            image: "./assets/images/socks_green.jpg",
            url: "https://www.google.com/",
            inStock: false,
            inventory: 0,
            onSale: true
        }
    }
})