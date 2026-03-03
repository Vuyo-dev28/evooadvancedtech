import router from './router.js';
import { renderSpinner } from './components/Spinner.js';
import { initPageScripts } from './utils/init.js';

// Import pages
import HomePage from './pages/Home.js';
import AboutPage from './pages/About.js';
import ServicePage from './pages/Service.js';
import ProjectPage from './pages/Project.js';
import ContactPage from './pages/Contact.js';
import NotFoundPage from './pages/NotFound.js';

// Load external libraries dynamically
function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

// Load required scripts
Promise.all([
  loadScript('https://code.jquery.com/jquery-3.4.1.min.js'),
  loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js'),
  loadScript('/lib/wow/wow.min.js'),
  loadScript('/lib/easing/easing.min.js'),
  loadScript('/lib/waypoints/waypoints.min.js'),
  loadScript('/lib/counterup/counterup.min.js'),
  loadScript('/lib/owlcarousel/owl.carousel.min.js'),
  loadScript('/lib/isotope/isotope.pkgd.min.js'),
  loadScript('/lib/lightbox/js/lightbox.min.js')
]).catch(err => console.error('Error loading scripts:', err));

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  // Render spinner
  const app = document.getElementById('app');
  if (app) {
    app.innerHTML = renderSpinner();
  }

  // Register routes
  router.addRoute('/', HomePage);
  router.addRoute('/about', AboutPage);
  router.addRoute('/service', ServicePage);
  router.addRoute('/project', ProjectPage);
  router.addRoute('/contact', ContactPage);
  router.addRoute('/404', NotFoundPage);

  // Initialize router
  router.init();
});

// Re-initialize scripts after route changes
router.onRouteChange = () => {
  setTimeout(() => {
    initPageScripts();
  }, 100);
};

export default router;
