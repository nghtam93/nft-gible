const baseUrl =
	process.env.NODE_ENV === "production"
		? "https://gible-react.envytheme.com"
		: "http://localhost:1337";

export default baseUrl;
