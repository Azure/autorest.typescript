import * as coreAuth from "@azure/core-auth";
import { Operations, Deployments, Providers, Resources, ResourceGroups, Tags, DeploymentOperations } from "./operationsInterfaces";
import { ResourceManagementClientContext } from "./resourceManagementClientContext";
import { ResourceManagementClientOptionalParams } from "./models";
export declare class ResourceManagementClient extends ResourceManagementClientContext {
    /**
     * Initializes a new instance of the ResourceManagementClient class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId The ID of the target subscription.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: ResourceManagementClientOptionalParams);
    operations: Operations;
    deployments: Deployments;
    providers: Providers;
    resources: Resources;
    resourceGroups: ResourceGroups;
    tags: Tags;
    deploymentOperations: DeploymentOperations;
}
//# sourceMappingURL=resourceManagementClient.d.ts.map