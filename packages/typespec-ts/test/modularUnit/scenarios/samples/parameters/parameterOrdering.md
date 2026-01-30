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
withVersionedApiVersion: true
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import {
  TestVerificationContent,
  testVerificationContentSerializer,
  TestVerificationResult,
  testVerificationResultDeserializer
} from "../models/models.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { VerifyOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters
} from "@azure-rest/core-client";

export function _verifySend(
  context: Client,
  body: TestVerificationContent,
  apcGatewayId: string,
  options: VerifyOptionalParams = { requestOptions: {} }
): StreamableMethod {
  const path = expandUrlTemplate(
    "/device-location/location:verify{?api%2Dversion}",
    {
      "api%2Dversion": context.apiVersion ?? "2022-05-15-preview"
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding
    }
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      ...(options?.clientRequestId !== undefined
        ? { "x-ms-client-request-id": options?.clientRequestId }
        : {}),
      "apc-gateway-id": apcGatewayId,
      accept: "application/json",
      ...options.requestOptions?.headers
    },
    body: testVerificationContentSerializer(body)
  });
}

export async function _verifyDeserialize(
  result: PathUncheckedResponse
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
  body: TestVerificationContent,
  apcGatewayId: string,
  options: VerifyOptionalParams = { requestOptions: {} }
): Promise<TestVerificationResult> {
  const result = await _verifySend(context, body, apcGatewayId, options);
  return _verifyDeserialize(result);
}
```

## Example

Raw json files.

```json
{
  "title": "verify",
  "operationId": "DeviceLocation_Verify",
  "parameters": {
    "body": {
      "message": "test message"
    },
    "apc-gateway-id": "zdgrzzaxlodrvewbksn"
  },
  "responses": {
    "200": {
      "body": {
        "result": "success"
      }
    }
  }
}
```

## Samples

```ts samples
/** This file path is /samples-dev/verifySample.ts */
import { TestingClient } from "@azure/internal-test";

/**
 * This sample demonstrates how to resource action operation template.
 *
 * @summary resource action operation template.
 * x-ms-original-file: 2021-10-01-preview/json.json
 */
async function verify(): Promise<void> {
  const endpoint = process.env.TESTING_ENDPOINT || "";
  const client = new TestingClient(endpoint);
  const result = await client.verify(
    { message: "test message" },
    "zdgrzzaxlodrvewbksn"
  );
  console.log(result);
}

async function main(): Promise<void> {
  await verify();
}

main().catch(console.error);
```
