<script setup lang="ts">
import GlowBackground from '../components/GlowBackground.vue'
</script>

<template>
  <div class="slidev-layout default">
    <GlowBackground />
    <slot />
  </div>
</template>

<style scoped>
.slidev-layout.default {
  width: 100%;
  height: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  background: #000000;  /* grey-900 per design system */
  position: relative;
}
</style>
