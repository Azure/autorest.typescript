import { ClientOptions } from "@azure-rest/core-client";
import { TokenCredential } from "@azure/core-auth";
import { EasmClient } from "./clientDefinitions.js";
/**
 * Initialize a new instance of `EasmClient`
 * @param endpointParam - The endpoint hosting the requested resource. For example, https://{region}.easm.defender.microsoft.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/workspaces/{workspaceName}
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(endpointParam: string, credentials: TokenCredential, options?: ClientOptions): EasmClient;
//# sourceMappingURL=easmClient.d.ts.map