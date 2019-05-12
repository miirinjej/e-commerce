<template>
  <div>
    <b-container
      class="border-bottom"
      fluid
    >
      <b-navbar
        class="navbar"
        toggleable
      >
        <b-row
          class="w-100 u-height"
          align-v="center"
        >
          <b-col class="d-none" />
          <b-col
            class="p-0 h-100 d-flex align-content-center"
            cols="2"
            sm="2"
            md="3"
          >
            <transition
              name="fade"
              mode="out-in"
            >
              <b-navbar-brand
                v-if="!isExpanded"
                class="navbar__brand"
                href="/"
              >
                <img
                  class="navbar__logo d-md-none"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAQCAYAAAD9L+QYAAAATUlEQVQ4T2NkYGBwYWBg2M1AHHBlYGDYA1UK0gPSCwIgMZAcCmAc0oaj+4agd0kJllHDsaaW0WAZDRZwGiCY2UBlCzVSC7Zib8/QNRwAi4U/QmttIw4AAAAASUVORK5CYII="
                  alt="logo"
                >
                <img
                  class="navbar__logo d-none d-md-inline-block"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAAAdCAYAAACNBA9oAAAD9UlEQVRoQ+2bjY0UMQyFfSVACVAClAAlQAlQApQAJUAJUAKUACVACVAC6ENjyVjOxeNshlkukVZ3t5vE9vOLfzJ7N7JGBYE3IvLILPwoIu8rG51hzc0ZlLhCHT6JyBOj92sReXuFdvxRGRK8EhGYvWdctdF7DG3MXSQQkUWCFQkWCQ5OB1NrkJUOarnh6HQwVV5UGFLwINSOpyLyuYbXf7lqqlMCxKbKWySocXSqU66ZBC+2PEn//GAz5KuI8KJ9+t7Am3X3zGe65tnWi7MXUYj3bTTifeYQuX5un9Ovt+TofKsGerFedUePjM57SeCxUVuQD172zgFb9M5BdWa9Yor+4KBYtGxO++MSkQDgAMUaEvkbg+kq/PCAqmOi/bQroVCitd0jJ0pzyGrtw95ZnVvdEjZ8cA60OuNwnAmZdfA36ZcR6ext9ql6tz9GSZAVqIpHYHkS9AI0zLegRfNfBjd4GUCzpMpEAk7uFxflerbpKa+SoOSPURJEF004mnAGywlJnFob7h+6kN0iASGTdTYMehA5NZw2u78HUte0SICeEIufkCuS19M5Ive7zX6vM7KwTdNdZFOVBCV/jJLgh3NABAZEABAdPsRGJLAhLgIThz3eyBSxn8/vO3QjEuAMZDFfRySvp3Nk9y8nHxnIQqYOj02LwJnIw9qSP0ZI0ALVAmpPof5ucx7veQM5Kc8NUJzMbw5QD3oEprct0tefcBWDPF+I6emMdPb6RLKiFMVennQen4w85pT9MUKCyjMHBdnKzbDcnypfDEUA9EjAiSSaRMMXnj6y9HSOsCEyRQeEtEDx2DokWRKU/XGXSRCdOHVEBOge4vbWW+J5AlcjwT8hQSYENw7aX2/3ThWTZ0QC7hNIB9HgZNoOxM/t6Rw5hKhj64EW4aokKPtjJBJEuZpcTk63g3m8ACAKhz1AZ5GAfaOCjm6D1s4OX6f0dM7swf4Utci6rf7IpoOyP0ZIgHK+gMLREEFv7aLKnfaRIklHD9CZJFAi2BbRt7TM8UVdRmePDfsgh04DnEgD/ukgc6qRoOyPURK0em+90rTfvlGnV3ruGekgk6qYExWQGRL4gi8rb4QEJX+MkgDD9hQkUZuUAXQWCUhP/qLJOivq7bPhmXmtCyMvw+owQoKSPy5BAgTDekJb63aP9ED+9fVCFtBZJKBYw1HRcwp0hbTVOkYdfRs2pAb2t1/vGyXBbn9c+oum+kRMma1P96KqOBseLzXvtrsE9NbUBWHRt/U0sqqPxWaWDK9byh+XJkEVoCPWZS6UjtDjdDIWCU7nkuMVWiQ4HvPTSVwkOJ1LjldokeB4zE8n8S6RgErZ/6eVfTx8OuccpdBvmX2QS/RqdpsAAAAASUVORK5CYII="
                  alt="logo"
                >
              </b-navbar-brand>
              <b-dropdown
                v-if="isExpanded"
                class="navbar__language navbar__language--mobile"
                :class="{ 'u-border-right': isExpanded }"
                :text="selectedLanguage"
              >
                <b-dropdown-item
                  v-for="(language, index) in languages"
                  :key="index"
                  @click="selectedLanguage = language.name"
                >
                  {{ language.name }}
                </b-dropdown-item>
              </b-dropdown>
            </transition>
          </b-col>
          <b-col
            class="d-none d-md-inline-block"
            md="2"
          >
            <b-dropdown
              class="navbar__language navbar__language--tablet"
              :text="selectedLanguage"
            >
              <b-dropdown-item
                v-for="(language, index) in languages"
                :key="index"
                @click="selectedLanguage = language.name"
              >
                {{ language.name }}
              </b-dropdown-item>
            </b-dropdown>
          </b-col>
          <b-col
            class="d-none d-md-inline-block"
            md="4"
          />
          <b-col
            class="p-md-0 d-flex justify-content-between"
            cols="2"
            sm="2"
            md="3"
          >
            <b-link class="navbar__sign-up">
              Email sign up
            </b-link>
            <div class="bag">
              <div
                v-b-modal.bag__modal
                class="bag__title"
              >
                <fa
                  class="bag__icon"
                  icon="shopping-bag"
                />
                Bag
              </div>
              <b-modal
                id="bag__modal"
                title="Shopping bag"
              >
                <b-container>
                  <b-row>
                    <b-col
                      v-for="(bagItem, index) in bagItems"
                      :key="index"
                      class="p-0"
                      cols="12"
                      sm="12"
                      md="6"
                    >
                      <b-media
                        :class="{ 'is-hidden': bagItem.isHidden }"
                        no-body
                      >
                        <b-media-aside>
                          <b-card>
                            <picture>
                              <source
                                :srcset="`${bagItem.imageUrl}.webp`"
                                type="image/webp"
                              >
                              <source
                                :srcset="`${bagItem.imageUrl}.jpg`"
                                type="image/jpeg"
                              >
                              <img
                                :src="`${bagItem.imageUrl}.jpg`"
                                :alt="bagItem.name.toLowerCase()"
                              >
                            </picture>
                            <div class="card__text">
                              <span class="card__cost">{{ bagItem.cost }}</span>
                              <span class="card__collection">{{ bagItem.collection }}</span>
                            </div>
                            <b-link
                              class="card__link"
                              @click="bagItem.isHidden = !bagItem.isHidden"
                            >
                              {{ bagItem.isHidden ?
                                'Show' :
                                'Hide'
                              }}
                            </b-link>
                          </b-card>
                        </b-media-aside>
                        <b-media-body>
                          <h5 class="media__heading">
                            {{ bagItem.name }}
                          </h5>
                          <div class="media__text">
                            <p>Color: {{ bagItem.color }}</p>
                            <p>Size: {{ bagItem.size }}</p>
                            <p>Quantity: {{ bagItem.quantity }}</p>
                          </div>
                          <transition name="fade">
                            <b-link
                              v-if="!bagItem.isHidden"
                              class="media__link"
                              :href="bagItem.url"
                            >
                              Change details
                            </b-link>
                          </transition>
                        </b-media-body>
                      </b-media>
                    </b-col>
                  </b-row>
                </b-container>
                <b-alert v-model="showAlert">
                  You've qualified for Free UK Next Day Delivery on your order. Don't forget to enter the code nexday
                  at
                  checkout
                </b-alert>
                <div
                  slot="modal-footer"
                  class="modal__footer"
                >
                  <b-row
                    class="w-100"
                    align-h="between"
                    align-v="center"
                  >
                    <b-col
                      class="p-0"
                      cols="3"
                      sm="3"
                    >
                      <b-nav class="footer__special-buttons">
                        <b-nav-item>Save bag</b-nav-item>
                        <b-nav-item>Empty bag</b-nav-item>
                      </b-nav>
                    </b-col>
                    <b-col
                      class="p-0 d-flex justify-content-center"
                      cols="6"
                      sm="6"
                    >
                      <b-btn
                        class="footer__buy-button"
                        variant="outline-secondary"
                      >
                        Buy now
                      </b-btn>
                    </b-col>
                    <b-col
                      class="p-0 d-flex flex-column align-items-end"
                      cols="3"
                      sm="3"
                    >
                      <div class="footer__title">
                        Total Cost
                      </div>
                      <div class="footer__cost">
                        £1 640.50
                      </div>
                    </b-col>
                  </b-row>
                </div>
              </b-modal>
            </div>
          </b-col>
          <b-col
            class="d-md-none"
            cols="6"
            sm="6"
          />
          <b-col
            class="p-0 h-100 d-flex justify-content-end d-md-none"
            cols="2"
            sm="2"
          >
            <b-navbar-toggle
              target="navbar__text-collapse"
              :class="{ 'u-border-left': !isExpanded }"
              @click="isExpanded = !isExpanded"
            >
              <transition
                name="fade"
                mode="out-in"
              >
                <fa
                  :key="isExpanded"
                  class="navbar-toggler__icon"
                  :class="{ 'is-expanded': isExpanded }"
                  :icon="computedIcon"
                />
              </transition>
            </b-navbar-toggle>
          </b-col>
        </b-row>
        <b-row
          class="d-none d-md-flex w-100"
          align-v="center"
        >
          <b-col
            class="p-0"
            md="11"
            lg="10"
            xl="9"
          >
            <b-nav class="">
              <b-nav-item
                v-for="(item, index) in items"
                :key="index"
                :href="item.url"
              >
                {{ item.name }}
              </b-nav-item>
            </b-nav>
          </b-col>
          <b-col
            class="p-0 position-relative d-flex justify-content-end"
            md="1"
            lg="2"
            xl="3"
          >
            <div
              class="navbar__search-bar navbar__search-bar--tablet search-bar d-lg-none"
              :class="{ 'is-showed': showSearch }"
            >
              <b-form-input
                v-if="showSearch"
                v-model="searchText"
                v-focus
                placeholder="Style name"
                @blur="showSearch = false"
              />
              <fa
                class="search-bar__icon"
                icon="search"
                @click="showSearch = !showSearch"
              />
            </div>
            <div class="navbar__search-bar navbar__search-bar--desktop search-bar d-none d-lg-inline-block">
              <b-form-input
                v-model="searchText"
                placeholder="Style name"
                @blur="showSearch = false"
              />
              <fa
                class="search-bar__icon"
                icon="search"
              />
            </div>
          </b-col>
        </b-row>
      </b-navbar>
    </b-container>
    <b-container fluid>
      <b-collapse
        id="navbar__text-collapse"
        v-model="isExpanded"
        class="navbar__text-collapse"
      >
        <b-navbar-nav>
          <b-nav-item
            v-for="(item, index) in items"
            :key="index"
            :href="item.url"
            @click="isExpanded = false"
          >
            {{ item.name }}
          </b-nav-item>
        </b-navbar-nav>
        <div class="navbar__search-bar navbar__search-bar--mobile search-bar">
          <b-form-input
            v-model="searchText"
            placeholder="Style name"
          />
          <fa
            class="search-bar__icon"
            icon="search"
          />
        </div>
      </b-collapse>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    directives: {
      focus: {
        inserted(el) {
          el.focus();
        },
      },
    },
    data() {
      return {
        selectedLanguage: 'UK',
        languages: [
          { name: 'UK' },
          { name: 'EN' },
          { name: 'RU' },
        ],
        items: [
          {
            name: 'Women',
            url: '/catalog/women',
          },
          {
            name: 'Men',
            url: '',
          },
          {
            name: 'Handbags',
            url: '',
          },
          {
            name: 'Accessories',
            url: '',
          },
          {
            name: 'Sale',
            url: '',
          },
          {
            name: 'New arrivals',
            url: '',
          },
          {
            name: 'Clearance',
            url: '',
          },
          {
            name: 'Store locator',
            url: '',
          },
        ],
        searchText: '',
        showAlert: true,
        isExpanded: false,
        showSearch: false,
        bagItems: [
          {
            imageUrl: '/bag/0',
            cost: '£390.25',
            collection: '',
            name: 'Only Skinny Jeans',
            color: 'Phillipa wash',
            size: 'UK 17',
            quantity: 1,
            url: '',
            isHidden: false,
          },
          {
            imageUrl: '/bag/1',
            cost: '£400.75',
            collection: 'New',
            name: 'Paul & Joe Sister Jumper with Neon Trims',
            color: 'Blue',
            size: 'UK 18',
            quantity: 1,
            url: '',
            isHidden: false,
          },
          {
            imageUrl: '/bag/2',
            cost: '£849.50',
            collection: 'New',
            name: 'Boyfriend T-Shirt with Bohemian Print',
            color: 'Black',
            size: 'UK 18',
            quantity: 1,
            url: '',
            isHidden: false,
          },
          {
            imageUrl: '/bag/3',
            cost: '£176.35',
            collection: '',
            name: 'Turtle Neck Jumper in Rib',
            color: 'Green',
            size: 'UK 19',
            quantity: 1,
            url: '',
            isHidden: false,
          },
        ],
      };
    },
    computed: {
      computedIcon() {
        return this.isExpanded ? 'times' : 'bars';
      },
    },
    mounted() {
      window.addEventListener('resize', this.collapseNav);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.collapseNav);
    },
    methods: {
      collapseNav() {
        this.isExpanded = false;
      },
    },
  };
