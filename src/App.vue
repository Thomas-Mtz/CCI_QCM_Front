<script setup>
import PublicHeader from "@/components/public/PublicHeader.vue";
import PublicFooter from "@/components/public/PublicFooter.vue";
</script>

<template>
  <main class="app-main">
    <PublicHeader />
    <router-view />
    <PublicFooter />
  </main>
</template>

<style scoped></style>
