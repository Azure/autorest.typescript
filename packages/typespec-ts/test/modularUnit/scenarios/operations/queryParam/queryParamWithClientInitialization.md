# Optional query parameter with clientInitialization

This scenario tests the generation of TypeScript code for an Azure Resource Manager resource read operation with query parameters, specifically the `$expand` parameter for the SavingsPlanModel.

## TypeSpec

This TypeSpec defines a SavingsPlanModel with an ArmResourceRead operation that includes an optional `$expand` query parameter to expand detail information of some properties.

```tsp
import "@typespec/http";
import "@typespec/rest";
import "@typespec/versioning";
import "@azure-tools/typespec-azure-core";
import "@azure-tools/typespec-azure-resource-manager";
import "@azure-tools/typespec-client-generator-core";

using TypeSpec.Http;
using TypeSpec.Rest;
using TypeSpec.Versioning;
using Azure.Core;
using Azure.ResourceManager;
using Azure.ResourceManager.Foundations;
using Azure.ClientGenerator.Core;

@service(#{ title: "Billing benefits RP" })
@armCommonTypesVersion(Azure.ResourceManager.CommonTypes.Versions.v6)
namespace Microsoft.BillingBenefits;

model ExpandParameter {
  /**
   * The expand query parameter.
   */
  @query("$expand")
  $expand?: string;
}

model SavingsPlanModelProperties {
  displayName?: string;
  provisioningState?: string;
  commitment?: {
    currencyCode?: string;
    amount?: float64;
  };
  effectiveDateTime?: utcDateTime;
  expiryDateTime?: utcDateTime;
  term?: string;
  billingScope?: string;
}

model ResourceSku {
  name: string;
}

@parentResource(SavingsPlanOrderModel)
model SavingsPlanModel extends Azure.ResourceManager.Foundations.ProxyResource {
  ...ResourceNameParameter<
    Resource = SavingsPlanModel,
    KeyName = "savingsPlanId",
    SegmentName = "savingsPlans",
    NamePattern = ""
  >;

  sku: ResourceSku;
  
  @doc("The resource-specific properties for this resource.")
  properties?: SavingsPlanModelProperties;
}

model SavingsPlanOrderModel extends Azure.ResourceManager.Foundations.ProxyResource {
  ...ResourceNameParameter<
    Resource = SavingsPlanOrderModel,
    KeyName = "savingsPlanOrderId",
    SegmentName = "savingsPlanOrders",
    NamePattern = ""
  >;
}

@armResourceOperations
interface SavingsPlanModels {
  /**
   * Get savings plan.
   */
  get is ArmResourceRead<
    SavingsPlanModel,
    Parameters = {
      /**
       * May be used to expand the detail information of some properties.
       */
      @query("$expand")
      $expand?: string;
    }
  >;
}

@@clientInitialization(Microsoft.BillingBenefits,
  {
    parameters: ExpandParameter,
  }
);
```

The config would be like:

```yaml
needTCGC: true
withRawContent: true
```

## clientContext

```ts clientContext
import { logger } from "../logger.js";
import { Client, ClientOptions, getClient } from "@azure-rest/core-client";

export interface BillingBenefitsContext extends Client {
  /** The expand query parameter. */
  expand?: string;
}

/** Optional parameters for the client. */
export interface BillingBenefitsClientOptionalParams extends ClientOptions {
  /** The expand query parameter. */
  expand?: string;
}

export function createBillingBenefits(
  endpointParam: string,
  options: BillingBenefitsClientOptionalParams = {},
): BillingBenefitsContext {
  const endpointUrl = options.endpoint ?? String(endpointParam);
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions ? `${prefixFromOptions} azsdk-js-api` : `azsdk-js-api`;
  const { apiVersion: _, ...updatedOptions } = {
    ...options,
    userAgentOptions: { userAgentPrefix },
    loggingOptions: { logger: options.loggingOptions?.logger ?? logger.info },
  };
  const clientContext = getClient(endpointUrl, undefined, updatedOptions);
  clientContext.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  if (options.apiVersion) {
    logger.warning(
      "This client does not support client api-version, please change it at the operation level",
    );
  }
  return { ...clientContext, expand: options.expand } as BillingBenefitsContext;
}
```

## Operations

```ts operations
import { BillingBenefitsContext as Client } from "./index.js";
import {
  SavingsPlanModel,
  savingsPlanModelDeserializer,
  errorResponseDeserializer,
} from "../models/models.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { GetOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getSend(
  context: Client,
  apiVersion: string,
  subscriptionId: string,
  resourceGroupName: string,
  savingsPlanOrderId: string,
  savingsPlanId: string,
  options: GetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ThisWillBeReplaced/savingsPlanOrders/{savingsPlanOrderId}/savingsPlans/{savingsPlanId}{?api%2Dversion,%24expand}",
    {
      subscriptionId: subscriptionId,
      resourceGroupName: resourceGroupName,
      savingsPlanOrderId: savingsPlanOrderId,
      savingsPlanId: savingsPlanId,
      "api%2Dversion": apiVersion,
      "%24expand": context.expand,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _getDeserialize(result: PathUncheckedResponse): Promise<SavingsPlanModel> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return savingsPlanModelDeserializer(result.body);
}

/** Get savings plan. */
export async function get(
  context: Client,
  apiVersion: string,
  subscriptionId: string,
  resourceGroupName: string,
  savingsPlanOrderId: string,
  savingsPlanId: string,
  options: GetOptionalParams = { requestOptions: {} },
): Promise<SavingsPlanModel> {
  const result = await _getSend(
    context,
    apiVersion,
    subscriptionId,
    resourceGroupName,
    savingsPlanOrderId,
    savingsPlanId,
    options,
  );
  return _getDeserialize(result);
}
```

