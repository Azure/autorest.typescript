import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import { MonitorClientOptionalParams } from "./models";
export declare class MonitorClientContext extends coreClient.ServiceClient {
    $host: string;
    /**
     * Initializes a new instance of the MonitorClientContext class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, options?: MonitorClientOptionalParams);
}
//# sourceMappingURL=monitorClientContext.d.ts.map