<template>
    <!--
    EDUCATION
    -->
    <div>
        <section id="education" class="section scrollspy">
                <div class="row">
                    <div class="section-title">
                        <h2><i class="fa fa-graduation-cap"></i> Écoles</h2>
                    </div>

                    <div class="cd-container" id="ed-timeline">
                        <div class="cd-timeline-block reveal" >
                            <div class="cd-timeline-img"></div>
                            <div class="cd-timeline-content col m5 s12 z-depth-1"><h2><a
                                    href="http://miage.mastersticamiens.fr/" target="_blank"
                                    alt="MIAGE Amiens" title="MIAGE Amiens">Master MIAGE - Amiens</a></h2><span>2015 - 2017</span>
                                <p>Diplôme universitaire français de niveau Bac+5, alliant une double compétence en informatique et en gestion, destiné à former des cadres d'entreprise experts en ingénierie et management des systèmes d'information.</p>
                                <p>-</p>
                                <p>Réalisé en alternance chez <a href="http://i-e-s.fr">I.E.S</a></p>
                                <p>-</p>
                                <p>Maitrise<i> Mention : <b>Bien</b></i></p>
                            </div>
                        </div>
                        <div class="cd-timeline-block reveal">
                            <div class="cd-timeline-img"></div>
                            <div class="cd-timeline-content col m5 s12 z-depth-1"><h2><a
                                    href="https://www.u-picardie.fr/catalogue-formations/co/Catalogue_UPJV/co/LP_ResComm_ResGenieInfo.html"
                                                                                         target="_blank"
                                                                                         alt="LP RGI"
                                                                                         title="LP RGI">Licence professionnelle - Amiens</a></h2><span>2014 - 2015</span>
                                <p>Réseaux et Génie Informatique, Développement d'applications de génie informatique dans un contexte de ressources organisées en réseaux.</p>
                                <p>-</p>
                                <p>Réalisé en alternance chez <a href="http://i-e-s.fr">I.E.S</a></p>
                                <p>-</p>
                                <p><i>Mention : <b>Bien</b></i></p>
                            </div>
                        </div>
                        <div class="cd-timeline-block reveal">
                            <div class="cd-timeline-img"></div>
                            <div class="cd-timeline-content col m5 s12 z-depth-1"><h2><a
                                    href="https://uniform.unicaen.fr/catalogue/formation/dut/5267-dut-informatique?s=iut-caen&r=1291042344184"
                                                                                         target="_blank"
                                                                                         alt="DUT Caen"
                                                                                         title="DUT Caen">DUT Informatique - Caen</a></h2><span>2011 - 2015</span>
                                <p>Formation généraliste en informatique visant à concevoir, inventer ou perfectionner des logiciels destinés à des entreprises.</p>
                            </div>
                        </div>
                        <div class="cd-timeline-block reveal">
                            <div class="cd-timeline-img"></div>
                            <div class="cd-timeline-content col m5 s12 z-depth-1"><h2><a
                                    href="http://lycees.ac-rouen.fr/prevert/" target="_blank"
                                    alt="Lycée Polyvalent Jacques Prévert - Pont-Audemer" title="Lycée Polyvalent Jacques Prévert - Pont-Audemer">Lycée Polyvalent Jacques Prévert - Pont-Audemer</a></h2><span>2006 - 2011</span>
                                <p>Baccalaureat scientifique, <i>spécialité : Science de la Vie et de la Terre</i>. </p>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    </div>
</template>

<script>
export default{
  data () {
    return { }
  }
}

</script>

<style>
    /* --------------------------------

Modules - reusable parts of our design

-------------------------------- */
/*.cd-container {*/
/* this class is used to give a max-width to the element it is applied to, and center it horizontally when it reaches that max-width */
/*  width: 90%;*/
/*  max-width: 1170px;*/
/*  margin: 0 auto;*/
/*}*/
/*.cd-container::after {*/
/* clearfix */
/*  content: '';*/
/*  display: table;*/
/*  clear: both;*/
/*}*/
/* --------------------------------

Main components

-------------------------------- */
#cd-timeline {
  position: relative;
}
#cd-timeline::before {
  /* this is the vertical line */
  content: '';
  position: absolute;
  top: 10;
  left: 18px;
  height: 90%;
  width: 3px;
  background: #bdbdbd;
  -moz-box-shadow: inset 0 -100px 100px -30px #e3e3e3;
  -webkit-box-shadow: inset 0 -100px 100px -30px #e3e3e3;
  box-shadow: inset 0 -100px 100px -30px #e3e3e3;
}
@media only screen and (min-width: 600px) {
  #cd-timeline::before {
    left: 50%;
    margin-left: -2px;
    -moz-box-shadow: inset 0 -100px 100px -30px #e3e3e3;
    -webkit-box-shadow: inset 0 -100px 100px -30px #e3e3e3;
    box-shadow: inset 0 -100px 100px -30px #e3e3e3;
  }
}
@media only screen and (max-width: 600px) {
  #cd-timeline::before {
    display: none;
  }
}
.cd-timeline-block {
  position: relative;
  margin: 0px !important;
}
.cd-timeline-block:after {
  content: "";
  display: table;
  clear: both;
}
.cd-timeline-block:first-child {
  margin-top: 0;
}
.cd-timeline-block:last-child {
  margin-bottom: 0;
}
@media only screen and (min-width: 600px) {
  .cd-timeline-block {
    margin: 4em 0;
  }
  .cd-timeline-block:first-child {
    margin-top: 0;
  }
  .cd-timeline-block:last-child {
    margin-bottom: 0;
  }
}
.cd-timeline-img {
  position: absolute;
  top: 0;
  left: 50%;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-left: -8px;
  background-color: #00a9ff;
}

