<script setup></script>

<template>
  <main class="layout-main">
    <h1>Connexion</h1>
    <form class="w-25">
      <div class="mb-3">
        <label for="InputEmail" class="form-label">Adresse Email:</label>
        <input
          type="text"
          class="form-control"
          id="InputEmail"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="InputPassword" class="form-label">Votre mot de passe</label>
        <input type="password" class="form-control" id="InputPassword" />
      </div>
      <button type="submit" class="btn btn-primary">Connexion</button>
    </form>
  </main>
</template>

<style scoped></style>
