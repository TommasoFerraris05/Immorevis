# Verifica della consegna

Data: 2 novembre 2026.

## Controlli superati

- Sintassi JavaScript di configurazione, interfaccia e configuratore.
- Nove pagine HTML, un titolo h1 per pagina, ID univoci.
- 166 collegamenti/riferimenti locali e ancore esistenti.
- Otto immagini WebP valide (quattro fotografie, due formati ciascuna).
- Wordmark ritagliato dal logo originale, ispezionato.
- Sei percorsi del configuratore eseguiti in un ambiente DOM di test, fino al riepilogo e all’e-mail precompilata.
- Campi obbligatori, e-mail e telefono condizionale.
- Conservazione separata delle risposte tecniche durante cambi di categoria.
- Riepilogo modificabile, conservazione delle modifiche e rigenerazione su richiesta.
- Fallback e-mail e allegati disattivati senza configurazione.
- Menu apribile/chiudibile e gestione del tasto Escape.
- Numero telefonico non mostrato con conferma disattivata.
- Accesso diretto a grazie.html senza falsa conferma di invio.
- Risposte del provider simulate in test: errore mantiene i dati, successo scrive il marcatore di conferma. Nessuna chiamata reale a Formspree effettuata.
- Configurazione SEO provata su una copia temporanea con URL di test: canonical statici e sitemap con sette pagine e sottopercorso corretti. L’URL di prova non è incluso nei file consegnati.
- Tipi, numero e dimensioni degli allegati; copia manuale completa quando gli appunti non sono disponibili.

## Limiti dichiarati

L’ambiente di anteprima browser non era disponibile (servizio di anteprima assente). Non è stata quindi eseguita una verifica visiva su desktop/mobile né un controllo effettivo dei Core Web Vitals. I test DOM verificano logica e markup, non il rendering del browser.

La navigazione verso grazie.html non è eseguibile nel simulatore DOM; sono verificati il ramo di successo e il marcatore. La ricezione di una vera e-mail, l’upload nel piano scelto, i filtri antispam, eventuali challenge e le modalità di conservazione devono essere provati sull’endpoint effettivo.

Nessun messaggio di prova è stato inviato all’azienda. Il sito non è stato pubblicato su GitHub o altri hosting.
