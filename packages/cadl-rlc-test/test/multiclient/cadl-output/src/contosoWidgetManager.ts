import { getClient, ClientOptions } from "@azure-rest/core-client";
import { ContosoWidgetManagerClient } from "./clientDefinitions";

/**
 * Initialize a new instance of the class ContosoWidgetManagerClient class.
 *
 */
export default function createClient(
  options: ClientOptions = {}
): ContosoWidgetManagerClient {
  const baseUrl = options.baseUrl ?? "undefined";
  options.apiVersion = options.apiVersion ?? "0000-00-00";

  const userAgentInfo = `azsdk-js-multiclient-rest/1.0.0-beta.1`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix,
    },
  };

  const client = getClient(baseUrl, options) as ContosoWidgetManagerClient;

  return {
    ...client,
    widgets: {
      getWidgetOperationStatus: (widgetName, operationId, options) => {
        return client
          .path(
            "/widgets/{widgetName}/operations/{operationId}",
            widgetName,
            operationId
          )
          .get(options);
      },
      createOrUpdateWidget: (widgetName, options) => {
        return client.path("/widgets/{widgetName}", widgetName).patch(options);
      },
      getWidget: (widgetName, options) => {
        return client.path("/widgets/{widgetName}", widgetName).get(options);
      },
      deleteWidget: (widgetName, options) => {
        return client.path("/widgets/{widgetName}", widgetName).delete(options);
      },
      listWidgets: (options) => {
        return client.path("/widgets").get(options);
      },
      getAnalytics: (widgetName, options) => {
        return client
          .path("/widgets/{widgetName}/analytics/current", widgetName)
          .get(options);
      },
      updateAnalytics: (widgetName, options) => {
        return client
          .path("/widgets/{widgetName}/analytics/current", widgetName)
          .patch(options);
      },
      getRepairStatus: (operationId, widgetId, options) => {
        return client
          .path(
            "/widgets/{widgetId}/repairs/{operationId}",
            operationId,
            widgetId
          )
          .get(options);
      },
      scheduleRepairs: (widgetName, options) => {
        return client
          .path("/widgets/{widgetName}:scheduleRepairs", widgetName)
          .post(options);
      },
    },
    widgetParts: {
      getWidgetPartOperationStatus: (
        widgetName,
        widgetPartName,
        operationId,
        options
      ) => {
        return client
          .path(
            "/widgets/{widgetName}/parts/{widgetPartName}/operations/{operationId}",
            widgetName,
            widgetPartName,
            operationId
          )
          .get(options);
      },
      createWidgetPart: (widgetName, options) => {
        return client
          .path("/widgets/{widgetName}/parts", widgetName)
          .post(options);
      },
      listWidgetParts: (widgetName, options) => {
        return client
          .path("/widgets/{widgetName}/parts", widgetName)
          .get(options);
      },
      getWidgetPart: (widgetName, widgetPartName, options) => {
        return client
          .path(
            "/widgets/{widgetName}/parts/{widgetPartName}",
            widgetName,
            widgetPartName
          )
          .get(options);
      },
      deleteWidgetPart: (widgetName, widgetPartName, options) => {
        return client
          .path(
            "/widgets/{widgetName}/parts/{widgetPartName}",
            widgetName,
            widgetPartName
          )
          .delete(options);
      },
      reorderParts: (widgetName, options) => {
        return client
          .path("/widgets/{widgetName}/parts:reorderParts", widgetName)
          .post(options);
      },
    },
    manufacturers: {
      getManufacturerOperationStatus: (
        manufacturerId,
        operationId,
        options
      ) => {
        return client
          .path(
            "/manufacturers/{manufacturerId}/operations/{operationId}",
            manufacturerId,
            operationId
          )
          .get(options);
      },
      createManufacturer: (manufacturerId, options) => {
        return client
          .path("/manufacturers/{manufacturerId}", manufacturerId)
          .put(options);
      },
      getManufacturer: (manufacturerId, options) => {
        return client
          .path("/manufacturers/{manufacturerId}", manufacturerId)
          .get(options);
      },
      deleteManufacturer: (manufacturerId, options) => {
        return client
          .path("/manufacturers/{manufacturerId}", manufacturerId)
          .delete(options);
      },
      listManufacturers: (options) => {
        return client.path("/manufacturers").get(options);
      },
    },
  };
}
