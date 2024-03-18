// Licensed under the MIT license.
import { create, list, retrieve, listEvents, cancel, } from "../../../api/fineTuning/jobs/index.js";
export function getFineTuningJobs(context) {
    return {
        create: (job, options) => create(context, job, options),
        list: (options) => list(context, options),
        retrieve: (fineTuningJobId, options) => retrieve(context, fineTuningJobId, options),
        listEvents: (fineTuningJobId, options) => listEvents(context, fineTuningJobId, options),
        cancel: (fineTuningJobId, options) => cancel(context, fineTuningJobId, options),
    };
}
export function getFineTuningJobsOperations(context) {
    return {
        ...getFineTuningJobs(context),
    };
}
//# sourceMappingURL=index.js.map