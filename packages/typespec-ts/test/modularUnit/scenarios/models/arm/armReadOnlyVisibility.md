# ARM metadata filter should strip @path property with exclusively Read visibility

In ARM mode, a `@path` property that has *only* `Lifecycle.Read` visibility should be
stripped by the metadata filter. Such a property is purely decorative/read-only metadata
(e.g. an ARM resource system-assigned `id`) and must not appear in the model interface.

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

@armProviderNamespace
@service(#{
  title: "Test ARM Service",
})
@versioned(Versions)
namespace Microsoft.Test;

enum Versions {
  @armCommonTypesVersion(Azure.ResourceManager.CommonTypes.Versions.v5)
  v2021_10_01: "2021-10-01",
}

model ParamBag {
  @path
  @visibility(Lifecycle.Read)
  resourceName: string;
}

#suppress "@azure-tools/typespec-azure-resource-manager/arm-resource-operation" "test"
#suppress "@azure-tools/typespec-azure-core/documentation-required" "test"
op getResource(params?: ParamBag): ArmResponse<{}> | ErrorResponse;
```

```yaml
needTCGC: true
withRawContent: true
mustEmptyDiagnostic: false
```

## Models interface ParamBag

```ts models interface ParamBag
/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface ParamBag */
export interface ParamBag {}
```
