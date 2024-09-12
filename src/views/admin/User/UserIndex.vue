<template>
  <div class="container">
    <h1 class="text-center">Liste des utilisateurs</h1>
    <!-- Chercher un utilisateur (pas fonctionnel) -->
    <div>
      <label for="exampleInputEmail1" class="form-label"
        >Chercher un utilisateur</label
      >
      <input
        type="email"
        class="form-control w-50"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
    </div>
    <!-- ________________________ -->

    <!-- Tableau des utilisateurs -->
    <table class="table table-striped mx-auto mt-5">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Email</th>
          <th scope="col">Mot de passe</th>
          <th scope="col">Rôle</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.email }}</td>
          <td>{{ user.password }}</td>
          <td>{{ user.roles.join(", ") }}</td>
          <td>
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Actions
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Voir le profil</a></li>
              <!-- Cache le lien si le user est Admin -->
              <li v-if="!user.roles.includes('ROLE_ADMIN')">
                <a
                  class="dropdown-item"
                  href="#"
                  @click.prevent="deleteUser(user.id)"
                  >Suprimer l'utilisateur</a
                >
              </li>
              <!-- __________________________________ -->
              <!-- Modifier l'utilisateur en ouvrant le modal -->
              <li v-if="!user.roles.includes('ROLE_ADMIN')">
                <a
                  class="dropdown-item"
                  href="#"
                  @click.prevent="openEditModal(user)"
                  data-bs-toggle="modal"
                  data-bs-target="#editUserModal"
                  >Modifier l'utilisateur</a
                >
              </li>
              <!-- __________________________________________ -->
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- ________________________ -->

    <!-- Formulaire pour rajouter un user -->
    <div class="mt-5">
      <h2>Créer un utilisateur</h2>
      <form @submit.prevent="createUser">
        <div class="mb-3">
          <label for="newUserEmail" class="form-label">Adresse Email:</label>
          <input
            v-model="newUserEmail"
            type="email"
            class="form-control"
            id="newUserEmail"
            required
          />
        </div>
        <div class="mb-3">
          <label for="newUserPassword" class="form-label">Mot de passe</label>
          <input
            v-model="newUserPassword"
            type="password"
            class="form-control"
            id="newUserPassword"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary">Envoyer</button>
      </form>
    </div>
    <!-- ________________________________ -->

    <!-- Modal pour modifier un User -->
    <div class="modal fade" tabindex="-1" id="editUserModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editUserModalLabel">
              Modifier l'utilisateur
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="updateUser">
              <div class="mb-3">
                <label for="editUserEmail" class="form-label"
                  >Adresse Email:</label
                >
                <input
                  v-model="editUserEmail"
                  type="email"
                  class="form-control"
                  id="editUserEmail"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="editUserPassword" class="form-label"
                  >Nouveau Mot de passe (Laissez vide pour garder
                  l'actuel)</label
                >
                <input
                  v-model="editUserPassword"
                  type="password"
                  class="form-control"
                  id="editUserPassword"
                />
              </div>
              <div class="mb-3">
                <label for="editUserRole" class="form-label">Rôle:</label>
                <select
                  v-model="editUserRole"
                  class="form-control"
                  id="editUserRole"
                >
                  <option value="ROLE_USER">Utilisateur</option>
                  <option value="ROLE_ADMIN">Admin</option>
                </select>
              </div>
              <button
                type="submit"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Sauvegarder les modifications
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- ___________________________ -->
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

// Déclaration des variables
const users = ref([]);
const newUserEmail = ref("");
const newUserPassword = ref("");

// Variables pour l'édition de l'utilisateur
const editUserId = ref(null);
const editUserEmail = ref("");
const editUserPassword = ref(""); // Le mot de passe ne sera pas envoyé si ce champ reste vide
const editUserRole = ref("");

// Fonction pour récupérer les utilisateurs
const fetchUsers = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/users");
    users.value = response.data["hydra:member"]; // Si API Platform est configurée avec Hydra
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs :", error);
  }
};

// Fonction pour créer un nouvel utilisateur
const createUser = async () => {
  try {
    await axios.post("http://127.0.0.1:8000/api/users", {
      email: newUserEmail.value,
      password: newUserPassword.value,
      roles: ["ROLE_USER"],
    });
    // Réinitialise les champs du formulaire après ajout
    newUserEmail.value = "";
    newUserPassword.value = "";
    // Rafraîchir la liste des utilisateurs
    fetchUsers();
  } catch (error) {
    console.error("Erreur lors de la création de l'utilisateur :", error);
  }
};

// Fonction pour supprimer un User
const deleteUser = async (userId) => {
  if (confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?")) {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/users/${userId}`);
      // Raffraichit la liste après suppression
      fetchUsers();
    } catch (error) {
      console.error("Erreur lors de la suppression de l'utilisateur:", error);
    }
  }
};

// Fonction pour ouvrir le modal et charger les informations de l'utilisateur à modifier
const openEditModal = (user) => {
  editUserId.value = user.id;
  editUserEmail.value = user.email;
  editUserRole.value = user.roles.includes("ROLE_ADMIN")
    ? "ROLE_ADMIN"
    : "ROLE_USER";
  editUserPassword.value = ""; // Le champ mot de passe est laissé vide par défaut
};

// Fonction pour modifier l'utilisateur
const updateUser = async () => {
  try {
    const data = {
      email: editUserEmail.value,
      roles: [editUserRole.value],
    };

    // Si le champ mot de passe est rempli, ajoute-le à la requête
    if (editUserPassword.value) {
      data.password = editUserPassword.value;
    }

    await axios.patch(
      `http://127.0.0.1:8000/api/users/${editUserId.value}`,
      data,
      {
        headers: {
          "Content-Type": "application/merge-patch+json", // Spécifie le bon type de contenu pour PATCH
        },
      }
    );

    // Rafraîchir la liste des utilisateurs après mise à jour
    fetchUsers();
  } catch (error) {
    console.error("Erreur lors de la modification de l'utilisateur :", error);
    console.log(error.response.data); // Afficher les détails de l'erreur
  }
};

// Récupérer les utilisateurs lors de l'initialisation du composant
onMounted(() => {
  fetchUsers();
});
</script>

<style scoped></style>
