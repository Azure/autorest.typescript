import * as coreAuth from "@azure/core-auth";
import { Operations, ResourceLinks } from "./operationsInterfaces";
import { ManagementLinkClientContext } from "./managementLinkClientContext";
import { ManagementLinkClientOptionalParams } from "./models";
export declare class ManagementLinkClient extends ManagementLinkClientContext {
    /**
     * Initializes a new instance of the ManagementLinkClient class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId The ID of the target subscription.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: ManagementLinkClientOptionalParams);
    operations: Operations;
    resourceLinks: ResourceLinks;
}
//# sourceMappingURL=managementLinkClient.d.ts.map