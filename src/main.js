// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuelidate from 'vuelidate'
import axios from 'axios'
import ScrollReveal from 'scrollreveal'
let $ = window.jQuery = require('jquery')
import 'materialize-css/bin/materialize.css'
import 'materialize-css/bin/materialize'
require('materialize-css/js/velocity.min')
require('materialize-css/js/toasts')

Vue.use(Vuelidate)

axios.defaults.baseURL = 'https://quentinrillet.fr/api'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

/* configuration reveal plugin */
window.sr = ScrollReveal()
let baseDuration = 900
window.sr.reveal('.reveal', { duration: baseDuration })
window.sr.reveal('.reveal-1', { duration: baseDuration + 300 })
window.sr.reveal('.reveal-2', { duration: baseDuration + 600 })
window.sr.reveal('.reveal-3', { duration: baseDuration + 900 })

$('.scrollspy').scrollSpy({
  scrollOffset: 25
})
$('.button-collapse').sideNav({
  closeOnClick: true,
  draggable: true
})
