import { createStore } from 'vuex'

export default createStore({
  state: {
    trending : [],
    alta : null
  },
  getters: {
  },
  mutations: {
    getTrending : (state, data) => {
      state.trending = data
    },

    getAlta : (state, data) => {
      state.alta = data
    }
  },
  actions: {
     getMovie : async ({ commit }, { endpoint, mutation }) => {
        const chave = 'aaee40741a8339ae752e5fefd0c915b9'
        const base = 'https://api.themoviedb.org/3'
        const req = await fetch(`${base}${endpoint}${chave}`)
        const res = await req.json()

        commit(`${mutation}`, res.results)
     }
  },
  modules: {
  }
})
