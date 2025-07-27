# Should generate tests for optional body parameter

Test generation should create tests for operations with optional body parameters, verifying the parameter is correctly handled when present or absent.

This test references the TypeSpec and examples from samples/parameters/bodyOptionalParameterName.md to validate that test generation handles optional body parameters correctly.

## TypeSpec

This is tsp definition from samples/parameters/bodyOptionalParameterName.md.

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
  v2021_10_01_preview: "2021-10-01-preview",
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

## Example and generated tests

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
  "responses": {
    "202": {
      "body": {
        "properties": {
          "azureStorageBlobContainerUri": "sss",
          "backupId": "backup123"
        }
      }
    }
  }
}
```

```ts tests backupTest.spec.ts
import { Recorder } from "@azure-tools/test-recorder";
import { createRecorder } from "../public/utils/recordedClient.js";
import { assert } from "chai";
import { Context } from "mocha";
import { HardwareSecurityModulesClient } from "@azure/internal-test";
import { DefaultAzureCredential } from "@azure/identity";

describe("backup a CloudHsmCluster", () => {
  let recorder: Recorder;

  beforeEach(async function (this: Context) {
    recorder = await createRecorder(this);
  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("should backup a CloudHsmCluster for cloudHsmClustersBackup", async function () {
    const credential = new DefaultAzureCredential();
    const subscriptionId = "00000000-0000-0000-0000-000000000000";
    const client = new HardwareSecurityModulesClient(credential, subscriptionId);
    const poller = await client.backup("rgcloudhsm", "chsm1", {
      backupRequestProperties: {
        azureStorageBlobContainerUri: "sss",
        token: "aaa",
      },
    });
    const result = await poller.pollUntilDone();
    assert.ok(result);
    assert.ok(result.properties);
    assert.strictEqual(result.properties.azureStorageBlobContainerUri, "sss");
    assert.strictEqual(result.properties.backupId, "backup123");
  });
});
