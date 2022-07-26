import {
  ProductApiV1ValueGetOptionalParams,
  ProductApiV1ValueGetResponse
} from "../models";

/** Interface representing a ProductOperations. */
export interface ProductOperations {
  /** @param options The options parameters. */
  apiV1ValueGet(
    options?: ProductApiV1ValueGetOptionalParams
  ): Promise<ProductApiV1ValueGetResponse>;
}
