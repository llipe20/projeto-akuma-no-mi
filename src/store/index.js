import { createStore } from 'vuex'

export default createStore({
  state: {
    trending : [],
    alta : [],
    favorite : [],
    login : true,
    user : {}
  },
  getters: {
    
  },
  mutations: {

    UpdateLogin : (state, data) => {
      state.login = data
    },

    getTrending : (state, data) => {
      state.trending = data
    },

    getAlta : (state, data) => {
      state.alta = data
    },

    addFavorite : (state, data) => {
      state.favorite.push(data)
    },

    removeFavorite: (state, id) => {
      const obj = state.favorite.filter(movie => movie.id == id)
      obj.isFavorite = false
      state.favorite = state.favorite.filter(movie => movie.id != id)
    },

    GetUser : (state, data) => {
      state.user = data
    }
  },
  actions: {
     getMovie : async ({ commit }, { endpoint, mutation }) => {
        const chave = 'aaee40741a8339ae752e5fefd0c915b9'
        const base = 'https://api.themoviedb.org/3'
        const req = await fetch(`${base}${endpoint}${chave}`)
        const res = await req.json()

        commit(`${mutation}`, res.results)
     },

     GetMutation : ({commit}, {mutation, data}) => {
      commit(`${mutation}`, data)
    }
  },
  modules: {
  }
})
