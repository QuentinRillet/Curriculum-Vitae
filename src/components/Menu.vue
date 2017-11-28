<template>
    <ul :id="pid" :class="pclass">
        <li><a href="#about">{{ $t('menu.about') }}</a></li>
        <li><a href="#works">{{ $t('menu.works') }}</a></li>
        <li><a href="#education">{{ $t('menu.education') }}</a></li>
        <li><a href="#skills">{{ $t('menu.skills') }}</a></li>
        <li><a href="#interests">{{ $t('menu.interests') }}</a></li>
        <li><a href="#contact">{{ $t('menu.contact') }}</a></li>
        <li></li>
        <li><a @click="switchLang('fr')"><img src="../assets/fr.png" class="responsive-img"></a>  <a @click="switchLang('en')"><img src="../assets/gb.png" class="responsive-img"></a></li>
    </ul>
</template>

<script>
  export default {
    props: ["pid", "pclass"],
    methods: {
      switchLang(lang) {
        this.$i18n.locale = lang;
      }
    }
  };
</script>
