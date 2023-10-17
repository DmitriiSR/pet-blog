<template>
  <a class="logo" href="/" :style="styles"></a>
</template>

<script setup lang="ts">
import {LogoSizes} from "~/types/types";
import {Ref} from "vue";
import {LogoStyles} from "~/types/types";

interface LogoProps {
  size: LogoSizes
}
const props = withDefaults(defineProps<LogoProps>(), {
  size: 'medium'
})

const logoSizes: Record<LogoSizes, [string, string]> = {
  large: ['78px', '32px'],
  medium: ['78px', '32px'],
  small: ['78px', '32px'],
}

const styles: Ref<LogoStyles> = computed(() => ({
  backgroundSize: logoSizes[props.size][0],
  height: logoSizes[props.size][1],
  width: logoSizes[props.size][0]
}))
</script>

<style scoped>
.logo {
  display: block;
  background-color: transparent;
  background-image: url("../assets/img/logo.svg");
  background-position: center;
}
</style>