.cd-timeline-img.cd-picture {
  background: #75ce66;
}
.cd-timeline-img.cd-movie {
  background: #c03b44;
}
.cd-timeline-img.cd-location {
  background: #f0ca45;
}
@-webkit-keyframes cd-bounce-1 {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.5);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale(1.2);
  }
  100% {
    -webkit-transform: scale(1);
  }
}
@-moz-keyframes cd-bounce-1 {
  0% {
    opacity: 0;
    -moz-transform: scale(0.5);
  }
  60% {
    opacity: 1;
    -moz-transform: scale(1.2);
  }
  100% {
    -moz-transform: scale(1);
  }
}
@keyframes cd-bounce-1 {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.5);
    -moz-transform: scale(0.5);
    -ms-transform: scale(0.5);
    -o-transform: scale(0.5);
    transform: scale(0.5);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
  }
  100% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
}
.cd-timeline-content {
  position: relative;
  margin-left: 60px;
  background: white;
  border-radius: 0.25em;
  padding: 1em;
}
.cd-timeline-content:after {
  content: "";
  display: table;
  clear: both;
}
.cd-timeline-content h2 {
  color: #303e49;
}
.cd-timeline-content p,
.cd-timeline-content .cd-read-more,
.cd-timeline-content .cd-date {
  font-size: 13px;
  font-size: 0.8125rem;
}
.cd-timeline-content .cd-read-more,
.cd-timeline-content .cd-date {
  display: inline-block;
}
.cd-timeline-content p {
  margin: 1em 0;
  line-height: 1.6;
}
.cd-timeline-content .cd-date {
  float: left;
  padding: .8em 0;
  opacity: .7;
}
.cd-timeline-content::before {
  content: '';
  position: absolute;
  top: 16px;
  right: 100%;
  height: 0;
  width: 0;
  border: 30px solid transparent;
  border-right: 30px solid white;
  border-top: 0px;
}
@media only screen and (min-width: 600px) {
  .cd-timeline-content h2 {
    font-size: 20px;
    font-size: 1.25rem;
  }
  .cd-timeline-content p {
    font-size: 16px;
    font-size: 1rem;
  }
  .cd-timeline-content .cd-read-more,
  .cd-timeline-content .cd-date {
    font-size: 14px;
    font-size: 0.875rem;
  }
}
@media only screen and (min-width: 600px) {
  .cd-timeline-content {
    margin-left: 0;
    padding: 1.6em;
    width: 45%;
  }
  .cd-timeline-content::before {
    top: 0px;
    left: 100%;
    border-color: transparent;
    border-left-color: white;
  }
  .cd-timeline-content .cd-read-more {
    float: left;
  }
  .cd-timeline-content .cd-date {
    position: absolute;
    width: 100%;
    left: 122%;
    top: 6px;
    font-size: 16px;
    font-size: 1rem;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content {
    float: right;
    margin-left: 60px;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content::before {
    top: 0px;
    left: auto;
    right: 100%;
    border-color: transparent;
    border-right-color: white;
  }
  .cssanimations .cd-timeline-content.is-hidden {
    visibility: hidden;
  }
  .cssanimations .cd-timeline-content.bounce-in {
    visibility: visible;
    -webkit-animation: cd-bounce-2 0.6s;
    -moz-animation: cd-bounce-2 0.6s;
    animation: cd-bounce-2 0.6s;
  }
}
@media only screen and (min-width: 600px) {
  /* inverse bounce effect on even content blocks */
  .cssanimations .cd-timeline-block:nth-child(even) .cd-timeline-content.bounce-in {
    -webkit-animation: cd-bounce-2-inverse 0.6s;
    -moz-animation: cd-bounce-2-inverse 0.6s;
    animation: cd-bounce-2-inverse 0.6s;
  }
}
@-webkit-keyframes cd-bounce-2 {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-100px);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateX(20px);
  }
  100% {
    -webkit-transform: translateX(0);
  }
}
@-moz-keyframes cd-bounce-2 {
  0% {
    opacity: 0;
    -moz-transform: translateX(-100px);
  }
  60% {
    opacity: 1;
    -moz-transform: translateX(20px);
  }
  100% {
    -moz-transform: translateX(0);
  }
}
@keyframes cd-bounce-2 {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-100px);
    -moz-transform: translateX(-100px);
    -ms-transform: translateX(-100px);
    -o-transform: translateX(-100px);
    transform: translateX(-100px);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateX(20px);
    -moz-transform: translateX(20px);
    -ms-transform: translateX(20px);
    -o-transform: translateX(20px);
    transform: translateX(20px);
  }
  100% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
