<template>
    <!--
    CONTACT
    -->
    <div>
        <section id="contact" class="section scrollspy reveal ">
            <div class="row">
                <h2><i class="fa fa-comments"></i> Contactez-moi</h2>
                <form class="col s12 z-depth-2 white hoverable" style="padding: 40px">
                    <div class="row">
                        <div class="input-field col s12 m6">
                            <i class="material-icons prefix">insert_emoticon</i>
                            <label for="nom" data-error="wrong">Nom</label>
                            <input type="text" id="nom" v-model="form.nom" required class="validate" @input="$v.form.nom.$touch()" >
                            <span v-if="!$v.form.nom.required">Champ requis</span><span v-if="!$v.form.nom.minLength">Min 2 caractères</span>
                        </div>
                        <div class="input-field col s12 m6">
                            <i class="material-icons prefix">insert_emoticon</i>
                            <label for="prenom">Prénom</label>
                            <input type="text" id="prenom" v-model="form.prenom" required class="validate" @input="$v.form.prenom.$touch()">
                            <span v-if="!$v.form.prenom.required">Champ requis</span><span v-if="!$v.form.prenom.minLength">Min 2 caractères</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12 m6">
                            <i class="material-icons prefix">contact_mail</i>
                            <label for="email">Email</label>
                            <input type="email" id="email" v-model="form.email" required class="validate" @input="$v.form.email.$touch()">
                            <span v-if="!$v.form.email.required">Champ requis</span><span v-if="!$v.form.email.email">Email non valide</span>
                        </div>
                        <div class="input-field col s12 m6">
                            <i class="material-icons prefix">email</i>
                            <label for="sujet">Sujet</label>
                            <input type="text" id="sujet" v-model="form.subject" required class="validate" @input="$v.form.subject.$touch()">
                            <span v-if="!$v.form.subject.required">Champ requis</span><span v-if="!$v.form.subject.minLength">Min 2 caractères</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <i class="material-icons prefix">mode_edit</i>
                            <label for="content">Contenu</label>
                            <textarea id="content" class="materialize-textarea" v-model="form.content" required @input="$v.form.content.$touch()"></textarea>
                            <span v-if="!$v.form.content.required">Champ requis</span><span v-if="!$v.form.content.minLength">Min 2 caractères</span>
                        </div>
                    </div>
                    <button class="btn waves-effect waves-light" :class="{disabled: sending}" type="submit" name="action" @click.prevent="envoyer">Envoyer
                        <i class="material-icons right">send</i>
                    </button>
                    <div class="preloader-wrapper small" :class="{active: sending}">
                      <div class="spinner-layer">
                        <div class="circle-clipper right">
                          <div class="circle"></div>
                        </div>
                      </div>
                    </div>
                </form>
            </div>
        </section>
    </div>
</template>

<script type="text/javascript" language="Javascript">
import { required, minLength, email } from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'
import axios from 'axios'

export default {
  mixins: [validationMixin],
  data () {
    return {
      sending: false,
      form: {
        nom: '',
        prenom: '',
        email: '',
        subject: '',
        content: ''
      }
    }
  },
  validations: {
    form: {
      nom: {
        required,
        minLength: minLength(2)
      },
      prenom: {
        required,
        minLength: minLength(2)
      },
      email: {
        required,
        email
      },
      subject: {
        required,
        minLength: minLength(2)
      },
      content: {
        required,
        minLength: minLength(2)
      }
    }
  },
  methods: {
    envoyer () {
      if (!this.$v.form.$invalid) {
        this.sending = true
        axios.post('/messages', this.form)
        .then((response) => {
          this.form = {
            nom: '',
            prenom: '',
            email: '',
            subject: '',
            content: ''
          }
          this.sending = false
          /* global Materialize */
          Materialize.toast('Votre message à bien été posté, un mail est envoyé pour prévenir de ce nouveau message! Merci.', 4000)
        })
        .catch((response) => {
          Materialize.toast('Erreur, merci de bien vouloir m\'envoyer un mail', 4000)
          this.sending = false
          console.log(response)
        })
      } else {
        Materialize.toast('Veuillez remplir correctement le formulaire', 4000, null, null)
      }
    }
  }
}

</script>
