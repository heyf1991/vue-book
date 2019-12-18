<template>
  <section>
    <MHeader :back="true">列表</MHeader>
    <div class="content" @scroll="loadMore" ref="scroll">
      <div class="booksList">
        <ul>
          <transition-group name="fadeIn">
            <router-link v-for="book in books" :key="book.bookId" tag="li" :to="{name:'detail',params:{bid:book.bookId}}">
              <img v-lazy="book.bookCover"/>
              <div class="text">
                <h3><span>{{book.bookId}}. </span>{{book.bookName}}</h3>
                <p>{{book.bookInfo}}</p>
                <b class="text-danger">￥{{book.bookPrice}}</b>
                <button class="btn btn-warning" @click.stop="deleted(book.bookId)">删除</button>
              </div>
            </router-link>
          </transition-group>
        </ul>
        <div class="p-3 text-center">
          <p v-if="!hasMore" class="small text-muted">~ 没有更多 ~</p>
          <!-- <button v-else type="button" class="btn btn-primary" @click="getMore">加载更多</button> -->
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import MHeader from '@/components/MHeader.vue'
import {pagination,removeBooks} from '@/api'
export default {
  data() {
    return {
      books:[],
      offset:0,
      hasMore:true,
      loading:true
    }
  },
  components: {
    MHeader
  },
  mounted() {
    /* let scroll = this.$refs.scroll
    let top  = scroll.offsetTop
    let distance = 0
    scroll.addEventListener('touchstart',(ev)=>{
      let start = ev.touches[0].pageY
      let move = (e)=>{
        let current = e.touches[0].pageY
        distance = current-start //拉动的距离
        if(distance>0 && scroll.scrollTop===0){ //从上往下拉
          //distance = distance>50?50:distance
          distance = 50
          scroll.style.top = distance+40+'px'
        }else{ // 往上移，不在考虑范围内，所以移除事件
          scroll.style.top = 40+'px'
          scroll.removeEventListener('touchmove',move)
          scroll.removeEventListener('touchend',end)
        }
      }
      let end = (e)=>{
        clearInterval(this.timer)
        console.log('end 数据',distance);
        
        let mydistance = distance>50?50:distance
        this.timer = setInterval(() => {
          if(mydistance<0||mydistance==0){
            clearInterval(this.timer)
            mydistance = 0
            return console.log('获取数据');
          }
          mydistance-=1;
          scroll.style.top = 40+mydistance+'px'
        }, 1);
      }
      scroll.addEventListener('touchmove',move)
      scroll.addEventListener('touchmove',end)
    }) */
  },
  created() {
    // 初始化获取books数据
    this.getBook()
  },
  computed: {},
  methods: {
    async getBook(){
      this.loading = true
      let {hasMore,books} = await pagination(this.offset)
      //this.books = this.books.concat(books)
      this.books = [...this.books,...books]
      this.offset = this.books.length
      this.hasMore = hasMore
      this.loading = false
    },
    async deleted(id){
      await removeBooks(id)
      this.getBook()
    },
    getMore(){
      if(this.hasMore&&!this.loading) this.getBook()
    },
    loadMore(){
      clearTimeout(this.timer) //防抖
      this.timer = setTimeout(() => {
        let {scrollTop,clientHeight,scrollHeight} = this.$refs.scroll //居然有，居然可以结构出来
        if(scrollTop+clientHeight+10>scrollHeight){
          this.getMore()
        }
      }, 50);
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
