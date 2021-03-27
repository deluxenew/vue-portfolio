import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
   state: {
      colorTheme: {
         mainColor: '',
         primaryColor: '',
         secondaryColor: '',
      },
      language: {},
      showSettings: false,

   },
   getters: {
      GET_COLOR_THEME(state) {
         return state.colorTheme;
      },

      GET_LANGUAGE(state) {
         return state.language;
      },

      GET_SHOW_SETTINGS(state) {
         return state.showSettings;
      },
   },
   mutations: {
      COLOR_THEME_MUTATION(state, colorTheme) {
         state.colorTheme = colorTheme;
      },

      LANGUAGE_MUTATION(state, language) {
         state.language = language;
      },

      SHOW_SETTINGS_MUTATION(state, showSettings) {
         state.showSettings = showSettings;
      },
   },
   actions: {
      COLOR_THEME_ACTION({commit}, colorTheme) {
         commit('COLOR_THEME_MUTATION', colorTheme);
      },

      LANGUAGE_ACTION({commit}, language) {
         commit('LANGUAGE_MUTATION', language);
      },

      SHOW_SETTINGS_ACTION({commit}, showSettings) {
         commit('SHOW_SETTINGS_MUTATION', showSettings);
      },
   },
});

export default store;