</script>

<style lang="scss">
  .navbar__language {
    & > .btn {
      padding: 0;
      font-size: calculate-rem(12);
      color: $color-name--black;
      background: none;
      border-color: transparent;

      &:hover {
        color: $color-name--black;
        background: none;
      }
    }

    & > .btn-secondary.btn-secondary {
      &.dropdown-toggle {
        color: $color-name--black;
        background: none;
        border-color: transparent;

        &:focus {
          box-shadow: none;
        }
      }

      &:active {
        color: $color-name--black;
        background: none;
        border-color: transparent;

        &:focus {
          box-shadow: none;
        }
      }
    }

    & > .dropdown-menu {
      font-size: calculate-rem(12);
    }
  }

  .navbar-nav {
    font-family: $font-family--josefin-sans;
  }

  .navbar {
    .nav {
      font-family: $font-family--josefin-sans;
      font-size: calculate-rem(14);
    }

    .nav-item:not(:last-of-type) {
      margin-right: calculate-rem(23);
    }

    .nav-link {
      padding: 0;
    }
  }

  .modal-dialog {
    max-width: calc(100% - 40px);
    margin: calculate-rem(112) 20px 0 20px;

    @include mq($from: md) {
      max-width: calc(100% - 80px);
      margin: calculate-rem(173) 40px 0 40px;
    }

    @include mq($from: lg) {
      width: 81.4453125%;
      max-width: calculate-rem(834);
      margin: calculate-rem(216) auto 0 auto;
    }

    @include mq($from: xl) {
      width: 73.84615384615%;
      max-width: calculate-rem(960);
      margin: calculate-rem(222) auto 0 auto;
    }

    @include mq($from: xxl) {
      width: 30%;
      max-width: 30%;
      margin: calculate-rem(222) auto 0 auto;
    }

    .modal-header {
      padding-right: calculate-rem(15);
      padding-left: calculate-rem(15);

      @include mq($from: md) {
        padding-right: calculate-rem(30);
        padding-left: calculate-rem(30);
      }

      .close {
        font-size: calculate-rem(30);
        color: $color-name--carnation;
        opacity: 1;
      }
    }

    .modal-body {
      position: relative;

      @include mq($from: md) {
        padding-top: calculate-rem(30);
      }

      .container {
        padding: 0;
        margin-bottom: calculate-rem(24);

        @include mq($from: md) {
          padding-right: calculate-rem(15);
          padding-left: calculate-rem(15);
          margin-bottom: calculate-rem(34);
        }
      }
    }

    .media {
      opacity: 1;
      transition: opacity 0.2s;

      .card {
        border: none;
      }

      .card-body {
        position: relative;
        padding: 0;
        text-align: center;
      }

      &.is-hidden {
        opacity: 0.6;
      }
    }

    .alert {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      font-family: $font-family--josefin-sans;
      font-size: calculate-rem(10);
      color: $color-name--black;
      text-align: center;
      background: $color-name--alabaster;
      border: none;
      border-radius: 0;
      box-shadow: inset 0 1px 0 $color-name--mercury;

      @include mq($from: md) {
        font-size: calculate-rem(12);
      }
    }
  }
