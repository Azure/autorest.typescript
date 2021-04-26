import { ProductOperationsImpl } from "./operations";
import { ProductOperations } from "./operationsInterfaces";
import { OperationGroupClashClientContext } from "./operationGroupClashClientContext";
import { OperationGroupClashClientOptionalParams, Enum0 } from "./models";

export class OperationGroupClashClient extends OperationGroupClashClientContext {
  /**
   * Initializes a new instance of the OperationGroupClashClient class.
   * @param $host server parameter
   * @param apiVersion
   * @param options The parameter options
   */
  constructor(
    $host: string,
    apiVersion: Enum0,
    options?: OperationGroupClashClientOptionalParams
  ) {
    super($host, apiVersion, options);
    this.productOperations = new ProductOperationsImpl(this);
  }

  productOperations: ProductOperations;
}
