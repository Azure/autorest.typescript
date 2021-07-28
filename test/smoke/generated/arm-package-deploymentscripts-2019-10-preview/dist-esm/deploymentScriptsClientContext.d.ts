import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import { DeploymentScriptsClientOptionalParams } from "./models";
export declare class DeploymentScriptsClientContext extends coreClient.ServiceClient {
    $host: string;
    subscriptionId: string;
    apiVersion: string;
    /**
     * Initializes a new instance of the DeploymentScriptsClientContext class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId Subscription Id which forms part of the URI for every service call.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: DeploymentScriptsClientOptionalParams);
}
//# sourceMappingURL=deploymentScriptsClientContext.d.ts.map