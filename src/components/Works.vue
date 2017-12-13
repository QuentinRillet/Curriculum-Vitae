<template>
    <!--
    WORKS
    -->
    <div>
        <section id="works" class="section scrollspy">
                <div class="row " style="padding: 40px">
                    <h2><i class="fa fa-microchip"></i> {{ $t('experiences.name') }}</h2>
                    <!-- Experience professionnelle keyveo -->
                    <div class="row z-depth-5 blue-grey lighten-5" style="padding-top: 40px">
                        <div class="col s12">
                            <h4><i class="fa fa-handshake-o"></i> {{ $t('experiences.professional.name') }}</h4>
                            <p>{{ $t('experiences.professional.keyveo.name') }}</p>
                            <a href="http://keyveo.com/" target="_blank">
                                <img class="responsive-img" src="../assets/logo-keyveo.jpg" style="max-width:20%">
                            </a>
                            <div class="row">
                                <div class="col s12 m6 l4">
                                    <div class="card hoverable reveal">
                                        <div class="card-content white-text blue-grey">
                                            <span class="card-title">{{ $t('experiences.professional.keyveo.renault.name') }}</span>
                                        </div>
                                        <div class="card-content">
                                            <img class="responsive-img" src="../assets/renault-logo.png">
                                            <p>{{ $t('experiences.professional.keyveo.renault.content1') }}</p>
                                            <p>{{ $t('experiences.professional.keyveo.renault.content2') }}</p>
                                        </div>

                                        <!-- <a href="#" target="_blank">
                                            <div class="card-action">
                                                {{ $t('experiences.professional.keyveo.name') }}
                                            </div>
                                        </a> -->

                                    </div>
                                </div>
                                <div class="col s12 m6 l4">
                                    <div class="card hoverable reveal-1">
                                        <div class="card-content white-text blue-grey">
                                            <span class="card-title">{{ $t('experiences.professional.keyveo.EDF.name') }}</span>
                                        </div>
                                        <div class="card-content">
                                            <img class="responsive-img" src="../assets/edf-logo.png">
                                            <p>{{ $t('experiences.professional.keyveo.EDF.content') }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col s12 m6 l4">
                                    <div class="card hoverable reveal">
                                        <div class="card-content white-text blue-grey">
                                            <span class="card-title">{{ $t('experiences.professional.keyveo.microsoft.name') }}</span>
                                        </div>
                                        <div class="card-content" style="height: 100%, width: 100%">
                                            <canvas id="render" style="height: 100%, width: 100%"></canvas>
                                            <button @click="fullScreen" class="waves-effect waves-light btn">Full Screen</button>
                                            <p>{{ $t('experiences.professional.keyveo.microsoft.content') }}</p>
                                        </div>

                                        <a href="https://www.babylonjs.com/" target="_blank">
                                            <div class="card-action">
                                                BabylonJs
                                            </div>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        
                            <p>{{ $t('experiences.professional.ies.projects') }}</p>
                            <a href="http://i-e-s.fr/" target="_blank">
                                <img class="responsive-img" src="../assets/logo-ies.png" style="max-width:20%">
                            </a>
                            <div class="row">
                                <div class="col s12 m6 l4">
                                    <div class="card hoverable reveal">
                                        <div class="card-content white-text blue-grey">
                                            <span class="card-title">{{ $t('experiences.professional.ies.azteka.name') }}</span>
                                        </div>
                                        <div class="card-content">
                                            <img class="responsive-img" src="../assets/logo-azteka.png">
                                            <p>{{ $t('experiences.professional.ies.azteka.content') }}</p>
                                        </div>

                                        <a href="http://azteka.management/" target="_blank">
                                            <div class="card-action">
                                                {{ $t('experiences.professional.ies.azteka.website') }}
                                            </div>
                                        </a>

                                    </div>
                                </div>
                                <div class="col s12 m6 l4">
                                    <div class="card hoverable reveal-1">
                                        <div class="card-content white-text blue-grey">
                                            <span class="card-title">{{ $t('experiences.professional.ies.crm.name') }}</span>
                                        </div>
                                        <div class="card-content">
                                            <img class="responsive-img" src="../assets/logo-crm.png">
                                            <p>{{ $t('experiences.professional.ies.crm.content') }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col s12 m6 l4">
                                    <div class="card hoverable reveal-2">
                                        <div class="card-content white-text  blue-grey">
                                            <span class="card-title">{{ $t('experiences.professional.ies.bdes.name') }}</span>
                                        </div>
                                        <div class="card-content">
                                            <img class="responsive-img" src="../assets/bdes.jpg" style="max-width: 40%">
                                            <p>{{ $t('experiences.professional.ies.bdes.content') }}</p>
                                            <p><i>{{ $t('experiences.professional.ies.bdes.info') }}</i></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col s12">
                                    <a href="https://quentinrillet.fr/uploads/documents/recommendation-Quentin-Rillet.pdf" target="_blank"  type="pdf" class="btn btn-success waves-effect">{{ $t('experiences.professional.recommandation') }} <i class="fa fa-file-pdf-o"></i></a>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col s12">
                                    <h5>{{ $t('experiences.professional.web') }} - <i>{{ $t('experiences.professional.info') }}</i></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Experience scolaire -->
                    <div class="row z-depth-5 blue-grey lighten-5" style="padding-top: 40px">
                        <h4><i class="fa fa-laptop"></i> {{ $t('experiences.school.name') }}</h4>
                        <div class="col s12 m6">
                            <div class="card hoverable reveal">
                                <div class="card-content white-text blue-grey">
                                    <span class="card-title">{{ $t('experiences.school.force4.name') }}</span>
                                </div>
                                <div class="card-content">
                                    <p>{{ $t('experiences.school.force4.content') }}</p>
                                    <p>-</p>
                                    <p><i>{{ $t('experiences.school.force4.info') }}</i></p>
                                </div>
                                <div class="card-action">
                                    <p>{{ $t('global.language') }}: <i><em>{{ $t('experiences.school.force4.language_info') }}</em></i></p>
                                </div>
                            </div>
                        </div>
                        <div class="col s12 m6">
                            <div class="card hoverable reveal-1">
                                <div class="card-content white-text blue-grey">
                                    <span class="card-title">{{ $t('experiences.school.sated.name') }}</span>
                                </div>
                                <div class="card-content">
                                    <img class="responsive-img" src="../assets/Sated.png" style="max-width: 40%">
                                    <p>{{ $t('experiences.school.sated.content') }}</p>
                                    <p>{{ $t('experiences.school.sated.content2') }}</p>
                                    <p>-</p>
                                    <p><i>{{ $t('experiences.school.sated.info') }}</i></p>
                                </div>
                                <div class="card-action">
                                    <p>{{ $t('global.language') }}: <i><em>{{ $t('experiences.school.sated.language_info') }}</em></i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    </div>
</template>

<script>
import { Game } from "../js/Game";
export default {
  mounted() {
    this.game = new Game(document.getElementById("render"));
  },
  data() {
    return {
      game: null,
      showScene: false
    };
  },
  methods: {
    fullScreen() {
      this.showScene = false;
      this.game.fullScreen();
    }
  }
};
</script>

<style>
#render {
  max-width: -moz-available;
  max-width: -webkit-fill-available;
}
</style>

