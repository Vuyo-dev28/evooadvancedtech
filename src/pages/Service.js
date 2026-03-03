import { renderTopbar } from '../components/Topbar.js';
import { renderNavbar } from '../components/Navbar.js';
import { renderFooter } from '../components/Footer.js';

export default {
  title: 'Electrical Services - Professional Electrician Services',
  
  async render() {
    const app = document.getElementById('app');
    app.innerHTML = `
      ${renderTopbar()}
      ${renderNavbar('service')}

      <!-- Page Header Start -->
      <div class="container-fluid page-header py-5 mb-5">
        <div class="container py-5">
          <h1 class="display-3 text-white mb-3 animated slideInDown">Services</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a class="text-white">Home</a></li>
              <li class="breadcrumb-item"><a class="text-white">Pages</a></li>
              <li class="breadcrumb-item text-white active" aria-current="page">Services</li>
            </ol>
          </nav>
        </div>
      </div>
      <!-- Page Header End -->

      <!-- Service Start -->
      <div class="container-xxl py-5">
        <div class="container">
          <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
            <h6 class="text-primary">Our Services</h6>
            <h1 class="mb-4">Day-to-Day Electrical Services for Homeowners</h1>
          </div>
          <div class="row g-4">
            <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
              <div class="service-item rounded overflow-hidden">
                <img class="img-fluid_serv" src="/img/6.JPEG" alt="">
                <div class="position-relative p-4 pt-0">
                  <div class="service-icon">
                    <i class="fa fa-plug fa-3x"></i>
                  </div>
                  <h4 class="mb-3">Home Electrical Systems</h4>
                  <p>General electrical work for your home — new plugs and lights, fault finding, DB board work, and everyday repairs to keep your home safe and powered.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
              <div class="service-item rounded overflow-hidden">
                <img class="img-fluid_serv" src="/img/1.jpeg" alt="Solar and backup power supporting electrical work">
                <div class="position-relative p-4 pt-0">
                  <div class="service-icon">
                    <i class="fa fa-solar-panel fa-3x"></i>
                  </div>
                  <h4 class="mb-3">Solar & Backup Power</h4>
                  <p>Supporting our core electrical work with reliable backup and solar power systems designed around your electrical needs.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
              <div class="service-item rounded overflow-hidden">
                <img class="img-fluid_serv" src="/img/gate2.jpg" alt="">
                <div class="position-relative p-4 pt-0">
                  <div class="service-icon">
                    <i class="fa fa-motor fa-3x"></i>
                  </div>
                  <h4 class="mb-3">Gate Motors</h4>
                  <p>New gate motor installations and repairs for homes and complexes, so you can come and go safely and conveniently every day.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
              <div class="service-item rounded overflow-hidden">
                <img class="img-fluid_serv" src="/img/cctv2.jpg" alt="">
                <div class="position-relative p-4 pt-0">
                  <div class="service-icon">
                    <i class="fa fa-police fa-3x"></i>
                  </div>
                  <h4 class="mb-3">CCTV Cameras</h4>
                  <p>Camera systems tailored for typical homes — entrances, garages, and yards — with clean cable routing and clear monitoring.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
              <div class="service-item rounded overflow-hidden">
                <img class="img-fluid_serv" src="/img/alarm.jpg" alt="">
                <div class="position-relative p-4 pt-0">
                  <div class="service-icon">
                    <i class="fa fa-alarm fa-3x"></i>
                  </div>
                  <h4 class="mb-3">Alarm Systems</h4>
                  <p>Alarm installations and upgrades designed around how you and your family use your home every day.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Service End -->

      <!-- Feature Start -->
      <div class="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div class="container feature px-lg-0">
          <div class="row g-0 mx-lg-0">
            <div class="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.1s">
              <div class="p-lg-5 ps-lg-0">
                <h6 class="text-primary">Why Choose Us!</h6>
                <h1 class="mb-4">Trusted Electrical Experts for Commercial & Residential Projects</h1>
                <p class="mb-4 pb-2">Choosing the right electrical contractor is crucial — and that's why we go beyond standard installations. We provide fully customized, end-to-end electrical solutions designed to deliver performance, reliability, and long-term value. Our certified electricians ensure every project meets the highest safety and quality standards.</p>
                <p class="mb-4 pb-2">Whether you need electrical repairs, new installations, electrical upgrades, solar systems, or security solutions, our expert electrical team ensures that each project is completed with precision, professionalism, and a deep respect for your time and investment.</p>
                <div class="row g-4">
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <div class="btn-lg-square bg-primary rounded-circle">
                        <i class="fa fa-check text-white"></i>
                      </div>
                      <div class="ms-4">
                        <p class="mb-0">Reliable</p>
                        <h5 class="mb-0">Quality Services</h5>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <div class="btn-lg-square bg-primary rounded-circle">
                        <i class="fa fa-user-check text-white"></i>
                      </div>
                      <div class="ms-4">
                        <p class="mb-0">Qualified</p>
                        <h5 class="mb-0">Professionals</h5>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <div class="btn-lg-square bg-primary rounded-circle">
                        <i class="fa fa-lightbulb text-white"></i>
                      </div>
                      <div class="ms-4">
                        <p class="mb-0">Tailored</p>
                        <h5 class="mb-0">Innovative Solutions</h5>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <div class="btn-lg-square bg-primary rounded-circle">
                        <i class="fa fa-drafting-compass text-white"></i>
                      </div>
                      <div class="ms-4">
                        <p class="mb-0">Free</p>
                        <h5 class="mb-0">On-Site Consultation</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="/contact" class="btn btn-primary rounded-pill py-3 px-5 mt-4">Get Started Today</a>
              </div>
            </div>
            <div class="col-lg-6 pe-lg-0 wow fadeIn" data-wow-delay="0.5s" style="min-height: 400px;">
              <div class="position-relative h-100">
                <img class="position-absolute img-fluid w-100 h-100" src="/img/app/banner1.webp" style="object-fit: cover;" alt="Solar Panels and Electrical Solutions">
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Feature End -->

      <!-- Gallery Start -->
      <div class="container-xxl py-5">
        <div class="container">
          <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
            <h6 class="text-primary">Project Showcase</h6>
            <h1 class="mb-4">Our Work in Action</h1>
          </div>
          <div class="row g-4">
            <div class="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="gallery-item rounded overflow-hidden">
                <img class="img-fluid" src="/img/app/p2.png" alt="Electrical Project">
                <div class="gallery-overlay">
                  <a href="/img/app/p2.png" data-lightbox="service-gallery" class="btn btn-primary rounded-circle"><i class="fa fa-eye"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.2s">
              <div class="gallery-item rounded overflow-hidden">
                <img class="img-fluid" src="/img/app/p21.png" alt="Solar Project">
                <div class="gallery-overlay">
                  <a href="/img/app/p21.png" data-lightbox="service-gallery" class="btn btn-primary rounded-circle"><i class="fa fa-eye"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
              <div class="gallery-item rounded overflow-hidden">
                <img class="img-fluid" src="/img/app/p41.png" alt="Electrical Installation">
                <div class="gallery-overlay">
                  <a href="/img/app/p41.png" data-lightbox="service-gallery" class="btn btn-primary rounded-circle"><i class="fa fa-eye"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
              <div class="gallery-item rounded overflow-hidden">
                <img class="img-fluid" src="/img/app/p43.png" alt="Project Work">
                <div class="gallery-overlay">
                  <a href="/img/app/p43.png" data-lightbox="service-gallery" class="btn btn-primary rounded-circle"><i class="fa fa-eye"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="gallery-item rounded overflow-hidden">
                <img class="img-fluid" src="/img/app/p77.png" alt="Electrical Systems">
                <div class="gallery-overlay">
                  <a href="/img/app/p77.png" data-lightbox="service-gallery" class="btn btn-primary rounded-circle"><i class="fa fa-eye"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.6s">
              <div class="gallery-item rounded overflow-hidden">
                <img class="img-fluid" src="/img/app/p55.png" alt="Solar Installation">
                <div class="gallery-overlay">
                  <a href="/img/app/p55.png" data-lightbox="service-gallery" class="btn btn-primary rounded-circle"><i class="fa fa-eye"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
              <div class="gallery-item rounded overflow-hidden">
                <img class="img-fluid" src="/img/app/p1.png" alt="Electrical Work">
                <div class="gallery-overlay">
                  <a href="/img/app/p1.png" data-lightbox="service-gallery" class="btn btn-primary rounded-circle"><i class="fa fa-eye"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.8s">
              <div class="gallery-item rounded overflow-hidden">
                <img class="img-fluid" src="/img/app/p15.png" alt="Project Showcase">
                <div class="gallery-overlay">
                  <a href="/img/app/p15.png" data-lightbox="service-gallery" class="btn btn-primary rounded-circle"><i class="fa fa-eye"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Gallery End -->

      ${renderFooter()}
    `;
  },
  
  init() {
    // Page-specific initialization
  }
};
