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
  ApiKeyAuth<ApiKeyLocation.header, "Ocp-Apim-Subscription-Key">
)
@versioned(APIVersion)
@service(#{ title: "Anomaly Detector" })
@server(
  "{Endpoint}/anomalydetector/{ApiVersion}",
  "Test service to reproduce missing response model issue.",
  {
    @doc("Supported endpoint.")
    Endpoint: string,
    
    @doc("Api Version")
    @path
    ApiVersion: APIVersion,
  }
)
@doc("Test service to reproduce missing response model issue.")
namespace AnomalyDetector;

enum APIVersion {
  v1_1: "v1.1",
}

@post
@doc("Operation template for univariate anomaly detection service action.")
op UnivariateServiceAction<TParams, TResponse>(
  ...TParams,
): TResponse | AnomalyDetectorError;

#suppress "@azure-tools/typespec-azure-core/use-standard-operations" "Azure core RpcOperation does not support custom error response"
@route("timeseries/entire/detect")
@summary("Detect anomalies for the entire series in batch.")
op detectUnivariateEntireSeries is UnivariateServiceAction<
  // TParams
  {
    @bodyRoot
    options: UnivariateDetectionOptions;
  },
  // TResponse
  UnivariateEntireDetectionResult
>;
model UnivariateEntireDetectionResult {
  period: int32;

  expectedValues: float32[];
  upperMargins: float32[];
  lowerMargins: float32[];
  isAnomaly: boolean[];
  isNegativeAnomaly: boolean[];
  isPositiveAnomaly: boolean[];
  severity?: float32[];
}

model UnivariateDetectionOptions {
  
  granularity?: string;
  
  customInterval?: int32;
  
  period?: int32;
  
  maxAnomalyRatio?: float32;
  
  sensitivity?: int32;
}

@doc("Error information that the API returned.")
@error
model AnomalyDetectorError {
  @header("x-ms-error-code")
  @doc("Error code.")
  msErrorCode: string;
  
  @doc("Error code.")
  code: string;
  
  message: string;
}
@@convenientAPI(AnomalyDetector.detectUnivariateEntireSeries, false);
```

```yaml
withRawContent: true
mustEmptyDiagnostic: false
```

## Models

```ts models
/** Type of APIVersion */
export type APIVersion = "v1.1";
```

## Operations

```ts operations
import { AnomalyDetectorContext as Client } from "./index.js";
import { DetectUnivariateEntireSeriesOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _detectUnivariateEntireSeriesSend(
  context: Client,
  options: __PLACEHOLDER_o24__,
  optionalParams: DetectUnivariateEntireSeriesOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/timeseries/entire/detect")
    .post({
      ...operationOptionsToRequestParameters(optionalParams),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...optionalParams.requestOptions?.headers,
      },
      body: {
        granularity: options?.granularity,
        customInterval: options?.customInterval,
        period: options?.period,
        maxAnomalyRatio: options?.maxAnomalyRatio,
        sensitivity: options?.sensitivity,
      },
    });
}

export async function _detectUnivariateEntireSeriesDeserialize(
  result: PathUncheckedResponse,
): Promise<__PLACEHOLDER_o25__> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    period: ["period"],
    expectedValues: ["expectedValues"].map((p: any) => {
      return p;
    }),
    upperMargins: ["upperMargins"].map((p: any) => {
      return p;
    }),
    lowerMargins: ["lowerMargins"].map((p: any) => {
      return p;
    }),
    isAnomaly: ["isAnomaly"].map((p: any) => {
      return p;
    }),
    isNegativeAnomaly: ["isNegativeAnomaly"].map((p: any) => {
      return p;
    }),
    isPositiveAnomaly: ["isPositiveAnomaly"].map((p: any) => {
      return p;
    }),
    severity: !["severity"]
      ? ["severity"]
      : ["severity"].map((p: any) => {
          return p;
        }),
  };
}

/** Operation template for univariate anomaly detection service action. */
export async function detectUnivariateEntireSeries(
  context: Client,
  options: __PLACEHOLDER_o24__,
  optionalParams: DetectUnivariateEntireSeriesOptionalParams = {
    requestOptions: {},
  },
): Promise<__PLACEHOLDER_o25__> {
  const result = await _detectUnivariateEntireSeriesSend(
    context,
    options,
    optionalParams,
  );
  return _detectUnivariateEntireSeriesDeserialize(result);
}
```