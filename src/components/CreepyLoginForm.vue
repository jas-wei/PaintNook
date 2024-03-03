<!-- login-form.vue -->
<template>
  <form @submit.prevent="handleLogin" class="form">
    <h1>{{ title }}</h1>
    <label class="input-label">
      Email
      <input type="text" v-model="email" />
    </label>
    <label class="input-label">
      Password
      <input type="password" v-model="password" />
    </label>
    <p class="message">{{ message }}</p>
    <button>Log in</button>
  </form>
  <button @click="isVisible=true">Forgot Password</button>
  <LoginSecurityQuestion v-if="isVisible"></LoginSecurityQuestion>
</template>

<script>
import '@/styles/login.css';
import LoginSecurityQuestion from './LoginSecurityQuestion.vue';

export default {
  data() {
    return {
      title: 'Welcome To PaintNook',
      email: '',
      password: '',
      message: '',
      isVisible: false
    };
  },
  methods: {
    handleLogin() {
      this.$store.commit('setEmail', this.email);
      this.$store.commit('setPassword', this.password);
      
      this.$store.commit('setAuthenticated', true)
      try {
        // Successful login
        // Redirect to the desired route or perform any other action
        console.log('login passed' + this.$store.isLoggedIn);
        this.$router.push('/paintnook');
      } catch (error) {
        // Handle login error
        this.message = 'Incorrect Information Entered:' + error;
      }
    }
  },
  name: 'LoginForm',
  components: {
    LoginSecurityQuestion
  }
};
</script>

