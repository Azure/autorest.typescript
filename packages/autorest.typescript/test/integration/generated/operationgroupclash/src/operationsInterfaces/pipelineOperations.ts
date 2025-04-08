import type {
  PipelineApiV1ValueGetOptionalParams,
  PipelineApiV1ValueGetResponse,
} from "../models/index.js";

/** Interface representing a PipelineOperations. */
export interface PipelineOperations {
  /** @param options The options parameters. */
  apiV1ValueGet(
    options?: PipelineApiV1ValueGetOptionalParams,
  ): Promise<PipelineApiV1ValueGetResponse>;
}
