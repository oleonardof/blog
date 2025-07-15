// ARQUIVO CORRIGIDO: assets/js/main.js

// Espera o documento carregar para executar o JavaScript
document.addEventListener('DOMContentLoaded', function() {

    const themeToggleBtn = document.getElementById('theme-toggle');
    const mobileMenuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const backToTopBtn = document.getElementById('back-to-top-btn');
    const yearSpan = document.getElementById('year');

    // --- LÓGICA DO DARK MODE CORRIGIDA ---
    if (themeToggleBtn) {
        const htmlElement = document.documentElement;

        // Função única que aplica o tema e atualiza o ícone
        const applyTheme = (theme) => {
            if (theme === 'dark') {
                htmlElement.classList.add('dark');
                themeToggleBtn.innerHTML = '<i class="fas fa-sun text-xl"></i>';
            } else {
                htmlElement.classList.remove('dark');
                themeToggleBtn.innerHTML = '<i class="fas fa-moon text-xl"></i>';
            }
        };

        // Evento de clique para o botão
        themeToggleBtn.addEventListener('click', () => {
            const isDark = htmlElement.classList.contains('dark');
            const newTheme = isDark ? 'light' : 'dark';
            localStorage.setItem('theme', newTheme);
            applyTheme(newTheme);
        });

        // Aplica o tema correto ao carregar a página
        const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        applyTheme(savedTheme);
    }

    // --- OUTRAS FUNCIONALIDADES ---

    // Lógica do Menu Mobile
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Lógica do Botão Voltar ao Topo
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            const shouldShow = window.scrollY > 300;
            backToTopBtn.classList.toggle('hidden', !shouldShow);
        });
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' }); // O 'smooth' é reforçado pelo CSS no layout
        });
    }
    
    // Lógica do Ano no Rodapé
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear().toString();
    }
});