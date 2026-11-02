# Apertura immediata della versione corretta

Estrai tutto lo ZIP e apri index.html con doppio clic. Ogni pagina contiene già grafica, immagini, font e codice: l’aspetto funziona anche senza caricare la cartella assets. Per GitHub carica comunque tutti i file estratti nella root del repository.

Questa versione elimina i simboli decorativi. Il menu mobile usa la sola scritta “Menu”.

Per modifiche future a CSS o JavaScript, aggiornare le copie incorporate negli HTML: gli asset esterni sono mantenuti come sorgenti di riferimento. Modificare solo config.js non aggiorna questa versione autonoma: le impostazioni vanno cambiate anche nel blocco IMMOREVIS_CONFIG delle nove pagine. Gli endpoint e le impostazioni consegnate sono volutamente disattivati; copia ed e-mail precompilata funzionano subito. Nessun sito statico può inoltrare e-mail autonomamente senza un servizio configurato.

---

# Immorevis Sagl — sito per GitHub Pages

Sito statico multipagina, in italiano, senza build, npm o backend obbligatori. Aprire `index.html` per una prima consultazione; il funzionamento completo va verificato sull’URL HTTPS pubblicato.

## Stato della consegna

Incluse nove pagine, logo originale e wordmark ritagliato, quattro fotografie svizzere locali con versioni responsive, font locali, configuratore con sette passaggi e sei percorsi tecnici. Nessun prezzo viene calcolato automaticamente.

**Il sito non è stato pubblicato. L’invio diretto non è ancora configurato.** La versione consegnata offre copia del testo ed e-mail precompilata, senza allegati. Numero telefonico, endpoint, revisione privacy e URL definitivo richiedono un intervento del committente. Non sono necessarie chiavi segrete nel sito.

## Pubblicare su GitHub Pages

