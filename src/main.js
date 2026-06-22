import './style.css'

const asset = (path) => `${import.meta.env.BASE_URL}${path}`

const servicePills = [
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
    title: 'Direkter Kontakt',
    text: 'Du sprichst direkt mit Arsen, nicht mit einer Hotline',
  },
  {
    title: 'Alles aus einer Hand',
    text: 'Fenster, Waende, Boeden, Feuchte und Montage',
  },
]

const serviceCards = [
  {
    title: 'Fenster & Turen',
    note: 'Einbauen, austauschen und sauber einstellen.',
    image: asset('images/people/arsen-workshop.webp'),
    accent: 'Montage',
  },
  {
    title: 'Waende & Ausbau',
    note: 'Trockenbau, Durchbrueche und klare Linien.',
    image: asset('images/people/arsen-framing.webp'),
    accent: 'Ausbau',
  },
  {
    title: 'Boden & Fliesen',
    note: 'Neuer Belag, ruhige Fugen, sauberer Abschluss.',
    image: asset('images/projects/tiles-after.webp'),
    accent: 'Boden',
  },
  {
    title: 'Bad & Kueche',
    note: 'Montage, Anschluesse und Feinarbeit.',
    image: asset('images/people/arsen-kitchen.webp'),
    accent: 'Innenraum',
  },
  {
    title: 'Feuchte & Schimmel',
    note: 'Schnell raus damit, damit der Raum wieder stimmt.',
    image: asset('images/projects/mold-after.webp'),
    accent: 'Sanierung',
  },
  {
    title: 'Kleinauftraege',
    note: 'Auch die kleinen Jobs werden ordentlich fertig.',
    image: asset('images/people/arsen-pro.webp'),
    accent: 'Service',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Kurz anrufen',
    text: 'Du schilderst kurz, was ansteht. Arsen hoert zu und sagt dir direkt, ob es passt.',
  },
  {
    number: '02',
    title: 'Foto oder Besichtigung',
    text: 'Wenn du willst, schickst du ein Bild per Mail oder wir schauen vor Ort drauf.',
  },
  {
    number: '03',
    title: 'Sauber fertig machen',
    text: 'Wenn es losgeht, wird es ordentlich gemacht. Ohne Theater, ohne Umwege.',
  },
]

const videoStories = [
  {
    kicker: 'Video 01',
    title: 'Arsen auf der Baustelle',
    note: 'Direkter Eindruck, echte Arbeit, kein gestelltes Gerede. Tippen zum Abspielen.',
    poster: asset('images/people/arsen-workshop.webp'),
    src: asset('videos/arsen-hsam-01.mp4'),
  },
  {
    kicker: 'Video 02',
    title: 'Montage und Innenausbau',
    note: 'So sieht es aus, wenn etwas sauber abgeschlossen wird. Tippen zum Abspielen.',
    poster: asset('images/people/arsen-kitchen.webp'),
    src: asset('videos/arsen-hsam-02.mp4'),
  },
]

const stories = [
  {
    title: 'Wasserschaden',
    text: 'Wieder trocken, wieder ordentlich, wieder nutzbar.',
    before: asset('images/projects/water-damage-before.webp'),
    after: asset('images/projects/water-damage-after.webp'),
  },
  {
    title: 'Tragende Wand',
    text: 'Ein Umbau, bei dem die Technik nachher verschwindet.',
    before: asset('images/projects/steel-beam-before.webp'),
    after: asset('images/projects/steel-beam-after.webp'),
  },
  {
    title: 'Duschkabine',
    text: 'Sauber montiert, klar abgeschlossen.',
    before: asset('images/projects/shower-before.webp'),
    after: asset('images/projects/shower-after.webp'),
  },
]

