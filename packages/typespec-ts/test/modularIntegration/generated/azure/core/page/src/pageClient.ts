// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import {
  User,
  ListItemInputBody,
  FirstItem,
  SecondItem,
} from "./models/models.js";
import {
  ListWithPageOptionalParams,
  ListWithParametersOptionalParams,
  ListWithCustomPageModelOptionalParams,
  ListFirstItemOptionalParams,
  ListSecondItemOptionalParams,
} from "./models/options.js";
import {
  listWithPage,
  listWithParameters,
  listWithCustomPageModel,
  listFirstItem,
  listSecondItem,
  createPage,
  PageContext,
  PageClientOptionalParams,
} from "./api/index.js";
import { PagedAsyncIterableIterator } from "./static-helpers/pagingHelpers.js";

export { PageClientOptionalParams } from "./api/pageContext.js";

export class PageClient {
  private _client: PageContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Illustrates bodies templated with Azure Core with paging support */
  constructor(options: PageClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";
    this._client = createPage({
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** List with Azure.Core.Page<>. */
  listWithPage(
    options: ListWithPageOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<User> {
    return listWithPage(this._client, options);
  }

  /** List with extensible enum parameter Azure.Core.Page<>. */
  listWithParameters(
    bodyInput: ListItemInputBody,
    options: ListWithParametersOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<User> {
    return listWithParameters(this._client, bodyInput, options);
  }

  /** List with custom page model. */
  listWithCustomPageModel(
    options: ListWithCustomPageModelOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<User> {
    return listWithCustomPageModel(this._client, options);
  }

  /** Two operations with two different page item types should be successfully generated. Should generate model for FirstItem. */
  listFirstItem(
    options: ListFirstItemOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<FirstItem> {
    return listFirstItem(this._client, options);
  }

  /** Two operations with two different page item types should be successfully generated. Should generate model for SecondItem. */
  listSecondItem(
    options: ListSecondItemOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<SecondItem> {
    return listSecondItem(this._client, options);
  }
}
