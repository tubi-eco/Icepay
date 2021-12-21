import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
        items: [],
        infoModal: {
          id: 'info-modal',
          title: '',
          content: ''
        },
  },
  actions,
  getters,
  mutations,
})
