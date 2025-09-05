document.addEventListener('DOMContentLoaded', function() {
    const navbarLogo = document.querySelector('nav .logo-div');
    const headerLogo = document.querySelector('header .logo-div');
    let isScrolled = false;

    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100 && !isScrolled) {
            // User scrolled down
            isScrolled = true;
            navbarLogo.classList.remove('logo-hidden');
            navbarLogo.classList.add('navbar-logo');
            headerLogo.classList.add('logo-hidden');
        } else if (scrollTop <= 170 && isScrolled) {
            // User scrolled back to top
            isScrolled = false;
            navbarLogo.classList.add('logo-hidden');
            navbarLogo.classList.remove('navbar-logo');
            headerLogo.classList.remove('logo-hidden');
        }
    }

    // Initialize - hide navbar logo initially
    navbarLogo.classList.add('logo-hidden');
    headerLogo.classList.add('header-logo');

    // Add scroll listener with throttling for performance
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });
});