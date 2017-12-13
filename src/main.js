// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuelidate from 'vuelidate'
import axios from 'axios'
import ScrollReveal from 'scrollreveal'
import VueI18n from 'vue-i18n'
import 'materialize-css/dist/css/materialize.min.css'
/* eslint-disable */
import 'materialize-css/dist/js/materialize.min.js'
import fr from './locales/fr'
import en from './locales/en'

let $ = window.jQuery = require('jquery')
require('font-awesome/css/font-awesome.css')
require('babylonjs')
Vue.use(VueI18n)
Vue.use(Vuelidate)

axios.defaults.baseURL = 'https://quentinrillet.fr/api'


let messages = {
    fr,
    en
}

const i18n = new VueI18n({
    locale: 'fr', // set locale
    messages, // set locale messages
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    i18n,
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
})

/* configuration reveal plugin */
window.sr = ScrollReveal()
let baseDuration = 900
window.sr.reveal('.reveal', {
    duration: baseDuration
})
window.sr.reveal('.reveal-1', {
    duration: baseDuration + 300
})
window.sr.reveal('.reveal-2', {
    duration: baseDuration + 600
})
window.sr.reveal('.reveal-3', {
    duration: baseDuration + 900
})

$('.scrollspy').scrollSpy({
    scrollOffset: 25
})
$('.button-collapse').sideNav({
    closeOnClick: true,
    draggable: true
})

$('.tooltipped').tooltip({
    delay: 50
})
