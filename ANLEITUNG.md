# Anleitung: Hello Git auf GitHub hochladen

Ziel: Den Ordner `hello-git` auf GitHub stellen, damit Plesk ihn später holen kann.

---

## Schritt 1: Git installieren (einmalig)

Prüfen, ob Git schon da ist. Terminal öffnen und eingeben:

```bash
git --version
```

Kommt eine Versionsnummer, passt es. Sonst Git herunterladen:
- Windows: https://git-scm.com/download/win
- macOS: `xcode-select --install` im Terminal ausführen

---

## Schritt 2: GitHub-Konto anlegen

Falls noch nicht vorhanden: https://github.com/signup

---

## Schritt 3: Leeres Repository auf GitHub erstellen

1. Auf GitHub oben rechts auf das **+** klicken, dann **New repository**.
2. Name eingeben, z. B. `hello-git`.
3. **Private** oder **Public** wählen (für den Test egal).
4. **Wichtig:** Haken bei "Add a README" und ".gitignore" NICHT setzen. Das Repo bleibt leer.
5. **Create repository** klicken.

GitHub zeigt dir danach eine Adresse wie:
`https://github.com/DEIN-NAME/hello-git.git`

Diese Adresse brauchst du gleich.

---

## Schritt 4: Terminal im Projektordner öffnen

Den Ordner `hello-git` mit `index.html`, `README.md` und `ANLEITUNG.md` an einen festen Ort legen, z. B. auf den Desktop.

- Windows: Im Ordner rechts-klicken, dann "Im Terminal öffnen" bzw. "Git Bash hier öffnen".
- macOS: Rechts-Klick auf den Ordner, "Neues Terminal am Ordner" (oder Terminal öffnen und mit `cd` in den Ordner wechseln).

---

## Schritt 5: Git im Ordner starten

Diese Befehle nacheinander eingeben:

```bash
git init
git branch -M main
git add .
git commit -m "Erster Stand: Hello Git"
```

Was passiert hier:
- `git init` macht aus dem Ordner ein Git-Projekt.
- `git branch -M main` benennt den Hauptzweig `main`.
- `git add .` merkt alle Dateien für den nächsten Speicherpunkt vor.
- `git commit` speichert den Stand mit einer Beschreibung.

Beim ersten Commit fragt Git eventuell nach Name und E-Mail. Dann einmalig eingeben:

```bash
git config --global user.name "Dein Name"
git config --global user.email "deine@mail.de"
```

Danach den `git commit`-Befehl wiederholen.

---

## Schritt 6: Projekt mit GitHub verbinden

Die Adresse aus Schritt 3 einsetzen:

```bash
git remote add origin https://github.com/DEIN-NAME/hello-git.git
```

---

## Schritt 7: Hochladen (Push)

```bash
git push -u origin main
```

Beim ersten Mal öffnet sich meist ein Browserfenster oder Git fragt nach Zugangsdaten.

**Achtung:** GitHub akzeptiert kein normales Passwort mehr. Stattdessen:
- Entweder im Browserfenster bei GitHub anmelden (empfohlen, wenn es sich öffnet), oder
- ein **Personal Access Token** verwenden: Auf GitHub unter Settings, Developer settings, Personal access tokens einen neuen erstellen (Scope `repo`). Dieses Token dann als Passwort eingeben.

Token nicht in einen Chat posten. Falls doch, sofort auf GitHub löschen und neu erstellen.

---

## Schritt 8: Kontrolle

Die GitHub-Seite des Repos neu laden. Die Dateien `index.html`, `README.md` und `ANLEITUNG.md` sollten dort stehen.

---

## Typische Probleme

| Problem | Lösung |
|---|---|
| `git: command not found` | Git ist nicht installiert oder das Terminal muss neu gestartet werden. |
| `remote origin already exists` | Mit `git remote remove origin` entfernen und Schritt 6 wiederholen. |
| `Authentication failed` | Token prüfen oder Anmeldung im Browser wiederholen. |
| `nothing to commit` | Es gibt keine Änderungen. Erst eine Datei ändern. |

---

## Nächste Änderung hochladen (der eigentliche Test)

1. Eine Datei ändern, z. B. den Text in `index.html`.
2. Im Terminal:

```bash
git add .
git commit -m "Text geändert"
git push
```

Ab dann reicht dieser Dreisatz für jede Änderung.
