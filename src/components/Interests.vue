<template>
    <!--
    Interests
    -->
    <div>
        <section id="interests" class="section scrollspy">
            <div class="row">
                <div class="col m12">
                    <h2><i class="fa fa-plane"></i> {{ $t('interests.name') }}</h2>
                    <div class="row">
                        <div class="col s12 l3 m6">
                            <div class="card reveal hoverable">
                                <div class="card-content white-text blue  darken-2">
                                    <span class="card-title">{{ $t('interests.miageCo.name') }}</span>
                                </div>
                                <div class="card-image">
                                    <img src="../assets/miageco.jpg" class="responsive-img">
                                </div>
                                <div class="card-content">
                                    <p>{{ $t('interests.miageCo.p1') }}</p>
                                </div>
                                <a href="https://www.miage.net/" target="_blank">
                                    <div class="card-action hoverable">MIAGE CO</div>
                                </a>
                            </div>
                        </div>
                        <div class="col s12 l3 m6">
                            <div class="card reveal-1 hoverable">
                                <div class="card-content white-text teal lighten-3">
                                    <span class="card-title">{{ $t('interests.miagePlus.name') }}</span>
                                </div>
                                <div class="card-image">
                                    <img src="../assets/miageplus.png" class="responsive-img">
                                </div>
                                <div class="card-content">
                                    <p>{{ $t('interests.miagePlus.p1') }}</p>
                                    <p><i>{{ $t('interests.miagePlus.info') }}</i></p>
                                </div>
                                <a href="https://www.facebook.com/miageplusamiens/" target="_blank">
                                    <div class="card-action hoverable">MIAGE PLUS</div>
                                </a>
                            </div>
                        </div>
                        <div class="col s12 l3 m6">
                            <div class="card reveal-2 hoverable">
                                <div class="card-content white-text red lighten-1">
                                    <span class="card-title">{{ $t('interests.badminton.name') }}</span>
                                </div>
                                <div class="card-image">
                                    <img src="../assets/badminton.jpg" class="responsive-img">
                                </div>
                                <div class="card-content">
                                    <p>{{ $t('interests.badminton.p1') }}</p>
                                    <p><i>{{ $t('interests.badminton.date') }}</i></p>
                                    <p>-</p>
                                    <p>{{ $t('interests.badminton.p2') }}</p>
                                </div>
                                <a href="http://usl-badminton.fr/" target="_blank">
                                    <div class="card-action hoverable">USL-Badminton</div>
                                </a>
                            </div>
                        </div>
                        <div class="col s12 l3 m6 ">
                            <div class="card reveal-3 hoverable">
                                <div class="card-content white-text lime lighten-2">
                                    <span class="card-title">{{ $t('interests.travel.name') }}</span>
                                </div>
                                <div class="card-image">
                                    <img src="../assets/voyage.jpg" class="responsive-img">
                                </div>
                                <div class="card-content">
                                    <p>{{ $t('interests.travel.p1') }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
