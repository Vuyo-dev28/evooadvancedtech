export function renderFooter() {
  return `
    <!-- Footer Start -->
    <div class="container-fluid bg-dark text-body footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-3 col-md-6">
                    <h5 class="text-white mb-4">Address</h5>
                    <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>Gauteng, South Africa</p>
                    <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+27 78 601 1888</p>
                    <p class="mb-2"><i class="fa fa-envelope me-3"></i>evootechnologies@gmail.com</p>
                </div>
                 <div class="col-lg-3 col-md-6">
                    <h5 class="text-white mb-4">Quick Links</h5>
                    <a class="btn btn-link" href="/about">About Us</a>
                    <a class="btn btn-link" href="/contact">Contact Us</a>
                    <a class="btn btn-link" href="/service">Our Services</a>
                    <a class="btn btn-link" href="/contact">Support</a>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5 class="text-white mb-4">Project Gallery</h5>
                    <div class="row g-2">
                        <div class="col-4">
                            <img class="img-fluid rounded" src="/img/app/p2.png" alt="">
                        </div>
                        <div class="col-4">
                            <img class="img-fluid rounded" src="/img/app/p21.png" alt="">
                        </div>
                        <div class="col-4">
                            <img class="img-fluid rounded" src="/img/app/p41.png" alt="">
                        </div>
                        <div class="col-4">
                            <img class="img-fluid rounded" src="/img/app/p43.png" alt="">
                        </div>
                        <div class="col-4">
                            <img class="img-fluid rounded" src="/img/app/p77.png" alt="">
                        </div>
                        <div class="col-4">
                            <img class="img-fluid rounded" src="/img/app/p55.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="copyright">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0"> 2025
                        &copy; Evoo Advanced Technologies, All Right Reserved.
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Footer End -->
  `;
}
