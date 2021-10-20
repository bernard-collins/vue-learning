<template>
   <p>Murder time: {{ score }} ms</p>
   <p class="rank">{{ rank }}</p>
</template>

<script>
export default {
   props: ['score'],
   data() {
      return {
         rank: null
      };
   },
   mounted() {
      if (this.score < 200) {
         this.rank = 'Brutality';
      } else if (this.score < 400) {
         this.rank = 'Fatility';
      } else {
         this.rank = 'You Lose!';
      }
   }
};
</script>

<style>
.rank {
   font-size: 1.4em;
   color: crimson;
   font-weight: bold;
}
</style>
