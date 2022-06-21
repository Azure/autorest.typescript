import { Channel, AutorestExtensionHost } from "@autorest/extension-base";
import { AutorestOptions, getHost, getSession } from "../autorestSession";
import { DependencyInfo, TracingInfo } from "../models/clientDetails";
import { PackageDetails } from "../models/packageDetails";
import { NameType, normalizeName } from "./nameUtils";

/**
 * Extracts common autorest options
 */
export async function extractAutorestOptions(): Promise<AutorestOptions> {
  const host = getHost();
  const useCoreV2 = await getUseCoreV2(host);
  const restLevelClient = await getRestLevelClient(host);
  const rlcShortcut = await getHasShortcutMethods(host);
  const azureArm = await getIsAzureArm(host);
  const addCredentials = await getAddCredentials(host);
  const security = await getSecurity(host);
  const securityHeaderName = await getSecurityHeaderName(host);
  const srcPath = await getSrcPath(host);
  const outputPath = await getOutputPath(host);
  const securityScopes = await getSecurityScopes(host);
  const packageDetails = await getPackageDetails(host);
  const licenseHeader = await getLicenseHeader(host);
  const generateMetadata = await getGenerateMetadata(host);
  const hideClients = await getHideClients(host);
  const title = await getTitle(host);

  const tracingInfo = await getTracingInfo(host);
  const disablePagingAsyncIterators = await getDisableAsyncOperators(host);
  const ignoreNullableOnOptional = await getIgnoreNullableOnOptional(host);
  const allowInsecureConnection = await getAllowInsecureConnection(host);
  const skipEnumValidation = await getSkipEnumValidation(host);
  const azureOutputDirectory = await getAzureOutputDirectoryPath(host);
  const headAsBoolean = await getHeadAsBoolean(host);
  const isTestPackage = await getIsTestPackage(host);
  const generateSample = await getGenerateSample(host);
  const generateTest = await getGenerateTest(host);
  const batch = await getBatch(host);
  const multiClient = await getMultiClient(host);
  const productDocLink = await getProductDocLink(host);
  const coreHttpCompatMode = await getCoreHttpCompatMode(host);
  const azureSdkForJs = await getAzureSdkForJs(host);
  const dependencyInfo = await getDependencyInfo(host);

  return {
    azureArm,
    addCredentials,
    security,
    securityHeaderName,
    securityScopes,
    restLevelClient,
    rlcShortcut,
    srcPath,
    outputPath,
    packageDetails,
    licenseHeader,
    tracingInfo,
    generateMetadata,
    useCoreV2,
    hideClients,
    ignoreNullableOnOptional,
    allowInsecureConnection,
    disablePagingAsyncIterators,
    skipEnumValidation,
    title,
    azureOutputDirectory,
    headAsBoolean,
    isTestPackage,
    generateTest,
    batch,
    multiClient,
    generateSample,
    azureSdkForJs,
    productDocLink,
    coreHttpCompatMode,
    dependencyInfo
  };
}

async function getHasShortcutMethods(
  host: AutorestExtensionHost
): Promise<boolean> {
  const headAsBoolean = await host.getValue("rlc-shortcut");

  return Boolean(headAsBoolean);
}

async function getHeadAsBoolean(host: AutorestExtensionHost): Promise<boolean> {
  const headAsBoolean = await host.getValue("head-as-boolean");

  return Boolean(headAsBoolean);
}

async function getIsTestPackage(host: AutorestExtensionHost): Promise<boolean> {
  const isTestPackage = await host.getValue("is-test-package");
  return isTestPackage === null ? false : Boolean(isTestPackage);
}

async function getGenerateSample(
  host: AutorestExtensionHost
): Promise<boolean> {
  const generateSample = await host.getValue("generate-sample");
  return generateSample === undefined || generateSample === null ? false : Boolean(generateSample);
}

async function getGenerateTest(host: AutorestExtensionHost): Promise<boolean> {
  const generateTest = await host.getValue("generate-test");
  return generateTest === null ? false : Boolean(generateTest);
}

async function getAzureSdkForJs(host: AutorestExtensionHost): Promise<boolean> {
  const azureSdkForJs = await host.getValue("azure-sdk-for-js");
  return azureSdkForJs === undefined || azureSdkForJs === null
    ? true
    : Boolean(azureSdkForJs);
}

async function getSkipEnumValidation(
  host: AutorestExtensionHost
): Promise<boolean> {
  const skipEnumValidation = await host.getValue("skip-enum-validation");

  return skipEnumValidation === true;
}

async function getAllowInsecureConnection(
  host: AutorestExtensionHost
): Promise<boolean> {
  return (await host.getValue("allow-insecure-connection")) || false;
}

async function getIgnoreNullableOnOptional(
  host: AutorestExtensionHost
): Promise<boolean> {
  const isAzureArm = await getIsAzureArm(host);
  return (await host.getValue("ignore-nullable-on-optional"))
    ? true
    : isAzureArm;
}

async function getDisableAsyncOperators(
  host: AutorestExtensionHost
): Promise<boolean> {
  return (await host.getValue("disable-async-iterators")) === true;
}

async function getHideClients(host: AutorestExtensionHost): Promise<boolean> {
  return (await host.getValue("hide-clients")) || false;
}
async function getGenerateMetadata(host: AutorestExtensionHost) {
  return (await host.getValue("generate-metadata")) !== false;
}

async function getLicenseHeader(host: AutorestExtensionHost): Promise<boolean> {
  const license: boolean | undefined = await host.getValue("license-header");
  if (license === undefined) {
    return true;
  }
  return license;
}

