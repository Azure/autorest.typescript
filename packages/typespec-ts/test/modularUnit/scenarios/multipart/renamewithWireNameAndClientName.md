# MultiPartRequestWithWireName

```tsp
model MultiPartRequestWithWireName {
  identifier: HttpPart<string, #{ name: "id" }>;
  image: HttpPart<bytes, #{ name: "profileImage" }>;
}

op withWireName(
    @header contentType: "multipart/form-data",
    @multipartBody body: MultiPartRequestWithWireName,
): NoContentResponse;

```

## Models

```ts models
import { FileContents, createFilePartDescriptor } from "../static-helpers/multipartHelpers.js";

/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface MultiPartRequestWithWireName */
export interface MultiPartRequestWithWireName {
  identifier: string;
  image: FileContents | { contents: FileContents; contentType?: string; filename?: string };
}

export function multiPartRequestWithWireNameSerializer(item: MultiPartRequestWithWireName): any {
  return [
    { name: "id", body: item["identifier"] },
    createFilePartDescriptor("profileImage", item["image"], "application/octet-stream"),
  ];
}
```

# MultiPartRequestWithClientName

```tsp
model MultiPartRequest {
  id: HttpPart<string>;
  profileImage: HttpPart<bytes>;
}

@@clientName(MultiPartRequest.id, "identifier");
@@clientName(MultiPartRequest.profileImage, "image");

op withClientName(
    @header contentType: "multipart/form-data",
    @multipartBody body: MultiPartRequest,
): NoContentResponse;
```

The config would be like:

```yaml
needTCGC: true
```

## Models

```ts models
import { FileContents, createFilePartDescriptor } from "../static-helpers/multipartHelpers.js";

/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface MultiPartRequest */
export interface MultiPartRequest {
  identifier: string;
  image: FileContents | { contents: FileContents; contentType?: string; filename?: string };
}

export function multiPartRequestSerializer(item: MultiPartRequest): any {
  return [
    { name: "id", body: item["identifier"] },
    createFilePartDescriptor("profileImage", item["image"], "application/octet-stream"),
  ];
}
```