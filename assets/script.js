const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
}

const recommendations = {
  comercio: 'Sugerencia: línea comercio Bill Counter. Prioridad: uso simple, garantía, detección básica y soporte local.',
  falsos: 'Sugerencia: línea detección. Prioridad: UV/MG/IR según moneda, pruebas reales y asesoramiento antes de comprar.',
  volumen: 'Sugerencia: línea profesional o clasificadora. Prioridad: robustez, velocidad, bandeja amplia y menor interrupción.',
  mixto: 'Sugerencia: línea valorizadora. Prioridad: lectura por denominación, reporte de totales y operación de cierre.',
  soporte: 'Sugerencia: diagnóstico técnico. A veces conviene limpiar/calibrar; otras veces conviene cambiar el equipo.'
};

const selectorButtons = document.querySelectorAll('[data-filter]');
const recommendation = document.getElementById('recommendation');
const productCards = document.querySelectorAll('.product-card');
selectorButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    selectorButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    if (recommendation) recommendation.textContent = recommendations[filter] || '';
    productCards.forEach(card => {
      const tags = card.dataset.tags || '';
      card.classList.toggle('is-hidden', !tags.includes(filter));
    });
    document.getElementById('equipos')?.scrollIntoView({behavior:'smooth', block:'start'});
  });
});

const form = document.querySelector('.lead-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const biz = document.getElementById('biz')?.value || '';
    const need = document.getElementById('need')?.value || '';
    const comment = document.getElementById('comment')?.value || '';
    const message = `Hola, quiero asesoramiento para elegir una contadora de billetes.\nNegocio: ${biz}\nNecesidad: ${need}\nComentario: ${comment}`;
    const url = `https://wa.me/5491123215871?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener');
  });
}


const galleryMain = document.querySelector('.gallery-main');
const galleryThumbs = document.querySelectorAll('.gallery-thumbs img');
if (galleryMain && galleryThumbs.length) {
  galleryThumbs.forEach((thumb) => {
    thumb.addEventListener('click', () => {
      galleryThumbs.forEach((img) => img.classList.remove('active'));
      thumb.classList.add('active');
      galleryMain.src = thumb.src;
      galleryMain.alt = thumb.alt;
    });
  });
}
