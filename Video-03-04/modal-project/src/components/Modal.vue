<template>
   <div class="backdrop" @click.self="closeModal">
      <div class="modal" :class="{ makeUp: theme === 'makeUp' }">
         <!-- <h1>{{ header }}</h1>
         <p>{{ text }}</p> -->
         <slot>PSYCHOSOCIAL!</slot>
         <div class="actions">
            <slot name="jump"></slot>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   // props: ['header', 'text', 'theme'],
   props: ['theme'],
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
.modal .actions {
   text-align: center;
   margin: 30px 0 10px 0;
}
.modal .actions a {
   color: #333;
   padding: 8px;
   border: 1px solid #eee;
   border-radius: 4px;
   text-decoration: none;
   margin: 10px;
}
.modal.makeUp {
   background: crimson;
   color: white;
}
.modal.makeUp h1 {
   color: white;
}
.modal.makeUp .actions {
   color: white;
}
.modal.makeUp .actions a {
   color: white;
}
</style>
