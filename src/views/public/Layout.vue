<script setup></script>

<template>
  <main class="layout-main">
    <div class="public mt-4 mx-4 p-5">
      <h1>Public Layout</h1>
      <router-view />
    </div>
  </main>
</template>

<style scoped>
.public {
  border: solid 2px green;
}
</style>
