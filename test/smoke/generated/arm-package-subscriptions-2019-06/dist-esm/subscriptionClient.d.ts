import * as coreAuth from "@azure/core-auth";
import { Operations, Subscriptions, Tenants } from "./operationsInterfaces";
import { SubscriptionClientContext } from "./subscriptionClientContext";
import { SubscriptionClientOptionalParams } from "./models";
export declare class SubscriptionClient extends SubscriptionClientContext {
    /**
     * Initializes a new instance of the SubscriptionClient class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, options?: SubscriptionClientOptionalParams);
    operations: Operations;
    subscriptions: Subscriptions;
    tenants: Tenants;
}
//# sourceMappingURL=subscriptionClient.d.ts.map