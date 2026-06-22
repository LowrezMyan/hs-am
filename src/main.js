import './style.css'

const asset = (path) => `${import.meta.env.BASE_URL}${path}`

const quickTags = [
  'Fenster',
  'Turen',
  'Kueche',
  'Bad',
  'Boden',
  'Waende',
  'Schimmel',
  'Wasserschaden',
  'Montage',
]

const experienceFacts = [
  {
    title: 'Seit 2006',
    text: '20 Jahre saubere Arbeit auf echten Baustellen',
  },
  {
    title: 'Arsen vor Ort',
    text: 'kein Vermittler, kein Callcenter, nur der Macher selbst',
  },
  {
    title: 'Alles aus einer Hand',
    text: 'Fenster, Waende, Boeden, Feuchte und Montage',
  },
]

const serviceCards = [
  {
    title: 'Fenster & Turen',
    note: 'Einbau, Austausch und saubere Abschluesse',
    image: asset('images/people/arsen-workshop.webp'),
    accent: 'Montage',
    span: 'wide',
  },
  {
    title: 'Bad & Fliesen',
    note: 'Saubere Fliesen, Fugen und klare Kanten',
    image: asset('images/projects/tiles-after.webp'),
    accent: 'Fliesen',
  },
  {
    title: 'Waende & Ausbau',
    note: 'Trockenbau, Rigips und klare Linien',
    image: asset('images/people/arsen-framing.webp'),
    accent: 'Struktur',
  },
  {
    title: 'Schimmel & Feuchte',
    note: 'Schaden raus, Raum wieder ruhig',
    image: asset('images/projects/mold-after.webp'),
    accent: 'Sanierung',
    span: 'tall',
  },
  {
    title: 'Boeden & Belage',
    note: 'PVC, Linoleum, Laminat und Kanten, die sitzen',
    image: asset('images/people/arsen-kitchen.webp'),
    accent: 'Boden',
  },
  {
    title: 'Umbau & Details',
    note: 'Kleine Arbeiten mit grossem Unterschied',
    image: asset('images/people/arsen-pro.webp'),
    accent: 'Ausbau',
  },
]

const stories = [
  {
    title: 'Wasserschaden',
    text: 'Sauber aufgeraumt, neu aufgebaut, wieder wohnbar.',
    before: asset('images/projects/water-damage-before.webp'),
    after: asset('images/projects/water-damage-after.webp'),
  },
  {
    title: 'Tragende Wand',
    text: 'Umbau mit Stahltrager und ruhiger Optik danach.',
    before: asset('images/projects/steel-beam-before.webp'),
    after: asset('images/projects/steel-beam-after.webp'),
  },
  {
    title: 'Duschkabine',
    text: 'Vorher improvisiert, nachher ordentlich montiert.',
    before: asset('images/projects/shower-before.webp'),
    after: asset('images/projects/shower-after.webp'),
  },
]

const portraits = [
  {
    title: 'Auf der Baustelle',
    image: asset('images/people/arsen-helmet-blue.webp'),
  },
  {
    title: 'Kuechen & Feinheit',
    image: asset('images/people/arsen-kitchen.webp'),
  },
  {
    title: 'Planung mit Stil',
    image: asset('images/people/arsen-suit.webp'),
  },
]

const gallery = [
  {
    title: 'Framing',
    image: asset('images/projects/steel-beam-after.webp'),
  },
  {
    title: 'Fenster',
    image: asset('images/projects/window-after.webp'),
  },
  {
    title: 'Schimmel',
    image: asset('images/projects/mold-after.webp'),
  },
  {
    title: 'Montage',
    image: asset('images/people/arsen-brick.webp'),
  },
]

const contactItems = [
  { label: 'Telefon', value: '0209 972 31 54', href: 'tel:+492099723154' },
  { label: 'Mobil', value: '0178 166 16 15', href: 'tel:+491781661615' },
  { label: 'Mail', value: 'info@hs-am.de', href: 'mailto:info@hs-am.de' },
  {
    label: 'Ort',
    value: '45883 Gelsenkirchen',
    href: 'https://www.google.com/maps/search/?api=1&query=45883+Gelsenkirchen',
  },
]

