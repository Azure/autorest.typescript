import {
  ServicesImpl,
  PrivateEndpointConnectionsImpl,
  PrivateLinkResourcesImpl,
  WorkspacesImpl,
  DicomServicesImpl,
  IotConnectorsImpl,
  FhirDestinationsImpl,
  IotConnectorFhirDestinationImpl,
  FhirServicesImpl,
  OperationsImpl,
  OperationResultsImpl
} from "./operations";
import {
  Services,
  PrivateEndpointConnections,
  PrivateLinkResources,
  Workspaces,
  DicomServices,
  IotConnectors,
  FhirDestinations,
  IotConnectorFhirDestination,
  FhirServices,
  Operations,
  OperationResults
} from "./operationsInterfaces";
import { HealthCareApisClientOptionalParams } from "./models";

export class HealthCareApisClient extends coreClient.ServiceClient {
  Host: string;
  apiVersion: string;
  subscriptionId: string;

  /**
   * Initializes a new instance of the HealthCareApisClient class.
   * @param subscriptionId The subscription identifier.
   * @param options The parameter options
   */
  constructor(
    subscriptionId: string,
    options?: HealthCareApisClientOptionalParams
  ) {
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: HealthCareApisClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-healthcareapis/1.0.0-preview1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    if (!options.credentialScopes) {
      options.credentialScopes = ["https://management.azure.com/.default"];
    }
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
    this.Host = options.Host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2021-06-01-preview";
    this.services = new ServicesImpl(this);
    this.privateEndpointConnections = new PrivateEndpointConnectionsImpl(this);
    this.privateLinkResources = new PrivateLinkResourcesImpl(this);
    this.workspaces = new WorkspacesImpl(this);
    this.dicomServices = new DicomServicesImpl(this);
    this.iotConnectors = new IotConnectorsImpl(this);
    this.fhirDestinations = new FhirDestinationsImpl(this);
    this.iotConnectorFhirDestination = new IotConnectorFhirDestinationImpl(
      this
    );
    this.fhirServices = new FhirServicesImpl(this);
    this.operations = new OperationsImpl(this);
    this.operationResults = new OperationResultsImpl(this);
  }

  services: Services;
  privateEndpointConnections: PrivateEndpointConnections;
  privateLinkResources: PrivateLinkResources;
  workspaces: Workspaces;
  dicomServices: DicomServices;
  iotConnectors: IotConnectors;
  fhirDestinations: FhirDestinations;
  iotConnectorFhirDestination: IotConnectorFhirDestination;
  fhirServices: FhirServices;
  operations: Operations;
  operationResults: OperationResults;
}
