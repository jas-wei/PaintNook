<!-- security-form.vue -->
<template>
<hr>
  <form @submit.prevent="handleSubmit" class="form">
    <label class="input-label">
      Security Question: What is my favourite cake?
      <input type="text" v-model="security" />
    </label>
    <p class="message">{{ message }}</p>
    <button>Submit</button>
  </form>
</template>

<script>
  import '@/styles/login.css';
  export default {
    data() {
      return {
        title: 'Login Form',
        security: '',
        securityAnswer: 'c',
        message: ''
      };
    },
    methods: {
      handleSubmit() {
        this.$store.commit('setSecurity', this.security);

        if (this.security == this.securityAnswer){
          this.$store.commit('setAuthenticated', true)
          this.$router.push('/paintnook');
        } else{
          this.message = 'Incorrect Information Entered:';
        }
      }
    }
  };
</script>
