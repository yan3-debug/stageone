const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('[data-nav]');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item) => observer.observe(item));

const betaForm = document.querySelector('#betaForm');
const formNote = document.querySelector('#formNote');

if (betaForm && formNote) {
  betaForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(betaForm);
    const artistName = data.get('artist') || 'your artist profile';
    formNote.textContent = `Thanks, ${artistName}! Your StageOne beta request is saved in this demo.`;
    betaForm.reset();
  });
}
