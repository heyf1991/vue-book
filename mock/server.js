let http = require('http') //引入node中的http模块
let fa = require('fs') // 用于文件读写
let url = require('url')

// 轮播图数据
let sliders = require('./sliders')
http.createServer((req,res)=>{
  /* 跨域设置 */
  res.setHeader("Access-Control-Allow-Origin", "*"); // 设置可访问的源
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Content-Type", "application/json;charset=utf8"); //设置编码格式
  //if(req.method == "OPTIONS") return res.end()

  let {pathname,query} = url.parse(req.url)
  if(pathname === '/sliders'){
    // 把文档中的数据解释到3000这个服务器上面
    res.end(JSON.stringify(sliders))
  }
}).listen(3000)

/***
 * server是一个服务，这个服务可以给前端页面提供数据，那些数据分在各个js中，那些js用module.exports跑出来就可以拿到，好神奇！
 */