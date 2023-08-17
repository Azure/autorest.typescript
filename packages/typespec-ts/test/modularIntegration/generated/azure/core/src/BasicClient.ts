// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { User, CustomPageModel, CustomPage, Page } from "./models/models.js";
import {
  CreateOrUpdateOptions,
  CreateOrReplaceOptions,
  GetOptions,
  ListOptions,
  ListWithPageOptions,
  ListWithCustomPageModelOptions,
  DeleteOptions,
  ExportOptions,
} from "./models/options.js";
import {
  createBasic,
  BasicClientOptions,
  BasicContext,
  createOrUpdate,
  createOrReplace,
  get,
  list,
  listWithPage,
  listWithCustomPageModel,
  deleteOperation,
  exportOperation,
} from "./api/index.js";

export { BasicClientOptions } from "./api/BasicContext.js";

export class BasicClient {
  private _client: BasicContext;

  /** Illustrates bodies templated with Azure Core */
  constructor(options: BasicClientOptions = {}) {
    this._client = createBasic(options);
  }

  /** Creates or updates a User */
  createOrUpdate(
    name: string,
    id: number,
    options: CreateOrUpdateOptions = { requestOptions: {} }
  ): Promise<User> {
    return createOrUpdate(this._client, name, id, options);
  }

  /** Creates or replaces a User */
  createOrReplace(
    name: string,
    id: number,
    options: CreateOrReplaceOptions = { requestOptions: {} }
  ): Promise<User> {
    return createOrReplace(this._client, name, id, options);
  }

  /** Gets a User */
  get(id: number, options: GetOptions = { requestOptions: {} }): Promise<User> {
    return get(this._client, id, options);
  }

  /** Lists all Users */
  list(options: ListOptions = { requestOptions: {} }): Promise<CustomPage> {
    return list(this._client, options);
  }

  /** List with Azure.Core.Page<>. */
  listWithPage(
    options: ListWithPageOptions = { requestOptions: {} }
  ): Promise<Page> {
    return listWithPage(this._client, options);
  }

  /** List with custom page model. */
  listWithCustomPageModel(
    options: ListWithCustomPageModelOptions = { requestOptions: {} }
  ): Promise<CustomPageModel> {
    return listWithCustomPageModel(this._client, options);
  }

  /** Deletes a User */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name. Please add @projectedName(
   *       "javascript", "<JS-Specific-Name>") to the operation to override the generated name.
   */
  deleteOperation(
    id: number,
    options: DeleteOptions = { requestOptions: {} }
  ): Promise<void> {
    return deleteOperation(this._client, id, options);
  }

  /** Exports a User */
  /**
   *  @fixme export is a reserved word that cannot be used as an operation name. Please add @projectedName(
   *       "javascript", "<JS-Specific-Name>") to the operation to override the generated name.
   */
  exportOperation(
    id: number,
    format: string,
    options: ExportOptions = { requestOptions: {} }
  ): Promise<User> {
    return exportOperation(this._client, id, format, options);
  }
}
