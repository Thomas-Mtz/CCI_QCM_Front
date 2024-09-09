<script setup></script>

<template>
  <header>
    <nav class="navbar bg-white p-0">
      <div class="container">
        <div>
          <router-link class="router-link" to="/">
            <a class="navbar-brand">
              <img src="/logo/cci_formation.png" alt="CCI Formation" />
            </a>
          </router-link>
        </div>
        <div class="cci-nav">
          <router-link class="router-link" to="/qcm">
            <div class="cci-nav-item ms-3">
              <a class="">Rechercher un QCM</a>
            </div>
          </router-link>
          <router-link class="router-link" to="/profil">
            <div class="cci-nav-item ms-3">
              <a class="">Mon profil</a>
            </div>
          </router-link>
          <router-link class="router-link" to="/contact">
            <div class="cci-nav-item ms-3">
              <a class="">Contactez-nous</a>
            </div>
          </router-link>
          <router-link class="router-link" to="/dashboard">
            <div class="cci-nav-item ms-3">
              <a class="">Admin</a>
            </div>
          </router-link>
          <router-link class="router-link" to="/login">
            <div class="cci-nav-item ms-3">
              <a class="">Connectez-vous</a>
            </div>
          </router-link>
          <router-link class="router-link" to="/inscription">
            <div class="">
              <a class="cci-primary-btn ms-3">Créez votre compte</a>
            </div>
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
