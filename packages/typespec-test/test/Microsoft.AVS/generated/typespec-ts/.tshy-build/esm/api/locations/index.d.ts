import { Sku, Trial, Quota } from "../../models/models.js";
import { AVSContext as Client, LocationsCheckQuotaAvailability200Response, LocationsCheckQuotaAvailabilityDefaultResponse, LocationsCheckTrialAvailability200Response, LocationsCheckTrialAvailabilityDefaultResponse } from "../../rest/index.js";
import { StreamableMethod } from "@azure-rest/core-client";
import { LocationsCheckTrialAvailabilityOptionalParams, LocationsCheckQuotaAvailabilityOptionalParams } from "../../models/options.js";
export declare function _checkTrialAvailabilitySend(context: Client, subscriptionId: string, location: string, sku?: Sku, options?: LocationsCheckTrialAvailabilityOptionalParams): StreamableMethod<LocationsCheckTrialAvailability200Response | LocationsCheckTrialAvailabilityDefaultResponse>;
export declare function _checkTrialAvailabilityDeserialize(result: LocationsCheckTrialAvailability200Response | LocationsCheckTrialAvailabilityDefaultResponse): Promise<Trial>;
/** Return trial status for subscription by region */
export declare function checkTrialAvailability(context: Client, subscriptionId: string, location: string, sku?: Sku, options?: LocationsCheckTrialAvailabilityOptionalParams): Promise<Trial>;
export declare function _checkQuotaAvailabilitySend(context: Client, subscriptionId: string, location: string, options?: LocationsCheckQuotaAvailabilityOptionalParams): StreamableMethod<LocationsCheckQuotaAvailability200Response | LocationsCheckQuotaAvailabilityDefaultResponse>;
export declare function _checkQuotaAvailabilityDeserialize(result: LocationsCheckQuotaAvailability200Response | LocationsCheckQuotaAvailabilityDefaultResponse): Promise<Quota>;
/** Return quota for subscription by region */
export declare function checkQuotaAvailability(context: Client, subscriptionId: string, location: string, options?: LocationsCheckQuotaAvailabilityOptionalParams): Promise<Quota>;
//# sourceMappingURL=index.d.ts.map