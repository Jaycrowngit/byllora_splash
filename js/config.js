/**
 * Byllora Webapp Configuration & Route Endpoints
 */
const BYLLORA_CONFIG = {
  WEBAPP_LOGIN_URL: 'https://app.byllora.com/signin',
  WEBAPP_SIGNUP_URL: 'https://app.byllora.com/signup',
};

// Bind all auth links on DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
  const loginLinks = document.querySelectorAll('.js-login-link');
  const signupLinks = document.querySelectorAll('.js-signup-link');

  loginLinks.forEach(link => {
    link.href = BYLLORA_CONFIG.WEBAPP_LOGIN_URL;
  });

  signupLinks.forEach(link => {
    link.href = BYLLORA_CONFIG.WEBAPP_SIGNUP_URL;
  });
});
