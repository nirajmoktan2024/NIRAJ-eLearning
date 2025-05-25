document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('header').prepend(mobileMenuBtn);
    
    const nav = document.querySelector('nav');
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('show');
    });

    // Course filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                const courseCards = document.querySelectorAll('.course-card');
                
                courseCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // Form submissions
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Simulate login
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            if (email && password) {
                // In a real app, you would send this to your backend
                alert('Login successful! Redirecting to dashboard...');
                window.location.href = 'student-dashboard.html';
            } else {
                alert('Please fill in all fields');
            }
        });
    }

    const adminLoginForm = document.getElementById('adminLoginForm');
    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Simulate admin login
            const email = document.getElementById('admin-email').value;
            const password = document.getElementById('admin-password').value;
            
            if (email && password) {
                // In a real app, you would send this to your backend
                alert('Admin login successful! Redirecting to admin panel...');
                // window.location.href = 'admin-dashboard.html';
            } else {
                alert('Please fill in all fields');
            }
        });
    }

    // Logout functionality
    const logoutBtn = document.querySelector('.logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (confirm('Are you sure you want to logout?')) {
                window.location.href = 'index.html';
            }
        });
    }
});