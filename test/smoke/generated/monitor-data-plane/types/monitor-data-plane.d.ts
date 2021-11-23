import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';

export declare interface ApiError {
    /** Gets or sets the azure metrics error code */
    code?: string;
    /** Gets or sets the azure metrics error message */
    message?: string;
}

export declare interface ApiFailureResponse {
    error?: ApiError;
}

export declare interface AzureMetricsBaseData {
    /** Gets or sets the Metric name */
    metric: string;
    /** Gets or sets the Metric namespace */
    namespace: string;
    /** Gets or sets the list of dimension names (optional) */
    dimNames?: string[];
    /** Gets or sets the list of time series data for the metric (one per unique dimension combination) */
    series: AzureTimeSeriesData[];
}

export declare interface AzureMetricsData {
    baseData: AzureMetricsBaseData;
}

export declare interface AzureMetricsDocument {
    /** Gets or sets Time property (in ISO 8601 format) */
    time: string;
    data: AzureMetricsData;
}

export declare interface AzureMetricsResult {
    /** Http status code response */
    statusCode?: number;
    apiFailureResponse?: ApiFailureResponse;
}

export declare interface AzureTimeSeriesData {
    /** Gets or sets dimension values */
    dimValues?: string[];
    /** Gets or sets Min value */
    min: number;
    /** Gets or sets Max value */
    max: number;
    /** Gets or sets Sum value */
    sum: number;
    /** Gets or sets Count value */
    count: number;
}

/** Interface representing a Metrics. */
export declare interface Metrics {
    /**
     * **Post the metric values for a resource**.
     * @param contentType Supports application/json and application/x-ndjson
     * @param contentLength Content length of the payload
     * @param authorization Authorization token issue for issued for audience
     *                      "https:\\monitoring.azure.com\"
     * @param subscriptionId The azure subscription id
     * @param resourceGroupName The ARM resource group name
     * @param resourceProvider The ARM resource provider name
     * @param resourceTypeName The ARM resource type name
     * @param resourceName The ARM resource name
     * @param body The Azure metrics document json payload
     * @param options The options parameters.
     */
    create(contentType: string, contentLength: number, authorization: string, subscriptionId: string, resourceGroupName: string, resourceProvider: string, resourceTypeName: string, resourceName: string, body: AzureMetricsDocument, options?: MetricsCreateOptionalParams): Promise<MetricsCreateResponse>;
}

/** Optional parameters. */
export declare interface MetricsCreateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the create operation. */
export declare type MetricsCreateResponse = AzureMetricsResult;

export declare class MonitorClient extends coreClient.ServiceClient {
    $host: string;
    /**
     * Initializes a new instance of the MonitorClient class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, options?: MonitorClientOptionalParams);
    metrics: Metrics;
}

/** Optional parameters. */
export declare interface MonitorClientOptionalParams extends coreClient.ServiceClientOptions {
    /** server parameter */
    $host?: string;
    /** Overrides client endpoint. */
    endpoint?: string;
}

export { }
