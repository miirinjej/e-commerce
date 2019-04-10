<template>
  <b-container fluid>
    <footer class="main-footer">
      <b-row>
        <b-col>
          <b-row>
            <b-col>
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
            <b-col>
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
        <b-col>
          <b-row>
            <b-col>
              <h4 class="main-footer__heading">
                Questions
              </h4>
              <fa :icon="['fab', 'twitter']" />
              Tweet us @template
            </b-col>
            <b-col>
              <h4 class="main-footer__heading">
                Order by phone
              </h4>
              8-800-409-47-12
            </b-col>
          </b-row>
          <b-row>
            We have our own delivery service which operates in 23 major European cities. Delivery time - 3-5
            days.
          </b-row>
          <b-row>
            <fa :icon="['fab', 'facebook-f']" />
            <fa :icon="['fab', 'twitter']" />
          </b-row>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="main-footer__copyright">
          © 2010–2015, The Template Group inc.
        </b-col>
        <b-col class="main-footer__share">
          Share
          <span class="main-footer__count">1437</span>
        </b-col>
        <b-col>
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
  };
</script>

<style lang="scss" scoped>
</style>
