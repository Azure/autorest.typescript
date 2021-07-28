import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import { SubscriptionClientOptionalParams } from "./models";
export declare class SubscriptionClientContext extends coreClient.ServiceClient {
    $host: string;
    apiVersion: string;
    /**
     * Initializes a new instance of the SubscriptionClientContext class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, options?: SubscriptionClientOptionalParams);
}
//# sourceMappingURL=subscriptionClientContext.d.ts.map