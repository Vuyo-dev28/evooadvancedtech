export function renderNavbar(activePage = 'home') {
  return `
    <!-- Navbar Start -->
    <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
        <a href="/" class="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
            <h2 class="m-0 text-primary">Evoo Advanced Tech</h2>
        </a>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0">
                <a href="/" class="nav-item nav-link ${activePage === 'home' ? 'active' : ''}">Home</a>
                <a href="/about" class="nav-item nav-link ${activePage === 'about' ? 'active' : ''}">About</a>
                <a href="/service" class="nav-item nav-link ${activePage === 'service' ? 'active' : ''}">Service</a>
                <a href="/project" class="nav-item nav-link ${activePage === 'project' ? 'active' : ''}">Project</a>
                <a href="/contact" class="nav-item nav-link ${activePage === 'contact' ? 'active' : ''}">Contact</a>
            </div>
            <a href="https://www.evoorenovations.co.za/" target="_blank" rel="noopener noreferrer" class="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">
              Our Renovations Department
            </a>
        </div>
    </nav>
    <!-- Navbar End -->
  `;
}
