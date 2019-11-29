<template>
  <section>
    <MHeader :back="true">首页</MHeader>
    <div class="content">
      <Swiper :sliders="sliders"></Swiper>
      <div class="hotBooks">
        <ul>
          <li v-for="(hot,index) in hotBooks" :key="index">
            <img :src="hot.bookCover"/>
            <p>{{hot.bookName}}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
import MHeader from '@/components/MHeader.vue'
import Swiper from '@/components/Swiper2.vue'
import {getSliders,getHot} from '@/api'
export default {
  data() {
    return {
      sliders:[],
      hotBooks:[]
    }
  },
  components: {
    MHeader,
    Swiper
  },
  created() {
    this.getSlider()
    this.getHots()
  },
  computed: {},
  methods: {
    async getSlider(){
      this.sliders = await getSliders()
    },
    async getHots(){
      this.hotBooks = await getHot()
    }
  }
}
</script>
<style lang="less" scoped>
  .hotBooks{
    padding-top: 10px;
    ul{
      display: flex;
      flex-wrap: wrap;
      text-align: center;
      li{
        width: 50%;
        float: left;
        img{
          width: 80%;
          margin: 0 auto;
        }
        p{
          text-align: center;
          padding: 0 15px;
        }
      }
    }
  }
</style>
