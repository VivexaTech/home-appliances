document.addEventListener('DOMContentLoaded', function() {
    // 1. Initialize AOS Animation Library
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });

    // 2. Set Current Year in Footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // 3. Navbar Scroll Effect
    const navbar = document.getElementById('mainNav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 4. Basic Form Validation for Booking
    const bookingForm = document.getElementById('bookingForm');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            if (!bookingForm.checkValidity()) {
                event.stopPropagation();
            } else {
                // If form is valid, you can add your submission logic here
                alert('Thank you! Your booking request has been received. Our team will contact you shortly.');
                bookingForm.reset();
                bookingForm.classList.remove('was-validated');
                return;
            }
            
            bookingForm.classList.add('was-validated');
        }, false);
    }

    // 5. Close mobile menu when a link is clicked
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const menuToggle = document.getElementById('navbarNav');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menuToggle.classList.contains('show')) {
                // Trigger Bootstrap's native collapse functionality
                document.querySelector('.navbar-toggler').click();
            }
        });
    });
});