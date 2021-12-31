module.exports = ({ env }) => ({
	upload: {
		// Setup the cloudinary credential here
		provider: "cloudinary", // https://cloudinary.com/
		providerOptions: {
			cloud_name: "...",
			api_key: "...",
			api_secret: "...",
		},
	},
});
