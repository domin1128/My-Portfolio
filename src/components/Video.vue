<template>
  <div class="myportfolio_section">
    <CoolLightBox :items="youtubeItems" :index="index" @close="index = null">
    </CoolLightBox>
    <div
      class="myportfolio_video"
      v-for="(image, imageIndex) in youtubeItems"
      :key="imageIndex">
      <div class="bg">
        <div
          class="image jarallax"
          :style="{ backgroundImage: 'url(' + image.thumb + ')' }">
          </div>
        <div class="overlay"></div>
      </div>

      <div class="content">
        <span class="rounded"
          @click="index = imageIndex"
          v-scroll-reveal="{ delay: 50, distance: '50px', duration: 1000 }">
          </span>

        <h3 class="text" v-scroll-reveal="{ delay: 100, distance: '50px', duration: 1200 }">Watch My Video CV</h3>

        <div
          class="myportfolio_video_button"
          v-scroll-reveal="{ delay: 150, distance: '50px', duration: 1400 }">
          
          <button class="popup-youtube" @click="index = imageIndex">
            Watch
          </button>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      index: null,
      youtubeItems: [
        {
          src: "https://www.youtube.com/watch?v=XwMxuqmtBDk&ab_channel=DominikSatke",
          thumb: require("../assets/img/video/1.png"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
