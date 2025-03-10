# Should generate samples for ARM operations

Sample generation should arm template and operations successfully.

## TypeSpec

This is tsp definition.

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
  @useDependency(Azure.ResourceManager.Versions.v1_0_Preview_1)
  @useDependency(Azure.Core.Versions.v1_0_Preview_2)
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
  get is ArmResourceRead<Employee>;
  createOrUpdate is ArmResourceCreateOrReplaceAsync<Employee>;
  delete is ArmResourceDeleteWithoutOkAsync<Employee>;
}
```

This is the tspconfig.yaml.

```yaml
hierarchy-client: false
enable-operation-group: true
```

## Example

Raw json files.

```json for Operations_List
{
  "title": "Operations_List",
  "operationId": "Operations_List",
  "parameters": {
    "api-version": "2021-10-01-preview"
  },
  "responses": {
    "200": {
      "body": {}
    }
  }
}
```

Generate samples for arm cases:

```ts samples
/** This file path is /samples-dev/operationsListSample.ts */
import { ContosoClient } from "@azure/internal-test";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list the operations for the provider
 *
 * @summary list the operations for the provider
 * x-ms-original-file: 2021-10-01-preview/json_for_Operations_List.json
 */
async function operationsList(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new ContosoClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.operations.list()) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await operationsList();
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

Generate samples for arm cases:

```ts samples
/** This file path is /samples-dev/employeesCreateOrUpdateSample.ts */
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
  const result = await client.employees.createOrUpdate(
    "rgopenapi",
    "9KF-f-8b",
    {
      properties: {
        age: 30,
        city: "gydhnntudughbmxlkyzrskcdkotrxn",
        profile: "ms"
      },
      tags: { key2913: "urperxmkkhhkp" },
      location: "itajgxyqozseoygnl"
    }
  );
  console.log(result);
}

async function main(): Promise<void> {
  await employeesCreateOrUpdate();
}

main().catch(console.error);
```

Raw json files.

```json for Employees_Delete
{
  "title": "Employees_Delete",
  "operationId": "Employees_Delete",
  "parameters": {
    "api-version": "2021-10-01-preview",
    "subscriptionId": "11809CA1-E126-4017-945E-AA795CD5C5A9",
    "resourceGroupName": "rgopenapi",
    "employeeName": "5vX--BxSu3ux48rI4O9OQ569"
  },
  "responses": {
    "202": {}
  }
}
```

Generate samples for arm cases:

```ts samples
/** This file path is /samples-dev/employeesDeleteSample.ts */
import { ContosoClient } from "@azure/internal-test";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to delete a Employee
 *
 * @summary delete a Employee
 * x-ms-original-file: 2021-10-01-preview/json_for_Employees_Delete.json
 */
async function employeesDelete(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "11809CA1-E126-4017-945E-AA795CD5C5A9";
  const client = new ContosoClient(credential, subscriptionId);
  await client.employees.delete("rgopenapi", "5vX--BxSu3ux48rI4O9OQ569");
}

async function main(): Promise<void> {
  await employeesDelete();
}

main().catch(console.error);
```