async function getTitle(
  host: AutorestExtensionHost
): Promise<string | undefined> {
  return (await host.getValue("title")) || undefined;
}

async function getSrcPath(host: AutorestExtensionHost): Promise<string> {
  return ((await host.getValue("source-code-folder-path")) as string) || "src";
}

async function getOutputPath(
  host: AutorestExtensionHost
): Promise<string | undefined> {
  return (await host.getValue("output-folder")) || undefined;
}

async function getSecurityHeaderName(
  host: AutorestExtensionHost
): Promise<string | undefined> {
  return (await host.getValue("security-header-name")) || undefined;
}

async function getAddCredentials(
  host: AutorestExtensionHost
): Promise<boolean> {
  const addCredentials = await host.getValue("add-credentials");

  // Only set addCredentials to false if explicitly set to false
  // otherwise default to true
  if (addCredentials === false) {
    return false;
  } else {
    return true;
  }
}

async function getSecurity(
  host: AutorestExtensionHost
): Promise<string | undefined> {
  const security: string | undefined = await host.getValue("security");
  return security
}

async function getIsAzureArm(host: AutorestExtensionHost): Promise<boolean> {
  const flag = (await host.getValue("azure-arm")) === true;
  const openapi = (await host.getValue("openapi-type")) === "arm";

  return flag || openapi;
}

async function getRestLevelClient(
  host: AutorestExtensionHost
): Promise<boolean> {
  return (await host.getValue("rest-level-client")) === true;
}

async function getUseCoreV2(host: AutorestExtensionHost): Promise<boolean> {
  const useCoreV2Option = await host.getValue("use-core-v2");
  return useCoreV2Option === null ? true : Boolean(useCoreV2Option);
}

async function getTracingInfo(
  host: AutorestExtensionHost
): Promise<TracingInfo | undefined> {
  const tracing: TracingInfo | undefined =
    (await host.getValue("tracing-info")) || undefined;

  if (tracing && tracing.namespace) {
    return tracing;
  }

  const namespace: string | undefined =
    (await host.getValue<string>("tracing-info.namespace")) || undefined;
  const packagePrefix: string | undefined =
    (await host.getValue("tracing-info.packagePrefix")) || undefined;

  if (packagePrefix && namespace) {
    return {
      namespace,
      packagePrefix
    };
  }

  if (!tracing && !packagePrefix && !namespace) {
    return undefined;
  }

  throw new Error(
    "Invalid tracing-info. Make sure that namespace and packagePrefix are defined"
  );
}

async function getPackageDetails(
  host: AutorestExtensionHost
): Promise<PackageDetails> {
  const { model } = getSession();
  const name = normalizeName(model.language.default.name, NameType.File);
  // TODO: Look for an existing package.json and
  const packageName: string = (await host.getValue("package-name")) || name;
  const packageNameParts: RegExpMatchArray =
    packageName.match(/(^@(.*)\/)?(.*)/) ?? [];
  const version: string =
    (await host.getValue("package-version")) || "1.0.0-beta.1";

  return {
    name: packageName,
    scopeName: packageNameParts[2],
    nameWithoutScope: packageNameParts[3],
    description: model.language.default.description,
    version
  };
}

export async function getSecurityScopes(
  host: AutorestExtensionHost
): Promise<string[] | undefined> {
  const securityScopes: string | undefined = await host.getValue("security-scopes");
  if(securityScopes !== undefined && typeof securityScopes === "string") {
    return securityScopes.split(",");
  }
  return securityScopes;
}

async function getAzureOutputDirectoryPath(
  host: AutorestExtensionHost
): Promise<string | undefined> {
  const outputDirectoryPath = await host.getValue<string>("outputFolderUri");
  const outputDirectoryRelativePath: string | undefined = outputDirectoryPath
    ?.replace(/\/$/, "")
    .split("/")
    .slice(-3)
    .join("/");
  return outputDirectoryRelativePath?.substr(0, 3) === "sdk"
    ? outputDirectoryRelativePath
    : undefined;
}

async function getBatch(
  host: AutorestExtensionHost
): Promise<[string, any][] | undefined> {
  const batch = await host.getValue<[string, any][]>("batch");
  return batch;
}

async function getProductDocLink(
  host: AutorestExtensionHost
): Promise<string | undefined> {
  return (await host.getValue("product-doc-link")) || undefined;
}

async function getMultiClient(host: AutorestExtensionHost): Promise<boolean> {
  const multiClient = (await host.getValue("multi-client")) || undefined;
  return !!multiClient;
}

async function getCoreHttpCompatMode(
  host: AutorestExtensionHost
): Promise<boolean> {
  return (await host.getValue("core-http-compat-mode")) || false;
}

async function getDependencyInfo(
  host: AutorestExtensionHost
): Promise<DependencyInfo | undefined> {
  const dependency: DependencyInfo | undefined =
    (await host.getValue("dependency-info")) || undefined;

  if (dependency && dependency.description && dependency.link) {
    return dependency;
  }

  const link: string | undefined =
    (await host.getValue<string>("dependency-info.link")) || undefined;
  const description: string | undefined =
    (await host.getValue("dependency-info.description")) || undefined;

  if (description && link) {
    return {
      link,
      description
    };
  }

  if (!dependency && !description && !link) {
    return undefined;
  }

  throw new Error(
    "Invalid dependency-info. Make sure that link and description are defined"
  );
}
