<script setup></script>

<template>
  <aside class="admin-sidebar p-4">
    <div class="admin-sidebar-head d-flex">
      <h2>Dashboard</h2>
      <!-- <i class="bi bi-grid"></i> -->
    </div>
    <nav class="admin-sidebar-nav mt-4">
      <ul>
        <li class="nav-item py-1 cci-nav-item">
          <a href="" class="nav-link"
            ><i class="bi bi-speedometer2 mx-2"></i>Accueil Admin
          </a>
        </li>
        <li class="nav-item dropdown py-1 cci-nav-item">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="bi bi-person mx-2"></i>
            Utilisateurs
          </a>
          <ul class="dropdown-menu">
            <router-link class="router-link" to="/users/index">
              <li>
                <a class="dropdown-item" href="#">Liste des utilisateurs</a>
              </li>
            </router-link>
            <li>
              <a class="dropdown-item" href="#">Suprimer un utilisateur</a>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown py-1 cci-nav-item">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="bi bi-person mx-2"></i>
            QCM
          </a>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">Liste des QCM</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Créer un QCM</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Modifier un QCM</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Suprimer un QCM</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped></style>
