import {
  PipelineOperationsApiV1ValueGetOptionalParams,
  PipelineOperationsApiV1ValueGetResponse
} from "../models";

/** Interface representing a PipelineOperations. */
export interface PipelineOperations {
  /** @param options The options parameters. */
  apiV1ValueGet(
    options?: PipelineOperationsApiV1ValueGetOptionalParams
  ): Promise<PipelineOperationsApiV1ValueGetResponse>;
}
