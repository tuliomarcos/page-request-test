<template lang="pug">
  #request-test
    .up-banner
      .up-banner_content
        .up-logo
        h2.up-banner_content--text Solicite uma demonstração da nossa plataforma e entenda como  podemos ajudá-lo a otimizar seus resultados
      .up-banner_cover
        .up-banner_cover--image
    main.up-container
      section
        h1.up-title {{ infoPage.title }}
        p.up-description {{ infoPage.description }}
        ul.up-list
          li(v-for="feat in infoPage.features" class="up-list_item")
            span.up-list_item--icon 
            p {{ feat }}
      aside.up-form
        .up-form_header
          h1.up-form_header--title Quero solicitar um teste
          h2.up-form_header--subtitle Preencha seus dados abaixo entraremos em contato em breve.
        .up-form_body
          TextInput(label="Nome" :required="true")
          TextInput(label="Email" :required="true")
          TextInput(label="Telefone" :required="true")
          TextInput(label="Empresa" :required="true")
          Select(label="Cargo" :options="options.cargo" :required="true" placeholder="Selecione")
          Select(label="Segmento da empresa" :options="options.segmento" :required="true" placeholder="Selecione")
          Select(label="Como nossa plataforma pode ajudar sua empresa?" :options="options.ajuda" :required="true" placeholder="Selecione")
          TextInput(label="4 + 10 = ?" :required="true")
        .up-form_footer
          button.up-btn.up-btn--primary Solicitar Teste

    footer
      p nós buscamos e organizamos, você decide!
      .up-logo
</template>

<script>
  import TextInput from '../shared/TextInput'
  import Select from '../shared/Select'
  import * as OptionsSelect from '../../utils/options/OptionsSelect'
  import { mapState, mapActions } from 'vuex'

  export default {
    data: () => ({
    }),
    computed: {
      ...mapState('infoPage', ['infoPage']),
      options: () => OptionsSelect.options(),
    },
    methods: {
      ...mapActions('infoPage', ['initTexts']),
    },
    created() {
      this.initTexts()
    },
    components: {
      TextInput,
      Select,
    },
  }
</script>