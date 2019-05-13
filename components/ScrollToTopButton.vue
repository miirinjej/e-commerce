<template>
  <div>
    <transition name="fade">
      <div
        v-if="navbarIsInvisible"
        class="scroll-to-top-button"
        @click="scrollToTop"
      >
        <fa
          class="scroll-to-top-button-icon"
          icon="chevron-up"
        />
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'ScrollToTopButton',
    data() {
      return {
        navbarIsInvisible: false,
        mainFooterIsVisible: false,
      };
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        const { body } = document;
        const html = document.documentElement;
        const navbar = document.querySelector('.navbar');
        const scrollToTopButton = document.querySelector('.scroll-to-top-button');

        this.navbarIsInvisible = ((body.scrollTop
          > (navbar.offsetTop + navbar.offsetHeight))
          || (html.scrollTop
            > (navbar.offsetTop + navbar.offsetHeight)));


        const mainFooter = document.querySelector('.main-footer');

        this.mainFooterIsVisible = (((body.scrollTop + window.innerHeight)
          > mainFooter.offsetTop)
          || ((html.scrollTop + window.innerHeight)
            > mainFooter.offsetTop));

        if (scrollToTopButton) {
          if (this.mainFooterIsVisible) {
            scrollToTopButton.style.bottom = `${(html.scrollTop
              + window.innerHeight) - mainFooter.offsetTop + 40}px`;
          } else {
            scrollToTopButton.style.bottom = '40px';
          }
        }
      },
      scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      },
    },
  };
</script>

<style lang="scss" scoped>
    .scroll-to-top-button {
      position: fixed;
      right: calculate-rem(40);
      font-size: 1.125rem;
      cursor: pointer;
      user-select: none;

      &:hover {
        color: $color-name--carnation;
      }
    }

    .scroll-to-top-button-icon {
      position: absolute;
    }
</style>
