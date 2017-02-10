<template>
    <!--
    HEADER
    -->
    <div class="navbar">
        <nav id="navigate-bar">
            <div class="nav-wrapper blue">
                <ul class="left hide-on-med-and-down">
                    <li><a href="http://quentinrillet.fr">Rillet Quentin</a></li>
                </ul>
                <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
                <a href="#" class="brand-logo center">Curriculum Vitae</a>
                <ul class="right hide-on-med-and-down">
                    <li><a href="mailto:quentin.rillet@gmail.com">quentin.rillet@gmail.com</a></li>
                    <li><a href="tel:+33619727002">06 19 72 70 02</a></li>
                </ul>
                <menu-nav pid="nav-mobile" pclass="side-nav"></menu-nav>
            </div>
        </nav>
    </div>
</template>

<script>
import MenuNav from './Menu'

export default{
  components: {
    MenuNav
  },
  data () {
    return { }
  }
}

</script>
