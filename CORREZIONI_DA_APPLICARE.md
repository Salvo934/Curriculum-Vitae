# Correzioni da applicare manualmente

Segui questi passaggi per risolvere tutti i problemi del sito.

---

## 1. index.html

### 1.1 Meta e titolo (righe 6-9)
**Sostituisci:**
```html
<meta name="description" content="CV e portfolio di Nome Cognome — Ruolo Professionale. Scopri esperienza, competenze e progetti.">
  <meta name="keywords" content="CV, portfolio, Nome Cognome, sviluppatore, designer, professionista">
  <meta name="author" content="Nome Cognome">
  <title>Salavtore Bonavita — Web Developer | CV & Portfolio</title>
```
**Con:**
```html
<meta name="description" content="CV e portfolio di Salvatore Bonavita — Frontend Developer. Soluzioni web user-centered, design e sviluppo.">
  <meta name="keywords" content="CV, portfolio, Salvatore Bonavita, frontend developer, sviluppatore web, UX, design">
  <meta name="author" content="Salvatore Bonavita">
  <title>Salvatore Bonavita — Frontend Developer | CV & Portfolio</title>
```

### 1.2 Skip link (dopo `<body>`)
**Sostituisci:**
```html
<body>
  <!-- Navbar -->
```
**Con:**
```html
<body>
  <a href="#hero" class="skip-link">Vai al contenuto</a>
  <!-- Navbar -->
```

### 1.3 Immagine hero – alt (dentro hero__badge-inner)
**Cerca:** `<img src="io.JPG" alt="" />` (quella dentro `<div class="hero__badge-inner">`)
**Sostituisci con:** `<img src="io.JPG" alt="Salvatore Bonavita" />`

### 1.4 Footer
**Sostituisci:** `Nome Cognome` nel link del footer  
**Con:** `Salvatore Bonavita`  
(riga tipo: `<a href="#hero" class="footer__name">Salvatore Bonavita</a>`)

### 1.5 Link “Vedi portfolio” in About
**Sostituisci:**
```html
<a href="#" class="about__link link link--arrow" target="_blank" rel="noopener">Vedi portfolio completo</a>
```
**Con:**
```html
<a href="#projects" class="about__link link link--arrow">Vedi progetti</a>
```

### 1.6 Timeline – errore HTML (ultimo articolo “Daboss Brands”)
**Cerca** (circa righe 292-295):
```html
              </ul>
        </div>
      </div>
    </section>

    <!-- Projects -->
```
**Sostituisci con:**
```html
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Projects -->
```
(serve aggiungere la chiusura `</article>` e correggere l’indentazione dei `</div>`.)

---

## 2. styles.css

### 2.1 Dopo la riga con `button { ... }` (prima di `/* Container */`)
**Aggiungi questo blocco:**
```css
/* Skip link (accessibilità) */
.skip-link {
  position: absolute;
  top: -100px;
  left: 1rem;
  z-index: 9999;
  padding: 0.75rem 1.25rem;
  background: var(--accent);
  color: #fff;
  font-weight: 600;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  transition: top 0.2s ease;
}
.skip-link:focus {
  top: 1rem;
  outline: 3px solid var(--accent-light);
  outline-offset: 2px;
}

/* Focus visibile (tastiera) */
a:focus-visible,
button:focus-visible,
input:focus-visible,
textarea:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
```

---

## Riepilogo problemi risolti

| Problema | File | Cosa fa |
|----------|------|--------|
| Typo “Salavtore” | index.html | Titolo e coerenza nome |
| Meta generici “Nome Cognome” | index.html | SEO e autore corretti |
| Nessun skip link | index.html + CSS | Accessibilità (salto al contenuto) |
| Immagine hero senza alt | index.html | Accessibilità e SEO |
| Footer “Nome Cognome” | index.html | Nome corretto |
| Link About inutile (#) | index.html | Punta a #projects |
| Timeline con `</article>` mancante | index.html | HTML valido, pagina che si apre correttamente |
| Focus non visibile | styles.css | Accessibilità tastiera |

Dopo aver applicato tutte le modifiche, salva i file e apri di nuovo il sito (doppio clic su `index.html` o tramite server locale).
