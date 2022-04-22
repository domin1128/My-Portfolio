<template>
  <div>
    <scroll-fixed-header :fixed.sync="fixed" :threshold="56">
      <div class="myportfolio_topbar">
        <div class="topbar_inner">
          <div class="logo">
            <router-link to="/">
              <img src="../assets/img/logo/new/dark.png" alt="" />
            </router-link>
          </div>
          
          <div class="menu">
            <scrollactive
              class="anchor_nav"
            >
              <a href="#home" class="scrollactive-item">Home</a>
              <a href="#about" class="scrollactive-item">About</a>
              <a href="#portfolio" class="scrollactive-item">Portfolio</a>
              <a href="#contact" class="scrollactive-item">Contact</a>
             
            </scrollactive>
          </div>
         
        </div>
      </div>

    </scroll-fixed-header>

  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      active: false,
      fixed: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
