<!-- login-form.vue -->
<template>
  <div class="login">
    <form @submit.prevent="handleLogin" class="form">
      <h1>{{ title }}</h1>
      <label class="input-label">
        Email
        <input type="text"/>
      </label>
      <label class="input-label">
        Password
        <input type="password"/>
      </label>
      <p class="message">{{ message }}</p>
      <button>Log in</button>
    </form>
    <button @click="isVisible=!isVisible">Forgot Password</button>
    <LoginSecurityQuestion v-if="isVisible"></LoginSecurityQuestion>
  </div>
</template>

<script>
import '@/styles/login.css';
import LoginSecurityQuestion from './LoginSecurityQuestion.vue';

export default {
  data() {
    return {
      title: 'Welcome To PaintNook',
      message: '',
      isVisible: false
    };
  },
  methods: {
    handleLogin() {
      this.message = 'Incorrect Information Entered:'
    }
  },
  name: 'LoginForm',
  components: {
    LoginSecurityQuestion
  }
};
</script>

