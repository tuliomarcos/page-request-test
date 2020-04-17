<template lang="pug">
  .up-input
    label.up-input_label {{ label }}
      span(v-if="required") *
    input.up-input_field(
      :class="hasErrors ? 'up-input_field--error' : ''"
      :type="type" 
      @keyup.enter="emitEnter(fieldName)"
      @change="emitChange(fieldName)"
      @input="emitInput(fieldName)"
      @blur="emitBlur(fieldName)"
    )
    div(v-if="hasErrors")
      div(v-for="(error, key) in errors" :key="key")
        p.up-text--error(v-if="error.type === 'required'") Este Campo é obrigatório!
        p.up-text--error(v-if="error.type === 'minLength'") {{ `É necessário no mínimo ${error.min} caracteres` }}
        p.up-text--error(v-if="error.type === 'email'") Preencha o email corretamente
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'text'
      },
      label: {
        type: String,
        required: true,
      },
      fieldName: {
        type: String,
        required: true,
      },
      required: {
        type: Boolean,
        default: false,
      },
      hasErrors: Boolean,
      errors: Array,
    },
    methods: {
      emitEnter(fieldName) {
        this.$emit('enter', event.target.value, fieldName)
      },
      emitChange(fieldName) {
        this.$emit('change', event.target.value, fieldName)
      },
      emitInput(fieldName) {
        this.$emit('input', event.target.value, fieldName)
      },
      emitBlur(fieldName) {
        this.$emit('blur', event.target.value, fieldName)
      },
    },
  }
</script>