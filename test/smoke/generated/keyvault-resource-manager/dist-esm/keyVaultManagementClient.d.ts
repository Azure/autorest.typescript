import * as coreAuth from "@azure/core-auth";
import { Vaults, PrivateEndpointConnections, PrivateLinkResources, Operations } from "./operationsInterfaces";
import { KeyVaultManagementClientContext } from "./keyVaultManagementClientContext";
import { KeyVaultManagementClientOptionalParams } from "./models";
export declare class KeyVaultManagementClient extends KeyVaultManagementClientContext {
    /**
     * Initializes a new instance of the KeyVaultManagementClient class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription.
     *                       The subscription ID forms part of the URI for every service call.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: KeyVaultManagementClientOptionalParams);
    vaults: Vaults;
    privateEndpointConnections: PrivateEndpointConnections;
    privateLinkResources: PrivateLinkResources;
    operations: Operations;
}
//# sourceMappingURL=keyVaultManagementClient.d.ts.map