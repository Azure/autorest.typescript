# should generate constructor without subscription ID

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
import { Operations, OperationsOptionalParams } from "./operations/operations.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { GlobalServiceClientOptionalParams } from "./api/globalServiceContext.js";

export class GlobalServiceClient {
  private _client: GlobalServiceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;
  /** The parent client parameters that are used in the constructors. */
  private _clientParams: {
    credential: TokenCredential;
    options: GlobalServiceClientOptionalParams;
  };

  /** Client.GlobalService Resource Provider management API. */
  constructor(credential: TokenCredential, options: GlobalServiceClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createGlobalService(credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this._clientParams = { credential, options };
  }

  getOperations(options: OperationsOptionalParams = {}): Operations {
    return new Operations(
      this._clientParams.credential,

      { ...this._clientParams.options, ...options },
    );
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
}

@autoRoute
op checkNameAvailability is ArmProviderActionSync<
  Request = CheckNameAvailabilityInput,
  Response = CheckNameAvailabilityOutput
>;

model CheckNameAvailabilityInput {
  name: string;
  type: string;
}

model CheckNameAvailabilityOutput {
  @visibility(Lifecycle.Read)
  nameAvailable?: boolean;
  @visibility(Lifecycle.Read)
  reason?: string;
  @visibility(Lifecycle.Read)
  message?: string;
}
```

The config would be like:

```yaml
withRawContent: true
```

## classicClient

```ts classicClient
import { Operations, OperationsOptionalParams } from "./operations/operations.js";
import {
  StandardResources,
  StandardResourcesOptionalParams,
} from "./standardResources/standardResources.js";
import { checkNameAvailability } from "./api/operations.js";
import { CheckNameAvailabilityOptionalParams } from "./api/options.js";
import { CheckNameAvailabilityInput, CheckNameAvailabilityOutput } from "./models/models.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { StandardServiceClientOptionalParams } from "./api/standardServiceContext.js";

export class StandardServiceClient {
  private _client: StandardServiceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;
  /** The parent client parameters that are used in the constructors. */
  private _clientParams: {
    credential: TokenCredential;
    subscriptionId: string;
    options: StandardServiceClientOptionalParams;
  };

  /** Client.StandardService Resource Provider management API. */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: StandardServiceClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createStandardService(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this._clientParams = { credential, subscriptionId, options };
  }

  checkNameAvailability(
    body: CheckNameAvailabilityInput,
    options: CheckNameAvailabilityOptionalParams = { requestOptions: {} },
  ): Promise<CheckNameAvailabilityOutput> {
    return checkNameAvailability(this._client, body, options);
  }

  getOperations(options: OperationsOptionalParams = {}): Operations {
    return new Operations(
      this._clientParams.credential,
      this._clientParams.subscriptionId,

      { ...this._clientParams.options, ...options },
    );
  }

  getStandardResources(options: StandardResourcesOptionalParams = {}): StandardResources {
    return new StandardResources(
      this._clientParams.credential,
      this._clientParams.subscriptionId,

      { ...this._clientParams.options, ...options },
    );
  }
}
```

# should generate constructor overloads for mixed tenant-level and subscription-level operations

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
import { Operations, OperationsOptionalParams } from "./operations/operations.js";
import { MixedResources, MixedResourcesOptionalParams } from "./mixedResources/mixedResources.js";
import { listSkus } from "./api/operations.js";
import { ListSkusOptionalParams } from "./api/options.js";
import { SkuListResult } from "./models/models.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { MixedServiceClientOptionalParams } from "./api/mixedServiceContext.js";

export class MixedServiceClient {
  private _client: MixedServiceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;
  /** The parent client parameters that are used in the constructors. */
  private _clientParams: {
    credential: TokenCredential;
    subscriptionId: string;
    options: MixedServiceClientOptionalParams;
  };

  constructor(credential: TokenCredential, options?: MixedServiceClientOptionalParams);
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options?: MixedServiceClientOptionalParams,
  );
  /** Client.MixedService Resource Provider management API. */
  constructor(
    credential: TokenCredential,
    subscriptionIdOrOptions?: string | MixedServiceClientOptionalParams,
    options?: MixedServiceClientOptionalParams,
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
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this._clientParams = { credential, subscriptionId, options };
  }

  listSkus(options: ListSkusOptionalParams = { requestOptions: {} }): Promise<SkuListResult> {
    return listSkus(this._client, options);
  }

  getOperations(options: OperationsOptionalParams = {}): Operations {
    return new Operations(
      this._clientParams.credential,
      this._clientParams.subscriptionId,

      { ...this._clientParams.options, ...options },
    );
  }

  getMixedResources(options: MixedResourcesOptionalParams = {}): MixedResources {
    return new MixedResources(
      this._clientParams.credential,
      this._clientParams.subscriptionId,

      { ...this._clientParams.options, ...options },
    );
  }
}
```
