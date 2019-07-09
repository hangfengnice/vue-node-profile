<template>
  <div class="form-group">
    <textarea
      class="form-control form-control-lg"
      :class="{'is-invalid': error}"
      :placeholder="placeholder"
      :name="name"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <div v-if="error" class="invalid-feedback">{{error}}</div>
    <small v-if="info" class="form-text text-muted">{{info}}</small>
  </div>
</template>

<script>
export default {
  name: "textArea",
  props: {
    type: {
      type: String,
      default: "text"
    },
    placeholder: String,
    value: String,
    name: String,
    error: String,
    info: String,
    disabled: Boolean
  }
};
</script>

<style scoped>
</style>
