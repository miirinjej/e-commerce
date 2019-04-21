<template>
  <b-container
    class="border-top"
    fluid
  >
    <footer class="main-footer">
      <b-row class="main-footer__header">
        <b-col
          cols="12"
          md="8"
          lg="6"
          class="p-0"
        >
          <b-row class="main-footer__main-menu">
            <b-col
              class="d-flex flex-column align-items-start p-0"
              cols="6"
            >
              <h4 class="main-footer__heading">
                Quick links
              </h4>
              <b-nav vertical>
                <b-nav-item>Store locator</b-nav-item>
                <b-nav-item>Gift cards</b-nav-item>
                <b-nav-item>Size guide</b-nav-item>
                <b-nav-item>About us</b-nav-item>
                <b-nav-item>Support</b-nav-item>
              </b-nav>
            </b-col>
            <b-col
              class="d-flex flex-column align-items-start"
              cols="6"
            >
              <h4 class="main-footer__heading">
                Customer care
              </h4>
              <b-nav vertical>
                <b-nav-item>Customer service</b-nav-item>
                <b-nav-item>Track my order</b-nav-item>
                <b-nav-item>Return policy</b-nav-item>
                <b-nav-item>Shipping & delivery</b-nav-item>
                <b-nav-item>Contact us</b-nav-item>
                <b-nav-item>Careers</b-nav-item>
              </b-nav>
            </b-col>
          </b-row>
        </b-col>
        <b-col
          cols="12"
          md="4"
          lg="5"
          class="main-footer__information p-0"
        >
          <b-row class="contact-section">
            <b-col
              class="contact-section__questions p-0"
              cols="6"
              md="12"
              lg="6"
            >
              <h4 class="main-footer__heading">
                Questions
              </h4>
              <fa
                class="icon icon--twitter"
                :icon="['fab', 'twitter']"
              />
              Tweet us <b>@template</b>
            </b-col>
            <b-col
              class="contact-section__phone"
              cols="6"
              md="12"
              lg="6"
            >
              <h4 class="main-footer__heading">
                Order by phone
              </h4>
              8-800-409-47-12
            </b-col>
          </b-row>
          <b-row class="main-footer__delivery d-none d-lg-inline-block">
            <b-col
              class="p-0"
              cols="9"
              xl="8"
            >
              We have our own delivery service which operates in 23 major European cities. Delivery time - 3-5 days.
            </b-col>
          </b-row>
          <b-row class="main-footer__follow d-none d-md-inline-block">
            <fa
              class="icon icon--facebook"
              :icon="['fab', 'facebook-f']"
            />
            <fa
              class="icon icon--twitter"
              :icon="['fab', 'twitter']"
            />
          </b-row>
        </b-col>
      </b-row>
      <div
        class="main-footer__vertical-border"
        :style="{ height: `${mainFooterBorderOffsetHeight}px` }"
      ></div>
      <div
        class="main-footer__middle-border"
        :style="{ left: `-${mainFooterBorderOffsetLeft}px`,
                  right: `-${mainFooterBorderOffsetLeft}px` }"
      ></div>
      <b-row class="main-footer__sub-menu d-md-none">
        <b-col
          cols="9"
          class="p-0"
        >
          <b-nav>
            <b-nav-item>Legal notice</b-nav-item>
            <b-nav-item>Privacy policy</b-nav-item>
            <b-nav-item>Site map</b-nav-item>
          </b-nav>
        </b-col>
        <b-col cols="3">
          <fa
            class="icon icon--facebook"
            :icon="['fab', 'facebook-f']"
          />
          <fa
            class="icon icon--twitter"
            :icon="['fab', 'twitter']"
          />
        </b-col>
      </b-row>
      <b-row class="main-footer__footer align-items-center">
        <b-col
          cols="8"
          md="4"
          class="main-footer__copyright p-0"
        >
          © 2010–2015, The Template Group inc.
        </b-col>
        <b-col
          cols="4"
          md="3"
          class="main-footer__share share p-0"
        >
          <span class="share__title">Share</span>
          <span class="share__count">1437</span>
        </b-col>
        <b-col
          md="5"
          class="d-none d-md-flex justify-content-end"
        >
          <b-nav>
            <b-nav-item>Legal notice</b-nav-item>
            <b-nav-item>Privacy policy</b-nav-item>
            <b-nav-item>Site map</b-nav-item>
          </b-nav>
        </b-col>
      </b-row>
    </footer>
  </b-container>
</template>

