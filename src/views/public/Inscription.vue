<script setup>
import { ref } from "vue";
import axios from "axios";

const email = ref("");
const password = ref("");

const ajouter = async () => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/api/users", {
      email: email.value,
      password: password.value,
      roles: ["ROLE_USER"], // Vous pouvez personnaliser les rôles selon vos besoins
    });
    console.log("Utilisateur ajouté avec succès:", response.data);
    // Réinitialiser les champs du formulaire après l'ajout
    email.value = "";
    password.value = "";
  } catch (error) {
    console.error("Erreur lors de l'ajout de l'utilisateur:", error);
    alert("Une erreur est survenue lors de l'ajout de l'utilisateur.");
  }
};
</script>

<template>
  <h1>Inscrivez-Vous</h1>
  <div>
    <h1>Ajouter un utilisateur</h1>
    <form @submit.prevent="ajouter">
      <div>
        <label for="email">Email :</label>
        <input v-model="email" type="email" id="email" required />
      </div>
      <div>
        <label for="password">Mot de passe :</label>
        <input v-model="password" type="password" id="password" required />
      </div>
      <button type="submit">Ajouter</button>
    </form>
  </div>
</template>

<style scoped></style>
