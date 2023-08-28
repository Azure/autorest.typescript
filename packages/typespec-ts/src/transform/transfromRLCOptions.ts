import {
  NameType,
  normalizeName,
  PackageDetails,
  RLCOptions,
  ServiceInfo
} from "@azure-tools/rlc-common";
import {
  getDoc,
  ignoreDiagnostics,
  NoTarget,
  Program
} from "@typespec/compiler";
import { getAuthentication, getHttpOperation } from "@typespec/http";
import { reportDiagnostic } from "../lib.js";
import { getDefaultService } from "../utils/modelUtils.js";
import { getRLCClients } from "../utils/clientUtils.js";
import { SdkContext } from "../utils/interfaces.js";
import {
  listOperationGroups,
  listOperationsInOperationGroup
} from "@azure-tools/typespec-client-generator-core";
import { getOperationName } from "../utils/operationUtil.js";

export function transformRLCOptions(
  emitterOptions: RLCOptions,
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
  emitterOptions: RLCOptions,
  generationRootDir: string
): RLCOptions {
  const program = dpgContext.program;
  const includeShortcuts = getIncludeShortcuts(emitterOptions);
  const packageDetails = getPackageDetails(program, emitterOptions);
  const serviceInfo = getServiceInfo(program);
  const azureSdkForJs = getAzureSdkForJs(emitterOptions);
  const generateMetadata: undefined | boolean =
    getGenerateMetadata(emitterOptions);
  const generateTest: undefined | boolean = getGenerateTest(emitterOptions);
  const credentialInfo = getCredentialInfo(program, emitterOptions);
  const azureOutputDirectory = getAzureOutputDirectory(generationRootDir);
  const enableOperationGroup = getEnableOperationGroup(
    dpgContext,
    emitterOptions
  );
  return {
    ...emitterOptions,
    ...credentialInfo,
    includeShortcuts,
    packageDetails,
    generateMetadata,
    generateTest,
    azureSdkForJs,
    serviceInfo,
    azureOutputDirectory,
    sourceFrom: "TypeSpec",
    enableOperationGroup
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
  for (const option of authorization.options) {
    for (const auth of option.schemes) {
      switch (auth.type) {
        case "http":
          securityInfo.addCredentials = true;
          securityInfo.customHttpAuthHeaderName = "Authorization";
          securityInfo.customHttpAuthSharedKeyPrefix = auth.scheme;
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
  }
  return securityInfo;
}

function getEnableOperationGroup(
  dpgContext: SdkContext,
  emitterOptions: RLCOptions
) {
  if (
    emitterOptions.enableOperationGroup === true ||
    emitterOptions.enableOperationGroup === false
  ) {
    return emitterOptions.enableOperationGroup;
  }
  // Detect if existing name conflicts if customers didn't set the option explicitly
  return detectIfNameConflicts(dpgContext);
}

function detectIfNameConflicts(dpgContext: SdkContext) {
  const clients = getRLCClients(dpgContext);
  const program = dpgContext.program;
  const nameSet = new Set<string>();
  for (const client of clients) {
    const operationGroups = listOperationGroups(dpgContext, client);
    for (const operationGroup of operationGroups) {
      const operations = listOperationsInOperationGroup(
        dpgContext,
        operationGroup
      );
      for (const op of operations) {
        const route = ignoreDiagnostics(getHttpOperation(program, op));
        const name = getOperationName(program, route.operation);
        if (nameSet.has(name)) {
          return true;
        } else {
          nameSet.add(name);
        }
      }
    }
    const clientOperations = listOperationsInOperationGroup(dpgContext, client);
    for (const clientOp of clientOperations) {
      const route = ignoreDiagnostics(getHttpOperation(program, clientOp));
      const name = getOperationName(program, route.operation);
      if (nameSet.has(name)) {
        return true;
      } else {
        nameSet.add(name);
      }
    }
  }

  // No conflicts if we didn't detect any
  return false;
}

function getIncludeShortcuts(emitterOptions: RLCOptions) {
  return Boolean(emitterOptions.includeShortcuts);
}

function getPackageDetails(
  program: Program,
  emitterOptions: RLCOptions
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
  return packageDetails;
}

function getServiceInfo(program: Program): ServiceInfo {
  const defaultService = getDefaultService(program);
  return {
    title: defaultService?.title,
    description: defaultService && getDoc(program, defaultService.type)
  };
}

function getAzureSdkForJs(emitterOptions: RLCOptions) {
  return emitterOptions.azureSdkForJs === undefined ||
    emitterOptions.azureSdkForJs === null
    ? true
    : Boolean(emitterOptions.azureSdkForJs);
}

function getGenerateMetadata(emitterOptions: RLCOptions) {
  if (
    emitterOptions.generateMetadata === undefined ||
    emitterOptions.generateMetadata === null
  ) {
    return undefined;
  }
  return Boolean(emitterOptions.generateMetadata);
}

function getGenerateTest(emitterOptions: RLCOptions) {
  if (
    emitterOptions.generateTest === undefined ||
    emitterOptions.generateTest === null
  ) {
    return undefined;
  }
  return Boolean(emitterOptions.generateTest);
}

export function getCredentialInfo(
  program: Program,
  emitterOptions: RLCOptions
) {
  const securityInfo = processAuth(program);
  const addCredentials =
    !securityInfo && emitterOptions.addCredentials === false
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
