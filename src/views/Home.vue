<template>
  <section>
    <MHeader :back="true">首页</MHeader>
    <div class="content">
      <Swiper :data="sliders"></Swiper>
    </div>
  </section>
</template>
<script>
import MHeader from '@/components/MHeader.vue'
import Swiper from '@/components/Swiper2.vue'
import {getSliders} from '@/api'
export default {
  data() {
    return {
      sliders:[]
    }
  },
  components: {
    MHeader,
    Swiper
  },
  async created() {
    let {data:sliders} = await getSliders()
    this.sliders = sliders
  },
  computed: {},
  methods: {}
}
</script>
