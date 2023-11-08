<template>
  <div @click="clickToggle" class="ui-switch" :class="{'active': isActive}">
  </div>
</template>

<script setup lang="ts">
const isActive = ref(false);

const clickToggle = () => {
  isActive.value = !isActive.value
}
</script>

<style scoped lang="scss">
.ui-switch {
  position: relative;
  width: 51px;
  height: 27px;
  padding: 0 2px;
  flex-shrink: 0;

  border-radius: 27px;
  background-color: #F7F9F9;
  cursor: pointer;

  &::before {
    content: '';
    display: block;
    width: 21px;
    height: 21px;

    background-color: #12BFA2;
    border-radius: 50%;
    margin-left: 0;
    transition: margin-left 0.3s;
  }

  &.active::before {
    margin-left: 24px;
    transition: margin-left 0.3s;
  }

  @apply shadow-inner flex items-center border border-sys-light-grey
}
</style>