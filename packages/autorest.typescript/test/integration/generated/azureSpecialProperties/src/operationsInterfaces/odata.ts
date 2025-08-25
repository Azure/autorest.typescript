// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OdataGetWithFilterOptionalParams } from "../models";

/** Interface representing a Odata. */
export interface Odata {
  /**
   * Specify filter parameter with value '$filter=id gt 5 and name eq 'foo'&$orderby=id&$top=10'
   * @param options The options parameters.
   */
  getWithFilter(options?: OdataGetWithFilterOptionalParams): Promise<void>;
}