# Required query parameter with clientInitialization

This scenario tests the generation of TypeScript code for an Azure Resource Manager resource read operation with query parameters, specifically the `$expand` parameter for the SavingsPlanModel.

## TypeSpec

This TypeSpec defines a SavingsPlanModel with an ArmResourceRead operation that includes an optional `$expand` query parameter to expand detail information of some properties.

```tsp
import "@typespec/http";
import "@typespec/rest";
import "@typespec/versioning";
import "@azure-tools/typespec-azure-core";
import "@azure-tools/typespec-azure-resource-manager";
import "@azure-tools/typespec-client-generator-core";

using TypeSpec.Http;
using TypeSpec.Rest;
using TypeSpec.Versioning;
using Azure.Core;
using Azure.ResourceManager;
using Azure.ResourceManager.Foundations;
using Azure.ClientGenerator.Core;

@service(#{ title: "Billing benefits RP" })
@armCommonTypesVersion(Azure.ResourceManager.CommonTypes.Versions.v6)
namespace Microsoft.BillingBenefits;

model ExpandParameter {
  /**
   * The expand query parameter.
   */
  @query("$expand")
  $expand: string;
}

model SavingsPlanModelProperties {
  displayName?: string;
  provisioningState?: string;
  commitment?: {
    currencyCode?: string;
    amount?: float64;
  };
  effectiveDateTime?: utcDateTime;
  expiryDateTime?: utcDateTime;
  term?: string;
  billingScope?: string;
}

model ResourceSku {
  name: string;
}

@parentResource(SavingsPlanOrderModel)
model SavingsPlanModel extends Azure.ResourceManager.Foundations.ProxyResource {
  ...ResourceNameParameter<
    Resource = SavingsPlanModel,
    KeyName = "savingsPlanId",
    SegmentName = "savingsPlans",
    NamePattern = ""
  >;

  sku: ResourceSku;
  
  @doc("The resource-specific properties for this resource.")
  properties?: SavingsPlanModelProperties;
}

model SavingsPlanOrderModel extends Azure.ResourceManager.Foundations.ProxyResource {
  ...ResourceNameParameter<
    Resource = SavingsPlanOrderModel,
    KeyName = "savingsPlanOrderId",
    SegmentName = "savingsPlanOrders",
    NamePattern = ""
  >;
}

@armResourceOperations
interface SavingsPlanModels {
  /**
   * Get savings plan.
   */
  get is ArmResourceRead<
    SavingsPlanModel,
    Parameters = {
      /**
       * May be used to expand the detail information of some properties.
       */
      @query("$expand")
      $expand?: string;
    }
  >;
}

@@clientInitialization(Microsoft.BillingBenefits,
  {
    parameters: ExpandParameter,
  }
);
```

The config would be like:

```yaml
needTCGC: true
withRawContent: true
```

## clientContext

```ts clientContext
import { logger } from "../logger.js";
import { Client, ClientOptions, getClient } from "@azure-rest/core-client";

export interface BillingBenefitsContext extends Client {
  /** The expand query parameter. */
  expand: string;
}

/** Optional parameters for the client. */
export interface BillingBenefitsClientOptionalParams extends ClientOptions {}

export function createBillingBenefits(
  endpointParam: string,
  expand: string,
  options: BillingBenefitsClientOptionalParams = {},
): BillingBenefitsContext {
  const endpointUrl = options.endpoint ?? String(endpointParam);
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions ? `${prefixFromOptions} azsdk-js-api` : `azsdk-js-api`;
  const { apiVersion: _, ...updatedOptions } = {
    ...options,
    userAgentOptions: { userAgentPrefix },
    loggingOptions: { logger: options.loggingOptions?.logger ?? logger.info },
  };
  const clientContext = getClient(endpointUrl, undefined, updatedOptions);
  clientContext.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  if (options.apiVersion) {
    logger.warning(
      "This client does not support client api-version, please change it at the operation level",
    );
  }
  return { ...clientContext, expand } as BillingBenefitsContext;
}
```

## Operations

```ts operations
import { BillingBenefitsContext as Client } from "./index.js";
import {
  SavingsPlanModel,
  savingsPlanModelDeserializer,
  errorResponseDeserializer,
} from "../models/models.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { GetOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getSend(
  context: Client,
  apiVersion: string,
  subscriptionId: string,
  resourceGroupName: string,
  savingsPlanOrderId: string,
  savingsPlanId: string,
  options: GetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ThisWillBeReplaced/savingsPlanOrders/{savingsPlanOrderId}/savingsPlans/{savingsPlanId}{?api%2Dversion,%24expand}",
    {
      subscriptionId: subscriptionId,
      resourceGroupName: resourceGroupName,
      savingsPlanOrderId: savingsPlanOrderId,
      savingsPlanId: savingsPlanId,
      "api%2Dversion": apiVersion,
      "%24expand": context.expand,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _getDeserialize(result: PathUncheckedResponse): Promise<SavingsPlanModel> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return savingsPlanModelDeserializer(result.body);
}

/** Get savings plan. */
export async function get(
  context: Client,
  apiVersion: string,
  subscriptionId: string,
  resourceGroupName: string,
  savingsPlanOrderId: string,
  savingsPlanId: string,
  options: GetOptionalParams = { requestOptions: {} },
): Promise<SavingsPlanModel> {
  const result = await _getSend(
    context,
    apiVersion,
    subscriptionId,
    resourceGroupName,
    savingsPlanOrderId,
    savingsPlanId,
    options,
  );
  return _getDeserialize(result);
}
```