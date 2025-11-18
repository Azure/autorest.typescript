# should generate onstructor without subscription ID

## TypeSpec

```tsp
import "@typespec/http";
import "@typespec/rest";
import "@typespec/versioning";
import "@azure-tools/typespec-azure-core";
import "@azure-tools/typespec-azure-resource-manager";

using TypeSpec.Http;
using TypeSpec.Rest;
using TypeSpec.Versioning;
using Azure.Core;
using Azure.ResourceManager;

/** Client.GlobalService Resource Provider management API. */
@armProviderNamespace
@service(#{
  title: "Client.GlobalService management service",
})
@versioned(Client.GlobalService.Versions)
namespace Client.GlobalService;

/** The available API versions. */
enum Versions {
  /** 2021-10-01-preview version */
  @armCommonTypesVersion(Azure.ResourceManager.CommonTypes.Versions.v5)
  v2021_10_01_preview: "2021-10-01-preview",
}

interface Operations extends Azure.ResourceManager.Operations {}
```

The config would be like:

```yaml
withRawContent: true
```

## classicClient

```ts classicClient
import { list } from "./api/operations.js";
import { ListOptionalParams } from "./api/options.js";
import { Operation } from "./models/models.js";
import { PagedAsyncIterableIterator } from "./static-helpers/pagingHelpers.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { GlobalServiceClientOptionalParams } from "./api/globalServiceContext.js";

export class GlobalServiceClient {
  private _client: GlobalServiceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Client.GlobalService Resource Provider management API. */
  constructor(
    credential: TokenCredential,
    options: GlobalServiceClientOptionalParams = {}
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createGlobalService(credential, {
      ...options,
      userAgentOptions: { userAgentPrefix }
    });
    this.pipeline = this._client.pipeline;
  }

  /** List the operations for the provider */
  list(
    options: ListOptionalParams = { requestOptions: {} }
  ): PagedAsyncIterableIterator<Operation> {
    return list(this._client, options);
  }
}
```

# should generate constructor requiring subscription ID

## TypeSpec

```tsp
import "@typespec/http";
import "@typespec/rest";
import "@typespec/versioning";
import "@azure-tools/typespec-azure-core";
import "@azure-tools/typespec-azure-resource-manager";

using TypeSpec.Http;
using TypeSpec.Rest;
using TypeSpec.Versioning;
using Azure.Core;
using Azure.ResourceManager;

/** Client.StandardService Resource Provider management API. */
@armProviderNamespace
@service(#{
  title: "Client.StandardService management service",
})
@versioned(Client.StandardService.Versions)
namespace Client.StandardService;

/** The available API versions. */
enum Versions {
  /** 2021-10-01-preview version */
  @armCommonTypesVersion(Azure.ResourceManager.CommonTypes.Versions.v5)
  v2021_10_01_preview: "2021-10-01-preview",
}

interface Operations extends Azure.ResourceManager.Operations {}

/** Standard resource */
model StandardResource is TrackedResource<StandardProperties> {
  ...ResourceNameParameter<StandardResource>;
}

model StandardProperties {
  displayName?: string;
  @visibility(Lifecycle.Read)
  provisioningState?: ProvisioningState;
}

@lroStatus
union ProvisioningState {
  ResourceProvisioningState,
  Provisioning: "Provisioning",
  string,
}

@armResourceOperations
interface StandardResources {
  get is ArmResourceRead<StandardResource>;
  checkNameAvailability is checkGlobalNameAvailability;
}
```

The config would be like:

```yaml
withRawContent: true
```

## classicClient

```ts classicClient
import { checkNameAvailability, get, list } from "./api/operations.js";
import {
  CheckNameAvailabilityOptionalParams,
  GetOptionalParams,
  ListOptionalParams
} from "./api/options.js";
import {
  Operation,
  StandardResource,
  CheckNameAvailabilityRequest,
  CheckNameAvailabilityResponse
} from "./models/models.js";
import { PagedAsyncIterableIterator } from "./static-helpers/pagingHelpers.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { StandardServiceClientOptionalParams } from "./api/standardServiceContext.js";

export class StandardServiceClient {
  private _client: StandardServiceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Client.StandardService Resource Provider management API. */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: StandardServiceClientOptionalParams = {}
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createStandardService(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix }
    });
    this.pipeline = this._client.pipeline;
  }

  /** Implements global CheckNameAvailability operations */
  checkNameAvailability(
    body: CheckNameAvailabilityRequest,
    options: CheckNameAvailabilityOptionalParams = { requestOptions: {} }
  ): Promise<CheckNameAvailabilityResponse> {
    return checkNameAvailability(this._client, body, options);
  }

  /** Get a StandardResource */
  get(
    resourceGroupName: string,
    standardResourceName: string,
    options: GetOptionalParams = { requestOptions: {} }
  ): Promise<StandardResource> {
    return get(this._client, resourceGroupName, standardResourceName, options);
  }

  /** List the operations for the provider */
  list(
    options: ListOptionalParams = { requestOptions: {} }
  ): PagedAsyncIterableIterator<Operation> {
    return list(this._client, options);
  }
}
```

