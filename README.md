[Einsingen-App-Anleitung.md](https://github.com/user-attachments/files/35454405/Einsingen-App-Anleitung.md)
# Einsingen als App auf iPhone, iPad und Android

Der Ordner **Einsingen-App** ist die App. Sie kann alles, was die HTML-Vorlage kann (Abläufe mit Uhr, Übungen mit Noten und Wiedergabe, Kanons, Zungenbrecher, Bearbeiten, Papierkorb, Export und Import), und läuft nach dem ersten Öffnen komplett ohne Internet.

Es ist eine installierbare Web-App: Sie bekommt ein eigenes Symbol auf dem Home-Bildschirm, startet ohne Safari-Leisten und speichert alle Dateien auf dem Gerät.

## Was im Ordner liegt

| Datei | Zweck |
|---|---|
| `index.html` | die App |
| `abcjs-basic-min.js` | Notensatz (aus deinem Ordner übernommen) |
| `installieren.js` | Hinweis zum Installieren auf iPhone, iPad und Android (wie in Tuner und Songwriting & Chords) |
| `sw.js` | speichert die App für den Offline-Betrieb |
| `manifest.webmanifest` | Name, Farbe und Symbol für den Home-Bildschirm |
| `icons/` | App-Symbol |

Die PDFs gehören **nicht** dazu. Die App braucht sie nicht, und sie sind urheberrechtlich geschützt.

## Schritt 1: Einmal ins Netz stellen

iPhone, iPad und Android-Geräte können eine App wie diese nur aus dem Internet installieren (über eine https-Adresse). Danach braucht sie kein Internet mehr. Alle Geräte nutzen dieselbe Adresse. Zwei kostenlose Wege:

**A) GitHub Pages** (dauerhaft, kostenlos)

1. Auf github.com ein Konto anlegen.
2. Oben rechts **+** → **New repository**, Name z. B. `einsingen`, **Public**, **Create repository**.
3. Auf **uploading an existing file** klicken und den **Inhalt** des Ordners `Einsingen-App` hineinziehen (alle Dateien und den Ordner `icons`). Unten **Commit changes**.
4. **Settings** → **Pages** → unter *Branch* `main` und `/ (root)` wählen → **Save**.
5. Nach etwa einer Minute steht oben die Adresse, z. B. `https://deinname.github.io/einsingen/`.

**B) Netlify Drop**

1. app.netlify.com/drop öffnen, kostenloses Konto anlegen.
2. Den Ordner `Einsingen-App` auf die Seite ziehen.
3. Netlify zeigt die Adresse an, z. B. `https://irgendwas.netlify.app`.

Liegen mehrere Apps im selben GitHub-Konto (zum Beispiel Tuner und Songwriting & Chords), teilen sie sich auf dem Gerät den Speicher. Einsingen löscht nur den eigenen Speicher, und falls eine andere App ihn gelöscht hat, lädt Einsingen beim nächsten Öffnen mit Internet alles neu.

Gut zu wissen: Wer die Adresse kennt, kann die App öffnen. Darin stehen nur die Übungen. Deine Favoriten, Notizen und eigenen Abläufe bleiben auf deinem Gerät und werden nie hochgeladen.

## Schritt 2: Auf dem Gerät installieren

### iPhone und iPad

1. Die Adresse in **Safari** öffnen. Unten erscheint ein Hinweis mit den Schritten.
2. Unten (iPhone) oder oben rechts (iPad) auf **Teilen** tippen, dann **Zum Home-Bildschirm** → **Hinzufügen**. Falls angeboten: *Als Web-App öffnen* eingeschaltet lassen.
3. Die App **vom Home-Bildschirm** aus öffnen, solange Internet da ist. Warten, bis oben **„Offline bereit, Daten auf diesem Gerät“** steht.
4. Fertig. Zum Testen: Flugmodus an, App öffnen.

Schritt 3 muss auf jedem Gerät einmal mit Internet passieren. Die App vom Home-Bildschirm hat einen eigenen Speicher, getrennt von Safari.

### Android

1. Die Adresse in **Chrome** öffnen.
2. Unten erscheint der Hinweis **Als App installieren**, in Chrome meist mit dem Knopf **Installieren**. Darauf tippen und bestätigen.
   Ohne Knopf: oben rechts auf **⋮** tippen, dann **App installieren** oder **Zum Startbildschirm hinzufügen**.