const portraits = [
  {
    title: 'Arsen vor Ort',
    image: asset('images/people/arsen-helmet-blue.webp'),
  },
  {
    title: 'Ruhig im Innenausbau',
    image: asset('images/people/arsen-kitchen.webp'),
  },
  {
    title: 'Planung und Blick fuer Details',
    image: asset('images/people/arsen-suit.webp'),
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

const renderFact = ({ title, text }) => `
  <article class="hero-fact">
    <span>${title}</span>
    <strong>${text}</strong>
  </article>
`

const renderServiceCard = ({ title, note, image, accent }) => `
  <article class="service-card">
    <div class="service-card__media">
      <img class="service-card__image" src="${image}" alt="${title}" loading="lazy" />
    </div>
    <div class="service-card__copy">
      <span class="service-card__accent">${accent}</span>
      <h3>${title}</h3>
      <p>${note}</p>
    </div>
  </article>
`

const renderProcessCard = ({ number, title, text }) => `
  <article class="process-card">
    <span class="process-card__number">${number}</span>
    <h3>${title}</h3>
    <p>${text}</p>
  </article>
`

const renderVideoCard = ({ kicker, title, note, poster, src }) => `
  <article class="video-card">
    <video
      class="video-card__media"
      muted
      playsinline
      preload="none"
      poster="${poster}"
      data-src="${src}"
      aria-label="${title}"
    ></video>
    <div class="video-card__copy">
      <span class="eyebrow">${kicker}</span>
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
        <a href="#videos">Videos</a>
        <a href="#arbeiten">Arbeiten</a>
        <a href="#kontakt">Kontakt</a>
      </nav>
      <a class="header-phone" href="tel:+492099723154">0209 972 31 54</a>
    </header>

    <main id="top">
      <section class="hero section">
        <div class="hero__copy">
          <p class="eyebrow">Heimwerker Service aus Gelsenkirchen</p>
          <h1>Renovierung. Montage. Reparatur. Sauber fertig gemacht.</h1>
          <p class="hero__lede">
            Seit 2006 macht Arsen die Arbeit selbst. Wenn du etwas im Haus sauber gelost haben
            willst, reicht ein Anruf oder eine kurze Mail mit Foto.
          </p>
          <div class="hero__actions">
            <a class="button button--primary" href="tel:+492099723154">Arsen anrufen</a>
            <a class="button button--ghost" href="mailto:info@hs-am.de?subject=HS-AM%20Anfrage">Foto
            mailen</a>
          </div>
          <div class="hero__chips" aria-label="Kernleistungen">
            ${servicePills.map((tag) => `<span>${tag}</span>`).join('')}
          </div>
          <div class="hero__facts" aria-label="Erfahrung und Qualitaet">
            ${experienceFacts
              .map(renderFact)
              .join('')}
          </div>
        </div>

        <div class="hero__media">
          <article class="media-card media-card--video">
            <video
              class="media-card__media"
              muted
              playsinline
              preload="none"
              poster="${asset('images/people/arsen-workshop.webp')}"
              data-src="${asset('videos/arsen-hsam-01.mp4')}"
              aria-label="Arsen auf der Baustelle"
            ></video>
            <div class="media-card__caption">
              <span>Vor Ort</span>
              <strong>Arsen zeigt direkt, wie er arbeitet. Tippen zum Abspielen.</strong>
            </div>
          </article>
          <article class="media-card">
            <img
              class="media-card__media"
              src="${asset('images/people/arsen-kitchen.webp')}"
              alt="Arsen in der Kueche"
              loading="eager"
            />
            <div class="media-card__caption">
              <span>Innenausbau</span>
              <strong>Saubere Montage. Ruhiger Abschluss.</strong>
            </div>
          </article>
          <article class="media-card media-card--note">
            <div class="media-card__note">
              <span>Seit 2006</span>
              <strong>Direkter Kontakt, klare Ansage und saubere Arbeit aus einer Hand.</strong>
            </div>
          </article>
        </div>
      </section>

      <section id="leistungen" class="section">
        <div class="section-heading">
          <p class="eyebrow">Leistungen</p>
          <h2>Was Arsen macht. Klar und ohne Umwege.</h2>
          <p>
            Fenster, Tueren, Waende, Boden, Fliesen, Feuchte und die kleinen Dinge dazwischen.
            Alles sauber durchgezogen.
          </p>
        </div>
        <div class="service-grid">
          ${serviceCards.map(renderServiceCard).join('')}
        </div>
      </section>

      <section class="section">
        <div class="section-heading section-heading--split">
          <div>
            <p class="eyebrow">Ablauf</p>
            <h2>So laeuft es ab.</h2>
          </div>
          <p>
            Kurz anrufen, kurz abklaeren, dann sauber ausfuehren. So bleibt es einfach und
            angenehm fuer alle.
          </p>
        </div>
        <div class="process-grid">
          ${processSteps.map(renderProcessCard).join('')}
        </div>
      </section>

      <section id="videos" class="section">
        <div class="section-heading section-heading--split">
          <div>
            <p class="eyebrow">Videos</p>
            <h2>So sieht das in echt aus.</h2>
          </div>
          <p>
            Zwei kurze Clips mit echtem Baustellengefuehl. Kein Theater, kein Iframe, nur Arbeit,
            die man direkt versteht.
          </p>
        </div>
        <div class="video-grid">
          ${videoStories.map(renderVideoCard).join('')}
        </div>
      </section>

      <section id="arbeiten" class="section">
        <div class="section-heading">
          <p class="eyebrow">Arbeiten</p>
          <h2>Vorher. Nachher. Ordentlich.</h2>
          <p>Ein paar Beispiele, damit man sofort sieht, wie stark der Unterschied sein kann.</p>
        </div>
        <div class="story-grid">
          ${stories.map(renderStory).join('')}
        </div>
      </section>

      <section class="section">
        <div class="section-heading section-heading--split">
          <div>
            <p class="eyebrow">Arsen Movsisyan</p>
            <h2>Der Mann, der wirklich kommt.</h2>
          </div>
          <p>
            Kein Zwischenverkauf, kein Callcenter, keine lose Nummer. Du redest direkt mit Arsen
            und bekommst eine ehrliche Ansage.
          </p>
        </div>
        <div class="portrait-grid">
          ${portraits.map(renderPortrait).join('')}
        </div>
      </section>

      <section id="kontakt" class="section">
        <div class="contact-panel">
          <div class="contact-panel__copy">
            <p class="eyebrow">Kontakt</p>
            <h2>Ruf Arsen an. Dann laeuft es.</h2>
            <p>
              Wenn du ein Foto schickst oder kurz anrufst, bekommst du schnell eine klare
              Einschaetzung. Wenn es passt, legen wir los.
            </p>
            <div class="contact-panel__actions">
              <a class="button button--primary" href="tel:+492099723154">Arsen anrufen</a>
              <a class="button button--ghost" href="mailto:info@hs-am.de?subject=HS-AM%20Anfrage">Foto
              mailen</a>
            </div>
          </div>
          <div class="contact-grid">
            ${contactItems.map(renderContactItem).join('')}
          </div>
        </div>
        <article class="final-cta">
          <p class="eyebrow eyebrow--light">Letzter Schritt</p>
          <h2>Wenn es ordentlich gemacht werden soll, ist Arsen dein erster Anruf.</h2>
          <p>
            Kein Formular-Marathon. Keine leeren Phrasen. Ruf direkt an oder schick ein Foto per
            Mail, dann weisst du schnell, wie es weitergeht.
          </p>
          <div class="hero__actions">
            <a class="button button--primary" href="tel:+492099723154">Jetzt Arsen anrufen</a>
            <a class="button button--ghost" href="mailto:info@hs-am.de?subject=HS-AM%20Anfrage">Mail
            senden</a>
          </div>
        </article>
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

    <a class="mobile-call" href="tel:+492099723154">Arsen anrufen</a>
  </div>
`

const loadVideo = (video) => {
  if (video.dataset.loaded === 'true') {
    return
  }

  const source = document.createElement('source')
  source.src = video.dataset.src
  source.type = 'video/mp4'
  video.appendChild(source)
  video.dataset.loaded = 'true'
  video.load()
}

const inlineVideos = document.querySelectorAll('video[data-src]')

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return
        }

        loadVideo(entry.target)
        obs.unobserve(entry.target)
      })
    },
    { rootMargin: '200px 0px' },
  )

  inlineVideos.forEach((video) => observer.observe(video))
} else {
  inlineVideos.forEach(loadVideo)
}
