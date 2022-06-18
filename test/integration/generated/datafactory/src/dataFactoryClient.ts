import * as coreClient from "@azure/core-client";
import {
  PipelineRequest,
  PipelineResponse,
  SendRequest
} from "@azure/core-rest-pipeline";
import {
  OperationsImpl,
  FactoriesImpl,
  ExposureControlImpl,
  IntegrationRuntimesImpl,
  IntegrationRuntimeObjectMetadataImpl,
  IntegrationRuntimeNodesImpl,
  LinkedServicesImpl,
  DatasetsImpl,
  PipelinesImpl,
  PipelineRunsImpl,
  ActivityRunsImpl,
  TriggersImpl,
  TriggerRunsImpl,
  DataFlowsImpl,
  DataFlowDebugSessionImpl,
  ManagedVirtualNetworksImpl,
  ManagedPrivateEndpointsImpl,
  PrivateEndPointConnectionsImpl,
  PrivateEndpointConnectionImpl,
  PrivateLinkResourcesImpl
} from "./operations";
import {
  Operations,
  Factories,
  ExposureControl,
  IntegrationRuntimes,
  IntegrationRuntimeObjectMetadata,
  IntegrationRuntimeNodes,
  LinkedServices,
  Datasets,
  Pipelines,
  PipelineRuns,
  ActivityRuns,
  Triggers,
  TriggerRuns,
  DataFlows,
  DataFlowDebugSession,
  ManagedVirtualNetworks,
  ManagedPrivateEndpoints,
  PrivateEndPointConnections,
  PrivateEndpointConnection,
  PrivateLinkResources
} from "./operationsInterfaces";
import { DataFactoryClientOptionalParams } from "./models";

export class DataFactoryClient extends coreClient.ServiceClient {
  $host: string;
  apiVersion: string;
  subscriptionId: string;

  /**
   * Initializes a new instance of the DataFactoryClient class.
   * @param subscriptionId The subscription identifier.
   * @param options The parameter options
   */
  constructor(
    subscriptionId: string,
    options?: DataFactoryClientOptionalParams
  ) {
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: DataFactoryClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-datafactory/1.0.0-preview1`;
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
      baseUri:
        options.endpoint ?? options.baseUri ?? "https://management.azure.com"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2018-06-01";
    this.operations = new OperationsImpl(this);
    this.factories = new FactoriesImpl(this);
    this.exposureControl = new ExposureControlImpl(this);
    this.integrationRuntimes = new IntegrationRuntimesImpl(this);
    this.integrationRuntimeObjectMetadata = new IntegrationRuntimeObjectMetadataImpl(
      this
    );
    this.integrationRuntimeNodes = new IntegrationRuntimeNodesImpl(this);
    this.linkedServices = new LinkedServicesImpl(this);
    this.datasets = new DatasetsImpl(this);
    this.pipelines = new PipelinesImpl(this);
    this.pipelineRuns = new PipelineRunsImpl(this);
    this.activityRuns = new ActivityRunsImpl(this);
    this.triggers = new TriggersImpl(this);
    this.triggerRuns = new TriggerRunsImpl(this);
    this.dataFlows = new DataFlowsImpl(this);
    this.dataFlowDebugSession = new DataFlowDebugSessionImpl(this);
    this.managedVirtualNetworks = new ManagedVirtualNetworksImpl(this);
    this.managedPrivateEndpoints = new ManagedPrivateEndpointsImpl(this);
    this.privateEndPointConnections = new PrivateEndPointConnectionsImpl(this);
    this.privateEndpointConnection = new PrivateEndpointConnectionImpl(this);
    this.privateLinkResources = new PrivateLinkResourcesImpl(this);
    this.addCustomApiVersionPolicy(options.apiVersion);
  }

  /** A function that adds a policy that sets the api-version (or equivalent) to reflect the library version. */
  private addCustomApiVersionPolicy(apiVersion?: string) {
    if (!apiVersion) {
      return;
    }
    const apiVersionPolicy = {
      name: "CustomApiVersionPolicy",
      async sendRequest(
        request: PipelineRequest,
        next: SendRequest
      ): Promise<PipelineResponse> {
        const param = request.url.split("?");
        if (param.length > 1) {
          const newParams = param[1].split("&").map((item) => {
            if (item.indexOf("api-version") > -1) {
              return "api-version=" + apiVersion;
            } else {
              return item;
            }
          });
          request.url = param[0] + "?" + newParams.join("&");
        }
        return next(request);
      }
    };
    this.pipeline.addPolicy(apiVersionPolicy);
  }

  operations: Operations;
  factories: Factories;
  exposureControl: ExposureControl;
  integrationRuntimes: IntegrationRuntimes;
  integrationRuntimeObjectMetadata: IntegrationRuntimeObjectMetadata;
  integrationRuntimeNodes: IntegrationRuntimeNodes;
  linkedServices: LinkedServices;
  datasets: Datasets;
  pipelines: Pipelines;
  pipelineRuns: PipelineRuns;
  activityRuns: ActivityRuns;
  triggers: Triggers;
  triggerRuns: TriggerRuns;
  dataFlows: DataFlows;
  dataFlowDebugSession: DataFlowDebugSession;
  managedVirtualNetworks: ManagedVirtualNetworks;
  managedPrivateEndpoints: ManagedPrivateEndpoints;
  privateEndPointConnections: PrivateEndPointConnections;
  privateEndpointConnection: PrivateEndpointConnection;
  privateLinkResources: PrivateLinkResources;
}
