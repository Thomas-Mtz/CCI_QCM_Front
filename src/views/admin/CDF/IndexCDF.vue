<template>
  <div class="container">
    <h1 class="text-center">Liste des Centres de Formation</h1>

    <!-- Tableau des CDF -->
    <table class="table table-striped mx-auto mt-5">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nom</th>
          <th scope="col">Ville</th>
          <th scope="col">Code Postal</th>
          <th scope="col">Région</th>
          <th scope="col">Adresse</th>
          <th scope="col">Téléphone</th>
          <th scope="col">Matricule</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="trainingCenter in trainingCenters" :key="trainingCenter.id">
          <th scope="row">{{ trainingCenter.id }}</th>
          <td>{{ trainingCenter.name }}</td>
          <td>{{ trainingCenter.city }}</td>
          <td>{{ trainingCenter.postcode }}</td>
          <td>{{ trainingCenter.region }}</td>
          <td>{{ trainingCenter.address }}</td>
          <td>{{ trainingCenter.phone_number }}</td>
          <td>{{ trainingCenter.matricule }}</td>
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
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  @click.prevent="deleteTrainingCenter(trainingCenter.id)"
                  >Supprimer le CDF</a
                >
              </li>
              <!-- Modifier le CDF en ouvrant le modal -->
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  @click.prevent="openEditModal(trainingCenter)"
                  data-bs-toggle="modal"
                  data-bs-target="#editTrainingCenterModal"
                  >Modifier le CDF</a
                >
              </li>
              <!-- ___________________________________ -->
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- ________________________ -->

    <!-- Formulaire pour rajouter un centre de formation -->
    <div class="mt-5">
      <h2>Créer un centre de formation</h2>
      <form @submit.prevent="createTrainingCenter">
        <div class="mb-3">
          <label for="newTrainingCenterName" class="form-label"
            >Nom du CDF</label
          >
          <input
            v-model="newTrainingCenterName"
            type="text"
            class="form-control"
            id="newTrainingCenterName"
            required
          />
        </div>
        <div class="mb-3">
          <label for="newTrainingCenterCity" class="form-label"
            >Ville du CDF</label
          >
          <input
            v-model="newTrainingCenterCity"
            type="text"
            class="form-control"
            id="newTrainingCenterCity"
            required
          />
        </div>
        <div class="mb-3">
          <label for="newTrainingCenterPostCode" class="form-label"
            >Code postal du CDF</label
          >
          <input
            v-model="newTrainingCenterPostCode"
            type="text"
            class="form-control"
            id="newTrainingCenterPostCode"
            required
          />
        </div>
        <div class="mb-3">
          <label for="newTrainingCenterRegion" class="form-label"
            >Région du CDF</label
          >
          <input
            v-model="newTrainingCenterRegion"
            type="text"
            class="form-control"
            id="newTrainingCenterRegion"
            required
          />
        </div>
        <div class="mb-3">
          <label for="newTrainingCenterAddress" class="form-label"
            >Adresse du CDF</label
          >
          <input
            v-model="newTrainingCenterAddress"
            type="text"
            class="form-control"
            id="newTrainingCenterAddress"
            required
          />
        </div>
        <div class="mb-3">
          <label for="newTrainingCenterPhoneNumber" class="form-label"
            >Téléphone du CDF</label
          >
          <input
            v-model="newTrainingCenterPhoneNumber"
            type="text"
            class="form-control"
            id="newTrainingCenterPhoneNumber"
            required
          />
        </div>
        <div class="mb-3">
          <label for="newTrainingCenterMatricule" class="form-label"
            >Matricule du CDF</label
          >
          <input
            v-model="newTrainingCenterMatricule"
            type="text"
            class="form-control"
            id="newTrainingCenterMatricule"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary">Envoyer</button>
      </form>
    </div>
    <!-- ________________________________ -->

    <!-- Modal pour modifier un CDF -->
    <div class="modal fade" tabindex="-1" id="editTrainingCenterModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editTrainingCenterModalLabel">
              Modifier le CDF
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="updateTrainingCenter">
              <div class="mb-3">
                <label for="editTrainingCenterName" class="form-label"
                  >Nom du CDF</label
                >
                <input
                  v-model="editTrainingCenterName"
                  type="text"
                  class="form-control"
                  id="editTrainingCenterName"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="editTrainingCenterCity" class="form-label"
                  >Ville du CDF</label
                >
                <input
                  v-model="editTrainingCenterCity"
                  type="text"
                  class="form-control"
                  id="editTrainingCenterCity"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="editTrainingCenterPostCode" class="form-label"
                  >Code postal du CDF</label
                >
                <input
                  v-model="editTrainingCenterPostCode"
                  type="text"
                  class="form-control"
                  id="editTrainingCenterPostCode"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="editTrainingCenterRegion" class="form-label"
                  >Région du CDF</label
                >
                <input
                  v-model="editTrainingCenterRegion"
                  type="text"
                  class="form-control"
                  id="editTrainingCenterRegion"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="editTrainingCenterAddress" class="form-label"
                  >Adresse du CDF</label
                >
                <input
                  v-model="editTrainingCenterAddress"
                  type="text"
                  class="form-control"
                  id="editTrainingCenterAddress"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="editTrainingCenterPhoneNumber" class="form-label"
                  >Téléphone du CDF</label
                >
                <input
                  v-model="editTrainingCenterPhoneNumber"
                  type="text"
                  class="form-control"
                  id="editTrainingCenterPhoneNumber"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="editTrainingCenterMatricule" class="form-label"
                  >Matricule du CDF</label
                >
                <input
                  v-model="editTrainingCenterMatricule"
                  type="text"
                  class="form-control"
                  id="editTrainingCenterMatricule"
                  required
                />
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
const trainingCenters = ref([]);
const newTrainingCenterName = ref("");
const newTrainingCenterCity = ref("");
const newTrainingCenterPostCode = ref("");
const newTrainingCenterRegion = ref("");
const newTrainingCenterAddress = ref("");
const newTrainingCenterPhoneNumber = ref("");
const newTrainingCenterMatricule = ref("");

