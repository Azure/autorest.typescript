# only: Should generate optional body in option parameter

Should generate optional body in option parameter.

## TypeSpec

This is tsp definition.

```tsp

import "@typespec/http";
import "@typespec/rest";
import "@typespec/versioning";
import "@azure-tools/typespec-azure-core";
import "@azure-tools/typespec-azure-resource-manager";
import "@azure-tools/typespec-client-generator-core";

using TypeSpec.Http;
using TypeSpec.Rest;
using TypeSpec.Versioning;
using Azure.Core;
using Azure.ResourceManager;
using Azure.ClientGenerator.Core;

@armProviderNamespace
@service(#{ title: "HardwareSecurityModules" })
@versioned(Versions)
@armCommonTypesVersion(Azure.ResourceManager.CommonTypes.Versions.v6)
namespace Microsoft.HardwareSecurityModules;

enum Versions {
  @useDependency(Azure.ResourceManager.Versions.v1_0_Preview_1)
  @useDependency(Azure.Core.Versions.v1_0_Preview_1)
  v2025_03_31: "2025-03-31",
}

model CloudHsmClusterProperties {
  statusMessage?: string;
}

model CloudHsmCluster
  is Azure.ResourceManager.TrackedResource<CloudHsmClusterProperties> {
  ...ResourceNameParameter<
    Resource = CloudHsmCluster,
    KeyName = "cloudHsmClusterName",
    SegmentName = "cloudHsmClusters",
    NamePattern = "^[a-zA-Z0-9-]{3,23}$"
  >;

  identity?: Azure.ResourceManager.CommonTypes.ManagedServiceIdentity;
}

model BackupRequestProperties extends BackupRestoreRequestBaseProperties {}

model BackupRestoreRequestBaseProperties {

  azureStorageBlobContainerUri: url;

  @secret
  token?: string;
}

model BackupResult {
  properties?: BackupResultProperties;
}

model BackupResultProperties {

  azureStorageBlobContainerUri?: url;

  backupId?: string;
}

@armResourceOperations
interface CloudHsmClusters {
  backup is ArmResourceActionAsync<
    CloudHsmCluster,
    BackupRequestProperties,
    ArmResponse<BackupResult> & Azure.Core.RequestIdResponseHeader,
    LroHeaders = ArmAsyncOperationHeader<FinalResult = BackupResult> &
      ArmLroLocationHeader &
      Azure.Core.Foundations.RetryAfterHeader &
      Azure.Core.RequestIdResponseHeader,
    OptionalRequestBody = true
  >;
}
@@clientName(CloudHsmClusters.backup::parameters.body,
  "backupRequestProperties"
);
```

The config would be like:

```yaml
withRawContent: true
```

## Example

Raw json files.

```json for CloudHsmClusters_backup
{
  "title": "CloudHsmClusters_backup",
  "operationId": "CloudHsmClusters_backup",
  "parameters": {
    "api-version": "2025-03-31",
    "body": {
      "azureStorageBlobContainerUri": "sss",
      "token": "aaa"
    },
    "cloudHsmClusterName": "chsm1",
    "resourceGroupName": "rgcloudhsm",
    "subscriptionId": "00000000-0000-0000-0000-000000000000"
  },
  "responses": {}
}
```

## Provide generated operation options

Generated operation options.

```ts models:withOptions
import { BackupRequestProperties } from "../models/models.js";
import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface BackupOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** The content of the action request */
  backupRequestProperties?: BackupRequestProperties;
}
```

## Provide generated operations to call rest-level methods

## Operations

Should generate operations correctly:

```ts operations
import { HardwareSecurityModulesContext as Client } from "./index.js";
import {
  backupRequestPropertiesSerializer,
  BackupResult,
  backupResultDeserializer,
  errorResponseDeserializer,
} from "../models/models.js";
import { BackupOptionalParams } from "./options.js";
import { getLongRunningPoller } from "../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _backupSend(
  context: Client,
  resourceGroupName: string,
  cloudHsmClusterName: string,
  options: BackupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/cloudHsmClusters/{cloudHsmClusterName}/backup{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      cloudHsmClusterName: cloudHsmClusterName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: !options["backupRequestProperties"]
        ? options["backupRequestProperties"]
        : backupRequestPropertiesSerializer(options["backupRequestProperties"]),
    });
}

export async function _backupDeserialize(
  result: PathUncheckedResponse,
): Promise<BackupResult> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return backupResultDeserializer(result.body);
}

/** A long-running resource action. */
export function backup(
  context: Client,
  resourceGroupName: string,
  cloudHsmClusterName: string,
  options: BackupOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<BackupResult>, BackupResult> {
  return getLongRunningPoller(context, _backupDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _backupSend(context, resourceGroupName, cloudHsmClusterName, options),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<BackupResult>, BackupResult>;
}
```

## Samples

Generate optional body in option parameter:

```ts samples
```
