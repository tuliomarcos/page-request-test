<template lang="pug">
  .up-input
    label.up-input_label {{ label }}{{ required ? '*' : '' }}
    input.up-input_field(:type="type")
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
      required: {
        type: Boolean,
        default: false,
      },
    }
  }
</script>