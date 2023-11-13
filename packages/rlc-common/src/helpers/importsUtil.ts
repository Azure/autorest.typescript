import { ImportType, Imports } from "../interfaces.js";

/**
 * Build the common imports for generated SDK
 * @param branded whether to use azure-branded imports, the default value is true for azure branded
 * @returns
 */
export function buildRuntimeImports(branded = true): Imports {
  if (!branded) {
    // In non-azure branded scope we only have one dependency that is ts-http-runtime
    return {
      commonFallback: {
        type: "commonFallback",
        specifier: "@typespec/ts-http-runtime",
        version: "1.0.0-alpha.20231103.1"
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
 * Initialize the inner imports for parameter and response, the import set would be used for referred models
 * @returns
 */
export function initInternalImports(): Imports {
  return {
    parameter: {
      type: "parameter",
      importsSet: new Set<string>()
    },
    response: {
      type: "response",
      importsSet: new Set<string>()
    }
  } as Imports;
}

export function getImportSpecifier(
  importType: ImportType,
  imports?: Imports,
  includeFallback = true
): string {
  imports = imports ?? ({} as Imports);
  const defaultPackageMap: Record<ImportType, string> = {
    restClient: "@azure-rest/core-client",
    coreAuth: "@azure/core-auth",
    restPipeline: "@azure/core-rest-pipeline",
    coreUtil: "@azure/core-util",
    coreLogger: "@azure/logger"
  } as any;
  if (!includeFallback) {
    return imports[importType]?.specifier ?? "";
  }
  return (
    (imports[importType] ?? imports.commonFallback)?.specifier ??
    defaultPackageMap[importType] ??
    ""
  );
}
