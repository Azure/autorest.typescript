# ARM metadata filter should not strip @path properties from parameter bag models with no ARM base class

In ARM mode, the metadata filter should only strip properties that have exclusively
`Lifecycle.Read` visibility (i.e. truly read-only ARM properties like `id`, `name`, `type`).
It must NOT strip `@path`-decorated properties on plain parameter bag models that have no ARM
base class, because those properties carry multiple visibility flags (Read + Create + Update…)
and must remain accessible in the generated interface so users can set them.

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

/** Parameters for the private link resource. */
model PrivateLinkParameters {
  /** The name of the private link resource. */
  @path
  privateLinkName: string;
}

#suppress "@azure-tools/typespec-azure-resource-manager/arm-resource-operation" "test"
#suppress "@azure-tools/typespec-azure-core/documentation-required" "test"
op getPrivateLink(
  ...ApiVersionParameter,
  ...SubscriptionIdParameter,
  ...ResourceGroupParameter,
  params?: PrivateLinkParameters,
): ArmResponse<{}> | ErrorResponse;
```

```yaml
needTCGC: true
withRawContent: true
mustEmptyDiagnostic: false
```

## Models interface PrivateLinkParameters

```ts models interface PrivateLinkParameters
/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** Parameters for the private link resource. */
export interface PrivateLinkParameters {
  /** The name of the private link resource. */
  privateLinkName: string;
}
```

# ARM metadata filter should preserve @path property with Read & Create visibility

In ARM mode, a `@path` property that carries both `Lifecycle.Read` AND `Lifecycle.Create`
visibility flags must NOT be stripped by the metadata filter, because the filter only removes
properties that are *exclusively* read-only (i.e. `visibility.length === 1 && Read`).

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

model ParamBagReadCreate {
  @path
  @visibility(Lifecycle.Read, Lifecycle.Create)
  resourceName: string;
}

#suppress "@azure-tools/typespec-azure-resource-manager/arm-resource-operation" "test"
#suppress "@azure-tools/typespec-azure-core/documentation-required" "test"
op getResource(params?: ParamBagReadCreate): ArmResponse<{}> | ErrorResponse;
```

```yaml
needTCGC: true
withRawContent: true
mustEmptyDiagnostic: false
```

## Models interface ParamBagReadCreate

```ts models interface ParamBagReadCreate
/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface ParamBagReadCreate */
export interface ParamBagReadCreate {
  resourceName: string;
}
```

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

model ParamBagReadOnly {
  @path
  @visibility(Lifecycle.Read)
  resourceName: string;
}

#suppress "@azure-tools/typespec-azure-resource-manager/arm-resource-operation" "test"
#suppress "@azure-tools/typespec-azure-core/documentation-required" "test"
op getResource(params?: ParamBagReadOnly): ArmResponse<{}> | ErrorResponse;
```

```yaml
needTCGC: true
withRawContent: true
mustEmptyDiagnostic: false
```

## Models interface ParamBagReadOnly

```ts models interface ParamBagReadOnly
/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface ParamBagReadOnly */
export interface ParamBagReadOnly {}
```

# ARM metadata filter should preserve @path property with Read & Update & Create visibility

In ARM mode, a `@path` property that carries `Lifecycle.Read`, `Lifecycle.Update`, AND
`Lifecycle.Create` visibility flags must NOT be stripped. Only properties that are
*exclusively* read-only (`visibility.length === 1 && Read`) are filtered out.

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

model ParamBagReadUpdateCreate {
  @path
  @visibility(Lifecycle.Read, Lifecycle.Update, Lifecycle.Create)
  resourceName: string;
}

#suppress "@azure-tools/typespec-azure-resource-manager/arm-resource-operation" "test"
#suppress "@azure-tools/typespec-azure-core/documentation-required" "test"
op getResource(params?: ParamBagReadUpdateCreate): ArmResponse<{}> | ErrorResponse;
```

```yaml
needTCGC: true
withRawContent: true
mustEmptyDiagnostic: false
```

## Models interface ParamBagReadUpdateCreate

```ts models interface ParamBagReadUpdateCreate
/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface ParamBagReadUpdateCreate */
export interface ParamBagReadUpdateCreate {
  resourceName: string;
}
```
