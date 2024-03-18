import { OpenAIContext } from "../../api/OpenAIContext.js";
import { FineTuningJobsOperations } from "./jobs/index.js";
export interface FineTuningOperations {
    jobs: FineTuningJobsOperations;
}
export declare function getFineTuningOperations(context: OpenAIContext): FineTuningOperations;
//# sourceMappingURL=index.d.ts.map