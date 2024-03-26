import { ClientOptions } from "@azure-rest/core-client";
import { TokenCredential } from "@azure/core-auth";
import { ParametrizedHostContext } from "./clientDefinitions.js";
export interface ParametrizedHostContextOptions extends ClientOptions {
    host?: string;
    subdomain?: string;
    sufix?: string;
    apiVersion?: string;
}
/**
 * Initialize a new instance of `ParametrizedHostContext`
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(credentials: TokenCredential, options?: ParametrizedHostContextOptions): ParametrizedHostContext;
//# sourceMappingURL=parametrizedHostClient.d.ts.map