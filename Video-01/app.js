const app = Vue.createApp({
    //template: '<h2>I am the template</h2>'
    data() {
        return {
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45,
            showBooks: 'true'
        }
    },
    methods: {
        //changeTitle(title) {
        //console.log('you clicked me')
        //this.title = 'Words of Radiance'
        //this.title = title
        //}
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')