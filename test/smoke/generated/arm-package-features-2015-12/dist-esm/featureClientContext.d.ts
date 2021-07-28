import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import { FeatureClientOptionalParams } from "./models";
export declare class FeatureClientContext extends coreClient.ServiceClient {
    $host: string;
    apiVersion: string;
    subscriptionId: string;
    /**
     * Initializes a new instance of the FeatureClientContext class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId The ID of the target subscription.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: FeatureClientOptionalParams);
}
//# sourceMappingURL=featureClientContext.d.ts.map