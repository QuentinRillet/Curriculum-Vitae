<template>
  <div id="app">
      <navigate></navigate>
      <div class="container">
          <div class="row">
              <div class="col s12 m10 l11">
                  <about></about>
                  <div class="divider"></div>
                  <works></works>
                  <div class="divider"></div>
                  <education></education>
                  <div class="divider"></div>
                  <skills></skills>
                  <div class="divider"></div>
                  <interests></interests>
                  <div class="divider"></div>
                  <contact></contact>
              </div>
              <div class="col hide-on-small-only m2 l1 ">
                  <div class="row">
                      <div class="col s12">
                          <div class="toc-wrapper pinned" style="top: 70px">
                              <menu-nav pid="nav-mobile-side" pclass="section table-of-contents left-align" ></menu-nav>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <foot></foot>
  </div>
</template>

<script type="text/javascript" language="Javascript">
import Navigate from './components/Navigate'
import MenuNav from './components/Menu'
import About from './components/About'
import Works from './components/Works'
import Education from './components/Education'
import Skills from './components/Skills'
import Interests from './components/Interests'
import Contact from './components/Contact'
import Foot from './components/Foot'

export default {
  name: 'app',
  components: {
    Navigate,
    MenuNav,
    About,
    Works,
    Education,
    Skills,
    Interests,
    Contact,
    Foot
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
  background: #e3e3e3
}
</style>
