<template>
  <div class="container">
    <div class="seperation">
      <PageWelcome></PageWelcome>
      <PageAds/>
    </div>
  </div>
</template>

<script>
  import '@/styles/paintnook.css';
  import PageWelcome from '@/components/paintnook/PageWelcome.vue';
  import PageAds from '@/components/paintnook/PageAds.vue';

  export default {
    name: 'PaintNook',
    components: {
      PageAds,
      PageWelcome,
    },
  };
</script>

