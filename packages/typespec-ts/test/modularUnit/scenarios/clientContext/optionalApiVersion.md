# handle with optional api-version parameter via custom VersionParameterTrait

## Description

This test reproduces the issue found in Azure.Analytics.Purview.DataMap where:

- TypeSpec defines an optional api-version parameter: `apiVersion?: string`
- TCGC correctly sets `optional: true` for this parameter
- However, the generated client code incorrectly adds a `ClientApiVersionPolicy` instead of treating it as truly optional

## Root Cause

When a TypeSpec specification uses an optional api-version parameter (with `?` marker),
TCGC returns `optional: true`, but the current implementation in `clientHelpers.ts`
uses `isRequired()` logic that only checks `!param.optional || param.clientDefaultValue`,
which returns `false` (required) when `clientDefaultValue` exists, causing the parameter
to be treated as required and generating a policy instead of a warning.

## Expected Behavior

When `optional: true` from TCGC, the generated code should:

- Make apiVersion truly optional in the client options
- Show a warning if apiVersion is provided
- Not add ClientApiVersionPolicy

## TypeSpec

```tsp
import "@typespec/http";
import "@typespec/rest";
import "@typespec/versioning";
import "@azure-tools/typespec-azure-core";

using TypeSpec.Http;
using TypeSpec.Rest;
using TypeSpec.Versioning;
using Azure.Core;
using Azure.Core.Traits;

@service(#{
  title: "DataMapClient",
})
@versioned(DataMapService.Versions)
@server(
  "{endpoint}",
  "DataMap Service",
  {
    @doc("Service endpoint")
    endpoint: url,
  }
)
namespace DataMapService;

enum Versions {
  @doc("API Version 2023-09-01")
  `2023-09-01`,
}

@doc("The ApiVersion query parameter.")
model CustomApiVersionParameter {
  @doc("The API version to use for this operation.")
  @query("api-version")
  @minLength(1)
  apiVersion?: string;
}

@route("/entities")
@get
op listEntities(
  @doc("The API version to use for this operation.")
  @query("api-version")
  @minLength(1)
  apiVersion?: string,
): {
  @statusCode statusCode: 200;
  @body entities: string[];
};
```

The config would be like:

```yaml
withRawContent: true
ignoreWeirdLine: false
```

## clientContext

```ts clientContext
import { logger } from "../logger.js";
import { KnownVersions } from "../models/models.js";
import { Client, ClientOptions, getClient } from "@azure-rest/core-client";

export interface DataMapServiceContext extends Client {
  /** The API version to use for this operation. */
  /** Known values of {@link KnownVersions} that the service accepts. */
  apiVersion: string;
}

/** Optional parameters for the client. */
export interface DataMapServiceClientOptionalParams extends ClientOptions {
  /** The API version to use for this operation. */
  /** Known values of {@link KnownVersions} that the service accepts. */
  apiVersion?: string;
}

export function createDataMapService(
  endpointParam: string,
  options: DataMapServiceClientOptionalParams = {},
): DataMapServiceContext {
  const endpointUrl = options.endpoint ?? String(endpointParam);
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : `azsdk-js-api`;
  const { apiVersion: _, ...updatedOptions } = {
    ...options,
    userAgentOptions: { userAgentPrefix },
    loggingOptions: { logger: options.loggingOptions?.logger ?? logger.info },
  };
  const clientContext = getClient(endpointUrl, undefined, updatedOptions);
  clientContext.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  const apiVersion = options.apiVersion ?? "2023-09-01";
  clientContext.pipeline.addPolicy({
    name: "ClientApiVersionPolicy",
    sendRequest: (req, next) => {
      // Use the apiVersion defined in request url directly
      // Append one if there is no apiVersion and we have one at client options
      const url = new URL(req.url);
      if (!url.searchParams.get("api-version")) {
        req.url = `${req.url}${
          Array.from(url.searchParams.keys()).length > 0 ? "&" : "?"
        }api-version=${apiVersion}`;
      }

      return next(req);
    },
  });
  return { ...clientContext, apiVersion } as DataMapServiceContext;
}
```
