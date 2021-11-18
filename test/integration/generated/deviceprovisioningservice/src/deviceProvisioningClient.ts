import {
  OperationsImpl,
  DpsCertificateImpl,
  IotDpsResourceImpl
} from "./operations";
import {
  Operations,
  DpsCertificate,
  IotDpsResource
} from "./operationsInterfaces";
import { DeviceProvisioningClientOptionalParams } from "./models";

export class DeviceProvisioningClient extends coreClient.ServiceClient {
  Host: string;
  apiVersion: string;
  subscriptionId: string;

  /**
   * Initializes a new instance of the DeviceProvisioningClient class.
   * @param subscriptionId The subscription identifier.
   * @param options The parameter options
   */
  constructor(
    subscriptionId: string,
    options?: DeviceProvisioningClientOptionalParams
  ) {
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: DeviceProvisioningClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-deviceprovisioning/1.0.0-preview1`;
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
    this.Host = options.Host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2020-03-01";
    this.operations = new OperationsImpl(this);
    this.dpsCertificate = new DpsCertificateImpl(this);
    this.iotDpsResource = new IotDpsResourceImpl(this);
  }

  operations: Operations;
  dpsCertificate: DpsCertificate;
  iotDpsResource: IotDpsResource;
}
