import {
  pascalCase,
  NameType,
  normalizeName,
  PackageDetails,
  PackageFlavor,
  RLCOptions,
  ServiceInfo,
  isAzurePackage
} from "@azure-tools/rlc-common";
import {
  getHttpOperationWithCache,
  listOperationGroups,
  listOperationsInOperationGroup
} from "@azure-tools/typespec-client-generator-core";
import { getDoc, NoTarget, Program } from "@typespec/compiler";
import { getAuthentication } from "@typespec/http";
import { EmitterOptions, reportDiagnostic } from "../lib.js";
import { getRLCClients } from "../utils/clientUtils.js";
import { SdkContext } from "../utils/interfaces.js";
import { getDefaultService } from "../utils/modelUtils.js";
import { detectModelConflicts } from "../utils/namespaceUtils.js";
import { getOperationName } from "../utils/operationUtil.js";
import { getSupportedHttpAuth } from "../utils/credentialUtils.js";

export function transformRLCOptions(
  emitterOptions: EmitterOptions,
  dpgContext: SdkContext
): RLCOptions {
  // Extract the options from emitter option
  const options = extractRLCOptions(
    dpgContext,
    emitterOptions,
    dpgContext.generationPathDetail?.rootDir ?? ""
  );
  if (
    !isAzurePackage({ options }) &&
    emitterOptions["is-modular-library"] !== false &&
    emitterOptions.isModularLibrary !== false
  ) {
    options.isModularLibrary = true;
  }
  if (
    dpgContext.arm &&
    emitterOptions["is-modular-library"] !== false &&
    emitterOptions.isModularLibrary !== false
  ) {
    options.isModularLibrary = true;
  }
  const batch = getRLCClients(dpgContext);
  options.batch = batch;
  return options;
}
function reportOptionDiagnostic(
  program: Program,
  caseOption: {
    kababCaseOption: string;
    camalCaseOption: string;
  }
) {
  reportDiagnostic(program, {
    code: "use-kebab-case-option",
    format: {
      kababCaseOption: caseOption.kababCaseOption,
      camalCaseOption: caseOption.camalCaseOption
    },
    target: NoTarget
  });
}
function extractRLCOptions(
  dpgContext: SdkContext,
  emitterOptions: EmitterOptions,
  generationRootDir: string
): RLCOptions {
  const program = dpgContext.program;
  const includeShortcuts = getIncludeShortcuts(program, emitterOptions);
  const packageDetails = getPackageDetails(program, emitterOptions);
  const flavor = getFlavor(emitterOptions, packageDetails);
  const moduleKind = getModuleKind(program, emitterOptions);
  const serviceInfo = getServiceInfo(program);
  const azureSdkForJs = getAzureSdkForJs(program, emitterOptions);
  const generateMetadata: undefined | boolean = getGenerateMetadata(
    program,
    emitterOptions
  );
  const generateTest: undefined | boolean = getGenerateTest(
    program,
    emitterOptions,
    flavor
  );
  const generateSample: undefined | boolean = getGenerateSample(
    dpgContext,
    program,
    emitterOptions
  );
  const credentialInfo = getCredentialInfo(program, emitterOptions);
  const azureOutputDirectory = getAzureOutputDirectory(generationRootDir);
  const enableOperationGroup = getEnableOperationGroup(
    program,
    dpgContext,
    emitterOptions
  );
  const enableModelNamespace = getEnableModelNamespace(
    program,
    dpgContext,
    emitterOptions
  );
  const hierarchyClient = getHierarchyClient(program, emitterOptions);
  const clearOutputFolder = getClearOutputFolder(program, emitterOptions);
  if (emitterOptions.multiClient !== undefined) {
    reportOptionDiagnostic(program, {
      kababCaseOption: "multi-client",
      camalCaseOption: "multiClient"
    });
  }
  if (emitterOptions.isTypeSpecTest !== undefined) {
    reportOptionDiagnostic(program, {
      kababCaseOption: "is-typespec-test",
      camalCaseOption: "isTypeSpecTest"
    });
  }
  if (emitterOptions.dependencyInfo !== undefined) {
    reportOptionDiagnostic(program, {
      kababCaseOption: "dependency-info",
      camalCaseOption: "dependencyInfo"
    });
  }
  if (emitterOptions.productDocLink !== undefined) {
    reportOptionDiagnostic(program, {
      kababCaseOption: "product-doc-link",
      camalCaseOption: "productDocLink"
    });
  }
  if (emitterOptions.isModularLibrary !== undefined) {
    reportOptionDiagnostic(program, {
      kababCaseOption: "is-modular-library",
      camalCaseOption: "isModularLibrary"
    });
  }
  if (emitterOptions.compatibilityMode !== undefined) {
    reportOptionDiagnostic(program, {
      kababCaseOption: "compatibility-mode",
      camalCaseOption: "compatibilityMode"
    });
  }
  if (emitterOptions.experimentalExtensibleEnums !== undefined) {
    reportOptionDiagnostic(program, {
      kababCaseOption: "experimental-extensible-enums",
      camalCaseOption: "experimentalExtensibleEnums"
    });
  }
  if (emitterOptions.ignorePropertyNameNormalize !== undefined) {
    reportOptionDiagnostic(program, {
      kababCaseOption: "ignore-property-name-normalize",
      camalCaseOption: "ignorePropertyNameNormalize"
    });
  }
  if (emitterOptions.compatibilityQueryMultiFormat !== undefined) {
    reportOptionDiagnostic(program, {
      kababCaseOption: "compatibility-query-multi-format",
      camalCaseOption: "compatibilityQueryMultiFormat"
    });
  }
  if (emitterOptions.typespecTitleMap !== undefined) {
    reportOptionDiagnostic(program, {
      kababCaseOption: "typespec-title-map",
      camalCaseOption: "typespecTitleMap"
    });
  }
  const multiClient =
    emitterOptions["multi-client"] || emitterOptions.multiClient;
  const isTypeSpecTest =
    emitterOptions["is-typespec-test"] || emitterOptions.isTypeSpecTest;
  const title = emitterOptions.title;
  const dependencyInfo =
    emitterOptions["dependency-info"] ?? emitterOptions.dependencyInfo;
  const productDocLink =
    emitterOptions["product-doc-link"] ?? emitterOptions.productDocLink;
  const isModularLibrary =
    emitterOptions["is-modular-library"] || emitterOptions.isModularLibrary;
  const compatibilityMode =
    emitterOptions["compatibility-mode"] || emitterOptions.compatibilityMode;
  const experimentalExtensibleEnums =
    emitterOptions["experimental-extensible-enums"] ||
    emitterOptions.experimentalExtensibleEnums;
  const ignorePropertyNameNormalize =
    emitterOptions["ignore-property-name-normalize"] ||
    emitterOptions.ignorePropertyNameNormalize;
  const compatibilityQueryMultiFormat =
    emitterOptions["compatibility-query-multi-format"] ||
    emitterOptions.compatibilityQueryMultiFormat;
  const typespecTitleMap =
    emitterOptions["typespec-title-map"] ?? emitterOptions.typespecTitleMap;

  return {
    ...credentialInfo,
    flavor,
    moduleKind,
    includeShortcuts,
    packageDetails,
    generateMetadata,
    generateTest,
    generateSample,
    azureSdkForJs,
    serviceInfo,
    azureOutputDirectory,
    sourceFrom: "TypeSpec",
    enableOperationGroup,
    enableModelNamespace,
    hierarchyClient,
    azureArm: dpgContext.arm,
    clearOutputFolder,
    multiClient,
    isTypeSpecTest,
    title,
    dependencyInfo,
    productDocLink,
    isModularLibrary,
    compatibilityMode,
    experimentalExtensibleEnums,
    ignorePropertyNameNormalize,
    compatibilityQueryMultiFormat,
    typespecTitleMap
  };
}

