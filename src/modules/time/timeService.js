import dayjs from "dayjs";
import dayOfYear from "dayjs/plugin/dayOfYear";
dayjs.extend(dayOfYear);

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

export function getMoon(datetime, sunset) {
	const FULL_MOON_REFERENCE = dayjs("0793-06-14");

	// Days since reference full moon
	const daysSince = Math.floor(datetime.diff(FULL_MOON_REFERENCE, "day"));

	// 28-day lunar cycle
	// handles negative days i.e. days before the reference full moon
	const lunarDay = ((daysSince % 28) + 28) % 28;

	// Moonrise shifts ~1 hour later per day
	const moonrise = sunset.add(lunarDay, "hour");

	// Moon is visible roughly 12 hours
	const moonset = moonrise.add(12, "hour");

	// Handle midnight wrapping
	const moonriseHour = moonrise.hour();
	const moonsetHour = moonset.hour();

	const visible =
		moonriseHour < moonsetHour
			? datetime.hour() >= moonriseHour && datetime.hour() < moonsetHour
			: datetime.hour() >= moonriseHour || datetime.hour() < moonsetHour;

	return {
		phase: getMoonPhase(lunarDay),
		visible
	};
}

function getMoonPhase(lunarDay) {
	if (lunarDay <= 2) return { label: "Full", emoji: "🌕" };
	if (lunarDay <= 6) return { label: "Waning Gibbous", emoji: "🌖" };
	if (lunarDay <= 9) return { label: "Last Quarter", emoji: "🌗" };
	if (lunarDay <= 13) return { label: "Waning Crescent", emoji: "🌘" };
	if (lunarDay <= 16) return { label: "New", emoji: "🌑" };
	if (lunarDay <= 20) return { label: "Waxing Crescent", emoji: "🌒" };
	if (lunarDay <= 23) return { label: "First Quarter", emoji: "🌓" };
	return { label: "Waxing Gibbous", emoji: "🌔" };
}
