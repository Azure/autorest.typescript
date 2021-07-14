import { Channel, Host } from "@autorest/extension-base";
import { AutorestOptions, getHost, getSession } from "../autorestSession";
import { TracingInfo } from "../models/clientDetails";
import { PackageDetails } from "../models/packageDetails";
import { NameType, normalizeName } from "./nameUtils";

/**
 * Extracts common autorest options
 */
export async function extractAutorestOptions(): Promise<AutorestOptions> {
  const host = getHost();
  const useCoreV2 = await getUseCoreV2(host);
  const restLevelClient = await getRestLevelClient(host);
  const azureArm = await getIsAzureArm(host);
  const addCredentials = await getAddCredentials(host);
  const credentialKeyHeaderName = await getKeyCredentialHeaderName(host);
  const srcPath = await getSrcPath(host);
  const outputPath = await getOutputPath(host);
  const credentialScopes = await getCredentialScopes(host);
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

  return {
    azureArm,
    addCredentials,
    credentialKeyHeaderName,
    credentialScopes,
    restLevelClient,
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
    headAsBoolean
  };
}

async function getHeadAsBoolean(host: Host): Promise<boolean> {
  const headAsBoolean = await host.GetValue("head-as-boolean");

  return Boolean(headAsBoolean);
}

async function getSkipEnumValidation(host: Host): Promise<boolean> {
  const skipEnumValidation = await host.GetValue("skip-enum-validation");

  return skipEnumValidation === true;
}

async function getAllowInsecureConnection(host: Host): Promise<boolean> {
  return (await host.GetValue("allow-insecure-connection")) || false;
}

async function getIgnoreNullableOnOptional(host: Host): Promise<boolean> {
  const isAzureArm = await getIsAzureArm(host);
  return (await host.GetValue("ignore-nullable-on-optional"))
    ? true
    : isAzureArm;
}

async function getDisableAsyncOperators(host: Host): Promise<boolean> {
  return (await host.GetValue("disable-async-iterators")) === true;
}

async function getHideClients(host: Host): Promise<boolean> {
  return (await host.GetValue("hide-clients")) || false;
}
async function getGenerateMetadata(host: Host) {
  return (await host.GetValue("generate-metadata")) !== false;
}

async function getLicenseHeader(host: Host): Promise<boolean> {
  return (await host.GetValue("license-header")) || false;
}

async function getTitle(host: Host): Promise<string | undefined> {
  return (await host.GetValue("title")) || undefined;
}

async function getSrcPath(host: Host): Promise<string> {
  return ((await host.GetValue("source-code-folder-path")) as string) || "src";
}

async function getOutputPath(host: Host): Promise<string | undefined> {
  return (await host.GetValue("output-folder")) || undefined;
}

async function getKeyCredentialHeaderName(
  host: Host
): Promise<string | undefined> {
  return (await host.GetValue("credential-key-header-name")) || undefined;
}

async function getAddCredentials(host: Host): Promise<boolean> {
  const addCredentials = await host.GetValue("add-credentials");

  // Only set addCredentials to false if explicitly set to false
  // otherwise default to true
  if (addCredentials === false) {
    return false;
  } else {
    return true;
  }
}
async function getIsAzureArm(host: Host): Promise<boolean> {
  const flag = (await host.GetValue("azure-arm")) === true;
  const openapi = (await host.GetValue("openapi-type")) === "arm";

  return flag || openapi;
}

async function getRestLevelClient(host: Host): Promise<boolean> {
  return (await host.GetValue("rest-level-client")) === true;
}

async function getUseCoreV2(host: Host): Promise<boolean> {
  const useCoreV2Option: boolean = await host.GetValue("use-core-v2");
  return useCoreV2Option === null ? true : Boolean(useCoreV2Option);
}

async function getTracingInfo(host: Host): Promise<TracingInfo | undefined> {
  const tracing: TracingInfo | undefined =
    (await host.GetValue("tracing-info")) || undefined;

  if (tracing && tracing.namespace && tracing.packagePrefix) {
    return tracing;
  }

  const namespace =
    (await host.GetValue("tracing-info.namespace")) || undefined;
  const packagePrefix =
    (await host.GetValue("tracing-info.packagePrefix")) || undefined;

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

async function getPackageDetails(host: Host): Promise<PackageDetails> {
  const { model } = getSession();
  const name = normalizeName(model.language.default.name, NameType.File);
  // TODO: Look for an existing package.json and
  const packageName = (await host.GetValue("package-name")) || name;
  const packageNameParts = packageName.match(/(^@(.*)\/)?(.*)/);
  const version = (await host.GetValue("package-version")) || "1.0.0-beta.1";

  return {
    name: packageName,
    scopeName: packageNameParts[2],
    nameWithoutScope: packageNameParts[3],
    description: model.language.default.description,
    version
  };
}

export async function getCredentialScopes(
  host: Host
): Promise<string[] | undefined> {
  const addCredentials = await host.GetValue("add-credentials");
  const credentialScopes = await host.GetValue("credential-scopes");
  const azureArm = await host.GetValue("azure-arm");

  if (credentialScopes && !addCredentials) {
    throw new Error(
      "--credential-scopes must be used with the --add-credentials flag"
    );
  }

  if (!credentialScopes) {
    if (azureArm) {
      return ["https://management.azure.com/.default"];
    } else if (addCredentials) {
      host.Message({
        Channel: Channel.Warning,
        Text: `You have default credential policy BearerTokenCredentialPolicy
        but not the --credential-scopes flag set while generating non-management plane code.
        This is not recommended because it forces the customer to pass credential scopes
        through kwargs if they want to authenticate.`
      });
    }
  }

  if (typeof credentialScopes === "string") {
    return credentialScopes.split(",");
  }

  return undefined;
}

async function getAzureOutputDirectoryPath(
  host: Host
): Promise<string | undefined> {
  const outputDirectoryPath: string | null = await host.GetValue(
    "outputFolderUri"
  );
  const outputDirectoryRelativePath: string | undefined = outputDirectoryPath
    ?.replace(/\/$/, "")
    .split("/")
    .slice(-3)
    .join("/");
  return outputDirectoryRelativePath?.substr(0, 3) === "sdk"
    ? outputDirectoryRelativePath
    : undefined;
}