@-webkit-keyframes cd-bounce-2-inverse {
  0% {
    opacity: 0;
    -webkit-transform: translateX(100px);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateX(-20px);
  }
  100% {
    -webkit-transform: translateX(0);
  }
}
@-moz-keyframes cd-bounce-2-inverse {
  0% {
    opacity: 0;
    -moz-transform: translateX(100px);
  }
  60% {
    opacity: 1;
    -moz-transform: translateX(-20px);
  }
  100% {
    -moz-transform: translateX(0);
  }
}
@keyframes cd-bounce-2-inverse {
  0% {
    opacity: 0;
    -webkit-transform: translateX(100px);
    -moz-transform: translateX(100px);
    -ms-transform: translateX(100px);
    -o-transform: translateX(100px);
    transform: translateX(100px);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateX(-20px);
    -moz-transform: translateX(-20px);
    -ms-transform: translateX(-20px);
    -o-transform: translateX(-20px);
    transform: translateX(-20px);
  }
  100% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}




/*
|----------------------------------------------------------------------------
| EDUCATION
|----------------------------------------------------------------------------
*/


#ed-timeline {
  position: relative;
}
#ed-timeline::before {
  /* this is the vertical line */
  content: '';
  position: absolute;
  top: 10;
  left: 18px;
  height: 90%;
  width: 3px;
  background: #bdbdbd;
  -moz-box-shadow: inset 0 -100px 100px -30px #e3e3e3;
  -webkit-box-shadow: inset 0 -100px 100px -30px #e3e3e3;
  box-shadow: inset 0 -100px 100px -30px #e3e3e3;
}
@media only screen and (min-width: 600px) {
  #ed-timeline::before {
    left: 50%;
    margin-left: -2px;
    -moz-box-shadow: inset 0 -100px 100px -30px #e3e3e3;
    -webkit-box-shadow: inset 0 -100px 100px -30px #e3e3e3;
    box-shadow: inset 0 -100px 100px -30px #e3e3e3;
  }
}
@media only screen and (max-width: 600px) {
  #ed-timeline::before {
    display: none;
  }
}
.cd-timeline-block {
  position: relative;
  margin: 0px !important;
}
.cd-timeline-block:after {
  content: "";
  display: table;
  clear: both;
}
.cd-timeline-block:first-child {
  margin-top: 0;
}
.cd-timeline-block:last-child {
  margin-bottom: 0;
}
@media only screen and (min-width: 600px) {
  .cd-timeline-block {
    margin: 4em 0;
  }
  .cd-timeline-block:first-child {
    margin-top: 0;
  }
  .cd-timeline-block:last-child {
    margin-bottom: 0;
  }
}
.cd-timeline-img {
  position: absolute;
  top: 0;
  left: 50%;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-left: -8px;
  background-color: #00a9ff;
}

