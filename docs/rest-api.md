# REST API inputbronnen

OpenQuatt biedt een beperkte set schrijfbare Number-entiteiten via de ESPHome ingebouwde REST API. Hiermee kun je meetwaarden van externe systemen zonder MQTT-broker rechtstreeks naar de firmware sturen.

Gebruik voor normale monitoring en bediening bij voorkeur de web-app en, als je die gebruikt, Home Assistant via de native ESPHome API.

## Beschikbare endpoints

| Endpoint | Eenheid | Bereik | Stale timeout |
|---|---|---|---|
| `number/API Input Cooling Dew Point` | °C | −20 .. 40 | 15 minuten |

Er komen later meer endpoints bij voor andere instellingen.

## Hoe werkt het?

De ESPHome REST API gebruikt digest-authenticatie (dezelfde inloggegevens als de web-app). Stuur een HTTP POST naar het endpoint:

```
POST http://<ip-adres>/number/API%20Input%20Cooling%20Dew%20Point/set?value=15.6
```

Of met `curl`:

```sh
curl -u openquatt:<wachtwoord> \
  -X POST \
  "http://openquatt.local/number/API%20Input%20Cooling%20Dew%20Point/set?value=15.6"
```

## Geldigheid

Een via de API geschreven waarde blijft beperkt geldig. Komt er binnen de stale timeout geen nieuwe waarde binnen, dan wordt die bron ongeldig en gebruikt OpenQuatt die waarde niet meer.

- koelingsdauwpunt: **15 minuten**

Stuur de waarde daarom periodiek, bijvoorbeeld elke minuut of telkens wanneer de bronwaarde verandert.

## Bronselectie

Ga in de web-app naar **Instellingen → Bronnen / integraties → Sensorselectie**.

Bij `Koelingsdauwpunt` kies je:

- `Auto`: gebruik de hoogste geldige waarde van Home Assistant, MQTT en API Input;
- `API Input`: vereis uitsluitend de waarde die via de REST API is geschreven.

In `Auto` is de hoogste geldige dauwpuntwaarde bewust leidend, omdat die voor koeling de veiligste ondergrens geeft.

## Verder lezen

- [MQTT inputbronnen](mqtt.md)
- [Web-app gebruiken](web-app.md)
- [Problemen oplossen](problemen-oplossen.md)
