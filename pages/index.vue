<template>
  <div>
    <main-header />
    <top-banner />
    <b-container fluid>
      <section class="arrivals-section">
        <h2 class="arrivals-section__heading">
          New arrivals
        </h2>
        <b-row>
          <b-col
            v-for="(item, index) in items"
            :key="index"
            class="arrivals-section__item"
            cols="6"
            md="4"
            lg="3"
          >
            <picture class="arrivals-section__picture">
              <source
                media="(max-width: 767px)"
                :srcset="`${item.imageUrl}xs.webp`"
                type="image/webp"
              >
              <source
                media="(max-width: 767px)"
                :srcset="`${item.imageUrl}xs.png`"
                type="image/png"
              >
              <source
                media="(min-width: 768px) and (max-width: 1023px)"
                :srcset="`${item.imageUrl}md.webp`"
                type="image/webp"
              >
              <source
                media="(min-width: 768px) and (max-width: 1023px)"
                :srcset="`${item.imageUrl}md.png`"
                type="image/png"
              >
              <source
                media="(min-width: 1024px) and (max-width: 1299px)"
                :srcset="`${item.imageUrl}lg.webp`"
                type="image/webp"
              >
              <source
                media="(min-width: 1024px) and (max-width: 1299px)"
                :srcset="`${item.imageUrl}lg.png`"
                type="image/png"
              >
              <source
                media="(min-width: 1300px)"
                :srcset="`${item.imageUrl}xl.webp`"
                type="image/webp"
              >
              <source
                media="(min-width: 1300px)"
                :srcset="`${item.imageUrl}xl.png`"
                type="image/png"
              >
              <img
                class="arrivals-section__image"
                :src="`${item.imageUrl}xl.png`"
                :alt="item.name.toLowerCase()"
              >
            </picture>
            <b-card>
              <b-card-text class="arrivals-section__title">
                {{ item.name }}
              </b-card-text>
              <b-card-text class="arrivals-section__cost">
                {{ item.cost }}
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
        <b-button
          class="arrivals-section__button"
          variant="outline-secondary"
        >
          All arrivals
        </b-button>
      </section>
      <section class="about-section">
        <h2 class="about-section__heading about-section__heading--primary">
          About template
        </h2>
        <p class="about-section__motto about-section__motto--primary">
          Successful companies build on their founding traditions while looking ahead to the future – and that is what
          we have done at Template
        </p>
        <p class="about-section__description about-section__description--primary">
          Guided by a strong set of values, Template Bensadoun set out to build a «different» kind of modern company,
          one founded on compassion and ethics, aiming to influence society in both fashion and social responsibility.
          Simply put, Mr. Bensadoun created a brand with a conscience; a brand that cares.
        </p>
        <div class="about-section__ruler about-section__ruler--horizontal"></div>
        <h3 class="about-section__heading about-section__heading--secondary">
          The Template Group is also well known for its <span class="is-highlighted">commitment to society</span>
        </h3>
        <p class="about-section__motto about-section__motto--secondary">
          We place a premium on being a good corporate citizen by working to enrich the communities in which we live and
          work
        </p>
        <transition name="bounce">
          <p
            v-show="!descriptionIsHidden"
            class="about-section__description about-section__description--secondary d-md-block"
          >
            First and foremost, we are committed to our people; those who have helped us get to where we are today. Though
            our workforce is as diverse as our geographical imprint, a common thread remains – our team members are
            passionate, productive and motivated. We provide our team with an abundance of opportunities to help them
            realize their full potential, because at our core, we believe that when one person grows, so too does the
            company.
          </p>
        </transition>
        <transition name="fade">
          <b-button
            v-if="descriptionIsHidden"
            class="about-section__button d-md-none"
            variant="outline-secondary"
            @click="descriptionIsHidden = false"
          >
            Show more
          </b-button>
        </transition>
      </section>
    </b-container>
  </div>
</template>

