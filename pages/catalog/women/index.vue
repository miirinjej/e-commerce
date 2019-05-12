<template>
  <div class="catalog">
    <b-container
      class="l-container border-bottom"
      fluid
    >
      <b-row class="filter align-items-center d-lg-none">
        <b-col
          class="filter__selected-items p-0"
          cols="10"
          md="auto"
        >
          <span :class="{ 'is-selected': selectedFashion }">{{ selectedFashion ? selectedFashion : 'Fashion' }}</span>,
          <span :class="{ 'is-selected': selectedProductType }">{{ selectedProductType ? selectedProductType : 'Product type' }}</span>,
          <span :class="{ 'is-selected': selectedColor }">{{ selectedColor ? selectedColor : 'Color' }}</span>,
          <span :class="{ 'is-selected': selectedBrand }">{{ selectedBrand ? selectedBrand : 'Brand' }}</span>,
          <span :class="{ 'is-selected': selectedSize }">{{ selectedSize ? selectedSize : 'Size' }}</span>,
          <span :class="{ 'is-selected': selectedPriceRange }">{{ selectedPriceRange ? selectedPriceRange : 'Price range' }}</span>
        </b-col>
        <b-col
          class="filter__toggle-button p-0 d-flex justify-content-end"
          cols="2"
          md="auto"
        />
      </b-row>
      <b-row class="filter d-none d-lg-inline-block w-100">
        <b-input-group>
          <b-dropdown
            slot="prepend"
            variant="outline-secondary"
            :class="{ 'is-selected': selectedFashion }"
          >
            <template slot="button-content">
              Fashion
              <div
                v-if="selectedFashion"
                class="is-selected"
              >
                {{ selectedFashion }}
              </div>
            </template>
            <b-dropdown-item
              v-for="(fashion, index) in fashions"
              :key="index"
              @click="selectedFashion = fashion.name"
            >
              {{ fashion.name }}
            </b-dropdown-item>
          </b-dropdown>
          <b-dropdown
            slot="prepend"
            variant="outline-secondary"
            :class="{ 'is-selected': selectedProductType }"
          >
            <template slot="button-content">
              Product type
              <div
                v-if="selectedProductType"
                class="is-selected"
              >
                {{ selectedProductType }}
              </div>
            </template>
            <b-dropdown-item
              v-for="(productType, index) in productTypes"
              :key="index"
              @click="selectedProductType = productType.name"
            >
              {{ productType.name }}
            </b-dropdown-item>
          </b-dropdown>
          <b-dropdown
            slot="prepend"
            variant="outline-secondary"
            :class="{ 'is-selected': selectedColor }"
          >
            <template slot="button-content">
              Color
              <div
                v-if="selectedColor"
                class="is-selected"
              >
                {{ selectedColor }}
              </div>
            </template>
            <b-dropdown-item
              v-for="(color, index) in colors"
              :key="index"
              @click="selectedColor = color.name"
            >
              {{ color.name }}
            </b-dropdown-item>
          </b-dropdown>
          <b-dropdown
            slot="prepend"
            variant="outline-secondary"
            :class="{ 'is-selected': selectedBrand }"
          >
            <template slot="button-content">
              Brand
              <div
                v-if="selectedBrand"
                class="is-selected"
              >
                {{ selectedBrand }}
              </div>
            </template>
            <b-dropdown-item
              v-for="(brand, index) in brands"
              :key="index"
              @click="selectedBrand = brand.name"
            >
              {{ brand.name }}
            </b-dropdown-item>
          </b-dropdown>
          <b-dropdown
            slot="prepend"
            variant="outline-secondary"
            :class="{ 'is-selected': selectedSize }"
          >
            <template slot="button-content">
              Size
              <div
                v-if="selectedSize"
                class="is-selected"
              >
                {{ selectedSize }}
              </div>
            </template>
            <b-dropdown-item
              v-for="(size, index) in sizes"
              :key="index"
              @click="selectedSize = size.name"
            >
              {{ size.name }}
            </b-dropdown-item>
          </b-dropdown>
          <b-dropdown
            slot="prepend"
            variant="outline-secondary"
            :class="{ 'is-selected': selectedPriceRange }"
          >
            <template slot="button-content">
              Price range
              <div
                v-if="selectedPriceRange"
                class="is-selected"
              >
                {{ selectedPriceRange }}
              </div>
            </template>
            <b-dropdown-item
              v-for="(priceRange, index) in priceRanges"
              :key="index"
              @click="selectedPriceRange = priceRange.name"
            >
              {{ priceRange.name }}
            </b-dropdown-item>
          </b-dropdown>
        </b-input-group>
      </b-row>
    </b-container>
    <b-container fluid>
      <section class="catalog-section">
        <b-row>
          <b-col
            v-for="(item, index) in items"
            :key="index"
            class="catalog-section__item"
            :cols="item.isOffer ? '12' : '6'"
            :md="item.isOffer ? '12' : '4'"
            :lg="item.isOffer ? '12' : '3'"
            :order="item.isOffer ? '1' : index"
            :order-md="item.isOffer ? '2' : index"
            :order-lg="index"
          >
            <picture class="catalog-section__picture">
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
            <b-card :class="{ 'banner': item.isOffer }">
              <b-card-text
                class="catalog-section__title"
                :class="{ 'banner__title': item.isOffer }"
                v-html="item.name"
              />
              <b-card-text
                v-if="item.cost"
                class="catalog-section__cost"
                :class="{ 'is-discounted': item.discount }"
              >
                {{ item.cost }}
              </b-card-text>
              <b-card-text
                v-if="item.collection"
                class="catalog-section__collection"
              >
                {{ item.collection.charAt(0).toUpperCase() + item.collection.slice(1) }}
              </b-card-text>
              <b-card-text
                v-if="item.discount"
                class="catalog-section__discount"
              >
                {{ item.discount }}
              </b-card-text>
              <b-card-text
                v-if="item.costWithDiscount"
                class="catalog-section__cost-with-discount"
              >
                {{ item.costWithDiscount }}
              </b-card-text>
              <b-card-text
                v-if="item.description"
                class="catalog-section__description"
              >
                {{ item.description }}
              </b-card-text>
              <b-card-text
                v-if="item.destination"
                class="catalog-section__destination"
                :class="{ 'banner__destination': item.isOffer }"
              >
                {{ item.destination }}
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
        <b-button
          class="catalog-section__button"
          variant="outline-secondary"
        >
          Show more
        </b-button>
      </section>
    </b-container>
    <div class="banner banner--bottom">
      <b-container class="p-0">
        <b-row class="h-100">
          <b-col
            class="adidas-section p-0"
            cols="12"
            md="8"
            lg="6"
          >
            <picture class="adidas-section__picture">
              <source
                media="(max-width: 767px)"
                srcset="/main-header/slider/slide-1/xs-0.webp"
                type="image/webp"
              >
              <source
                media="(max-width: 767px)"
                srcset="/main-header/slider/slide-1/xs-0.png"
                type="image/png"
              >
              <source
                media="(min-width: 768px) and (max-width: 1299px)"
                srcset="/main-header/slider/slide-1/md-0.webp"
                type="image/webp"
              >
              <source
                media="(min-width: 768px) and (max-width: 1299px)"
                srcset="/main-header/slider/slide-1/md-0.png"
                type="image/png"
              >
              <source
                media="(min-width: 1300px)"
                srcset="/main-header/slider/slide-1/xl-0.webp"
                type="image/webp"
              >
              <source
                media="(min-width: 1300px)"
                srcset="/main-header/slider/slide-1/xl-0.png"
                type="image/png"
              >
              <img
                class="slide__image"
                src="/main-header/slider/slide-1/xl-0.png"
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
          </b-col>
          <b-col
            class="repair-patches-section p-0 h-100 d-none d-md-flex"
            cols="4"
            lg="3"
          >
            <picture>
              <source
                media="(min-width: 768px) and (max-width: 1299px)"
                srcset="/main-header/slider/slide-1/md-1.webp"
                type="image/webp"
              >
              <source
                media="(min-width: 768px) and (max-width: 1299px)"
                srcset="/main-header/slider/slide-1/md-1.jpg"
                type="image/jpeg"
              >
              <source
                media="(min-width: 1300px)"
                srcset="/main-header/slider/slide-1/xl-1.webp"
                type="image/webp"
              >
              <source
                media="(min-width: 1300px)"
                srcset="/main-header/slider/slide-1/xl-1.jpg"
                type="image/jpeg"
              >
              <img
                class="slide__image"
                src="/main-header/slider/slide-1/xl-1.jpg"
                alt="repair patches"
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
            class="sale-section p-0 h-100 d-none d-lg-flex"
            cols="3"
          >
            <picture>
              <source
                media="(min-width: 768px) and (max-width: 1299px)"
                srcset="/main-header/slider/slide-1/md-2.webp"
                type="image/webp"
              >
              <source
                media="(min-width: 768px) and (max-width: 1299px)"
                srcset="/main-header/slider/slide-1/md-2.png"
                type="image/png"
              >
              <source
                media="(min-width: 1300px)"
                srcset="/main-header/slider/slide-1/xl-2.webp"
                type="image/webp"
              >
              <source
                media="(min-width: 1300px)"
                srcset="/main-header/slider/slide-1/xl-2.png"
                type="image/png"
              >
              <img
                class="slide__image"
                src="/main-header/slider/slide-1/xl-2.png"
                alt="sale"
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
      </b-container>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selectedFashion: '',
        selectedProductType: '',
        selectedColor: '',
        selectedBrand: '',
        selectedSize: '',
        selectedPriceRange: '',
        fashions: [
          { name: 'Nail the 90s' },
          { name: 'Casual style' },
          { name: 'New Look' },
          { name: 'Sport' },
          { name: 'Vintage' },
          { name: 'Сlassical style' },
        ],
        productTypes: [
          { name: 'Petite' },
          { name: 'Coats & Jackets' },
          { name: 'Dresses' },
          { name: 'Jersey Tops' },
        ],
        colors: [
          { name: 'Yellow' },
          { name: 'Black' },
          { name: 'Blue' },
          { name: 'Red' },
          { name: 'Green' },
          { name: 'Golden' },
        ],
        brands: [
          { name: 'Chi Chi London' },
          { name: 'Antipodium' },
          { name: 'Adidas' },
          { name: 'New Balance' },
          { name: 'River Island' },
        ],
        sizes: [
          { name: 'UK 2' },
          { name: 'UK 18' },
          { name: 'UK 18L' },
          { name: 'UK 20' },
          { name: 'UK 20L' },
          { name: 'UK 20S' },
          { name: 'UK 22S' },
          { name: 'UK 22' },
        ],
        priceRanges: [
          { name: 'To £99' },
          { name: '£100-£299' },
          { name: 'From £300' },
        ],
        items: [
          {
            isOffer: false,
            imageUrl: '/catalog/women/0/',
            name: 'Only Skinny Jeans',
            cost: '£65.50',
            collection: '',
            discount: null,
            costWithDiscount: '',
            description: '',
            destination: '',
          },
          {
            isOffer: false,
            imageUrl: '/catalog/women/1/',
            name: 'Neck Knitted Jumper',
            cost: '£76.25',
            collection: '',
            discount: null,
            costWithDiscount: '',
            description: '',
            destination: '',
          },
          {
            isOffer: false,
            imageUrl: '/catalog/women/2/',
            name: 'Turtle Neck Jumper in Rib',
            cost: '£130.25',
            collection: 'new',
            discount: null,
            costWithDiscount: '',
            description: '',
            destination: '',
          },
          {
            isOffer: false,
            imageUrl: '/catalog/women/3/',
            name: 'With Patchwork Crochet',
            cost: '£80.60',
            collection: '',
            discount: null,
            costWithDiscount: '',
            description: '',
            destination: '',
          },
          {
            isOffer: true,
            imageUrl: '',
            name: 'Last weekend <span class="banner__extra">extra 50%</span> off on all reduced boots and'
              + ' shoulder bags',
            cost: '',
            collection: '',
            discount: null,
            costWithDiscount: '',
            description: '',
            destination: 'This offer is valid in-store and online. '
              + 'Prices displayed reflect this additional discount. This offer'
              + ' ends at 11:59 GMT on March 1st 2015',
          },
          {
            isOffer: false,
            imageUrl: '/catalog/women/4/',
            name: ' Levi’s Jeans for women',
            cost: '',
            collection: '',
            discount: null,
            costWithDiscount: '',
            destination: '',
            description: 'More colours',
          },
          {
            isOffer: false,
            imageUrl: '/catalog/women/5/',
            name: 'Boyfriend T-Shirt with Bohemian Print',
            cost: '£120.00',
            collection: '',
            discount: '25%',
            costWithDiscount: '£90.00',
            description: '',
            destination: '',
          },
          {
            isOffer: false,
            imageUrl: '/catalog/women/6/',
            name: 'Colour Block',
            cost: '£550.50',
            collection: '',
            discount: null,
            costWithDiscount: '',
            description: '',
            destination: '',
          },
          {
            isOffer: false,
            imageUrl: '/catalog/women/7/',
            name: 'Monki Festval Knitted',
            cost: '£24.75',
            collection: '',
            discount: null,
            costWithDiscount: '',
            description: '',
            destination: '',
          },
          {
            isOffer: false,
            imageUrl: '/catalog/women/8/',
            name: 'Oversized Cardigan',
            cost: '£90.00',
            collection: '',
            discount: null,
            costWithDiscount: '',
            description: '',
            destination: '',
          },
          {
            isOffer: false,
            imageUrl: '/catalog/women/9/',
            name: 'Paul & Joe Sister Jumper with Neon Trims',
            cost: '£19.75',
            collection: 'new',
            discount: null,
            costWithDiscount: '',
            description: '',
            destination: '',
          },
          {
            isOffer: false,
            imageUrl: '/catalog/women/10/',
            name: 'Only Busted Knee Jean',
            cost: '£140.50',
            collection: '',
            discount: null,
            costWithDiscount: '',
            description: '',
            destination: '',
          },
          {
            isOffer: false,
            imageUrl: '/catalog/women/11/',
            name: 'Boyfriend T-Shirt with Bohemian Print',
            cost: '£85.75',
            collection: '',
            discount: null,
            costWithDiscount: '',
            description: '',
            destination: '',
          },
        ],
      };
    },
  };
