<template>
    <!--
    SKILLS
    -->
    <div>
        <section id="skills" class="section scrollspy">
                <div class="row">
                    <div class="section-title">
                        <h2><i class="fa fa-gears"></i> Compétences</h2>
                    </div>
                    <div class="skill-line z-depth-1">
                        <div class="row blue lighten-1 white-text" style="padding: 40px">
                            <div class="col m4 s12">
                                <h3>Techniques</h3>
                                <span>HTML / CSS</span>
                                <div class="progress">
                                    <div class="determinate white" style="width: 90%;"><i class="fa fa-circle bar-circle"></i></div>
                                </div>
                                <span>PHP / MySQL</span>
                                <div class="progress">
                                    <div class="determinate white" style="width: 95%;"><i class="fa fa-circle bar-circle"></i></div>
                                </div>
                                <span>Python</span>
                                <div class="progress">
                                    <div class="determinate white" style="width: 35%;"><i class="fa fa-circle bar-circle "></i></div>
                                </div>
                                <span>Ruby</span>
                                <div class="progress">
                                    <div class="determinate white" style="width: 35%;"><i class="fa fa-circle bar-circle"></i></div>
                                </div>
                                <span>Système UNIX</span>
                                <div class="progress">
                                    <div class="determinate white" style="width: 60%;"><i class="fa fa-circle bar-circle"></i></div>
                                </div>
                            </div>
                            <div class="col m4 s12">
                                <h3>Frameworks</h3>
                                <span>Symfony 3 (php)</span>
                                <div class="progress" >
                                    <div class="determinate white" style="width: 85%;"><i class="fa fa-circle bar-circle"></i></div>
                                </div>
                                <span>jQuery (js)</span>
                                <div class="progress">
                                    <div class="determinate white" style="width: 90%;"><i class="fa fa-circle bar-circle"></i></div>
                                </div>
                                <span>Vuejs 2 (js)</span>
                                <div class="progress">
                                    <div class="determinate white" style="width: 85%;"><i class="fa fa-circle bar-circle"></i></div>
                                </div>
                                <span>Ruby On Rails (ruby)</span>
                                <div class="progress">
                                    <div class="determinate white" style="width: 50%;"><i class="fa fa-circle bar-circle"></i></div>
                                </div>
                                <span>Django (python)</span>
                                <div class="progress">
                                    <div class="determinate white" style="width: 50%;"><i class="fa fa-circle bar-circle"></i></div>
                                </div>
                            </div>
                            <div class="col m4 s12">
                                <h3>Forces</h3>
                                <p class="center-align"><i class="fa fa-check"></i> Autonome</p>
                                <p class="center-align"><i class="fa fa-check"></i> Travail en équipe</p>
                                <p class="center-align"><i class="fa fa-check"></i> Professionalisme</p>
                                <p class="center-align"><i class="fa fa-check"></i> Polyvalence</p>
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
.progress {
    overflow: visible;
}
.bar-circle {
    right:0px;
    position:absolute;
    margin-top:-5px;
}

</style>
