export type ModuleName =
	| string
	| {
		esModulesName: string;
		cjsName: string;
	};

/**
 * This is a helper function that gets the right import module depending on the type of
 * library being generated.
 *
 * @param name The name of the module to import - this can be a string representing the base name of the module or an object with the cjsName and esModulesName properties. *
 * @param moduleKind The type of module being generated. This can be either "cjs" or "esm".
 *
 * @example
 *
 * ```ts
 * getImportModuleName("myModule", "cjs") // returns "myModule"
 * getImportModuleName("myModule", "esm") // returns "myModule.js"
 * getImportModuleName({ cjsName: "myModule", esModulesName: "myModule/index.js" }, "cjs") // returns "myModule"
 * getImportModuleName({ cjsName: "myModule", esModulesName: "myModule/index.js" }, "esm") // returns "myModule/index.js"
 */
export function getImportModuleName(
	name: ModuleName,
	moduleKind?: "cjs" | "esm"
): string {
	const cjsName = typeof name === "string" ? name : name.cjsName;
	const esModulesName =
		typeof name === "string" ? `${name}.js` : name.esModulesName;
	if (moduleKind === "esm") {
		return esModulesName;
	}
	// CJS is considered the default in autorest.typescript
	return cjsName;
}