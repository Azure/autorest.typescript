import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { UsageDef, UsageListOptionalParams } from "../models";
/** Interface representing a Usage. */
export interface Usage {
    /**
     * Gets, for the specified location, the current compute resource usage information as well as the
     * limits for compute resources under the subscription.
     * @param location The location for which resource usage is queried.
     * @param options The options parameters.
     */
    list(location: string, options?: UsageListOptionalParams): PagedAsyncIterableIterator<UsageDef>;
}
//# sourceMappingURL=usage.d.ts.map