.cd-timeline-img.cd-picture {
  background: #75ce66;
}
.cd-timeline-img.cd-movie {
  background: #c03b44;
}
.cd-timeline-img.cd-location {
  background: #f0ca45;
}
@-webkit-keyframes cd-bounce-1 {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.5);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale(1.2);
  }
  100% {
    -webkit-transform: scale(1);
  }
}
@-moz-keyframes cd-bounce-1 {
  0% {
    opacity: 0;
    -moz-transform: scale(0.5);
  }
  60% {
    opacity: 1;
    -moz-transform: scale(1.2);
  }
  100% {
    -moz-transform: scale(1);
  }
}
@keyframes cd-bounce-1 {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.5);
    -moz-transform: scale(0.5);
    -ms-transform: scale(0.5);
    -o-transform: scale(0.5);
    transform: scale(0.5);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
  }
  100% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
}
.cd-timeline-content {
  position: relative;
  margin-left: 60px;
  background: white;
  border-radius: 0px;
  padding: 1em;
}
.cd-timeline-content:after {
  content: "";
  display: table;
  clear: both;
}
.cd-timeline-content h2 {
  color: #303e49;
}
.cd-timeline-content p,
.cd-timeline-content .cd-read-more,
.cd-timeline-content .cd-date {
  font-size: 13px;
  font-size: 0.8125rem;
}
.cd-timeline-content .cd-read-more,
.cd-timeline-content .cd-date {
  display: inline-block;
}
.cd-timeline-content p {
  margin: 1em 0;
  line-height: 1.6;
}
.cd-timeline-content .cd-date {
  float: left;
  padding: .8em 0;
  opacity: .7;
}
.cd-timeline-content::before {
  content: '';
  position: absolute;
  top: 16px;
  right: 100%;
  height: 0;
  width: 0;
  border: 30px solid transparent;
  border-right: 30px solid white;
  border-top: 0px;
}
@media only screen and (min-width: 600px) {
  .cd-timeline-content h2 {
    font-size: 20px;
    font-size: 1.25rem;
  }
  .cd-timeline-content p {
    font-size: 16px;
    font-size: 1rem;
  }
  .cd-timeline-content .cd-read-more,
  .cd-timeline-content .cd-date {
    font-size: 14px;
    font-size: 0.875rem;
  }
}
@media only screen and (min-width: 600px) {
  .cd-timeline-content {
    margin-left: 0;
    padding: 1.6em;
    width: 45%;
  }
  .cd-timeline-content::before {
    top: 0px;
    left: 100%;
    border-color: transparent;
    border-left-color: white;
  }
  .cd-timeline-content .cd-read-more {
    float: left;
  }
  .cd-timeline-content .cd-date {
    position: absolute;
    width: 100%;
    left: 122%;
    top: 6px;
    font-size: 16px;
    font-size: 1rem;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content {
    float: right;
    margin-left: 60px;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content::before {
    top: 0px;
    left: auto;
    right: 100%;
    border-color: transparent;
    border-right-color: white;
  }
  .cssanimations .cd-timeline-content.is-hidden {
    visibility: hidden;
  }
  .cssanimations .cd-timeline-content.bounce-in {
    visibility: visible;
    -webkit-animation: cd-bounce-2 0.6s;
    -moz-animation: cd-bounce-2 0.6s;
    animation: cd-bounce-2 0.6s;
  }
}
@media only screen and (min-width: 600px) {
  /* inverse bounce effect on even content blocks */
  .cssanimations .cd-timeline-block:nth-child(even) .cd-timeline-content.bounce-in {
    -webkit-animation: cd-bounce-2-inverse 0.6s;
    -moz-animation: cd-bounce-2-inverse 0.6s;
    animation: cd-bounce-2-inverse 0.6s;
  }
}
@-webkit-keyframes cd-bounce-2 {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-100px);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateX(20px);
  }
  100% {
    -webkit-transform: translateX(0);
  }
}
@-moz-keyframes cd-bounce-2 {
  0% {
    opacity: 0;
    -moz-transform: translateX(-100px);
  }
  60% {
    opacity: 1;
    -moz-transform: translateX(20px);
  }
  100% {
    -moz-transform: translateX(0);
  }
}
@keyframes cd-bounce-2 {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-100px);
    -moz-transform: translateX(-100px);
    -ms-transform: translateX(-100px);
    -o-transform: translateX(-100px);
    transform: translateX(-100px);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateX(20px);
    -moz-transform: translateX(20px);
    -ms-transform: translateX(20px);
    -o-transform: translateX(20px);
    transform: translateX(20px);
  }
  100% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
@-webkit-keyframes cd-bounce-2-inverse {
  0% {
    opacity: 0;
    -webkit-transform: translateX(100px);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateX(-20px);
  }
  100% {
    -webkit-transform: translateX(0);
  }
}
@-moz-keyframes cd-bounce-2-inverse {
  0% {
    opacity: 0;
    -moz-transform: translateX(100px);
  }
  60% {
    opacity: 1;
    -moz-transform: translateX(-20px);
  }
  100% {
    -moz-transform: translateX(0);
  }
}
@keyframes cd-bounce-2-inverse {
  0% {
    opacity: 0;
    -webkit-transform: translateX(100px);
    -moz-transform: translateX(100px);
    -ms-transform: translateX(100px);
    -o-transform: translateX(100px);
    transform: translateX(100px);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateX(-20px);
    -moz-transform: translateX(-20px);
    -ms-transform: translateX(-20px);
    -o-transform: translateX(-20px);
    transform: translateX(-20px);
  }
  100% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}

</style>
