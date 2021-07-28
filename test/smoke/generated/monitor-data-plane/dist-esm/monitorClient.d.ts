import * as coreAuth from "@azure/core-auth";
import { Metrics } from "./operationsInterfaces";
import { MonitorClientContext } from "./monitorClientContext";
import { MonitorClientOptionalParams } from "./models";
export declare class MonitorClient extends MonitorClientContext {
    /**
     * Initializes a new instance of the MonitorClient class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, options?: MonitorClientOptionalParams);
    metrics: Metrics;
}
//# sourceMappingURL=monitorClient.d.ts.map