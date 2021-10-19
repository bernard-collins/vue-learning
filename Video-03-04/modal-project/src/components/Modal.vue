<template>
   <div class="backdrop" @click.self="closeModal">
      <div class="modal" :class="{ makeUp: theme === 'makeUp' }">
         <h1>{{ header }}</h1>
         <p>{{ text }}</p>
      </div>
   </div>
</template>

<script>
export default {
   props: ['header', 'text', 'theme'],
   methods: {
      closeModal() {
         this.$emit('close');
      }
   }
};
</script>

<style>
.modal {
   width: 400px;
   padding: 20px;
   margin: 100px auto;
   background: white;
   border-radius: 10px;
}
.backdrop {
   top: 0;
   position: fixed;
   background: rgba(0, 0, 0, 0.5);
   width: 100%;
   height: 100%;
}

/* Either make it more specific or use scoped, but scoped has performance issues */
.modal h1 {
   color: #03cfb4;
   border: none;
   padding: 0;
}
.modal.makeUp {
   background: crimson;
   color: white;
}
.modal.makeUp h1 {
   color: white;
}
</style>
