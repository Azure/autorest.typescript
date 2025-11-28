# Should generate samples with client-level subscriptionId in the client

When an ARM operation requires a client-level subscriptionId (standard subscription-scoped resource operations), it should be added as a client parameter in samples.

## TypeSpec

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

```

## Example

Raw json files for operation without subscriptionId in example.

```json for Widgets_List
{
  "title": "Employees_CreateOrUpdate",
  "operationId": "Employees_CreateOrUpdate",
  "parameters": {
    "api-version": "2021-10-01-preview",
    "resourceGroupName": "rgopenapi",
    "employeeName": "9KF-f-8b",
    "resource": {
      "properties": {
        "age": 30
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

## Samples

Generate samples should add subscriptionId as client parameter:

```ts samples
/** This file path is /samples-dev/createOrUpdateSample.ts */
import { ContosoClient } from "@azure/internal-test";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create a Employee
 *
 * @summary create a Employee
 * x-ms-original-file: 2021-10-01-preview/json_for_Widgets_List.json
 */
async function employeesCreateOrUpdate(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new ContosoClient(credential, subscriptionId);
  const result = await client.createOrUpdate("rgopenapi", "9KF-f-8b", {
    properties: { age: 30 },
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

# Should create clients without subscriptionId for tenant-level operations or operations with method-level subscriptionId parameter

When an operation is tenant-level or requires a method-level subscriptionId parameter (operation-level, not client-level), the client should not be created with subscriptionId.

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
  /** The status of the last operation. */
  @visibility(Lifecycle.Read)
  provisioningState?: ProvisioningState;
}

model EmployeeBaseParameter
    is Azure.ResourceManager.Foundations.DefaultBaseParameters<Employee>;

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
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
    Employee,
    BaseParameters = EmployeeBaseParameter
  >;
}
@@clientLocation(EmployeeBaseParameter.subscriptionId, Employees.createOrUpdate);

interface SkusOperations {
  @route("/providers/Microsoft.Contoso/skus")
  @get
  listSkus(@query category: string): SkuListResult;
}

model SkuListResult {
  value: Sku[];
}

model Sku {
  name: string;
  tier?: string;
  capacity?: int32;
}
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
        "age": 30
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

Generate samples should use subscriptionId as method parameter, NOT client parameter:

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
  const client = new ContosoClient(credential);
  const result = await client.createOrUpdate(
    "11809CA1-E126-4017-945E-AA795CD5C5A9",
    "rgopenapi",
    "9KF-f-8b",
    { properties: { age: 30 }, tags: { key2913: "urperxmkkhhkp" }, location: "itajgxyqozseoygnl" },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await employeesCreateOrUpdate();
}

main().catch(console.error);
```

```json for SkusOperations_ListSkus
{
  "title": "SkusOperations_ListSkus",
  "operationId": "SkusOperations_ListSkus",
  "parameters": {
    "category": "Standard"
  },
  "responses": {
    "200": {
      "body": {
        "value": [
          {
            "name": "Standard_D2s_v3",
            "tier": "Standard",
            "capacity": 2
          }
        ]
      }
    }
  }
}
```

Generate samples should not create clients with subscriptionId:

```ts samples
/** This file path is /samples-dev/listSkusSample.ts */
import { ContosoClient } from "@azure/internal-test";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to execute listSkus
 *
 * @summary execute listSkus
 * x-ms-original-file: 2021-10-01-preview/json_for_SkusOperations_ListSkus.json
 */
async function skusOperationsListSkus(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const client = new ContosoClient(credential);
  const result = await client.listSkus("Standard");
  console.log(result);
}

async function main(): Promise<void> {
  await skusOperationsListSkus();
}

main().catch(console.error);
```
