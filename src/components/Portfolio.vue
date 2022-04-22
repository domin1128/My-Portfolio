<template>
  <div class="container">
    <div
      class="positon-relative"
      v-scroll-reveal="{ delay: 50, distance: '20px' }">
      <div class="myportfolio_title">
        <div class="title_flex">
          <div class="left">
            <span>Portfolio</span>
            <h3>Creative Portfolio</h3>
          </div>
        </div>
      </div>
    </div>

    <div v-if="activetab === 1" class="tabcontent">
      <div class="portfolio_list">
        <ul class="gallery_zoom">

          <li v-for="(image, imageIndex) in allItems" :key="imageIndex">
            <div class="inner" @click="index = imageIndex">
              <div class="entry">
                <img class="image" :src="image.thumb" alt="Portfolio" />
              </div>
              
              <div class="mobile_title">
                <h3>{{ image.portfolioName }}</h3>
                <span>{{ image.portfolioType }}</span>
              </div>
            </div>
          </li>
         
        </ul>
      </div>

      
    </div>
    

  </div>
</template>

<script>
export default {
  data() {
    return {
      activetab: 1,
      allItems: [
        {
          thumb: require("../assets/img/portfolio/1.png"),
          portfolioName: "Promo Commercial",
          portfolioType: "Video",
        },
        {
          
          thumb: require("../assets/img/portfolio/2.png"),
          portfolioName: "Esbjergs Største Fredagsbar",
          portfolioType: "Graphic Design",
        },
        {
          
          thumb: require("../assets/img/portfolio/3.png"),
          portfolioName: "MGK's Valentines Card",
          portfolioType: "Graphic Design",
        },
        {
          thumb: require("../assets/img/portfolio/4.png"),
          portfolioName: "Esbjerg Rebranding",
          portfolioType: "Marketing",
        },
        {
          thumb: require("../assets/img/portfolio/5.png"),
          portfolioName: "Film Scene Remake",
          portfolioType: "Video",
        },
        {
          
          thumb: require("../assets/img/portfolio/6.png"),
          portfolioName: "Trapholt Rebranding",
          portfolioType: "Web Development",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
