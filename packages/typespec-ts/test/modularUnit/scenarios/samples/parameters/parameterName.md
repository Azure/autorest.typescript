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
      profile: "ms",
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
      profile: "ms",
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
