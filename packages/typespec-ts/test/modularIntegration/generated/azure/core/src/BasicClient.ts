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
  CreateOrUpdateOptions,
  CreateOrReplaceOptions,
  GetOptions,
  ListOptions,
  ListWithPageOptions,
  ListWithParametersOptions,
  ListWithCustomPageModelOptions,
  DeleteOperationOptions,
  ExportOperationOptions,
  ListFirstItemOptions,
  ListSecondItemOptions,
} from "./models/options.js";
import { PagedAsyncIterableIterator } from "./models/pagingTypes.js";
import {
  createBasic,
  BasicClientOptions,
  BasicContext,
  createOrUpdate,
  createOrReplace,
  get,
  list,
  listWithPage,
  listWithParameters,
  listWithCustomPageModel,
  deleteOperation,
  exportOperation,
  listFirstItem,
  listSecondItem,
} from "./api/index.js";

export { BasicClientOptions } from "./api/BasicContext.js";

export class BasicClient {
  private _client: BasicContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Illustrates bodies templated with Azure Core */
  constructor(options: BasicClientOptions = {}) {
    this._client = createBasic(options);
    this.pipeline = this._client.pipeline;
  }

  /** Creates or updates a User */
  createOrUpdate(
    id: number,
    resource: User,
    options: CreateOrUpdateOptions = { requestOptions: {} },
  ): Promise<User> {
    return createOrUpdate(this._client, id, resource, options);
  }

  /** Creates or replaces a User */
  createOrReplace(
    id: number,
    resource: User,
    options: CreateOrReplaceOptions = { requestOptions: {} },
  ): Promise<User> {
    return createOrReplace(this._client, id, resource, options);
  }

  /** Gets a User */
  get(id: number, options: GetOptions = { requestOptions: {} }): Promise<User> {
    return get(this._client, id, options);
  }

  /** Lists all Users */
  list(
    options: ListOptions = { requestOptions: {} },
  ): PagedAsyncIterableIterator<User> {
    return list(this._client, options);
  }

  /** List with Azure.Core.Page<>. */
  listWithPage(
    options: ListWithPageOptions = { requestOptions: {} },
  ): PagedAsyncIterableIterator<User> {
    return listWithPage(this._client, options);
  }

  /** List with extensible enum parameter Azure.Core.Page<>. */
  listWithParameters(
    bodyInput: ListItemInputBody,
    options: ListWithParametersOptions = { requestOptions: {} },
  ): PagedAsyncIterableIterator<User> {
    return listWithParameters(this._client, bodyInput, options);
  }

  /** List with custom page model. */
  listWithCustomPageModel(
    options: ListWithCustomPageModelOptions = { requestOptions: {} },
  ): PagedAsyncIterableIterator<User> {
    return listWithCustomPageModel(this._client, options);
  }

  /** Deletes a User */
  deleteOperation(
    id: number,
    options: DeleteOperationOptions = { requestOptions: {} },
  ): Promise<void> {
    return deleteOperation(this._client, id, options);
  }

  /** Exports a User */
  exportOperation(
    id: number,
    format: string,
    options: ExportOperationOptions = { requestOptions: {} },
  ): Promise<User> {
    return exportOperation(this._client, id, format, options);
  }

  /** Two operations with two different page item types should be successfully generated. Should generate model for FirstItem. */
  listFirstItem(
    options: ListFirstItemOptions = { requestOptions: {} },
  ): PagedAsyncIterableIterator<FirstItem> {
    return listFirstItem(this._client, options);
  }

  /** Two operations with two different page item types should be successfully generated. Should generate model for SecondItem. */
  listSecondItem(
    options: ListSecondItemOptions = { requestOptions: {} },
  ): PagedAsyncIterableIterator<SecondItem> {
    return listSecondItem(this._client, options);
  }
}
