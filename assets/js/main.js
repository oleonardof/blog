document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const mobileMenuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const backToTopBtn = document.getElementById('back-to-top-btn');
    const yearSpan = document.getElementById('year');

    // LÓGICA DO DARK MODE
    if (themeToggleBtn) {
        const htmlElement = document.documentElement;
        const applyTheme = (theme) => {
            if (theme === 'dark') {
                htmlElement.classList.add('dark');
                themeToggleBtn.innerHTML = '<i class="fas fa-sun text-xl"></i>';
            } else {
                htmlElement.classList.remove('dark');
                themeToggleBtn.innerHTML = '<i class="fas fa-moon text-xl"></i>';
            }
        };
        themeToggleBtn.addEventListener('click', () => {
            const newTheme = htmlElement.classList.contains('dark') ? 'light' : 'dark';
            localStorage.setItem('theme', newTheme);
            applyTheme(newTheme);
        });
        const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        applyTheme(savedTheme);
    }

    // MENU MOBILE
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // BOTÃO VOLTAR AO TOPO
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            backToTopBtn.classList.toggle('hidden', window.scrollY <= 300);
        });
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // ANO NO RODAPÉ
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear().toString();
    }
});