1. **Estrai `immorevis-sito-github.zip`.** L’archivio contiene direttamente `index.html`, le altre pagine e la cartella `assets`, senza una cartella esterna aggiuntiva.
2. **Crea un repository `immorevis-sito`** nel tuo account GitHub. Un repository pubblico può essere usato con GitHub Pages secondo il piano disponibile. Non caricare documenti privati o file di cantiere nel repository pubblico.
3. **Carica tutto nella root** con Add file → Upload files. `index.html` deve essere al primo livello del repository, insieme ad `assets`, non dentro una seconda cartella `immorevis-sito-github`. Includi `.nojekyll` (il file può essere nascosto sul computer). Salva sul branch `main`.
4. **Attiva Pages** in Settings → Pages → Build and deployment: scegli Deploy from a branch, branch `main`, cartella `/ (root)` e Save.
5. **Leggi l’indirizzo pubblicato** nello stesso pannello Pages, dopo la conclusione della distribuzione. Può avere la forma `https://TUO-ACCOUNT.github.io/immorevis-sito/`. È un esempio, non un indirizzo assegnato. I collegamenti relativi del sito supportano questo sottopercorso.
6. **Dominio personalizzato, solo se posseduto e autorizzato:** verifica il dominio secondo la documentazione GitHub; aggiungilo prima in Settings → Pages → Custom domain, poi configura i DNS presso il registrar. Per un sottodominio si usa un CNAME verso `TUO-ACCOUNT.github.io`, senza il nome del repository; per il dominio radice segui gli attuali record A/ALIAS/ANAME indicati da GitHub. Non è stato creato un file CNAME con un dominio presunto. Attendi la propagazione e abilita Enforce HTTPS quando disponibile. Vedi `sources.md` per la guida ufficiale.
7. **Aggiorna testi, logo e fotografie:** i testi si modificano direttamente nelle pagine HTML. Header e footer sono presenti in tutte le pagine: aggiornali ovunque quando cambiano i recapiti. Il logo completo è in `assets/img/logo/logo_originale_immorevis.png`; in testata si usa `wordmark.png`. Non deformarlo. Le foto illustrative sono in `assets/img/cantieri/`; quelle dell’impresa andranno in `assets/img/lavori-reali/`. Sostituisci anche alt text, didascalie, crediti, srcset e dimensioni se necessario. Le fotografie esistenti NON sono realizzazioni dell’azienda.
8. **Conferma il telefono:** nel blocco `IMMOREVIS_CONFIG` di ciascun file HTML (e nel sorgente `assets/js/config.js`) verifica `phone` e imposta `phoneConfirmed: true` solo dopo autorizzazione aziendale. I link telefonici vengono allora mostrati nel footer. Il numero provvisorio è visibile nel sorgente pubblico, ma non pubblicizzato nell’interfaccia; se non deve neppure essere presente nel sorgente, cancellalo dalla configurazione.
9. **Configura l’invio dei preventivi:** crea un modulo su Formspree, associa e verifica `info@immorevis.ch` come destinatario, copia l’endpoint reale `https://formspree.io/f/ID` in `formEndpoint`. Completa e approva `privacy.html`, poi imposta `privacyReviewed: true`. Il codice accetta soltanto endpoint HTTPS Formspree nel formato indicato; un provider diverso richiede adeguamento dell’adattatore. Prima dell’attivazione verifica accordi, conservazione, trasferimenti esteri e destinatari. Nessuna password o chiave privata va inserita nel frontend. Dopo la pubblicazione invia un messaggio di prova concordato, verifica la ricezione effettiva in casella e dashboard, il mittente per rispondere e tutti i campi. Verifica anche un errore di rete: non deve apparire una falsa conferma.
10. **Allegati facoltativi:** la disponibilità dipende dal piano Formspree. Alla verifica del 2 novembre 2026 il piano gratuito non include upload. Non serve acquistare un piano per usare il fallback. Se il piano e il modulo supportano file, imposta `uploadsEnabled: true`; i file partono via FormData multipart con campo `allegati`. Limiti iniziali prudenti: 5 file, 5 MB per file, 20 MB totali. Conferma i limiti effettivi di piano e servizio e adegua `maxFileMB`/`maxTotalMB` senza superarli. Il browser controlla JPEG, PNG, WebP e PDF; il fornitore deve applicare anche controlli server, accessi e conservazione. Non usare un repository o link pubblici per planimetrie sensibili. Prova la ricezione di più file, l’accessibilità riservata e il rifiuto di tipi o dimensioni non ammesse.
11. **Prova e aggiorna il sito:** aprilo su smartphone e desktop, verifica menu, navigazione da tastiera, leggibilità, tutti i percorsi del modulo, ritorno ai passi precedenti, cambio categoria, testo modificato, recapito telefonico obbligatorio quando scelto, copia ed e-mail. Il fallback apre il client di posta e NON invia autonomamente né allega file. In assenza di un client configurato, copia il testo nella webmail. Modifica i file nel repository e salva: Pages distribuirà l’aggiornamento. Attendi l’esito e ricarica per controllare.
12. **Conferme prima del lancio:** controlla ragione sociale, sede, IDI, e-mail e telefono; approva servizi effettivamente offerti e area operativa; completa l’informativa privacy (fornitori, Paesi, garanzie, durate); configura destinatario e antispam Formspree; verifica ricezione e allegati se attivi; approva testi, font e palette proposti; sostituisci le immagini illustrative se disponibili quelle aziendali; definisci dominio/URL e SEO come sotto. Per attività specialistiche, inclusa l’eventuale bonifica amianto, verifica requisiti e disponibilità prima di formulare nuove dichiarazioni commerciali.

## SEO e indirizzo definitivo

Titoli, descrizioni e lingua sono già specifici per pagina. Finché l’URL non è noto non vengono pubblicati canonical fittizi. `sitemap.xml` è intenzionalmente vuota; `robots.txt` non dichiara una sitemap con un URL inventato.

Dopo aver ottenuto l’URL reale:

