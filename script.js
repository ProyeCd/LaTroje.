/* ===== MUSEUM PIECES DATA ===== */
const museumPieces = [
  {
    id: 1,
    name: "Sinfonola",
    image: "img/sinfonola.png",
    color: "#D8CFC4",
    textColor: "#2C1E0F",
    keywords: ["Música", "Siglo XX", "Mecánica", "Entretenimiento"],
    tagColors: ["#8B7D6B", "#9B8E7C", "#7A6E5E", "#6B6054"],
    description: `<p>Es una máquina automatizada que reproduce música cuando se insertan monedas y se elige una combinación de botones. Estilo retro, probablemente de finales de los años 70 o principios de los 80. A diferencia de las sinfonolas clásicas de los 50 con luces de neón y burbujas, esta tiene un acabado de madera y molduras doradas, un diseño muy común en las marcas como Rock Ola, Rowe-AMI o Wurlitzer de esa época.</p>`
  },
  {
    id: 2,
    name: "Juego de plumas",
    image: "img/juego_de_plumas.png",
    color: "#C9B97A",
    textColor: "#2C1E0F",
    keywords: ["Escritura", "Colonial", "Tinta", "Documento"],
    tagColors: ["#8B8050", "#9A9060", "#7A7244", "#6B6438"],
    description: `<p>Este cuenta con la pluma, el tintero y el soporte, se utilizabas principalmente en el occidente desde el siglo VI hasta el mediado del siglo XIX, requería un mantenimiento artesanal constante con cortaplumas, mientras que el tintero con la inscripción "Fountain" marca la transición hacia la modernidad industrial del siglo XX, cuando las tintas se volvieron más fluidas para las primeras estilográficas.</p>`
  },
  {
    id: 3,
    name: "Acocote",
    image: "img/odre.png",
    color: "#BFA26E",
    textColor: "#FFFFFF",
    keywords: ["Transporte", "Líquidos", "Antigüedad", "Cuero"],
    tagColors: ["#8B7240", "#9A824E", "#7A6436", "#6B5830"],
    description: `<p>Instrumento tradicional e Idéntico desde la época prehipánica, el acocote es un guaje alargado y hueco con dos perforaciones que el tlachiquero utiliza como una pipa de succión. Al generar vacio con la boca, extrae el aguamiel del corazón del maguey de forma segura para la planta, obteniendo asi la materia prima que después sefermentará para convertirse en pulque.</p>`
  },
  {
    id: 4,
    name: "Castañas",
    image: "img/barril_de_madera.png",
    color: "#A8845C",
    textColor: "#FFFFFF",
    keywords: ["Comercio", "Almacenamiento", "Añejamiento"],
    tagColors: ["#7A6040", "#8B704A", "#6B5536", "#5C4A2E"],
    description: `<p>Es un contenedor tradicional de madera, de forma ovalada y aplanada de un lado para adaptarse cómodamente a la espalda del tlachiquero o a los costados de un burro. Históricamente reforzada con aros de metal o cuero, se utiliza para almacenar y transportar el aguamiel recién extraído. con el acocote desde el magueyal hasta el tinacal, progiendo el liquido de la luz y el calor para evitar que se fermente antes de tiempo.</p>`
  },
  {
    id: 5,
    name: "Medida de pulque (bote de lámina)",
    image: "img/medida_de_pulque.png",
    color: "#8E7352",
    textColor: "#FFFFFF",
    keywords: ["Pulque", "Herramienta", "Siglo XIX", "Hojalata"],
    tagColors: ["#6B5840", "#7A6648", "#5C4A36", "#4E3E2C"],
    description: `<p>Utilizada principalmente entre el siglo XIX y mediados del XX, esta jarra de hojalata o fierro galvanizado era la herramienta estándar en las pulquerías para medir y despachar la bebida desde las tinas de fermentación. Su diseño rústico y duradero, a menudo marcado con sellos oficiales de capacidad, permitía un servicio rápido y exacto antes de la llegada del embotellado industrial.</p>`
  },
  {
    id: 6,
    name: "Llave antigua",
    image: "img/llave_antigua.png",
    color: "#C5A96D",
    textColor: "#2C1E0F",
    keywords: ["Herrería", "Seguridad", "Hierro forjado"],
    tagColors: ["#8B7D50", "#9A8E5A", "#7A7044", "#6B6238"],
    description: `<p>Predominantes entre los siglos XVIII y XIX, estas llaves de hierro forjado eran piezas artesanales diseñadas para accionar cerraduras de grandes portones y baúles. Su estructura maciza, compuesta por un ojo ovalado, una tija robusta y un paletón con muescas únicas, refleja una época donde la seguridad dependía de la fuerza del metal y la pericia del herrero. Está llave es la llave antigua de esta casa.</p>`
  },
  {
    id: 7,
    name: "Reloj de sobremesa",
    image: "img/reloj_sombremesa.png",
    color: "#D8CFC4",
    textColor: "#2C1E0F",
    keywords: ["Decorativo", "Reloj", "Siglo XX"],
    tagColors: ["#8B7D6B", "#9B8E7C", "#7A6E5E", "#6B6054"],
    description: `<p>Es una pieza decorativa que mezcla el diseño de los teléfonos antiguos de principios del siglo XX con la utilidad de un reloj moderno. En lugar de tener el disco para marcar números, utiliza ese espacio para mostrar la hora con un sistema de pilas. Es un objeto diseñado para dar un toque elegante y nostálgico al hogar, convirtiendo una herramienta de comunicación del pasado en un adorno útil para el presente.</p>`
  },
  {
    id: 8,
    name: "Guaje",
    image: "img/guaje.png",
    color: "#C9B97A",
    textColor: "#2C1E0F",
    keywords: ["Recipiente", "Natural", "Agua", "Campo"],
    tagColors: ["#8B8050", "#9A9060", "#7A7244"],
    description: `<p>Un recipiente natural obtenido del fruto seco de una enredadera (Lagenaria siceraria). Desde tiempos antiguos, se ha utilizado en el campo para transportar y mantener fresca el agua o semillas, gracias a que su corteza es ligera y aislante. Representa una de las herramientas más antiguas de la humanidad, donde la naturaleza misma ofrece un diseño perfecto para el almacenamiento.</p>`
  },
  {
    id: 9,
    name: "El niño llorón",
    image: "img/niño_lloron.png",
    color: "#BFA26E",
    textColor: "#FFFFFF",
    keywords: ["Arte", "Leyenda urbana", "Siglo XX", "Pintura"],
    tagColors: ["#8B7240", "#9A824E", "#7A6436"],
    description: `<p>Este cuadro es una reproducción de "El Niño Llorón", una famosa serie de pinturas creada por el artista italiano Bruno Amadio (conocido como Giovanni Bragolin) a mediados del siglo XX. Estas obras se volvieron icónicas en las décadas de los 70 y 80, adornando miles de hogares en todo el mundo. Más allá de su valor artístico, el cuadro es protagonista de una de las leyendas urbanas más conocidas del arte popular.</p>`
  },
  {
    id: 10,
    name: "Consola",
    image: "img/consola.png",
    color: "#A8845C",
    textColor: "#FFFFFF",
    keywords: ["Sonido", "Mobiliario", "Entretenimiento", "Años 50"],
    tagColors: ["#7A6040", "#8B704A", "#6B5536"],
    description: `<p>Este mueble es una consola de sonido, un ícono del diseño de mediados del siglo XX (años 50 y 60) que combinaba tecnología y decoración. Estos equipos eran el centro de entretenimiento familiar de la época, ya que integraban en una sola pieza de madera elegante una radio de bulbos, un tocadiscos y altavoces de alta fidelidad. Representa una era donde los aparatos electrónicos eran piezas de mobiliario diseñadas para durar.</p>`
  },
  {
    id: 11,
    name: "Cuadro de papel amate",
    image: "img/cuadro_papel_amate.png",
    color: "#8E7352",
    textColor: "#FFFFFF",
    keywords: ["Artesanía", "México", "Prehispánico", "Pintura"],
    tagColors: ["#6B5840", "#7A6648", "#5C4A36"],
    description: `<p>Esta obra es una pintura sobre papel amate, una de las expresiones artesanales más antiguas y representativas de México. El soporte se elabora artesanalmente machacando la corteza de árboles de la familia de los higos, técnica de origen prehispánico. Los diseños, generalmente pintados por artesanos, muestran escenas de la naturaleza, aves y flores con colores vibrantes.</p>`
  },
  {
    id: 12,
    name: "Tocadiscos portátil",
    image: "img/tocadisco_portátil.png",
    color: "#C5A96D",
    textColor: "#2C1E0F",
    keywords: ["Música", "Portátil", "Vinilo", "Tecnología"],
    tagColors: ["#8B7D50", "#9A8E5A", "#7A7044"],
    description: `<p>Este objeto es un tocadiscos portátil de maleta, un dispositivo muy popular a mediados del siglo XX que permitía llevar la música a cualquier lugar. A diferencia de las grandes consolas fijas, este modelo compacto integra el plato para discos de vinilo y un receptor de radio en una estructura ligera con asa. Es un símbolo de la libertad musical de la época, representando el primer paso hacia la tecnología de audio personal.</p>`
  },
  {
    id: 13,
    name: "Balanza",
    image: "img/balanza.png",
    color: "#D8CFC4",
    textColor: "#2C1E0F",
    keywords: ["Ciencia", "Precisión", "Laboratorio", "Siglo XIX"],
    tagColors: ["#8B7D6B", "#9B8E7C", "#7A6E5E"],
    description: `<p>Este objeto es una balanza analítica de precisión, una herramienta fundamental en laboratorios y farmacias de finales del siglo XIX y principios del XX. Su estructura de latón y cristal no es solo estética; la vitrina protegía los platos de corrientes de aire y polvo que pudieran alterar las mediciones más diminutas. Representa la era del rigor científico analógico.</p>`
  },
  {
    id: 14,
    name: "Teléfono de disco",
    image: "img/teléfono_disco.png",
    color: "#C9B97A",
    textColor: "#2C1E0F",
    keywords: ["Comunicación", "Años 70", "Aerodinámico", "Plástico"],
    tagColors: ["#8B8050", "#9A9060", "#7A7244"],
    description: `<p>Este objeto es un teléfono de disco de diseño aerodinámico, popular entre las décadas de 1970 y 1980. A diferencia de los modelos antiguos de metal, este ejemplar utiliza una carcasa de plástico en colores vibrantes, reflejando la transición hacia un diseño más moderno y funcional. Su característica principal es el marcado por pulsos, donde el usuario debía girar el disco para cada dígito.</p>`
  },
  {
    id: 15,
    name: "Televisor de consola",
    image: "img/televisor_consola.png",
    color: "#BFA26E",
    textColor: "#FFFFFF",
    keywords: ["Televisión", "Consola", "Madera", "Analógico"],
    tagColors: ["#8B7240", "#9A824E", "#7A6436"],
    description: `<p>Un mueble emblemático de las décadas de 1960 y 1970 que integraba la tecnología electrónica dentro de un diseño de madera elegante. Este modelo cuenta con una pantalla de rayos catódicos y perillas manuales para sintonizar canales, representando la era dorada de la televisión analógica antes de la llegada de los controles remotos y las pantallas planas.</p>`
  },
  {
    id: 16,
    name: "Radio",
    image: "img/radio.png",
    color: "#A8845C",
    textColor: "#FFFFFF",
    keywords: ["Radio", "Transistores", "Años 60", "Portátil"],
    tagColors: ["#7A6040", "#8B704A", "#6B5536"],
    description: `<p>Esta es una radio de transistores portátil, modelo "Embajador Continental", representativa de la revolución tecnológica de los años 60 y 70. A diferencia de las antiguas radios de bulbos que eran pesadas y tardaban en calentar, el uso de transistores permitió crear aparatos compactos, ligeros y de encendido instantáneo. Este modelo de "dos bandas" permitía sintonizar tanto noticias locales como emisoras lejanas.</p>`
  }
];

