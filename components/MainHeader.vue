<template>
  <header class="main-header">
    <no-ssr placeholder="Loading...">
      <carousel
        class="main-header__carousel"
        :autoplay="true"
        :autoplay-timeout="4000"
        :loop="true"
        :pagination-enabled="true"
        :pagination-padding="12"
        :per-page="1"
      >
        <slide class="slide slide--0">
          <picture class="slide__picture">
            <source
              media="(max-width: 374px)"
              srcset="/main-header/slider/slide-0/xs.webp"
              type="image/webp"
            >
            <source
              media="(max-width: 374px)"
              srcset="/main-header/slider/slide-0/xs.jpg"
              type="image/jpeg"
            >
            <source
              media="(min-width: 375px) and (max-width: 767px)"
              srcset="/main-header/slider/slide-0/sm.webp"
              type="image/webp"
            >
            <source
              media="(min-width: 375px) and (max-width: 767px)"
              srcset="/main-header/slider/slide-0/sm.jpg"
              type="image/jpeg"
            >
            <source
              media="(min-width: 768px) and (max-width: 1023px)"
              srcset="/main-header/slider/slide-0/md.webp"
              type="image/webp"
            >
            <source
              media="(min-width: 768px) and (max-width: 1023px)"
              srcset="/main-header/slider/slide-0/md.jpg"
              type="image/jpeg"
            >
            <source
              media="(min-width: 1024px) and (max-width: 1299px)"
              srcset="/main-header/slider/slide-0/lg.webp"
              type="image/webp"
            >
            <source
              media="(min-width: 1024px) and (max-width: 1299px)"
              srcset="/main-header/slider/slide-0/lg.jpg"
              type="image/jpeg"
            >
            <source
              media="(min-width: 1300px)"
              srcset="/main-header/slider/slide-0/xl.webp"
              type="image/webp"
            >
            <source
              media="(min-width: 1300px)"
              srcset="/main-header/slider/slide-0/xl.jpg"
              type="image/jpeg"
            >
            <img
              class="slide__image"
              src="/main-header/slider/slide-0/xl.jpg"
              alt="new collection"
            >
          </picture>
          <div class="promo">
            <div class="promo__title">
              New collection
            </div>
            <div class="promo__description">
              black white
            </div>
            <div class="promo__destination">
              Spring <span class="promo__dash"></span> Summer
            </div>
          </div>
        </slide>
        <slide class="slide slide--1">
          <b-container class="p-0">
            <b-col
              cols="12"
              class="p-0 d-md-none h-100"
            >
              <div class="favorite-styles-section__promo favorite-styles-section__promo--mobile">
                <div></div>
                <div></div>
                <div class="favorite-styles-section__title">
                  Up to <span class="favorite-styles-section__discount">30%</span> off your favorite styles
                </div>
                <div class="favorite-styles-section__destination">
                  Metal detailing on low-tops, high-tops & purses
                </div>
                <div></div>
                <div></div>
              </div>
            </b-col>
            <b-row class="d-none d-md-flex h-100">
              <b-col
                class="p-0 h-100"
                cols="8"
                lg="6"
                xl="8"
              >
                <b-row class="adidas-section">
                  <picture class="adidas-section__picture h-100 d-none d-md-inline-block">
                    <source
                      media="(min-width: 768px)"
                      srcset="/main-header/slider/slide-1/md-0.webp"
                      type="image/webp"
                    >
                    <source
                      media="(min-width: 768px)"
                      srcset="/main-header/slider/slide-1/md-0.png"
                      type="image/jpeg"
                    >
                    <img
                      class="slide__image"
                      src="/main-header/slider/slide-1/md-0.png"
                      alt="adidas blue"
                    >
                  </picture>
                  <div class="adidas-section__promo">
                    <div class="adidas-section__title">
                      Adidas Blue
                    </div>
                    <div class="adidas-section__destination">
                      For men
                    </div>
                  </div>
                </b-row>
                <b-row class="middle-section">
                  <b-col
                    class="repair-patches-section p-0 h-100"
                    cols="6"
                  >
                    <picture class="d-none d-md-inline-block">
                      <source
                        media="(min-width: 768px)"
                        srcset="/main-header/slider/slide-1/md-1.webp"
                        type="image/webp"
                      >
                      <source
                        media="(min-width: 768px)"
                        srcset="/main-header/slider/slide-1/md-1.jpg"
                        type="image/jpeg"
                      >
                      <img
                        class="slide__image"
                        src="/main-header/slider/slide-1/md-1.jpg"
                        alt="adidas blue"
                      >
                    </picture>
                    <div class="repair-patches-section__promo">
                      <div class="repair-patches-section__title">
                        Repair Patches
                      </div>
                      <div class="repair-patches-section__destination">
                        £150.50
                      </div>
                    </div>
                  </b-col>
                  <b-col
                    class="sale-section p-0 h-100"
                    cols="6"
                  >
                    <picture class="d-none d-md-inline-block">
                      <source
                        media="(min-width: 768px)"
                        srcset="/main-header/slider/slide-1/md-2.webp"
                        type="image/webp"
                      >
                      <source
                        media="(min-width: 768px)"
                        srcset="/main-header/slider/slide-1/md-2.png"
                        type="image/jpeg"
                      >
                      <img
                        class="slide__image"
                        src="/main-header/slider/slide-1/md-2.png"
                        alt="adidas blue"
                      >
                    </picture>
                    <div class="sale-section__promo">
                      <div class="sale-section__title">
                        Sale
                      </div>
                      <div class="sale-section__destination">
                        -70%
                      </div>
                    </div>
                  </b-col>
                </b-row>
                <b-row class="bottom-section">
                  <b-col
                    cols="6"
                    class="accessories-section p-0"
                  >
                    <picture class="d-none d-md-inline-block">
                      <source
                        media="(min-width: 768px)"
                        srcset="/main-header/slider/slide-1/md-3.webp"
                        type="image/webp"
                      >
                      <source
                        media="(min-width: 768px)"
                        srcset="/main-header/slider/slide-1/md-3.png"
                        type="image/jpeg"
                      >
                      <img
                        class="slide__image"
                        src="/main-header/slider/slide-1/md-3.png"
                        alt="adidas blue"
                      >
                    </picture>
                    <div class="accessories-section__promo">
                      <div class="accessories-section__title">
                        Accessories
                      </div>
                      <div class="accessories-section__destination">
                        165 models
                      </div>
                    </div>
                  </b-col>
                  <b-col
                    cols="6"
                    class="p-0"
                  >
                    <div class="favorite-styles-section__promo">
                      <div class="favorite-styles-section__title">
                        Up to <span class="favorite-styles-section__discount">30%</span> off your favorite styles
                      </div>
                      <div class="favorite-styles-section__destination">
                        Metal detailing on low-tops, high-tops & purses
                      </div>
                    </div>
                  </b-col>
                </b-row>
              </b-col>
              <b-col
                cols="6"
                class="p-0 d-none d-lg-inline-block d-xl-none h-100"
                lg="3"
              >
                <b-row class="accessories-section">
                  <picture class="h-100">
                    <source
                      media="(min-width: 768px)"
                      srcset="/main-header/slider/slide-1/md-3.webp"
                      type="image/webp"
                    >
                    <source
                      media="(min-width: 768px)"
                      srcset="/main-header/slider/slide-1/md-3.png"
                      type="image/jpeg"
                    >
                    <img
                      class="slide__image"
                      src="/main-header/slider/slide-1/md-3.png"
                      alt="adidas blue"
                    >
                  </picture>
                  <div class="accessories-section__promo">
                    <div class="accessories-section__title">
                      Accessories
                    </div>
                    <div class="accessories-section__destination">
                      165 models
                    </div>
                  </div>
                </b-row>
                <b-row>
                  <div class="favorite-styles-section__promo">
                    <div class="favorite-styles-section__title">
                      Up to <span class="favorite-styles-section__discount">30%</span> off your favorite styles
                    </div>
                    <div class="favorite-styles-section__destination">
                      Metal detailing on low-tops, high-tops & purses
                    </div>
                  </div>
                </b-row>
              </b-col>
              <b-col
                class="lookbook-section d-none d-md-inline-block p-0 h-100"
                cols="4"
                lg="3"
                xl="4"
              >
                <picture class="h-100 w-100">
                  <source
                    media="(min-width: 768px)"
                    srcset="/main-header/slider/slide-1/md-4.webp"
                    type="image/webp"
                  >
                  <source
                    media="(min-width: 768px)"
                    srcset="/main-header/slider/slide-1/md-4.png"
                    type="image/jpeg"
                  >
                  <img
                    class="slide__image w-100"
                    src="/main-header/slider/slide-1/md-4.png"
                    alt="adidas blue"
                  >
                </picture>
                <div class="lookbook-section__promo">
                  <div class="lookbook-section__title">
                    Lookbook
                  </div>
                  <div class="lookbook-section__destination">
                    27 photos
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-container>
        </slide>
        <slide class="slide slide--2">
          <div class="discounts-section">
            <picture class="discounts-section__picture">
              <source
                srcset="/main-header/slider/slide-2/xs.webp"
                type="image/webp"
              >
              <source
                srcset="/main-header/slider/slide-2/xs.png"
                type="image/jpeg"
              >
              <img
                class="discounts-section__image slide__image"
                src="/main-header/slider/slide-1/xs.png"
                alt="adidas blue"
              >
            </picture>
            <div class="discounts-section__title">
              discounts
            </div>
            <div class="discounts-section__promo">
              <div class="discounts-section__destination">
                Stock up on laid-back threads <span class="discounts-section__discount">with 75%</span> on summer
                clothes
              </div>
              <div class="discounts-section__slogan d-none d-md-inline-block">
                You can prepair for your summer holidays – which feel like they’re finally in sight – with shorts and swims
              </div>
            </div>
          </div>
        </slide>
        <slide class="slide slide--3">
          <picture class="slide__picture">
            <source
              media="(max-width: 767px)"
              srcset="/main-header/slider/slide-3/xs.webp"
              type="image/webp"
            >
            <source
              media="(max-width: 767px)"
              srcset="/main-header/slider/slide-3/xs.jpg"
              type="image/jpeg"
            >
            <source
              media="(min-width: 768px) and (max-width: 1023px)"
              srcset="/main-header/slider/slide-3/md.webp"
              type="image/webp"
            >
            <source
              media="(min-width: 768px) and (max-width: 1023px)"
              srcset="/main-header/slider/slide-3/md.jpg"
              type="image/jpeg"
            >
            <source
              media="(min-width: 1024px) and (max-width: 1299px)"
              srcset="/main-header/slider/slide-3/lg.webp"
              type="image/webp"
            >
            <source
              media="(min-width: 1024px) and (max-width: 1299px)"
              srcset="/main-header/slider/slide-3/lg.jpg"
              type="image/jpeg"
            >
            <source
              media="(min-width: 1300px)"
              srcset="/main-header/slider/slide-3/xl.webp"
              type="image/webp"
            >
            <source
              media="(min-width: 1300px)"
              srcset="/main-header/slider/slide-3/xl.jpg"
              type="image/jpeg"
            >
            <img
              class="slide__image"
              src="/main-header/slider/slide-3/xl.jpg"
              alt="cardigan"
            >
          </picture>
        </slide>
      </carousel>
    </no-ssr>
  </header>
