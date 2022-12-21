import { listClients } from "@azure-tools/cadl-dpg";
import {
  NameType,
  normalizeName,
  PackageDetails,
  RLCOptions,
  ServiceInfo
} from "@azure-tools/rlc-common";
import {
  getServiceNamespace,
  getServiceTitle,
  Program
} from "@cadl-lang/compiler";
import { getAuthentication } from "@cadl-lang/rest/http";

export function transformRLCOptions(
  program: Program,
  emitterOptions: RLCOptions,
  emitterOutputDir: string
): RLCOptions {
  // Extract the options from emitter option
  const options = extractRLCOptions(program, emitterOptions, emitterOutputDir);
  const batch = listClients(program);
  options.batch = batch;
  return options;
}

function extractRLCOptions(
  program: Program,
  emitterOptions: RLCOptions,
  emitterOutputDir: string
): RLCOptions {
  const includeShortcuts = getIncludeShortcuts(emitterOptions);
  const packageDetails = getPackageDetails(program, emitterOptions);
  const serviceInfo = getServiceInfo(program);
  const azureSdkForJs = getAzureSdkForJs(emitterOptions);
  const generateMetadata = getGenerateMetadata(emitterOptions);
  const generateTest = getGenerateTest(emitterOptions);
  const credentialInfo = getCredentialInfo(program, emitterOptions);
  const azureOutputDirectory = getAzureOutputDirectory(emitterOutputDir);
  return {
    ...emitterOptions,
    ...credentialInfo,
    includeShortcuts,
    packageDetails,
    generateMetadata,
    generateTest,
    azureSdkForJs,
    serviceInfo,
    azureOutputDirectory
  };
}

function processAuth(program: Program) {
  const serviceNs = getServiceNamespace(program);
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
        emitterOptions?.title ?? getServiceTitle(program),
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
  return {
    title: getServiceTitle(program)
  };
}

function getAzureSdkForJs(emitterOptions: RLCOptions) {
  return emitterOptions.azureSdkForJs === undefined ||
    emitterOptions.azureSdkForJs === null
    ? true
    : Boolean(emitterOptions.azureSdkForJs);
}

function getGenerateMetadata(emitterOptions: RLCOptions) {
  return emitterOptions.generateMetadata === undefined ||
    emitterOptions.generateMetadata === null
    ? true
    : Boolean(emitterOptions.generateMetadata);
}

function getGenerateTest(emitterOptions: RLCOptions) {
  return emitterOptions.generateTest === undefined ||
    emitterOptions.generateTest === null
    ? true
    : Boolean(emitterOptions.generateTest);
}

function getCredentialInfo(program: Program, emitterOptions: RLCOptions) {
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
  return {
    addCredentials,
    credentialScopes,
    credentialKeyHeaderName
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
