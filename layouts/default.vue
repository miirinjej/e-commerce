<template>
  <div>
    <navbar />
    <nuxt />
    <main-footer />
  </div>
</template>

<script>
  import Navbar from '~/components/Navbar';
  import MainFooter from '~/components/MainFooter';

  export default {
    components: {
      Navbar,
      MainFooter,
    },
  };
</script>
