import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    usuarios: [],
  },
  mutations: {
    llenarUsuarios(state, usuariosActions) {
      state.usuarios = usuariosActions;
    },
  },
  actions: {
    async obtenerUsuarios({ commit }) {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      console.log(data);
      commit('llenarUsuarios', data);
    },
  },
  modules: {
  },
});
