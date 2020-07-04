import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   users: [
     {name: 'Ivan', email: 'ivanov@mail.ru', password: '12345678', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Elon_Musk_Royal_Society.jpg/266px-Elon_Musk_Royal_Society.jpg'}
   ] 
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
