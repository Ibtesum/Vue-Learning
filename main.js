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
                {id: 2234, color: "green", image: "./assets/images/socks_green.jpg"},
                {id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg"}
            ],
            sizes: ["small", "medium", "large"],
            cart: 0
        }
    },
    methods:{
        addToCart(){
            this.cart++
        },
        removeFromCart(){
            if(this.cart>0) this.cart--
        },
        changeImage(image){
            this.image = image
        }
    }
})