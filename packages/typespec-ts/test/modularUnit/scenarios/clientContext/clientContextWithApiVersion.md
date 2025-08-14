# should generate apiVersion property in client context interface when API version is a required client parameter

This scenario tests that when a client has an API version parameter that should be exposed as a required property on the client context interface, it is properly included.

## TypeSpec

```tsp
import "@typespec/http";
import "@typespec/rest";
import "@azure-tools/typespec-azure-core";

using TypeSpec.Http;
using TypeSpec.Rest;
using Azure.Core;

@server(
  "{endpoint}",
  "",
  {
    @doc("Service endpoint")
    endpoint: url,
  }
)
@service(#{
  title: "DataMap"
})
namespace Azure.Analytics.Purview.DataMap;

model ApiVersionParameter {
  @query
  "api-version": string;
}

@route("/atlas/v2/types/typedefs")
@get
op getAtlasTypeDef(...ApiVersionParameter): void;
```

The config would be like:

```yaml
needOptions: false
withRawContent: true
```

## clientContext

```ts clientContext
import { logger } from "../logger.js";
import { Client, ClientOptions, getClient } from "@azure-rest/core-client";

export interface DataMapContext extends Client {
  /** The API version to use for this operation. */
  apiVersion: string;
}

/** Optional parameters for the client. */
export interface DataMapClientOptionalParams extends ClientOptions {}

export function createDataMap(
  endpointParam: string,
  apiVersion: string,
  options: DataMapClientOptionalParams = {},
): DataMapContext {
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
  clientContext.pipeline.addPolicy({
    name: 'ClientApiVersionPolicy',
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
  return { ...clientContext, apiVersion } as DataMapContext;
}
```