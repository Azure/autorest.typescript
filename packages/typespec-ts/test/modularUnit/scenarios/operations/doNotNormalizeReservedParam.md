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

## Operations Options

```ts models:withOptions interface PatchOptionalParams
/** Optional parameters. */
export interface PatchOptionalParams extends OperationOptions {
  type?: string;
}
```

# Should keep required query param name when $DO_NOT_NORMALIZE$ is applied to a reserved keyword

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
  op patch(@query("type") type: string): void;
}

@@clientName(Test.patch::parameters.type, "$DO_NOT_NORMALIZE$type");
```

## Operations

```ts operations function _patchSend
export function _patchSend(
  context: Client,
  type: string,
  options: PatchOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/test{?type}",
    {
      type: type,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).patch({ ...operationOptionsToRequestParameters(options) });
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

## Operations Options

```ts models:withOptions interface PatchOptionalParams
/** Optional parameters. */
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

## Operations Options

```ts models:withOptions interface PatchOptionalParams
/** Optional parameters. */
export interface PatchOptionalParams extends OperationOptions {
  type?: string;
}
```
