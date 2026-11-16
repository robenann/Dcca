// Mobile navigation
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav-menu');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  })
);

// Menu tabs
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
    document.querySelectorAll('.menu-panel').forEach(p => { p.classList.remove('active'); p.hidden = true; });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    const panel = document.getElementById(tab.dataset.tab);
    panel.hidden = false;
    panel.classList.add('active');
  });
});

// Testimonial slider
const quotes = document.querySelectorAll('.quote');
const dots = document.querySelectorAll('.dot');
let current = 0;
function showQuote(i) {
  quotes[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = i;
  quotes[current].classList.add('active');
  dots[current].classList.add('active');
}
dots.forEach((d, i) => d.addEventListener('click', () => { showQuote(i); restart(); }));
let timer;
function restart() {
  clearInterval(timer);
  timer = setInterval(() => showQuote((current + 1) % quotes.length), 6000);
}
restart();

// Opening hours (Addis Ababa time): highlight today + open/closed status
const hours = { 0: [8, 20], 1: [7, 21], 2: [7, 21], 3: [7, 21], 4: [7, 21], 5: [7, 22], 6: [8, 22] };
const now = new Date();
const addis = new Date(now.toLocaleString('en-US', { timeZone: 'Africa/Addis_Ababa' }));
const day = addis.getDay();
document.querySelector(`.hours tr[data-day="${day}"]`)?.classList.add('today');
const status = document.getElementById('open-status');
const h = addis.getHours() + addis.getMinutes() / 60;
const today = hours[day];
if (today && h >= today[0] && h < today[1]) {
  status.textContent = `Open now · until ${today[1]}:00`;
  status.classList.add('open');
} else {
  status.textContent = 'Closed right now';
  status.classList.add('closed');
}

// Order form (front-end only — connect to a backend or form service to receive requests)
const form = document.getElementById('order-form');
const msg = form.querySelector('.form-msg');
const dateInput = form.elements.date;
dateInput.min = new Date(Date.now() + 864e5).toISOString().split('T')[0];

form.addEventListener('submit', e => {
  e.preventDefault();
  let valid = true;
  form.querySelectorAll('[required]').forEach(el => {
    const ok = el.checkValidity();
    el.classList.toggle('invalid', !ok);
    if (!ok) valid = false;
  });
  if (form.elements.type.value === 'Custom celebration cake' && dateInput.value) {
    const days = (new Date(dateInput.value) - new Date()) / 864e5;
    if (days < 3) {
      dateInput.classList.add('invalid');
      msg.textContent = 'Custom cakes need at least 72 hours’ notice — please pick a later date.';
      msg.className = 'form-msg err';
      return;
    }
  }
  if (!valid) {
    msg.textContent = 'Please fill in the highlighted fields.';
    msg.className = 'form-msg err';
    return;
  }
  msg.textContent = `Thanks, ${form.elements.name.value.split(' ')[0]}! We’ll be in touch within one business day.`;
  msg.className = 'form-msg ok';
  form.reset();
});

// Newsletter
document.getElementById('newsletter').addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.textContent = 'Subscribed ✓';
  btn.disabled = true;
});

// Footer year
document.getElementById('year').textContent = now.getFullYear();

// Reveal sections on scroll
const revealEls = document.querySelectorAll('.section-head, .item, .card, .about-grid > *, .visit-grid > *, .order-grid > *');
revealEls.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));
