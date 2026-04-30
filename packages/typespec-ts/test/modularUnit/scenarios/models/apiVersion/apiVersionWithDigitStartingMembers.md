# Should use "V" prefix for digit-starting members in api-version enums

Should generate KnownVersions with "V" prefix for digit-starting member names.

## TypeSpec

This is tsp definition.

```tsp
import "@typespec/versioning";

using TypeSpec.Versioning;

@service(#{
  title: "Microsoft.Contoso management service",
})
@versioned(Microsoft.Contoso.Versions)
namespace Microsoft.Contoso;

/** The available API versions. */
enum Versions {
  /** 2025-01-01 version */
  `2025-01-01`: "2025-01-01",
}

op foo(): void;
```

The config would be like:

```yaml
withRawContent: true
```

## Models

Should generate KnownVersions with "V" prefix for digit-starting member name.

```ts models
/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** The available API versions. */
export enum KnownVersions {
  /** 2025-01-01 version */
  V20250101 = "2025-01-01",
}
```
