<template>
  <div class="slider-two">
    <div class="myportfolio_hero" id="home">
      <div class="background">
        <div class="image" 
        :style="{ backgroundImage: 'url(' + sliderHero + ')' }">
          </div>
      </div>

       <div class="container">
        <div class="content"> 
          <div class="name_wrap">
            <h3><span>Dominik</span> Satke<span class="overlay_effect"></span></h3>
          </div>

          <div class="job_wrap">
            <span class="job">
              Multimedia Designer
              <span class="overlay_effect"></span>
            </span>
          </div>
        </div>

    </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {

  },
  data() {
    return {
      sliderHero: require("../assets/img/slider/2.png"),
    };
  },
};
</script>

<style lang="scss" scoped></style>
