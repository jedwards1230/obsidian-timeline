import scss from "rollup-plugin-scss";

const isProd = process.env.BUILD === "production";

export default [
	{
		input: "./src/style/snippet/styles.sass",
		output: {
			file: "./src/style/snippet/styles.css",
			format: "es",
		},
		plugins: [
			scss({
				output: "./src/style/snippet/timeline-snippet.css",
				failOnError: true,
				runtime: require("sass"),
				indentedSyntax: true,
				watch: "./src/style/snippet/*.sass",
				prefix: "@use 'sass:math'\n",
				outputStyle: isProd ? "compressed" : undefined,
				fileName: "styles.css",
			}),
		],
	},
];
