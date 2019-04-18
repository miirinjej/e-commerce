<template>
  <div>
    <main-header />
    <b-container class="banner banner--top">
      <b-row>
        <b-col>
          <b-img />
          <p class="banner__title">
            Nike red
          </p>
          <p class="banner__description">
            New
          </p>
        </b-col>
        <b-col>
          <b-img />
          <p class="banner__title">
            Caps & hats
          </p>
          <p class="banner__description">
            Sale -50%
          </p>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <section class="arrivals-section">
        <h2 class="arrivals-section__heading">
          New arrivals
        </h2>
        <b-row>
          <b-col>
            <b-card>
              <b-card-text class="arrivals-section__title">
                Straight Leg Jeans
              </b-card-text>
              <b-card-text class="arrivals-section__cost">
                £55.00
              </b-card-text>
            </b-card>
          </b-col>
          <b-col>
            <b-card>
              <b-card-text class="arrivals-section__title">
                Boyfriend T-Shirt with Bohemian Print
              </b-card-text>
              <b-card-text class="arrivals-section__cost">
                £34.25
              </b-card-text>
            </b-card>
          </b-col>
          <b-col>
            <b-card>
              <b-card-text class="arrivals-section__title">
                Only Busted Knee Jean
              </b-card-text>
              <b-card-text class="arrivals-section__cost">
                £140.50
              </b-card-text>
            </b-card>
          </b-col>
          <b-col>
            <b-card>
              <b-card-text class="arrivals-section__title">
                Only Skinny Jeans
              </b-card-text>
              <b-card-text class="arrivals-section__cost">
                £12.75
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
        <b-button variant="outline-primary">
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
        <h3 class="about-section__heading about-section__heading--secondary">
          The Template Group is also well known for its commitment to society
        </h3>
        <p class="about-section__motto about-section__motto--secondary">
          We place a premium on being a good corporate citizen by working to enrich the communities in which we live and
          work
        </p>
        <p class="about-section__description about-section__description--secondary">
          First and foremost, we are committed to our people; those who have helped us get to where we are today. Though
          our workforce is as diverse as our geographical imprint, a common thread remains – our team members are
          passionate, productive and motivated. We provide our team with an abundance of opportunities to help them
          realize their full potential, because at our core, we believe that when one person grows, so too does the
          company.
        </p>
      </section>
    </b-container>
  </div>
</template>

<script>
  import MainHeader from '~/components/MainHeader';

  export default {
    components: {
      MainHeader,
    },
  };
</script>

<style>
</style>
