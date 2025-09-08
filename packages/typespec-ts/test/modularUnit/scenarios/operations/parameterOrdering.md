# parameter ordering - header parameters should come before body parameters

## TypeSpec

```tsp
model TestVerificationContent {
  message: string;
}

model TestVerificationResult {
  result: string;
}

op verify(
  @header("apc-gateway-id") apcGatewayId: string,
  @body body: TestVerificationContent
): TestVerificationResult;
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import {
  testVerificationContentSerializer,
  TestVerificationResult,
  testVerificationResultDeserializer,
} from "../models/models.js";
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
  options: VerifyOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
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

export async function verify(
  context: Client,
  apcGatewayId: string,
  options: VerifyOptionalParams = { requestOptions: {} },
): Promise<TestVerificationResult> {
  const result = await _verifySend(context, apcGatewayId, options);
  return _verifyDeserialize(result);
}
```