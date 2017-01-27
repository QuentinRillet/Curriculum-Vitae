<template>
  <div id="app">
      <header></header>
      <about></about>
      <works></works>
      <education></education>
      <skills></skills>
      <interests></interests>
      <contact></contact>
  </div>
</template>

<script>
import Header from './components/Header'
import About from './components/About'
import Works from './components/Works'
import Education from './components/Education'
import Skills from './components/Skills'
import Interests from './components/Interests'
import Contact from './components/Contact'

export default {
  name: 'app',
  components: {
    Header,
    About,
    Works,
    Education,
    Skills,
    Interests,
    Contact
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: #e3e3e3
}
</style>
