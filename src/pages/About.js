import { renderTopbar } from '../components/Topbar.js';
import { renderNavbar } from '../components/Navbar.js';
import { renderFooter } from '../components/Footer.js';

export default {
  title: 'About Us - Professional Electrical Services',
  
  async render() {
    const app = document.getElementById('app');
    app.innerHTML = `
      ${renderTopbar()}
      ${renderNavbar('about')}

      <!-- Page Header Start -->
      <div class="container-fluid page-header py-5 mb-5">
        <div class="container py-5">
          <h1 class="display-3 text-white mb-3 animated slideInDown">About Us</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a class="text-white">Home</a></li>
              <li class="breadcrumb-item"><a class="text-white">Pages</a></li>
              <li class="breadcrumb-item text-white active" aria-current="page">About</li>
            </ol>
          </nav>
        </div>
      </div>
      <!-- Page Header End -->

      <!-- About Start -->
      <div class="container-fluid bg-light overflow-hidden my-5 px-lg-0 fadeInUp">
        <div class="container about px-lg-0">
          <div class="row g-0 mx-lg-0">
            <div class="col-12 about-text py-5 wow fadeIn" data-wow-delay="0.5s">
              <div class="p-lg-5 pe-lg-0">
                <h6 class="text-primary">About Us</h6>
                <h1 class="mb-4">Your Trusted Home Electrical Services Provider</h1>
                <p><strong>Evoo Advanced Technologies</strong> is a proudly South African electrical contracting company focused on looking after everyday homeowners first. From fixing small electrical issues in your lounge or kitchen to upgrading DB boards and wiring an extension, we specialise in reliable electrical solutions for houses, townhouses, apartments, and complexes.</p>
                <p>Many of our clients are busy families and working professionals who need an electrician they can trust in and around their homes. Our core expertise lies in electrical installations, repairs, and maintenance, with additional supporting services including solar and backup power, security systems, and automation where needed. Our mission is simple: to provide safe, neat, and professional electrical work that makes day-to-day living easier.</p>
                <h5 class="mt-4 fadeInUp">Our Approach</h5>
                <p>What sets us apart is our commitment to excellence at every stage — from consultation and design to installation and support. We take time to understand your unique needs, ensuring that every system we deliver is not just functional, but optimized for performance, efficiency, and long-term value.</p>
                <div class="row mt-4">
                  <div class="col-md-6">
                    <h5>Why Choose Us?</h5>
                    <ul class="list-unstyled">
                      <li><i class="fa fa-check-circle text-primary me-2"></i>Certified, experienced professionals</li>
                      <li><i class="fa fa-check-circle text-primary me-2"></i>Turnkey solutions from planning to execution</li>
                      <li><i class="fa fa-check-circle text-primary me-2"></i>Use of premium and durable materials</li>
                      <li><i class="fa fa-check-circle text-primary me-2"></i>Transparent pricing and clear communication</li>
                      <li><i class="fa fa-check-circle text-primary me-2"></i>Ongoing support & maintenance contracts</li>
                    </ul>
                  </div>
                  <div class="col-md-6">
                    <h5>Core Services</h5>
                    <ul class="list-unstyled">
                      <li><i class="fa fa-check-circle text-primary me-2"></i>Electrical Installation & Rewiring</li>
                      <li><i class="fa fa-check-circle text-primary me-2"></i>Electrical Repairs & Maintenance</li>
                      <li><i class="fa fa-check-circle text-primary me-2"></i>Circuit Breaker & Panel Installation</li>
                      <li><i class="fa fa-check-circle text-primary me-2"></i>Solar Power System Installation</li>
                      <li><i class="fa fa-check-circle text-primary me-2"></i>Battery Backup & Inverter Solutions</li>
                      <li><i class="fa fa-check-circle text-primary me-2"></i>Gate, Garage & Intercom Automation</li>
                      <li><i class="fa fa-check-circle text-primary me-2"></i>CCTV, Alarm & Access Control Systems</li>
                    </ul>
                  </div>
                </div>
                <h5 class="mt-5">Your Electrical Solutions Partner</h5>
                <p>Whether you need electrical repairs, new installations, electrical upgrades, solar systems, or security solutions, <strong>Evoo Advanced Technologies</strong> is your trusted electrical services partner. Join hundreds of satisfied clients who trust us for all their electrical needs.</p>
                <a href="/contact" class="btn btn-primary rounded-pill py-3 px-5 mt-4">Request a Free Consultation</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- About End -->

      <!-- Team Start -->
      <div class="container-xxl py-5">
        <div class="container">
          <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
            <h6 class="text-primary">Team Member</h6>
            <h1 class="mb-4">Experienced Team Members</h1>
          </div>
          <div class="row g-4">
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="team-item rounded overflow-hidden">
                <div class="d-flex">
                  <img class="team-img w-75" src="/img/p4.jpeg" alt="">
                  <div class="team-social w-25"></div>
                </div>
                <div class="p-4">
                  <h5>Richard Mandla Ndlovu</h5>
                  <span>CEO, and Technician</span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div class="team-item rounded overflow-hidden">
                <div class="d-flex">
                  <img class="team-img w-75" src="/img/p3.jpeg" alt="">
                  <div class="team-social w-25"></div>
                </div>
                <div class="p-4">
                  <h5>Bongani</h5>
                  <span>Technician</span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="team-item rounded overflow-hidden">
                <div class="d-flex">
                  <img class="team-img w-75" src="/img/p1.jpeg" alt="">
                  <div class="team-social w-25"></div>
                </div>
                <div class="p-4">
                  <h5>Hopewell</h5>
                  <span>Technician</span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="team-item rounded overflow-hidden">
                <div class="d-flex">
                  <img class="team-img w-75" src="/img/p2.jpeg" alt="">
                  <div class="team-social w-25"></div>
                </div>
                <div class="p-4">
                  <h5>Vincent</h5>
                  <span>Assistant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Team End -->

      ${renderFooter()}
    `;
  },
  
  init() {
    // Page-specific initialization
  }
};
