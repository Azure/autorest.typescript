# Basic file part

```tsp
model RequestBody {
  basicFile: HttpPart<File>;
}

op doThing(@header contentType: "multipart/form-data", @multipartBody bodyParam: RequestBody): void;
```

## Models

This basic case uses TypeSpec's `Http.File`, which specifies an optional `filename` and `contentType`. Since both are optional, the customer can pass the file's content directly to the `basicFile` property. If the customer wants to specify the filename or content type, they can use the wrapper object.

```ts models
import {
  FileContents,
  createFilePartDescriptor,
} from "../static-helpers/multipartHelpers.js";

/** model interface RequestBody */
export interface RequestBody {
  basicFile:
    | FileContents
    | { contents: FileContents; contentType?: string; filename?: string };
}

export function requestBodySerializer(item: RequestBody): any {
  return [createFilePartDescriptor("basicFile", item["basicFile"], undefined)];
}
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { RequestBody, requestBodySerializer } from "../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _doThingSend(
  context: Client,
  bodyParam: RequestBody,
  options: DoThingOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "multipart/form-data",
      body: requestBodySerializer(bodyParam),
    });
}

export async function _doThingDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function doThing(
  context: Client,
  bodyParam: RequestBody,
  options: DoThingOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _doThingSend(context, bodyParam, options);
  return _doThingDeserialize(result);
}
```

# File part, filename required

```tsp
model FileRequiredName extends File {
  filename: string;
}

model RequestBody {
  nameRequired: HttpPart<FileRequiredName>;
}

op doThing(@header contentType: "multipart/form-data", @multipartBody bodyParam: RequestBody): void;
```

## Models

The filename must be provided _somehow_. This can either be done by passing a `File` object, which has a required filename property, or by using the wrapper object to pass a `filename` alongside the `contents`.

```ts models
import {
  FileContents,
  createFilePartDescriptor,
} from "../static-helpers/multipartHelpers.js";

/** model interface RequestBody */
export interface RequestBody {
  nameRequired:
    | File
    | { contents: FileContents; contentType?: string; filename: string };
}

export function requestBodySerializer(item: RequestBody): any {
  return [
    createFilePartDescriptor("nameRequired", item["nameRequired"], undefined),
  ];
}
```

# only: Default content type

```tsp
model PngFile extends File {
  contentType: "image/png";
}

model RequestBody {
  image: HttpPart<PngFile>;
}

op doThing(@header contentType: "multipart/form-data", @multipartBody bodyParam: RequestBody): void;
```

## Models

```ts models
import {
  FileContents,
  createFilePartDescriptor,
} from "../static-helpers/multipartHelpers.js";

/** model interface RequestBody */
export interface RequestBody {
  image:
    | FileContents
    | { contents: FileContents; contentType?: "image/png"; filename?: string };
}

export function requestBodySerializer(item: RequestBody): any {
  return [createFilePartDescriptor("image", item["image"], "image/png")];
}
```

# only: Multiple files

```tsp
model RequestBody {
  files: HttpPart<File>[];
}

op doThing(@header contentType: "multipart/form-data", @multipartBody bodyParam: RequestBody): void;
```

## Models

Each provided file in the input corresponds to one part in the multipart request.

```ts models
import {
  FileContents,
  createFilePartDescriptor,
} from "../static-helpers/multipartHelpers.js";

/** model interface RequestBody */
export interface RequestBody {
  files: Array<
    | FileContents
    | { contents: FileContents; contentType?: string; filename?: string }
  >;
}

export function requestBodySerializer(item: RequestBody): any {
  return [
    ...item["files"].map((x: unknown) =>
      createFilePartDescriptor("files", x, undefined),
    ),
  ];
}
```