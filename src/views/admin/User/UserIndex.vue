<script setup></script>

<template>
  <div class="container">
    <h1 class="text-center">Liste des utilisateurs</h1>
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
    <table class="table table-striped mx-auto mt-5">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Mot de passe</th>
          <th scope="col">Rôle</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>test@admin.com</td>
          <td>**********</td>
          <td>Admin</td>
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
                <a class="dropdown-item" href="#">Suprimer l'utilisateur</a>
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>test@user.com</td>
          <td>**********</td>
          <td>Utilisateur</td>
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
                <a class="dropdown-item" href="#">Suprimer l'utilisateur</a>
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>test@user.com</td>
          <td>**********</td>
          <td>Utilisateur</td>
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
                <a class="dropdown-item" href="#">Suprimer l'utilisateur</a>
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>test@user.com</td>
          <td>**********</td>
          <td>Utilisateur</td>
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
                <a class="dropdown-item" href="#">Suprimer l'utilisateur</a>
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>test@user.com</td>
          <td>**********</td>
          <td>Utilisateur</td>
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
                <a class="dropdown-item" href="#">Suprimer l'utilisateur</a>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
