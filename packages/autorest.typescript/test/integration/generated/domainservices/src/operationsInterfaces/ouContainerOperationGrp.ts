import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  OuContainer,
  OuContainerListOptionalParams,
  OuContainerGetOptionalParams,
  OuContainerGetResponse,
  ContainerAccount,
  OuContainerCreateOptionalParams,
  OuContainerCreateResponse,
  OuContainerDeleteOptionalParams,
  OuContainerUpdateOptionalParams,
  OuContainerUpdateResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a OuContainerOperationGrp. */
export interface OuContainerOperationGrp {
  /**
   * The List of OuContainers in DomainService instance.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param domainServiceName The name of the domain service.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    domainServiceName: string,
    options?: OuContainerListOptionalParams,
  ): PagedAsyncIterableIterator<OuContainer>;
  /**
   * Get OuContainer in DomainService instance.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param domainServiceName The name of the domain service.
   * @param ouContainerName The name of the OuContainer.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    domainServiceName: string,
    ouContainerName: string,
    options?: OuContainerGetOptionalParams,
  ): Promise<OuContainerGetResponse>;
  /**
   * The Create OuContainer operation creates a new OuContainer under the specified Domain Service
   * instance.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param domainServiceName The name of the domain service.
   * @param ouContainerName The name of the OuContainer.
   * @param containerAccount Container Account Description.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    domainServiceName: string,
    ouContainerName: string,
    containerAccount: ContainerAccount,
    options?: OuContainerCreateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<OuContainerCreateResponse>,
      OuContainerCreateResponse
    >
  >;
  /**
   * The Create OuContainer operation creates a new OuContainer under the specified Domain Service
   * instance.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param domainServiceName The name of the domain service.
   * @param ouContainerName The name of the OuContainer.
   * @param containerAccount Container Account Description.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    domainServiceName: string,
    ouContainerName: string,
    containerAccount: ContainerAccount,
    options?: OuContainerCreateOptionalParams,
  ): Promise<OuContainerCreateResponse>;
  /**
   * The Delete OuContainer operation deletes specified OuContainer.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param domainServiceName The name of the domain service.
   * @param ouContainerName The name of the OuContainer.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    domainServiceName: string,
    ouContainerName: string,
    options?: OuContainerDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * The Delete OuContainer operation deletes specified OuContainer.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param domainServiceName The name of the domain service.
   * @param ouContainerName The name of the OuContainer.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    domainServiceName: string,
    ouContainerName: string,
    options?: OuContainerDeleteOptionalParams,
  ): Promise<void>;
  /**
   * The Update OuContainer operation can be used to update the existing OuContainers.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param domainServiceName The name of the domain service.
   * @param ouContainerName The name of the OuContainer.
   * @param containerAccount Container Account Description.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    domainServiceName: string,
    ouContainerName: string,
    containerAccount: ContainerAccount,
    options?: OuContainerUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<OuContainerUpdateResponse>,
      OuContainerUpdateResponse
    >
  >;
  /**
   * The Update OuContainer operation can be used to update the existing OuContainers.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param domainServiceName The name of the domain service.
   * @param ouContainerName The name of the OuContainer.
   * @param containerAccount Container Account Description.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    domainServiceName: string,
    ouContainerName: string,
    containerAccount: ContainerAccount,
    options?: OuContainerUpdateOptionalParams,
  ): Promise<OuContainerUpdateResponse>;
}
