import { useState, useEffect } from "react";
import getQuotes from "../services/getQuotes";
import QuoteInterface from "../models/QuoteInterface";

export default function Quotes() {
	const [quotes, setQuotes] = useState<QuoteInterface[]>([
		{ text: "hey", author: "taz" },
	]);
	useEffect(() => {
		getQuotes().then((data) => setQuotes(data));
	}, []);

	return (
		<ul>
			{quotes.map((quote, index) => {
				return (
					<li key={index}>
						<p>{quote.text}</p>
						<p>{quote.author}</p>
					</li>
				);
			})}
		</ul>
	);
}