// Variables pour l'édition du centre
const editTrainingCenterId = ref(null);
const editTrainingCenterName = ref("");
const editTrainingCenterCity = ref("");
const editTrainingCenterPostCode = ref("");
const editTrainingCenterRegion = ref("");
const editTrainingCenterAddress = ref("");
const editTrainingCenterPhoneNumber = ref("");
const editTrainingCenterMatricule = ref("");

// Fonction pour récupérer les centres de formation
const fetchTrainingCenters = async () => {
  try {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/training_centers"
    );
    trainingCenters.value = response.data["hydra:member"];
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des centres de formation:",
      error
    );
  }
};

// Fonction pour créer un nouveau centre
const createTrainingCenter = async () => {
  try {
    await axios.post("http://127.0.0.1:8000/api/training_centers", {
      name: newTrainingCenterName.value,
      city: newTrainingCenterCity.value,
      postcode: newTrainingCenterPostCode.value,
      region: newTrainingCenterRegion.value,
      address: newTrainingCenterAddress.value,
      phone_number: newTrainingCenterPhoneNumber.value,
      matricule: newTrainingCenterMatricule.value,
    });
    // Réinitialise les champs du formulaire après ajout
    newTrainingCenterName.value = "";
    newTrainingCenterCity.value = "";
    newTrainingCenterPostCode.value = "";
    newTrainingCenterRegion.value = "";
    newTrainingCenterAddress.value = "";
    newTrainingCenterPhoneNumber.value = "";
    newTrainingCenterMatricule.value = "";
    // Rafraîchir la liste
    fetchTrainingCenters();
  } catch (error) {
    console.error("Erreur lors de la création du centre :", error);
    console.error("Erreur lors de la création :", error.response.data);
    console.log({
      name: newTrainingCenterName.value,
      city: newTrainingCenterCity.value,
      postcode: newTrainingCenterPostCode.value,
      region: newTrainingCenterRegion.value,
      address: newTrainingCenterAddress.value,
      phone_number: newTrainingCenterPhoneNumber.value,
      matricule: newTrainingCenterMatricule.value,
    });
    console.log(typeof newTrainingCenterPhoneNumber.value); // Devrait être 'string'
  }
};

// Fonction pour supprimer un centre de formation
const deleteTrainingCenter = async (trainingCenterId) => {
  if (confirm("Êtes-vous sûr de vouloir supprimer ce centre de formation ?")) {
    try {
      await axios.delete(
        `http://127.0.0.1:8000/api/training_centers/${trainingCenterId}`
      );
      fetchTrainingCenters();
    } catch (error) {
      console.error("Erreur lors de la suppression du centre :", error);
    }
  }
};

// Fonction pour ouvrir le modal et charger les informations à modifier
const openEditModal = (trainingCenter) => {
  editTrainingCenterId.value = trainingCenter.id;
  // Ajoute une vérification pour être sûr qu'il y a bien un ID valide
  if (!editTrainingCenterId.value) {
    console.error("L'ID du centre de formation est invalide.");
    return;
  }
  editTrainingCenterName.value = trainingCenter.name;
  editTrainingCenterCity.value = trainingCenter.city;
  editTrainingCenterPostCode.value = trainingCenter.postcode;
  editTrainingCenterRegion.value = trainingCenter.region;
  editTrainingCenterAddress.value = trainingCenter.address;
  editTrainingCenterPhoneNumber.value = trainingCenter.phone_number;
  editTrainingCenterMatricule.value = trainingCenter.matricule;
};

// Fonction pour modifier un centre de formation
const updateTrainingCenter = async () => {
  try {
    const data = {
      name: editTrainingCenterName.value,
      city: editTrainingCenterCity.value,
      postcode: editTrainingCenterPostCode.value,
      region: editTrainingCenterRegion.value,
      address: editTrainingCenterAddress.value,
      phone_number: editTrainingCenterPhoneNumber.value,
      matricule: editTrainingCenterMatricule.value,
    };

    await axios.patch(
      `http://127.0.0.1:8000/api/training_centers/${editTrainingCenterId.value}`,
      data,
      {
        headers: {
          "Content-Type": "application/merge-patch+json",
        },
      }
    );

    // Rafraîchir la liste des centres après mise à jour
    fetchTrainingCenters();
  } catch (error) {
    console.error("Erreur lors de la modification du centre :", error);
  }
};

// Récupérer les centres à l'initialisation
onMounted(() => {
  fetchTrainingCenters();
});
</script>

<style scoped></style>
