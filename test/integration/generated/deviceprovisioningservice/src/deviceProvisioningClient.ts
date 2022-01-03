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
import { DeviceProvisioningClientContext } from "./deviceProvisioningClientContext";
import { DeviceProvisioningClientOptionalParams } from "./models";

export class DeviceProvisioningClient extends DeviceProvisioningClientContext {
  /**
   * Initializes a new instance of the DeviceProvisioningClient class.
   * @param subscriptionId The subscription identifier.
   * @param options The parameter options
   */
  constructor(
    subscriptionId: string,
    options?: DeviceProvisioningClientOptionalParams
  ) {
    super(subscriptionId, options);
    this.operations = new OperationsImpl(this);
    this.dpsCertificate = new DpsCertificateImpl(this);
    this.iotDpsResource = new IotDpsResourceImpl(this);
  }

  operations: Operations;
  dpsCertificate: DpsCertificate;
  iotDpsResource: IotDpsResource;
}
