<template>
   <h1>Jobs</h1>
   <dev v-for="job in jobs" :key="job.id" class="job">
      <!-- <h2>{{ job.title }}</h2> -->
      <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
         <h2>{{ job.title }}</h2>
      </router-link>
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

<style>
.job h2 {
   background: #f4f4f4;
   padding: 20px;
   border-radius: 10px;
   margin: 10px auto;
   max-width: 600px;
   cursor: pointer;
   color: #444;
}
.job h2:hover {
   background: #ddd;
}
.job a {
   text-decoration: none;
}
</style>
