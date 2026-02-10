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

model ResourceNameAvailabilityRequest {
  name: string;
  type: string;
}

@summary("Check if a resource name is available.")
@autoRoute
@action("checknameavailability")
op checkNameAvailability is ArmProviderActionSync<
  Request = ResourceNameAvailabilityRequest,
  Response = void,
  Scope = SubscriptionActionScope
>;

op checkNameAvailabilityCustomized(
  ...Azure.ResourceManager.CommonTypes.ApiVersionParameter,
  ...Azure.ResourceManager.CommonTypes.SubscriptionIdParameter,
  ...Azure.ResourceManager.Legacy.Provider,

  name: string,
  type: string,
): void;

@@override(checkNameAvailability,checkNameAvailabilityCustomized);
```

This is the tspconfig.yaml.

```yaml
withRawContent: true
```

## Operations

```ts operations
import { errorResponseDeserializer } from "../models/models.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { ContosoContext } from "./contosoContext.js";
import { CheckNameAvailabilityOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _checkNameAvailabilitySend(
  context: ContosoContext,
  apiVersion: string,
  name: string,
  typeParam: string,
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
      body: { name: name, type: typeParam },
    });
}

export async function _checkNameAvailabilityDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

export async function checkNameAvailability(
  context: ContosoContext,
  apiVersion: string,
  name: string,
  typeParam: string,
  options: CheckNameAvailabilityOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _checkNameAvailabilitySend(context, apiVersion, name, typeParam, options);
  return _checkNameAvailabilityDeserialize(result);
}
```