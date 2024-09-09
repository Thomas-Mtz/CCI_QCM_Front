<script setup>
import AdminSidebar from "@/components/admin/AdminSidebar.vue";
</script>

<template>
  <main class="layout-main">
    <div class="d-flex dashboard-main">
      <AdminSidebar />
      <div class="w-100 dashboard-content">
        <router-view />
      </div>
    </div>
  </main>
</template>

<style scoped></style>