</template>

<script>
  export default {
    name: 'MainHeader',
    data() {
      return {
      };
    },
  };
</script>

<style lang="scss">
  .VueCarousel-wrapper {
    height: 100%;
  }

  .VueCarousel-inner {
    height: 100% !important;
  }

  .VueCarousel-pagination {
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    height: calculate-rem(56);
    border-top: 1px solid rgba($color-name--black, 0.07);

    @include mq($from: md) {
      height: calculate-rem(65);
    }

    @include mq($from: xl) {
      height: calculate-rem(80);
    }
  }

  .VueCarousel-dot-container {
    margin-top: 0 !important;

    .VueCarousel-dot {
      width: calculate-rem(6) !important;
      height: calculate-rem(6) !important;
      margin-top: 0 !important;
      background-color: $color-name--black !important;
      opacity: 0.15;

      &--active {
        background-color: $color-name--carnation !important;
        opacity: 1;
      }

      &:nth-of-type(2).VueCarousel-dot--active {
        background-color: $color-name--picton-blue_light !important;

        @include mq($from: md) {
          background-color: $color-name--carnation !important;
        }
      }

      &:nth-of-type(3).VueCarousel-dot--active {
        background-color: $color-name--picton-blue_light !important;
      }
    }
  }

  .slide--1 {
    .container {
      max-width: 100%;
      height: calculate-rem(530);
      overflow: hidden;

      @include mq($from: md) {
        width: calculate-rem(768);
        height: calculate-rem(755);
      }

      @include mq($from: lg) {
        width: calculate-rem(1024);
        height: calculate-rem(465);
      }

      @include mq($from: xl) {
        height: calculate-rem(770);
      }
    }
  }
