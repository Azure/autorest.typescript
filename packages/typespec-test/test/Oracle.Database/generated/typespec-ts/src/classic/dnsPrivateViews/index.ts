// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DatabaseContext } from "../../api/databaseContext.js";
import { DnsPrivateView } from "../../models/models.js";
import { get, listByLocation } from "../../api/dnsPrivateViews/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import {
  DnsPrivateViewsGetOptionalParams,
  DnsPrivateViewsListByLocationOptionalParams,
} from "../../models/options.js";

export interface DnsPrivateViewsOperations {
  get: (
    subscriptionId: string,
    location: string,
    dnsprivateviewocid: string,
    options?: DnsPrivateViewsGetOptionalParams,
  ) => Promise<DnsPrivateView>;
  listByLocation: (
    subscriptionId: string,
    location: string,
    options?: DnsPrivateViewsListByLocationOptionalParams,
  ) => PagedAsyncIterableIterator<DnsPrivateView>;
}

export function getDnsPrivateViews(context: DatabaseContext) {
  return {
    get: (
      subscriptionId: string,
      location: string,
      dnsprivateviewocid: string,
      options?: DnsPrivateViewsGetOptionalParams,
    ) => get(context, subscriptionId, location, dnsprivateviewocid, options),
    listByLocation: (
      subscriptionId: string,
      location: string,
      options?: DnsPrivateViewsListByLocationOptionalParams,
    ) => listByLocation(context, subscriptionId, location, options),
  };
}

export function getDnsPrivateViewsOperations(
  context: DatabaseContext,
): DnsPrivateViewsOperations {
  return {
    ...getDnsPrivateViews(context),
  };
}
