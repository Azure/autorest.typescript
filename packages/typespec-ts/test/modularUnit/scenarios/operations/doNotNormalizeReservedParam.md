# Should keep optional query param name when $DO_NOT_NORMALIZE$ is applied to a reserved keyword

## Typespec

```tsp
import "@typespec/http";
import "@azure-tools/typespec-client-generator-core";

using TypeSpec.Http;
using Azure.ClientGenerator.Core;

@service
namespace Test;

interface Test {
  @route("/test")
  op patch(@query("type") type?: string): void;
}

@@clientName(Test.patch::parameters.type, "$DO_NOT_NORMALIZE$type");
```

This is the tspconfig.yaml.

```yaml
withRawContent: true
mustEmptyDiagnostic: false
experimental-extensible-enums: true
```

## Operations Options

```ts models:withOptions interface PatchOptionalParams
export interface PatchOptionalParams extends OperationOptions {
  type?: string;
}
```

# Should keep optional header param name when $DO_NOT_NORMALIZE$ is applied to a reserved keyword

## Typespec

```tsp
import "@typespec/http";
import "@azure-tools/typespec-client-generator-core";

using TypeSpec.Http;
using Azure.ClientGenerator.Core;

@service
namespace Test;

interface Test {
  @route("/test")
  op patch(@header("type") type?: string): void;
}

@@clientName(Test.patch::parameters.type, "$DO_NOT_NORMALIZE$type");
```

This is the tspconfig.yaml.

```yaml
withRawContent: true
mustEmptyDiagnostic: false
experimental-extensible-enums: true
```

## Operations Options

```ts models:withOptions interface PatchOptionalParams
export interface PatchOptionalParams extends OperationOptions {
  type?: string;
}
```

# Should keep optional body param name when $DO_NOT_NORMALIZE$ is applied to a reserved keyword

## Typespec

```tsp
import "@typespec/http";
import "@azure-tools/typespec-client-generator-core";

using TypeSpec.Http;
using Azure.ClientGenerator.Core;

@service
namespace Test;

interface Test {
  @route("/test")
  op patch(@body type?: string): void;
}

@@clientName(Test.patch::parameters.type, "$DO_NOT_NORMALIZE$type");
```

This is the tspconfig.yaml.

```yaml
withRawContent: true
mustEmptyDiagnostic: false
experimental-extensible-enums: true
```

## Operations Options

```ts models:withOptions interface PatchOptionalParams
export interface PatchOptionalParams extends OperationOptions {
  type?: string;
}
```
