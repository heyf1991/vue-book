<template>
  <section>
    <MHeader :back="true">首页</MHeader>
    <div class="content">
      <Loading v-if="loading"></Loading>
      <template v-else>
        <Swiper :sliders="sliders"></Swiper>
        <div class="hotBooks">
          <ul>
            <li v-for="(hot,index) in hotBooks" :key="index">
              <img :src="hot.bookCover"/>
              <p>{{hot.bookName}}</p>
            </li>
          </ul>
        </div>
      </template>
    </div>
  </section>
</template>
<script>
import MHeader from '@/components/MHeader.vue'
import Swiper from '@/components/Swiper2.vue'
import {getAll} from '@/api'
import Loading from '@/components/Loading'
export default {
  data() {
    return {
      sliders:[],
      hotBooks:[],
      loading:true
    }
  },
  components: {
    MHeader,
    Swiper,
    Loading
  },
  created() {
    this.getData()
  },
  computed: {},
  methods: {
    async getData(){
      let [slider,hot] = await getAll()
      this.sliders = slider
      this.hotBooks = hot
      this.loading = false
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