3. Die App vom Startbildschirm aus öffnen, solange Internet da ist. Warten, bis oben **„Offline bereit, Daten auf diesem Gerät“** steht.
4. Fertig. Zum Testen: Flugmodus an, App öffnen.

Auf Android teilen sich die installierte App und die Seite in Chrome denselben Speicher. Was du in einem von beiden änderst, steht auch im anderen.

Andere Browser gehen auch: In Samsung Internet heißt es im Menü **Seite hinzufügen zu** → **Startbildschirm**, in Firefox **Installieren** oder **Zum Startbildschirm hinzufügen**.

Hast du den Hinweis geschlossen, holt ihn der Link **Einsingen als App installieren** ganz unten auf der Seite zurück. Öffnest du die Seite im Browser einer anderen App (Instagram, WhatsApp und so weiter), sagt der Hinweis, wie du sie in Safari oder Chrome öffnest. Am Computer und in der installierten App erscheint er nicht.

## Hell und dunkel

Oben rechts im Kopf sitzt der Knopf mit Sonne oder Mond, wie in den anderen Apps. Ein Tipp schaltet zwischen hell und dunkel um, die App merkt sich die Wahl. Solange du nicht tippst, richtet sie sich nach der Einstellung des Geräts.

## Im Hintergrund läuft nichts

Die App arbeitet nur, solange sie offen und zu sehen ist. Wechselst du in eine andere App, sperrst du den Bildschirm oder schließt du sie:

- verstummen alle Töne,
- hält ein laufender Ablauf an, die Uhr bleibt stehen (weiter mit **Start**),
- darf der Bildschirm wieder ausgehen,
- schläft die Klangausgabe. Das tut sie auch nach 20 Sekunden ohne Ton, außer während ein Ablauf läuft, damit das Signal am Ende eines Schritts kommt.

Es gibt keine Mitteilungen, keinen Abgleich im Hintergrund und keine Uhr, die weiterläuft.

## Daten übertragen

Jedes Gerät hat seine eigenen Daten. Zum Übertragen: Tab **Regeln und Quellen** → **Daten sichern und übertragen** → **Exportieren**.

- iPhone und iPad: Das Teilen-Menü öffnet sich (In Dateien sichern, AirDrop, Mail).
- Android: **Als Datei speichern** legt die Datei im Ordner **Downloads** ab. Von dort kannst du sie per Mail oder Nachricht weitergeben.

Auf dem anderen Gerät **Importieren** und die Datei wählen. Das klappt in alle Richtungen, also auch vom Android-Handy aufs iPad.

So holst du auch deine Daten aus der Online-Version (claude.ai) in die App: dort exportieren, in der App importieren. Das Format ist dasselbe.

**Wichtig:** Wenn du die App vom iPhone oder iPad löschst, sind auch ihre Daten weg. Auf Android sind sie weg, wenn du in Chrome die Websitedaten löschst, und können es auch beim Deinstallieren sein. Darum ab und zu exportieren.

## Was auf Android anders ist

- Es gibt keinen Stummschalter. Die Töne laufen über die Medienlautstärke: bei leisem Ton die Lauter-Taste drücken, während die App läuft.
- Der Bildschirm bleibt im laufenden Ablauf an.
- Das App-Symbol passt sich der Form an, die dein Startbildschirm verwendet (rund, abgerundet).

## Was auf dem iPhone und iPad anders ist als in der Vorlage

- Töne und Signal sind auch bei eingeschaltetem Stummschalter zu hören (ab iOS 17).
- Der Bildschirm bleibt im laufenden Ablauf an (ab iOS 18.4, sonst unter Einstellungen → Anzeige → Automatische Sperre).
- Die Kopfzeile im Ablauf bleibt beim Scrollen stehen, Schließen ist immer erreichbar.
- Die Noten passen sich der Breite an und ragen auf dem iPhone nicht mehr über den Rand.
- Die App nutzt den ganzen Bildschirm, auch um Notch und Dynamic Island herum.
- Kein Konto-Abgleich wie in der Online-Version: alles bleibt auf dem Gerät.

## Die App später ändern

1. Dateien im Ordner `Einsingen-App` ändern.
2. In `sw.js` oben die Zeile `const VERSION = "2026-11-26-2";` hochzählen, z. B. auf `"2026-12-01-1"`.
3. Die geänderten Dateien wieder hochladen (GitHub: Datei öffnen → Stift-Symbol oder erneut hochladen; Netlify: Ordner erneut hineinziehen).
4. Beim nächsten Öffnen mit Internet erscheint in der App oben **Neue Version laden**.
