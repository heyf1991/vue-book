<template>
  <div class="detail">
    <MHeader :back="true">详情</MHeader>
    <form class="p-3">
      <div class="form-group">
        <label for="email">书名称：</label>
        <input class="form-control" v-model="book.bookName">
      </div>
      <div class="form-group">
        <label for="pwd">书信息：</label>
        <input class="form-control"  v-model="book.bookInfo">
      </div>
      <div class="form-group">
        <label for="pwd">书价格：</label>
        <input class="form-control" v-model.number="book.bookPrice">
      </div>
      <button type="button" class="btn btn-primary" @click="sure">确认修改</button>
    </form>
  </div>
</template>
<script>
import MHeader from '@/components/MHeader.vue'
import {findOneBooks,updateOneBooks} from '@/api'
export default {
  data() {
    return {
      book:{}
    }
  },
  components: {
    MHeader
  },
  created() {
    this.getOneBook()
  },
  watch: {
    $route(){
      this.getOneBook()
    }
  },
  computed: {
    bid(){
      return this.$route.params.bid
    }
  },
  methods: {
    async getOneBook(){
      this.book = await findOneBooks(this.bid)
      Object.keys(this.book).length>0?void 0:this.$router.push('/list')
    },
    async sure(){
      await updateOneBooks(this.bid,this.book)
      this.$router.push('/list')
    }
  }
}
</script>
<style scoped>
  .detail{
    position: absolute;
    top: 40px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    background: #fff;
  }
</style>
