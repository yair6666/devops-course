// Matrix rain effect
const matrixChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
const matrixBg = document.querySelector('.matrix-bg') || document.body;

function createMatrixChar() {
    const char = document.createElement('div');
    char.className = 'matrix-char';
    char.textContent = matrixChars[Math.floor(Math.random() * matrixChars.length)];
    char.style.left = Math.random() * window.innerWidth + 'px';
    char.style.animationDuration = (Math.random() * 10 + 5) + 's';
    char.style.opacity = Math.random() * 0.5;
    
    if (matrixBg === document.body) {
        document.body.appendChild(char);
    } else {
        matrixBg.appendChild(char);
    }
    
    setTimeout(() => {
        char.remove();
    }, (Math.random() * 10 + 5) * 1000);
}

// Create Matrix characters periodically
setInterval(createMatrixChar, 100);

// Create initial characters
for (let i = 0; i < 20; i++) {
    setTimeout(createMatrixChar, i * 50);
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active state to navigation links
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});
