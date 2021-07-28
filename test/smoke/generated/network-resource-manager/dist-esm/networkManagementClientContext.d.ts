import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import { NetworkManagementClientOptionalParams } from "./models";
export declare class NetworkManagementClientContext extends coreClient.ServiceClient {
    $host: string;
    subscriptionId: string;
    /**
     * Initializes a new instance of the NetworkManagementClientContext class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId The subscription credentials which uniquely identify the Microsoft Azure
     *                       subscription. The subscription ID forms part of the URI for every service call.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: NetworkManagementClientOptionalParams);
}
//# sourceMappingURL=networkManagementClientContext.d.ts.map