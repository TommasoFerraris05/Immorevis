/* Configurazione pubblica: non inserire segreti o chiavi private. */
window.IMMOREVIS_CONFIG = Object.freeze({
  email: 'info@immorevis.ch',
  phone: '+41 76 399 92 44',
  phoneConfirmed: false,
  formEndpoint: '', // https://formspree.io/f/ID_REALE
  privacyReviewed: false, // true solo dopo revisione dell'informativa
  uploadsEnabled: false, // richiede un piano e un endpoint compatibili
  maxFileMB: 5,
  maxTotalMB: 20,
  siteUrl: '', // URL pubblico completo, con eventuale /nome-repo/
  publicWorksEnabled: false // nessun portfolio pubblico generato da commesse storiche
});
