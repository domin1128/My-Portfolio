<template>
  <div class="home-two">
    <Header />

    <Slider />

    <div class="myportfolio_section" id="about">
      <div class="myportfolio_about">
        <div class="container">
          <About />
        </div>

      </div>
    </div>

    <div class="myportfolio_section" id="portfolio">
      <div class="myportfolio_portfolio">
        <Portfolio />
      </div>
    </div>

    <Skills />

    <Video />

    <CallToActions />

    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Slider from "../components/Slider.vue";
import About from "../components/About.vue";
import Portfolio from "../components/Portfolio.vue";
import Skills from "../components/Skills.vue";
import Video from "../components/Video.vue";
import CallToActions from "../components/CallToAction.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Header,
    Slider,
    About,
    Portfolio,
    Skills,
    Video,
    CallToActions,
    Footer,
  },
};
</script>

<style lang="scss" scoped></style>
