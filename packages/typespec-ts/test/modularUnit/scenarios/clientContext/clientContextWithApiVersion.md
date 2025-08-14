# should generate apiVersion property in client context interface when API version is a required client parameter

This scenario tests that when a client has an API version parameter that should be exposed as a required property on the client context interface, it is properly included.

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
@versioned(DataMap.Versions)
namespace Azure.Analytics.Purview.DataMap;

enum Versions {
  /** Version 2023-09-01 */
  @useDependency(Azure.Core.Versions.v1_0_Preview_2)
  `2023-09-01`,
}

model ApiVersionParameter {
  @query
  "api-version": Versions;
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
  apiVersion: string;
}

/** Optional parameters for the client. */
export interface DataMapClientOptionalParams extends ClientOptions {
  apiVersion?: string;
}

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
  return { ...clientContext, apiVersion } as DataMapContext;
}
```