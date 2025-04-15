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
 * @param isTestPackage If isTestPackage is true which means we will not generate .js suffix when importing files
 *
 * @example
 *
 * ```ts
 * getImportModuleName("myModule", "true") // returns "myModule"
 * getImportModuleName("myModule", "false") // returns "myModule.js"
 * getImportModuleName({ cjsName: "myModule", esModulesName: "myModule/index.js" }, "true") // returns "myModule"
 * getImportModuleName({ cjsName: "myModule", esModulesName: "myModule/index.js" }, "false") // returns "myModule/index.js"
 */
// TODO remove this function after migrating the configs for integration
export function getImportModuleName(
    name: ModuleName,
    isTestPackage?: boolean
): string {
    if (isTestPackage) {
        return typeof name === "string" ? name : name.cjsName;
    } else {
        return typeof name === "string" ? `${name}.js` : name.esModulesName;
    }
}