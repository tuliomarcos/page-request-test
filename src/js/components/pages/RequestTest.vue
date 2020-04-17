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
        h1.up-text--title {{ infoPage.title }}
        p.up-description {{ infoPage.description }}
        ul.up-list
          li(v-for="feat in infoPage.features" class="up-list_item")
            span.up-list_item--icon 
            p {{ feat }}
      aside
        form.up-form(@submit.prevent="submit")
          .up-form_header
            h1.up-form_header--title Quero solicitar um teste
            h2.up-form_header--subtitle Preencha seus dados abaixo entraremos em contato em breve.
          .up-form_body
            TextInput(
              label="Nome" 
              fieldName="name"
              :hasErrors="$v.name.$error"
              :errors="getFieldErrors($v, 'name')" 
              :required="true"
              @blur="validation"
            )
            TextInput(
              label="Email"
              fieldName="email"
              :hasErrors="$v.email.$error"
              :errors="getFieldErrors($v, 'email')" 
              :required="true"
              @blur="validation"
            )
            TextInput(
              label="Telefone"
              fieldName="phone"
              maxLength="15"
              :value="phone"
              :hasErrors="$v.phone.$error"
              :errors="getFieldErrors($v, 'phone')" 
              :required="true"
              @blur="validation"
              @input="maskPhone"
            )
            TextInput(
              label="Empresa"
              fieldName="company"
              :hasErrors="$v.company.$error"
              :errors="getFieldErrors($v, 'company')" 
              :required="true"
              @blur="validation"
            )
            Select(
              label="Cargo"
              :options="options.cargo"
              :required="true" 
              placeholder="Selecione"
              fieldName="role"
              :hasErrors="$v.role.$error"
              :errors="getFieldErrors($v, 'role')" 
              @input="validation"
            )
            Select(
              label="Segmento da empresa" 
              :options="options.segmento" 
              :required="true" 
              placeholder="Selecione"
              fieldName="segment"
              :hasErrors="$v.segment.$error"
              :errors="getFieldErrors($v, 'segment')" 
              @input="validation"
            )
            Select(
              label="Como nossa plataforma pode ajudar sua empresa?"
              :options="options.ajuda"
              :required="true" 
              placeholder="Selecione"
              fieldName="help"
              :hasErrors="$v.help.$error"
              :errors="getFieldErrors($v, 'help')" 
              @input="validation"
            )
            TextInput(
              label="4 + 10 = ?" 
              fieldName="question"
              :hasErrors="$v.question.$error"
              :errors="getFieldErrors($v, 'question')" 
              :required="true"
              @blur="validation"
            )
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
  import { required, minLength, email, helpers } from 'vuelidate/lib/validators'

  const validateSum = helpers.withParams(
    { type: 'validateSum' },
    sum => 4 + 10 === Number(sum)
  )

  export default {
    data: () => ({
      name: '',
      email: '',
      phone: '',
      company: '',
      question: '',
      role:'',
      segment:'',
      help:'',
    }),
    computed: {
      ...mapState('infoPage', ['infoPage']),
      options: () => OptionsSelect.options(),
    },
    methods: {
      ...mapActions('infoPage', ['initTexts']),
      getFieldErrors: (v, fieldName) => {
        return Object
          .values(v[fieldName].$params)
          .filter(error => !v[fieldName][error.type])
      },
      validation(event, fieldName) {
        this[fieldName] = event
        this.$v[fieldName].$touch()
      },
      maskPhone(number) {
        number.replace(/\D/g, '').length === 11
          ? this.phone = number.replace(/\D/g, '').replace(/^(\d{2})(\d{1})?(\d{4})(\d{4})?/, '($1) $2 $3-$4')
          : this.phone = number.replace(/^(\d{2})(\d{4})(\d{4})?/, '($1) $2-$3')
      },
      submit() {
        this.$v.$touch()
        if(this.$v.$error) {
          alert('Não foi possível enviar o formulario, por favor preencha corretamente os campos e tente novamente :)')
          return
        }
        alert('Formulário enviado com sucesso !!')
      },
    },
    validations: {
      name: {
        required,
        minLength: minLength(4)
      },
      email: {
        required,
        email,
      },
      phone: {
        required,
        minLength: minLength(8)
      },
      company: {
        required,
        minLength: minLength(4)
      },
      question: { 
        required,
        validateSum, 
      },
      segment: { required },
      role: { required },
      help: { required }
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