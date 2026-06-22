import './style.css'

const services = [
  {
    title: 'Fenster, Turen & Montage',
    text: 'Einbau, Austausch und saubere Nacharbeiten bei Fenstern, Turen, Zargen, Regalen und passgenauen Bauteilen.',
  },
  {
    title: 'Wande, Boden & Ausbau',
    text: 'Ausbesserung von Wanden, Estrich, Rigips, Paneelen und allen sichtbaren Oberflachen im Innenbereich.',
  },
  {
    title: 'Fliesen & Belage',
    text: 'Fliesen, Platten, Laminat, Linoleum, PVC und Kunststoffboden mit sauberem Abschluss und robustem Finish.',
  },
  {
    title: 'Schimmel & Wasserschaden',
    text: 'Beseitigung von Feuchteschaden, Schimmelspuren und den daraus entstehenden Schadenbildern.',
  },
  {
    title: 'Reparatur & Wartung',
    text: 'Schlosser, Schalter, Dichtungen, Wasserhahne, Siphons, Beschlage und viele kleine Arbeiten aus einer Hand.',
  },
  {
    title: 'Mobel, Kuche & Details',
    text: 'Aufbau, Anpassung, Wandmontage, Silikonfugen, Duschkabinen und die Arbeiten, die am Ende den Unterschied machen.',
  },
]

const proofPoints = [
  'Renovierungs- und Ausbesserungsarbeiten aller Art',
  'Direkter Kontakt mit Arsen Movsisyan',
  'Echte Referenzen aus der bisherigen Arbeit',
  'Besichtigungstermin unkompliziert telefonisch vereinbaren',
]

const projects = [
  {
    eyebrow: 'Schimmel & Feuchte',
    title: 'Wasserschaden saniert',
    text: 'Vorher sichtbarer Schaden, nachher wieder sauber aufgebaut und optisch beruhigt.',
    before: '/images/projects/water-damage-before.webp',
    after: '/images/projects/water-damage-after.webp',
  },
  {
    eyebrow: 'Umbau & Statik',
    title: 'Tragende Wand durch Stahltrager ersetzt',
    text: 'Ein starker Eingriff, sauber umgesetzt und anschliessend wieder ordentlich in den Raum integriert.',
    before: '/images/projects/steel-beam-before.webp',
    after: '/images/projects/steel-beam-after.webp',
  },
  {
    eyebrow: 'Bad & Ausbau',
    title: 'Duschkabine neu montiert',
    text: 'Ein klassisches Vorher-Nachher Beispiel fur den Unterschied zwischen improvisiert und sauber fertig.',
    before: '/images/projects/shower-before.webp',
    after: '/images/projects/shower-after.webp',
  },
]

const gallery = [
  {
    title: 'Fliesenverlegung',
    image: '/images/projects/tiles-after.webp',
  },
  {
    title: 'Holzfenster erneuert',
    image: '/images/projects/window-after.webp',
  },
  {
    title: 'Schimmel beseitigt',
    image: '/images/projects/mold-after.webp',
  },
]

