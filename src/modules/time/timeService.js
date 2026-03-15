import dayjs from "dayjs";
import dayOfYear from "dayjs/plugin/dayOfYear";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import { FULL_MOON_REFERENCE } from "./constants";

dayjs.extend(dayOfYear);
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

export function getSunriseSunset(latitude, datetime) {
	const dayOfYear = datetime.dayOfYear();
	// this function returns sunrise/sunset to the nearest hour,
	// assuming solar noon is 12pm
	const degreesPerRadian = 180 / Math.PI;
	const radiansPerDegree = Math.PI / 180;
	const springEquinoxDayOfYear = 80;
	const daysSinceSpringEquinox =
		(dayOfYear - springEquinoxDayOfYear + 365) % 365;
	const solarDeclination =
		23.45 *
		Math.sin(((360 * daysSinceSpringEquinox) / 365) * radiansPerDegree);
	const solarHourAngle =
		Math.acos(
			Math.max(
				Math.min(
					-Math.tan(solarDeclination * radiansPerDegree) *
						Math.tan(latitude * radiansPerDegree),
					1.0
				),
				-1.0
			)
		) * degreesPerRadian;

	/**
	 * earth rotates at 15º/h
	 * solarHourAngle / 15º = hours from sunrise to noon,
	 * and therefore hours from noon to sunset
	 */
	const sunriseHour = Math.round(12 - solarHourAngle / 15);
	const sunsetHour = Math.round(12 + solarHourAngle / 15);

	return {
		sunrise: datetime.hour(sunriseHour).minute(0),
		sunset: datetime.hour(sunsetHour).minute(0)
	};
}

export function getMoon(datetime, latitude) {
	const { moonrise, moonset, phase } = getMoonOfGivenDay(datetime, latitude);
	const { moonrise: yesterdayMoonrise, moonset: yesterdayMoonset } =
		getMoonOfGivenDay(datetime.subtract(1, "day"), latitude);
	const visible =
		(datetime.isSameOrAfter(moonrise) &&
			datetime.isSameOrBefore(moonset)) ||
		(datetime.isSameOrAfter(yesterdayMoonrise) &&
			datetime.isSameOrBefore(yesterdayMoonset));

	return {
		phase,
		visible
	};
}

function getMoonOfGivenDay(datetime, latitude) {
	// Days since reference full moon
	const daysSince = Math.floor(datetime.diff(FULL_MOON_REFERENCE, "day"));
	const lunarCycleLength = 29;
	const lunarDay =
		((daysSince % lunarCycleLength) + lunarCycleLength) % lunarCycleLength; // a day number from 0-28

	// Moon rises later each day
	const moonriseHour =
		(Math.round((24 / lunarCycleLength) * lunarDay) + 18) % 24;

	let moonrise = datetime
		.startOf("day")
		.add(moonriseHour, "hour")
		.minute(0)
		.second(0);

	// --- Latitude adjustment ---
	const latitudeFactor = latitude / 90;
	const visibleHours = Math.round(12 + latitudeFactor * 4);

	let moonset = moonrise.add(visibleHours, "hour");

	const phase = getMoonPhaseOfLunarDay(lunarDay);

	return { moonrise, moonset, phase };
}

function getMoonPhaseOfLunarDay(lunarDay) {
	if (lunarDay <= 2) return { label: "Full", emoji: "🌕" };
	if (lunarDay <= 6) return { label: "Waning Gibbous", emoji: "🌖" };
	if (lunarDay <= 9) return { label: "Last Quarter", emoji: "🌗" };
	if (lunarDay <= 13) return { label: "Waning Crescent", emoji: "🌘" };
	if (lunarDay <= 16) return { label: "New", emoji: "🌑" };
	if (lunarDay <= 20) return { label: "Waxing Crescent", emoji: "🌒" };
	if (lunarDay <= 23) return { label: "First Quarter", emoji: "🌓" };
	return { label: "Waxing Gibbous", emoji: "🌔" };
}
