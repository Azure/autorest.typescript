// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  TopLevelDomain,
  TopLevelDomainsListOptionalParams,
  TldLegalAgreement,
  TopLevelDomainAgreementOption,
  TopLevelDomainsListAgreementsOptionalParams,
  TopLevelDomainsGetOptionalParams,
  TopLevelDomainsGetResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a TopLevelDomains. */
export interface TopLevelDomains {
  /**
   * Description for Get all top-level domains supported for registration.
   * @param options The options parameters.
   */
  list(
    options?: TopLevelDomainsListOptionalParams,
  ): PagedAsyncIterableIterator<TopLevelDomain>;
  /**
   * Description for Gets all legal agreements that user needs to accept before purchasing a domain.
   * @param name Name of the top-level domain.
   * @param agreementOption Domain agreement options.
   * @param options The options parameters.
   */
  listAgreements(
    name: string,
    agreementOption: TopLevelDomainAgreementOption,
    options?: TopLevelDomainsListAgreementsOptionalParams,
  ): PagedAsyncIterableIterator<TldLegalAgreement>;
  /**
   * Description for Get details of a top-level domain.
   * @param name Name of the top-level domain.
   * @param options The options parameters.
   */
  get(
    name: string,
    options?: TopLevelDomainsGetOptionalParams,
  ): Promise<TopLevelDomainsGetResponse>;
}
