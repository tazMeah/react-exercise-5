import React from "react";
import "./App.css";
import Quotes from "./components/Quotes";
import WeatherForecast from "./components/WeatherForecast";

function App() {
	return (
		<div className="App">
			<WeatherForecast />
			<Quotes />
		</div>
	);
}

export default App;
