// Dans auth-guard.js
export default function authGuard(to, from, next) {
  let token = localStorage.getItem("token");
  console.log(token);

  if (token) {
    next(); // Si token existe, continuez vers la route demandée
  } else {
    next("/"); // Sinon, redirigez vers la page d'accueil ou la page de login
  }
}