</style>

<style lang="scss" scoped>
  .main-header {
    position: relative;
    display: flex;
    justify-content: center;
    height: calculate-rem(530);

    @include mq($from: md) {
      height: calculate-rem(820);
    }

    @include mq($from: lg) {
      height: calculate-rem(530);
    }

    @include mq($from: xl) {
      height: calculate-rem(850);
    }

    @include mq($from: xxl) {
      padding: 0 34%;
    }
  }

  .main-header__carousel {
    width: 100%;
    background: $color-name--alabaster;
  }

  .slide--1 {
    display: flex;
    justify-content: center;
  }

  .slide__image {
    height: 100%;
    object-fit: cover;
  }

  .promo {
    position: absolute;
    top: calculate-rem(65);
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calculate-rem(255);
    height: calculate-rem(345);
    padding-top: calculate-rem(34);
    text-align: center;
    background: $color-name--white;
    transform: translateX(-50%);

    @include mq($from: xl) {
      top: calculate-rem(123);
      width: calculate-rem(385);
      height: calculate-rem(525);
      padding-top: calculate-rem(52);
    }
  }

  .promo__title {
    margin-bottom: calculate-rem(21);
    font-family: $font-family--josefin-sans;

    @include mq($from: xl) {
      margin-bottom: calculate-rem(51);
    }
  }

  .promo__description {
    margin-bottom: calculate-rem(47);
    font-family: $font-family--josefin-sans;
    font-size: calculate-rem(68);
    line-height: 1.2;
    color: $color-name--carnation;

    @include mq($from: xl) {
      margin-bottom: calculate-rem(78);
      font-size: calculate-rem(110);
      line-height: 1.15;
    }
  }

  .promo__destination {
    display: flex;
    align-items: center;
    font-size: calculate-rem(14);
    font-weight: 600;

    @include mq($from: xl) {
      font-size: calculate-rem(16);
    }
  }

  .promo__dash {
    @include get-rem(margin, 0, 12);
    display: inline-block;
    width: calculate-rem(45);
    height: 3px;
    background: $color-name--carnation;

    @include mq($from: xl) {
      width: calculate-rem(62);
    }
  }

  .adidas-section {
    position: relative;
    display: flex;
    justify-content: center;
    background: #324063;

    @include mq($from: lg) {
      height: 50%;
    }

    @include mq($from: xl) {
      height: 33.33333333333%;
    }
  }

  .adidas-section__promo {
    position: absolute;
    top: calculate-rem(34);
    right: calculate-rem(58);
    color: $color-name--white;
    text-align: center;
  }

  .adidas-section__title {
    font-family: $font-family--josefin-sans;
    font-size: calculate-rem(26);
  }

  .adidas-section__destination {
    font-family: $font-family--eb-garamond;
  }

  .middle-section {
    @include mq($from: lg) {
      height: 50%;
    }

    @include mq($from: xl) {
      height: 33.33333333333%;
    }
  }

  .repair-patches-section {
    display: flex;
    justify-content: center;
    background: $color-name--iron;
  }

  .repair-patches-section__promo {
    position: absolute;
    bottom: calculate-rem(31);
    left: 50%;
    width: 100%;
    color: $color-name--white;
    text-align: center;
    transform: translateX(-50%);
  }

  .repair-patches-section__title {
    font-family: $font-family--josefin-sans;
    font-size: calculate-rem(26);
  }

  .repair-patches-section__destination {
    font-size: calculate-rem(14);
  }

  .sale-section {
    background: $color-name--white;

    @include mq($from: xl) {
      display: flex;
      justify-content: center;
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

  .bottom-section {
    height: 252px;

    @include mq($from: lg) {
      display: none;
    }

    @include mq($from: xl) {
      display: flex;
      height: 33.33333333333%;
    }
  }

  .accessories-section {
    position: relative;
    display: flex;
    justify-content: center;

    @include mq($from: lg) {
      height: 50%;
    }

    @include mq($from: xl) {
      height: 100%;
    }
  }

  .accessories-section__promo {
    position: absolute;
    bottom: calculate-rem(31);
    left: 50%;
    width: 100%;
    text-align: center;
    transform: translateX(-50%);
  }

  .accessories-section__title {
    font-family: $font-family--josefin-sans;
    font-size: calculate-rem(26);
  }

  .accessories-section__destination {
    font-family: $font-family--eb-garamond;
    color: $color-name--boulder;
  }

  .favorite-styles-section__promo {
    @include get-rem(padding, 67, 40);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    background: $color-name--golden-sand;

    &--mobile {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }
  }

  .favorite-styles-section__title {
    font-family: $font-family--josefin-sans;
    font-size: calculate-rem(20);
    text-align: center;

    span {
      color: $color-name--picton-blue_light;
    }
  }

  .favorite-styles-section__destination {
    font-family: $font-family--eb-garamond;
    text-align: center;
  }

  .lookbook-section {
    position: relative;
  }

  .lookbook-section__promo {
    position: absolute;
    top: calculate-rem(34);
    left: 0;
    width: 100%;
    text-align: center;
  }

  .lookbook-section__title {
    font-family: $font-family--josefin-sans;
    font-size: calculate-rem(26);
  }

  .lookbook-section__destination {
    font-family: $font-family--eb-garamond;
    color: $color-name--boulder;

    @include mq($from: lg, $until: xl) {
      color: $color-name--golden-sand;
      text-shadow: 0 0 5px $color-name--black;
    }
  }

  .slide--2 {
    width: 100%;
    background: $color-name--golden-sand;
  }

  .discounts-section {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .discounts-section__picture {
    position: relative;
    z-index: 10;
    width: calculate-rem(178);
    margin-top: calculate-rem(65);

    @include mq($from: md) {
      margin-top: calculate-rem(200);
    }

    @include mq($from: lg) {
      margin-top: calculate-rem(42);
    }

    @include mq($from: xl) {
      margin-top: calculate-rem(220);
    }
  }

  .discounts-section__promo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .discounts-section__title {
    position: absolute;
    top: calculate-rem(140);
    left: 50%;
    z-index: 5;
    font-family: $font-family--josefin-sans;
    font-size: calculate-rem(68);
    color: $color-name--white;
    transform: translateX(-50%);

    @include mq($from: md) {
      top: 50%;
      font-size: calculate-rem(120);
    }

    @include mq($from: lg) {
      top: calculate-rem(81);
      font-size: calculate-rem(160);
    }

    @include mq($from: xl) {
      top: 50%;
    }
  }

  .discounts-section__destination {
    width: calculate-rem(200);
    margin-top: calculate-rem(57);
    margin-bottom: calculate-rem(23);
    font-family: $font-family--josefin-sans;
    text-align: center;

    @include mq($from: md) {
      width: 100%;
      font-size: calculate-rem(22);
    }

    @include mq($from: lg) {
      margin-bottom: calculate-rem(10);
      font-size: calculate-rem(24);
    }
  }

  .discounts-section__discount {
    color: $color-name--picton-blue_light;
  }

  .discounts-section__slogan {
    font-family: $font-family--eb-garamond;
  }
</style>
