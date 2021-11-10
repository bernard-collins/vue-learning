<template>
   <div class="home">
      <h1>Home</h1>
      <div v-if="posts.length">
         <PostList :posts="posts" />
      </div>
      <div v-else-if="error">{{ error }}</div>
      <div v-else>Loading...</div>

      <!-- <PostList v-if="showPosts" :posts="posts" />
      <button @click="showPosts = !showPosts">toggle posts</button>
      <button @click="posts.pop()">delete a post</button> -->

      <!-- <input type="text" v-model="search" />
      <p>search term - {{ search }}</p>
      <div v-for="name in matchingNames" :key="name">{{ name }}</div>
      <button @click="handleClick">stop watching</button> -->

      <!-- <p>{{ name }}</p> -->

      <!-- <h2>Refs</h2>
      <p>{{ charOne.name }} - {{ charOne.age }}</p>
      <button @click="updateCharOne">Update character one</button>
      <h2>Reactive</h2>
      <p>{{ charTwo.name }} - {{ charTwo.age }}</p>
      <button @click="updateCharTwo">Update character two</button> -->

      <!-- Home
      <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
      <button @click="handleClick">click me</button>
      <button @click="age++">add 1 to age</button>
      <input type="text" v-model="name" /> -->
   </div>
</template>

<script>
import PostList from '../components/PostList.vue';
import getPosts from '../composables/getPosts';
// import { ref } from 'vue';

// import { ref, reactive } from 'vue';
// import { computed, ref, watch, watchEffect } from 'vue';

export default {
   name: 'Home',
   components: { PostList },
   setup() {
      const { posts, error, load } = getPosts();

      load();
      // const posts = ref([
      //    {
      //       title: 'Welcome to the Jungle',
      //       body: 'We got fun and games Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel quam bibendum, rhoncus est a, sagittis odio. Nullam laoreet vitae turpis vitae ultrices. Morbi ac pellentesque massa. Sed imperdiet tincidunt lectus, id hendrerit nisi vulputate et. Donec fermentum posuere massa, vitae porttitor sem lobortis ut. Curabitur ultricies nisl justo, in iaculis dui malesuada id. Morbi viverra, velit non facilisis convallis, turpis est cursus sapien, id aliquet eros tortor ac diam.',
      //       id: 1
      //    },
      //    { title: 'Reach for the stars', body: 'Climb every mountain high', id: 2 }
      // ]);

      // const posts = ref([]);
      // const error = ref(null);
      // const load = async () => {
      //    try {
      //       let data = await fetch('http://localhost:3000/posts');
      //       if (!data.ok) {
      //          throw Error('no data available');
      //       }
      //       posts.value = await data.json();
      //       // console.log(data);
      //    } catch (err) {
      //       error.value = err.message;
      //       console.log(error.value);
      //    }
      // };

      // load();

      return { posts, error };

      // const showPosts = ref(true);
      // return { posts, showPosts };

      // const search = ref('');
      // const names = ref(['Dom', 'Lee', 'Clay', 'Lambert', 'Wilfred', 'Warren']);

      // const stopWatch = watch(search, () => {
      //    console.log('watch function ran');
      // });

      // const stopEffect = watchEffect(() => {
      //    console.log('watchEffect function ran', search.value);
      // });

      // const matchingNames = computed(() => {
      //    return names.value.filter((name) => name.includes(search.value));
      // });

      // const handleClick = () => {
      //    stopWatch();
      //    stopEffect();
      // };

      // return { names, search, matchingNames, handleClick };

      // const name = computed(() => {
      //    return 'Shaun';
      // });

      // return { name };

      // const charOne = ref({ name: 'Dom', age: 66 });
      // const charTwo = reactive({ name: 'Lee', age: 19 });
      // const updateCharOne = () => {
      //    charOne.value.age = 71;
      // };
      // const updateCharTwo = () => {
      //    charTwo.age = 20;
      // };
      // return { charOne, updateCharOne, charTwo, updateCharTwo };
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