- Metodo automatico facoltativo (Python 3, senza librerie aggiuntive): esegui `python configura-seo.py https://URL-REALE/immorevis-sito/`. Aggiorna `config.js`, canonical e Open Graph statici, dati strutturati, sitemap e robots. Non è una build obbligatoria.
- Metodo manuale: imposta `siteUrl` nel blocco `IMMOREVIS_CONFIG` di ciascun file HTML (e nel sorgente `assets/js/config.js`) con URL completo e slash finale; JavaScript inserirà canonical, og:url, og:image e dati strutturati. Compila inoltre `sitemap.xml` con URL assoluti delle pagine pubbliche e aggiungi `Sitemap: URL_COMPLETO/sitemap.xml` a robots.txt. Per crawler social che non eseguono JavaScript è preferibile anche inserire questi tag direttamente negli HTML.
- Dopo un cambio dominio o repository, aggiorna nuovamente tutti questi valori. `grazie.html` e `404.html` sono esclusi dalla sitemap e non indicizzabili.
- `404.html` usa collegamenti relativi come il resto del sito. Su URL inesistenti annidati, il comportamento di risoluzione di GitHub Pages può richiedere il ritorno alla root del sito; verifica questo caso sul dominio finale.

## Funzionamento del configuratore

Le risposte restano nella memoria della pagina, anche tornando indietro. Ricaricare o chiudere la pagina le elimina. Quando cambi categoria, le risposte tecniche sono mantenute separatamente in memoria; vengono inviate solo quelle della categoria attuale. Il riepilogo segue le risposte fino alla prima modifica manuale; successivamente viene preservato. “Rigenera dalle risposte” sostituisce il testo personalizzato.

La copia include riepilogo e scheda strutturata. Se l’e-mail precompilata supera i limiti del programma di posta, usare la copia. Il modulo non stima prezzi, durata o fattibilità. Non viene promesso un sopralluogo gratuito.

Con provider attivo, l’invio usa HTTPS e controlla risposta HTTP e `ok: true`. Un timeout non produce ritentativi automatici: l’esito potrebbe essere incerto e ripetere può duplicare la richiesta. La pagina grazie mostra conferma solo dopo un esito positivo recente registrato nella sessione; il marcatore contiene soltanto un timestamp, nessun dato personale. L’accettazione del provider non garantisce che il destinatario abbia già letto il messaggio. Se la memoria di sessione è indisponibile, la conferma resta nel modulo.

Antispam: campo esca `_gotcha`, controllo client e filtri del provider. Il client da solo non protegge da spam deliberato; attivare le protezioni disponibili nel piano e provarle senza introdurre servizi di tracciamento non dichiarati. Eventuali challenge CAPTCHA del provider richiedono verifica sull’endpoint reale; con errore la richiesta non viene dichiarata inviata.

## Design, immagini e dati

Nero/bianco del logo preservati. Il terracotta è una proposta grafica: il colore base richiesto `#B86B45` è usato per dettagli; i pulsanti impiegano una variante più scura `#9B5030` per il contrasto col testo bianco. Montserrat e Inter sono accostamenti proposti, non identificazioni del logo. Font locali con licenze OFL incluse; fallback Arial/Helvetica. Nessun caricamento automatico da Google Fonts o Unsplash durante la navigazione.

La favicon è una semplice iniziale tipografica di navigazione, non un nuovo marchio ufficiale. Il logo originale è mantenuto anche in `assets/logo/` come copia di riferimento.

Le commesse pubbliche storiche non compaiono nel sito. `publicWorksEnabled` è riservato e non attiva automaticamente una sezione: occorre un’aggiunta editoriale autorizzata, con fonti e la dicitura “commesse aggiudicate nel 2020 secondo gli elenchi comunali”, senza presentarle come portfolio fotografico. Nessun importo viene riportato.

## Verifiche effettuate e limiti

Vedi `VERIFICA.md`. L’anteprima browser dell’ambiente di produzione dei file non era disponibile: la verifica visiva responsive resta da eseguire. Nessuna prova è stata inviata alla casella aziendale e non è stato creato un account Formspree. Non è stato effettuato alcun deploy o caricamento su GitHub.
