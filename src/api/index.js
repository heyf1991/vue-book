import axios from "axios";
// 设置默认的发送axios的基本路径
axios.defaults.baseURL = "http://localhost:3000";

//在这里写一个拦截器，增加默认的请求路径
axios.interceptors.response.use(res => {
  return res.data //在这里统一拦截结果
});

// 这里有n个接口，写一个导一个出去
//1. 获取轮播图数据 axios返回的是一个promise实例
export let getSliders = ()=>{
  return axios.get("/sliders");
}
//2. 获取热门图书信息
export let getHot = ()=>{
  return axios.get("/hot");
}
//3. 获取所有图书信息
export let getBooks = ()=>{
  return axios.get("/book");
}

//4. 删除某本图书
export let removeBooks = (id)=>{
  return axios.delete(`/book?id=${id}`);
}

//5. 查询某本图书
export let findOneBooks = (id)=>{
  return axios.get(`/book?id=${id}`);
}

//6. 更新某本图书
export let updateOneBooks = (id,data)=>{
  return axios.put(`/book?id=${id}`,data);
}

//6. 添加图书
export let addBooks = (data)=>{
  return axios.post(`/book`,data);
}

/*
* 首页给一个全部加载完毕的效果
*/
export let getAll = ()=>{
  return axios.all([getSliders(),getHot()]);
}

// 7. 分页查询
export let pagination = (offset)=>{
  return axios.get(`/page?offset=${offset}`);
}

//8. 添加到购物车
export let toCart = (data)=>{
  return axios.post(`/cart`,data);
}

//8. 展示购物车所有图书信息
export let getCart = ()=>{
  return axios.get("/cart");
}