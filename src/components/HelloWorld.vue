<!-- ExampleComponent.vue -->
<template>
  <div>
    <p>{{ message }}</p>
    <button @click="updateMessage">Update Message</button>
  </div>
</template>

<script>
export default {
  computed: {
    message() {
      return this.$store.state.message;
    }
  },
  methods: {
    updateMessage() {
      this.$store.dispatch('updateMessage', 'This is Message');
    }
  }
}
</script>
