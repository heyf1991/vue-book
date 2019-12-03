<template>
  <div>
    <MHeader :back="true">添加</MHeader>
    <form class="content p-3">
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
      <div class="form-group">
        <label for="pwd">书封面：</label>
        <input class="form-control" v-model="book.bookCover">
      </div>
      <button type="button" class="btn btn-primary" @click="addBook">添加</button>
    </form>
  </div>
</template>
<script>
import MHeader from '@/components/MHeader.vue'
import {addBooks} from '@/api'
export default {
  data() {
    return {
      book:{}
    }
  },
  components: {
    MHeader
  },
  created() {},
  computed: {},
  methods: {
    async addBook(){
      await addBooks(this.book)
      this.$router.push('/list')
    }
  }
}
</script>
