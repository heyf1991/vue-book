import axios from "axios";
// 设置默认的发送axios的基本路径
axios.defaults.baseURL = "http://localhost:3000";

// 这里有n个接口，写一个导一个出去

//1. 获取轮播图数据 axios返回的是一个promise实例
export let getSliders = ()=>{
  return axios.get("/sliders");
}
