let app = new Vue({
            el: "#root",
            data: {
                counter: 0,
                images: [
                    "https://images-na.ssl-images-amazon.com/images/I/81c-Z6s%2BZVL._AC_SY450_.jpg",
                    "https://images-na.ssl-images-amazon.com/images/I/81RbUzdZy6L._AC_SL1500_.jpg",
                    "https://images-na.ssl-images-amazon.com/images/I/71kTTalOpVL._AC_SL1500_.jpg",
                    "https://images-na.ssl-images-amazon.com/images/I/81fwIFkvLGL._AC_SL1500_.jpg",
                    "https://images-na.ssl-images-amazon.com/images/I/81V1Ph3IQIL._AC_SY679_.jpg",
                    "https://images-na.ssl-images-amazon.com/images/I/81N8HnjtMhL._AC_SL1414_.jpg"
                ]

            },
            methods: {
                prev() {
                    console.log("ho clicckato qua");
                    if (this.counter === 0) {
                        return this.counter = this.images.length - 1
                    }
                    return this.counter -= 1
                },
                next() {
                    console.log("ho cliccato qui");
                    if (this.counter === this.images.length - 1) {
                        return this.counter = 0
                    }
                    return this.counter += 1
                },

            }
})