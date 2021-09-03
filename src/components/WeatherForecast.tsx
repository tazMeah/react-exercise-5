import { useState, useEffect } from "react";
import getWeather from "../services/getWeather";
import Period from "../models/Period";

export default function WeatherForecast() {
	const [weather, setWeather] = useState<Period[]>();

	useEffect(() => {
		getWeather().then((data) => setWeather(data));
	}, []);

	return (
		<div>
			{weather?.map((locale, index) => {
				return (
					<div key={index}>
						<h3>{locale.name}</h3>
						<h4>{locale.temperature}</h4>
						<img src={locale.icon} />
						<p>{locale.detailedForecast}</p>
					</div>
				);
			})}
		</div>
	);
}
