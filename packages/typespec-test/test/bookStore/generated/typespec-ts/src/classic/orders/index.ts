// Licensed under the MIT License.

import { BookStoreContext } from "../../api/bookStoreContext.js";
import {
  OrdersUpdateStatusOptionalParams,
  OrdersGetOrderOptionalParams,
  OrdersPlaceOrderOptionalParams,
} from "../../api/options.js";
import { updateStatus, getOrder, placeOrder } from "../../api/orders/index.js";
import { Order, OrderStatus } from "../../models/models.js";

/** Interface representing a Orders operations. */
export interface OrdersOperations {
  /** Update the status of an order */
  updateStatus: (
    id: string,
    status: OrderStatus,
    options?: OrdersUpdateStatusOptionalParams,
  ) => Promise<Order>;
  /** Get an order by ID */
  getOrder: (
    id: string,
    options?: OrdersGetOrderOptionalParams,
  ) => Promise<Order>;
  /** Place a new order */
  placeOrder: (
    order: Order,
    options?: OrdersPlaceOrderOptionalParams,
  ) => Promise<Order>;
}

function _getOrders(context: BookStoreContext) {
  return {
    updateStatus: (
      id: string,
      status: OrderStatus,
      options?: OrdersUpdateStatusOptionalParams,
    ) => updateStatus(context, id, status, options),
    getOrder: (id: string, options?: OrdersGetOrderOptionalParams) =>
      getOrder(context, id, options),
    placeOrder: (order: Order, options?: OrdersPlaceOrderOptionalParams) =>
      placeOrder(context, order, options),
  };
}

export function _getOrdersOperations(
  context: BookStoreContext,
): OrdersOperations {
  return {
    ..._getOrders(context),
  };
}
