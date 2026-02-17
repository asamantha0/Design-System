// Design System Data (loaded from JSON)
let designSystemData = null;

// Load design system JSON
async function loadDesignSystem() {
    try {
        const response = await fetch('design-system-master.json');
        designSystemData = await response.json();
        initializePages();
    } catch (error) {
        console.error('Error loading design system:', error);
        // Fallback to hardcoded data if JSON fails to load
        initializePages();
    }
}

// Initialize all pages
function initializePages() {
    renderColorTokens();
    renderSpacingTokens();
    renderTypographyTokens();
    renderColorPalettes();
}

// Render color tokens
function renderColorTokens() {
    const container = document.getElementById('color-tokens');
    if (!container) return;

    const colors = {
        'Blue 500': '#502EC0',
        'Blue 600': '#402599',
        'Neutral 100': '#F2F2F2',
        'Neutral 900': '#262626',
        'Success 500': '#07A229',
        'Warning 500': '#FFBF00',
        'Error 500': '#C50003'
    };

    container.innerHTML = Object.entries(colors).map(([name, value]) => `
        <div class="token-card" onclick="copyToClipboard('${value}', this)">
            <div class="token-name">color-${name.toLowerCase().replace(' ', '-')}</div>
            <div class="token-value">${value}</div>
            <div class="token-preview">
                <div style="width: 100%; height: 40px; background: ${value}; border-radius: 6px;"></div>
            </div>
        </div>
    `).join('');
}

// Render spacing tokens
function renderSpacingTokens() {
    const container = document.getElementById('spacing-tokens');
    if (!container) return;

    const spacings = {
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '64': '64px'
    };

    container.innerHTML = Object.entries(spacings).map(([name, value]) => `
        <div class="token-card" onclick="copyToClipboard('${value}', this)">
            <div class="token-name">spacing-${name}</div>
            <div class="token-value">${value}</div>
            <div class="token-preview">
                <div style="width: ${value}; height: 24px; background: var(--color-blue-500); border-radius: 4px;"></div>
            </div>
        </div>
    `).join('');
}

// Render typography tokens
function renderTypographyTokens() {
    const container = document.getElementById('typography-tokens');
    if (!container) return;

    const typography = {
        'Font Family': 'Inter',
        'Heading 1': '64px / 76px',
        'Heading 2': '52px / 64px',
        'Heading 3': '40px / 48px',
        'Body Large': '18px / 28px',
        'Body Medium': '16px / 24px',
        'Body Small': '14px / 20px'
    };

    container.innerHTML = Object.entries(typography).map(([name, value]) => `
        <div class="token-card" onclick="copyToClipboard('${value}', this)">
            <div class="token-name">${name}</div>
            <div class="token-value">${value}</div>
        </div>
    `).join('');
}

// Render color palettes
function renderColorPalettes() {
    renderColorScale('primary-colors', 'Blue', [
        { name: 'Blue 100', hex: '#DCD5F2' },
        { name: 'Blue 200', hex: '#B9ABE6' },
        { name: 'Blue 300', hex: '#9682D9' },
        { name: 'Blue 400', hex: '#7358CC' },
        { name: 'Blue 500', hex: '#502EC0' },
        { name: 'Blue 600', hex: '#402599' },
        { name: 'Blue 700', hex: '#301C73' },
        { name: 'Blue 800', hex: '#20124D' },
        { name: 'Blue 900', hex: '#100926' }
    ]);

    renderColorScale('neutral-colors', 'Neutral', [
        { name: 'Neutral 100', hex: '#F2F2F2' },
        { name: 'Neutral 200', hex: '#E4E4E4' },
        { name: 'Neutral 300', hex: '#D7D7D7' },
        { name: 'Neutral 400', hex: '#C9C9C9' },
        { name: 'Neutral 500', hex: '#BCBCBC' },
        { name: 'Neutral 600', hex: '#969696' },
        { name: 'Neutral 700', hex: '#717171' },
        { name: 'Neutral 800', hex: '#4B4B4B' },
        { name: 'Neutral 900', hex: '#262626' }
    ]);

    renderColorScale('success-colors', 'Success', [
        { name: 'Success 100', hex: '#CDECD4' },
        { name: 'Success 300', hex: '#6BC77F' },
        { name: 'Success 500', hex: '#07A229' },
        { name: 'Success 700', hex: '#046119' }
    ]);

    renderColorScale('warning-colors', 'Warning', [
        { name: 'Warning 100', hex: '#FFF2CC' },
        { name: 'Warning 300', hex: '#FFD966' },
        { name: 'Warning 500', hex: '#FFBF00' },
        { name: 'Warning 700', hex: '#997300' }
    ]);

    renderColorScale('error-colors', 'Error', [
        { name: 'Error 100', hex: '#F3CCCD' },
        { name: 'Error 300', hex: '#DC6668' },
        { name: 'Error 500', hex: '#C50003' },
        { name: 'Error 700', hex: '#760002' }
    ]);
}

// Render a color scale
function renderColorScale(containerId, scaleName, colors) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = colors.map(color => `
        <div class="color-item" onclick="copyColorHex('${color.hex}', this)">
            <div class="color-swatch" style="background: ${color.hex};"></div>
            <div class="color-info">
                <div class="color-name">${color.name}</div>
                <div class="color-hex">
                    ${color.hex}
                    <span class="copy-icon">📋</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Copy to clipboard function
function copyToClipboard(text, element) {
    navigator.clipboard.writeText(text).then(() => {
        // Visual feedback
        element.classList.add('copied');
        setTimeout(() => element.classList.remove('copied'), 300);

        // Show toast notification
        showToast(`Copiado: ${text}`);
    }).catch(err => {
        console.error('Error copying to clipboard:', err);
    });
}

// Copy color hex code
function copyColorHex(hex, element) {
    copyToClipboard(hex, element);
}

// Copy code snippet
function copyCode(button) {
    const codeBlock = button.nextElementSibling.querySelector('code');
    const text = codeBlock.textContent;

    navigator.clipboard.writeText(text).then(() => {
        const originalText = button.textContent;
        button.textContent = '¡Copiado!';
        button.style.background = 'var(--color-success-500)';

        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
        }, 2000);
    });
}

// Show toast notification
function showToast(message) {
    // Remove existing toast if any
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    // Create toast
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        background: var(--color-neutral-900);
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 500;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(toast);

    // Remove after 2 seconds
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// Add toast animations to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Navigation
function navigateToPage(pageName) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    const targetPage = document.getElementById(`${pageName}-page`);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === pageName) {
            link.classList.add('active');
        }
    });

    // Close sidebar on mobile
    if (window.innerWidth <= 768) {
        document.getElementById('sidebar').classList.remove('open');
    }
}

// Handle hash navigation
function handleHashChange() {
    const hash = window.location.hash.slice(1) || 'tokens';
    navigateToPage(hash);
}

// Sidebar toggle for mobile
document.getElementById('sidebarToggle')?.addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('open');
});

// Navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.dataset.page;
        window.location.hash = page;
    });
});

// Listen for hash changes
window.addEventListener('hashchange', handleHashChange);

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    loadDesignSystem();
    handleHashChange();
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');

    if (window.innerWidth <= 768 &&
        sidebar.classList.contains('open') &&
        !sidebar.contains(e.target) &&
        !sidebarToggle.contains(e.target)) {
        sidebar.classList.remove('open');
    }
});
