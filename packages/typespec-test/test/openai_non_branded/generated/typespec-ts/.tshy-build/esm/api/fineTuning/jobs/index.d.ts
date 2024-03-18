import { CreateFineTuningJobRequest, FineTuningJob, ListPaginatedFineTuningJobsResponse, ListFineTuningJobEventsResponse } from "../../../models/models.js";
import { FineTuningJobsCancel200Response, FineTuningJobsCancelDefaultResponse, FineTuningJobsCreate200Response, FineTuningJobsCreateDefaultResponse, FineTuningJobsList200Response, FineTuningJobsListDefaultResponse, FineTuningJobsListEvents200Response, FineTuningJobsListEventsDefaultResponse, FineTuningJobsRetrieve200Response, FineTuningJobsRetrieveDefaultResponse, OpenAIContext as Client } from "../../../rest/index.js";
import { StreamableMethod } from "@typespec/ts-http-runtime";
import { FineTuningJobsCreateOptions, FineTuningJobsListOptions, FineTuningJobsRetrieveOptions, FineTuningJobsListEventsOptions, FineTuningJobsCancelOptions } from "../../../models/options.js";
export declare function _createSend(context: Client, job: CreateFineTuningJobRequest, options?: FineTuningJobsCreateOptions): StreamableMethod<FineTuningJobsCreate200Response | FineTuningJobsCreateDefaultResponse>;
export declare function _createDeserialize(result: FineTuningJobsCreate200Response | FineTuningJobsCreateDefaultResponse): Promise<FineTuningJob>;
/**
 * Creates a job that fine-tunes a specified model from a given dataset.
 *
 * Response includes details of the enqueued job including job status and the name of the
 * fine-tuned models once complete.
 *
 * [Learn more about fine-tuning](/docs/guides/fine-tuning)
 */
export declare function create(context: Client, job: CreateFineTuningJobRequest, options?: FineTuningJobsCreateOptions): Promise<FineTuningJob>;
export declare function _listSend(context: Client, options?: FineTuningJobsListOptions): StreamableMethod<FineTuningJobsList200Response | FineTuningJobsListDefaultResponse>;
export declare function _listDeserialize(result: FineTuningJobsList200Response | FineTuningJobsListDefaultResponse): Promise<ListPaginatedFineTuningJobsResponse>;
export declare function list(context: Client, options?: FineTuningJobsListOptions): Promise<ListPaginatedFineTuningJobsResponse>;
export declare function _retrieveSend(context: Client, fineTuningJobId: string, options?: FineTuningJobsRetrieveOptions): StreamableMethod<FineTuningJobsRetrieve200Response | FineTuningJobsRetrieveDefaultResponse>;
export declare function _retrieveDeserialize(result: FineTuningJobsRetrieve200Response | FineTuningJobsRetrieveDefaultResponse): Promise<FineTuningJob>;
export declare function retrieve(context: Client, fineTuningJobId: string, options?: FineTuningJobsRetrieveOptions): Promise<FineTuningJob>;
export declare function _listEventsSend(context: Client, fineTuningJobId: string, options?: FineTuningJobsListEventsOptions): StreamableMethod<FineTuningJobsListEvents200Response | FineTuningJobsListEventsDefaultResponse>;
export declare function _listEventsDeserialize(result: FineTuningJobsListEvents200Response | FineTuningJobsListEventsDefaultResponse): Promise<ListFineTuningJobEventsResponse>;
export declare function listEvents(context: Client, fineTuningJobId: string, options?: FineTuningJobsListEventsOptions): Promise<ListFineTuningJobEventsResponse>;
export declare function _cancelSend(context: Client, fineTuningJobId: string, options?: FineTuningJobsCancelOptions): StreamableMethod<FineTuningJobsCancel200Response | FineTuningJobsCancelDefaultResponse>;
export declare function _cancelDeserialize(result: FineTuningJobsCancel200Response | FineTuningJobsCancelDefaultResponse): Promise<FineTuningJob>;
export declare function cancel(context: Client, fineTuningJobId: string, options?: FineTuningJobsCancelOptions): Promise<FineTuningJob>;
//# sourceMappingURL=index.d.ts.map