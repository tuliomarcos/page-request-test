<template lang="pug">
  .up-select
    label.up-select_label {{ label }}
      span(v-if="required") *
    v-select(
      class="up-select_options"
      :options="options"
      :placeholder="placeholder"
      :class="hasErrors ? 'up-input_field--error' : ''"
      @input="emitInput(fieldName)"
    )
    div(v-if="hasErrors")
      div(v-for="(error, key) in errors" :key="key")
        p.up-text--error(v-show="error.type === 'required'") Este Campo é obrigatório!
</template>

<script>
  import vSelect from 'vue-select'

  export default {
    props: {
      placeholder: {
        type: String,
        default: ''
      },
      options: {
        type: Array,
        required: true,
      },
      label: {
        type: String,
        required: true,
      },
      required: {
        type: Boolean,
        default: false
      },
      fieldName: {
        type: String,
        required: true,
      },
      hasErrors: Boolean,
      errors: Array,
    },
    methods: {
      changeValue(event) {
        this.$emit('input', event)
      },
      emitInput(fieldName) {
        this.$emit('input', event.target.value, fieldName)
      },
    },
    components: {
      vSelect,
    }
  }
</script>