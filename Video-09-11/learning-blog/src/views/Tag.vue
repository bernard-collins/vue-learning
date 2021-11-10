<template>
   <div class="tag">
      <div v-if="posts.length">
         <PostList :posts="postswithTag" />
      </div>
      <div v-else-if="error">{{ error }}</div>
      <div v-else>
         <Spinner />
      </div>
   </div>
</template>

<script>
import Spinner from '../components/Spinner.vue';
import PostList from '../components/PostList.vue';
import getPosts from '../composables/getPosts';
import { useRoute } from 'vue-router';
import { computed } from '@vue/reactivity';

export default {
   components: { PostList, Spinner },
   setup() {
      const route = useRoute();
      const { posts, error, load } = getPosts();

      load();

      const postswithTag = computed(() => {
         return posts.value.filter((p) => p.tags.includes(route.params.tag));
      });

      return { error, posts, postswithTag };
   }
};
</script>

<style></style>
