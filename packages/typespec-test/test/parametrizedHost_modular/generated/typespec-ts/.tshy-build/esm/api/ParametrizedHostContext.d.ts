import { TokenCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { ParametrizedHostContext } from "../rest/index.js";
export interface ParametrizedHostClientOptions extends ClientOptions {
}
export { ParametrizedHostContext } from "../rest/index.js";
export declare function createParametrizedHost(host: string, subdomain: string, sufix: string, credential: TokenCredential, options?: ParametrizedHostClientOptions): ParametrizedHostContext;
//# sourceMappingURL=ParametrizedHostContext.d.ts.map