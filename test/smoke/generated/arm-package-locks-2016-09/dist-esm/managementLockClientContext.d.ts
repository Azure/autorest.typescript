import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import { ManagementLockClientOptionalParams } from "./models";
export declare class ManagementLockClientContext extends coreClient.ServiceClient {
    $host: string;
    apiVersion: string;
    subscriptionId: string;
    /**
     * Initializes a new instance of the ManagementLockClientContext class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId The ID of the target subscription.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: ManagementLockClientOptionalParams);
}
//# sourceMappingURL=managementLockClientContext.d.ts.map