const app = Vue.createApp({
    data(){
        return {
            product: "Sock",
            image: "./assets/images/socks_green.jpg",
            url: "https://www.google.com/",
            inStock: false,
            inventory: 0,
            onSale: true,
            details: ['50% cotton', "30% wool", "20% polyester"],
            variants: [
                {id: 2234, color: "green"},
                {id: 2235, color: "blue"}
            ],
            sizes: ["small", "medium", "large"]
        }
    }
})