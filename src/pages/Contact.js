import { renderTopbar } from '../components/Topbar.js';
import { renderNavbar } from '../components/Navbar.js';
import { renderFooter } from '../components/Footer.js';

export default {
  title: 'Contact Us - Professional Electrical Services',
  
  async render() {
    const app = document.getElementById('app');
    app.innerHTML = `
      ${renderTopbar()}
      ${renderNavbar('contact')}

      <!-- Page Header Start -->
      <div class="container-fluid page-header py-5 mb-5">
        <div class="container py-5">
          <h1 class="display-3 text-white mb-3 animated slideInDown">Contact</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a class="text-white">Home</a></li>
              <li class="breadcrumb-item"><a class="text-white">Pages</a></li>
              <li class="breadcrumb-item text-white active" aria-current="page">Contact</li>
            </ol>
          </nav>
        </div>
      </div>
      <!-- Page Header End -->

      <!-- Contact Start -->
      <div class="container-fluid bg-light overflow-hidden px-lg-0" style="margin: 6rem 0;">
        <div class="container contact px-lg-0">
          <div class="row g-0 mx-lg-0">
            <div class="col-lg-6 contact-text py-5 wow fadeIn" data-wow-delay="0.5s">
              <div class="p-lg-5 ps-lg-0">
                <h6 class="text-primary">Contact Us</h6>
                <h1 class="mb-4">Homeowners, Get In Touch With Us</h1>
                <p class="mb-4">Need an electrician for your house, townhouse, or flat — whether it's a small fault, a new plug, or a full backup solution? Send us your details and we’ll get back to you with friendly, practical advice and a clear quote.</p>
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
            <div class="col-lg-6 pe-lg-0" style="min-height: 400px;">
              <div class="position-relative h-100">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229528.4397329583!2d27.929290943806535!3d-25.98830533665295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9571fd4965198b%3A0x87b2105c1c8bfe22!2sMidrand!5e0!3m2!1sen!2sza!4v1747036989147!5m2!1sen!2sza" width="600" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Contact End -->

      ${renderFooter()}
    `;
  },
  
  init() {
    // Page-specific initialization
  }
};
