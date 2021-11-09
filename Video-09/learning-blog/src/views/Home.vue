<template>
   <div class="home">
      <h1>Home</h1>
      <h2>Refs</h2>
      <p>{{ charOne.name }} - {{ charOne.age }}</p>
      <button @click="updateCharOne">Update character one</button>
      <h2>Reactive</h2>
      <p>{{ charTwo.name }} - {{ charTwo.age }}</p>
      <button @click="updateCharTwo">Update character two</button>

      <!-- Home
      <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
      <button @click="handleClick">click me</button>
      <button @click="age++">add 1 to age</button>
      <input type="text" v-model="name" /> -->
   </div>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
   name: 'Home',
   setup() {
      const charOne = ref({ name: 'Dom', age: 66 });
      const charTwo = reactive({ name: 'Lee', age: 19 });

      const updateCharOne = () => {
         charOne.value.age = 71;
      };

      const updateCharTwo = () => {
         charTwo.age = 20;
      };

      return { charOne, updateCharOne, charTwo, updateCharTwo };

      // console.log('setup');
      // "this.refs" can't be used in setup
      // const p = ref(null);

      // const name = ref('Gary King');
      // const age = ref(96);

      // const handleClick = () => {
      //    name.value = 'Shaun Riley';
      //    age.value = 21;

      //   console.log(p, p.value);
      //  p.value.classList.add('test');
      //  p.value.textContent = 'Good Mornin Yall';
      // };

      //  return { name, age, handleClick };
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
