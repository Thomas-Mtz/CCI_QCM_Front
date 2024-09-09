<script setup></script>

<template>
  <footer class="w-100 cci-footer text-center p-5">
    <div class="container">
      <!-- Logo et lien vers la page d'accueil -->
      <router-link class="router-link" to="/">
        <a class="navbar-brand">
          <img src="/logo/cci_formation.png" alt="CCI Formation" />
        </a>
      </router-link>

      <!-- Contenu principal du footer -->
      <div class="content-footer mt-4">
        <!-- Texte explicatif -->
        <div class="content-footer-text">
          <p class="me-5">
            Expert de la formation depuis 50 ans. Grâce à notre expertise et à
            notre vaste gamme de parcours de formations, nous accompagnons les
            entreprises et les individus dans leur recherche de compétences
            qualifiées. Centre de formation professionnelle depuis 1966, nous
            disposons de 3 sites à Lyon, Saint-Etienne et Roanne.
          </p>
        </div>

        <!-- Navigation dans le footer -->
        <div class="content-footer-nav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <span>A propos de nous</span>
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="#">Notre pédagogie et innovation</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Nos valeurs</a>
                </li>
              </ul>
            </li>
            <li class="nav-item me-4">
              <span>Nos services</span>
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="#">Nos formations</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Nos offres</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Nos solutions d'entreprises</a>
                </li>
              </ul>
            </li>
            <li class="nav-item me-4">
              <span>En savoir plus</span>
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="#">Nos actualités</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Nos ressources</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Nos témoignages</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <!-- Section contact -->
        <div class="content-footer-contact">
          <div>
            <a href="" class="nav-link">
              <i class="bi bi-arrow-up-short"></i> Haut de la page
            </a>
          </div>
          <div>
            <a href="" class="nav-link cci-phone">
              <i class="bi bi-telephone-fill"></i> 04 72 53 88 00
            </a>
          </div>
        </div>
      </div>

      <!-- Bas de page du footer -->
      <div class="bottom-footer mt-4">
        <ul class="navbar-nav">
          <li>
            <a href="">
              <i class="bi bi-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i class="bi bi-facebook"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i class="bi bi-youtube"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contactez-nous</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Accédez à nos centres de formation</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Mentions légales</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Politique de protection des données</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Plan du site</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Paramétrage des cookies</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
