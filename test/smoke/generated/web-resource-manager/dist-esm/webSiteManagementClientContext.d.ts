import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import { WebSiteManagementClientOptionalParams } from "./models";
export declare class WebSiteManagementClientContext extends coreClient.ServiceClient {
    $host: string;
    subscriptionId: string;
    apiVersion: string;
    /**
     * Initializes a new instance of the WebSiteManagementClientContext class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g.
     *                       00000000-0000-0000-0000-000000000000).
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: WebSiteManagementClientOptionalParams);
}
//# sourceMappingURL=webSiteManagementClientContext.d.ts.map