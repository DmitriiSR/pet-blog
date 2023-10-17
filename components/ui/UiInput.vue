<template>
  <label class="ui-input-label">
    <span v-if="props.label">{{ props.label }}</span>
    <input class="ui-input" :placeholder="props.placeholder" :type="props.type">
  </label>
</template>

<script setup lang="ts">
interface UiInputProps {
  type: 'text' | 'search' | 'number',
  label: string,
  placeholder: string
}
const props = withDefaults(defineProps<UiInputProps>(), {
  type: 'text'
})
</script>

<style scoped>
.ui-input-label {
  @apply flex flex-col
}

.ui-input {
  outline: none;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid rgba(201, 211, 209, 0.50);
  background: #F7F9F9;

  color: #222727;
  font-size: 14px;
  font-weight: 400;
  line-height: 125%;
}
</style>