function processAuth(program: Program) {
  const serviceNs = getDefaultService(program)?.type;
  if (!serviceNs) {
    return undefined;
  }
  const authorization = getAuthentication(program, serviceNs);
  if (!authorization || !authorization.options) {
    return undefined;
  }
  const securityInfo: RLCOptions = {};
  for (const auth of getSupportedHttpAuth(program, authorization)) {
    switch (auth.type) {
      case "http":
        securityInfo.addCredentials = true;
        securityInfo.customHttpAuthHeaderName = "Authorization";
        // If it is basic or bearer auth we should generate it as Basic or Bearer
        securityInfo.customHttpAuthSharedKeyPrefix = [
          "basic",
          "bearer"
        ].includes(auth.scheme.toLowerCase())
          ? pascalCase(auth.scheme)
          : auth.scheme;
        break;
      case "apiKey":
        if (auth.in === "cookie") {
          return undefined;
        }
        securityInfo.addCredentials = true;
        securityInfo.credentialKeyHeaderName = auth.name;
        break;
      case "oauth2": {
        const flow = auth.flows[0];
        if (flow === undefined || !flow.scopes) {
          return undefined;
        }
        securityInfo.addCredentials = true;
        if (!securityInfo.credentialScopes) {
          securityInfo.credentialScopes = [];
        }
        if (flow.scopes.length === 0) {
          reportDiagnostic(program, {
            code: "no-credential-scopes",
            target: NoTarget
          });
        }
        // ignore the user_impersonation scope
        if (
          flow.scopes.length === 1 &&
          flow.scopes[0] &&
          flow.scopes[0].value.toLowerCase() === "user_impersonation"
        ) {
          return securityInfo;
        }
        securityInfo.credentialScopes.push(
          ...flow.scopes.map((item) => {
            return item.value;
          })
        );
        break;
      }
      default:
        break;
    }
  }
  return securityInfo;
}

