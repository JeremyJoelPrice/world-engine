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
