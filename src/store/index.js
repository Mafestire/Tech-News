import { createStore } from 'vuex'
import axios from "axios";
const News = "http://localhost:6070/";

export default createStore({
  state: {
    message: null,
    news: null,
    info: null
  },
  getters: {
  },
  mutations: {
    setMessage(state, value){
      state.message = value;
    },
    setNews(state, news){
      state.news = news
    },
    getNews(state, news){
      state.news = news
    }
  },
  actions: {
    async fetchNews(context){
      console.log('fight');
      const res = await axios.get(`${News}`);
      console.log(res.data.articles);
      const response = await res.data.articles;
      if(response){
        context.commit("setNews", response);
        console.log('hi');
      }else{
        context.commit("setMessage", "404")
      }
    },
  },
  modules: {
  }
})
