# Infer Accept Header from Response Content Types

This scenario tests the generation of the Accept header when it is inferred from response content types using the `inferAcceptHeader` client option.

## TypeSpec

This TypeSpec defines a simple operation with JSON response content type. The `@@clientOption` decorator is used to enable accept header inference.

```tsp
import "@typespec/http";
import "@azure-tools/typespec-client-generator-core";

using TypeSpec.Http;
using Azure.ClientGenerator.Core;

@service(#{ title: "Test Service" })
#suppress "@azure-tools/typespec-client-generator-core/client-option" "Testing override"
namespace TestService;

model Widget {
  id: string;
  name: string;
}

@route("/widgets/{id}")
@get
op getWidget(@path id: string): Widget;

#suppress "@azure-tools/typespec-client-generator-core/client-option" "Testing override"
@@clientOption(TestService, "inferAcceptHeader", true, "javascript");
```

The config would be like:

```yaml
needTCGC: true
withRawContent: true
```

## Operations

```ts operations
import { TestServiceContext as Client } from "./index.js";
import { Widget, widgetDeserializer } from "../models/models.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { GetWidgetOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters
} from "@azure-rest/core-client";

export function _getWidgetSend(
  context: Client,
  id: string,
  options: GetWidgetOptionalParams = { requestOptions: {} }
): StreamableMethod {
  const path = expandUrlTemplate(
    "/widgets/{id}",
    {
      id: id
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding
    }
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: { accept: "application/json", ...options.requestOptions?.headers }
  });
}

export async function _getWidgetDeserialize(
  result: PathUncheckedResponse
): Promise<Widget> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return widgetDeserializer(result.body);
}

export async function getWidget(
  context: Client,
  id: string,
  options: GetWidgetOptionalParams = { requestOptions: {} }
): Promise<Widget> {
  const result = await _getWidgetSend(context, id, options);
  return _getWidgetDeserialize(result);
}
```

# Infer Accept Header with Multiple Content Types

This scenario tests accept header inference when the response supports multiple content types.

## TypeSpec

```tsp
import "@typespec/http";
import "@azure-tools/typespec-client-generator-core";

using TypeSpec.Http;
using Azure.ClientGenerator.Core;

@service(#{ title: "Test Service" })
#suppress "@azure-tools/typespec-client-generator-core/client-option" "Testing override"
namespace TestService;

model Document {
  id: string;
  content: string;
}

@route("/documents/{id}")
@get
op getDocument(@path id: string): {
  @header contentType: "application/json" | "application/xml";
  @body body: Document;
};

#suppress "@azure-tools/typespec-client-generator-core/client-option" "Testing override"
@@clientOption(TestService, "inferAcceptHeader", true, "javascript");

```

The config would be like:

```yaml
needTCGC: true
withRawContent: true
```

## Operations

```ts operations
import { TestServiceContext as Client } from "./index.js";
import {
  Document,
  documentDeserializer,
  documentXmlDeserializer
} from "../models/models.js";
import { isXmlContentType } from "../static-helpers/serialization/xml-helpers.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { GetDocumentOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters
} from "@azure-rest/core-client";

export function _getDocumentSend(
  context: Client,
  id: string,
  options: GetDocumentOptionalParams = { requestOptions: {} }
): StreamableMethod {
  const path = expandUrlTemplate(
    "/documents/{id}",
    {
      id: id
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding
    }
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json, application/xml",
      ...options.requestOptions?.headers
    }
  });
}

export async function _getDocumentDeserialize(
  result: PathUncheckedResponse
): Promise<Document> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  const responseContentType = result.headers?.["content-type"] ?? "";
  if (isXmlContentType(responseContentType)) {
    return documentXmlDeserializer(result.body);
  }
  return documentDeserializer(result.body);
}

export async function getDocument(
  context: Client,
  id: string,
  options: GetDocumentOptionalParams = { requestOptions: {} }
): Promise<Document> {
  const result = await _getDocumentSend(context, id, options);
  return _getDocumentDeserialize(result);
}
```

# Accept Header Not Inferred Without Client Option

This scenario tests that the accept header is NOT inferred when the `inferAcceptHeader` client option is not set.

## TypeSpec

```tsp
import "@typespec/http";
import "@azure-tools/typespec-client-generator-core";

using TypeSpec.Http;
using Azure.ClientGenerator.Core;

@service(#{ title: "Test Service" })
namespace TestService;

model Item {
  id: string;
  value: int32;
}

@route("/items/{id}")
@get
op getItem(@path id: string): Item;
```

The config would be like:

```yaml
needTCGC: true
withRawContent: true
```

## Operations

```ts operations
import { TestServiceContext as Client } from "./index.js";
import { Item, itemDeserializer } from "../models/models.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { GetItemOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters
} from "@azure-rest/core-client";

export function _getItemSend(
  context: Client,
  id: string,
  options: GetItemOptionalParams = { requestOptions: {} }
): StreamableMethod {
  const path = expandUrlTemplate(
    "/items/{id}",
    {
      id: id
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding
    }
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: { accept: "application/json", ...options.requestOptions?.headers }
  });
}

export async function _getItemDeserialize(
  result: PathUncheckedResponse
): Promise<Item> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return itemDeserializer(result.body);
}

export async function getItem(
  context: Client,
  id: string,
  options: GetItemOptionalParams = { requestOptions: {} }
): Promise<Item> {
  const result = await _getItemSend(context, id, options);
  return _getItemDeserialize(result);
}
```
