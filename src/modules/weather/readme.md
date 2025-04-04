# Weather

An app to produce weather which:

-   Is realistic or at least plausible
-   Impacts gameplay (visibility, exposure, etc.)

Examples of impacting gameplay slightly: advantage/disadvantage on certain
checks perception, following tracks, Dexterity (sleight of hand, ranged weapons)
if too cold, spellcasting (maybe using magic during a thunderstorm makes it
erratic somehow) extra checks required slippery ground, wet rope/equipment/tools
chance of mishap torches/exposed flames extinguished

## Do Next

double check climate categories, beacuse:

-	implementing the year of weather test has revealed that the climateLookup.js file yields unrealistically dry climates for coastal grassland & hills at Iceland's latitude. Time to decide whether it would be better to scrap this and design a newer, possibly simpler weather system
-   bug: if it was raining, then temp is lower but the previous sky repeats (40%
    chance), rain should be converted to snow, but currently it stays as rain
-   swap precipitation periods for normal seasons, for simplicity
-   terrains ideally shouldn't have multiple climate options
-   all input combinations should ideally yield a valid climate
-   chance of fog, thunderstorm, and hail, and getTemperature() are currently
    not tested

implement extrapolating daily average temperature when the year ends during the
extrapolated ranged (e.g. get winter temp when only spring and summer are
defined)

## Current Implementation

This app takes as input:

-   Day of year
-   Terrain
-   Whether the terrain is coastal
-   Latitude
-   The previous day's weather

This app outputs:

-   Cloud coverage & precipitation (if any)
-   Wind strength & direction
-   High and low temperatures for the current day

### Weather JSON

This is the JSON returned by weatherService's getWeather function.

```
{
    "temperature": {
        "high": 7,
        "low": 2
    },
    "cloud": "dark stormclouds",
    "precipitation": "none",
    "wind": {
        "type": "Light breeze",
        "description": "Wind felt on face, leaves rustle, vanes move",
        "speed": 6,
        "direction": "W"
    },
    "daylight": {
        "sunrise": 10,
        "sunset": 14
    }
}
```

### Design

The app begins by using the inputs to select a climate, loosely based on the
Köpping system.

Then temperature is calculated using the climate, returning a high and low for
the given day.

Then the precipitation chance is calculated to see if there will be any.

Next to determine actual precipitation, cloud, and wind:

-   If a previous weather parameter is given, there is a 40% bias to repeat that
    selection, even if this contradicts the precipitation chance previously
    calculated.
-   If no previous weather is given and there is no precipitation, there is a
    bias toward clearer skies.
-   If there is no previous weather and there is precipitation, a random
    selection is made.
-   The clouds are directly read from the sky table, while the precipitation is
    rain or snow depending on the temperature.
-   Finally a wind factor is given as part of the skyTable, which is a dice roll
    used to determine the actual wind from windTypes.js.

### Data Validity

The data was initially taken from the Wikipedia article on the
[Köppen climate classification system](https://en.wikipedia.org/wiki/K%C3%B6ppen_climate_classification),
and then modified with some values from the original
[Dragon Magazine article](https://annarchive.com/files/Drmg137.pdf), which is
itself a simplified and game-ified version of the Köppen system.

If you find the weather generated is not realistc enough, you can query real
world data [here](https://www.visualcrossing.com/weather/weather-data-services).

### Custom Calendars

There are two ways:

-   eschew months and even days, relying on percentages wherever possible to
    accomodate years of different lengths

    -   without the convention of months, when do we switch from one average
        temperature to the next?
        -   if we just place each average where the 15th of the month would be,
            we're still using months just not by name
        -   if we use percentages while creating the parameters, and only use
            days of the year when creating specific actual weather, then the
            system will remain customisable for other calendars

-   stick to tracking no longer than a season, generating weather for a generic
    summer month without specifying which month it is
    -   this could lead to jarring weather changes where one month meets
        another; it seems like a month has to be able to look ahead and behind
        to see what weather they should entertain
