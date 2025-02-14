// Licensed under the MIT License.

import {
  BookStoreContext as Client,
  OrdersGetOrderOptionalParams,
  OrdersPlaceOrderOptionalParams,
  OrdersUpdateStatusOptionalParams,
} from "../index.js";
import {
  Order,
  orderSerializer,
  orderDeserializer,
  OrderStatus,
  errorDeserializer,
} from "../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@typespec/ts-http-runtime";

export function _updateStatusSend(
  context: Client,
  id: string,
  status: OrderStatus,
  options: OrdersUpdateStatusOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/orders/{id}", id)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: status,
    });
}

export async function _updateStatusDeserialize(
  result: PathUncheckedResponse,
): Promise<Order> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorDeserializer(result.body);
    throw error;
  }

  return orderDeserializer(result.body);
}

/** Update the status of an order */
export async function updateStatus(
  context: Client,
  id: string,
  status: OrderStatus,
  options: OrdersUpdateStatusOptionalParams = { requestOptions: {} },
): Promise<Order> {
  const result = await _updateStatusSend(context, id, status, options);
  return _updateStatusDeserialize(result);
}

export function _getOrderSend(
  context: Client,
  id: string,
  options: OrdersGetOrderOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/orders/{id}", id)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getOrderDeserialize(
  result: PathUncheckedResponse,
): Promise<Order> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorDeserializer(result.body);
    throw error;
  }

  return orderDeserializer(result.body);
}

/** Get an order by ID */
export async function getOrder(
  context: Client,
  id: string,
  options: OrdersGetOrderOptionalParams = { requestOptions: {} },
): Promise<Order> {
  const result = await _getOrderSend(context, id, options);
  return _getOrderDeserialize(result);
}

export function _placeOrderSend(
  context: Client,
  order: Order,
  options: OrdersPlaceOrderOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/orders")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: orderSerializer(order),
    });
}

export async function _placeOrderDeserialize(
  result: PathUncheckedResponse,
): Promise<Order> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorDeserializer(result.body);
    throw error;
  }

  return orderDeserializer(result.body);
}

/** Place a new order */
export async function placeOrder(
  context: Client,
  order: Order,
  options: OrdersPlaceOrderOptionalParams = { requestOptions: {} },
): Promise<Order> {
  const result = await _placeOrderSend(context, order, options);
  return _placeOrderDeserialize(result);
}
