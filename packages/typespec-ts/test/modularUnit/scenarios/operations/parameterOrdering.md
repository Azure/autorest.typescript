# Parameter ordering with Azure Core ResourceAction and RequestHeadersTrait

## TypeSpec

```tsp
using Azure.Core.Traits;

model ApcGatewayIdHeader {
  @header("apc-gateway-id")
  apcGatewayId: string;
}

alias ServiceTraits = NoRepeatableRequests &
  NoConditionalRequests &
  SupportsClientRequestId &
  RequestHeadersTrait<ApcGatewayIdHeader>;

alias Operations = Azure.Core.ResourceOperations<
  ServiceTraits,
  Azure.Core.Foundations.ErrorResponse
>;

alias BodyParameter<
  T,
  TName extends valueof string = "body",
  TDoc extends valueof string = "Body parameter."
> = {
  @doc(TDoc)
  @friendlyName(TName)
  @bodyRoot
  body: T;
};

model TestVerificationContent {
  message: string;
}

model TestVerificationResult {
  result: string;
}

@resource("device-location")
model DeviceLocationEndpoint {
  @key
  @visibility(Lifecycle.Read)
  location: "location";
}

interface DeviceLocation {
  verify is Operations.ResourceAction<
    DeviceLocationEndpoint,
    BodyParameter<TestVerificationContent>,
    TestVerificationResult
  >;
}
```

The config would be like:

```yaml
needAzureCore: true
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import {
  TestVerificationContent,
  testVerificationContentSerializer,
  TestVerificationResult,
  testVerificationResultDeserializer,
} from "../models/models.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { VerifyOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _verifySend(
  context: Client,
  apcGatewayId: string,
  body: TestVerificationContent,
  options: VerifyOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/device-location/location:verify{?api%2Dversion}",
    {
      "api%2Dversion": context.apiVersion,
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
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "x-ms-client-request-id": options?.clientRequestId }
          : {}),
        "apc-gateway-id": apcGatewayId,
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: testVerificationContentSerializer(body),
    });
}

export async function _verifyDeserialize(
  result: PathUncheckedResponse,
): Promise<TestVerificationResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testVerificationResultDeserializer(result.body);
}

/** Resource action operation template. */
export async function verify(
  context: Client,
  apcGatewayId: string,
  body: TestVerificationContent,
  options: VerifyOptionalParams = { requestOptions: {} },
): Promise<TestVerificationResult> {
  const result = await _verifySend(context, apcGatewayId, body, options);
  return _verifyDeserialize(result);
}
```
