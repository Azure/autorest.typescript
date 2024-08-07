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
  CreateOrUpdateOptionalParams,
  CreateOrReplaceOptionalParams,
  GetOptionalParams,
  ListOptionalParams,
  ListWithPageOptionalParams,
  ListWithParametersOptionalParams,
  ListWithCustomPageModelOptionalParams,
  DeleteOptionalParams,
  ExportOptionalParams,
  ListFirstItemOptionalParams,
  ListSecondItemOptionalParams,
} from "./models/options.js";
import { PagedAsyncIterableIterator } from "./models/pagingTypes.js";
import {
  createBasic,
  BasicContext,
  BasicClientOptionalParams,
  createOrUpdate,
  createOrReplace,
  get,
  list,
  listWithPage,
  listWithParameters,
  listWithCustomPageModel,
  $delete,
  $export,
  listFirstItem,
  listSecondItem,
} from "./api/index.js";

export { BasicClientOptionalParams } from "./api/basicContext.js";

export class BasicClient {
  private _client: BasicContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Illustrates bodies templated with Azure Core */
  constructor(options: BasicClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";
    this._client = createBasic({
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** Creates or updates a User */
  createOrUpdate(
    id: number,
    resource: User,
    options: CreateOrUpdateOptionalParams = { requestOptions: {} },
  ): Promise<User> {
    return createOrUpdate(this._client, id, resource, options);
  }

  /** Creates or replaces a User */
  createOrReplace(
    id: number,
    resource: User,
    options: CreateOrReplaceOptionalParams = { requestOptions: {} },
  ): Promise<User> {
    return createOrReplace(this._client, id, resource, options);
  }

  /** Gets a User */
  get(
    id: number,
    options: GetOptionalParams = { requestOptions: {} },
  ): Promise<User> {
    return get(this._client, id, options);
  }

  /** Lists all Users */
  list(
    options: ListOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<User> {
    return list(this._client, options);
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

  /** Deletes a User */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete(
    id: number,
    options: DeleteOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return $delete(this._client, id, options);
  }

  /** Exports a User */
  /**
   *  @fixme export is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  export(
    id: number,
    format: string,
    options: ExportOptionalParams = { requestOptions: {} },
  ): Promise<User> {
    return $export(this._client, id, format, options);
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
