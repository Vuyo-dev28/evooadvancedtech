import { renderTopbar } from '../components/Topbar.js';
import { renderNavbar } from '../components/Navbar.js';
import { renderFooter } from '../components/Footer.js';

export default {
  title: '404 - Page Not Found',
  
  async render() {
    const app = document.getElementById('app');
    app.innerHTML = `
      ${renderTopbar()}
      ${renderNavbar()}

      <!-- 404 Start -->
      <div class="container-xxl py-5">
        <div class="container text-center">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <h1 class="display-1">404</h1>
              <h2 class="mb-4">Page Not Found</h2>
              <p class="mb-4">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
              <a href="/" class="btn btn-primary rounded-pill py-3 px-5">Go Back To Home</a>
            </div>
          </div>
        </div>
      </div>
      <!-- 404 End -->

      ${renderFooter()}
    `;
  },
  
  init() {
    // Page-specific initialization
  }
};
