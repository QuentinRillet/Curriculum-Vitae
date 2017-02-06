<template>
    <!--
    CONTACT
    -->
    <div>
        <section id="contact" class="section scrollspy">
            <div class="row">
                <h2><i class="fa fa-comments"></i> Contactez-moi</h2>
                <form class="col s12 z-depth-5 white" style="padding: 40px">
                    <div class="row">
                        <div class="input-field col s6">
                            <i class="material-icons prefix">insert_emoticon</i>
                            <label for="nom">Nom</label>
                            <input id="nom" v-model="form.nom" required class="validate" @input="$v.form.nom.$touch()">
                        </div>
                        <div class="input-field col s6">
                            <label for="prenom">Prenom</label>
                            <input id="prenom" v-model="form.prenom" required class="validate" @input="$v.form.prenom.$touch()">
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s6">
                            <i class="material-icons prefix">contact_mail</i>
                            <label for="email">Email</label>
                            <input id="email" v-model="form.email" required class="validate">
                        </div>
                        <div class="input-field col s6">
                            <i class="material-icons prefix">email</i>
                            <label for="sujet">Sujet</label>
                            <input id="sujet" v-model="form.subject" required class="validate">
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <i class="material-icons prefix">mode_edit</i>
                            <label for="content">Contenu</label>
                            <textarea id="content" class="materialize-textarea validate" v-model="form.content" required></textarea>
                        </div>
                    </div>
                    <button class="btn waves-effect waves-light" type="submit" name="action" @click="envoyer">Envoyer
                        <i class="material-icons right">send</i>
                    </button>
                </form>
            </div>
        </section>
    </div>
</template>

<script type="text/javascript" language="Javascript">
import required from 'vuelidate/lib/validators'
import axios from 'axios'

export default {
  data () {
    return {
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
        required
      },
      prenom: {
        required
      }
    }
  },
  methods: {
    envoyer () {
      axios.post('/message', this.form)
      .then((response) => {
        console.log(response)
      })
      .catch((response) => {
        console.log(response)
      })
    }
  }
}

</script>