</style>

<style lang="scss" scoped>
  .navbar {
    height: calculate-rem(70);
    padding: 0;
    font-size: calculate-rem(12);

    @include mq($from: md) {
      height: calculate-rem(120);
    }
  }

  .navbar-brand {
    display: flex;
    align-items: center;
  }

  .navbar__language--tablet {
    display: none;

    @include mq($from: md) {
      display: inline-block;
    }
  }

  .bag__title {
    width: auto;
    cursor: pointer;
  }

  .bag__icon {
    display: none;

    @include mq($from: md) {
      display: inline-block;
    }
  }

  .navbar__sign-up {
    display: none;

    @include mq($from: md) {
      display: inline-block;
    }
  }

  .navbar-toggler {
    padding: 0;
    color: $color-name--black;
    border: none;
  }

  .navbar-toggler__icon {
    &.is-expanded {
      color: $color-name--carnation;
    }
  }

  .navbar__text-collapse {
    padding-top: calculate-rem(16);
    font-size: calculate-rem(24);
  }

  .navbar__search-bar {
    position: relative;
    z-index: 15;
    width: calculate-rem(167);
    margin-top: calculate-rem(59);
    font-size: calculate-rem(12);

    input {
      padding: 0 calculate-rem(12) 0 0;
      color: $color-name--black;
      border: none;
      border-bottom: 1px solid $color-name--mercury;
      border-radius: 0;

      &::placeholder {
        font-size: calculate-rem(12);
      }
    }

    &--tablet {
      position: absolute;
      top: 0;
      right: 0;
      width: auto;
      margin-top: 0;

      &.is-showed {
        width: calculate-rem(167);
      }
    }

    &--desktop {
      margin-top: 0;
    }
  }

  .search-bar__icon {
    position: absolute;
    top: 50%;
    right: 0;
    color: $color-name--silver-chalice;
    cursor: pointer;
    transform: translateY(-50%);
  }

  .u-height {
    height: 100%;

    @include mq($from: md) {
      height: 50%;
    }
  }

  .u-border-right {
    position: relative;

    &::after {
      position: absolute;
      right: calculate-rem(-20);
      bottom: 0;
      width: 1px;
      height: 100%;
      content: "";
      background: $color-name--mercury;

      @include mq($from: md) {
        display: none;
      }
    }
  }

  .u-border-left {
    position: relative;

    &::before {
      position: absolute;
      bottom: 0;
      left: calculate-rem(-20);
      width: 1px;
      height: 100%;
      content: "";
      background: $color-name--mercury;

      @include mq($from: md) {
        display: none;
      }
    }
  }

  .card {
    margin-right: calculate-rem(25);
    margin-bottom: calculate-rem(53);
  }

  .card__link {
    position: absolute;
    top: calculate-rem(15);
    left: calculate-rem(16);
    font-family: $font-family--josefin-sans;
  }

  .card__text {
    margin-top: calculate-rem(31);
    font-size: calculate-rem(12);

    @include mq($from: md) {
      font-size: calculate-rem(14);
    }
  }

  .card__collection {
    font-family: $font-family--eb-garamond;
    font-size: calculate-rem(14);
    color: $color-name--boulder;

    @include mq($from: md) {
      font-size: calculate-rem(16);
    }
  }

  .media__heading {
    margin-bottom: calculate-rem(12);
    font-family: $font-family--arimo;
    font-size: calculate-rem(12);
    font-weight: 700;

    @include mq($from: md) {
      font-size: calculate-rem(14);
    }
  }

  .media__text {
    margin-bottom: calculate-rem(28);
    font-size: calculate-rem(10);
    line-height: 2;

    @include mq($from: md) {
      font-size: calculate-rem(12);
    }
  }

  .media__link {
    font-family: $font-family--josefin-sans;
    font-size: calculate-rem(12);
    color: $color-name--carnation;

    @include mq($from: md) {
      font-size: calculate-rem(14);
    }
  }

  .modal__footer {
    width: 100%;
    padding-top: calculate-rem(2);
    padding-bottom: calculate-rem(20);

    @include mq($from: md) {
      @include get-rem(padding, 12, 15, 45, 15);
    }
  }

  .footer__special-buttons {
    font-family: $font-family--arimo;
    font-size: calculate-rem(10);
    font-weight: 700;

    @include mq($from: md) {
      font-size: calculate-rem(12);
    }
  }

  .footer__buy-button {
    width: calculate-rem(140);
    height: calculate-rem(62);
    font-family: $font-family--josefin-sans;
    font-size: calculate-rem(20);
    border-color: $color-name--mercury;
    border-radius: 0;

    @include mq($from: md) {
      width: calculate-rem(261);
      height: calculate-rem(70);
      font-size: calculate-rem(24);
    }

    @include mq($from: lg) {
      width: calculate-rem(300);
    }

    @include mq($from: xl) {
      width: calculate-rem(340);
      height: calculate-rem(75);
    }
  }

  .footer__title {
    font-size: calculate-rem(10);

    @include mq($from: md) {
      font-size: calculate-rem(12);
    }
  }

  .footer__cost {
    font-family: $font-family--josefin-sans;
    font-size: calculate-rem(14);

    @include mq($from: md) {
      font-size: calculate-rem(18);
    }
  }
</style>
