<template>
   <form>
      <label>Email:</label>
      <input type="email" required v-model="email" />

      <label>Password:</label>
      <input type="password" required v-model="password" />

      <label>Role:</label>
      <select v-model="role">
         <option value="developer">Web Developer</option>
         <option value="designer">Web Designer</option>
      </select>

      <label>Skills</label>
      <input type="text" v-model="tempSkill" @keyup="addSkill" />

      <div class="terms">
         <input type="checkbox" v-model="terms" required />
         <label>Accept Terms and Conditions</label>
      </div>

      <hr />
      <div>
         <input type="checkbox" value="Dom" v-model="names" />
         <label>Dom</label>
      </div>
      <div>
         <input type="checkbox" value="Bob" v-model="names" />
         <label>Bob</label>
      </div>
      <div>
         <input type="checkbox" value="Clay" v-model="names" />
         <label>Clay</label>
      </div>
      <div>
         <input type="checkbox" value="Lee" v-model="names" />
         <label>Lee</label>
      </div>
   </form>
   <p>Email: {{ email }}</p>
   <p>Password: {{ password }}</p>
   <p>Role: {{ role }}</p>
   <p>Terms accepted: {{ terms }}</p>
   <p>Names: {{ names }}</p>
</template>

<script>
export default {
   data() {
      return {
         email: '',
         password: '',
         role: 'designer',
         terms: false,
         tempSkill: '',
         names: ['Dom', 'Clay', 'Lee']
      };
   },
   methods: {
      addSkill(e) {
         //  console.log(e);
         if (e.key === ',' && this.tempSkill) {
         }
      }
   }
};
</script>

<style>
form {
   max-width: 420px;
   margin: 30px auto;
   background: white;
   text-align: left;
   padding: 40px;
   border-radius: 10px;
}
label {
   color: #aaa;
   display: inline-block;
   margin: 25px 0 15px;
   font-size: 0.6em;
   text-transform: uppercase;
   letter-spacing: 1px;
   font-weight: bold;
}
input,
select {
   display: block;
   padding: 10px 6px;
   width: 100%;
   box-sizing: border-box;
   border: none;
   border-bottom: 1px solid #ddd;
   color: #555;
}
input[type='checkbox'] {
   display: inline-block;
   width: 16px;
   margin: 0 10px 0 0;
   position: relative;
   top: 2px;
}
</style>
