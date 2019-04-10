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
                  <b-media no-body>
                    <b-media-aside>
                      <b-card>
                        <b-card-text>£390.25</b-card-text>
                      </b-card>
                    </b-media-aside>
                    <b-media-body>
                      <h5>Only Skinny Jeans</h5>
                      <p>Color: Phillipa wash</p>
                      <p>Size: UK 17</p>
                      <p>Quantity: 1</p>
                      <b-link>Change details</b-link>
                    </b-media-body>
                  </b-media>
                  <b-media no-body>
                    <b-media-aside>
                      <b-card>
                        <b-card-text>£400.75</b-card-text>
                        <b-card-text>New</b-card-text>
                      </b-card>
                    </b-media-aside>
                    <b-media-body>
                      <h5>
                        Paul & Joe Sister Jumper with Neon Trims
                      </h5>
                      <p>Color: Blue</p>
                      <p>Size: UK 18</p>
                      <p>Quantity: 1</p>
                      <b-link>Change details</b-link>
                    </b-media-body>
                  </b-media>
                  <b-media no-body>
                    <b-media-aside>
                      <b-card>
                        <b-card-text>£849.50</b-card-text>
                        <b-card-text>New</b-card-text>
                      </b-card>
                    </b-media-aside>
                    <b-media-body>
                      <h5>
                        Boyfriend T-Shirt with Bohemian Print
                      </h5>
                      <p>Color: Black</p>
                      <p>Size: UK 18</p>
                      <p>Quantity: 1</p>
                      <b-link>Change details</b-link>
                    </b-media-body>
                  </b-media>
                  <b-media no-body>
                    <b-media-aside>
                      <b-card>
                        <b-card-text>£176.35</b-card-text>
                      </b-card>
                    </b-media-aside>
                    <b-media-body>
                      <h5>Turtle Neck Jumper in Rib</h5>
                      <p>Color: Green</p>
                      <p>Size: UK 19</p>
                      <p>Quantity: 1</p>
                      <b-link>Change details</b-link>
                    </b-media-body>
                  </b-media>
                </b-container>
                <b-alert
                  v-model="showAlert"
                  dismissible
                >
                  You've qualified for Free UK Next Day Delivery on your order. Don't forget to enter the code nexday at
                  checkout
                </b-alert>
                <div
                  slot="modal-footer"
                  class="modal__footer"
                >
                  <b-row>
                    <b-nav>
                      <b-nav-item>Save bag</b-nav-item>
                      <b-nav-item>Empty bag</b-nav-item>
                    </b-nav>
                    <b-col>
                      <b-btn variant="outline-secondary">
                        Buy now
                      </b-btn>
                    </b-col>
                    <b-col>
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
            name: 'Woman',
            url: '/catalog/woman',
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
</style>
