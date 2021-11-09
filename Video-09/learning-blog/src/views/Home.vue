<template>
   <div class="home">
      Home
      <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
      <button @click="handleClick">click me</button>
      <button @click="age++">add 1 to age</button>
      <input type="text" v-model="name" />
   </div>
</template>

<script>
import { ref } from 'vue';

export default {
   name: 'Home',
   setup() {
      // console.log('setup');
      // "this.refs" can't be used in setup
      // const p = ref(null);

      const name = ref('Gary King');
      const age = ref(96);

      const handleClick = () => {
         name.value = 'Shaun Riley';
         age.value = 21;

         //  console.log(p, p.value);
         //  p.value.classList.add('test');
         //  p.value.textContent = 'Good Mornin Yall';
      };

      return { name, age, handleClick };
   }
   // setup runs before any other lifecycle hook
   // created() {
   //     console.log('created');
   //  },
   //  mounted() {
   //     console.log('mounted');
   //  }
};
</script>
