// Simple client-side router
class Router {
  constructor() {
    this.routes = {};
    this.currentRoute = null;
    this.onRouteChange = null;
  }

  addRoute(path, handler) {
    this.routes[path] = handler;
  }

  async navigate(path) {
    // Normalize path
    if (path === '' || path === '/index.html') {
      path = '/';
    }
    
    const handler = this.routes[path] || this.routes['/404'];
    
    if (handler) {
      // Update URL without page reload (only if different)
      if (this.currentRoute !== path) {
        window.history.pushState({ path }, '', path);
      }
      
      // Update page title if needed
      document.title = handler.title || 'Evoo Advanced Technologies';
      
      // Clear current content
      const app = document.getElementById('app');
      if (app) {
        app.innerHTML = '';
      }
      
      // Load new page
      await handler.render();
      
      // Initialize page-specific scripts
      if (handler.init) {
        handler.init();
      }
      
      // Call route change callback
      if (this.onRouteChange) {
        this.onRouteChange();
      }
      
      this.currentRoute = path;
    }
  }

  init() {
    // Handle initial load
    const path = window.location.pathname || '/';
    this.navigate(path);

    // Handle browser back/forward
    window.addEventListener('popstate', (e) => {
      const path = window.location.pathname || '/';
      this.navigate(path);
    });

    // Handle link clicks
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href]');
      if (link && link.href.startsWith(window.location.origin)) {
        e.preventDefault();
        const path = new URL(link.href).pathname;
        this.navigate(path);
      }
    });
  }
}

export default new Router();
