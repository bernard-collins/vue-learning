<template>
   <h1>Jobs</h1>
   <dev v-for="job in jobs" :key="job.id">
      <h2>{{ job.title }}</h2>
   </dev>
</template>

<script>
export default {
   data() {
      return {
         jobs: [
            { title: 'Bobs Odd Jobs', id: 1, details: 'Pizza Man Extraudinair' },
            { title: 'Jobs Bobs Odd', id: 2, details: 'Extraudinair Pizza Man' },
            { title: 'Odd Jobs Bobs', id: 3, details: 'Man Extraudinair Pizza' }
         ]
      };
   }
};
</script>

<style></style>
