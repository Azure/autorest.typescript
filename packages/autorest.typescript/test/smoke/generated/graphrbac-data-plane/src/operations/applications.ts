/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { Applications } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { GraphRbacManagementClient } from "../graphRbacManagementClient.js";
import {
  Application,
  ApplicationsListNextOptionalParams,
  ApplicationsListOptionalParams,
  ApplicationsListResponse,
  DirectoryObjectUnion,
  ApplicationsListOwnersNextOptionalParams,
  ApplicationsListOwnersOptionalParams,
  ApplicationsListOwnersResponse,
  KeyCredential,
  ApplicationsListKeyCredentialsOptionalParams,
  ApplicationsListKeyCredentialsResponse,
  PasswordCredential,
  ApplicationsListPasswordCredentialsOptionalParams,
  ApplicationsListPasswordCredentialsResponse,
  ApplicationsListNextResponse,
  ApplicationCreateParameters,
  ApplicationsCreateOptionalParams,
  ApplicationsCreateResponse,
  ApplicationsDeleteOptionalParams,
  ApplicationsGetOptionalParams,
  ApplicationsGetResponse,
  ApplicationUpdateParameters,
  ApplicationsPatchOptionalParams,
  AddOwnerParameters,
  ApplicationsAddOwnerOptionalParams,
  ApplicationsRemoveOwnerOptionalParams,
  KeyCredentialsUpdateParameters,
  ApplicationsUpdateKeyCredentialsOptionalParams,
  PasswordCredentialsUpdateParameters,
  ApplicationsUpdatePasswordCredentialsOptionalParams,
  ApplicationsGetServicePrincipalsIdByAppIdOptionalParams,
  ApplicationsGetServicePrincipalsIdByAppIdResponse,
  ApplicationsListOwnersNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing Applications operations. */
export class ApplicationsImpl implements Applications {
  private readonly client: GraphRbacManagementClient;

  /**
   * Initialize a new instance of the class Applications class.
   * @param client Reference to the service client
   */
  constructor(client: GraphRbacManagementClient) {
    this.client = client;
  }

  /**
   * Lists applications by filter parameters.
   * @param options The options parameters.
   */
  public list(
    options?: ApplicationsListOptionalParams,
  ): PagedAsyncIterableIterator<Application> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(options, settings);
      },
    };
  }

  private async *listPagingPage(
    options?: ApplicationsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<Application[]> {
    let result: ApplicationsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(options);
      let page = result.value || [];
      continuationToken = result.odataNextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.odataNextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    options?: ApplicationsListOptionalParams,
  ): AsyncIterableIterator<Application> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * The owners are a set of non-admin users who are allowed to modify this object.
   * @param applicationObjectId The object ID of the application for which to get owners.
   * @param options The options parameters.
   */
  public listOwners(
    applicationObjectId: string,
    options?: ApplicationsListOwnersOptionalParams,
  ): PagedAsyncIterableIterator<DirectoryObjectUnion> {
    const iter = this.listOwnersPagingAll(applicationObjectId, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listOwnersPagingPage(
          applicationObjectId,
          options,
          settings,
        );
      },
    };
  }

  private async *listOwnersPagingPage(
    applicationObjectId: string,
    options?: ApplicationsListOwnersOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<DirectoryObjectUnion[]> {
    let result: ApplicationsListOwnersResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listOwners(applicationObjectId, options);
      let page = result.value || [];
      continuationToken = result.odataNextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listOwnersNext(
        applicationObjectId,
        continuationToken,
        options,
      );
      continuationToken = result.odataNextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listOwnersPagingAll(
    applicationObjectId: string,
    options?: ApplicationsListOwnersOptionalParams,
  ): AsyncIterableIterator<DirectoryObjectUnion> {
    for await (const page of this.listOwnersPagingPage(
      applicationObjectId,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Get the keyCredentials associated with an application.
   * @param applicationObjectId Application object ID.
   * @param options The options parameters.
   */
  public listKeyCredentials(
    applicationObjectId: string,
    options?: ApplicationsListKeyCredentialsOptionalParams,
  ): PagedAsyncIterableIterator<KeyCredential> {
    const iter = this.listKeyCredentialsPagingAll(applicationObjectId, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listKeyCredentialsPagingPage(
          applicationObjectId,
          options,
          settings,
        );
      },
    };
  }

  private async *listKeyCredentialsPagingPage(
    applicationObjectId: string,
    options?: ApplicationsListKeyCredentialsOptionalParams,
    _settings?: PageSettings,
  ): AsyncIterableIterator<KeyCredential[]> {
    let result: ApplicationsListKeyCredentialsResponse;
    result = await this._listKeyCredentials(applicationObjectId, options);
    yield result.value || [];
  }

  private async *listKeyCredentialsPagingAll(
    applicationObjectId: string,
    options?: ApplicationsListKeyCredentialsOptionalParams,
  ): AsyncIterableIterator<KeyCredential> {
    for await (const page of this.listKeyCredentialsPagingPage(
      applicationObjectId,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Get the passwordCredentials associated with an application.
   * @param applicationObjectId Application object ID.
   * @param options The options parameters.
   */
  public listPasswordCredentials(
    applicationObjectId: string,
    options?: ApplicationsListPasswordCredentialsOptionalParams,
  ): PagedAsyncIterableIterator<PasswordCredential> {
    const iter = this.listPasswordCredentialsPagingAll(
      applicationObjectId,
      options,
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPasswordCredentialsPagingPage(
          applicationObjectId,
          options,
          settings,
        );
      },
    };
  }

  private async *listPasswordCredentialsPagingPage(
    applicationObjectId: string,
    options?: ApplicationsListPasswordCredentialsOptionalParams,
    _settings?: PageSettings,
  ): AsyncIterableIterator<PasswordCredential[]> {
    let result: ApplicationsListPasswordCredentialsResponse;
    result = await this._listPasswordCredentials(applicationObjectId, options);
    yield result.value || [];
  }

  private async *listPasswordCredentialsPagingAll(
    applicationObjectId: string,
    options?: ApplicationsListPasswordCredentialsOptionalParams,
  ): AsyncIterableIterator<PasswordCredential> {
    for await (const page of this.listPasswordCredentialsPagingPage(
      applicationObjectId,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of applications from the current tenant.
   * @param nextLink Next link for the list operation.
   * @param options The options parameters.
   */
  public listNext(
    nextLink: string,
    options?: ApplicationsListNextOptionalParams,
  ): PagedAsyncIterableIterator<Application> {
    const iter = this.listNextPagingAll(nextLink, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listNextPagingPage(nextLink, options, settings);
      },
    };
  }

  private async *listNextPagingPage(
    nextLink: string,
    options?: ApplicationsListNextOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<Application[]> {
    let result: ApplicationsListNextResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listNext(nextLink, options);
      let page = result.value || [];
      continuationToken = result.odataNextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.odataNextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listNextPagingAll(
    nextLink: string,
    options?: ApplicationsListNextOptionalParams,
  ): AsyncIterableIterator<Application> {
    for await (const page of this.listNextPagingPage(nextLink, options)) {
      yield* page;
    }
  }

  /**
   * Create a new application.
   * @param parameters The parameters for creating an application.
   * @param options The options parameters.
   */
  create(
    parameters: ApplicationCreateParameters,
    options?: ApplicationsCreateOptionalParams,
  ): Promise<ApplicationsCreateResponse> {
    return this.client.sendOperationRequest(
      { parameters, options },
      createOperationSpec,
    );
  }

  /**
   * Lists applications by filter parameters.
   * @param options The options parameters.
   */
  private _list(
    options?: ApplicationsListOptionalParams,
  ): Promise<ApplicationsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Delete an application.
   * @param applicationObjectId Application object ID.
   * @param options The options parameters.
   */
  delete(
    applicationObjectId: string,
    options?: ApplicationsDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { applicationObjectId, options },
      deleteOperationSpec,
    );
  }

  /**
   * Get an application by object ID.
   * @param applicationObjectId Application object ID.
   * @param options The options parameters.
   */
  get(
    applicationObjectId: string,
    options?: ApplicationsGetOptionalParams,
  ): Promise<ApplicationsGetResponse> {
    return this.client.sendOperationRequest(
      { applicationObjectId, options },
      getOperationSpec,
    );
  }

  /**
   * Update an existing application.
   * @param applicationObjectId Application object ID.
   * @param parameters Parameters to update an existing application.
   * @param options The options parameters.
   */
  patch(
    applicationObjectId: string,
    parameters: ApplicationUpdateParameters,
    options?: ApplicationsPatchOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { applicationObjectId, parameters, options },
      patchOperationSpec,
    );
  }

  /**
   * The owners are a set of non-admin users who are allowed to modify this object.
   * @param applicationObjectId The object ID of the application for which to get owners.
   * @param options The options parameters.
   */
  private _listOwners(
    applicationObjectId: string,
    options?: ApplicationsListOwnersOptionalParams,
  ): Promise<ApplicationsListOwnersResponse> {
    return this.client.sendOperationRequest(
      { applicationObjectId, options },
      listOwnersOperationSpec,
    );
  }

  /**
   * Add an owner to an application.
   * @param applicationObjectId The object ID of the application to which to add the owner.
   * @param parameters The URL of the owner object, such as
   *                   https://graph.windows.net/0b1f9851-1bf0-433f-aec3-cb9272f093dc/directoryObjects/f260bbc4-c254-447b-94cf-293b5ec434dd.
   * @param options The options parameters.
   */
  addOwner(
    applicationObjectId: string,
    parameters: AddOwnerParameters,
    options?: ApplicationsAddOwnerOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { applicationObjectId, parameters, options },
      addOwnerOperationSpec,
    );
  }

  /**
   * Remove a member from owners.
   * @param applicationObjectId The object ID of the application from which to remove the owner.
   * @param ownerObjectId Owner object id
   * @param options The options parameters.
   */
  removeOwner(
    applicationObjectId: string,
    ownerObjectId: string,
    options?: ApplicationsRemoveOwnerOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { applicationObjectId, ownerObjectId, options },
      removeOwnerOperationSpec,
    );
  }

  /**
   * Get the keyCredentials associated with an application.
   * @param applicationObjectId Application object ID.
   * @param options The options parameters.
   */
  private _listKeyCredentials(
    applicationObjectId: string,
    options?: ApplicationsListKeyCredentialsOptionalParams,
  ): Promise<ApplicationsListKeyCredentialsResponse> {
    return this.client.sendOperationRequest(
      { applicationObjectId, options },
      listKeyCredentialsOperationSpec,
    );
  }

  /**
   * Update the keyCredentials associated with an application.
   * @param applicationObjectId Application object ID.
   * @param parameters Parameters to update the keyCredentials of an existing application.
   * @param options The options parameters.
   */
  updateKeyCredentials(
    applicationObjectId: string,
    parameters: KeyCredentialsUpdateParameters,
    options?: ApplicationsUpdateKeyCredentialsOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { applicationObjectId, parameters, options },
      updateKeyCredentialsOperationSpec,
    );
  }

  /**
   * Get the passwordCredentials associated with an application.
   * @param applicationObjectId Application object ID.
   * @param options The options parameters.
   */
  private _listPasswordCredentials(
    applicationObjectId: string,
    options?: ApplicationsListPasswordCredentialsOptionalParams,
  ): Promise<ApplicationsListPasswordCredentialsResponse> {
    return this.client.sendOperationRequest(
      { applicationObjectId, options },
      listPasswordCredentialsOperationSpec,
    );
  }

  /**
   * Update passwordCredentials associated with an application.
   * @param applicationObjectId Application object ID.
   * @param parameters Parameters to update passwordCredentials of an existing application.
   * @param options The options parameters.
   */
  updatePasswordCredentials(
    applicationObjectId: string,
    parameters: PasswordCredentialsUpdateParameters,
    options?: ApplicationsUpdatePasswordCredentialsOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { applicationObjectId, parameters, options },
      updatePasswordCredentialsOperationSpec,
    );
  }

  /**
   * Gets an object id for a given application id from the current tenant.
   * @param applicationID The application ID.
   * @param options The options parameters.
   */
  getServicePrincipalsIdByAppId(
    applicationID: string,
    options?: ApplicationsGetServicePrincipalsIdByAppIdOptionalParams,
  ): Promise<ApplicationsGetServicePrincipalsIdByAppIdResponse> {
    return this.client.sendOperationRequest(
      { applicationID, options },
      getServicePrincipalsIdByAppIdOperationSpec,
    );
  }

  /**
   * Gets a list of applications from the current tenant.
   * @param nextLink Next link for the list operation.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: ApplicationsListNextOptionalParams,
  ): Promise<ApplicationsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec,
    );
  }

  /**
   * ListOwnersNext
   * @param applicationObjectId The object ID of the application for which to get owners.
   * @param nextLink The nextLink from the previous successful call to the ListOwners method.
   * @param options The options parameters.
   */
  private _listOwnersNext(
    applicationObjectId: string,
    nextLink: string,
    options?: ApplicationsListOwnersNextOptionalParams,
  ): Promise<ApplicationsListOwnersNextResponse> {
    return this.client.sendOperationRequest(
      { applicationObjectId, nextLink, options },
      listOwnersNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/applications",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.Application,
    },
    default: {
      bodyMapper: Mappers.GraphError,
    },
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/applications",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationListResult,
    },
    default: {
      bodyMapper: Mappers.GraphError,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [Parameters.$host, Parameters.tenantID],
  headerParameters: [Parameters.accept],
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/applications/{applicationObjectId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.tenantID,
    Parameters.applicationObjectId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/applications/{applicationObjectId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Application,
    },
    default: {
      bodyMapper: Mappers.GraphError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.tenantID,
    Parameters.applicationObjectId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const patchOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/applications/{applicationObjectId}",
  httpMethod: "PATCH",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError,
    },
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.tenantID,
    Parameters.applicationObjectId,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listOwnersOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/applications/{applicationObjectId}/owners",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DirectoryObjectListResult,
    },
    default: {
      bodyMapper: Mappers.GraphError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.tenantID,
    Parameters.applicationObjectId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const addOwnerOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/applications/{applicationObjectId}/$links/owners",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError,
    },
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.tenantID,
    Parameters.applicationObjectId,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const removeOwnerOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/applications/{applicationObjectId}/$links/owners/{ownerObjectId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.tenantID,
    Parameters.applicationObjectId,
    Parameters.ownerObjectId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listKeyCredentialsOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/applications/{applicationObjectId}/keyCredentials",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.KeyCredentialListResult,
    },
    default: {
      bodyMapper: Mappers.GraphError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.tenantID,
    Parameters.applicationObjectId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateKeyCredentialsOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/applications/{applicationObjectId}/keyCredentials",
  httpMethod: "PATCH",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError,
    },
  },
  requestBody: Parameters.parameters3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.tenantID,
    Parameters.applicationObjectId,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listPasswordCredentialsOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/applications/{applicationObjectId}/passwordCredentials",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PasswordCredentialListResult,
    },
    default: {
      bodyMapper: Mappers.GraphError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.tenantID,
    Parameters.applicationObjectId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const updatePasswordCredentialsOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/applications/{applicationObjectId}/passwordCredentials",
  httpMethod: "PATCH",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError,
    },
  },
  requestBody: Parameters.parameters4,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.tenantID,
    Parameters.applicationObjectId,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getServicePrincipalsIdByAppIdOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/servicePrincipalsByAppId/{applicationID}/objectId",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServicePrincipalObjectResult,
    },
    default: {
      bodyMapper: Mappers.GraphError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.tenantID,
    Parameters.applicationID,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationListResult,
    },
    default: {
      bodyMapper: Mappers.GraphError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer,
};
const listOwnersNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DirectoryObjectListResult,
    },
    default: {
      bodyMapper: Mappers.GraphError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.tenantID,
    Parameters.nextLink,
    Parameters.applicationObjectId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
