# Should generate KnownVersions if service is controlled by `@versioned`

Should generate KnownVersions if service is controlled by `@versioned`.

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
  /** 2021-10-01-preview version */
  v2021_10_01_preview: "2021-10-01-preview",
}

op foo(): void;
```

The config would be like:

```yaml
withRawContent: true
```

## Models

Should generate KnownVersions in models.ts.

```ts models
/**
 * This file contains only generated model types and (de)serializers.
 * Disable this rule for deserializer functions which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** The available API versions. */
export enum KnownVersions {
  /** 2021-10-01-preview version */
  V20211001Preview = "2021-10-01-preview",
}
```
