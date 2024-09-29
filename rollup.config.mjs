import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss"; // Import the postcss plugin

export default {
	input: "src/index.jsx", // Entry point for your package
	output: {
		file: "dist/index.js",
		format: "cjs", // CommonJS format
		exports: "auto",
	},
	plugins: [
		resolve(), // Resolves node_modules
		commonjs(), // Converts CommonJS to ES6
		babel({
			babelHelpers: "bundled",
			exclude: "node_modules/**",
			extensions: [".js", ".jsx"],
			presets: ["@babel/preset-react"],
		}),
		postcss(), // Use postcss to handle CSS imports
	],
	external: ["react", "react-dom"], // Prevent React from being bundled
};