const renderGridCard = ({ title, note, image, accent, span }) => `
  <article class="service-card ${span ? `service-card--${span}` : ''}">
    <img class="service-card__image" src="${image}" alt="${title}" loading="lazy" />
    <div class="service-card__overlay">
      <span class="service-card__accent">${accent}</span>
      <h3>${title}</h3>
      <p>${note}</p>
    </div>
  </article>
`

const renderStory = ({ title, text, before, after }) => `
  <article class="story-card">
    <div class="story-card__head">
      <span class="eyebrow">Vorher / Nachher</span>
      <h3>${title}</h3>
      <p>${text}</p>
    </div>
    <div class="story-card__media">
      <figure>
        <img src="${before}" alt="${title} vorher" loading="lazy" />
        <figcaption>Vorher</figcaption>
      </figure>
      <figure>
        <img src="${after}" alt="${title} nachher" loading="lazy" />
        <figcaption>Nachher</figcaption>
      </figure>
    </div>
  </article>
`

const renderPortrait = ({ title, image }) => `
  <article class="portrait-card">
    <img src="${image}" alt="${title}" loading="lazy" />
    <div class="portrait-card__label">${title}</div>
  </article>
`

const renderGalleryItem = ({ title, image }) => `
  <article class="gallery-card">
    <img src="${image}" alt="${title}" loading="lazy" />
    <div class="gallery-card__label">${title}</div>
  </article>
`

const renderContactItem = ({ label, value, href }) => {
  if (href.startsWith('http')) {
    return `
      <a class="contact-card" href="${href}" target="_blank" rel="noreferrer">
        <span>${label}</span>
        <strong>${value}</strong>
      </a>
    `
  }

  return `
    <a class="contact-card" href="${href}">
      <span>${label}</span>
      <strong>${value}</strong>
    </a>
  `
}