/* ===== DOM ELEMENTS ===== */
const cardsGrid = document.getElementById('cards-grid');
const modalOverlay = document.getElementById('modal-overlay');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalKeywords = document.getElementById('modal-keywords');
const modalDescription = document.getElementById('modal-description');
const modalSeparator = document.getElementById('modal-separator');
const modalClose = document.getElementById('modal-close');
const lightboxOverlay = document.getElementById('lightbox-overlay');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxClose = document.getElementById('lightbox-close');

/* ===== RENDER CARDS ===== */
function renderCards() {
  cardsGrid.innerHTML = '';
  museumPieces.forEach((piece) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.backgroundColor = piece.color;
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Ver detalle de ${piece.name}`);
    card.dataset.id = piece.id;

    card.innerHTML = `
      <div class="card-img-wrapper">
        <img src="${piece.image}" alt="${piece.name}" loading="lazy" />
      </div>
      <span class="card-plus" aria-hidden="true">+</span>
      <h3 class="card-title" style="color: ${piece.textColor}">${piece.name}</h3>
    `;

    card.addEventListener('click', () => openModal(piece));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(piece);
      }
    });

    cardsGrid.appendChild(card);
  });
}

/* ===== OPEN MODAL ===== */
function openModal(piece) {
  // Set image
  modalImage.src = piece.image;
  modalImage.alt = piece.name;

  // Set title
  modalTitle.textContent = piece.name;

  // Set separator color
  modalSeparator.style.backgroundColor = piece.color;

  // Set keywords
  modalKeywords.innerHTML = '';
  piece.keywords.forEach((kw, i) => {
    const tag = document.createElement('span');
    tag.className = 'keyword-tag';
    const bgColor = piece.tagColors[i] || piece.color;
    tag.style.backgroundColor = bgColor;
    tag.style.color = '#FFFFFF';
    tag.textContent = kw;
    modalKeywords.appendChild(tag);
  });

  // Set description
  modalDescription.innerHTML = piece.description;

  // Show modal
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Focus trap
  modalClose.focus();
}

/* ===== CLOSE MODAL ===== */
function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.querySelector('.modal-backdrop').addEventListener('click', closeModal);

/* ===== LIGHTBOX ===== */
function openLightbox(src, alt) {
  lightboxImage.src = src;
  lightboxImage.alt = alt;
  lightboxOverlay.classList.add('active');
}

function closeLightbox() {
  lightboxOverlay.classList.remove('active');
}

document.getElementById('modal-image-area').addEventListener('click', () => {
  openLightbox(modalImage.src, modalImage.alt);
});

lightboxClose.addEventListener('click', (e) => {
  e.stopPropagation();
  closeLightbox();
});

lightboxOverlay.addEventListener('click', (e) => {
  if (e.target === lightboxOverlay || e.target === lightboxImage) {
    closeLightbox();
  }
});

/* ===== KEYBOARD HANDLER ===== */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (lightboxOverlay.classList.contains('active')) {
      closeLightbox();
    } else if (modalOverlay.classList.contains('active')) {
      closeModal();
    } else if (sidebarModalOverlay.classList.contains('active')) {
      closeSidebarModal();
    }
  }
});

/* ===== SIDEBAR MODAL ===== */
const sidebarCard        = document.getElementById('sidebar-card');
const sidebarModalOverlay = document.getElementById('sidebar-modal-overlay');
const sidebarModalClose  = document.getElementById('sidebar-modal-close');
const sidebarModalBackdrop = document.getElementById('sidebar-modal-backdrop');

function openSidebarModal() {
  sidebarModalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  sidebarModalClose.focus();
}

function closeSidebarModal() {
  sidebarModalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

sidebarCard.addEventListener('click', openSidebarModal);
sidebarCard.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    openSidebarModal();
  }
});
sidebarModalClose.addEventListener('click', closeSidebarModal);
sidebarModalBackdrop.addEventListener('click', closeSidebarModal);

/* ===== INIT ===== */
renderCards();
