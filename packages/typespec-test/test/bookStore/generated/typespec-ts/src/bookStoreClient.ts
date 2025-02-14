// Licensed under the MIT License.

import {
  _getOrdersOperations,
  OrdersOperations,
} from "./classic/orders/index.js";
import {
  _getPublicationsOperations,
  PublicationsOperations,
} from "./classic/publications/index.js";
import {
  createBookStore,
  BookStoreContext,
  BookStoreClientOptionalParams,
} from "./api/index.js";
import { Pipeline } from "@typespec/ts-http-runtime";

export { BookStoreClientOptionalParams } from "./api/bookStoreContext.js";

export class BookStoreClient {
  private _client: BookStoreContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** API for managing a book store inventory and orders */
  constructor(options: BookStoreClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createBookStore({
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.orders = _getOrdersOperations(this._client);
    this.publications = _getPublicationsOperations(this._client);
  }

  /** The operation groups for orders */
  public readonly orders: OrdersOperations;
  /** The operation groups for publications */
  public readonly publications: PublicationsOperations;
}
