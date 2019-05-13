<template>
  <div>
    <navbar />
    <nuxt />
    <scroll-to-top-button />
    <main-footer />
  </div>
</template>

<script>
  import Navbar from '~/components/Navbar';
  import MainFooter from '~/components/MainFooter';
  import ScrollToTopButton from '~/components/ScrollToTopButton';

  export default {
    components: {
      Navbar,
      MainFooter,
      ScrollToTopButton,
    },
  };
</script>
