import * as coreAuth from "@azure/core-auth";
import { Applications, ApplicationDefinitions } from "./operationsInterfaces";
import { ApplicationClientContext } from "./applicationClientContext";
import { ApplicationClientOptionalParams } from "./models";
export declare class ApplicationClient extends ApplicationClientContext {
    /**
     * Initializes a new instance of the ApplicationClient class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId The ID of the target subscription.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: ApplicationClientOptionalParams);
    applications: Applications;
    applicationDefinitions: ApplicationDefinitions;
}
//# sourceMappingURL=applicationClient.d.ts.map