<script>
  import MainHeader from '~/components/MainHeader';
  import TopBanner from '~/components/TopBanner';

  export default {
    components: {
      TopBanner,
      MainHeader,
    },
    data() {
      return {
        items: [
          {
            imageUrl: '/index/arrivals/0/',
            name: 'Straight Leg Jeans ',
            cost: '£55.00 ',
          },
          {
            imageUrl: '/index/arrivals/1/',
            name: 'Boyfriend T-Shirt with Bohemian Print',
            cost: '£34.25',
          },
          {
            imageUrl: '/index/arrivals/2/',
            name: 'Only Busted Knee Jean',
            cost: '£140.50',
          },
          {
            imageUrl: '/index/arrivals/3/',
            name: 'Only Skinny Jeans',
            cost: '£12.75',
          },
        ],
        descriptionIsHidden: true,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .arrivals-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: calculate-rem(63);
    margin-bottom: calculate-rem(80);

    @include mq($from: md) {
      margin-top: calculate-rem(93);
      margin-bottom: calculate-rem(106);
    }

    @include mq($from: xl) {
      margin-top: calculate-rem(137);
      margin-bottom: calculate-rem(151);
    }

    .card {
      text-align: center;
      border: none;
    }

    .card-body {
      @include get-rem(padding, 34, 0, 0, 0);
    }
  }

  .arrivals-section__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: calculate-rem(30);
  }

  .arrivals-section__heading {
    margin-bottom: calculate-rem(40);
    font-size: calculate-rem(30);

    @include mq($from: md) {
      margin-bottom: calculate-rem(75);
      font-size: calculate-rem(50);
    }

    @include mq($from: xl) {
      margin-bottom: calculate-rem(84);
      font-size: calculate-rem(60);
    }
  }

  .arrivals-section__title,
  .arrivals-section__cost {
    font-size: calculate-rem(12);

    @include mq($from: md) {
      font-size: calculate-rem(14);
    }
  }

  .arrivals-section__title {
    margin-bottom: calculate-rem(14);
    font-weight: 700;

    @include mq($from: md) {
      margin-bottom: calculate-rem(19);
    }
  }

  .arrivals-section__button {
    width: calculate-rem(220);
    height: calculate-rem(62);
    margin-top: calculate-rem(39);
    font-family: $font-family--josefin-sans;
    font-size: calculate-rem(20);
    border-color: $color-name--mercury;
    border-radius: 0;

    @include mq($from: md) {
      width: calculate-rem(300);
      height: calculate-rem(70);
      margin-top: calculate-rem(59);
      font-size: calculate-rem(20);
    }

    @include mq($from: lg) {
      font-size: calculate-rem(24);
    }

    @include mq($from: xl) {
      width: calculate-rem(340);
      height: calculate-rem(75);
      margin-top: calculate-rem(68);
      font-size: calculate-rem(26);
    }
  }

  .about-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: calculate-rem(106);

    @include mq($from: md) {
      margin-bottom: calculate-rem(145);
    }

    @include mq($from: lg) {
      margin-bottom: calculate-rem(159);
    }

    @include mq($from: xl) {
      margin-bottom: calculate-rem(202);
    }
  }

  .about-section__heading {
    text-align: center;

    &--primary {
      margin-bottom: calculate-rem(10);
      font-size: calculate-rem(30);

      @include mq($from: md) {
        font-size: calculate-rem(50);
      }

      @include mq($from: xl) {
        margin-bottom: calculate-rem(26);
        font-size: calculate-rem(60);
      }
    }

    &--secondary {
      margin-bottom: calculate-rem(17);
      font-size: calculate-rem(20);

      @include mq($from: md) {
        width: calculate-rem(494);
        font-size: calculate-rem(24);
      }

      @include mq($from: xl) {
        width: calculate-rem(820);
        font-size: calculate-rem(26);
      }
    }
  }

  .about-section__motto {
    margin-bottom: calculate-rem(41);
    font-family: $font-family--eb-garamond;
    font-size: calculate-rem(14);
    line-height: 2;
    text-align: center;

    @include mq($from: md) {
      margin-bottom: calculate-rem(44);
      font-size: calculate-rem(16);
    }

    @include mq($from: xl) {
      margin-bottom: calculate-rem(64);
    }

    &--primary {
      width: calculate-rem(279);

      @include mq($from: md) {
        width: calculate-rem(529);
      }

      @include mq($from: lg) {
        width: calculate-rem(584);
      }

      @include mq($from: xl) {
        width: calculate-rem(747);
      }
    }

    &--secondary {
      width: calculate-rem(265);

      @include mq($from: md) {
        width: calculate-rem(508);
      }

      @include mq($from: lg) {
        width: calculate-rem(592);
      }

      @include mq($from: xl) {
        width: calculate-rem(762);
        margin-bottom: calculate-rem(49);
      }
    }
  }

  .about-section__description {
    width: calculate-rem(251);
    font-size: calculate-rem(13);
    line-height: 2.30769230769;

    @include mq($from: md) {
      font-size: calculate-rem(15);
    }

    &--primary {
      @include mq($from: md) {
        width: calculate-rem(418);
      }

      @include mq($from: lg) {
        width: calculate-rem(527);
      }

      @include mq($from: xl) {
        width: calculate-rem(639);
      }
    }

    &--secondary {
      @include mq($from: md) {
        width: calculate-rem(424);
      }

      @include mq($from: lg) {
        width: calculate-rem(529);
      }

      @include mq($from: xl) {
        width: calculate-rem(637);
      }
    }
  }

  .about-section__ruler {
    &--horizontal {
      @include get-rem(margin, 38, 0);
      width: 100%;
      height: 1px;
      background: $color-name--mercury;

      @include mq($from: md) {
        @include get-rem(margin, 42, 0);
        width: calculate-rem(438);
      }

      @include mq($from: lg) {
        width: calculate-rem(512);
      }

      @include mq($from: xl) {
        width: calculate-rem(650);
      }
    }
  }

  .about-section__button {
    width: calculate-rem(220);
    height: calculate-rem(62);
    margin-top: calculate-rem(27);
    font-size: calculate-rem(20);
    border-color: $color-name--mercury;
    border-radius: 0;
  }

  .is-highlighted {
    color: $color-name--carnation;
  }
</style>
