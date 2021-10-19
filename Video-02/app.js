const app = Vue.createApp({
    data() {
        return {
            url: 'http://www.google.co.uk',
            showBooks: 'true',
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.png', isFav: true },
                { title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.png', isFav: false },
                { title: 'the final empire', author: 'brandon sanderson', img: 'assets/3.png', isFav: true },
            ]
            /*title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45,*/


            /* x: 0,
            y: 0 */
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        toggleFav(book) {
            book.isFav = !book.isFav
        }
        /*handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }*/
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')