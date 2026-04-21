# only: Paged result model used in both paging and non-paging operations should not have \_ prefix

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
@armProviderNamespace
@service
@versioned(Versions)
@armCommonTypesVersion(Azure.ResourceManager.CommonTypes.Versions.v5)
namespace Microsoft.Test;
enum Versions {
  v2023_12_01: "2023-12-01",
}
model TestResource is TrackedResource<TestProperties> {
  @key("testName")
  @path
  @segment("tests")
  name: string;
}
model TestProperties {
  state?: string;
}

model UsageListResult {
  @nextLink
  nextLink?: string;
  @pageItems
  value?: Usage[];
}
model Usage {
  test?: string;
}

// Paging operation: uses @list so UsageListResult is treated as a paged result
interface UsagesOperationGroup {
  @autoRoute
  @get
  @action("usages")
  @list
  list is ArmProviderActionSync<
    Response = UsageListResult,
    Scope = SubscriptionActionScope,
    Parameters = {
      ...LocationParameter;
    }
  >;
}

// Non-paging operation: no @list, returns UsageListResult directly
@armResourceOperations
interface TestResources {
  @action("usages")
  listUsages is ArmResourceActionSync<
    TestResource,
    Request = void,
    Response = ArmResponse<UsageListResult>,
    BaseParameters = Azure.ResourceManager.Foundations.DefaultBaseParameters<TestResource>
  >;
}
```

```yaml
withRawContent: true
```

## ts models

```ts models
/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface UsageListResult */
export interface UsageListResult {
  nextLink?: string;
  value?: Usage[];
}

export function usageListResultDeserializer(item: any): UsageListResult {
  return {
    nextLink: item["nextLink"],
    value: !item["value"] ? item["value"] : usageArrayDeserializer(item["value"]),
  };
}

export function usageArrayDeserializer(result: Array<Usage>): any[] {
  return result.map((item) => {
    return usageDeserializer(item);
  });
}

/** model interface Usage */
export interface Usage {
  test?: string;
}

export function usageDeserializer(item: any): Usage {
  return {
    test: item["test"],
  };
}

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. */
export interface ErrorResponse {
  /** The error object. */
  error?: ErrorDetail;
}

export function errorResponseDeserializer(item: any): ErrorResponse {
  return {
    error: !item["error"] ? item["error"] : errorDetailDeserializer(item["error"]),
  };
}

/** The error detail. */
export interface ErrorDetail {
  /** The error code. */
  readonly code?: string;
  /** The error message. */
  readonly message?: string;
  /** The error target. */
  readonly target?: string;
  /** The error details. */
  readonly details?: ErrorDetail[];
  /** The error additional info. */
  readonly additionalInfo?: ErrorAdditionalInfo[];
}

export function errorDetailDeserializer(item: any): ErrorDetail {
  return {
    code: item["code"],
    message: item["message"],
    target: item["target"],
    details: !item["details"] ? item["details"] : errorDetailArrayDeserializer(item["details"]),
    additionalInfo: !item["additionalInfo"]
      ? item["additionalInfo"]
      : errorAdditionalInfoArrayDeserializer(item["additionalInfo"]),
  };
}

export function errorDetailArrayDeserializer(result: Array<ErrorDetail>): any[] {
  return result.map((item) => {
    return errorDetailDeserializer(item);
  });
}

export function errorAdditionalInfoArrayDeserializer(result: Array<ErrorAdditionalInfo>): any[] {
  return result.map((item) => {
    return errorAdditionalInfoDeserializer(item);
  });
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfo {
  /** The additional info type. */
  readonly type?: string;
  /** The additional info. */
  readonly info?: any;
}

export function errorAdditionalInfoDeserializer(item: any): ErrorAdditionalInfo {
  return {
    type: item["type"],
    info: item["info"],
  };
}

/** Known values of {@link Versions} that the service accepts. */
export enum KnownVersions {
  /** 2023-12-01 */
  V20231201 = "2023-12-01",
}
```
