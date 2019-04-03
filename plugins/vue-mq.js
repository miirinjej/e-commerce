import Vue from 'vue';
import VueMq from 'vue-mq';

Vue.use(VueMq, {
  breakpoints: {
    xs: 375,
    sm: 768,
    md: 1024,
    lg: 1300,
    xl: Infinity,
  },
  defaultBreakpoint: 'xs',
});
