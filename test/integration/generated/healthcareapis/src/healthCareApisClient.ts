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
import { HealthCareApisClientContext } from "./healthCareApisClientContext";
import { HealthCareApisClientOptionalParams } from "./models";

export class HealthCareApisClient extends HealthCareApisClientContext {
  /**
   * Initializes a new instance of the HealthCareApisClient class.
   * @param subscriptionId The subscription identifier.
   * @param options The parameter options
   */
  constructor(
    subscriptionId: string,
    options?: HealthCareApisClientOptionalParams
  ) {
    super(subscriptionId, options);
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
