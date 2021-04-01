import { Channel, Host } from "@autorest/extension-base";
import { ClientOptions } from "../models/clientDetails";
import { OperationGroupDetails } from "../models/operationDetails";
import { KnownMediaType } from "@azure-tools/codegen";

export async function transformOptions(
  host: Host,
  operationGroups: OperationGroupDetails[]
): Promise<ClientOptions> {
  const mediaTypes = getMediaTypesStyles(operationGroups);
  const azureArm = !((await host.GetValue("azure-arm")) === false);

  const addCredentials =
    !((await host.GetValue("add-credentials")) === false) || azureArm;

  const disablePagingAsyncIterators =
    (await host.GetValue("disable-async-iterators")) === true;
  const credentialScopes = await getCredentialScopes(host);

  const outputDirectoryPath: string | null = await host.GetValue(
    "outputFolderUri"
  );
  const outputDirectoryRelativePath: string | undefined = outputDirectoryPath
    ?.replace(/\/$/, "")
    .split("/")
    .slice(-3)
    .join("/");

  return {
    azureOutputDirectory:
      outputDirectoryRelativePath?.substr(0, 3) === "sdk"
        ? outputDirectoryRelativePath
        : undefined,
    addCredentials,
    mediaTypes,
    disablePagingAsyncIterators,
    hasPaging: hasPagingOperations(operationGroups),
    credentialScopes
  };
}

/**
 * Gets the MediaTypes based on the different mediaTypes found in a set of operation groups
 * @param operationGroups
 */
function getMediaTypesStyles(operationGroups: OperationGroupDetails[]) {
  return operationGroups.reduce(
    (mediaTypes, operationGroup) =>
      new Set<KnownMediaType>([...mediaTypes, ...operationGroup.mediaTypes]),
    new Set<KnownMediaType>()
  );
}

function hasPagingOperations(operationGroups: OperationGroupDetails[]) {
  return operationGroups.some(og => og.operations.some(o => !!o.pagination));
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
