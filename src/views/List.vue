<template>
  <section>
    <MHeader :back="true">列表页</MHeader>
    <div class="content">
      <div class="booksList">
        <ul>
          <li v-for="(book,index) in books" :key="index">
            <img :src="book.bookCover"/>
            <div class="text">
              <h3><span>{{book.bookId}}</span>{{book.bookName}}</h3>
              <p>{{book.bookInfo}}</p>
              <b class="text-danger">￥{{book.bookPrice}}</b>
              <button class="btn btn-warning" @click="deleted(book.bookId)">删除</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
import MHeader from '@/components/MHeader.vue'
import {getBooks,removeBooks} from '@/api'
export default {
  data() {
    return {
      books:[]
    }
  },
  components: {
    MHeader
  },
  created() {
    // 初始化获取books数据
    this.getBook()
  },
  computed: {},
  methods: {
    async getBook(){
      this.books = await getBooks()
    },
    async deleted(id){
      await removeBooks(id)
      this.getBook()
    }
  }
}
</script>
<style lang="less" scoped>
  .booksList{
    ul{
      li{
        clear: both;
        margin-top: 20px;
        overflow: hidden;
        img{
          display: block;
          float: left;
          width: 30%;
        }
        .text{
          overflow: hidden;
          padding: 0 0 5px 5px;
          h3{
            font-size: 16px;
            padding-right: 15px;
          }
          p{
            color: #999;
            font-size: 12px;
          }
          button{
            display: block;
          }
        }
      }
    }
  }
</style>
