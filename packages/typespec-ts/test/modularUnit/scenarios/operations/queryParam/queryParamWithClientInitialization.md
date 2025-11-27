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
@versioned(Versions)
@armCommonTypesVersion(Azure.ResourceManager.CommonTypes.Versions.v6)
namespace Microsoft.BillingBenefits;

/**
 * The available API versions.
 */
enum Versions {
  /**
   * The 2024-11-01-preview API version.
   */
  v2024_11_01_preview: "2024-11-01-preview",
}

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
ignoreWeirdLine: false
```

## clientContext

```ts clientContext
import { logger } from "../logger.js";
import { KnownVersions } from "../models/models.js";
import { Client, ClientOptions, getClient } from "@azure-rest/core-client";

export interface BillingBenefitsContext extends Client {
  /** The API version to use for this operation. */
  /** Known values of {@link KnownVersions} that the service accepts. */
  apiVersion: string;
  /** The expand query parameter. */
  expand?: string;
}

/** Optional parameters for the client. */
export interface BillingBenefitsClientOptionalParams extends ClientOptions {
  /** The API version to use for this operation. */
  /** Known values of {@link KnownVersions} that the service accepts. */
  apiVersion?: string;
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
  const apiVersion = options.apiVersion ?? "2024-11-01-preview";
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
  return { ...clientContext, apiVersion, expand: options.expand } as BillingBenefitsContext;
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
@versioned(Versions)
@armCommonTypesVersion(Azure.ResourceManager.CommonTypes.Versions.v6)
namespace Microsoft.BillingBenefits;

/**
 * The available API versions.
 */
enum Versions {
  /**
   * The 2024-11-01-preview API version.
   */
  v2024_11_01_preview: "2024-11-01-preview",
}

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
ignoreWeirdLine: false
```

## clientContext

```ts clientContext
import { logger } from "../logger.js";
import { KnownVersions } from "../models/models.js";
import { Client, ClientOptions, getClient } from "@azure-rest/core-client";

export interface BillingBenefitsContext extends Client {
  /** The API version to use for this operation. */
  /** Known values of {@link KnownVersions} that the service accepts. */
  apiVersion: string;
  /** The expand query parameter. */
  expand: string;
}

/** Optional parameters for the client. */
export interface BillingBenefitsClientOptionalParams extends ClientOptions {
  /** The API version to use for this operation. */
  /** Known values of {@link KnownVersions} that the service accepts. */
  apiVersion?: string;
}

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
  const apiVersion = options.apiVersion ?? "2024-11-01-preview";
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
  return { ...clientContext, apiVersion, expand } as BillingBenefitsContext;
}
```