function getEnableOperationGroup(
  program: Program,
  dpgContext: SdkContext,
  emitterOptions: EmitterOptions
) {
  if (emitterOptions.enableOperationGroup !== undefined) {
    reportOptionDiagnostic(program, {
      kababCaseOption: "enable-operation-group",
      camalCaseOption: "enableOperationGroup"
    });
  }
  if (
    emitterOptions["enable-operation-group"] === true ||
    emitterOptions["enable-operation-group"] === false
  ) {
    return emitterOptions["enable-operation-group"];
  }
  if (
    emitterOptions.enableOperationGroup === true ||
    emitterOptions.enableOperationGroup === false
  ) {
    return emitterOptions.enableOperationGroup;
  }
  // Only detect if existing name conflicts if customers don't set hierarchyClient to true
  return detectIfNameConflicts(dpgContext);
}

function getEnableModelNamespace(
  program: Program,
  dpgContext: SdkContext,
  emitterOptions: EmitterOptions
) {
  if (emitterOptions.enableModelNamespace !== undefined) {
    reportOptionDiagnostic(program, {
      kababCaseOption: "enable-model-namespace",
      camalCaseOption: "enableModelNamespace"
    });
  }
  if (
    emitterOptions["enable-model-namespace"] === true ||
    emitterOptions["enable-model-namespace"] === false
  ) {
    return emitterOptions["enable-model-namespace"];
  }
  if (
    emitterOptions.enableModelNamespace === true ||
    emitterOptions.enableModelNamespace === false
  ) {
    return emitterOptions.enableModelNamespace;
  }
  // Detect if existing name conflicts if customers didn't set the option explicitly
  return detectModelConflicts(dpgContext);
}

function getHierarchyClient(program: Program, emitterOptions: EmitterOptions) {
  if (emitterOptions.hierarchyClient !== undefined) {
    reportOptionDiagnostic(program, {
      kababCaseOption: "hierarchy-client",
      camalCaseOption: "hierarchyClient"
    });
  }
  if (
    emitterOptions["hierarchy-client"] === true ||
    emitterOptions["hierarchy-client"] === false
  ) {
    return emitterOptions["hierarchy-client"];
  }
  if (
    emitterOptions.hierarchyClient === true ||
    emitterOptions.hierarchyClient === false
  ) {
    return emitterOptions.hierarchyClient;
  }
  // enable hierarchy client by default if customers didn't set the option explicitly
  return true;
}

