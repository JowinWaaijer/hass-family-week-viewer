# Family Week Viewer

Een overzichtelijke weekagenda voor je Home Assistant dashboard. Perfect voor drukke gezinnen die in één oogopslag willen zien wat er deze week op de planning staat.

![Family Week Viewer](https://img.shields.io/badge/version-1.1.0-blue)
![Home Assistant](https://img.shields.io/badge/Home%20Assistant-2024.11+-green)

## Wat doet deze kaart?

De Family Week Viewer toont je agenda in een handig weekoverzicht:

- **7 kolommen** voor elke dag van de week (maandag t/m zondag)
- **Nederlandse dagnamen**
- **Vandaag uitgelicht** in het blauw
- **Alle soorten afspraken** - hele dag, meerdere dagen, of met specifieke tijd
- **Werkt perfect** in het nieuwe Home Assistant Sections dashboard

## Installatie

### Stap 1: Download het bestand

Download `family-week-viewer.js` van de [Releases pagina](https://github.com/JowinWaaijer/hass-family-week-viewer/releases) en plaats het in je Home Assistant config map:

```
/config/www/family-week-viewer.js
```

### Stap 2: Voeg de resource toe

Ga in Home Assistant naar:
1. **Instellingen** → **Dashboards**
2. Klik op de **drie puntjes** rechtsboven → **Resources**
3. Klik **Resource toevoegen**
4. Vul in:
   - URL: `/local/family-week-viewer.js`
   - Type: **JavaScript Module**

### Stap 3: Voeg de kaart toe aan je dashboard

Voeg een nieuwe kaart toe met deze configuratie:

```yaml
type: custom:family-week-viewer
entity: calendar.jouw_agenda
title: Onze Week
```

Vervang `calendar.jouw_agenda` door je eigen agenda entity (bijvoorbeeld `calendar.gezin` of `calendar.familie`).

## Instellingen

### Basis configuratie

```yaml
type: custom:family-week-viewer
entity: calendar.gezin
title: Onze Week
```

### Alleen bepaalde afspraken tonen

Wil je alleen hele-dag afspraken zien en geen afspraken met tijden? Dat kan!

```yaml
type: custom:family-week-viewer
entity: calendar.gezin
title: Onze Week
show_all_day_events: true       # Hele-dag afspraken (bijv. "Verjaardag")
show_multi_day_events: true     # Meerdaagse afspraken (bijv. "Vakantie")
show_timed_events: false        # Afspraken met tijd (bijv. "18:00 Zwemles")
```

### Alle opties

| Optie | Verplicht | Standaard | Wat doet het? |
|-------|-----------|-----------|---------------|
| `entity` | Ja | - | Je agenda in Home Assistant |
| `title` | Nee | - | Titel boven het weekoverzicht |
| `show_all_day_events` | Nee | `true` | Toon hele-dag afspraken |
| `show_multi_day_events` | Nee | `true` | Toon meerdaagse afspraken |
| `show_timed_events` | Nee | `true` | Toon afspraken met specifieke tijd |

## Soorten afspraken

De kaart herkent drie soorten afspraken:

| Type | Voorbeeld | Hoe het eruitziet |
|------|-----------|-------------------|
| **Hele dag** | Verjaardag, Feestdag | Zonder tijd |
| **Meerdere dagen** | Vakantie, Kerst | Verschijnt op alle dagen |
| **Met tijd** | 18:00 Zwemles | Met tijd ervoor |

## Problemen oplossen

### De kaart verschijnt niet
1. Controleer of het bestand in `/config/www/` staat
2. Controleer of de resource is toegevoegd
3. Ververs je browser volledig (Ctrl+Shift+R of Cmd+Shift+R)

### Ik zie geen afspraken
1. Controleer of je agenda entity klopt (kijk bij Ontwikkelaarshulpmiddelen → Staten)
2. Controleer of er afspraken in je agenda staan voor deze week

### De kaart laadt niet na een update
Voeg `?v=X` toe aan je resource URL (verhoog X elke keer):
```
/local/family-week-viewer.js?v=2
```

## Ondersteuning

Heb je een vraag of probleem? Open een [issue op GitHub](https://github.com/JowinWaaijer/hass-family-week-viewer/issues).

## Licentie

MIT License - Vrij te gebruiken en aan te passen.
