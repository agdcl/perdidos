// Contenido de episodios editable:
// - title: título visible
// - description: resumen breve
// - duration: duración aproximada
// - tag: etiqueta visual de la miniatura
const episodes = [
  {
    title: '¿Estamos todos demasiado ofendidos?',
    description:
      'Exploramos cuándo la sensibilidad social ayuda y cuándo se convierte en censura del debate.',
    duration: '47 min',
    tag: 'EP 01',
  },
  {
    title: 'La dictadura de la opinión correcta',
    description:
      'Hablamos del miedo a equivocarse públicamente y del precio de pensar diferente.',
    duration: '52 min',
    tag: 'EP 02',
  },
  {
    title: 'Redes sociales: escaparate, trinchera y terapia barata',
    description:
      'Analizamos cómo internet amplifica discursos, ansiedades y contradicciones cotidianas.',
    duration: '49 min',
    tag: 'EP 03',
  },
];

const episodesList = document.querySelector('#episodes-list');

function createEpisodeCard(episode) {
  const article = document.createElement('article');
  article.className = 'card';

  article.innerHTML = `
    <div class="card-image">${episode.tag}</div>
    <div class="card-content">
      <h3>${episode.title}</h3>
      <p>${episode.description}</p>
      <div class="meta">
        <span>Duración aprox.</span>
        <span>${episode.duration}</span>
      </div>
      <a class="play-link" href="#">▶ Reproducir episodio</a>
    </div>
  `;

  return article;
}

function renderEpisodes() {
  const fragment = document.createDocumentFragment();
  episodes.forEach((episode) => fragment.appendChild(createEpisodeCard(episode)));
  episodesList.appendChild(fragment);
}

function setupRevealAnimations() {
  const items = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  items.forEach((item) => observer.observe(item));
}

renderEpisodes();
setupRevealAnimations();
