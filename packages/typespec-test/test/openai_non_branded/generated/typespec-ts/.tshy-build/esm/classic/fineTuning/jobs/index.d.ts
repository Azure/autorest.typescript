import { OpenAIContext } from "../../../api/OpenAIContext.js";
import { CreateFineTuningJobRequest, FineTuningJob, ListPaginatedFineTuningJobsResponse, ListFineTuningJobEventsResponse } from "../../../models/models.js";
import { FineTuningJobsCreateOptions, FineTuningJobsListOptions, FineTuningJobsRetrieveOptions, FineTuningJobsListEventsOptions, FineTuningJobsCancelOptions } from "../../../models/options.js";
export interface FineTuningJobsOperations {
    create: (job: CreateFineTuningJobRequest, options?: FineTuningJobsCreateOptions) => Promise<FineTuningJob>;
    list: (options?: FineTuningJobsListOptions) => Promise<ListPaginatedFineTuningJobsResponse>;
    retrieve: (fineTuningJobId: string, options?: FineTuningJobsRetrieveOptions) => Promise<FineTuningJob>;
    listEvents: (fineTuningJobId: string, options?: FineTuningJobsListEventsOptions) => Promise<ListFineTuningJobEventsResponse>;
    cancel: (fineTuningJobId: string, options?: FineTuningJobsCancelOptions) => Promise<FineTuningJob>;
}
export declare function getFineTuningJobs(context: OpenAIContext): {
    create: (job: CreateFineTuningJobRequest, options?: FineTuningJobsCreateOptions) => Promise<FineTuningJob>;
    list: (options?: FineTuningJobsListOptions) => Promise<ListPaginatedFineTuningJobsResponse>;
    retrieve: (fineTuningJobId: string, options?: FineTuningJobsRetrieveOptions) => Promise<FineTuningJob>;
    listEvents: (fineTuningJobId: string, options?: FineTuningJobsListEventsOptions) => Promise<ListFineTuningJobEventsResponse>;
    cancel: (fineTuningJobId: string, options?: FineTuningJobsCancelOptions) => Promise<FineTuningJob>;
};
export declare function getFineTuningJobsOperations(context: OpenAIContext): FineTuningJobsOperations;
//# sourceMappingURL=index.d.ts.map