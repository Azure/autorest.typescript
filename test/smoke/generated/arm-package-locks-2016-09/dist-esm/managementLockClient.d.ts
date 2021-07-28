import * as coreAuth from "@azure/core-auth";
import { AuthorizationOperations, ManagementLocks } from "./operationsInterfaces";
import { ManagementLockClientContext } from "./managementLockClientContext";
import { ManagementLockClientOptionalParams } from "./models";
export declare class ManagementLockClient extends ManagementLockClientContext {
    /**
     * Initializes a new instance of the ManagementLockClient class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId The ID of the target subscription.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: ManagementLockClientOptionalParams);
    authorizationOperations: AuthorizationOperations;
    managementLocks: ManagementLocks;
}
//# sourceMappingURL=managementLockClient.d.ts.map