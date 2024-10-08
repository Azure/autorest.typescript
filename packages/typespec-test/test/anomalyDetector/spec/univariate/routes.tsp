import "@azure-tools/typespec-azure-core";
import "@typespec/rest";
import "./models.tsp";

using TypeSpec.Rest;
using TypeSpec.Http;

namespace AnomalyDetector.Univariate;

@post
@route("timeseries/entire/detect")
@summary("Detect anomalies for the entire series in batch.")
@doc("""
This operation generates a model with an entire series, each point is detected
with the same model. With this method, points before and after a certain point
are used to determine whether it is an anomaly. The entire detection can give
user an overall status of the time series.
""")
// To improve TypeSpec implementation apply: https://github.com/Azure/azure-rest-api-specs/issues/21527
op DetectUnivariateEntireSeries(
  @doc("Method of univariate anomaly detection.")
  @body options: UnivariateDetectionOptions,
): UnivariateEntireDetectionResult | AnomalyDetectorError;

@post
@route("timeseries/last/detect")
@summary("Detect anomaly status of the latest point in time series.")
@doc("""
This operation generates a model using the points that you sent into the API,
and based on all data to determine whether the last point is anomalous.
""")
// To improve TypeSpec implementation apply: https://github.com/Azure/azure-rest-api-specs/issues/21527
op DetectUnivariateLastPoint(
  @doc("Method of univariate anomaly detection.")
  @body options: UnivariateDetectionOptions,
): UnivariateLastDetectionResult | AnomalyDetectorError;

@post
@route("timeseries/changepoint/detect")
@summary("Detect change point for the entire series")
@doc("Evaluate change point score of every series point")
// To improve TypeSpec implementation apply: https://github.com/Azure/azure-rest-api-specs/issues/21527
op DetectUnivariateChangePoint(
  @doc("Method of univariate anomaly detection.")
  @body options: UnivariateChangePointDetectionOptions,
): UnivariateChangePointDetectionResult | AnomalyDetectorError;
