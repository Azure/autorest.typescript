# CloudHSM Cluster Backup Status Get Operation with ARM ResourceInstanceParameters

Should generate correct operation for getting backup status using ARM ResourceInstanceParameters with proper return type handling.

## TypeSpec

This is the TypeSpec definition for CloudHSM cluster backup status operation using ARM patterns.

```tsp
import "@typespec/http";
import "@typespec/rest";
import "@typespec/versioning";
import "@azure-tools/typespec-azure-core";
import "@azure-tools/typespec-azure-resource-manager";

using TypeSpec.Http;
using TypeSpec.Rest;
using TypeSpec.Versioning;
using Azure.Core;
using Azure.ResourceManager;

@armProviderNamespace
@service(#{ title: "HardwareSecurityModules" })
@versioned(Versions)
@armCommonTypesVersion(Azure.ResourceManager.CommonTypes.Versions.v5)
namespace Microsoft.HardwareSecurityModules;

enum Versions {
  @useDependency(Azure.ResourceManager.Versions.v1_0_Preview_1)
  @useDependency(Azure.Core.Versions.v1_0_Preview_1)
  v2021_10_01_preview: "2021-10-01-preview",
}

model BackupResult {
  properties?: BackupResultProperties;
}

model BackupResultProperties {
  azureStorageBlobContainerUri?: string;
  backupId?: string;
  status?: string;
  statusDetails?: string;
  startTime?: utcDateTime;
  endTime?: utcDateTime;
}

op get(
  @path subscriptionId: string,
  @path resourceGroupName: string,
  @path cloudHsmClusterName: string,
  @path jobId: string,
): (BackupResult &
    Azure.Core.RequestIdResponseHeader) | ArmAcceptedResponse<ExtraHeaders = {
    @header("Location")
    @doc("The Location header contains the URL where the status of the long running operation can be checked.")
    location?: string;
  } & Azure.Core.RequestIdResponseHeader> | ErrorResponse;;
```

The config would be like:

```yaml
withRawContent: true
```

## Operations

Should generate operations correctly with proper ARM pattern handling:

```ts operations
import { HardwareSecurityModulesContext as Client } from "./index.js";
import {
  BackupResult,
  backupResultDeserializer,
  errorResponseDeserializer,
} from "../models/models.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { GetOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getSend(
  context: Client,
  resourceGroupName: string,
  cloudHsmClusterName: string,
  jobId: string,
  options: GetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{subscriptionId}/{resourceGroupName}/{cloudHsmClusterName}/{jobId}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      cloudHsmClusterName: cloudHsmClusterName,
      jobId: jobId,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<BackupResult> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return backupResultDeserializer(result.body);
}

export async function get(
  context: Client,
  resourceGroupName: string,
  cloudHsmClusterName: string,
  jobId: string,
  options: GetOptionalParams = { requestOptions: {} },
): Promise<BackupResult | null> {
  const result = await _getSend(
    context,
    resourceGroupName,
    cloudHsmClusterName,
    jobId,
    options,
  );
  return _getDeserialize(result);
}
```
