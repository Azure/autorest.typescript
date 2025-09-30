# Missing response model causes placeholder generation issue

## TypeSpec

```tsp
import "@typespec/http";
import "@typespec/rest";
import "@azure-tools/typespec-azure-core";
import "@typespec/versioning";
import "@azure-tools/typespec-client-generator-core";

using TypeSpec.Http;
using TypeSpec.Rest;
using Azure.Core;
using TypeSpec.Versioning;
using Azure.ClientGenerator.Core;

@useAuth(
  OAuth2Auth<[
    {
      @doc("implicit flow")
      type: OAuth2FlowType.implicit,
      @doc("the authorization URL")
      authorizationUrl: "https://login.microsoftonline.com/common/oauth2/authorize",
      @doc("list of scopes for the credential")
      scopes: ["https://example.com/.default"],
    }
  ]>
)
@versioned(TestService.Versions)
@service(#{ title: "Test Service" })
@server(
  "{endpoint}",
  "",
  {
    @doc("The endpoint hosting the requested resource.")
    endpoint: string,
  }
)
@doc("Test service to reproduce missing response model issue.")
namespace TestService;

@doc("The Test service version.")
enum Versions {
  @doc("Version 2023-03-01-preview")
  v2023_03_01_preview: "2023-03-01-preview",
}

@doc("Request options.")
model DetectionOptions {
  @doc("Data points for detection.")
  series: TimeSeriesPoint[];
  
  @doc("Detection granularity.")
  granularity?: string;
}

@doc("Time series data point.")
model TimeSeriesPoint {
  @doc("Timestamp.")
  timestamp?: utcDateTime;
  
  @doc("Value.")
  value: float32;
}

@doc("Detection result with severity issue.")
model DetectionResult {
  @doc("Period value.")
  period: int32;
  
  @doc("Expected values.")
  expectedValues: float32[];
  
  @doc("Is anomaly flags.")
  isAnomaly: boolean[];
  
  @doc("Severity scores - optional array that causes generation issue.")
  severity?: float32[];
}

@doc("Error information.")
@error
model ServiceError {
  @doc("Error code.")
  code: string;
  
  @doc("Error message.")
  message: string;
}

interface Operations {
  @doc("Perform detection operation")
  @route("/detect")
  @post
  detect(@bodyRoot options: DetectionOptions): DetectionResult | ServiceError;
}
```

```yaml
withRawContent: true
```

## Models

```ts models
/** Request options. */
export interface DetectionOptions {
  /** Data points for detection. */
  series: TimeSeriesPoint[];
  /** Detection granularity. */
  granularity?: string;
}

export function detectionOptionsSerializer(item: DetectionOptions): any {
  return {
    series: timeSeriesPointArraySerializer(item["series"]),
    granularity: item["granularity"],
  };
}

export function timeSeriesPointArraySerializer(
  result: Array<TimeSeriesPoint>,
): any[] {
  return result.map((item) => {
    return timeSeriesPointSerializer(item);
  });
}

/** Time series data point. */
export interface TimeSeriesPoint {
  /** Timestamp. */
  timestamp?: Date;
  /** Value. */
  value: number;
}

export function timeSeriesPointSerializer(item: TimeSeriesPoint): any {
  return {
    timestamp: !item["timestamp"]
      ? item["timestamp"]
      : item["timestamp"].toISOString(),
    value: item["value"],
  };
}

/** Error information. */
export interface ServiceError {
  /** Error code. */
  code: string;
  /** Error message. */
  message: string;
}

export function serviceErrorDeserializer(item: any): ServiceError {
  return {
    code: item["code"],
    message: item["message"],
  };
}

/** Detection result with severity issue. */
export interface DetectionResult {
  /** Period value. */
  period: number;
  /** Expected values. */
  expectedValues: number[];
  /** Is anomaly flags. */
  isAnomaly: boolean[];
  /** Severity scores - optional array that causes generation issue. */
  severity?: number[];
}

export function detectionResultDeserializer(item: any): DetectionResult {
  return {
    period: item["period"],
    expectedValues: ["expectedValues"].map((p: any) => {
      return p;
    }),
    isAnomaly: ["isAnomaly"].map((p: any) => {
      return p;
    }),
    severity: !["severity"]
      ? ["severity"]
      : ["severity"].map((p: any) => {
          return p;
        }),
  };
}
```

## Operations

```ts operations
import { TestServiceContext as Client } from "./index.js";
import {
  DetectionOptions,
  detectionOptionsSerializer,
  DetectionResult,
  detectionResultDeserializer,
  serviceErrorDeserializer,
} from "../models/models.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { DetectOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _detectSend(
  context: Client,
  options: DetectionOptions,
  optionalParams: DetectOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/detect{?api%2Dversion}",
    { "api%2Dversion": context.apiVersion },
    { allowReserved: optionalParams?.requestOptions?.skipUrlEncoding },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(optionalParams),
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        ...optionalParams.requestOptions?.headers,
      },
      body: detectionOptionsSerializer(options),
    });
}

export async function _detectDeserialize(
  result: PathUncheckedResponse,
): Promise<DetectionResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = serviceErrorDeserializer(result.body);
    throw error;
  }

  return detectionResultDeserializer(result.body);
}

/** Perform detection operation */
export async function detect(
  context: Client,
  options: DetectionOptions,
  optionalParams: DetectOptionalParams = { requestOptions: {} },
): Promise<DetectionResult> {
  const result = await _detectSend(context, options, optionalParams);
  return _detectDeserialize(result);
}
```