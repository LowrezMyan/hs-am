(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[`Fenster`,`Turen`,`Kueche`,`Bad`,`Boden`,`Waende`,`Schimmel`,`Wasserschaden`,`Montage`],t=[{title:`Seit 2006`,text:`20 Jahre saubere Arbeit auf echten Baustellen`},{title:`Arsen vor Ort`,text:`kein Vermittler, kein Callcenter, nur der Macher selbst`},{title:`Alles aus einer Hand`,text:`Fenster, Waende, Boeden, Feuchte und Montage`}],n=[{title:`Fenster & Turen`,note:`Einbau, Austausch und saubere Abschluesse`,image:`/images/people/arsen-workshop.webp`,accent:`Montage`,span:`wide`},{title:`Bad & Fliesen`,note:`Saubere Fliesen, Fugen und klare Kanten`,image:`/images/projects/tiles-after.webp`,accent:`Fliesen`},{title:`Waende & Ausbau`,note:`Trockenbau, Rigips und klare Linien`,image:`/images/people/arsen-framing.webp`,accent:`Struktur`},{title:`Schimmel & Feuchte`,note:`Schaden raus, Raum wieder ruhig`,image:`/images/projects/mold-after.webp`,accent:`Sanierung`,span:`tall`},{title:`Boeden & Belage`,note:`PVC, Linoleum, Laminat und Kanten, die sitzen`,image:`/images/people/arsen-kitchen.webp`,accent:`Boden`},{title:`Umbau & Details`,note:`Kleine Arbeiten mit grossem Unterschied`,image:`/images/people/arsen-pro.webp`,accent:`Ausbau`}],r=[{title:`Wasserschaden`,text:`Sauber aufgeraumt, neu aufgebaut, wieder wohnbar.`,before:`/images/projects/water-damage-before.webp`,after:`/images/projects/water-damage-after.webp`},{title:`Tragende Wand`,text:`Umbau mit Stahltrager und ruhiger Optik danach.`,before:`/images/projects/steel-beam-before.webp`,after:`/images/projects/steel-beam-after.webp`},{title:`Duschkabine`,text:`Vorher improvisiert, nachher ordentlich montiert.`,before:`/images/projects/shower-before.webp`,after:`/images/projects/shower-after.webp`}],i=[{title:`Auf der Baustelle`,image:`/images/people/arsen-helmet-blue.webp`},{title:`Kuechen & Feinheit`,image:`/images/people/arsen-kitchen.webp`},{title:`Planung mit Stil`,image:`/images/people/arsen-suit.webp`}],a=[{title:`Framing`,image:`/images/projects/steel-beam-after.webp`},{title:`Fenster`,image:`/images/projects/window-after.webp`},{title:`Schimmel`,image:`/images/projects/mold-after.webp`},{title:`Montage`,image:`/images/people/arsen-brick.webp`}],o=[{label:`Telefon`,value:`0209 972 31 54`,href:`tel:+492099723154`},{label:`Mobil`,value:`0178 166 16 15`,href:`tel:+491781661615`},{label:`Mail`,value:`info@hs-am.de`,href:`mailto:info@hs-am.de`},{label:`Ort`,value:`45883 Gelsenkirchen`,href:`https://www.google.com/maps/search/?api=1&query=45883+Gelsenkirchen`}],s=({title:e,note:t,image:n,accent:r,span:i})=>`
  <article class="service-card ${i?`service-card--${i}`:``}">
    <img class="service-card__image" src="${n}" alt="${e}" loading="lazy" />
    <div class="service-card__overlay">
      <span class="service-card__accent">${r}</span>
      <h3>${e}</h3>
      <p>${t}</p>
    </div>
  </article>
`,c=({title:e,text:t,before:n,after:r})=>`
  <article class="story-card">
    <div class="story-card__head">
      <span class="eyebrow">Vorher / Nachher</span>
      <h3>${e}</h3>
      <p>${t}</p>
    </div>
    <div class="story-card__media">
      <figure>
        <img src="${n}" alt="${e} vorher" loading="lazy" />
        <figcaption>Vorher</figcaption>
      </figure>
      <figure>
        <img src="${r}" alt="${e} nachher" loading="lazy" />
        <figcaption>Nachher</figcaption>
      </figure>
    </div>
  </article>
`,l=({title:e,image:t})=>`
  <article class="portrait-card">
    <img src="${t}" alt="${e}" loading="lazy" />
    <div class="portrait-card__label">${e}</div>
  </article>
`,u=({title:e,image:t})=>`
  <article class="gallery-card">
    <img src="${t}" alt="${e}" loading="lazy" />
    <div class="gallery-card__label">${e}</div>
  </article>
`,d=({label:e,value:t,href:n})=>n.startsWith(`http`)?`
      <a class="contact-card" href="${n}" target="_blank" rel="noreferrer">
        <span>${e}</span>
        <strong>${t}</strong>
      </a>
    `:`
    <a class="contact-card" href="${n}">
      <span>${e}</span>
      <strong>${t}</strong>
    </a>
  `;document.querySelector(`#app`).innerHTML=`
  <div class="page">
    <header class="site-header">
      <a class="brand" href="#top" aria-label="HS-AM Startseite">
        <img class="brand__mark" src="/hs-am-logo.svg" alt="HS-AM" />
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
            ${e.map(e=>`<span>${e}</span>`).join(``)}
          </div>
          <div class="hero__facts" aria-label="Erfahrung und Qualitaet">
            ${t.map(e=>`
                  <article class="hero-fact">
                    <span>${e.title}</span>
                    <strong>${e.text}</strong>
                  </article>
                `).join(``)}
          </div>
        </div>

        <div class="hero__visual">
          <article class="hero-tile hero-tile--large">
            <img src="/images/people/arsen-workshop.webp" alt="Arsen im Renovierungsraum" loading="eager" />
            <div class="hero-tile__caption">
              <span>Vor Ort</span>
              <strong>Saubere Arbeit. Ruhige Baustellen.</strong>
            </div>
          </article>
          <article class="hero-tile hero-tile--small hero-tile--warm">
            <img src="/images/people/arsen-kitchen.webp" alt="Arsen in der Kueche" loading="lazy" />
            <div class="hero-tile__caption">
              <span>Innenausbau</span>
              <strong>Details, die direkt fertig wirken.</strong>
            </div>
          </article>
          <article class="hero-tile hero-tile--small">
            <img src="/images/projects/window-after.webp" alt="Erneuertes Fenster" loading="lazy" />
            <div class="hero-tile__caption">
              <span>Vorher / Nachher</span>
              <strong>Der Unterschied ist sofort sichtbar.</strong>
            </div>
          </article>
        </div>
      </section>

      <section class="section section--tight">
        <div class="tag-marquee" aria-label="Leistungsbereiche">
          ${e.map(e=>`<span>${e}</span>`).join(``)}
        </div>
      </section>

      <section id="leistungen" class="section">
        <div class="section-heading">
          <p class="eyebrow">Leistungen</p>
          <h2>Weniger Erklaerung. Mehr echte Bilder.</h2>
          <p>Die Seite zeigt direkt, was HS-AM macht, ohne sich in Text zu verlieren.</p>
        </div>
        <div class="service-grid">
          ${n.map(s).join(``)}
        </div>
      </section>

      <section id="arbeiten" class="section">
        <div class="section-heading">
          <p class="eyebrow">Arbeiten</p>
          <h2>Vorher. Nachher. Fertig.</h2>
          <p>Diese Referenzen stammen aus der alten Seite und tragen den neuen Look jetzt mit.</p>
        </div>
        <div class="story-grid">
          ${r.map(c).join(``)}
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
          ${i.map(l).join(``)}
        </div>
      </section>

      <section class="section">
        <div class="section-heading">
          <p class="eyebrow">Bildwelt</p>
          <h2>Modern, ruhig und mehr Galerie als Broschuere.</h2>
          <p>Genau die Richtung, die du mit Grove gemeint hast.</p>
        </div>
        <div class="gallery-grid">
          ${a.map(u).join(``)}
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
            ${o.map(d).join(``)}
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="site-footer__brand">
        <img src="/hs-am-logo.svg" alt="HS-AM" />
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
`;