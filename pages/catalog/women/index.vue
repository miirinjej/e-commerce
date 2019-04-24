<template>
  <b-container>
    <b-dropdown slot="prepend">
      <template slot="button-content">
        {{ selectedFashion ? selectedFashion : 'Fashion' }},
        {{ selectedProductType ? selectedProductType : 'Product type' }},
        {{ selectedColor ? selectedColor : 'Color' }},
        {{ selectedBrand ? selectedBrand : 'Brand' }},
        {{ selectedSize ? selectedSize : 'Size' }},
        {{ selectedPriceRange ? selectedPriceRange : 'Price range' }}
      </template>
      <b-dropdown-item />
    </b-dropdown>
    <b-row>
      <b-input-group>
        <b-dropdown slot="prepend">
          <template slot="button-content">
            Fashion<br v-if="selectedFashion">
            {{ selectedFashion }}
          </template>
          <b-dropdown-item
            v-for="(fashion, index) in fashions"
            :key="index"
            @click="selectedFashion = fashion.name"
          >
            {{ fashion.name }}
          </b-dropdown-item>
        </b-dropdown>
        <b-dropdown slot="prepend">
          <template slot="button-content">
            Product type<br v-if="selectedProductType">
            {{ selectedProductType }}
          </template>
          <b-dropdown-item
            v-for="(productType, index) in productTypes"
            :key="index"
            @click="selectedProductType = productType.name"
          >
            {{ productType.name }}
          </b-dropdown-item>
        </b-dropdown>
        <b-dropdown slot="prepend">
          <template slot="button-content">
            Color<br v-if="selectedColor">
            {{ selectedColor }}
          </template>
          <b-dropdown-item
            v-for="(color, index) in colors"
            :key="index"
            @click="selectedColor = color.name"
          >
            {{ color.name }}
          </b-dropdown-item>
        </b-dropdown>
        <b-dropdown slot="prepend">
          <template slot="button-content">
            Brand<br v-if="selectedBrand">
            {{ selectedBrand }}
          </template>
          <b-dropdown-item
            v-for="(brand, index) in brands"
            :key="index"
            @click="selectedBrand = brand.name"
          >
            {{ brand.name }}
          </b-dropdown-item>
        </b-dropdown>
        <b-dropdown slot="prepend">
          <template slot="button-content">
            Size<br v-if="selectedSize">
            {{ selectedSize }}
          </template>
          <b-dropdown-item
            v-for="(size, index) in sizes"
            :key="index"
            @click="selectedSize = size.name"
          >
            {{ size.name }}
          </b-dropdown-item>
        </b-dropdown>
        <b-dropdown slot="append">
          <template slot="button-content">
            Price range<br v-if="selectedPriceRange">
            {{ selectedPriceRange }}
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
    <section class="catalog-section">
      <b-row>
        <b-col>
          <b-card>
            <b-card-text class="catalog-section__title">
              Only Skinny Jeans
            </b-card-text>
            <b-card-text class="catalog-section__cost">
              £65.50
            </b-card-text>
          </b-card>
        </b-col>
        <b-col>
          <b-card>
            <b-card-text class="catalog-section__title">
              Neck Knitted Jumper
            </b-card-text>
            <b-card-text class="catalog-section__cost">
              £76.25
            </b-card-text>
          </b-card>
        </b-col>
        <b-col>
          <b-card>
            <b-card-text class="catalog-section__title">
              Turtle Neck Jumper in Rib
            </b-card-text>
            <b-card-text class="catalog-section__cost">
              £130.25
            </b-card-text>
            <b-card-text class="catalog-section__collection">
              New
            </b-card-text>
          </b-card>
        </b-col>
        <b-col>
          <b-card>
            <b-card-text class="catalog-section__title">
              With Patchwork Crochet
            </b-card-text>
            <b-card-text class="catalog-section__cost">
              £80.60
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
      <div class="banner banner--middle">
        <p class="banner__title">
          Last weekend extra 50% off on all reduced boots and shoulder bags
        </p>
        <p class="banner__description">
          This offer is valid in-store and online. Prices displayed reflect this additional discount. This offer ends at 11:59 GMT on March 1st 2015
        </p>
      </div>
      <b-row>
        <b-col>
          <b-card>
            <b-card-text class="catalog-section__title">
              Levi’s Jeans for women
            </b-card-text>
            <b-link class="catalog-section__link">
              More colours
            </b-link>
          </b-card>
        </b-col>
        <b-col>
          <b-card>
            <b-card-text class="catalog-section__title">
              Boyfriend T-Shirt with Bohemian Print
            </b-card-text>
            <b-card-text class="catalog-section__cost">
              £120.00
            </b-card-text>
            <b-card-text class="catalog-section__discount">
              25%
            </b-card-text>
            <b-card-text class="catalog-section__cost-with-discount">
              £90.00
            </b-card-text>
          </b-card>
        </b-col>
        <b-col>
          <b-card>
            <b-card-text class="catalog-section__title">
              Colour Block
            </b-card-text>
            <b-card-text class="catalog-section__cost">
              £550.50
            </b-card-text>
          </b-card>
        </b-col>
        <b-col>
          <b-card>
            <b-card-text class="catalog-section__title">
              Monki Festval Knitted
            </b-card-text>
            <b-card-text class="catalog-section__cost">
              £24.75
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-card>
            <b-card-text class="catalog-section__title">
              Oversized Cardigan
            </b-card-text>
            <b-card-text class="catalog-section__cost">
              £90.00
            </b-card-text>
          </b-card>
        </b-col>
        <b-col>
          <b-card>
            <b-card-text class="catalog-section__title">
              Paul & Joe Sister Jumper with Neon Trims
            </b-card-text>
            <b-card-text class="catalog-section__cost">
              £19.75
            </b-card-text>
            <b-card-text class="catalog-section__collection">
              New
            </b-card-text>
          </b-card>
        </b-col>
        <b-col>
          <b-card>
            <b-card-text class="catalog-section__title">
              Only Busted Knee Jean
            </b-card-text>
            <b-card-text class="catalog-section__cost">
              £140.50
            </b-card-text>
          </b-card>
        </b-col>
        <b-col>
          <b-card>
            <b-card-text class="catalog-section__title">
              Boyfriend T-Shirt with Bohemian Print
            </b-card-text>
            <b-card-text class="catalog-section__cost">
              £85.75
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
      <b-button variant="outline-primary">
        Show more
      </b-button>
    </section>
    <div class="banner banner--bottom">
      <b-row>
        <b-col>
          <b-img />
          <p class="banner__title">
            Adidas Blue
          </p>
          <p class="banner__description">
            For men
          </p>
        </b-col>
        <b-col>
          <b-img />
          <p class="banner__title">
            Repair Patches
          </p>
          <p class="banner__description">
            £150.50
          </p>
        </b-col>
        <b-col>
          <b-img />
          <p class="banner__title">
            Sale
          </p>
          <p class="banner__description">
            -70%
          </p>
        </b-col>
      </b-row>
    </div>
  </b-container>
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
      };
    },
  };
</script>

<style scoped>
</style>
