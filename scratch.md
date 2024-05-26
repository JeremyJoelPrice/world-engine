# Current Work

Currently this app produces:
* A sky (rain/snow options, preciptation chance allowing, along with cloud coverage), to be used for any day, independent of time of year or terrain/lattitude

* A wind strength, to be used for any day, independent of time of year or terrain/lattitude

* A set of month parameters: chance of precipitation per day, and average temperature


The article's only advice is to generate a month's worth of weather, and arrange them manually into a sensible order.

I want to automate the whole process, and I want it to be calendar agnostic. So I have to create a spec for that before proceeding.



implement getting special weather (inc. chance of fog, electrical storm, hail mixed with
snow from wind table)

## calendar agnostic

There are two ways:
* eschew months and even days, relying on percentages wherever possible to accomodate years of different lengths
	- without the convention of months, when do we switch from one average temperature to the next?
		- if we just place each average where the 15th of the month would be, we're still using months just not by name
		- if we use percentages while creating the parameters, and only use days of the year when creating specific actual weather, then the system will remain customisable for other calendars

* stick to tracking no longer than a season, generating weather for a generic summer month without specifying which month it is
	- this could lead to jarring weather changes where one month meets another; it seems like a month has to be able to look ahead and behind to see what weather they should entertain

# Weather

The ideal weather system produces weathers which:, generally impact gameplay
slightly, occasionally impact gameplay greatly, is plausible and realistic, each
generated weather is a short step away from the previous weather optional: takes
season into account when generating weathers

## Generally impact gameplay slightly

Examples: advantage/disadvantage on certain checks perception, following tracks,
Dexterity (sleight of hand, ranged weapons) if too cold, spellcasting (maybe
using magic during a thunderstorm makes it erratic somehow) extra checks
required slippery ground, wet rope/equipment/tools chance of mishap
torches/exposed flames extinguished

## Occasionally impact gameplay greatly

Examples: blinded/deafened
