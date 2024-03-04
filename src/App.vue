<template>
  <div>
    <PageHeader v-if="isAuthenticated"/>
    <LoginForm v-if="!isAuthenticated"/> <!-- Show LoginForm.vue when not logged in -->
  </div>
</template>

<script>
import axios from 'axios'; // Import axios if not already imported
import { mapState } from 'vuex';
import LoginForm from './components/LoginForm.vue'
import PageHeader from './components/PageHeader.vue'

export default {
  name: 'App',
  data() {
    return {
      errorHtml:'',
    }
  },
  mounted() {
    //this.loadErrorHtml();
  },
  components: {
    LoginForm,
    PageHeader,
  },
  computed: {
    ...mapState(['isAuthenticated',])
  },
  methods: {
    async loadErrorHtml() {
      try {
        const response = await axios.get('/assets/html/error.html');
        this.errorHtml = response.data;
      } catch (error) {
        console.error('Error fetching error.html file:', error);
      }
    },
  }
}
</script>
<style>@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap')</style>
<style>
#app {
  //font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
