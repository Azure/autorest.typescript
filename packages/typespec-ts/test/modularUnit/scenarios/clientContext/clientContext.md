# handle with no default values in server

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
  "{endpoint}/client/structure/{client}",
  "",
  {
    @doc("Need to be set as 'http://localhost:3000' in client.")
    endpoint: url,

    @doc("Need to be set as 'default', 'multi-client', 'renamed-operation', 'two-operation-group' in client.")
    client: ClientType = ClientType.Default,
  }
)
@service({
  title: "MultiClient"
})
@versioned(Client.Structure.Service.Versions)
namespace Client.Structure.Service;

enum Versions {
  /** Version 2022-08-31 */
  @useDependency(Azure.Core.Versions.v1_0_Preview_2)
  `2022-08-30`,
}

enum ClientType {
  Default: "default",
  MultiClient: "multi-client",
  RenamedOperation: "renamed-operation",
  TwoOperationGroup: "two-operation-group",
}

@route("/one")
@post
op one(): void;
```

```yaml
withRawContent: true
ignoreWeirdLine: false
```

## clientContext

```ts clientContext
import { logger } from "../logger.js";
import { ClientType } from "../models/models.js";
import { Client, ClientOptions, getClient } from "@azure-rest/core-client";

export interface ServiceContext extends Client {}

/** Optional parameters for the client. */
export interface ServiceClientOptionalParams extends ClientOptions {
  /** Need to be set as 'default', 'multi-client', 'renamed-operation', 'two-operation-group' in client. */
  client?: ClientType;
}

export function createService(
  endpointParam: string,
  options: ServiceClientOptionalParams = {}
): ServiceContext {
  const clientParam = options.clientParam ?? "default";
  const endpointUrl =
    options.endpoint ??
    options.baseUrl ??
    `${endpointParam}/client/structure/${clientParam}`;
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : `azsdk-js-api`;
  const { apiVersion: _, ...updatedOptions } = {
    ...options,
    userAgentOptions: { userAgentPrefix },
    loggingOptions: { logger: options.loggingOptions?.logger ?? logger.info }
  };
  const clientContext = getClient(endpointUrl, undefined, updatedOptions);
  clientContext.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  if (options.apiVersion) {
    logger.warning(
      "This client does not support client api-version, please change it at the operation level"
    );
  }
  return clientContext;
}
```

# handle with default values in server

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
  "{endpoint}/client/structure/{client}",
  "",
  {
    @doc("Need to be set as 'http://localhost:3000' in client.")
    endpoint: url = "http://localhost:3000",

    @doc("Need to be set as 'default', 'multi-client', 'renamed-operation', 'two-operation-group' in client.")
    client: ClientType = ClientType.Default,
  }
)
@service({
  title: "MultiClient"
})
@versioned(Client.Structure.Service.Versions)
namespace Client.Structure.Service;

enum Versions {
  /** Version 2022-08-31 */
  @useDependency(Azure.Core.Versions.v1_0_Preview_2)
  `2022-08-30`,
}

enum ClientType {
  Default: "default",
  MultiClient: "multi-client",
  RenamedOperation: "renamed-operation",
  TwoOperationGroup: "two-operation-group",
}

@route("/one")
@post
op one(): void;
```

```yaml
withRawContent: true
ignoreWeirdLine: false
```

## clientContext

```ts clientContext
import { logger } from "../logger.js";
import { ClientType } from "../models/models.js";
import { Client, ClientOptions, getClient } from "@azure-rest/core-client";

export interface ServiceContext extends Client {}

/** Optional parameters for the client. */
export interface ServiceClientOptionalParams extends ClientOptions {
  /** Need to be set as 'default', 'multi-client', 'renamed-operation', 'two-operation-group' in client. */
  client?: ClientType;
}

export function createService(
  options: ServiceClientOptionalParams = {}
): ServiceContext {
  const endpointParam = options.endpointParam ?? "http://localhost:3000";
  const clientParam = options.clientParam ?? "default";
  const endpointUrl =
    options.endpoint ??
    options.baseUrl ??
    `${endpointParam}/client/structure/${clientParam}`;
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : `azsdk-js-api`;
  const { apiVersion: _, ...updatedOptions } = {
    ...options,
    userAgentOptions: { userAgentPrefix },
    loggingOptions: { logger: options.loggingOptions?.logger ?? logger.info }
  };
  const clientContext = getClient(endpointUrl, undefined, updatedOptions);
  clientContext.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  if (options.apiVersion) {
    logger.warning(
      "This client does not support client api-version, please change it at the operation level"
    );
  }
  return clientContext;
}
```