<script>
  export default {
    name: 'MainFooter',
    data() {
      return {
        mainFooterBorderOffsetHeight: 0,
        mainFooterBorderOffsetLeft: 0,
      };
    },
    mounted() {
      this.getMainFooterBorderOffset();
      window.addEventListener('resize', this.getMainFooterBorderOffset);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.getMainFooterBorderOffset);
    },
    methods: {
      getMainFooterBorderOffset() {
        const mainFooter = document.querySelector('.main-footer');
        const mainFooterFooter = document.querySelector('.main-footer__footer');
        const mainFooterMiddleBorder = document.querySelector('.main-footer__middle-border');

        this.mainFooterBorderOffsetHeight = (mainFooter.offsetHeight - mainFooterFooter.offsetHeight)
          + mainFooterMiddleBorder.offsetHeight;
        this.mainFooterBorderOffsetLeft = mainFooter.offsetLeft;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .main-footer {
    @include get-rem(padding, 37, 0, 0, 0);
    position: relative;
    font-size: calculate-rem(12);

    @include mq($from: md) {
      padding-top: calculate-rem(54);
      font-size: calculate-rem(14);
    }
  }

  .main-footer__heading {
    margin-bottom: calculate-rem(26);
    font-size: calculate-rem(14);

    @include mq($from: md) {
      font-size: calculate-rem(16);
    }

    @include mq($from: xl) {
      font-size: calculate-rem(18);
    }

    .contact-section & {
      margin-bottom: calculate-rem(11);
    }
  }

  .main-footer__main-menu {
    margin-bottom: calculate-rem(51);

    @include mq($from: md) {
      margin-bottom: calculate-rem(89);
    }

    .nav-link {
      padding-right: 0;
      padding-left: 0;
    }

    &::after {
      position: absolute;
      right: calculate-rem(-20);
      bottom: 0;
      left: calculate-rem(-20);
      height: 1px;
      content: "";
      background: $color-name--mercury;

      @include mq($from: md) {
        display: none;
      }
    }
  }

  .main-footer__information {
    @include mq($from: lg) {
      margin-left: calculate-rem(50);
    }

    @include mq($from: xl) {
      margin-left: calculate-rem(60);
    }
  }

  .contact-section {
    width: 100%;
    height: 100%;

    @include mq($from: md) {
      height: auto;
      margin-bottom: calculate-rem(92);
    }

    @include mq($from: lg) {
      margin-bottom: calculate-rem(12);
    }

    .icon--twitter {
      color: $color-name--alto;
    }

    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100vw;
      height: 1px;
      margin-left: calculate-rem(-20);
      content: "";
      background: $color-name--mercury;

      @include mq($from: md) {
        display: none;
      }
    }
  }

  .contact-section__questions,
  .contact-section__phone {
    height: 100%;
    margin-top: calculate-rem(24);
    margin-bottom: calculate-rem(45);

    @include mq($from: md) {
      margin: 0;
    }
  }

  .contact-section__questions {
    @include mq($from: md) {
      margin-bottom: calculate-rem(42);
    }

    @include mq($from: lg) {
      // margin-right: calculate-rem(80);
    }


    &::after {
      position: absolute;
      top: 0;
      right: 0;
      width: 1px;
      height: 100%;
      margin-top: calculate-rem(-24);
      content: "";
      background: $color-name--mercury;

      @include mq($from: md) {
        display: none;
      }
    }

    &:hover {
      .icon--twitter {
        color: $color-name--picton-blue_base;
      }
    }
  }

  .contact-section__phone {
    @include mq($from: md) {
      padding: 0;
    }
  }

  .main-footer__delivery {
    margin-bottom: calculate-rem(40);
    font-family: $font-family--eb-garamond;
    font-size: calculate-rem(16);
    line-height: 1.875;
    color: $color-name--boulder;
  }

  .main-footer__follow {
    .icon {
      &:first-of-type {
        margin-right: calculate-rem(25);
      }
    }
  }

  .main-footer__sub-menu {
    position: relative;
    padding: calculate-rem(26) 0;
    font-size: calculate-rem(10);
    font-weight: 700;

    .nav-link {
      @include get-rem(padding, 0, 15, 0, 0);
    }

    .icon {
      &:first-of-type {
        margin-right: calculate-rem(20);
      }
    }

    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100vw;
      height: 1px;
      margin-left: calculate-rem(-20);
      content: "";
      background: $color-name--mercury;

      @include mq($from: md) {
        display: none;
      }
    }
  }

  .icon {
    font-size: calculate-rem(14);
    cursor: pointer;
    transition: color 0.2s;

    &--facebook {
      color: $color-name--sapphire;
    }

    &--twitter {
      color: $color-name--picton-blue_base;
    }

    &:hover {
      color: $color-name--alto;
    }
  }

  .main-footer__vertical-border {
    position: absolute;
    top: 0;
    left: 50%;
    display: none;
    width: 1px;
    background: $color-name--mercury;

    @include mq($from: lg) {
      display: block;
    }
  }

  .main-footer__middle-border {
    position: absolute;
    display: none;
    height: 1px;
    background: $color-name--mercury;

    @include mq($from: md) {
      display: block;
    }
  }

  .main-footer__footer {
    padding: calculate-rem(27) 0;
    font-size: calculate-rem(10);

    @include mq($from: md) {
      font-size: calculate-rem(12);
    }

    .nav {
      font-weight: 700;
    }

    .nav-link {
      @include get-rem(padding, 0, 15, 0, 0);

      @include mq($from: lg) {
        padding-right: calculate-rem(36);
      }
    }
  }

  .main-footer__copyright {
    font-weight: 700;
  }

  .share {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .share__title {
    margin-right: calculate-rem(8);
    font-family: $font-family--josefin-sans;
    font-size: calculate-rem(16);

    @include mq($from: md) {
      font-size: calculate-rem(18);
    }
  }

  .share__count {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: calculate-rem(36);
    height: calculate-rem(19);
    background: $color-name--wild-sand;

    &::before {
      position: absolute;
      top: 50%;
      right: 100%;
      margin-top: -3px;
      content: "";
      border: 4px solid;
      border-color: transparent $color-name--wild-sand transparent transparent;
    }
  }
</style>
