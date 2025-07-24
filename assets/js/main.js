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

    // LÓGICA DO AVISO DE COOKIES
    const banner = document.getElementById('cookie-consent-banner');
    const acceptBtn = document.getElementById('cookie-consent-button');

    // Verifica se o cookie de consentimento existe
    const hasConsent = getCookie('cookie_consent_accepted');

    if (!hasConsent && banner) {
        // Mostra o banner se não houver consentimento
        setTimeout(() => {
            banner.classList.add('active');
        }, 500);
    }

    if (acceptBtn) {
        acceptBtn.addEventListener('click', () => {
            // Define o cookie para expirar em 1 ano
            setCookie('cookie_consent_accepted', 'true', 365);
            banner.classList.remove('active');
        });
    }

    // Funções auxiliares para manipular cookies
    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
});