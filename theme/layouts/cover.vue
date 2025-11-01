<script setup lang="ts">
import GlowBackground from '../components/GlowBackground.vue'
</script>

<template>
  <div class="slidev-layout cover">
    <GlowBackground />
    <slot />
  </div>
</template>

<style scoped>
.slidev-layout.cover {
  width: 100%;
  height: 100%;
  padding: 4rem 3rem 3rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #000000;  /* grey-900 per design system */
  position: relative;
}
</style>
