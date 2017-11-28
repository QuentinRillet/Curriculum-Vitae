<template>
    <!--
    ABOUT
    -->
    <div>
        <section id="about" class="section scrollspy reveal">
            <div class="row">
                <div class="col m12 ">
                    <div class="z-depth-5 blue lighten-5" style="padding-bottom: 40px">
                        <img src="../assets/moi.jpg" class="responsive-img circle" style="max-width: 20%; margin-top:-70px">
                        <h2>RILLET Quentin</h2>
                        <span><h4>{{ $t('about.accroche') }}</h4></span>
                        <p>{{ $t('about.me') }}</p>
                        <p>{{ $t('about.presentation') }}</p>
                        <h5>{{ $t('about.quality') }}</h5>
                        <a href="https://quentinrillet.fr/uploads/documents/CV-Resume-Quentin-Rillet.pdf"
                           class="btn btn-blue waves-effect" target="_blank">CV <i class="fa fa-file-pdf-o"></i></a>
                        <a href="#contact" class="btn btn-success waves-effect">Contact <i class="fa fa-comments"></i></a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style>
    #about {
        padding-top: 100px;
    }
</style>
