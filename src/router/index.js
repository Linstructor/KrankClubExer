import Vue from 'vue';
import Vuetify from 'vuetify';
import Router from 'vue-router';
import krankclub from '@/components/KrankClub';

Vue.use(Router);
Vue.use(Vuetify);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'KrankClub mockup',
      component: krankclub,
    },
  ],
});
