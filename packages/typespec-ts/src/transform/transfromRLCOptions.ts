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
import { getClientParameters } from "../modular/helpers/clientHelpers.js";

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
    emitterOptions["is-modular-library"] !== false
  ) {
    options.isModularLibrary = true;
  }
  if (dpgContext.arm && emitterOptions["is-modular-library"] !== false) {
    options.isModularLibrary = true;
  }
  const batch = getRLCClients(dpgContext);
  options.batch = batch;
  return options;
}
function extractRLCOptions(
  dpgContext: SdkContext,
  emitterOptions: EmitterOptions,
  generationRootDir: string
): RLCOptions {
  const program = dpgContext.program;
  const includeShortcuts = getIncludeShortcuts(emitterOptions);
  const packageDetails = getPackageDetails(program, emitterOptions);
  const flavor = getFlavor(emitterOptions, packageDetails);
  const moduleKind = getModuleKind(emitterOptions);
  const serviceInfo = getServiceInfo(program);
  const azureSdkForJs = getAzureSdkForJs(emitterOptions, flavor);
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
  const multiClient = emitterOptions["multi-client"];
  const isTypeSpecTest = emitterOptions["is-typespec-test"];
  const title = emitterOptions.title;
  const dependencyInfo = emitterOptions["dependency-info"];
  const productDocLink = emitterOptions["product-doc-link"];
  const isModularLibrary = emitterOptions["is-modular-library"];
  const compatibilityMode = emitterOptions["compatibility-mode"];
  const experimentalExtensibleEnums =
    emitterOptions["experimental-extensible-enums"];
  const ignorePropertyNameNormalize =
    emitterOptions["ignore-property-name-normalize"];
  const ignoreEnumMemberNameNormalize =
    emitterOptions["ignore-enum-member-name-normalize"];
  const compatibilityQueryMultiFormat =
    emitterOptions["compatibility-query-multi-format"];
  const typespecTitleMap = emitterOptions["typespec-title-map"];
  const hasSubscriptionId = getSubscriptionId(dpgContext);
  //TODO should remove this after finish the release tool test
  const shouldUsePnpmDep = emitterOptions["should-use-pnpm-dep"];

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
    ignoreEnumMemberNameNormalize,
    hasSubscriptionId,
    //TODO should remove this after finish the release tool test
    shouldUsePnpmDep
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
  // enable hierarchy client by default if customers didn't set the option explicitly
  return true;
}

function getClearOutputFolder(emitterOptions: EmitterOptions) {
  return emitterOptions["clear-output-folder"] ? true : false;
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
  return Boolean(emitterOptions["include-shortcuts"]);
}

function getModuleKind(emitterOptions: EmitterOptions) {
  return emitterOptions["module-kind"] ?? "esm";
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

function getPackageDetails(
  program: Program,
  emitterOptions: EmitterOptions
): PackageDetails {
  return buildPackageDetails(program, emitterOptions);
}

function getServiceInfo(program: Program): ServiceInfo {
  const defaultService = getDefaultService(program);
  return {
    title: defaultService?.title,
    description: defaultService && getDoc(program, defaultService.type)
  };
}

function getAzureSdkForJs(
  emitterOptions: EmitterOptions,
  flavor: PackageFlavor
) {
  return flavor !== "azure"
    ? false
    : emitterOptions["azure-sdk-for-js"] === undefined ||
      emitterOptions["azure-sdk-for-js"] === null
      ? true
      : Boolean(emitterOptions["azure-sdk-for-js"]);
}

function getGenerateMetadata(emitterOptions: EmitterOptions) {
  if (
    emitterOptions["generate-metadata"] === undefined ||
    emitterOptions["generate-metadata"] === null
  ) {
    return undefined;
  }
  return Boolean(emitterOptions["generate-metadata"]);
}

/**
 * In azure scope, by default we generate test.
 * @param emitterOptions
 * @returns
 */
function getGenerateTest(
  emitterOptions: EmitterOptions,
  flavor: PackageFlavor
) {
  // Disable generateTest if azureSdkForJS is false
  if (!getAzureSdkForJs(emitterOptions, flavor)) {
    return false;
  }
  return emitterOptions["generate-test"];
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
  if (dpgContext.arm && emitterOptions["generate-sample"] === undefined) {
    return true;
  }
  if (
    emitterOptions["generate-sample"] === undefined ||
    emitterOptions["generate-sample"] === null
  ) {
    return undefined;
  }
  return Boolean(emitterOptions["generate-sample"]);
}

export function getCredentialInfo(
  program: Program,
  emitterOptions: EmitterOptions
) {
  const securityInfo = processAuth(program);
  const addCredentials =
    emitterOptions["add-credentials"] === false
      ? false
      : securityInfo
        ? securityInfo.addCredentials
        : emitterOptions["add-credentials"];
  const credentialScopes =
    securityInfo && securityInfo.credentialScopes
      ? securityInfo.credentialScopes
      : emitterOptions["credential-scopes"];
  const credentialKeyHeaderName =
    securityInfo && securityInfo.credentialKeyHeaderName
      ? securityInfo.credentialKeyHeaderName
      : emitterOptions["credential-key-header-name"];
  const customHttpAuthHeaderName =
    securityInfo && securityInfo.customHttpAuthHeaderName
      ? securityInfo.customHttpAuthHeaderName
      : emitterOptions["custom-http-auth-header-name"];
  const customHttpAuthSharedKeyPrefix =
    securityInfo && securityInfo.customHttpAuthSharedKeyPrefix
      ? securityInfo.customHttpAuthSharedKeyPrefix
      : emitterOptions["custom-http-auth-shared-key-prefix"];
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

export function getSubscriptionId(dpgContext: SdkContext) {
  //TODO Need consider multi-client cases, skip multi-client cases check for now
  if (dpgContext.rlcOptions?.multiClient) {
    return;
  }
  for (const client of dpgContext.sdkPackage.clients) {
    if (
      getClientParameters(client, dpgContext)
        .map((item) => item.name)
        .includes("subscriptionId")
    ) {
      return true;
    }
  }
  return false;
}
