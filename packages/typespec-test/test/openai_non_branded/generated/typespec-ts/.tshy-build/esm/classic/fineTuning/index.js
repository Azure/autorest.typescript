// Licensed under the MIT license.
import { getFineTuningJobsOperations, } from "./jobs/index.js";
export function getFineTuningOperations(context) {
    return {
        jobs: getFineTuningJobsOperations(context),
    };
}
//# sourceMappingURL=index.js.map