</script>

<style lang="scss">
  .catalog {
    .filter {
      .input-group {
        height: 100%;
      }

      .input-group-prepend {
        width: 100%;

        .btn {
          border: none;
          border-radius: 0;
        }
      }

      .b-dropdown {
        width: 16.66666666667%;

        &.is-selected {
          background: $color-name--alabaster;
        }

        &.show {
          .dropdown-toggle::after {
            border-color: $color-name--white transparent transparent transparent;
          }
        }
      }

      .dropdown-toggle {
        font-family: $font-family--josefin-sans;
        font-size: calculate-rem(14);
        text-align: left;

        &::after {
          position: absolute;
          top: 50%;
          right: calculate-rem(19);
          border: 3px solid;
          border-color: $color-name--black transparent transparent transparent;
          transform: translateY(-50%);
        }

        &:hover {
          &::after {
            border-color: $color-name--white transparent transparent transparent;
          }
        }
      }
    }

    .banner {
      &--bottom {
        display: flex;
        justify-content: center;

        .container {
          max-width: 100%;
          height: calculate-rem(237);
          padding: 0;
          overflow: hidden;

          @include mq($from: md) {
            max-width: calculate-rem(768);
            height: calculate-rem(251);
            border: 1px solid $color-name--mercury;
            border-bottom: none;
          }

          @include mq($from: lg) {
            max-width: calculate-rem(1024);
            height: calculate-rem(229);
          }

          @include mq($from: xl) {
            max-width: calculate-rem(1300);
            height: calculate-rem(384);
          }
        }
      }
    }

    .banner__extra {
      color: $color-name--carnation;
    }
  }
