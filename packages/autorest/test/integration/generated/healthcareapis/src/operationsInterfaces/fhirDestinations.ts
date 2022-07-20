import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  IotFhirDestination,
  FhirDestinationsListByIotConnectorOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a FhirDestinations. */
export interface FhirDestinations {
  /**
   * Lists all FHIR destinations for the given IoT Connector
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param iotConnectorName The name of IoT Connector resource.
   * @param options The options parameters.
   */
  listByIotConnector(
    resourceGroupName: string,
    workspaceName: string,
    iotConnectorName: string,
    options?: FhirDestinationsListByIotConnectorOptionalParams
  ): PagedAsyncIterableIterator<IotFhirDestination>;
}
