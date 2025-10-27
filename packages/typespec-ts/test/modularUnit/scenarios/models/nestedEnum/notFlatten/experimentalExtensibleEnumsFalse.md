# Should not flatten extensible enum if disabling `experimental-extensible-enums`

Sample generation should arm template and operations successfully.

## TypeSpec

This is tsp definition.

```tsp
import "@typespec/versioning";
import "@azure-tools/typespec-azure-resource-manager";

using TypeSpec.Versioning;
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

/** The resource provisioning state. */
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

op foo(
  body: {
    status: ProvisioningState;
  },
): void;
```

Should enable `flatten-union-as-enum` option:

```yaml
withRawContent: true
experimental-extensible-enums: false
```

## Models

Model generated.

```ts models
/** model interface _FooRequestBody */
export interface _FooRequestBody {
  status: ProvisioningState;
}

export function _fooRequestBodySerializer(item: _FooRequestBody): any {
  return { status: provisioningStateSerializer(item["status"]) };
}

/** The resource provisioning state. */
export type ProvisioningState =
  | ResourceProvisioningState
  | "Provisioning"
  | "Updating"
  | "Deleting"
  | "Accepted"
  | string;

export function provisioningStateSerializer(item: ProvisioningState): any {
  return item;
}

/** The provisioning state of a resource type. */
export type ResourceProvisioningState = "Succeeded" | "Failed" | "Canceled";

/** The available API versions. */
export enum KnownVersions {
  /** 2021-10-01-preview version */
  V20211001Preview = "2021-10-01-preview",
}
```
