(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=e=>`./${e}`,t=[`Fenster`,`Turen`,`Kueche`,`Bad`,`Boden`,`Waende`,`Schimmel`,`Wasserschaden`,`Montage`],n=[{title:`Seit 2006`,text:`20 Jahre saubere Arbeit auf echten Baustellen`},{title:`Direkter Kontakt`,text:`Du sprichst direkt mit Arsen, nicht mit einer Hotline`},{title:`Alles aus einer Hand`,text:`Fenster, Waende, Boeden, Feuchte und Montage`}],r=[{title:`Fenster & Turen`,note:`Einbauen, austauschen und sauber einstellen.`,image:e(`images/people/arsen-workshop.webp`),accent:`Montage`},{title:`Waende & Ausbau`,note:`Trockenbau, Durchbrueche und klare Linien.`,image:e(`images/people/arsen-framing.webp`),accent:`Ausbau`},{title:`Boden & Fliesen`,note:`Neuer Belag, ruhige Fugen, sauberer Abschluss.`,image:e(`images/projects/tiles-after.webp`),accent:`Boden`},{title:`Bad & Kueche`,note:`Montage, Anschluesse und Feinarbeit.`,image:e(`images/people/arsen-kitchen.webp`),accent:`Innenraum`},{title:`Feuchte & Schimmel`,note:`Schnell raus damit, damit der Raum wieder stimmt.`,image:e(`images/projects/mold-after.webp`),accent:`Sanierung`},{title:`Kleinauftraege`,note:`Auch die kleinen Jobs werden ordentlich fertig.`,image:e(`images/people/arsen-pro.webp`),accent:`Service`}],i=[{number:`01`,title:`Kurz anrufen`,text:`Du schilderst kurz, was ansteht. Arsen hoert zu und sagt dir direkt, ob es passt.`},{number:`02`,title:`Foto oder Besichtigung`,text:`Wenn du willst, schickst du ein Bild per Mail oder wir schauen vor Ort drauf.`},{number:`03`,title:`Sauber fertig machen`,text:`Wenn es losgeht, wird es ordentlich gemacht. Ohne Theater, ohne Umwege.`}],a=[{kicker:`Video 01`,title:`Arsen auf der Baustelle`,note:`Direkter Eindruck, echte Arbeit, kein gestelltes Gerede. Tippen zum Abspielen.`,poster:e(`images/people/arsen-workshop.webp`),src:e(`videos/arsen-hsam-01.mp4`)},{kicker:`Video 02`,title:`Montage und Innenausbau`,note:`So sieht es aus, wenn etwas sauber abgeschlossen wird. Tippen zum Abspielen.`,poster:e(`images/people/arsen-kitchen.webp`),src:e(`videos/arsen-hsam-02.mp4`)}],o=[{title:`Wasserschaden`,text:`Wieder trocken, wieder ordentlich, wieder nutzbar.`,before:e(`images/projects/water-damage-before.webp`),after:e(`images/projects/water-damage-after.webp`)},{title:`Tragende Wand`,text:`Ein Umbau, bei dem die Technik nachher verschwindet.`,before:e(`images/projects/steel-beam-before.webp`),after:e(`images/projects/steel-beam-after.webp`)},{title:`Duschkabine`,text:`Sauber montiert, klar abgeschlossen.`,before:e(`images/projects/shower-before.webp`),after:e(`images/projects/shower-after.webp`)}],s=[{title:`Arsen vor Ort`,image:e(`images/people/arsen-helmet-blue.webp`)},{title:`Ruhig im Innenausbau`,image:e(`images/people/arsen-kitchen.webp`)},{title:`Planung und Blick fuer Details`,image:e(`images/people/arsen-suit.webp`)}],c=[{label:`Telefon`,value:`0209 972 31 54`,href:`tel:+492099723154`},{label:`Mobil`,value:`0178 166 16 15`,href:`tel:+491781661615`},{label:`Mail`,value:`info@hs-am.de`,href:`mailto:info@hs-am.de`},{label:`Ort`,value:`45883 Gelsenkirchen`,href:`https://www.google.com/maps/search/?api=1&query=45883+Gelsenkirchen`}],l=({title:e,text:t})=>`
  <article class="hero-fact">
    <span>${e}</span>
    <strong>${t}</strong>
  </article>
`,u=({title:e,note:t,image:n,accent:r})=>`
  <article class="service-card">
    <div class="service-card__media">
      <img class="service-card__image" src="${n}" alt="${e}" loading="lazy" />
    </div>
    <div class="service-card__copy">
      <span class="service-card__accent">${r}</span>
      <h3>${e}</h3>
      <p>${t}</p>
    </div>
  </article>
`,d=({number:e,title:t,text:n})=>`
  <article class="process-card">
    <span class="process-card__number">${e}</span>
    <h3>${t}</h3>
    <p>${n}</p>
  </article>
`,f=({kicker:e,title:t,note:n,poster:r,src:i})=>`
  <article class="video-card">
    <video
      class="video-card__media"
      muted
      playsinline
      preload="none"
      poster="${r}"
      data-src="${i}"
      aria-label="${t}"
    ></video>
    <div class="video-card__copy">
      <span class="eyebrow">${e}</span>
      <h3>${t}</h3>
      <p>${n}</p>
    </div>
  </article>
`,p=({title:e,text:t,before:n,after:r})=>`
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
`,m=({title:e,image:t})=>`
  <article class="portrait-card">
    <img src="${t}" alt="${e}" loading="lazy" />
    <div class="portrait-card__label">${e}</div>
  </article>
`,h=({label:e,value:t,href:n})=>n.startsWith(`http`)?`
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
        <img class="brand__mark" src="${e(`hs-am-logo.svg`)}" alt="HS-AM" />
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
            ${t.map(e=>`<span>${e}</span>`).join(``)}
          </div>
          <div class="hero__facts" aria-label="Erfahrung und Qualitaet">
            ${n.map(l).join(``)}
          </div>
        </div>

        <div class="hero__media">
          <article class="media-card media-card--video">
            <video
              class="media-card__media"
              muted
              playsinline
              preload="none"
              poster="${e(`images/people/arsen-workshop.webp`)}"
              data-src="${e(`videos/arsen-hsam-01.mp4`)}"
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
              src="${e(`images/people/arsen-kitchen.webp`)}"
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
          ${r.map(u).join(``)}
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
          ${i.map(d).join(``)}
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
          ${a.map(f).join(``)}
        </div>
      </section>

      <section id="arbeiten" class="section">
        <div class="section-heading">
          <p class="eyebrow">Arbeiten</p>
          <h2>Vorher. Nachher. Ordentlich.</h2>
          <p>Ein paar Beispiele, damit man sofort sieht, wie stark der Unterschied sein kann.</p>
        </div>
        <div class="story-grid">
          ${o.map(p).join(``)}
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
          ${s.map(m).join(``)}
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
            ${c.map(h).join(``)}
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
        <img src="${e(`hs-am-logo.svg`)}" alt="HS-AM" />
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
`;var g=e=>{if(e.dataset.loaded===`true`)return;let t=document.createElement(`source`);t.src=e.dataset.src,t.type=`video/mp4`,e.appendChild(t),e.dataset.loaded=`true`,e.load()},_=document.querySelectorAll(`video[data-src]`);if(`IntersectionObserver`in window){let e=new IntersectionObserver((e,t)=>{e.forEach(e=>{e.isIntersecting&&(g(e.target),t.unobserve(e.target))})},{rootMargin:`200px 0px`});_.forEach(t=>e.observe(t))}else _.forEach(g);