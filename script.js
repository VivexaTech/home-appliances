/* ==========================================================================
   Vivexa Tech - Main JavaScript
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Initialize AOS (Animate On Scroll)
    AOS.init({
        once: true, // Animation happens only once
        offset: 100, // Offset (in px) from the original trigger point
        duration: 800, // Values from 0 to 3000, with step 50ms
        easing: 'ease-in-out'
    });

    // 2. Set Current Year in Footer
    const yearSpan = document.getElementById("currentYear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 3. Close mobile navbar on link click
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const menuToggle = document.getElementById('navbarNav');
    const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});
    
    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            if (menuToggle.classList.contains('show')) {
                bsCollapse.hide();
            }
        });
    });

    // 4. Booking Form Validation & Submission Handling
    const bookingForm = document.getElementById("bookingForm");
    
    if (bookingForm) {
        bookingForm.addEventListener("submit", function (event) {
            event.preventDefault();
            event.stopPropagation();

            let isValid = true;

            // Custom Phone Number Validation (Must be exactly 10 digits)
            const phoneInput = document.getElementById("phone");
            const phoneRegex = /^[0-9]{10}$/;
            
            if (!phoneRegex.test(phoneInput.value)) {
                phoneInput.classList.add("is-invalid");
                isValid = false;
            } else {
                phoneInput.classList.remove("is-invalid");
                phoneInput.classList.add("is-valid");
            }

            // Bootstrap Native Validation for other fields
            if (!bookingForm.checkValidity()) {
                isValid = false;
            }

            bookingForm.classList.add("was-validated");

            // If everything is valid, simulate successful submission
            if (isValid) {
                // Here you would typically send data via fetch/AJAX to your backend
                
                // Show Success Alert
                alert(`Thank you, ${document.getElementById('fullName').value}! Your booking for ${document.getElementById('serviceType').value} has been received. Our team will call you shortly at ${phoneInput.value}.`);
                
                // Reset form completely
                bookingForm.reset();
                bookingForm.classList.remove("was-validated");
                phoneInput.classList.remove("is-valid");
            }
        });

        // Real-time phone validation correction on typing
        document.getElementById("phone").addEventListener("input", function() {
            this.value = this.value.replace(/[^0-9]/g, ''); // Allow only numbers
            if(this.value.length > 10) {
                this.value = this.value.slice(0, 10); // Restrict to 10 digits
            }
        });
    }

    // 5. Add dynamic shadow to navbar on scroll
    const navbar = document.getElementById('mainNav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow');
            navbar.classList.remove('shadow-sm');
        } else {
            navbar.classList.add('shadow-sm');
            navbar.classList.remove('shadow');
        }
    });

});