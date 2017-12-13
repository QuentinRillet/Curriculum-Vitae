<template>
  <footer class="page-footer teal lighten-3">
    <div class="">
      <div class="row">
        <div class="col l4 s12">
          <h5 class="white-text">{{ $t('foot.connexion') }}</h5>
          <ul>
            <li class="grey-text text-lighten-3">
              <i class="fa fa-phone"></i> {{ $t('global.phone') }}: <a href="tel:+33619727002">+33 6 19 72 70 02</a>
            </li>
            <li class="grey-text text-lighten-3">
              <i class="fa fa-envelope"></i> {{ $t('global.email') }}: <a href="mailto:quentin.rillet@gmail.com" target="_blank">
              quentin.rillet@gmail.com</a>
            </li>
            <li class="grey-text text-lighten-3">
              <i class="fa fa-twitter"></i> Twitter: <a href="https://twitter.com/RilletQuentin" target="_blank">
              https://twitter.com/RilletQuentin</a>
            </li>
            <li class="grey-text text-lighten-3">
              <i class="fa fa-linkedin"></i> Linked In:<a href="https://www.linkedin.com/in/quentinrillet/"
                                                          target="_blank"> https://www.linkedin.com/in/quentinrillet</a>
            </li>
            <li class="grey-text text-lighten-3">
              <i class="fa fa-viadeo"></i> Viadeo:<a href="http://www.viadeo.com/p/002ia26u8w0wbx8" target="_blank">
              http://www.viadeo.com/p/002ia26u8w0wbx8</a>
            </li>
            <li class="grey-text text-lighten-3">
              <i class="fa fa-github-alt"></i> GitHub: <a href="https://github.com/QuentinRillet" target="_blank">
              https://github.com/QuentinRillet</a>
            </li>
          </ul>
        </div>
        <div class="col l4 s12">
          <h5 class="white-text">{{ $t('foot.developWith') }}</h5>
          <p>
          <ul class="collection with-header">
            <li class="collection-item">
              <div>VueJs <a href="https://vuejs.org/" class="secondary-content" target="_blank"><i
                class="material-icons">send</i></a></div>
            </li>
            <li class="collection-item">
              <div>Materialize CSS <a href="http://materializecss.com/" class="secondary-content" target="_blank"><i
                class="material-icons">send</i></a></div>
            </li>
            <li class="collection-item">
              <div>Symfony 3 <a href="http://symfony.com/" class="secondary-content" target="_blank"><i
                class="material-icons">send</i></a></div>
            </li>
          </ul>
          </p>
        </div>
        <div class="col l4 s12">
          <h5 class="white-text">{{ $t('foot.availableCode') }}</h5>
          <p>
          <ul class="collection with-header">
            <li class="collection-item">
              <div>{{ $t('foot.git_deposit') }} - {{ $t('global.front_end') }} <a href="https://github.com/QuentinRillet/Curriculum-Vitae"
                                            class="secondary-content" target="_blank"><i class="material-icons">send</i></a>
              </div>
            </li>
            <li class="collection-item">
              <div>{{ $t('foot.git_deposit') }} - {{ $t('global.back_end') }} <a href="https://github.com/QuentinRillet/Curriculum-Vitae-Back"
                                           class="secondary-content" target="_blank"><i class="material-icons">send</i></a>
              </div>
            </li>
          </ul>
          </p>

          <p><h5 class="white-text">{{ $t('foot.share') }}</h5>
            <button @click.prevent="linkedin()"class="waves-effect waves-light btn">
              Linked<i class="fa fa-linkedin"></i>
            </button>
            <button @click.prevent="twitter()" class="waves-effect waves-light btn">
              <i class="fa fa-twitter"></i> twitter
            </button>
          </p>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
        © 2017 Copyright - Rillet Quentin
        <a class="grey-text text-lighten-4 right" href="https://quentinrillet.fr">quentinrillet.fr</a>
        <a class="grey-text text-lighten-4 left fa fa-lock" href="https://quentinrillet.fr/admin"> Administration</a>
      </div>
    </div>
  </footer>
</template>

<script>
let popupCenter = function(url, title, width, height) {
  let popupWidth = width || 640;
  let popupHeight = height || 320;
  let windowLeft = window.screenLeft || window.screenX;
  let windowTop = window.screenTop || window.screenY;
  let windowWidth = window.innerWidth || document.documentElement.clientWidth;
  let windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  let popupLeft = windowLeft + windowWidth / 2 - popupWidth / 2;
  let popupTop = windowTop + windowHeight / 2 - popupHeight / 2;
  let popup = window.open(
    url,
    title,
    "scrollbars=yes, width=" +
      popupWidth +
      ", height=" +
      popupHeight +
      ", top=" +
      popupTop +
      ", left=" +
      popupLeft
  );
  popup.focus();
  return true;
};
export default {
  methods: {
    twitter() {
      let url = "https://quentinrillet.fr";
      let shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        document.title
      )}&via=RilletQuentin&url=${encodeURIComponent(url)}`;
      popupCenter(shareUrl, "Partager sur Twitter");
    },
    linkedin() {
      let url = "https://quentinrillet.fr";
      let shareUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
        url
      )}`;
      popupCenter(shareUrl, "Partager sur Linkedin");
    }
  }
};
</script>

<style >
.page-footer {
  color: #2c3e50;
}
</style>

