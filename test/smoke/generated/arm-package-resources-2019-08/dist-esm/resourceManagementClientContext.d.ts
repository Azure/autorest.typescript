import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import { ResourceManagementClientOptionalParams } from "./models";
export declare class ResourceManagementClientContext extends coreClient.ServiceClient {
    $host: string;
    apiVersion: string;
    subscriptionId: string;
    /**
     * Initializes a new instance of the ResourceManagementClientContext class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId The ID of the target subscription.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: ResourceManagementClientOptionalParams);
}
//# sourceMappingURL=resourceManagementClientContext.d.ts.map