<!-- The ref attr used to find the swiper instance -->
<template>
  <swiper :options="swiperOption" ref="mySwiper" >
    <!-- slides -->
    <swiper-slide v-for="(item,index) in sliders" :key="index">
      <img :src="item" class="d-block w-100 h-100" alt="">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    props:{
      sliders:Array
    },
    data() {
      const that = this;
      return {
        swiperOption: {
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
    created() {
    },
    mounted() {
       this.swiper.slideTo(0, 4000, false)
    }
  }
</script>
<style lang="less" scope>
  .swiper-container{height: 182px;}
  .swiper-pagination-bullet{background: #fff;opacity: 0.5;}
  .swiper-pagination-bullet-active{opacity: 1;}
</style>
