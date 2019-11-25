<!-- The ref attr used to find the swiper instance -->
<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide>
      <img src="@/assets/images/5.jpg" class="d-block w-100" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="@/assets/images/3.jpg" class="d-block w-100" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="@/assets/images/4.jpg" class="d-block w-100" alt="">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    data() {
      const that = this;
      return {
        swiperOption: {
          loop: true,
          autoplay: {
            delay: 4000,
            stopOnLastSlide: false
          },
          speed: 800,
          on: {
            slideChangeTransitionStart: function() {
              that.imgIndex = this.realIndex + 1; 
            },
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
            type: "bullets"
          }
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      this.swiper.slideTo(1, 4000, true)
    }
  }
</script>
<style lang="less" scope>
  .swiper-container{height: 182px;}
  .swiper-pagination-bullet{background: #fff;opacity: 0.5;}
  .swiper-pagination-bullet-active{opacity: 1;}
</style>
