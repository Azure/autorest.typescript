import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import { ComputeManagementClientOptionalParams } from "./models";
export declare class ComputeManagementClientContext extends coreClient.ServiceClient {
    $host: string;
    subscriptionId: string;
    /**
     * Initializes a new instance of the ComputeManagementClientContext class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription.
     *                       The subscription ID forms part of the URI for every service call.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: ComputeManagementClientOptionalParams);
}
//# sourceMappingURL=computeManagementClientContext.d.ts.map