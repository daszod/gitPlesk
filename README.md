# Hello Git

Eine einfache Testseite, um den Weg von GitHub über Plesk bis zum Webspace zu prüfen.

## Inhalt

- `index.html`: die komplette Seite (HTML, CSS und JavaScript in einer Datei, keine Abhängigkeiten)
- `README.md`: diese Datei

## Lokal ansehen

Einfach `index.html` im Browser öffnen. Ein Server ist nicht nötig.

## Test-Ablauf

1. Seite im Browser öffnen und den Zeitstempel unten notieren.
2. In `index.html` eine kleine Änderung machen, z. B. den Text im `<p>` ändern.
3. Committen und pushen (siehe unten).
4. Nach dem Deploy in Plesk die Seite neu laden. Der Text und der Zeitstempel sollten sich geändert haben.

## Git-Befehle

```bash
git add .
git commit -m "Beschreibung der Änderung"
git push
```

## Hinweise

- Bei einem Fehler im Deploy zuerst prüfen, ob der Push auf dem richtigen Branch (`main`) gelandet ist.
- Mit `git log --oneline` siehst du die Historie der Änderungen.
