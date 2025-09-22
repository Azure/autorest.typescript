# Should handle client constructor argument mismatch

Tests that client constructor generates correct parameter expectations when using server template parameters.

## TypeSpec

```tsp
import "@typespec/http";
import "@typespec/rest";
import "@azure-tools/typespec-azure-core";

using TypeSpec.Http;
using TypeSpec.Rest;
using Azure.Core;

@useAuth(
  OAuth2Auth<[
    {
      type: OAuth2FlowType.implicit,
      authorizationUrl: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize",
      scopes: ["https://ml.azure.com/.default"],
    }
  ]>
)
@service(#{ title: "Machine Learning Services" })
@server(
  "{endpoint}/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}",
  "ML Services API",
  {
    endpoint: url,
    subscriptionId: string,
    resourceGroupName: string,
    workspaceName: string,
  }
)
namespace MachineLearningServices;

@route("/indexes")
interface Indexes {
  @route("/{name}/versions/{version}")
  @put
  createOrUpdate(
    @path name: string,
    @path version: string,
  ): void;
}
```

The config would be like:

```yaml
needTCGC: true
needAzureCore: true
withRawContent: true
```

## Client Constructor

The client constructor should expect all server template parameters:

```ts classicClient
import { createOrUpdate } from "./api/operations.js";
import { CreateOrUpdateOptionalParams } from "./api/options.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { MachineLearningServicesClientOptionalParams } from "./api/machineLearningServicesContext.js";

export class MachineLearningServicesClient {
  private _client: MachineLearningServicesContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    subscriptionId: string,
    resourceGroupName: string,
    workspaceName: string,
    credential: TokenCredential,
    options: MachineLearningServicesClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createMachineLearningServices(
      endpointParam,
      subscriptionId,
      resourceGroupName,
      workspaceName,
      credential,
      { ...options, userAgentOptions: { userAgentPrefix } },
    );
    this.pipeline = this._client.pipeline;
  }

  createOrUpdate(
    name: string,
    version: string,
    options: CreateOrUpdateOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return createOrUpdate(this._client, name, version, options);
  }
}
```

## Example

Raw json files for testing client constructor arguments.

```json for Indexes_CreateOrUpdate
{
  "title": "Indexes_CreateOrUpdate",
  "operationId": "Indexes_CreateOrUpdate",
  "parameters": {
    "name": "test-index",
    "version": "1",
    "body": {
      "stage": "Production",
      "description": "Test index for validation",
      "properties": {
        "indexType": "vector"
      }
    }
  },
  "responses": {
    "200": {
      "body": {
        "stage": "Production",
        "description": "Test index for validation",
        "properties": {
          "indexType": "vector"
        }
      }
    }
  }
}
```

## Samples

```ts samples
/** This file path is /samples-dev/createOrUpdateSample.ts */
import { MachineLearningServicesClient } from "@azure/internal-test";
import * as dotenv from "dotenv";
import { DefaultAzureCredential } from "@azure/identity";

dotenv.config();

/**
 * This sample demonstrates how to execute createOrUpdate
 *
 * @summary execute createOrUpdate
 * x-ms-original-file: 2021-10-01-preview/json_for_Indexes_CreateOrUpdate.json
 */
async function indexesCreateOrUpdate(): Promise<void> {
  const endpoint = process.env.ENDPOINT || "";
  const subscriptionId = process.env.SUBSCRIPTION_ID || "";
  const resourceGroupName = process.env.RESOURCE_GROUP || "";
  const workspaceName = process.env.WORKSPACE_NAME || "";
  const credential = new DefaultAzureCredential();
  const client = new MachineLearningServicesClient(
    endpoint,
    subscriptionId,
    resourceGroupName,
    workspaceName,
    credential,
  );
  await client.createOrUpdate("test-index", "1");
}

async function main(): Promise<void> {
  await indexesCreateOrUpdate();
}

main().catch(console.error);
```
