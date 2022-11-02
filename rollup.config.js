import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import scss from "rollup-plugin-scss";
const isProd = process.env.BUILD === "production";
const outputDir = ".";

export default {
	input: "./src/main.ts",
	output: {
		dir: outputDir,
		sourcemap: "inline",
		sourcemapExcludeSources: isProd,
		format: "cjs",
		exports: "default",
	},
	external: ["obsidian"],
	plugins: [
		typescript(),
		nodeResolve({ browser: true }),
		commonjs(),
		scss({ output: `${outputDir}/styles.css`, sass: require("sass") }),
	],
};
