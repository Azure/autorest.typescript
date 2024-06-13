// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DatabaseContext } from "../../api/databaseContext.js";
import { DnsPrivateZone } from "../../models/models.js";
import { get, listByLocation } from "../../api/dnsPrivateZones/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import {
  DnsPrivateZonesGetOptionalParams,
  DnsPrivateZonesListByLocationOptionalParams,
} from "../../models/options.js";

export interface DnsPrivateZonesOperations {
  get: (
    subscriptionId: string,
    location: string,
    dnsprivatezonename: string,
    options?: DnsPrivateZonesGetOptionalParams,
  ) => Promise<DnsPrivateZone>;
  listByLocation: (
    subscriptionId: string,
    location: string,
    options?: DnsPrivateZonesListByLocationOptionalParams,
  ) => PagedAsyncIterableIterator<DnsPrivateZone>;
}

export function getDnsPrivateZones(context: DatabaseContext) {
  return {
    get: (
      subscriptionId: string,
      location: string,
      dnsprivatezonename: string,
      options?: DnsPrivateZonesGetOptionalParams,
    ) => get(context, subscriptionId, location, dnsprivatezonename, options),
    listByLocation: (
      subscriptionId: string,
      location: string,
      options?: DnsPrivateZonesListByLocationOptionalParams,
    ) => listByLocation(context, subscriptionId, location, options),
  };
}

export function getDnsPrivateZonesOperations(
  context: DatabaseContext,
): DnsPrivateZonesOperations {
  return {
    ...getDnsPrivateZones(context),
  };
}
