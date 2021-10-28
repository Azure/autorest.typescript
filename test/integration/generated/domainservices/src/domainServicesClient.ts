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
import { DomainServicesClientContext } from "./domainServicesClientContext";
import { DomainServicesClientOptionalParams } from "./models";

export class DomainServicesClient extends DomainServicesClientContext {
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
    super(subscriptionId, options);
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
