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
import _ from "lodash";

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
function reportAllCamelOptionDiagnostics(
  program: Program,
  emitterOptions: EmitterOptions
) {
  if (emitterOptions.includeShortcuts !== undefined) {
    reportCamelOptionDiagnostic(program, {
      kebabCaseOption: "include-shortcuts",
      camelCaseOption: "includeShortcuts"
    });
  }
  if (emitterOptions.packageDetails !== undefined) {
    reportCamelOptionDiagnostic(program, {
      kebabCaseOption: "package-details",
      camelCaseOption: "packageDetails"
    });
  }
  if (emitterOptions.moduleKind !== undefined) {
    reportCamelOptionDiagnostic(program, {
      kebabCaseOption: "module-kind",
      camelCaseOption: "moduleKind"
    });
  }
  if (emitterOptions.azureSdkForJs !== undefined) {
    reportCamelOptionDiagnostic(program, {
      kebabCaseOption: "azure-sdk-for-js",
      camelCaseOption: "azureSdkForJs"
    });
  }
  if (emitterOptions.generateMetadata !== undefined) {
    reportCamelOptionDiagnostic(program, {
      kebabCaseOption: "generate-metadata",
      camelCaseOption: "generateMetadata"
    });
  }
  if (emitterOptions.generateTest !== undefined) {
    reportCamelOptionDiagnostic(program, {
      kebabCaseOption: "generate-test",
      camelCaseOption: "generateTest"
    });
  }
  if (emitterOptions.generateSample !== undefined) {
    reportCamelOptionDiagnostic(program, {
      kebabCaseOption: "generate-sample",
      camelCaseOption: "generateSample"
    });
  }
  if (emitterOptions.addCredentials !== undefined) {
    reportCamelOptionDiagnostic(program, {
      kebabCaseOption: "add-credentials",
      camelCaseOption: "addCredentials"
    });
  }
  if (emitterOptions.credentialScopes !== undefined) {
    reportCamelOptionDiagnostic(program, {
      kebabCaseOption: "credential-scopes",
      camelCaseOption: "credentialScopes"
    });
  }
  if (emitterOptions.credentialKeyHeaderName !== undefined) {
    reportCamelOptionDiagnostic(program, {
      kebabCaseOption: "credential-key-header-name",
      camelCaseOption: "credentialKeyHeaderName"
    });
  }
  if (emitterOptions.customHttpAuthHeaderName !== undefined) {
    reportCamelOptionDiagnostic(program, {
      kebabCaseOption: "custom-http-auth-header-name",
      camelCaseOption: "customHttpAuthHeaderName"
    });
  }
  if (emitterOptions.customHttpAuthSharedKeyPrefix !== undefined) {
    reportCamelOptionDiagnostic(program, {
      kebabCaseOption: "custom-http-auth-shared-key-prefix",
      camelCaseOption: "customHttpAuthSharedKeyPrefix"
    });
  }
  if (emitterOptions.enableOperationGroup !== undefined) {
    reportCamelOptionDiagnostic(program, {
      kebabCaseOption: "enable-operation-group",
      camelCaseOption: "enableOperationGroup"
    });
  }
  if (emitterOptions.enableModelNamespace !== undefined) {
    reportCamelOptionDiagnostic(program, {
      kebabCaseOption: "enable-model-namespace",
      camelCaseOption: "enableModelNamespace"
    });
  }
  if (emitterOptions.hierarchyClient !== undefined) {
    reportCamelOptionDiagnostic(program, {
      kebabCaseOption: "hierarchy-client",
      camelCaseOption: "hierarchyClient"
    });
  }
  if (emitterOptions.clearOutputFolder !== undefined) {
    reportCamelOptionDiagnostic(program, {
      kebabCaseOption: "clear-output-folder",
      camelCaseOption: "clearOutputFolder"
    });
  }
  if (emitterOptions.multiClient !== undefined) {
    reportCamelOptionDiagnostic(program, {
      kebabCaseOption: "multi-client",
      camelCaseOption: "multiClient"
    });
  }
  if (emitterOptions.isTypeSpecTest !== undefined) {
    reportCamelOptionDiagnostic(program, {
      kebabCaseOption: "is-typespec-test",
      camelCaseOption: "isTypeSpecTest"
    });
  }
  if (emitterOptions.dependencyInfo !== undefined) {
    reportCamelOptionDiagnostic(program, {
      kebabCaseOption: "dependency-info",
      camelCaseOption: "dependencyInfo"
    });
  }
  if (emitterOptions.productDocLink !== undefined) {
    reportCamelOptionDiagnostic(program, {
      kebabCaseOption: "product-doc-link",
      camelCaseOption: "productDocLink"
    });
  }
  if (emitterOptions.isModularLibrary !== undefined) {
    reportCamelOptionDiagnostic(program, {
      kebabCaseOption: "is-modular-library",
      camelCaseOption: "isModularLibrary"
    });
  }
  if (emitterOptions.compatibilityMode !== undefined) {
    reportCamelOptionDiagnostic(program, {
      kebabCaseOption: "compatibility-mode",
      camelCaseOption: "compatibilityMode"
    });
  }
  if (emitterOptions.experimentalExtensibleEnums !== undefined) {
    reportCamelOptionDiagnostic(program, {
      kebabCaseOption: "experimental-extensible-enums",
      camelCaseOption: "experimentalExtensibleEnums"
    });
  }
  if (emitterOptions.ignorePropertyNameNormalize !== undefined) {
    reportCamelOptionDiagnostic(program, {
      kebabCaseOption: "ignore-property-name-normalize",
      camelCaseOption: "ignorePropertyNameNormalize"
    });
  }
  if (emitterOptions.compatibilityQueryMultiFormat !== undefined) {
    reportCamelOptionDiagnostic(program, {
      kebabCaseOption: "compatibility-query-multi-format",
      camelCaseOption: "compatibilityQueryMultiFormat"
    });
  }
  if (emitterOptions.typespecTitleMap !== undefined) {
    reportCamelOptionDiagnostic(program, {
      kebabCaseOption: "typespec-title-map",
      camelCaseOption: "typespecTitleMap"
    });
  }
}
export function reportCamelOptionDiagnostic(
  program: Program,
  caseOption: {
    kebabCaseOption: string;
    camelCaseOption: string;
  }
) {
  reportDiagnostic(program, {
    code: "use-kebab-case-option",
    format: {
      kebabCaseOption: caseOption.kebabCaseOption,
      camelCaseOption: caseOption.camelCaseOption
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
  reportAllCamelOptionDiagnostics(program, emitterOptions);
  const includeShortcuts = getIncludeShortcuts(emitterOptions);
  const packageDetails = getPackageDetails(program, emitterOptions);
  const flavor = getFlavor(emitterOptions, packageDetails);
  const moduleKind = getModuleKind(emitterOptions);
  const serviceInfo = getServiceInfo(program);
  const azureSdkForJs = getAzureSdkForJs(emitterOptions);
  const generateMetadata = getGenerateMetadata(emitterOptions);
  const generateTest = getGenerateTest(emitterOptions, flavor);
  const generateSample = getGenerateSample(dpgContext, emitterOptions);
  const credentialInfo = getCredentialInfo(program, emitterOptions);
  const azureOutputDirectory = getAzureOutputDirectory(generationRootDir);
  const enableOperationGroup = getEnableOperationGroup(
    dpgContext,
    emitterOptions
  );
  const enableModelNamespace = getEnableModelNamespace(
    dpgContext,
    emitterOptions
  );
  const hierarchyClient = getHierarchyClient(emitterOptions);
  const clearOutputFolder = getClearOutputFolder(emitterOptions);
  const multiClient =
    emitterOptions["multi-client"] ?? emitterOptions.multiClient;
  const isTypeSpecTest =
    emitterOptions["is-typespec-test"] ?? emitterOptions.isTypeSpecTest;
  const title = emitterOptions.title;
  const dependencyInfo =
    emitterOptions["dependency-info"] ?? emitterOptions.dependencyInfo;
  const productDocLink =
    emitterOptions["product-doc-link"] ?? emitterOptions.productDocLink;
  const isModularLibrary =
    emitterOptions["is-modular-library"] ?? emitterOptions.isModularLibrary;
  const compatibilityMode =
    emitterOptions["compatibility-mode"] ?? emitterOptions.compatibilityMode;
  const experimentalExtensibleEnums =
    emitterOptions["experimental-extensible-enums"] ??
    emitterOptions.experimentalExtensibleEnums;
  const ignorePropertyNameNormalize =
    emitterOptions["ignore-property-name-normalize"] ??
    emitterOptions.ignorePropertyNameNormalize;
  const ignoreEnumMemberNameNormalize =
    emitterOptions["ignore-enum-member-name-normalize"] ??
    emitterOptions.ignoreEnumMemberNameNormalize;
  const compatibilityQueryMultiFormat =
    emitterOptions["compatibility-query-multi-format"] ??
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
    typespecTitleMap,
    ignoreEnumMemberNameNormalize
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
  dpgContext: SdkContext,
  emitterOptions: EmitterOptions
) {
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
  dpgContext: SdkContext,
  emitterOptions: EmitterOptions
) {
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

function getHierarchyClient(emitterOptions: EmitterOptions) {
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

function getClearOutputFolder(emitterOptions: EmitterOptions) {
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

function getIncludeShortcuts(emitterOptions: EmitterOptions) {
  return (
    Boolean(emitterOptions["include-shortcuts"]) ||
    Boolean(emitterOptions.includeShortcuts)
  );
}

function getModuleKind(emitterOptions: EmitterOptions) {
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
function buildPackageDetails(
  program: Program,
  emitterOptions: EmitterOptions
): PackageDetails {
  const defaultDetail = {
    name: "@msinternal/unamedpackage",
    nameWithoutScope: "unamedpackage",
    version: "1.0.0-beta.1"
  };
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
  return packageDetails ?? defaultDetail;
}
function _buildPackageDetails(
  program: Program,
  emitterOptions: EmitterOptions
): PackageDetails {
  const defaultDetail = {
    name: "@msinternal/unamedpackage",
    nameWithoutScope: "unamedpackage",
    version: "1.0.0-beta.1"
  };
  const packageDetails: PackageDetails = {
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
    const nameParts = emitterOptions.packageDetails?.name.split("/");
    if (nameParts.length === 2) {
      packageDetails.nameWithoutScope = nameParts[1];
      packageDetails.scopeName = nameParts[0]?.replace("@", "");
    }
  }
  return packageDetails ?? defaultDetail;
}
function getPackageDetails(
  program: Program,
  emitterOptions: EmitterOptions
): PackageDetails {
  if (emitterOptions["package-details"] !== undefined) {
    return buildPackageDetails(program, emitterOptions);
  }
  return _buildPackageDetails(program, emitterOptions);
}

function getServiceInfo(program: Program): ServiceInfo {
  const defaultService = getDefaultService(program);
  return {
    title: defaultService?.title,
    description: defaultService && getDoc(program, defaultService.type)
  };
}

function getAzureSdkForJs(emitterOptions: EmitterOptions) {
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

function getGenerateMetadata(emitterOptions: EmitterOptions) {
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
function getGenerateTest(emitterOptions: EmitterOptions, flavor?: "azure") {
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
  emitterOptions: EmitterOptions
) {
  if (dpgContext.arm && emitterOptions.generateSample === undefined) {
    return true;
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
  const addCredentials =
    emitterOptions["add-credentials"] === false ||
    emitterOptions.addCredentials === false
      ? false
      : securityInfo
        ? securityInfo.addCredentials
        : (emitterOptions["add-credentials"] ?? emitterOptions.addCredentials);
  const credentialScopes =
    securityInfo && securityInfo.credentialScopes
      ? securityInfo.credentialScopes
      : (emitterOptions["credential-scopes"] ??
        emitterOptions.credentialScopes);
  const credentialKeyHeaderName =
    securityInfo && securityInfo.credentialKeyHeaderName
      ? securityInfo.credentialKeyHeaderName
      : (emitterOptions["credential-key-header-name"] ??
        emitterOptions.credentialKeyHeaderName);
  const customHttpAuthHeaderName =
    securityInfo && securityInfo.customHttpAuthHeaderName
      ? securityInfo.customHttpAuthHeaderName
      : (emitterOptions["custom-http-auth-header-name"] ??
        emitterOptions.customHttpAuthHeaderName);
  const customHttpAuthSharedKeyPrefix =
    securityInfo && securityInfo.customHttpAuthSharedKeyPrefix
      ? securityInfo.customHttpAuthSharedKeyPrefix
      : (emitterOptions["custom-http-auth-shared-key-prefix"] ??
        emitterOptions.customHttpAuthSharedKeyPrefix);
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
