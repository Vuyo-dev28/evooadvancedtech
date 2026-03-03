// Initialize jQuery plugins and animations
export function initPageScripts() {
  // Wait for DOM to be ready
  if (typeof window !== 'undefined' && window.jQuery) {
    const $ = window.jQuery;
    
    // Spinner
    setTimeout(function () {
      if ($('#spinner').length > 0) {
        $('#spinner').removeClass('show');
      }
    }, 1);
    
    // Initiate the wowjs
    if (window.WOW) {
      new WOW().init();
    }

    // Sticky Navbar
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $('.sticky-top').addClass('shadow-sm').css('top', '0px');
      } else {
        $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
      }
    });
    
    // Back to top button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
      } else {
        $('.back-to-top').fadeOut('slow');
      }
    });
    $('.back-to-top').click(function () {
      $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
      return false;
    });

    // Facts counter
    if ($.fn.counterUp) {
      $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
      });
    }

    // Header carousel
    if ($.fn.owlCarousel) {
      $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
      });
    }

    // Testimonials carousel
    if ($.fn.owlCarousel) {
      $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
          '<i class="bi bi-arrow-left"></i>',
          '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
          0:{
            items:1
          },
          768:{
            items:2
          }
        }
      });
    }

    // Portfolio isotope and filter
    if ($.fn.isotope) {
      var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });
      $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');
        portfolioIsotope.isotope({filter: $(this).data('filter')});
      });
    }
  }
}

// Initialize popup modal
export function initPopupModal() {
  if (typeof window !== 'undefined') {
    window.onload = function () {
      const modal = document.getElementById("popupModal");
      const closeBtn = document.getElementById("closeModal");
      const phoneInput = document.getElementById("phone");

      if (!modal || !closeBtn || !phoneInput) return;

      // Show modal only if it's the user's first visit
      if (!localStorage.getItem("visited")) {
        modal.style.display = "flex";
      }

      closeBtn.onclick = () => {
        modal.style.display = "none";
        localStorage.setItem("visited", "true");
      };

      // Auto-format phone number input for South African format
      phoneInput.addEventListener("input", () => {
        let cleaned = phoneInput.value.replace(/\D/g, "");

        if (cleaned.startsWith("0")) {
          cleaned = "+27" + cleaned.substring(1);
        } else if (!cleaned.startsWith("27") && !cleaned.startsWith("+27")) {
          cleaned = "+27" + cleaned;
        } else if (cleaned.startsWith("27")) {
          cleaned = "+27" + cleaned.substring(2);
        }

        phoneInput.value = cleaned.replace(/(\+27)(\d{2})(\d{3})(\d{4})/, "$1 $2 $3 $4");
      });

      const popupForm = document.getElementById("popupForm");
      if (popupForm) {
        popupForm.onsubmit = function (e) {
          e.preventDefault();

          const phone = phoneInput.value.replace(/\D/g, "");
          if (phone.length !== 11 && phone.length !== 12) {
            alert("Please enter a valid South African phone number.");
            return;
          }

          // Submit the form manually
          this.submit();

          // Set visited flag and close modal
          localStorage.setItem("visited", "true");
          modal.style.display = "none";
        };
      }

      // Optional: auto-close modal after 3 minutes
      setTimeout(() => {
        if (modal) modal.style.display = "none";
      }, 180000); // 180000ms = 3 minutes
    };
  }
}
