# should generate parameter name normalization for reserved keywords in spread body operations

## Typespec

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
using Azure.ClientGenerator.Core;

/** Microsoft.Contoso Resource Provider management API. */
@armProviderNamespace
@service(#{
  title: "Microsoft.Contoso management service",
})
namespace Microsoft.Contoso;

/**
 * Resource type used for verification.
 */
union CheckNameResourceTypes {
  string,
  #suppress "@azure-tools/typespec-azure-core/documentation-required" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
  Site: "Site",
  #suppress "@azure-tools/typespec-azure-core/documentation-required" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
  Slot: "Slot",
  #suppress "@azure-tools/typespec-azure-core/documentation-required" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
  HostingEnvironment: "HostingEnvironment",
  #suppress "@azure-tools/typespec-azure-core/documentation-required" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
  PublishingUser: "PublishingUser",
  #suppress "@azure-tools/typespec-azure-core/documentation-required" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
  `Microsoft.Web/sites`: "Microsoft.Web/sites",
  #suppress "@azure-tools/typespec-azure-core/documentation-required" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
  `Microsoft.Web/sites/slots`: "Microsoft.Web/sites/slots",
  #suppress "@azure-tools/typespec-azure-core/documentation-required" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
  `Microsoft.Web/hostingEnvironments`: "Microsoft.Web/hostingEnvironments",
  #suppress "@azure-tools/typespec-azure-core/documentation-required" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
  `Microsoft.Web/publishingUsers`: "Microsoft.Web/publishingUsers",
}

/**
 * Resource name availability request content.
 */
model ResourceNameAvailabilityRequest {
  /**
   * Resource name to verify.
   */
  name: string;

  /**
   * Resource type used for verification.
   */
  type: CheckNameResourceTypes;

  /**
   * Is fully qualified domain name.
   */
  isFqdn?: boolean;

  /**
   * Azure Resource Manager ID of the customer's selected Container Apps Environment on which to host the Function app. This must be of the form /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.App/managedEnvironments/{managedEnvironmentName}
   */
  environmentId?: string;
}

/**
 * Information regarding availability of a resource name.
 */
model ResourceNameAvailability {
  /**
   * <code>true</code> indicates name is valid and available. <code>false</code> indicates the name is invalid, unavailable, or both.
   */
  nameAvailable?: boolean;


  /**
   * If reason == invalid, provide the user with the reason why the given name is invalid, and provide the resource naming requirements so that the user can select a valid name. If reason == AlreadyExists, explain that resource name is already in use, and direct them to select a different name.
   */
  message?: string;
}

#suppress "@azure-tools/typespec-azure-resource-manager/arm-resource-operation" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@summary("Check if a resource name is available.")
@autoRoute
@action("checknameavailability")
op checkNameAvailability is ArmProviderActionSync<
  Request = ResourceNameAvailabilityRequest,
  Response = ResourceNameAvailability,
  Scope = SubscriptionActionScope
>;

op checkNameAvailabilityCustomized(
  ...Azure.ResourceManager.CommonTypes.ApiVersionParameter,
  ...Azure.ResourceManager.CommonTypes.SubscriptionIdParameter,
  ...Azure.ResourceManager.Legacy.Provider,

  @doc("Resource name to verify.")
  name: string,

  @doc("Resource type used for verification.")
  type: CheckNameResourceTypes,

  @doc("Is fully qualified domain name.")
  isFqdn?: boolean,

  @doc("Azure Resource Manager ID of the customer's selected Container Apps Environment on which to host the Function app. This must be of the form /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.App/managedEnvironments/{managedEnvironmentName}.")
  environmentId?: string,
): ResourceNameAvailability;

@@override(checkNameAvailability,
  checkNameAvailabilityCustomized,
  "javascript"
);
```

This is the tspconfig.yaml.

```yaml
withRawContent: true
```

## Operations

```ts operations
import { ContosoContext as Client } from "./index.js";
import {
  CheckNameResourceTypes,
  ResourceNameAvailability,
  resourceNameAvailabilityDeserializer,
  errorResponseDeserializer,
} from "../models/models.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { CheckNameAvailabilityOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _checkNameAvailabilitySend(
  context: Client,
  apiVersion: string,
  name: string,
  typeParam: CheckNameResourceTypes,
  options: CheckNameAvailabilityOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.ThisWillBeReplaced/checknameavailability{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      "api%2Dversion": apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: { accept: "application/json", ...options.requestOptions?.headers },
      body: {
        name: name,
        type: typeParam,
        isFqdn: options?.isFqdn,
        environmentId: options?.environmentId,
      },
    });
}

export async function _checkNameAvailabilityDeserialize(
  result: PathUncheckedResponse,
): Promise<ResourceNameAvailability> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return resourceNameAvailabilityDeserializer(result.body);
}

export async function checkNameAvailability(
  context: Client,
  apiVersion: string,
  name: string,
  typeParam: CheckNameResourceTypes,
  options: CheckNameAvailabilityOptionalParams = { requestOptions: {} },
): Promise<ResourceNameAvailability> {
  const result = await _checkNameAvailabilitySend(context, apiVersion, name, typeParam, options);
  return _checkNameAvailabilityDeserialize(result);
}
```

## Model

```ts models
/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** Resource name availability request content. */
export interface ResourceNameAvailabilityRequest {
  /** Resource name to verify. */
  name: string;
  /** Resource type used for verification. */
  type: CheckNameResourceTypes;
  /** Is fully qualified domain name. */
  isFqdn?: boolean;
  /** Azure Resource Manager ID of the customer's selected Container Apps Environment on which to host the Function app. This must be of the form /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.App/managedEnvironments/{managedEnvironmentName} */
  environmentId?: string;
}

export function resourceNameAvailabilityRequestSerializer(
  item: ResourceNameAvailabilityRequest,
): any {
  return {
    name: item["name"],
    type: item["type"],
    isFqdn: item["isFqdn"],
    environmentId: item["environmentId"],
  };
}

/** Resource type used for verification. */
export type CheckNameResourceTypes =
  | "Site"
  | "Slot"
  | "HostingEnvironment"
  | "PublishingUser"
  | "Microsoft.Web/sites"
  | "Microsoft.Web/sites/slots"
  | "Microsoft.Web/hostingEnvironments"
  | "Microsoft.Web/publishingUsers";

/** Information regarding availability of a resource name. */
export interface ResourceNameAvailability {
  /** <code>true</code> indicates name is valid and available. <code>false</code> indicates the name is invalid, unavailable, or both. */
  nameAvailable?: boolean;
  /** If reason == invalid, provide the user with the reason why the given name is invalid, and provide the resource naming requirements so that the user can select a valid name. If reason == AlreadyExists, explain that resource name is already in use, and direct them to select a different name. */
  message?: string;
}

export function resourceNameAvailabilityDeserializer(item: any): ResourceNameAvailability {
  return {
    nameAvailable: item["nameAvailable"],
    message: item["message"],
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
```

## Model

```ts models:withOptions
import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface CheckNameAvailabilityOptionalParams extends OperationOptions {
  /** Is fully qualified domain name. */
  isFqdn?: boolean;
  /** Azure Resource Manager ID of the customer's selected Container Apps Environment on which to host the Function app. This must be of the form /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.App/managedEnvironments/{managedEnvironmentName}. */
  environmentId?: string;
}
```