import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import { ManagementLinkClientOptionalParams } from "./models";
export declare class ManagementLinkClientContext extends coreClient.ServiceClient {
    $host: string;
    apiVersion: string;
    subscriptionId: string;
    /**
     * Initializes a new instance of the ManagementLinkClientContext class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId The ID of the target subscription.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: ManagementLinkClientOptionalParams);
}
//# sourceMappingURL=managementLinkClientContext.d.ts.map