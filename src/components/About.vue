<template>
  <div class="about_inner">
    <div class="left">
      <div class="image">
       <div
          class="main"
          v-scroll-reveal="{ delay: 20 }"
          :style="{ backgroundImage: 'url(' + aboutImg + ')' }"
        ></div>
      </div>
      
    </div>
    

    <div class="right">
      <div class="myportfolio_title">
        <span v-scroll-reveal="{ delay: 20 }">About Me</span>
        <h3 v-scroll-reveal="{ delay: 40 }">
          Multimedia Designer based in Esbjerg, Denmark
        </h3>
      </div>
      <div class="text" v-scroll-reveal="{ delay: 60 }">
        <p>
          I see opportunities in all types of clients. 
          Let's do a beautiful piece of work together to 
          strengthen the brands identity and relationship 
          with your customers. I am excited to have 
          a chance to be a part of your marketing team and embark 
          on the journey with you.
        </p>
      </div>
      <div class="myportfolio_button" v-scroll-reveal="{ delay: 80 }">
        <a :href="cv" download>
          Download CV
        </a>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      aboutImg: require("../assets/img/about/me.png"),
      cv: require("../assets/img/resume/cv.png"),
    };
  },
};
</script>
