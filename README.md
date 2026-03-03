# CV Interattivo - Portfolio Professionale

Un sito web moderno, elegante e responsive per il tuo CV interattivo, perfetto per essere inviato alle aziende.

## 🎨 Caratteristiche

- **Design Moderno**: Interfaccia pulita e professionale con molto spazio bianco
- **Responsive**: Mobile-first design che si adatta perfettamente a tutti i dispositivi
- **Animazioni Fluide**: Effetti fade-in e scroll animations per un'esperienza coinvolgente
- **Navigazione Smooth**: Scroll fluido tra le sezioni con navbar fissa
- **SEO Ottimizzato**: Meta tag e struttura semantica per una migliore indicizzazione
- **Accessibilità**: Codice pulito e ben strutturato seguendo le best practices

## 📁 Struttura del Progetto

```
CV/
├── index.html      # Struttura HTML principale
├── styles.css      # Stili CSS moderni e responsive
├── script.js       # JavaScript per interattività
└── README.md       # Questo file
```

## 🚀 Come Utilizzare

1. **Apri il file**: Apri `index.html` nel tuo browser preferito
2. **Personalizza i contenuti**: Modifica le informazioni nel file HTML con i tuoi dati:
   - Nome e ruolo professionale
   - Bio e descrizioni
   - Esperienze lavorative
   - Progetti
   - Formazione
   - Contatti

3. **Personalizza i colori**: Modifica le variabili CSS in `styles.css`:
   ```css
   :root {
       --color-primary: #2563eb;      /* Colore principale */
       --color-accent: #10b981;       /* Colore accento */
       /* ... altri colori */
   }
   ```

4. **Aggiungi il PDF del CV**: 
   - Crea un file `cv.pdf` nella cartella
   - Modifica la funzione `downloadCVBtn` in `script.js` per linkare al tuo PDF

5. **Personalizza i link**: Aggiorna i link social e portfolio nella sezione Contatti

## 🎯 Sezioni del Sito

### Hero Section
- Nome e cognome in evidenza
- Ruolo professionale
- Frase di presentazione
- Pulsanti CTA

### Chi Sono
- Bio professionale
- Punti di forza
- Soft skills

### Competenze
- Hard skills con barre di progresso animate
- Tool e tecnologie
- Lingue conosciute

### Esperienze Lavorative
- Timeline interattiva
- Dettagli per ogni posizione
- Risultati e metriche

### Progetti
- Card interattive
- Link demo e GitHub
- Tecnologie utilizzate

### Formazione
- Titolo di studio
- Certificazioni
- Corsi rilevanti

### Contatti
- Informazioni di contatto
- Form di contatto funzionante
- Link social

## 🛠️ Personalizzazione Avanzata

### Modificare i Font
I font utilizzati sono Google Fonts (Inter e Playfair Display). Per cambiarli:
1. Modifica i link nel `<head>` di `index.html`
2. Aggiorna le variabili `--font-primary` e `--font-display` in `styles.css`

### Aggiungere Animazioni
Le animazioni sono gestite tramite Intersection Observer API. Puoi aggiungere nuove animazioni modificando `script.js`.

### Integrare un Backend per il Form
Per far funzionare il form di contatto, integra con un servizio come:
- Formspree
- EmailJS
- Il tuo backend personalizzato

Modifica la funzione `contactForm.addEventListener` in `script.js`.

## 📱 Browser Supportati

- Chrome (ultime 2 versioni)
- Firefox (ultime 2 versioni)
- Safari (ultime 2 versioni)
- Edge (ultime 2 versioni)

## 📄 Licenza

Questo progetto è libero da utilizzare per scopi personali e professionali.

## 💡 Suggerimenti

- **Ottimizza le immagini**: Se aggiungi immagini, assicurati di ottimizzarle per il web
- **Testa su dispositivi reali**: Verifica il sito su smartphone, tablet e desktop
- **Validazione HTML/CSS**: Usa validatori online per verificare il codice
- **Performance**: Considera l'uso di un CDN per i font se necessario

## 🔗 Link Utili

- [Google Fonts](https://fonts.google.com/)
- [Can I Use](https://caniuse.com/) - Compatibilità browser
- [W3C Validator](https://validator.w3.org/) - Validazione HTML

---

**Buona fortuna con il tuo CV! 🚀**
