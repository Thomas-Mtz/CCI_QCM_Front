<script setup>
const props = defineProps({
  id: String,
});
</script>

<template>
  <h1>User Edit admin</h1>
  <h2>User n° {{ props.id }}</h2>
</template>

<style scoped></style>
