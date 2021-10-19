<template>
   <h1>{{ title }}</h1>
   <Modal />
   <input type="text" ref="name" />
   <button @click="handleClick">click me</button>
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
         title: 'My first Vue App :)'
      };
   },
   methods: {
      handleClick() {
         console.log(this.$refs.name);
         this.$refs.name.classList.add('active');
         this.$refs.name.focus();
      }
   }
};
</script>

<style>
#app {
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
