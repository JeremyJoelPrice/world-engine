# Weather

An app to produce weather which:

-   Is reatlistic or at least plausible
-   Impacts gameplay (visibility, exposure, etc.)

Examples of impacting gameplay slightly: advantage/disadvantage on certain
checks perception, following tracks, Dexterity (sleight of hand, ranged weapons)
if too cold, spellcasting (maybe using magic during a thunderstorm makes it
erratic somehow) extra checks required slippery ground, wet rope/equipment/tools
chance of mishap torches/exposed flames extinguished

## Do Next

double check climate categories, beacuse:

-   snow seems too rare
-   terrains ideally shouldn't have multiple climate options
-   all input combinations should ideally yield a valid climate

implement extrapolating daily average temperature when the year ends during the
extrapolated ranged (e.g. get winter temp when only spring and summer are
defined)

## Current Implementation

This app takes as input:

-   Day of year
-   Terrain (and weather that terrain is coastal)
-   Lattitude

This app outputs:

-   Cloud coveragte & precipitation (if any)
-   Wind strength & direction
-   High and low temperatures for the current day

The app begins by using the inputs to select a climate, loosely based on the
Köpping system. This climate informs average seasonal temperatures, which are
used to calulate a specific temperature for the current day.

Cloud, precipitation options, and wind probabilities are bundled together as a
"Sky". Which precipitation option is realised depends on the precipitation
chance (pass/fail), and the temperature (rain vs snow). Wind is rolled randomly,
but each sky has its own wind bias.

The sky is 40% likely to be a repeat of the previous sky, including actual
precipitation and potential wind, but is otherwise chosen randomly. If chosen
randomly, and if there is no precipitation, then there is a bias toward clearer
skies.

### Data Validity

If you suspect the weather generated is not realistc, you can query real world
data [here](https://www.visualcrossing.com/weather/weather-data-services).

## Future Features

### Special Weather

implement getting special weather (inc. chance of fog, thunderstorm, hail mixed
with snow from wind table)

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
