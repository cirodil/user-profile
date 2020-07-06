import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   users: [
     {id: 1, name: 'Ivan', email: 'ivanov@mail.ru', password: '12345678', isAuth: false, imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Elon_Musk_Royal_Society.jpg/266px-Elon_Musk_Royal_Society.jpg'}
   ],
   loggedUserEmail: null 
  },
  getters: {
    getUserByEmail: state => email => {
      return state.users.find(user => user.email === email)
    },
    getUserByPassword: state => password => {
      return state.users.find(user => user.password === password)
    }
  },
  mutations: {
    setLoggedUserEmail (state, payload) {
      state.loggedUserEmail = payload
    }
  },
  modules: {
  }
})
