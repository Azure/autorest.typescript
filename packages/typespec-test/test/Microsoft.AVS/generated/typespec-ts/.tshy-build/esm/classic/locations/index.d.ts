import { AVSContext } from "../../api/aVSContext.js";
import { Sku, Trial, Quota } from "../../models/models.js";
import { LocationsCheckTrialAvailabilityOptionalParams, LocationsCheckQuotaAvailabilityOptionalParams } from "../../models/options.js";
export interface LocationsOperations {
    checkTrialAvailability: (subscriptionId: string, location: string, sku?: Sku, options?: LocationsCheckTrialAvailabilityOptionalParams) => Promise<Trial>;
    checkQuotaAvailability: (subscriptionId: string, location: string, options?: LocationsCheckQuotaAvailabilityOptionalParams) => Promise<Quota>;
}
export declare function getLocations(context: AVSContext): {
    checkTrialAvailability: (subscriptionId: string, location: string, sku?: Sku, options?: LocationsCheckTrialAvailabilityOptionalParams) => Promise<Trial>;
    checkQuotaAvailability: (subscriptionId: string, location: string, options?: LocationsCheckQuotaAvailabilityOptionalParams) => Promise<Quota>;
};
export declare function getLocationsOperations(context: AVSContext): LocationsOperations;
//# sourceMappingURL=index.d.ts.map