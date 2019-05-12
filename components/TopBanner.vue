<template>
  <b-container
    fluid
    class="banner banner--top border-bottom"
  >
    <b-row class="h-100">
      <b-col
        class="nike-section banner-section p-0"
        cols="12"
        md="8"
        lg="6"
      >
        <picture class="nike-section__picture banner__picture">
          <source
            media="(max-width: 1023px)"
            srcset="/banners/top/xs-0.webp"
            type="image/webp"
          >
          <source
            media="(max-width: 1023px)"
            srcset="/banners/top/xs-0.png"
            type="image/png"
          >
          <source
            media="(min-width: 1024px) and (max-width: 1299px)"
            srcset="/banners/top/lg-0.webp"
            type="image/webp"
          >
          <source
            media="(min-width: 1024px) and (max-width: 1299px)"
            srcset="/banners/top/lg-0.png"
            type="image/png"
          >
          <source
            media="(min-width: 1300px)"
            srcset="/banners/top/xl-0.webp"
            type="image/webp"
          >
          <source
            media="(min-width: 1300px)"
            srcset="/banners/top/xl-0.png"
            type="image/png"
          >
          <img
            class="nike-section__image banner__image"
            src="/banners/top/xl-0.png"
            alt="nike red"
          >
        </picture>
        <div class="nike-section__promo banner-section__promo">
          <div class="nike-section__title banner-section__title">
            Nike Red
          </div>
          <div class="nike-section__destination banner-section__destination">
            New
          </div>
        </div>
      </b-col>
      <b-col
        class="sale-section banner-section d-none d-md-flex d-lg-none p-0"
        cols="6"
        md="4"
      >
        <picture class="sale-section__picture banner__picture">
          <source
            media="(min-width: 768px)"
            srcset="/main-header/slider/slide-1/md-2.webp"
            type="image/webp"
          >
          <source
            media="(min-width: 768px)"
            srcset="/main-header/slider/slide-1/md-2.png"
            type="image/png"
          >
          <img
            class="sale-section__image banner__image"
            src="/main-header/slider/slide-1/md-2.png"
            alt="sale"
          >
        </picture>
        <div class="sale-section__promo banner-section__promo">
          <div class="sale-section__title banner-section__title">
            Sale
          </div>
          <div class="sale-section__destination banner-section__destination">
            -70%
          </div>
        </div>
      </b-col>
      <b-col
        class="caps-section banner-section d-none d-lg-flex"
        lg="6"
      >
        <picture class="caps-section__picture banner__picture">
          <source
            media="(max-width: 1299px)"
            srcset="/banners/top/lg-1.webp"
            type="image/webp"
          >
          <source
            media="(max-width: 1299px)"
            srcset="/banners/top/lg-1.png"
            type="image/png"
          >
          <source
            media="(min-width: 1300px)"
            srcset="/banners/top/xl-1.webp"
            type="image/webp"
          >
          <source
            media="(min-width: 1300px)"
            srcset="/banners/top/xl-1.png"
            type="image/png"
          >
          <img
            class="caps-section__image banner__image"
            src="/banners/top/xl-1.png"
            alt="caps"
          >
        </picture>
        <div class="caps-section__promo banner-section__promo">
          <div class="caps-section__title banner-section__title">
            Caps & Hats
          </div>
          <div class="caps-section__destination banner-section__destination">
            Sale -50%
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    name: 'Banner',
  };
</script>

<style lang="scss" scoped>
  .banner {
    height: calculate-rem(237);
    padding: 0;
    margin-bottom: calculate-rem(60);

    @include mq($from: md) {
      height: calculate-rem(251);
    }

    @include mq($from: lg) {
      height: calculate-rem(232);
    }

    @include mq($from: xl) {
      height: calculate-rem(384);
    }

    @include mq($from: 1440px) {
      padding: 0 17%;
    }

    @include mq($from: xxl) {
      padding: 0 34%;
    }
  }

  .banner-section {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .banner__picture {
    height: 100%;
  }

  .banner__image {
    height: 100%;
    object-fit: contain;
  }

  .banner-section__promo {
    position: absolute;
    color: $color-name--white;
    text-align: center;
  }

  .banner-section__title {
    font-family: $font-family--josefin-sans;
    font-size: calculate-rem(24);
    color: $color-name--black;

    @include mq($from: md) {
      font-size: calculate-rem(26);
    }

    @include mq($from: xl) {
      font-size: calculate-rem(30);
    }
  }

  .banner-section__destination {
    font-family: $font-family--eb-garamond;
    font-size: calculate-rem(14);
    color: $color-name--boulder;

    @include mq($from: md) {
      font-size: calculate-rem(16);
    }
  }

  .nike-section {
    @include mq($from: md) {
      &::after {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 1px;
        height: 100%;
        content: "";
        background: $color-name--mercury;
      }
    }
  }

  .nike-section__promo,
  .caps-section__promo {
    top: calculate-rem(36);
    right: calculate-rem(36);

    @include mq($from: md) {
      right: calculate-rem(76);
    }

    @include mq($from: xl) {
      top: calculate-rem(65);
      right: 15.84615384615%;
    }
  }

  .sale-section__promo {
    position: absolute;
    bottom: calculate-rem(31);
    left: 50%;
    width: 100%;
    text-align: center;
    transform: translateX(-50%);
  }

  .sale-section__title {
    font-family: $font-family--josefin-sans;
    font-size: calculate-rem(26);
    color: $color-name--carnation;
  }

  .sale-section__destination {
    font-family: $font-family--eb-garamond;
    color: $color-name--boulder;
  }

  .caps-section {
    justify-content: flex-start;
    padding: 0 0 0 1.7578125%;
    background: $color-name--alabaster;
  }
</style>