document.querySelector('#app').innerHTML = `
  <div class="page-shell">
    <header class="topbar">
      <a class="brand" href="#top" aria-label="HS-AM Startseite">
        <span class="brand-mark">HS</span>
        <span class="brand-copy">
          <strong>HS-AM</strong>
          <span>Heimwerker Service Arsen Movsisyan</span>
        </span>
      </a>
      <nav class="topnav" aria-label="Hauptnavigation">
        <a href="#leistungen">Leistungen</a>
        <a href="#projekte">Projekte</a>
        <a href="#kontakt">Kontakt</a>
      </nav>
      <a class="cta-chip" href="tel:+492099723154">0209 972 31 54</a>
    </header>

    <main id="top">
      <section class="hero section">
        <div class="hero-copy">
          <p class="eyebrow">Allround Bauservice aus Gelsenkirchen</p>
          <h1>Modern saniert. Sauber montiert. Alles aus einer Hand.</h1>
          <p class="hero-text">
            Von Fenstern und Turen uber Fliesen, Boden, Silikonfugen und Duschkabinen
            bis zu Schimmelbeseitigung, Wasserschaden und Stahltrager-Umbauten:
            HS-AM ubernimmt die Arbeiten, fur die man einen zuverlassigen Macher braucht.
          </p>
          <div class="hero-actions">
            <a class="button button-primary" href="tel:+492099723154">Jetzt anrufen</a>
            <a class="button button-secondary" href="#projekte">Referenzen ansehen</a>
          </div>
          <ul class="proof-list" aria-label="Vorteile">
            ${proofPoints.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </div>

        <div class="hero-visual">
          <div class="hero-card hero-card-main">
            <img src="/images/projects/window-after.webp" alt="Erneuerte Holzfenster" loading="eager" />
            <div class="hero-card-copy">
              <span>Fenster & Oberflachen</span>
              <strong>Saubere Details statt halbe Losungen</strong>
            </div>
          </div>
          <div class="hero-card hero-card-accent">
            <img src="/images/projects/tiles-after.webp" alt="Neu verlegte Fliesen" loading="lazy" />
            <div class="status-pill">
              <span></span>
              Einsatzbereit fur kleine und grosse Renovierungsarbeiten
            </div>
          </div>
        </div>
      </section>

      <section id="leistungen" class="section">
        <div class="section-heading">
          <p class="eyebrow">Leistungen</p>
          <h2>Kein Bauchladen. Eher ein Mann, der auf der Baustelle wirklich liefert.</h2>
          <p>
            Die alte Seite hat es schon gesagt: Wenn etwas eingebaut, ausgebessert,
            verlegt, gewechselt oder montiert werden muss, ist HS-AM genau dafur da.
          </p>
        </div>
        <div class="services-grid">
          ${services
            .map(
              (service, index) => `
                <article class="service-card">
                  <span class="service-index">0${index + 1}</span>
                  <h3>${service.title}</h3>
                  <p>${service.text}</p>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>

      <section class="section process-section">
        <div class="section-heading compact">
          <p class="eyebrow">Ablauf</p>
          <h2>Klar, direkt und ohne Agentur-Gelaber.</h2>
        </div>
        <div class="process-grid">
          <article>
            <span>01</span>
            <h3>Anrufen oder Mail schreiben</h3>
            <p>Direkter Kontakt ohne Zwischenstationen. Anliegen kurz schildern, Termin abstimmen.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Vor Ort ansehen</h3>
            <p>Besichtigung, Einschatzung und Klarheit daruber, welche Arbeiten wirklich sinnvoll sind.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Sauber umsetzen</h3>
            <p>Renovieren, montieren, reparieren und ordentlich abschliessen statt halbfertig zu verlassen.</p>
          </article>
        </div>
      </section>

      <section id="projekte" class="section projects-section">
        <div class="section-heading">
          <p class="eyebrow">Referenzen</p>
          <h2>Echte Vorher-Nachher Arbeiten von der alten Seite, nur endlich modern gezeigt.</h2>
          <p>Die Bilder stammen aus dem bisherigen Bestand und wurden fur die neue Seite neu aufbereitet.</p>
        </div>
        <div class="projects-grid">
          ${projects
            .map(
              (project) => `
                <article class="project-card">
                  <div class="project-copy">
                    <p class="project-eyebrow">${project.eyebrow}</p>
                    <h3>${project.title}</h3>
                    <p>${project.text}</p>
                  </div>
                  <div class="before-after">
                    <figure>
                      <img src="${project.before}" alt="${project.title} vorher" loading="lazy" />
                      <figcaption>Vorher</figcaption>
                    </figure>
                    <figure>
                      <img src="${project.after}" alt="${project.title} nachher" loading="lazy" />
                      <figcaption>Nachher</figcaption>
                    </figure>
                  </div>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>

      <section class="section gallery-section">
        <div class="gallery-copy">
          <p class="eyebrow">Weitere Arbeiten</p>
          <h2>Fliesen, Fenster, Schimmelbeseitigung und alles dazwischen.</h2>
          <p>
            Die neue Marke setzt auf Klarheit: handwerkliche Breite zeigen, ohne unruhig zu wirken.
            Deshalb mischt die Seite starke Aussagen mit echten Baustellenbildern.
          </p>
        </div>
        <div class="gallery-grid">
          ${gallery
            .map(
              (item) => `
                <article class="gallery-card">
                  <img src="${item.image}" alt="${item.title}" loading="lazy" />
                  <h3>${item.title}</h3>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>

      <section id="kontakt" class="section contact-section">
        <div class="contact-panel">
          <div class="section-heading compact light">
            <p class="eyebrow">Kontakt</p>
            <h2>Wenn etwas gemacht werden muss, reicht ein Anruf.</h2>
            <p>
              HS-AM sitzt in Gelsenkirchen und ubernimmt Renovierungs- und Ausbesserungsarbeiten
              aller Art. Besichtigungstermine konnen direkt vereinbart werden.
            </p>
          </div>
          <div class="contact-grid">
            <a href="tel:+492099723154">
              <span>Telefon</span>
              <strong>0209 972 31 54</strong>
            </a>
            <a href="tel:+491781661615">
              <span>Mobil</span>
              <strong>0178 166 16 15</strong>
            </a>
            <a href="mailto:info@hs-am.de">
              <span>E-Mail</span>
              <strong>info@hs-am.de</strong>
            </a>
            <div>
              <span>Adresse</span>
              <strong>Wilhelmine-Victoria-Str. 6<br />45883 Gelsenkirchen</strong>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div>
        <strong>HS-AM</strong>
        <p>Heimwerker Service Arsen Movsisyan</p>
      </div>
      <div>
        <p>Renovierungs- und Ausbesserungsarbeit aller Art</p>
        <p>Inhaber: Arsen Movsisyan</p>
      </div>
      <div>
        <p>USt-IdNr.: 319/5111/1969</p>
        <p><a href="mailto:info@hs-am.de">info@hs-am.de</a></p>
      </div>
    </footer>

    <a class="mobile-fab" href="tel:+492099723154" aria-label="Jetzt anrufen">
      Anrufen
    </a>
  </div>
`