</style>

<style lang="scss" scoped>
  .l-container {
    margin-bottom: calculate-rem(20);

    @include mq($from: md) {
      margin-bottom: calculate-rem(39);
    }

    @include mq($from: lg) {
      margin-bottom: calculate-rem(50);
    }

    @include mq($from: xl) {
      margin-bottom: calculate-rem(60);
    }
  }

  .filter {
    position: relative;
    height: calculate-rem(54);

    @include mq($from: md) {
      height: calculate-rem(65);
    }
  }

  .filter__selected-items {
    overflow: hidden;
    font-family: $font-family--josefin-sans;
    font-size: calculate-rem(14);
    white-space: nowrap;

    @include mq($from: md) {
      margin-right: calculate-rem(16);
      font-size: calculate-rem(16);
    }
  }

  .filter__toggle-button {
    &::after {
      display: inline-block;
      cursor: pointer;
      content: "";
      border: 3px solid;
      border-color: $color-name--black transparent transparent transparent;
    }
  }

  .is-selected {
    color: $color-name--carnation;

    .b-dropdown.show &,
    .b-dropdown:hover & {
      color: $color-name--white;
    }
  }

  .catalog-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: calculate-rem(20);
    margin-bottom: calculate-rem(101);

    @include mq($from: md) {
      margin-top: calculate-rem(39);
      margin-bottom: calculate-rem(138);
    }

    @include mq($from: md) {
      margin-top: calculate-rem(50);
      margin-bottom: calculate-rem(135);
    }

    @include mq($from: xl) {
      margin-top: calculate-rem(60);
      margin-bottom: calculate-rem(158);
    }

    .card {
      text-align: center;
      border: none;
    }

    .card-body {
      @include get-rem(padding, 34, 0, 0, 0);

      @include mq($from: md) {
        padding-top: calculate-rem(45);
      }

      @include mq($from: xl) {
        padding-top: calculate-rem(50);
      }
    }

    .banner {
      .card-body {
        padding: 0;
      }
    }

    .banner__title {
      margin-bottom: calculate-rem(9);
      font-family: $font-family--josefin-sans;
      font-size: calculate-rem(20);

      @include mq($from: md) {
        font-size: calculate-rem(24);
      }

      @include mq($from: xl) {
        font-size: calculate-rem(26);
      }
    }

    .banner__destination {
      font-family: $font-family--eb-garamond;
      font-size: calculate-rem(14);

      @include mq($from: md) {
        font-size: calculate-rem(16);
      }
    }
  }

  .catalog-section__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: calculate-rem(49);
  }

  .catalog-section__title,
  .catalog-section__cost,
  .catalog-section__cost-with-discount {
    font-size: calculate-rem(12);

    @include mq($from: md) {
      font-size: calculate-rem(14);
    }
  }

  .catalog-section__title {
    margin-bottom: calculate-rem(14);
    font-weight: 700;

    @include mq($from: md) {
      margin-bottom: calculate-rem(19);
    }
  }

  .catalog-section__cost {
    &.is-discounted {
      color: $color-name--boulder;
    }
  }

  .catalog-section__cost,
  .catalog-section__collection,
  .catalog-section__discount,
  .catalog-section__cost-with-discount {
    display: inline-block;
  }

  .catalog-section__collection,
  .catalog-section__discount,
  .catalog-section__description {
    font-family: $font-family--eb-garamond;
    font-size: calculate-rem(14);
    color: $color-name--boulder;

    @include mq($from: md) {
      font-size: calculate-rem(16);
    }
  }

  .catalog-section__discount {
    margin-right: calculate-rem(10);
  }

  .catalog-section__button {
    width: calculate-rem(220);
    height: calculate-rem(62);
    margin-top: calculate-rem(19);
    font-family: $font-family--josefin-sans;
    font-size: calculate-rem(20);
    border-color: $color-name--mercury;
    border-radius: 0;

    @include mq($from: md) {
      width: calculate-rem(260);
      height: calculate-rem(70);
      margin-top: calculate-rem(38);
      font-size: calculate-rem(24);
    }

    @include mq($from: lg) {
      width: calculate-rem(300);
    }

    @include mq($from: xl) {
      width: calculate-rem(340);
      height: calculate-rem(75);
      margin-top: calculate-rem(46);
      font-size: calculate-rem(26);
    }
  }

  .adidas-section {
    position: relative;
    display: flex;
    justify-content: center;
    background: #324063;
  }

  .adidas-section__promo {
    position: absolute;
    top: calculate-rem(34);
    right: calculate-rem(39);
    color: $color-name--white;
    text-align: center;

    @include mq($from: md) {
      right: calculate-rem(58);
    }

    @include mq($from: xl) {
      right: calculate-rem(83);
    }
  }

  .adidas-section__title {
    font-family: $font-family--josefin-sans;
    font-size: calculate-rem(24);

    @include mq($from: md) {
      font-size: calculate-rem(26);
    }

    @include mq($from: xl) {
      font-size: calculate-rem(30);
    }
  }

  .adidas-section__destination {
    font-family: $font-family--eb-garamond;
    font-size: calculate-rem(14);

    @include mq($from: md) {
      font-size: calculate-rem(16);
    }
  }

  .repair-patches-section {
    display: flex;
    align-items: center;
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

    @include mq($from: xl) {
      bottom: calculate-rem(53);
    }
  }

  .repair-patches-section__title {
    font-family: $font-family--josefin-sans;
    font-size: calculate-rem(26);

    @include mq($from: xl) {
      font-size: calculate-rem(30);
    }
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

    @include mq($from: xl) {
      bottom: calculate-rem(53);
    }
  }

  .sale-section__title {
    font-family: $font-family--josefin-sans;
    font-size: calculate-rem(26);
    color: $color-name--carnation;

    @include mq($from: xl) {
      font-size: calculate-rem(30);
    }
  }

  .sale-section__destination {
    font-family: $font-family--eb-garamond;
    color: $color-name--boulder;
  }
</style>
