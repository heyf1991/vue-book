<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="@/assets/images/5.jpg" class="d-block w-100" alt="">
      </div>
      <div class="carousel-item">
        <img src="@/assets/images/3.jpg" class="d-block w-100" alt="">
      </div>
      <div class="carousel-item">
        <img src="@/assets/images/4.jpg" class="d-block w-100" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  components: {},
  mounted() {
    $('.carousel').carousel({
      interval: 4000
    })
  },
  created() {
  },
  computed: {},
  methods: {}
}
</script>
<style lang="less" scoped>
  .carousel{
    height: 182px;
    overflow: hidden;
  }
</style>
