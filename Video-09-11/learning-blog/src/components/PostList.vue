<template>
   <div class="post-list">
      <div v-for="post in posts" :key="post.id">
         <!-- <h3>{{ post.title }}</h3> -->
         <SinglePost :post="post" />
      </div>
   </div>
</template>

<script>
import { onMounted } from 'vue';
import SinglePost from './SinglePost.vue';
import { onUnmounted } from '@vue/runtime-core';
import { onUpdated } from '@vue/runtime-core';
export default {
   props: ['posts'],
   components: { SinglePost },
   setup(props) {
      onMounted(() => console.log('component mounted'));
      onUnmounted(() => console.log('component unmounted'));
      onUpdated(() => console.log('component updated'));

      //   console.log(props.posts);
   }
   //    mounted() {
   //       console.log('mounted using options api');
   //    }
};
</script>

<style></style>
