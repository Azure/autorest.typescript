# Should generate samples for different parameter name

Sample generation should handle different parameter names in body.

## TypeSpec

```tsp

import "@azure-tools/typespec-client-generator-core";

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
using Azure.ClientGenerator.Core;

/** Microsoft.Contoso Resource Provider management API. */
@armProviderNamespace
@service(#{
  title: "Microsoft.Contoso management service",
})
@versioned(Microsoft.Contoso.Versions)
namespace Microsoft.Contoso;

/** The available API versions. */
enum Versions {
  /** 2021-10-01-preview version */
  @armCommonTypesVersion(Azure.ResourceManager.CommonTypes.Versions.v5)
  v2021_10_01_preview: "2021-10-01-preview",
}

interface Operations extends Azure.ResourceManager.Operations {}

/** Employee resource */
model Employee is TrackedResource<EmployeeProperties> {
  ...ResourceNameParameter<Employee>;
}

/** Employee properties */
model EmployeeProperties {
  /** Age of employee */
  age?: int32;

  /** City of employee */
  city?: string;

  /** Profile of employee */
  @encode("base64url")
  profile?: bytes;

  /** The status of the last operation. */
  @visibility(Lifecycle.Read)
  provisioningState?: ProvisioningState;
}

/** The resource provisioning state. */
@lroStatus
union ProvisioningState {
  ResourceProvisioningState,

  /** The resource is being provisioned */
  Provisioning: "Provisioning",

  /** The resource is updating */
  Updating: "Updating",

  /** The resource is being deleted */
  Deleting: "Deleting",

  /** The resource create request has been accepted */
  Accepted: "Accepted",

  string,
}

@armResourceOperations
interface Employees {
  createOrUpdate is ArmResourceCreateOrReplaceAsync<Employee>;
}
@@clientName(Employees.createOrUpdate::parameters.resource, "foo");
```

## Provide examples and generated samples

Raw json files.

```json for Employees_CreateOrUpdate
{
  "title": "Employees_CreateOrUpdate",
  "operationId": "Employees_CreateOrUpdate",
  "parameters": {
    "api-version": "2021-10-01-preview",
    "subscriptionId": "11809CA1-E126-4017-945E-AA795CD5C5A9",
    "resourceGroupName": "rgopenapi",
    "employeeName": "9KF-f-8b",
    "resource": {
      "properties": {
        "age": 30,
        "city": "gydhnntudughbmxlkyzrskcdkotrxn",
        "profile": "ms"
      },
      "tags": {
        "key2913": "urperxmkkhhkp"
      },
      "location": "itajgxyqozseoygnl"
    }
  },
  "responses": {
    "200": {}
  }
}
```

Generated samples.

```ts samples
/** This file path is /samples-dev/createOrUpdateSample.ts */
import { ContosoClient } from "@azure/internal-test";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create a Employee
 *
 * @summary create a Employee
 * x-ms-original-file: 2021-10-01-preview/json_for_Employees_CreateOrUpdate.json
 */
async function employeesCreateOrUpdate(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "11809CA1-E126-4017-945E-AA795CD5C5A9";
  const client = new ContosoClient(credential, subscriptionId);
  const result = await client.createOrUpdate("rgopenapi", "9KF-f-8b", {
    properties: {
      age: 30,
      city: "gydhnntudughbmxlkyzrskcdkotrxn",
      profile: Buffer.from("ms", "base64url"),
    },
    tags: { key2913: "urperxmkkhhkp" },
    location: "itajgxyqozseoygnl",
  });
  console.log(result);
}

async function main(): Promise<void> {
  await employeesCreateOrUpdate();
}

main().catch(console.error);
```

Raw json files.

```json for Employees_CreateOrUpdate
{
  "title": "Employees_CreateOrUpdate",
  "operationId": "Employees_CreateOrUpdate",
  "parameters": {
    "api-version": "2021-10-01-preview",
    "subscriptionId": "11809CA1-E126-4017-945E-AA795CD5C5A9",
    "resourceGroupName": "rgopenapi",
    "employeeName": "9KF-f-8b",
    "foo": {
      "properties": {
        "age": 30,
        "city": "gydhnntudughbmxlkyzrskcdkotrxn",
        "profile": "ms"
      },
      "tags": {
        "key2913": "urperxmkkhhkp"
      },
      "location": "itajgxyqozseoygnl"
    }
  },
  "responses": {
    "200": {}
  }
}
```

Generated samples.

```ts samples
/** This file path is /samples-dev/createOrUpdateSample.ts */
import { ContosoClient } from "@azure/internal-test";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create a Employee
 *
 * @summary create a Employee
 * x-ms-original-file: 2021-10-01-preview/json_for_Employees_CreateOrUpdate.json
 */
async function employeesCreateOrUpdate(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "11809CA1-E126-4017-945E-AA795CD5C5A9";
  const client = new ContosoClient(credential, subscriptionId);
  const result = await client.createOrUpdate("rgopenapi", "9KF-f-8b", {
    properties: {
      age: 30,
      city: "gydhnntudughbmxlkyzrskcdkotrxn",
      profile: Buffer.from("ms", "base64url"),
    },
    tags: { key2913: "urperxmkkhhkp" },
    location: "itajgxyqozseoygnl",
  });
  console.log(result);
}

async function main(): Promise<void> {
  await employeesCreateOrUpdate();
}

main().catch(console.error);
```

# The parameter names in the sample should be consistent with those in the function signature

## TypeSpec

```tsp
model DocumentBase {
  documentType: string;
  Properties?: string[];
}

@route("/documents")
interface Documents {
  @post
  publish(@body endpoint: DocumentBase): void;
}

```

Should ignore the warning `@azure-tools/typespec-ts/property-name-normalized`:

```yaml
mustEmptyDiagnostic: false
```

## Example

```json
{
  "title": "Publish Documents",
  "operationId": "Documents_publish",
  "parameters": {
    "endpoint": {
      "documentType": "Exception",
      "Properties": ["stream-1", "stream-2"]
    }
  }
}
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { DocumentBase, documentBaseSerializer } from "../models/models.js";
import { PublishOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _publishSend(
  context: Client,
  endpointParam: DocumentBase,
  options: PublishOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/documents")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      body: documentBaseSerializer(endpointParam),
    });
}

export async function _publishDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function publish(
  context: Client,
  endpointParam: DocumentBase,
  options: PublishOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _publishSend(context, endpointParam, options);
  return _publishDeserialize(result);
}
```

## Samples

```ts samples
/** This file path is /samples-dev/publishSample.ts */
import { TestingClient } from "@azure/internal-test";

/**
 * This sample demonstrates how to execute publish
 *
 * @summary execute publish
 * x-ms-original-file: 2021-10-01-preview/json.json
 */
async function publishDocuments(): Promise<void> {
  const endpoint = process.env.TESTING_ENDPOINT || "";
  const client = new TestingClient(endpoint);
  await client.publish({ documentType: "Exception", properties: ["stream-1", "stream-2"] });
}

async function main(): Promise<void> {
  await publishDocuments();
}

main().catch(console.error);
```