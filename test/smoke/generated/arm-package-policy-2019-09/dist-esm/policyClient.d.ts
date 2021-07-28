import * as coreAuth from "@azure/core-auth";
import { PolicyAssignments, PolicyDefinitions, PolicySetDefinitions } from "./operationsInterfaces";
import { PolicyClientContext } from "./policyClientContext";
import { PolicyClientOptionalParams } from "./models";
export declare class PolicyClient extends PolicyClientContext {
    /**
     * Initializes a new instance of the PolicyClient class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId The ID of the target subscription.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: PolicyClientOptionalParams);
    policyAssignments: PolicyAssignments;
    policyDefinitions: PolicyDefinitions;
    policySetDefinitions: PolicySetDefinitions;
}
//# sourceMappingURL=policyClient.d.ts.map