<template>
   <h1>Jobs</h1>
   <div v-if="jobs.length">
      <div v-for="job in jobs" :key="job.id" class="job">
         <!-- <h2>{{ job.title }}</h2> -->
         <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
            <h2>{{ job.title }}</h2>
         </router-link>
      </div>
   </div>
   <div v-else>
      <p>Loading Job details...</p>
   </div>
</template>

<script>
export default {
   data() {
      return {
         jobs: [
            // { title: 'Bobs Odd Jobs', id: 1, details: 'Pizza Man Extraordinaire' },
            // { title: 'Jobs Bobs Odd', id: 2, details: 'Extraordinaire Pizza Man' },
            // { title: 'Odd Jobs Bobs', id: 3, details: 'Man Extraordinaire Pizza' }
         ]
      };
   },
   mounted() {
      fetch('http://localhost:3000/jobs')
         .then((res) => res.json())
         .then((data) => (this.jobs = data))
         .catch((err) => console.log(err.message));
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
