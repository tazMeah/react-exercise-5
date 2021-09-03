import axios from "axios";
import QuoteInterface from "../models/QuoteInterface";

export default function getQuotes(): Promise<QuoteInterface[]> {
	return axios
		.get("https://grandcircusco.github.io/demo-apis/quotes.json")
		.then((response) => response.data);
}
