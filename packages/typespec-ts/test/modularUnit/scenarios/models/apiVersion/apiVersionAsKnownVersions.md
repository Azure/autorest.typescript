# Should generate KnownVersions if service is controlled by `@versioned`

Should generate KnownVersions if service is controlled by `@versioned`.

## TypeSpec

This is tsp definition.

```tsp
import "@typespec/versioning";

using TypeSpec.Versioning;

@service({
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
/** The available API versions. */
export enum KnownVersions {
  /** 2021-10-01-preview version */
  v2021_10_01_preview = "2021-10-01-preview",
}
```
