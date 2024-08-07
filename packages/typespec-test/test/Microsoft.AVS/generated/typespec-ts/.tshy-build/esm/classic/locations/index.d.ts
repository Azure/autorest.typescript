import { AVSContext } from "../../api/aVSContext.js";
import { Sku, Trial, Quota } from "../../models/models.js";
import { LocationsCheckTrialAvailabilityOptionalParams, LocationsCheckQuotaAvailabilityOptionalParams } from "../../models/options.js";
/** Interface representing a Locations operations. */
export interface LocationsOperations {
    /** Return trial status for subscription by region */
    checkTrialAvailability: (location: string, sku?: Sku, options?: LocationsCheckTrialAvailabilityOptionalParams) => Promise<Trial>;
    /** Return quota for subscription by region */
    checkQuotaAvailability: (location: string, options?: LocationsCheckQuotaAvailabilityOptionalParams) => Promise<Quota>;
}
export declare function getLocations(context: AVSContext, subscriptionId: string): {
    checkTrialAvailability: (location: string, sku?: Sku, options?: LocationsCheckTrialAvailabilityOptionalParams) => Promise<Trial>;
    checkQuotaAvailability: (location: string, options?: LocationsCheckQuotaAvailabilityOptionalParams) => Promise<Quota>;
};
export declare function getLocationsOperations(context: AVSContext, subscriptionId: string): LocationsOperations;
//# sourceMappingURL=index.d.ts.map