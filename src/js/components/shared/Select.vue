<template lang="pug">
  .up-select
    label.up-select_label {{ label }}
      span(v-if="required") *
    v-select(
      class="up-select_options"
      :options="options"
      :placeholder="placeholder"
      @input="changeValue"
    )
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
      }
    },
    methods: {
      changeValue(event) {
        this.$emit('input', event)
      }
    },
    components: {
      vSelect,
    }
  }
</script>