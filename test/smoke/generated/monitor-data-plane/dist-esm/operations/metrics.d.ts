import { Metrics } from "../operationsInterfaces";
import { MonitorClientContext } from "../monitorClientContext";
import { AzureMetricsDocument, MetricsCreateOptionalParams, MetricsCreateResponse } from "../models";
/** Class representing a Metrics. */
export declare class MetricsImpl implements Metrics {
    private readonly client;
    /**
     * Initialize a new instance of the class Metrics class.
     * @param client Reference to the service client
     */
    constructor(client: MonitorClientContext);
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
//# sourceMappingURL=metrics.d.ts.map