function getClearOutputFolder(
  program: Program,
  emitterOptions: EmitterOptions
) {
  if (emitterOptions.clearOutputFolder !== undefined) {
    reportOptionDiagnostic(program, {
      kababCaseOption: "clear-output-folder",
      camalCaseOption: "clearOutputFolder"
    });
  }
  if (
    emitterOptions["clear-output-folder"] === true ||
    emitterOptions.clearOutputFolder === true
  ) {
    return true;
  }
  return false;
}

function detectIfNameConflicts(dpgContext: SdkContext) {
  const clients = getRLCClients(dpgContext);
  for (const client of clients) {
    // only consider it's conflict when there are conflicts in the same client
    const nameSet = new Set<string>();
    const clientOperations = listOperationsInOperationGroup(dpgContext, client);
    for (const clientOp of clientOperations) {
      const route = getHttpOperationWithCache(dpgContext, clientOp);
      const name = getOperationName(dpgContext, route.operation);
      if (nameSet.has(name)) {
        return true;
      } else {
        nameSet.add(name);
      }
    }
    const operationGroups = listOperationGroups(dpgContext, client, true);
    for (const operationGroup of operationGroups) {
      const operations = listOperationsInOperationGroup(
        dpgContext,
        operationGroup
      );
      for (const op of operations) {
        const route = getHttpOperationWithCache(dpgContext, op);
        const name = getOperationName(dpgContext, route.operation);
        if (nameSet.has(name)) {
          return true;
        } else {
          nameSet.add(name);
        }
      }
    }
  }

  // No conflicts if we didn't detect any
  return false;
}

function getIncludeShortcuts(program: Program, emitterOptions: EmitterOptions) {
  if (emitterOptions.includeShortcuts !== undefined) {
    reportOptionDiagnostic(program, {
      kababCaseOption: "include-shortcuts",
      camalCaseOption: "includeShortcuts"
    });
  }
  return (
    Boolean(emitterOptions["include-shortcuts"]) ||
    Boolean(emitterOptions.includeShortcuts)
  );
}

function getModuleKind(program: Program, emitterOptions: EmitterOptions) {
  if (emitterOptions.moduleKind !== undefined) {
    reportOptionDiagnostic(program, {
      kababCaseOption: "module-kind",
      camalCaseOption: "moduleKind"
    });
  }
  return emitterOptions["module-kind"] ?? emitterOptions.moduleKind ?? "esm";
}

function getFlavor(
  emitterOptions: EmitterOptions,
  packageDetails?: PackageDetails
): PackageFlavor {
  const flavor = emitterOptions.flavor;

  if (flavor !== undefined) {
    if (flavor.toLowerCase() === "azure") {
      return "azure";
    } else {
      return undefined;
    }
  }

  const branded = emitterOptions.branded;
  if (branded !== undefined) {
    return branded ? "azure" : undefined;
  }

  const scopeName = packageDetails?.scopeName;
  if (
    scopeName !== undefined &&
    (scopeName.startsWith("azure") || scopeName.startsWith("msinternal"))
  ) {
    return "azure";
  } else {
    return undefined;
  }
}

