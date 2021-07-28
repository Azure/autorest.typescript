import * as coreAuth from "@azure/core-auth";
import { DeploymentScripts } from "./operationsInterfaces";
import { DeploymentScriptsClientContext } from "./deploymentScriptsClientContext";
import { DeploymentScriptsClientOptionalParams } from "./models";
export declare class DeploymentScriptsClient extends DeploymentScriptsClientContext {
    /**
     * Initializes a new instance of the DeploymentScriptsClient class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId Subscription Id which forms part of the URI for every service call.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: DeploymentScriptsClientOptionalParams);
    deploymentScripts: DeploymentScripts;
}
//# sourceMappingURL=deploymentScriptsClient.d.ts.map