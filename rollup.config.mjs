import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";

export default {
	input: "src/index.jsx", // Entry point for your package (ensure the correct file name)
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
			exclude: "node_modules/**", // Exclude node_modules from being transpiled
			extensions: [".js", ".jsx"], // Add .jsx as a recognized extension
			presets: ["@babel/preset-react"], // Transform JSX
		}),
	],
	external: ["react", "react-dom"], // Don't bundle React or ReactDOM
};
