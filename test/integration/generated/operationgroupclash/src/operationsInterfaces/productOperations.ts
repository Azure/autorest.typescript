import {
  ProductOperationsApiV1ValueGetOptionalParams,
  ProductOperationsApiV1ValueGetResponse
} from "../models";

/** Interface representing a ProductOperations. */
export interface ProductOperations {
  /** @param options The options parameters. */
  apiV1ValueGet(
    options?: ProductOperationsApiV1ValueGetOptionalParams
  ): Promise<ProductOperationsApiV1ValueGetResponse>;
}
