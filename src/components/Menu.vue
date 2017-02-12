<template>
    <ul :id="pid" :class="pclass">
        <li><a href="#about">À mon sujet</a></li>
        <li><a href="#works">Expériences</a></li>
        <li><a href="#education">Écoles</a></li>
        <li><a href="#skills">Compétences</a></li>
        <li><a href="#interests">Loisirs</a></li>
        <li><a href="#contact">Contactez-moi</a></li>
    </ul>
</template>

<script>
  export default{
    props: [
      'pid', 'pclass'
    ]
  }
</script>