function getPackageDetails(
  program: Program,
  emitterOptions: EmitterOptions
): PackageDetails {
  const defaultDetial = {
    name: "@msinternal/unamedpackage",
    nameWithoutScope: "unamedpackage",
    version: "1.0.0-beta.1"
  };
  if (emitterOptions.packageDetails !== undefined) {
    reportOptionDiagnostic(program, {
      kababCaseOption: "package-details",
      camalCaseOption: "packageDetails"
    });
    const packageOldDetails: PackageDetails = {
      ...emitterOptions.packageDetails,
      name:
        emitterOptions.packageDetails?.name ??
        normalizeName(
          emitterOptions?.title ?? getDefaultService(program)?.title ?? "",
          NameType.Class
        ),
      version: emitterOptions.packageDetails?.version ?? "1.0.0-beta.1"
    };
    if (emitterOptions.packageDetails?.name) {
      const nameOldParts = emitterOptions.packageDetails?.name.split("/");
      if (nameOldParts.length === 2) {
        packageOldDetails.nameWithoutScope = nameOldParts[1];
        packageOldDetails.scopeName = nameOldParts[0]?.replace("@", "");
      }
    }
    return packageOldDetails ?? defaultDetial;
  }
  if (emitterOptions["package-details"] !== undefined) {
    const packageDetails: PackageDetails = {
      ...emitterOptions["package-details"],
      name:
        emitterOptions["package-details"]?.name ??
        normalizeName(
          emitterOptions?.title ?? getDefaultService(program)?.title ?? "",
          NameType.Class
        ),
      version: emitterOptions["package-details"]?.version ?? "1.0.0-beta.1"
    };
    if (emitterOptions["package-details"]?.name) {
      const nameParts = emitterOptions["package-details"]?.name.split("/");
      if (nameParts.length === 2) {
        packageDetails.nameWithoutScope = nameParts[1];
        packageDetails.scopeName = nameParts[0]?.replace("@", "");
      }
    }
    return packageDetails ?? defaultDetial;
  }
  return defaultDetial;
}

function getServiceInfo(program: Program): ServiceInfo {
  const defaultService = getDefaultService(program);
  return {
    title: defaultService?.title,
    description: defaultService && getDoc(program, defaultService.type)
  };
}

function getAzureSdkForJs(program: Program, emitterOptions: EmitterOptions) {
  if (emitterOptions.azureSdkForJs !== undefined) {
    reportOptionDiagnostic(program, {
      kababCaseOption: "azure-sdk-for-js",
      camalCaseOption: "azureSdkForJs"
    });
  }
  return emitterOptions.flavor !== "azure"
    ? false
    : (emitterOptions["azure-sdk-for-js"] === undefined ||
          emitterOptions["azure-sdk-for-js"] === null) &&
        (emitterOptions.azureSdkForJs === undefined ||
          emitterOptions.azureSdkForJs === null)
      ? true
      : Boolean(emitterOptions["azure-sdk-for-js"]) ||
        Boolean(emitterOptions.azureSdkForJs);
}

function getGenerateMetadata(program: Program, emitterOptions: EmitterOptions) {
  if (emitterOptions.generateMetadata !== undefined) {
    reportOptionDiagnostic(program, {
      kababCaseOption: "generate-metadata",
      camalCaseOption: "generateMetadata"
    });
  }
  if (
    (emitterOptions["generate-metadata"] === undefined ||
      emitterOptions["generate-metadata"] === null) &&
    (emitterOptions.generateMetadata === undefined ||
      emitterOptions.generateMetadata === null)
  ) {
    return undefined;
  }
  return (
    Boolean(emitterOptions["generate-metadata"]) ||
    Boolean(emitterOptions.generateMetadata)
  );
}

/**
 * In azure scope, by default we generate test.
 * @param emitterOptions
 * @returns
 */
function getGenerateTest(
  program: Program,
  emitterOptions: EmitterOptions,
  flavor?: "azure"
) {
  if (emitterOptions.generateTest !== undefined) {
    reportOptionDiagnostic(program, {
      kababCaseOption: "generate-test",
      camalCaseOption: "generateTest"
    });
  }
  if (
    flavor !== "azure" &&
    (emitterOptions["generate-test"] === undefined ||
      emitterOptions["generate-test"] === null) &&
    (emitterOptions.generateTest === undefined ||
      emitterOptions.generateTest === null)
  ) {
    return undefined;
  } else if (
    flavor === "azure" &&
    (emitterOptions["generate-test"] === undefined ||
      emitterOptions["generate-test"] === null) &&
    (emitterOptions.generateTest === undefined ||
      emitterOptions.generateTest === null)
  ) {
    return true;
  }
  return (
    Boolean(emitterOptions["generate-test"]) ||
    Boolean(emitterOptions.generateTest)
  );
}

/**
 * In azure scope, by default we generate test.
 * @param emitterOptions
 * @returns
 */
