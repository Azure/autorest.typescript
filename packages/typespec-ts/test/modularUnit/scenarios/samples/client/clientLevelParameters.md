# Should generate samples with client-level parameters

Should generate samples that include all client-level parameters in the client constructor.

## TypeSpec

This is tsp definition.

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

/** Microsoft.TestService Resource Provider management API. */
@armProviderNamespace
@service(#{
  title: "Microsoft.TestService management service",
})
@versioned(Microsoft.TestService.Versions)
namespace Microsoft.TestService;

/** The available API versions. */
enum Versions {
  /** 2024-04-01-preview version */
  @useDependency(Azure.ResourceManager.Versions.v1_0_Preview_1)
  @useDependency(Azure.Core.Versions.v1_0_Preview_2)
  @armCommonTypesVersion(Azure.ResourceManager.CommonTypes.Versions.v5)
  v2024_04_01_preview: "2024-04-01-preview",
}

interface Operations extends Azure.ResourceManager.Operations {}

/** TestResource resource */
model TestResource is TrackedResource<TestResourceProperties> {
  ...ResourceNameParameter<TestResource>;
}

/** TestResource properties */
model TestResourceProperties {
  /** Description of the test resource */
  description?: string;

  /** The status of the last operation. */
  @visibility(Lifecycle.Read)
  provisioningState?: ProvisioningState;
}

/** The resource provisioning state. */
@lroStatus
union ProvisioningState {
  ResourceProvisioningState,
  string,
}

@armResourceOperations
interface TestResources {
  get is ArmResourceRead<TestResource>;
  createOrUpdate is ArmResourceCreateOrReplaceAsync<TestResource>;
  listByResourceGroup is ArmResourceListByParent<TestResource>;
}
```

This is the tspconfig.yaml.

```yaml
options:
  "@azure-tools/typespec-ts":
    flavor: azure
    generate-sample: true
    is-modular-library: true
```

## Example

Raw json files.

```json for TestResources_Get
{
  "title": "TestResources_Get",
  "operationId": "TestResources_Get",
  "parameters": {
    "subscriptionId": "12345678-1234-1234-1234-123456789012",
    "resourceGroupName": "test-rg",
    "testResourceName": "test-resource",
    "api-version": "2024-04-01-preview"
  },
  "responses": {
    "200": {
      "body": {
        "name": "test-resource",
        "properties": {
          "description": "Test resource description"
        }
      }
    }
  }
}
```

## Samples

Generate samples with all client-level parameters:

```ts samples
```