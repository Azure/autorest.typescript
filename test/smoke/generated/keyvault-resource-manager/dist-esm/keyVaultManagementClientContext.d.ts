import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import { KeyVaultManagementClientOptionalParams } from "./models";
export declare class KeyVaultManagementClientContext extends coreClient.ServiceClient {
    $host: string;
    apiVersion: string;
    subscriptionId: string;
    /**
     * Initializes a new instance of the KeyVaultManagementClientContext class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription.
     *                       The subscription ID forms part of the URI for every service call.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: KeyVaultManagementClientOptionalParams);
}
//# sourceMappingURL=keyVaultManagementClientContext.d.ts.map