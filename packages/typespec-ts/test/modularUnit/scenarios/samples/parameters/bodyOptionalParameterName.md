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

## Example

Raw json files.

```json
{
  "operationId": "CloudHsmClusters_Backup",
  "parameters": {
    "api-version": "2025-03-31",
    "body": {
      "azureStorageBlobContainerUri": "https://myaccount.blob.core.windows.net/sascontainer/sasContainer",
      "token": "se=2018-02-01T00%3A00Z&spr=https&sv=2017-04-17&sr=b&sig=REDACTED"
    },
    "cloudHsmClusterName": "chsm1",
    "resourceGroupName": "rgcloudhsm",
    "subscriptionId": "00000000-0000-0000-0000-000000000000"
  },
  "title": "CloudHsmClusters_Backup",
  "responses": {}
}
```

## Provide generated operation options

Generated operation options.

```ts models:withOptions

```

## Provide generated operations to call rest-level methods

## Operations

Should generate operations correctly:

```ts operations
```

## Samples

Generate optional body in option parameter:

```ts samples
```