function getGenerateSample(
  dpgContext: SdkContext,
  program: Program,
  emitterOptions: EmitterOptions
) {
  if (dpgContext.arm && emitterOptions.generateSample === undefined) {
    return true;
  }
  if (emitterOptions.generateSample !== undefined) {
    reportOptionDiagnostic(program, {
      kababCaseOption: "generate-sample",
      camalCaseOption: "generateSample"
    });
  }
  if (
    (emitterOptions["generate-sample"] === undefined ||
      emitterOptions["generate-sample"] === null) &&
    (emitterOptions.generateSample === undefined ||
      emitterOptions.generateSample === null)
  ) {
    return undefined;
  }
  return (
    Boolean(emitterOptions["generate-sample"]) ||
    Boolean(emitterOptions.generateSample)
  );
}

export function getCredentialInfo(
  program: Program,
  emitterOptions: EmitterOptions
) {
  const securityInfo = processAuth(program);
  if (emitterOptions.addCredentials !== undefined) {
    reportOptionDiagnostic(program, {
      kababCaseOption: "add-credentials",
      camalCaseOption: "addCredentials"
    });
  }
  if (emitterOptions.credentialScopes !== undefined) {
    reportOptionDiagnostic(program, {
      kababCaseOption: "credential-scopes",
      camalCaseOption: "credentialScopes"
    });
  }
  if (emitterOptions.credentialKeyHeaderName !== undefined) {
    reportOptionDiagnostic(program, {
      kababCaseOption: "credential-key-header-name",
      camalCaseOption: "credentialKeyHeaderName"
    });
  }
  if (emitterOptions.customHttpAuthHeaderName !== undefined) {
    reportOptionDiagnostic(program, {
      kababCaseOption: "custom-http-auth-header-name",
      camalCaseOption: "customHttpAuthHeaderName"
    });
  }
  if (emitterOptions.customHttpAuthSharedKeyPrefix !== undefined) {
    reportOptionDiagnostic(program, {
      kababCaseOption: "custom-http-auth-shared-key-prefix",
      camalCaseOption: "customHttpAuthSharedKeyPrefix"
    });
  }
  const addCredentials =
    emitterOptions["add-credentials"] === false ||
    emitterOptions.addCredentials === false
      ? false
      : securityInfo
        ? securityInfo.addCredentials
        : emitterOptions["add-credentials"] || emitterOptions.addCredentials;
  const credentialScopes =
    securityInfo && securityInfo.credentialScopes
      ? securityInfo.credentialScopes
      : emitterOptions["credential-scopes"] || emitterOptions.credentialScopes;
  const credentialKeyHeaderName =
    securityInfo && securityInfo.credentialKeyHeaderName
      ? securityInfo.credentialKeyHeaderName
      : emitterOptions["credential-key-header-name"] ||
        emitterOptions.credentialKeyHeaderName;
  const customHttpAuthHeaderName =
    securityInfo && securityInfo.customHttpAuthHeaderName
      ? securityInfo.customHttpAuthHeaderName
      : emitterOptions["custom-http-auth-header-name"] ||
        emitterOptions.customHttpAuthHeaderName;
  const customHttpAuthSharedKeyPrefix =
    securityInfo && securityInfo.customHttpAuthSharedKeyPrefix
      ? securityInfo.customHttpAuthSharedKeyPrefix
      : emitterOptions["custom-http-auth-shared-key-prefix"] ||
        emitterOptions.customHttpAuthSharedKeyPrefix;
  return {
    addCredentials,
    credentialScopes,
    credentialKeyHeaderName,
    customHttpAuthHeaderName,
    customHttpAuthSharedKeyPrefix
  };
}

function getAzureOutputDirectory(emitterOutputDir: string): string | undefined {
  const sdkFolder = emitterOutputDir;
  const sdkReletivePath = sdkFolder
    ?.replace(/\/$/, "")
    .split("/")
    .slice(-3)
    .join("/");
  return sdkReletivePath?.substring(0, 3) === "sdk"
    ? sdkReletivePath
    : undefined;
}
