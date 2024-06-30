import { GetJob200Response, GetJobDefaultResponse, CreateJob202Response, CreateJobLogicalResponse, CreateJobDefaultResponse } from "./responses.js";
export declare function isUnexpected(response: GetJob200Response | GetJobDefaultResponse): response is GetJobDefaultResponse;
export declare function isUnexpected(response: CreateJob202Response | CreateJobLogicalResponse | CreateJobDefaultResponse): response is CreateJobDefaultResponse;
//# sourceMappingURL=isUnexpected.d.ts.map