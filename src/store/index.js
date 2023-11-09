import { createStore } from 'vuex'

export default createStore({
  state: {
    movies : []
  },
  getters: {
  },
  mutations: {
    getData : (state, data) => {
      state.movies = data
      console.log(state.movies)
    }
  },
  actions: {
     getMovie : async (context, endpoint) => {
        const chave = 'aaee40741a8339ae752e5fefd0c915b9'
        const base = 'https://api.themoviedb.org/3'
        const req = await fetch(`${base}${endpoint}${chave}`)
        const res = await req.json()

        context.commit('getData', res.results)
     }
  },
  modules: {
  }
})
