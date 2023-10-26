import { Imports } from "../interfaces";

/**
 * Build the common imports for generated SDK
 * @param branded whether to use azure-branded imports, the default value is true for azure branded
 * @returns
 */
export function build3ndPartyImports(branded = true): Imports {
  if (!branded) {
    // In non-azure branded scope we only have one dependency that is ts-http-runtime
    return {
      commonFallback: {
        type: "commonFallback",
        specifier: "@typespec/ts-http-runtime",
        version: "1.0.0-alpha.20231023.3"
      }
    } as Imports;
  } else {
    return {
      restClient: {
        type: "restClient",
        specifier: "@azure-rest/core-client",
        version: "^1.1.4"
      },
      coreAuth: {
        type: "coreAuth",
        specifier: "@azure/core-auth",
        version: "^1.3.0"
      },
      restPipeline: {
        type: "restPipeline",
        specifier: "@azure/core-rest-pipeline",
        version: "^1.12.0"
      },
      coreUtil: {
        type: "coreUtil",
        specifier: "@azure/core-util",
        version: "^1.4.0"
      },
      coreLogger: {
        type: "coreLogger",
        specifier: "@azure/logger",
        version: "^1.0.0"
      },
      azureEslintPlugin: {
        type: "azureEslintPlugin",
        specifier: "@azure/eslint-plugin-azure-sdk",
        version: "^1.0.0"
      },
      azureTestRecorder: {
        type: "azureTestRecorder",
        specifier: "@azure-tools/test-recorder",
        version: "^3.0.0"
      }
    } as Imports;
  }
}

/**
 * Initialize the inner imports for parameter and response
 * @param isModular whether to use modular imports to add js suffix, the default value is false not in modular
 * @returns
 */
export function initInnerImports(isModular = false): Imports {
  return {
    parameter: {
      type: "parameter",
      specifier: `parameters${isModular ? ".js" : ""}`,
      importsSet: new Set<string>()
    },
    response: {
      type: "response",
      specifier: `responses${isModular ? ".js" : ""}`,
      importsSet: new Set<string>()
    }
  } as Imports;
}
