import {
  pascalCase,
  NameType,
  normalizeName,
  PackageDetails,
  PackageFlavor,
  RLCOptions,
  ServiceInfo
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
  const azureSdkForJs = getAzureSdkForJs(emitterOptions);
  const generateMetadata: undefined | boolean =
    getGenerateMetadata(emitterOptions);
  const generateTest: undefined | boolean = getGenerateTest(
    emitterOptions,
    flavor
  );
  const generateSample: undefined | boolean = getGenerateSample(emitterOptions);
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
  return {
    ...emitterOptions,
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
    clearOutputFolder
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
    emitterOptions.hierarchyClient === true ||
    emitterOptions.hierarchyClient === false
  ) {
    return emitterOptions.hierarchyClient;
  }
  // enable hierarchy client by default if customers didn't set the option explicitly
  return true;
}

function getClearOutputFolder(emitterOptions: EmitterOptions) {
  if (emitterOptions.clearOutputFolder === true) {
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
  return Boolean(emitterOptions.includeShortcuts);
}

function getModuleKind(emitterOptions: EmitterOptions) {
  return emitterOptions.moduleKind ?? "esm";
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
  return (
    packageDetails ?? {
      name: "@msinternal/unamedpackage",
      nameWithoutScope: "unamedpackage",
      version: "1.0.0-beta.1"
    }
  );
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
    : emitterOptions.azureSdkForJs === undefined ||
        emitterOptions.azureSdkForJs === null
      ? true
      : Boolean(emitterOptions.azureSdkForJs);
}

function getGenerateMetadata(emitterOptions: EmitterOptions) {
  if (
    emitterOptions.generateMetadata === undefined ||
    emitterOptions.generateMetadata === null
  ) {
    return undefined;
  }
  return Boolean(emitterOptions.generateMetadata);
}

/**
 * In azure scope, by default we generate test.
 * @param emitterOptions
 * @returns
 */
function getGenerateTest(emitterOptions: EmitterOptions, flavor?: "azure") {
  if (
    flavor !== "azure" &&
    (emitterOptions.generateTest === undefined ||
      emitterOptions.generateTest === null)
  ) {
    return undefined;
  } else if (
    flavor === "azure" &&
    (emitterOptions.generateTest === undefined ||
      emitterOptions.generateTest === null)
  ) {
    return true;
  }
  return Boolean(emitterOptions.generateTest);
}

/**
 * In azure scope, by default we generate test.
 * @param emitterOptions
 * @returns
 */
function getGenerateSample(emitterOptions: EmitterOptions) {
  if (
    emitterOptions.generateSample === undefined ||
    emitterOptions.generateSample === null
  ) {
    return undefined;
  }
  return Boolean(emitterOptions.generateSample);
}

export function getCredentialInfo(
  program: Program,
  emitterOptions: EmitterOptions
) {
  const securityInfo = processAuth(program);
  const addCredentials =
    emitterOptions.addCredentials === false
      ? false
      : securityInfo
        ? securityInfo.addCredentials
        : emitterOptions.addCredentials;
  const credentialScopes =
    securityInfo && securityInfo.credentialScopes
      ? securityInfo.credentialScopes
      : emitterOptions.credentialScopes;
  const credentialKeyHeaderName =
    securityInfo && securityInfo.credentialKeyHeaderName
      ? securityInfo.credentialKeyHeaderName
      : emitterOptions.credentialKeyHeaderName;
  const customHttpAuthHeaderName =
    securityInfo && securityInfo.customHttpAuthHeaderName
      ? securityInfo.customHttpAuthHeaderName
      : emitterOptions.customHttpAuthHeaderName;
  const customHttpAuthSharedKeyPrefix =
    securityInfo && securityInfo.customHttpAuthSharedKeyPrefix
      ? securityInfo.customHttpAuthSharedKeyPrefix
      : emitterOptions.customHttpAuthSharedKeyPrefix;
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
