import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n';

//bootstrap-vue
import { BootstrapVue, LayoutPlugin, TablePlugin, BModal, VBModal,BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'


Vue.use(BootstrapVue,TablePlugin, LayoutPlugin, BootstrapVueIcons )
Vue.use(VueI18n)
Vue.component('BModal', BModal)
Vue.directive('b-modal', VBModal)
Vue.config.productionTip = false



const messages = {
  English: {
      tableTitle: 'Transactions',
      searchText : 'Type your search here',
      eventText : 'Events',
      modalTitle : 'Transaction ID',
      terms : 'Terms and Conditions',
      privacy : 'Privacy Policy',
      cookies : 'Cookies',
      disclaimer : 'Disclaimer'
  },
  Nederland: {
    tableTitle: 'Transacties',
    searchText : 'Typ hier uw zoekopdracht',
    eventText : 'Evenementen',
    modalTitle : 'Transactie ID',
    terms : 'Voorwaarden',
    privacy : 'Datenschutz-Bestimmungen',
    cookies : 'Cookies',
    disclaimer : 'Disclaimer'
  },
  Deutschland: {
    tableTitle: 'Transaktionen',
    searchText : 'Geben Sie hier Ihre Suche ein',
    eventText : 'Veranstaltungen',
    modalTitle : 'Transaktions ID',
    terms : 'Geschäftsbedingungen',
    privacy : 'Privatsphäre',
    cookies : 'Cookies',
    disclaimer : 'Disclaimer'
  }
};
const i18n = new VueI18n({
  locale: 'English',
  messages
});



new Vue({
  router,
  store,
  render: h => h(App),
  i18n
}).$mount('#app')
