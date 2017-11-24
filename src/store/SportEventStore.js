import Vue from 'vue';
import Vuex from 'vuex';
import JsonMockup from './mockup.json';

Vue.use(Vuex);

const json = [];
JsonMockup.data.forEach((mockup) => {
  json.push(mockup);
});

const mutations = {
  CHANGE_FAVORITE: (state, guid) => {
    const mockup = state.mockups.find(mock => mock.guid === guid);
    mockup.data.favorite = !mockup.data.favorite;
  },
};

const stateStore = {
  mockups: json,
};
const getters = {
  mockups: state => state.mockups,
};
const actions = {
  changeFavorite: ({ commit }, guid) => commit('CHANGE_FAVORITE', guid),
};

export default new Vuex.Store({
  state: stateStore,
  mutations,
  getters,
  actions,
});
