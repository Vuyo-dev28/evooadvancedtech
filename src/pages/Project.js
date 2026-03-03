import { renderTopbar } from '../components/Topbar.js';
import { renderNavbar } from '../components/Navbar.js';
import { renderFooter } from '../components/Footer.js';

export default {
  title: 'Our Projects - Electrical Services Portfolio',
  
  async render() {
    const app = document.getElementById('app');
    app.innerHTML = `
      ${renderTopbar()}
      ${renderNavbar('project')}

      <!-- Page Header Start -->
      <div class="container-fluid page-header py-5 mb-5">
        <div class="container py-5">
          <h1 class="display-3 text-white mb-3 animated slideInDown">Projects</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a class="text-white">Home</a></li>
              <li class="breadcrumb-item"><a class="text-white">Pages</a></li>
              <li class="breadcrumb-item text-white active" aria-current="page">Projects</li>
            </ol>
          </nav>
        </div>
      </div>
      <!-- Page Header End -->

      <!-- Projects Start -->
      <div class="container-xxl py-5">
        <div class="container">
          <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
            <h6 class="text-primary">Our Projects</h6>
            <h1 class="mb-4">View Our Latest Projects</h1>
          </div>
          <div class="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
            <div class="col-12 text-center">
              <ul class="list-inline mb-5" id="portfolio-flters">
                <li class="mx-2 active" data-filter="*">All</li>
                <li class="mx-2" data-filter=".second">Electrical Projects</li>
                <li class="mx-2" data-filter=".first">Solar & Backup (Supporting)</li>
              </ul>
            </div>
          </div>
          <div class="row g-4 portfolio-container wow fadeInUp" data-wow-delay="0.5s">
            <div class="col-lg-4 col-md-6 portfolio-item second">
              <div class="portfolio-img rounded overflow-hidden">
                <img class="img-fluid" src="/img/app/p25.png" alt="">
                <div class="portfolio-btn">
                  <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href="/img/app/p25.png" data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
                  <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href=""><i class="fa fa-link"></i></a>
                </div>
              </div>
              <div class="pt-3">
                <p class="text-primary mb-0">Electric Systems</p>
                <hr class="text-primary w-25 my-2">
              </div>
            </div>
            <div class="col-lg-4 col-md-6 portfolio-item second">
              <div class="portfolio-img rounded overflow-hidden">
                <img class="img-fluid" src="/img/app/p58.png" alt="">
                <div class="portfolio-btn">
                  <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href="/img/app/p58.png" data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
                  <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href=""><i class="fa fa-link"></i></a>
                </div>
              </div>
              <div class="pt-3">
                <p class="text-primary mb-0">Electric Systems</p>
                <hr class="text-primary w-25 my-2">
              </div>
            </div>
            <div class="col-lg-4 col-md-6 portfolio-item second">
              <div class="portfolio-img rounded overflow-hidden">
                <img class="img-fluid" src="/img/app/p21.png" alt="">
                <div class="portfolio-btn">
                  <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href="/img/app/p21.png" data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
                  <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href=""><i class="fa fa-link"></i></a>
                </div>
              </div>
              <div class="pt-3">
                <p class="text-primary mb-0">Electric Systems</p>
                <hr class="text-primary w-25 my-2">
              </div>
            </div>
            <div class="col-lg-4 col-md-6 portfolio-item second">
              <div class="portfolio-img rounded overflow-hidden">
                <img class="img-fluid" src="/img/app/p19.png" alt="">
                <div class="portfolio-btn">
                  <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href="/img/app/p19.png" data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
                  <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href=""><i class="fa fa-link"></i></a>
                </div>
              </div>
              <div class="pt-3">
                <p class="text-primary mb-0">Electric Systems</p>
                <hr class="text-primary w-25 my-2">
              </div>
            </div>
            <div class="col-lg-4 col-md-6 portfolio-item second">
              <div class="portfolio-img rounded overflow-hidden">
                <img class="img-fluid" src="/img/app/p28.png" alt="">
                <div class="portfolio-btn">
                  <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href="/img/app/p28.png" data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
                  <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href=""><i class="fa fa-link"></i></a>
                </div>
              </div>
              <div class="pt-3">
                <p class="text-primary mb-0">Electric Systems</p>
                <hr class="text-primary w-25 my-2">
              </div>
            </div>
            <div class="col-lg-4 col-md-6 portfolio-item second">
              <div class="portfolio-img rounded overflow-hidden">
                <img class="img-fluid" src="/img/app/p38.png" alt="">
                <div class="portfolio-btn">
                  <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href="/img/app/p38.png" data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
                  <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href=""><i class="fa fa-link"></i></a>
                </div>
              </div>
              <div class="pt-3">
                <p class="text-primary mb-0">Electric Systems</p>
                <hr class="text-primary w-25 my-2">
              </div>
            </div>
            <div class="col-lg-4 col-md-6 portfolio-item first">
              <div class="portfolio-img rounded overflow-hidden">
                <img class="img-fluid" src="/img/app/banner2.png" alt="">
                <div class="portfolio-btn">
                  <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href="/img/app/banner2.png" data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
                  <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href=""><i class="fa fa-link"></i></a>
                </div>
              </div>
              <div class="pt-3">
                <p class="text-primary mb-0">Solar Panels</p>
                <hr class="text-primary w-25 my-2">
              </div>
            </div>
            <div class="col-lg-4 col-md-6 portfolio-item first">
              <div class="portfolio-img rounded overflow-hidden">
                <img class="img-fluid" src="/img/app/banner1.webp" alt="">
                <div class="portfolio-btn">
                  <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href="/img/app/banner1.webp" data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
                  <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href=""><i class="fa fa-link"></i></a>
                </div>
              </div>
              <div class="pt-3">
                <p class="text-primary mb-0">Solar Panels</p>
                <hr class="text-primary w-25 my-2">
              </div>
            </div>
            <div class="col-lg-4 col-md-6 portfolio-item first">
              <div class="portfolio-img rounded overflow-hidden">
                <img class="img-fluid" src="/img/app/p40.png" alt="">
                <div class="portfolio-btn">
                  <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href="/img/app/p40.png" data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
                  <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href=""><i class="fa fa-link"></i></a>
                </div>
              </div>
              <div class="pt-3">
                <p class="text-primary mb-0">Solar Panels</p>
                <hr class="text-primary w-25 my-2">
              </div>
            </div>
            <div class="col-lg-4 col-md-6 portfolio-item first">
              <div class="portfolio-img rounded overflow-hidden">
                <img class="img-fluid" src="/img/app/p30.png" alt="">
                <div class="portfolio-btn">
                  <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href="/img/app/p30.png" data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
                  <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href=""><i class="fa fa-link"></i></a>
                </div>
              </div>
              <div class="pt-3">
                <p class="text-primary mb-0">Solar Panels</p>
                <hr class="text-primary w-25 my-2">
              </div>
            </div>
            <div class="col-lg-4 col-md-6 portfolio-item first">
              <div class="portfolio-img rounded overflow-hidden">
                <img class="img-fluid" src="/img/app/p20.png" alt="">
                <div class="portfolio-btn">
                  <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href="/img/app/p20.png" data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
                  <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href=""><i class="fa fa-link"></i></a>
                </div>
              </div>
              <div class="pt-3">
                <p class="text-primary mb-0">Solar Panels</p>
                <hr class="text-primary w-25 my-2">
              </div>
            </div>
            <div class="col-lg-4 col-md-6 portfolio-item first">
              <div class="portfolio-img rounded overflow-hidden">
                <img class="img-fluid" src="/img/app/p10.png" alt="">
                <div class="portfolio-btn">
                  <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href="/img/app/p10.png" data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
                  <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href=""><i class="fa fa-link"></i></a>
                </div>
              </div>
              <div class="pt-3">
                <p class="text-primary mb-0">Solar Panels</p>
                <hr class="text-primary w-25 my-2">
              </div>
            </div>
            <div class="col-lg-4 col-md-6 portfolio-item second">
              <div class="portfolio-img rounded overflow-hidden">
                <img class="img-fluid" src="/img/app/p1.png" alt="">
                <div class="portfolio-btn">
                  <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href="/img/app/p1.png" data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
                  <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href=""><i class="fa fa-link"></i></a>
                </div>
              </div>
              <div class="pt-3">
                <p class="text-primary mb-0">Electric Systems</p>
                <hr class="text-primary w-25 my-2">
              </div>
            </div>
            <div class="col-lg-4 col-md-6 portfolio-item second">
              <div class="portfolio-img rounded overflow-hidden">
                <img class="img-fluid" src="/img/app/p6.png" alt="">
                <div class="portfolio-btn">
                  <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href="/img/app/p6.png" data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
                  <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href=""><i class="fa fa-link"></i></a>
                </div>
              </div>
              <div class="pt-3">
                <p class="text-primary mb-0">Electric Systems</p>
                <hr class="text-primary w-25 my-2">
              </div>
            </div>
            <div class="col-lg-4 col-md-6 portfolio-item first">
              <div class="portfolio-img rounded overflow-hidden">
                <img class="img-fluid" src="/img/app/p15.png" alt="">
                <div class="portfolio-btn">
                  <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href="/img/app/p15.png" data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
                  <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href=""><i class="fa fa-link"></i></a>
                </div>
              </div>
              <div class="pt-3">
                <p class="text-primary mb-0">Solar Panels</p>
                <hr class="text-primary w-25 my-2">
              </div>
            </div>
            <div class="col-lg-4 col-md-6 portfolio-item second">
              <div class="portfolio-img rounded overflow-hidden">
                <img class="img-fluid" src="/img/app/p42.png" alt="">
                <div class="portfolio-btn">
                  <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href="/img/app/p42.png" data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
                  <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href=""><i class="fa fa-link"></i></a>
                </div>
              </div>
              <div class="pt-3">
                <p class="text-primary mb-0">Electric Systems</p>
                <hr class="text-primary w-25 my-2">
              </div>
            </div>
            <div class="col-lg-4 col-md-6 portfolio-item first">
              <div class="portfolio-img rounded overflow-hidden">
                <img class="img-fluid" src="/img/app/p39.png" alt="">
                <div class="portfolio-btn">
                  <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href="/img/app/p39.png" data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
                  <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href=""><i class="fa fa-link"></i></a>
                </div>
              </div>
              <div class="pt-3">
                <p class="text-primary mb-0">Solar Panels</p>
                <hr class="text-primary w-25 my-2">
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Projects End -->

      ${renderFooter()}
    `;
  },
  
  init() {
    // Page-specific initialization
  }
};
