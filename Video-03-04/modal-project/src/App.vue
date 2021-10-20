<template>
   <h1>{{ title }}</h1>
   <br />
   <input type="text" ref="name" />
   <button @click="handleClick">click me</button>
   <teleport to=".modals" v-if="showModal">
      <!-- <Modal :header="header" :text="text" theme="makeUp" @close="toggleModal" /> -->
      <Modal theme="makeUp" @close="toggleModal">
         <template v-slot:jump>
            <a href="">Jump for your love</a>
            <a href="">JUMP IN!</a>
         </template>
         <h1>WAKE UP!</h1>
         <p>Wake Up!</p>
      </Modal>
   </teleport>
   <teleport to=".modals" v-if="showModalTwo">
      <Modal @close="toggleModalTwo">
         <h1>MURMAIDER! MURMAIDER!</h1>
         <p>One two three four five six seven eight</p>
      </Modal>
   </teleport>
   <p>Welcome...</p>
   <button @click.alt="toggleModal">open modal (alt)</button>
   <button @click.shift="toggleModalTwo">open modal (shift)</button>
   <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Modal from './components/Modal.vue';

export default {
   name: 'App',
   components: {
      Modal
      //    HelloWorld
   },
   data() {
      return {
         title: 'My first Vue App',
         // header: 'WAKE UP!',
         // text: 'Wake up!',
         showModal: false,
         showModalTwo: false
      };
   },
   methods: {
      handleClick() {
         console.log(this.$refs.name);
         this.$refs.name.classList.add('active');
         this.$refs.name.focus();
      },
      toggleModal() {
         this.showModal = !this.showModal;
      },
      toggleModalTwo() {
         this.showModalTwo = !this.showModalTwo;
      }
   }
};
</script>

<style>
#app,
.modals {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
   margin-top: 60px;
}
h1 {
   border-bottom: 1px solid #ddd;
   display: inline-block;
   padding-bottom: 10px;
}
</style>
