/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { AuthorizationOperations } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { ManagementLockClient } from "../managementLockClient.js";
import {
  Operation,
  AuthorizationOperationsListNextOptionalParams,
  AuthorizationOperationsListOptionalParams,
  AuthorizationOperationsListResponse,
  AuthorizationOperationsListNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing AuthorizationOperations operations. */
export class AuthorizationOperationsImpl implements AuthorizationOperations {
  private readonly client: ManagementLockClient;

  /**
   * Initialize a new instance of the class AuthorizationOperations class.
   * @param client Reference to the service client
   */
  constructor(client: ManagementLockClient) {
    this.client = client;
  }

  /**
   * Lists all of the available Microsoft.Authorization REST API operations.
   * @param options The options parameters.
   */
  public list(
    options?: AuthorizationOperationsListOptionalParams,
  ): PagedAsyncIterableIterator<Operation> {
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
    options?: AuthorizationOperationsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<Operation[]> {
    let result: AuthorizationOperationsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    options?: AuthorizationOperationsListOptionalParams,
  ): AsyncIterableIterator<Operation> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists all of the available Microsoft.Authorization REST API operations.
   * @param options The options parameters.
   */
  private _list(
    options?: AuthorizationOperationsListOptionalParams,
  ): Promise<AuthorizationOperationsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: AuthorizationOperationsListNextOptionalParams,
  ): Promise<AuthorizationOperationsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Authorization/operations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OperationListResult,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OperationListResult,
    },
  },
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer,
};
