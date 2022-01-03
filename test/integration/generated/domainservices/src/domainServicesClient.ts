import * as coreClient from "@azure/core-client";
import {
  DomainServiceOperationsImpl,
  DomainServicesImpl,
  OuContainerOperationsImpl,
  OuContainerOperationGrpImpl
} from "./operations";
import {
  DomainServiceOperations,
  DomainServices,
  OuContainerOperations,
  OuContainerOperationGrp
} from "./operationsInterfaces";
import { DomainServicesClientOptionalParams } from "./models";

export class DomainServicesClient extends coreClient.ServiceClient {
  $host: string;
  apiVersion: string;
  subscriptionId: string;

  /**
   * Initializes a new instance of the DomainServicesClient class.
   * @param subscriptionId Gets subscription credentials which uniquely identify the Microsoft Azure
   *                       subscription. The subscription ID forms part of the URI for every service call.
   * @param options The parameter options
   */
  constructor(
    subscriptionId: string,
    options?: DomainServicesClientOptionalParams
  ) {
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: DomainServicesClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-domainservices/1.0.0-preview1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri: options.endpoint || "https://management.azure.com"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2021-05-01";
    this.domainServiceOperations = new DomainServiceOperationsImpl(this);
    this.domainServices = new DomainServicesImpl(this);
    this.ouContainerOperations = new OuContainerOperationsImpl(this);
    this.ouContainerOperationGrp = new OuContainerOperationGrpImpl(this);
  }

  domainServiceOperations: DomainServiceOperations;
  domainServices: DomainServices;
  ouContainerOperations: OuContainerOperations;
  ouContainerOperationGrp: OuContainerOperationGrp;
}
