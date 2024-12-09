// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  getListBySubscriptionOperations,
  ListBySubscriptionOperations,
} from "./classic/listBySubscription/index.js";
import {
  getListByResourceGroupOperations,
  ListByResourceGroupOperations,
} from "./classic/listByResourceGroup/index.js";
import {
  getListRolesAssignmentsOperations,
  ListRolesAssignmentsOperations,
} from "./classic/listRolesAssignments/index.js";
import {
  getRemoveUserRoleOperations,
  RemoveUserRoleOperations,
} from "./classic/removeUserRole/index.js";
import {
  getAddUserRoleOperations,
  AddUserRoleOperations,
} from "./classic/addUserRole/index.js";
import {
  getRotateKeyOperations,
  RotateKeyOperations,
} from "./classic/rotateKey/index.js";
import {
  getGenerateStorageAccountSasTokenOperations,
  GenerateStorageAccountSasTokenOperations,
} from "./classic/generateStorageAccountSasToken/index.js";
import {
  getDeleteOperations,
  DeleteOperations,
} from "./classic/delete/index.js";
import {
  getUpdateOperations,
  UpdateOperations,
} from "./classic/update/index.js";
import { getGetOperations, GetOperations } from "./classic/get/index.js";
import {
  getCreateOperations,
  CreateOperations,
} from "./classic/create/index.js";
import {
  getListByDataProductOperations,
  ListByDataProductOperations,
} from "./classic/listByDataProduct/index.js";
import {
  getGenerateStorageContainerSasTokenOperations,
  GenerateStorageContainerSasTokenOperations,
} from "./classic/generateStorageContainerSasToken/index.js";
import {
  getDeleteDataOperations,
  DeleteDataOperations,
} from "./classic/deleteData/index.js";
import { getListOperations, ListOperations } from "./classic/list/index.js";
import {
  createNetworkAnalytics,
  NetworkAnalyticsContext,
  NetworkAnalyticsClientOptionalParams,
} from "./api/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { NetworkAnalyticsClientOptionalParams } from "./api/networkAnalyticsContext.js";

export class NetworkAnalyticsClient {
  private _client: NetworkAnalyticsContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    credential: TokenCredential,
    options: NetworkAnalyticsClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createNetworkAnalytics(credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.listBySubscription = getListBySubscriptionOperations(this._client);
    this.listByResourceGroup = getListByResourceGroupOperations(this._client);
    this.listRolesAssignments = getListRolesAssignmentsOperations(this._client);
    this.removeUserRole = getRemoveUserRoleOperations(this._client);
    this.addUserRole = getAddUserRoleOperations(this._client);
    this.rotateKey = getRotateKeyOperations(this._client);
    this.generateStorageAccountSasToken =
      getGenerateStorageAccountSasTokenOperations(this._client);
    this.delete = getDeleteOperations(this._client);
    this.update = getUpdateOperations(this._client);
    this.get = getGetOperations(this._client);
    this.create = getCreateOperations(this._client);
    this.listByDataProduct = getListByDataProductOperations(this._client);
    this.generateStorageContainerSasToken =
      getGenerateStorageContainerSasTokenOperations(this._client);
    this.deleteData = getDeleteDataOperations(this._client);
    this.list = getListOperations(this._client);
  }

  /** The operation groups for listBySubscription */
  public readonly listBySubscription: ListBySubscriptionOperations;
  /** The operation groups for listByResourceGroup */
  public readonly listByResourceGroup: ListByResourceGroupOperations;
  /** The operation groups for listRolesAssignments */
  public readonly listRolesAssignments: ListRolesAssignmentsOperations;
  /** The operation groups for removeUserRole */
  public readonly removeUserRole: RemoveUserRoleOperations;
  /** The operation groups for addUserRole */
  public readonly addUserRole: AddUserRoleOperations;
  /** The operation groups for rotateKey */
  public readonly rotateKey: RotateKeyOperations;
  /** The operation groups for generateStorageAccountSasToken */
  public readonly generateStorageAccountSasToken: GenerateStorageAccountSasTokenOperations;
  /** The operation groups for delete */
  public readonly delete: DeleteOperations;
  /** The operation groups for update */
  public readonly update: UpdateOperations;
  /** The operation groups for get */
  public readonly get: GetOperations;
  /** The operation groups for create */
  public readonly create: CreateOperations;
  /** The operation groups for listByDataProduct */
  public readonly listByDataProduct: ListByDataProductOperations;
  /** The operation groups for generateStorageContainerSasToken */
  public readonly generateStorageContainerSasToken: GenerateStorageContainerSasTokenOperations;
  /** The operation groups for deleteData */
  public readonly deleteData: DeleteDataOperations;
  /** The operation groups for list */
  public readonly list: ListOperations;
}
