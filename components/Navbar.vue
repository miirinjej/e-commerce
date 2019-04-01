<template>
  <b-navbar
    class="navbar"
    toggleable
  >
    <b-navbar-brand href="/">
      TL
    </b-navbar-brand>
    <b-dropdown
      :text="selectedLanguage"
      variant="outline-secondary"
    >
      <b-dropdown-item
        v-for="(language, index) in languages"
        :key="index"
        @click="selectedLanguage = language.name"
      >
        {{ language.name }}
      </b-dropdown-item>
    </b-dropdown>
    <div class="bag">
      <div v-b-modal.bag__modal>
        <fa icon="shopping-bag" />
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
          You've qualified for Free UK Next Day Delivery on your order. Don't forget to enter the code nexday at checkout
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
    <b-link>Email sign up</b-link>
    <b-navbar-toggle target="navbar__text-collapse" />
    <fa icon="times" />
    <b-collapse
      id="navbar__text-collapse"
      is-nav
    >
      <b-navbar-nav>
        <b-nav-item
          v-for="(item, index) in items"
          :key="index"
          :href="item.url"
        >
          {{ item.name }}
        </b-nav-item>
      </b-navbar-nav>
      <div class="navbar__search-bar">
        <b-form-input
          v-model="searchText"
          placeholder="Style name"
        />
        <fa icon="search" />
      </div>
    </b-collapse>
  </b-navbar>
</template>

<script>
  export default {
    name: 'Navbar',
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
      };
    },
  };
</script>

<style lang="scss" scoped>
</style>