# should generate constructor overloads for mixed tenant and subscription operations

## TypeSpec

```tsp
import "@typespec/http";
import "@typespec/rest";
import "@typespec/versioning";
import "@azure-tools/typespec-azure-core";
import "@azure-tools/typespec-azure-resource-manager";

using TypeSpec.Http;
using TypeSpec.Rest;
using TypeSpec.Versioning;
using Azure.Core;
using Azure.ResourceManager;

/** Client.MixedService Resource Provider management API. */
@armProviderNamespace
@service(#{
  title: "Client.MixedService management service",
})
@versioned(Client.MixedService.Versions)
namespace Client.MixedService;

/** The available API versions. */
enum Versions {
  /** 2021-10-01-preview version */
  @armCommonTypesVersion(Azure.ResourceManager.CommonTypes.Versions.v5)
  v2021_10_01_preview: "2021-10-01-preview",
}

interface Operations extends Azure.ResourceManager.Operations {}

/** Mixed resource that requires subscription */
model MixedResource is TrackedResource<MixedProperties> {
  ...ResourceNameParameter<MixedResource>;
}

model MixedProperties {
  displayName?: string;
  @visibility(Lifecycle.Read)
  provisioningState?: ProvisioningState;
}

@lroStatus
union ProvisioningState {
  ResourceProvisioningState,
  Provisioning: "Provisioning",
  string,
}

@armResourceOperations
interface MixedResources {
  get is ArmResourceRead<MixedResource>;
}

@route("/providers/Client.MixedService/skus")
@get
op listSkus(): SkuListResult;

model SkuListResult {
  value: Sku[];
}

model Sku {
  name?: string;
  tier?: string;
  capacity?: int32;
}
```

The config would be like:

```yaml
withRawContent: true
```

## classicClient

```ts classicClient
import { listSkus, get, list } from "./api/operations.js";
import {
  ListSkusOptionalParams,
  GetOptionalParams,
  ListOptionalParams
} from "./api/options.js";
import { SkuListResult, Operation, MixedResource } from "./models/models.js";
import { PagedAsyncIterableIterator } from "./static-helpers/pagingHelpers.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { MixedServiceClientOptionalParams } from "./api/mixedServiceContext.js";

export class MixedServiceClient {
  private _client: MixedServiceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    credential: TokenCredential,
    options?: MixedServiceClientOptionalParams
  );
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options?: MixedServiceClientOptionalParams
  );
  /** Client.MixedService Resource Provider management API. */
  constructor(
    credential: TokenCredential,
    subscriptionIdOrOptions?: string | MixedServiceClientOptionalParams,
    options?: MixedServiceClientOptionalParams
  ) {
    let subscriptionId: string | undefined;

    if (typeof subscriptionIdOrOptions === "string") {
      subscriptionId = subscriptionIdOrOptions;
    } else if (typeof subscriptionIdOrOptions === "object") {
      options = subscriptionIdOrOptions;
    }

    options = options ?? {};
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createMixedService(credential, subscriptionId ?? "", {
      ...options,
      userAgentOptions: { userAgentPrefix }
    });
    this.pipeline = this._client.pipeline;
  }

  listSkus(
    options: ListSkusOptionalParams = { requestOptions: {} }
  ): Promise<SkuListResult> {
    return listSkus(this._client, options);
  }

  /** Get a MixedResource */
  get(
    resourceGroupName: string,
    mixedResourceName: string,
    options: GetOptionalParams = { requestOptions: {} }
  ): Promise<MixedResource> {
    return get(this._client, resourceGroupName, mixedResourceName, options);
  }

  /** List the operations for the provider */
  list(
    options: ListOptionalParams = { requestOptions: {} }
  ): PagedAsyncIterableIterator<Operation> {
    return list(this._client, options);
  }
}
```
