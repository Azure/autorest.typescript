# handle with optional api-version parameter via custom VersionParameterTrait

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
  apiVersion?: string;
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
  const userAgentPrefix = prefixFromOptions ? `${prefixFromOptions} azsdk-js-api` : `azsdk-js-api`;
  const { apiVersion: _, ...updatedOptions } = {
    ...options,
    userAgentOptions: { userAgentPrefix },
    loggingOptions: { logger: options.loggingOptions?.logger ?? logger.info },
  };
  const clientContext = getClient(endpointUrl, undefined, updatedOptions);
  const apiVersion = options.apiVersion;
  return { ...clientContext, apiVersion } as DataMapServiceContext;
}
```