document.querySelector('#app').innerHTML = `
  <div class="page">
    <header class="site-header">
      <a class="brand" href="#top" aria-label="HS-AM Startseite">
        <img class="brand__mark" src="${asset('hs-am-logo.svg')}" alt="HS-AM" />
      </a>
      <nav class="site-nav" aria-label="Hauptnavigation">
        <a href="#leistungen">Leistungen</a>
        <a href="#arbeiten">Arbeiten</a>
        <a href="#kontakt">Kontakt</a>
      </nav>
      <a class="header-phone" href="tel:+492099723154">0209 972 31 54</a>
    </header>

    <main id="top">
      <section class="hero section">
        <div class="hero__copy">
          <p class="eyebrow">Heimwerker Service aus Gelsenkirchen</p>
          <h1>Renovierung, Montage und Reparatur. Klar. Schnell. Fertig.</h1>
          <p class="hero__lede">
            Fenster, Turen, Waende, Boeden, Fliesen, Schimmel und Wasserschaden aus einer Hand.
          </p>
          <div class="hero__actions">
            <a class="button button--primary" href="tel:+492099723154">Jetzt anrufen</a>
            <a class="button button--ghost" href="#arbeiten">Bilder ansehen</a>
          </div>
          <div class="hero__chips" aria-label="Kernleistungen">
            ${quickTags.map((tag) => `<span>${tag}</span>`).join('')}
          </div>
          <div class="hero__facts" aria-label="Erfahrung und Qualitaet">
            ${experienceFacts
              .map(
                (fact) => `
                  <article class="hero-fact">
                    <span>${fact.title}</span>
                    <strong>${fact.text}</strong>
                  </article>
                `,
              )
              .join('')}
          </div>
        </div>

        <div class="hero__visual">
          <article class="hero-tile hero-tile--large">
            <img src="${asset('images/people/arsen-workshop.webp')}" alt="Arsen im Renovierungsraum" loading="eager" />
            <div class="hero-tile__caption">
              <span>Vor Ort</span>
              <strong>Saubere Arbeit. Ruhige Baustellen.</strong>
            </div>
          </article>
          <article class="hero-tile hero-tile--small hero-tile--warm">
            <img src="${asset('images/people/arsen-kitchen.webp')}" alt="Arsen in der Kueche" loading="lazy" />
            <div class="hero-tile__caption">
              <span>Innenausbau</span>
              <strong>Details, die direkt fertig wirken.</strong>
            </div>
          </article>
          <article class="hero-tile hero-tile--small">
            <img src="${asset('images/projects/window-after.webp')}" alt="Erneuertes Fenster" loading="lazy" />
            <div class="hero-tile__caption">
              <span>Vorher / Nachher</span>
              <strong>Der Unterschied ist sofort sichtbar.</strong>
            </div>
          </article>
        </div>
      </section>

      <section class="section section--tight">
        <div class="tag-marquee" aria-label="Leistungsbereiche">
          ${quickTags.map((tag) => `<span>${tag}</span>`).join('')}
        </div>
      </section>

      <section id="leistungen" class="section">
        <div class="section-heading">
          <p class="eyebrow">Leistungen</p>
          <h2>Weniger Erklaerung. Mehr echte Bilder.</h2>
          <p>Die Seite zeigt direkt, was HS-AM macht, ohne sich in Text zu verlieren.</p>
        </div>
        <div class="service-grid">
          ${serviceCards.map(renderGridCard).join('')}
        </div>
      </section>

      <section id="arbeiten" class="section">
        <div class="section-heading">
          <p class="eyebrow">Arbeiten</p>
          <h2>Vorher. Nachher. Fertig.</h2>
          <p>Diese Referenzen stammen aus der alten Seite und tragen den neuen Look jetzt mit.</p>
        </div>
        <div class="story-grid">
          ${stories.map(renderStory).join('')}
        </div>
      </section>

      <section class="section">
        <div class="section-heading section-heading--split">
          <div>
            <p class="eyebrow">Arsen Movsisyan</p>
            <h2>Ein Ansprechpartner, der selbst mit anpackt.</h2>
          </div>
          <p>
            Von der ersten Besichtigung bis zur letzten Fuge bleibt es klar, direkt und sauber.
          </p>
        </div>
        <div class="portrait-grid">
          ${portraits.map(renderPortrait).join('')}
        </div>
      </section>

      <section class="section">
        <div class="section-heading">
          <p class="eyebrow">Bildwelt</p>
          <h2>Modern, ruhig und mehr Galerie als Broschuere.</h2>
          <p>Genau die Richtung, die du mit Grove gemeint hast.</p>
        </div>
        <div class="gallery-grid">
          ${gallery.map(renderGalleryItem).join('')}
        </div>
      </section>

      <section id="kontakt" class="section">
        <div class="contact-panel">
          <div class="contact-panel__copy">
            <p class="eyebrow">Kontakt</p>
            <h2>Ein Anruf reicht. Den Rest machen wir ordentlich.</h2>
            <p>
              HS-AM uebernimmt Renovierungs- und Ausbesserungsarbeiten aller Art in Gelsenkirchen
              und Umgebung.
            </p>
          </div>
          <div class="contact-grid">
            ${contactItems.map(renderContactItem).join('')}
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="site-footer__brand">
        <img src="${asset('hs-am-logo.svg')}" alt="HS-AM" />
      </div>
      <div class="site-footer__meta">
        <p>Heimwerker Service Arsen Movsisyan</p>
        <p>Renovierungs- und Ausbesserungsarbeiten aller Art</p>
      </div>
      <div class="site-footer__meta">
        <p>Wilhelmine-Victoria-Str. 6, 45883 Gelsenkirchen</p>
        <p><a href="mailto:info@hs-am.de">info@hs-am.de</a></p>
      </div>
    </footer>

    <a class="mobile-call" href="tel:+492099723154">Anrufen</a>
  </div>
`
