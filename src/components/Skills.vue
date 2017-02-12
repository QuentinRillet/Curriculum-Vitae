<template>
  <!--
  SKILLS
  -->
  <div>
    <section id="skills" class="section scrollspy">
      <div class="row" style="padding: 40px">
        <div class="section-title">
          <h2><i class="fa fa-gears"></i> Compétences</h2>
        </div>
        <div class="skill-line z-depth-1">
          <div class="row blue lighten-2 white-text hoverable">
            <div class="col s12 l8 reveal">
              <h3>Gestion de projet</h3> 
              <table> 
                <tr> 
                  <th>Gestion de version avec Git</th>
                  <td><i class="fa fa-gitlab"></i> Gitlab / <i class="fa fa-github"></i> Github
                  </td>
                </tr>
                <tr> 
                  <th>Méthodes agiles</th>
                  <td>Kanboard / <i class="fa fa-trello"></i> Trello</td>
                </tr>
                <tr> 
                  <th>Communication</th>
                  <td><i class="fa fa-slack"></i> Slack</td>
                </tr>
                <tr>
                  <th>Documents</th>
                  <td>LaTex</td>
                </tr>
              </table>
            </div>
            <div class="col s12 l4 reveal">
              <h3>Relationnel</h3>
                <p class="center-align"><i class="fa fa-check"></i> Écoute</p>
                <p class="center-align"><i class="fa fa-check"></i> Compréhension</p>
                <p class="center-align"><i class="fa fa-check"></i> Force de propositions</p>
                <p class="center-align"><i class="fa fa-check"></i> Respect des engagements</p>
            </div>
          </div>
          <div class="row blue lighten-1 white-text hoverable" style="padding: 20px">
            <div class="row">
              <div class="col m6 l4 s12 reveal">
                <h3>Techniques</h3>
                <span>HTML / CSS</span>
                <div class="progress blue-grey">
                  <div class="determinate white" style="width: 95%;"><i class="fa fa-circle bar-circle"></i></div>
                </div>
                <span>PHP / MySQL</span>
                <div class="progress blue-grey">
                  <div class="determinate white" style="width: 95%;"><i class="fa fa-circle bar-circle"></i></div>
                </div>
                <span>Javascript</span>
                <div class="progress blue-grey">
                  <div class="determinate white" style="width: 75%;"><i class="fa fa-circle bar-circle "></i></div>
                </div>
                <span>Ruby</span>
                <div class="progress blue-grey">
                  <div class="determinate white" style="width: 35%;"><i class="fa fa-circle bar-circle"></i></div>
                </div>
                <div v-show="expand">
                  <span>Python</span>
                  <div class="progress blue-grey">
                    <div class="determinate white" style="width: 35%;"><i class="fa fa-circle bar-circle "></i></div>
                  </div>
                  <span>Système UNIX (Debian / Ubuntu)</span>
                  <div class="progress blue-grey">
                    <div class="determinate white" style="width: 80%;"><i class="fa fa-circle bar-circle"></i></div>
                  </div>
                  <span>Mac Os</span>
                  <div class="progress blue-grey">
                    <div class="determinate white" style="width: 100%;"><i class="fa fa-circle bar-circle"></i></div>
                  </div>
                </div>
              </div>
              <div class="col m6 l4 s12 reveal">
                <h3>Frameworks</h3>
                <span>Symfony 3 (php)</span>
                <div class="progress blue-grey">
                  <div class="determinate white" style="width: 85%;"><i class="fa fa-circle bar-circle"></i></div>
                </div>
                <span>jQuery (js)</span>
                <div class="progress blue-grey">
                  <div class="determinate white" style="width: 90%;"><i class="fa fa-circle bar-circle"></i></div>
                </div>
                <span>Vuejs 2 (js)</span>
                <div class="progress blue-grey">
                  <div class="determinate white" style="width: 85%;"><i class="fa fa-circle bar-circle"></i></div>
                </div>
                <span>Ruby On Rails (ruby)</span>
                <div class="progress blue-grey">
                  <div class="determinate white" style="width: 50%;"><i class="fa fa-circle bar-circle"></i></div>
                </div>
                <div v-show="expand">
                  <span>Django (python)</span>
                  <div class="progress blue-grey">
                    <div class="determinate white" style="width: 50%;"><i class="fa fa-circle bar-circle"></i></div>
                  </div>
                  <span>Angular 2 (js)</span>
                  <div class="progress blue-grey">
                    <div class="determinate white" style="width: 30%;"><i class="fa fa-circle bar-circle"></i></div>
                  </div>
                </div>
              </div>
              <div class="col m6 l4 s12 reveal">
                <h3>Forces</h3>
                <p class="center-align"><i class="fa fa-check"></i> Autonome</p>
                <p class="center-align"><i class="fa fa-check"></i> Travail en équipe</p>
                <p class="center-align"><i class="fa fa-check"></i> Professionalisme</p>
                <p class="center-align"><i class="fa fa-check"></i> Polyvalence</p>
              </div>
            </div>
            <div class="row">
              <div class="col s12 center">
                <a @click="toggle()" class="btn-floating btn-large waves-effect waves-light"><i class="material-icons">{{button}}</i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        expand: false
      }
    },
    computed: {
      button () {
        return (this.expand) ? 'remove' : 'add'
      }
    },
    methods: {
      toggle () {
        this.expand = !this.expand
      }
    }
  }
</script>
