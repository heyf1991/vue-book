let http = require('http') //引入node中的http模块
let fs = require('fs') // 用于文件读写
let url = require('url')

// 轮播图数据
let sliders = require('./sliders')
// 读文件
function read(cb){
  fs.readFile('./mock/book.json','utf8',function(err,data){
    if(err || data.length == 0){ //读文件失败
      cb([])
    }else{ // 读文件成功
      cb(JSON.parse(data))
    }
  })
}
//写入文件
function write(data,cb){
  fs.writeFile("./mock/book.json", JSON.stringify(data), cb);
}

http.createServer((req,res)=>{
  /* 跨域设置 */
  res.setHeader("Access-Control-Allow-Origin", "*"); // 设置可访问的源
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Content-Type", "application/json;charset=utf8"); //设置编码格式
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, DELETE"
  );
  //if(req.method == "OPTIONS") return res.end()

  let {pathname,query} = url.parse(req.url,true) //加true，把query转化成对象
  if(pathname === '/sliders'){
    // 把文档中的数据解释到3000这个服务器上面
    return res.end(JSON.stringify(sliders))
  }
  if(pathname === '/hot'){
    read(function (books){
      let hot = books.reverse().slice(0,6)
      setTimeout(() => {
        res.end(JSON.stringify(hot));
      }, 1000);
    })
    return
  }
  if (pathname === '/page') { //分页的 可加载更多
    let offset = parseInt(query.offset) || 0
    read(function(books){
      
    })
    return
  }
  if(pathname === '/book'){
    let id = query.id; 
    switch (req.method) {
      case "GET":
        if (typeof id !== "undefined") {
          //有id就是获取某本图书
          read(function(books) {
            let book = books.find(item => String(item.bookId) === String(id));
            if (!book) book = {}; //如果啥都没有就是{}
            res.end(JSON.stringify(book));
          });
        } else {
          //没有就是获取全部图书
          read(function(books) {
            res.end(JSON.stringify(books.reverse())); //这些都是服务端
          });
        }
        break;
      case "POST":
        let str = ''
        req.on('data',chunk=>{ //处理data的时候
          str+=chunk //chunk就是我们传进来的数据data
        })
        req.on("end",()=>{ // 完成处理
          let book = JSON.parse(str)
          read(function(books){
            book.bookId = books.length?books[books.length-1].bookId+1:1
            books.push(book);
            write(books,function(){
              res.end(JSON.stringify(book));
            })
          })
        });
        break;
      case "PUT":
        if(id){ //获取了当前要修改的id 防止为空
          let str = '';
          id = parseInt(id);
          req.on('data',chunk=>{
            str += chunk;
          })
          req.on('end',()=>{
            let book = JSON.parse(str) //book要改成什么样子
            read(function(books){
              books = books.map(item=>{
                if(item.bookId===id){
                  return book
                }
                return item;
              })
              write(books, function() {
                res.end(JSON.stringify(book));
              });
            })
          })
        }
        break;
      case "OPTIONS":
        res.end(JSON.stringify({})); //删除操作返回一个空对象
        break;
      case "DELETE":
        read(function(books) {
          let book = books.filter(item => item.bookId !== id);
          write(book, function() {
            res.end(JSON.stringify({})); //删除操作返回一个空对象
          });
        });
        break;
      default:
      // console.log("进入默认");
    }
    return
  }
}).listen(3000)

/***
 * server是一个服务，这个服务可以给前端页面提供数据，那些数据分在各个js中，那些js用module.exports跑出来就可以拿到，好神奇！
 */