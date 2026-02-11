# Should generate samples with client-level subscriptionId in the client

If all operations (except Operations_List, etc.) require the client-level subscriptionId parameter, the client should be created with the subscriptionId.

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

## Examples and generated samples

Raw json file for the operation with client-level subscriptionId.

```json for Employees_CreateOrUpdate
{
  "title": "Employees_CreateOrUpdate",
  "operationId": "Employees_CreateOrUpdate",
  "parameters": {
    "subscriptionId": "11809CA1-E126-4017-945E-AA795CD5C5A9",
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

Generated sample should add subscriptionId as a client parameter:

```ts samples
```

Raw json file for the operations list.

```json for Operations_List
{
  "title": "Operations_List",
  "operationId": "Operations_List",
  "parameters": {
    "api-version": "2021-10-01-preview"
  },
  "responses": {
    "200": {
      "body": {
        "value": []
      }
    }
  }
}
```

Generated sample should create a client with subscriptionId:

```ts samples
```

# Should create clients without subscriptionId if the subscriptionId of operations are all method-level

If the subscriptionId parameters of the ARM operations are all method-level, the client should be created without subscriptionId

## TypeSpec

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

```

## Examples and generated samples

Raw json file for the operation with method-level subscriptionId.

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

Generated sample should add subscriptionId as a method-level parameter:

```ts samples
```

Raw json file for the operations list.

```json for Operations_List
{
  "title": "Operations_List",
  "operationId": "Operations_List",
  "parameters": {
    "api-version": "2021-10-01-preview"
  },
  "responses": {
    "200": {
      "body": {
        "value": []
      }
    }
  }
}
```

Generated sample should create a client without subscriptionId:

```ts samples
```

# Should create clients w/wo subscriptionId based on operation types

If an operation is tenant-level or requires a method-level subscriptionId parameter (operation-level, not client-level), the client should not be created with subscriptionId.
If an operation requires a client-level subscriptionId parameter, the client should be created with subscriptionId.

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
  get is ArmResourceRead<Employee>;
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

## Examples and generated samples

Raw json file for the operation with client-level subscriptionId.

```json for Employees_Get
{
  "title": "Employees_Get",
  "operationId": "Employees_Get",
  "parameters": {
    "api-version": "2021-10-01-preview",
    "subscriptionId": "11809CA1-E126-4017-945E-AA795CD5C5A9",
    "resourceGroupName": "rgopenapi",
    "employeeName": "9KF-f-8b"
  },
  "responses": {
    "200": {}
  }
}
```

Generated sample should create a client with subscriptionId:

```ts samples
```

Raw json file for the operation with method-level subscriptionId.

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

Generated sample should use subscriptionId as a method parameter:

```ts samples
```

Raw json file for the tenant-level operation.

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

Generate sample should create a client without subscriptionId:

```ts samples
```

Raw json file for the operations list.

```json for Operations_List
{
  "title": "Operations_List",
  "operationId": "Operations_List",
  "parameters": {
    "api-version": "2021-10-01-preview"
  },
  "responses": {
    "200": {
      "body": {
        "value": []
      }
    }
  }
}
```

Generated sample should create a client with subscriptionId:

```ts samples
```
