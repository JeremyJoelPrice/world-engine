# Weather

An app to produce weather which:
* Is reatlistic or at least plausible
* Impacts gameplay (visibility, exposure, etc.)

Examples of impacting gameplay slightly:
advantage/disadvantage on certain checks perception, following tracks, Dexterity (sleight of hand, ranged weapons) if too cold, spellcasting (maybe using magic during a thunderstorm makes it erratic somehow) extra checks required slippery ground, wet rope/equipment/tools chance of mishap torches/exposed flames extinguished

## Do Next

Implement calculating actual temperatures for a given day

Implement special weather (wind hurricanes, precip thunderstorms, hail, and fog)

## Current Implementation

This app takes as input:
* Day of year
* Terrain (and weather that terrain is coastal)
* Lattitude

This app outputs:
* A sky (rain/snow options, preciptation chance, and cloud coverage)
* A wind strength

\*except for precipitation chance, these values are independent of time of year and terrain/lattitude

* A climate for the current time of year: chance of precipitation per day, and average temperature ranges

### Why Day Of Year Instead Of Month-Day?

This module uses days of the year to specify ranges for seasons (e.g. summer) and for precipitation (e.g. wet/dry seasons).

This is so that, in the future, I can more easily implment southern hemisphere values and custom calendars.

For custom calendar to work, I'll have to change the days of the year to something like a percentage duration of the year.

For southern hemisphere to work, I'll have to convert some but not all days of the year so that day 1 is effectively July 1st. Those values that are independent of hemisphere are currently flagges with `regardlessOfHemisphere: true`, so anything which lacks that value will be considered `false` by default.

## Design Spec

App takes the following inputs via the UI:
* Day of Year
* Time of Day
* Latitude
* Terrain
* Coastal / near large bodies of water

When the button is pressed, app provides the following outputs:
* Temperature
* Wind (speed & direction)
* Cloud coverage
* Rain/snow, if any
* Gameplay implications

### Data Validity

If you suspect the weather generated is not realistc, you can query real world data [here](https://www.visualcrossing.com/weather/weather-data-services).

## Future Features

### Special Weather
implement getting special weather (inc. chance of fog, thunderstorm, hail mixed with
snow from wind table)

### Custome Calendars

There are two ways:
* eschew months and even days, relying on percentages wherever possible to accomodate years of different lengths
	- without the convention of months, when do we switch from one average temperature to the next?
		- if we just place each average where the 15th of the month would be, we're still using months just not by name
		- if we use percentages while creating the parameters, and only use days of the year when creating specific actual weather, then the system will remain customisable for other calendars

* stick to tracking no longer than a season, generating weather for a generic summer month without specifying which month it is
	- this could lead to jarring weather changes where one month meets another; it seems like a month has to be able to look ahead and behind to see what weather they should entertain