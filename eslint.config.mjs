import globals from "globals";
import pluginJs from "@eslint/js";


export default [
	{
		rules: {
			"semi": "error",
			"prefer-const": "error",
			"indent": ["error", "tab"],
			"no-console": ["error", { allow: ["warn", "error"] }],
			"no-irregular-whitespace": "error"
		}
	}
];