import {
  DpgContext,
  listClients
} from "@azure-tools/typespec-client-generator-core";
import {
  NameType,
  normalizeName,
  PackageDetails,
  RLCOptions,
  ServiceInfo
} from "@azure-tools/rlc-common";
import { getDoc, NoTarget, Program } from "@typespec/compiler";
import { getAuthentication } from "@typespec/http";
import { getDefaultService } from "./transform.js";
import { reportDiagnostic } from "../lib.js";

export function transformRLCOptions(
  program: Program,
  emitterOptions: RLCOptions,
  emitterOutputDir: string,
  dpgContext: DpgContext
): RLCOptions {
  // Extract the options from emitter option
  const options = extractRLCOptions(program, emitterOptions, emitterOutputDir);
  const batch = listClients(dpgContext);
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
    azureOutputDirectory,
    sourceFrom: "Cadl"
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
