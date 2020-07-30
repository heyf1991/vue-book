<template>
  <div>
    <MHeader :back="true">购物车</MHeader>
    <div class="content">
      <div class="booksList">
        <ul>
          <li v-for="book in books" :key="book.bookId">
            <img v-lazy="book.bookCover"/>
            <div class="text">
              <h3><span>{{book.bookId}}. </span>{{book.bookName}}</h3>
              <b class="text-danger float-left">{{book.bookPrice*book.count | toFixed(2)}}</b>
              <input type="number" v-model="book.count" class="form-control col-3 float-right"/>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import MHeader from "@/components/MHeader.vue";
import { getCart } from "@/api";
export default {
  data() {
    return {
      books: []
    };
  },
  filters:{
    toFixed(input,param1){
      return '￥'+input.toFixed(param1)
    }

  },
  components: {
    MHeader
  },
  created() {
    this.getMycart()
  },
  computed: {
  },
  methods: {
    async getMycart() {
      this.books = await getCart();
    }
  }
};
</script>
<style lang="less" scoped>
.booksList {
  padding: 0 10px;
  ul {
    li {
      clear: both;
      margin-top: 20px;
      overflow: hidden;
      img {
        display: block;
        float: left;
        width: 15%;
      }
      .text {
        overflow: hidden;
        padding: 0 0 5px 5px;
        h3 {
          font-size: 16px;
          padding-right: 15px;
        }
        p {
          color: #999;
          font-size: 12px;
        }
        button {
          display: block;
        }
      }
    }
  }
}
</style>
