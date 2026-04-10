import { renderTopbar } from '../components/Topbar.js';
import { renderNavbar } from '../components/Navbar.js';
import { renderFooter } from '../components/Footer.js';

export default {
  title: 'Electrical Services for Everyday Homeowners',

  async render() {
    const app = document.getElementById('app');
    app.innerHTML = `
      ${renderTopbar()}
      ${renderNavbar('home')}

      <!-- Carousel Start -->
      <div class="container-fluid p-0 pb-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="owl-carousel header-carousel position-relative">
          <div class="owl-carousel-item position-relative" data-dot="<img src='/img/electric.jpg'>">
            <img class="img-fluid" src="/img/8.png" alt="">
            <div class="owl-carousel-inner">
              <div class="container">
                <div class="row justify-content-start">
                  <div class="col-10 col-lg-8">
                    <h1 class="display-2 text-white animated slideInDown">Reliable Electrical Services for Your Home</h1>
                    <p class="fs-5 fw-medium text-white mb-4 pb-3">Safe, professional electrical installations, repairs, and maintenance for houses, townhouses, and apartments across Gauteng.</p>
                    <a href="/contact" class="btn btn-primary rounded-pill py-3 px-5">Check Out Our Renovations</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="owl-carousel-item position-relative" data-dot="<img src='/img/solar.jpg'>">
            <img class="img-fluid" src="/img/7.png" alt="Solar backup supporting electrical systems">
            <div class="owl-carousel-inner">
              <div class="container">
                <div class="row justify-content-start">
                  <div class="col-10 col-lg-8">
                    <h1 class="display-2 text-white animated slideInDown">Electrical Backup & Solar Power Support</h1>
                    <p class="fs-5 fw-medium text-white mb-4 pb-3">Keep your electrical systems running with reliable backup and solar solutions that complement our core electrical services.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="owl-carousel-item position-relative" data-dot="<img src='/img/gate.jpg'>">
            <img class="img-fluid" src="/img/gate.jpg" alt="">
            <div class="owl-carousel-inner">
              <div class="container">
                <div class="row justify-content-start">
                  <div class="col-10 col-lg-8">
                    <h1 class="display-2 text-white animated slideInDown">Gate Motor Automation</h1>
                    <p class="fs-5 fw-medium text-white mb-4 pb-3">Automation and repairs for gate motor systems, improving access and security.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Carousel End -->
      
      <!-- Testimonial Start -->
      <div class="container-xxl py-5">
        <div class="container">
          <div class="text-center mx-auto mb-4 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
            <h6 class="text-primary">Reviews</h6>
            <h1 class="mb-3">What Our Clients Say</h1>
            <p class="mb-0 text-muted">5.0 rating · 10 Google reviews</p>
          </div>
          <div class="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
            <div class="testimonial-item text-center">
              <div class="testimonial-text text-center rounded p-4">
                <p class="mb-2 text-warning"><i class="fa fa-star"></i> 5.0 · Google review</p>
                <p class="mb-3">Evooo Advanced Technologies is amazing! Their service is professional, fast, and very reliable. The team was super helpful and made everything easy to understand. They really care about their clients and go the extra mile. I’m very happy with the support I received and highly recommend them!</p>
                <h5 class="mb-1">Lesegiša Mowasa</h5>
              </div>
            </div>
            <div class="testimonial-item text-center">
              <div class="testimonial-text text-center rounded p-4">
                <p class="mb-2 text-warning"><i class="fa fa-star"></i> 5.0 · Google review</p>
                <p class="mb-3">"A flawless and pleasant experience!" My wife and I are amazingly happy and thankful for an incredible job well done! There have been countless positive interactions with everyone involved.</p>
                <h5 class="mb-1">S N</h5>
              </div>
            </div>
            <div class="testimonial-item text-center">
              <div class="testimonial-text text-center rounded p-4">
                <p class="mb-2 text-warning"><i class="fa fa-star"></i> 5.0 · Google review</p>
                <p class="mb-3">Admire is a hard working, attention to detail electrician who has done Solar installations, electric fencing, lighting, plugs and gate motor work for our household for many years. I can highly recommend his services.</p>
                <h5 class="mb-1">David Sand</h5>
              </div>
            </div>
            <div class="testimonial-item text-center">
              <div class="testimonial-text text-center rounded p-4">
                <p class="mb-2 text-warning"><i class="fa fa-star"></i> 5.0 · Google review</p>
                <p class="mb-3">Thank you so much for your speedy response to our office back up system your professionalism is out of thi sworls.</p>
                <h5 class="mb-1">Mr T Mpala</h5>
              </div>
            </div>
            <div class="testimonial-item text-center">
              <div class="testimonial-text text-center rounded p-4">
                <p class="mb-2 text-warning"><i class="fa fa-star"></i> 5.0 · Google review</p>
                <p class="mb-3">Admire listens carefully and implements to the highest standards. I can recommend him.</p>
                <h5 class="mb-1">Cate Shimmin</h5>
              </div>
            </div>
            <div class="testimonial-item text-center">
              <div class="testimonial-text text-center rounded p-4">
                <p class="mb-2 text-warning"><i class="fa fa-star"></i> 5.0 · Google review</p>
                <p class="mb-3">Exceptional service! Will only use him going forward . Thank you</p>
                <h5 class="mb-1">Vivienne das neves</h5>
              </div>
            </div>
            <div class="testimonial-item text-center">
              <div class="testimonial-text text-center rounded p-4">
                <p class="mb-2 text-warning"><i class="fa fa-star"></i> 5.0 · Google review</p>
                <p class="mb-3">Awesome service and very professional</p>
                <h5 class="mb-1">fungai masekwa</h5>
              </div>
            </div>
            <div class="testimonial-item text-center">
              <div class="testimonial-text text-center rounded p-4">
                <p class="mb-2 text-warning"><i class="fa fa-star"></i> 5.0 · Google review</p>
                <p class="mb-3">Awesome work</p>
                <h5 class="mb-1">Hannelie Ndlovu</h5>
              </div>
            </div>
            <div class="testimonial-item text-center">
              <div class="testimonial-text text-center rounded p-4">
                <p class="mb-2 text-warning"><i class="fa fa-star"></i> 5.0 · Google review</p>
                <p class="mb-3">5.0 star Google review.</p>
                <h5 class="mb-1">Red Heavy</h5>
              </div>
            </div>
            <div class="testimonial-item text-center">
              <div class="testimonial-text text-center rounded p-4">
                <p class="mb-2 text-warning"><i class="fa fa-star"></i> 5.0 · Google review</p>
                <p class="mb-3">5.0 star Google review.</p>
                <h5 class="mb-1">Thandeka Ncube</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Testimonial End -->
      
      <!-- About Start -->
      <div class="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div class="container about px-lg-0">
          <div class="row g-0 mx-lg-0">
            <div class="col-lg-6 ps-lg-0 wow fadeIn" data-wow-delay="0.1s" style="min-height: 400px;">
              <div class="position-relative h-100">
                <img class="position-absolute img-fluid w-100 h-100" src="/img/8.png" style="object-fit: cover;" alt="">
              </div>
            </div>
            <div class="col-lg-6 about-text py-5 wow fadeIn" data-wow-delay="0.5s">
              <div class="p-lg-5 pe-lg-0">
                <h6 class="text-primary">About Us</h6>
                <h1 class="mb-4">Expert Home Electrical Services With Years Of Experience</h1>
                <p>Welcome to Evoo Advanced Technologies, your trusted neighbourhood electrical services provider. We specialise in day-to-day electrical work for homeowners — from fixing tripping plugs and faulty lights to full rewiring, new circuits, and backup power for houses, townhouses, and apartments. We also assist small businesses, complexes, and offices that need the same level of reliable electrical support.</p>
                <p><i class="fa fa-check-circle text-primary me-3"></i>Electrical Systems & Installation</p>
                <p><i class="fa fa-check-circle text-primary me-3"></i>Electrical Repairs & Maintenance</p>
                <p><i class="fa fa-check-circle text-primary me-3"></i>Solar & Backup Solutions (Supporting Service)</p>
                <p><i class="fa fa-check-circle text-primary me-3"></i>Gate Motors & Automation</p>
                <p><i class="fa fa-check-circle text-primary me-3"></i>CCTV & Security Systems</p>
                <a href="/about" class="btn btn-primary rounded-pill py-3 px-5 mt-3">Explore More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- About End -->

      <!-- Service Start -->
      <div class="container-xxl py-5">
        <div class="container">
          <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
            <h6 class="text-primary">Our Services</h6>
            <h1 class="mb-4">Professional Electrical Services & Solutions</h1>
          </div>
          <div class="row g-4">
            <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
              <div class="service-item rounded overflow-hidden">
                <img class="img-fluid_serv" src="/img/6.png" alt="">
                <div class="position-relative p-4 pt-0">
                  <div class="service-icon">
                    <i class="fas fa-plug fa-3x"></i>
                  </div>
                  <h4 class="mb-3">Home Electrical Systems</h4>
                  <p>Everyday electrical solutions for your home — new plugs and lights, rewiring, DB boards, fault finding, and safe repairs done right the first time.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
              <div class="service-item rounded overflow-hidden">
                <img class="img-fluid_serv" src="/img/1.png" alt="">
                <div class="position-relative p-4 pt-0">
                  <div class="service-icon">
                    <i class="fas fa-solar-panel fa-3x"></i>
                  </div>
                  <h4 class="mb-3">Solar & Backup Power</h4>
                  <p>Load-shedding and backup power options that keep your home running, designed to support your electrical system — not replace it.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
              <div class="service-item rounded overflow-hidden">
                <img class="img-fluid_serv" src="/img/gate2.jpg" alt="">
                <div class="position-relative p-4 pt-0">
                  <div class="service-icon">
                    <i class="fas fa-door-open fa-3x"></i>
                  </div>
                  <h4 class="mb-3">Gate Motors</h4>
                  <p>Installation and repairs of gate motors for homes and complexes, improving everyday access and security for your family.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
              <div class="service-item rounded overflow-hidden">
                <img class="img-fluid_serv" src="/img/cctv2.jpg" alt="">
                <div class="position-relative p-4 pt-0">
                  <div class="service-icon">
                    <i class="fas fa-video fa-3x"></i>
                  </div>
                  <h4 class="mb-3">CCTV Cameras</h4>
                  <p>Neat, discreet CCTV installations to help homeowners monitor entrances, yards, and driveways with clear, reliable footage.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
              <div class="service-item rounded overflow-hidden">
                <img class="img-fluid_serv" src="/img/alarm.jpg" alt="">
                <div class="position-relative p-4 pt-0">
                  <div class="service-icon">
                    <i class="fas fa-bell fa-3x"></i>
                  </div>
                  <h4 class="mb-3">Alarm Systems</h4>
                  <p>Modern alarm systems for houses, townhouses, and small offices to help protect your family and valuables.</p>
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
                <h1 class="mb-4">Trusted Electrical Experts For Commercial & Residential Projects</h1>
                <p class="mb-4 pb-2">With years of experience in electrical services, we bring a deep understanding and proven expertise to every project. From basic electrical repairs to complex installations, we deliver reliable solutions that meet the highest safety and quality standards.</p>
                <div class="row g-4">
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <div class="btn-lg-square bg-primary rounded-circle">
                        <i class="fa fa-check text-white"></i>
                      </div>
                      <div class="ms-4">
                        <p class="mb-0">Quality</p>
                        <h5 class="mb-0">Services</h5>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <div class="btn-lg-square bg-primary rounded-circle">
                        <i class="fa fa-user-check text-white"></i>
                      </div>
                      <div class="ms-4">
                        <p class="mb-0">Expert</p>
                        <h5 class="mb-0">Workers</h5>
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
                        <h5 class="mb-0">Consultation</h5>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <div class="btn-lg-square bg-primary rounded-circle">
                        <i class="fa fa-headphones text-white"></i>
                      </div>
                      <div class="ms-4">
                        <p class="mb-0">Customer</p>
                        <h5 class="mb-0">Support</h5>
                      </div>
                    </div>
                  </div>
                  <a href="/about" class="btn btn-primary rounded-pill py-3 px-3 mt-3">Explore More</a>
                </div>
              </div>
            </div>
            <div class="col-lg-6 pe-lg-0 wow fadeIn" data-wow-delay="0.5s" style="min-height: 400px;">
              <div class="position-relative h-100">
                <img class="position-absolute img-fluid w-100 h-100" src="/img/app/solarsystems.png" style="object-fit: cover;" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Feature End -->

      <!-- Quote Start -->
      <div class="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div class="container quote px-lg-0">
          <div class="row g-0 mx-lg-0">
            <div class="col-lg-6 ps-lg-0 wow fadeIn" data-wow-delay="0.1s" style="min-height: 400px;">
              <div class="position-relative h-100">
                <img class="position-absolute img-fluid w-100 h-100" src="/img/12.jpg" style="object-fit: cover;" alt="">
              </div>
            </div>
            <div class="col-lg-6 quote-text py-5 wow fadeIn" data-wow-delay="0.5s">
              <div class="p-lg-5 pe-lg-0">
                <h6 class="text-primary">Free Quote</h6>
                <h1 class="mb-4">Get A Free Quote</h1>
                <p class="mb-4 pb-2">Feel Free To Contact Us For Your Enquiries or Free Quote</p>
                <form action="https://api.web3forms.com/submit" method="POST">
                  <input type="hidden" name="access_key" value="4782f07c-f8a4-476c-b2f1-d687b3c3381f">
                  <div class="row g-3">
                    <div class="col-12 col-sm-6">
                      <input type="text" name="name" class="form-control border-0" placeholder="Your Name" style="height: 55px;" required>
                    </div>
                    <div class="col-12 col-sm-6">
                      <input type="email" name="email" class="form-control border-0" placeholder="Your Email" style="height: 55px;" required>
                    </div>
                    <div class="col-12 col-sm-6">
                      <input type="text" name="Phone Number" class="form-control border-0" placeholder="Your Mobile" style="height: 55px;" required>
                    </div>
                    <div class="col-12 col-sm-6">
                      <select name="Service" class="form-select border-0" style="height: 55px;" required>
                        <option value="">Select A Service</option>
                        <option value="Electric Systems">Electric Systems</option>
                        <option value="Solar Energy">Solar Energy</option>
                        <option value="Gate Automation">Gate Automation</option>
                        <option value="CCTV Cameras">CCTV Cameras</option>
                        <option value="Alarm Systems">Alarm Systems</option>
                      </select>
                    </div>
                    <div class="col-12">
                      <textarea class="form-control border-0" name="Note" placeholder="Special Note"></textarea>
                    </div>
                    <div class="col-12">
                      <button class="btn btn-primary rounded-pill py-3 px-5" type="submit">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Quote End -->
      
      <!-- Clients Start -->
      <div class="container-xxl py-5">
        <div class="container">
          <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
            <h6 class="text-primary">Credits</h6>
            <h1 class="mb-4">Clients We Have Worked With</h1>
          </div>
          <div class="logo-carousel">
            <div class="logo-track">
              <img src="/img/uwin.png" alt="UWIN Client" />
              <img src="/img/IMT.png" alt="IMT Client" />
              <img src="/img/JapSolar.png" alt="JapSolar Client" />
              <img src="/img/uwin.png" alt="UWIN Client" />
              <img src="/img/IMT.png" alt="IMT Client" />
              <img src="/img/JapSolar.png" alt="JapSolar Client" />
              <img src="/img/uwin.png" alt="UWIN Client" />
              <img src="/img/IMT.png" alt="IMT Client" />
              <img src="/img/JapSolar.png" alt="JapSolar Client" />
            </div>
          </div>   
        </div>
      </div>
      <!-- Clients End -->

      <!-- Gallery Start -->
      <div class="container-xxl py-5 bg-light">
        <div class="container">
          <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
            <h6 class="text-primary">Gallery</h6>
            <h1 class="mb-4">Project Gallery</h1>
          </div>
          <div class="row g-4">
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="gallery-item rounded overflow-hidden">
                <img class="img-fluid" src="/img/1.png" alt="Project Gallery 1">
                <div class="gallery-overlay">
                  <a href="/img/1.png" data-lightbox="gallery" class="btn btn-primary rounded-circle"><i class="fa fa-eye"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
              <div class="gallery-item rounded overflow-hidden">
                <img class="img-fluid" src="/img/2.png" alt="Project Gallery 2">
                <div class="gallery-overlay">
                  <a href="/img/2.png" data-lightbox="gallery" class="btn btn-primary rounded-circle"><i class="fa fa-eye"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div class="gallery-item rounded overflow-hidden">
                <img class="img-fluid" src="/img/3.png" alt="Project Gallery 3">
                <div class="gallery-overlay">
                  <a href="/img/3.png" data-lightbox="gallery" class="btn btn-primary rounded-circle"><i class="fa fa-eye"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="gallery-item rounded overflow-hidden">
                <img class="img-fluid" src="/img/4.png" alt="Project Gallery 4">
                <div class="gallery-overlay">
                  <a href="/img/4.png" data-lightbox="gallery" class="btn btn-primary rounded-circle"><i class="fa fa-eye"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
              <div class="gallery-item rounded overflow-hidden">
                <img class="img-fluid" src="/img/5.png" alt="Project Gallery 5">
                <div class="gallery-overlay">
                  <a href="/img/5.png" data-lightbox="gallery" class="btn btn-primary rounded-circle"><i class="fa fa-eye"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div class="gallery-item rounded overflow-hidden">
                <img class="img-fluid" src="/img/6.png" alt="Project Gallery 6">
                <div class="gallery-overlay">
                  <a href="/img/6.png" data-lightbox="gallery" class="btn btn-primary rounded-circle"><i class="fa fa-eye"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="gallery-item rounded overflow-hidden">
                <img class="img-fluid" src="/img/7.png" alt="Project Gallery 7">
                <div class="gallery-overlay">
                  <a href="/img/7.png" data-lightbox="gallery" class="btn btn-primary rounded-circle"><i class="fa fa-eye"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
              <div class="gallery-item rounded overflow-hidden">
                <img class="img-fluid" src="/img/8.png" alt="Project Gallery 8">
                <div class="gallery-overlay">
                  <a href="/img/8.png" data-lightbox="gallery" class="btn btn-primary rounded-circle"><i class="fa fa-eye"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div class="gallery-item rounded overflow-hidden">
                <img class="img-fluid" src="/img/9.png" alt="Project Gallery 9">
                <div class="gallery-overlay">
                  <a href="/img/9.png" data-lightbox="gallery" class="btn btn-primary rounded-circle"><i class="fa fa-eye"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="gallery-item rounded overflow-hidden">
                <img class="img-fluid" src="/img/10.png" alt="Project Gallery 10">
                <div class="gallery-overlay">
                  <a href="/img/10.png" data-lightbox="gallery" class="btn btn-primary rounded-circle"><i class="fa fa-eye"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
              <div class="gallery-item rounded overflow-hidden">
                <img class="img-fluid" src="/img/11.png" alt="Project Gallery 11">
                <div class="gallery-overlay">
                  <a href="/img/11.png" data-lightbox="gallery" class="btn btn-primary rounded-circle"><i class="fa fa-eye"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div class="gallery-item rounded overflow-hidden">
                <img class="img-fluid" src="/img/12.png" alt="Project Gallery 12">
                <div class="gallery-overlay">
                  <a href="/img/12.png" data-lightbox="gallery" class="btn btn-primary rounded-circle"><i class="fa fa-eye"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="gallery-item rounded overflow-hidden">
                <img class="img-fluid" src="/img/13.png" alt="Project Gallery 13">
                <div class="gallery-overlay">
                  <a href="/img/13.png" data-lightbox="gallery" class="btn btn-primary rounded-circle"><i class="fa fa-eye"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Gallery End -->

      <!-- Back to Top -->
      <a href="tel:+27 78 601 1888" class="btn btn-lg btn-primary rounded-circle call-button">
        <i class="bi bi-telephone"></i>
      </a>

      ${renderFooter()}
    `;
  },

  init() {
    // Page-specific initialization if needed
  }
};
