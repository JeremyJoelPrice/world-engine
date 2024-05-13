# Outdoors
## Weather
This module uses days of the year to specify ranges for seasons (e.g. summer) and for precipitation (e.g. wet/dry seasons).

This is so that, in the future, I can more easily implment southern hemisphere values and custom calendars.

For custom calendar to work, I'll have to change the days of the year to something like a percentage duration of the year.

For southern hemisphere to work, I'll have to convert some but not all days of the year so that day 1 is effectively July 1st. Those values that are independent of hemisphere are currently flagges with `regardlessOfHemisphere: true`, so anything which lacks that value will be considered `false` by default.