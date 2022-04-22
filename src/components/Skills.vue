<template>
  <div class="myportfolio_section">
    <div class="myportfolio_skills">
      <div class="container">
        <div class="skills_inner">
          <div
            class="left"
            v-scroll-reveal="{ delay: 50, distance: '50px', duration: 1000 }">
            
            <div class="myportfolio_title">
              <h3>I have high skills in Marketing Communication.</h3>
            </div>
            <div class="text">
              <p>
                I am experienced as a web-developer, designer, videographer and photographer.
                I love exploring new creative ways to communicate to the audience.
              </p>
            </div>
          </div>
  

          <div class="right">
            <div class="my_progress">
              <div
                class="progress_inner"
                v-scroll-reveal="{
                  delay: 50,
                  distance: '20px',
                  duration: 1000,
                  }">

                <span>
                  <span class="label">Advertising</span>
                  <span class="number">95%</span>
                </span>
                <div class="background">
                  <div class="bar">
                    <div class="bar_in" style="width:95%"></div>
                  </div>
                </div>
              </div>
              

              <div
                class="progress_inner"
                v-scroll-reveal="{
                  delay: 100,
                  distance: '20px',
                  duration: 1200,
                }">

                <span>
                  <span class="label">Branding</span>
                  <span class="number">90%</span>
                </span>
                <div class="background">
                  <div class="bar">
                    <div class="bar_in" style="width:90%"></div>
                  </div>
                </div>
              </div>
              

              <div
                class="progress_inner"
                v-scroll-reveal="{
                  delay: 150,
                  distance: '20px',
                  duration: 1300,
                }">
                
                <span>
                  <span class="label">Web Development</span>
                  <span class="number">70%</span>
                </span>
                <div class="background">
                  <div class="bar">
                    <div class="bar_in" style="width:70%"></div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
