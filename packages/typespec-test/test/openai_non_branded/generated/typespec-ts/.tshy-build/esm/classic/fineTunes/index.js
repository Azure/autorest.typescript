// Licensed under the MIT license.
import { create, list, retrieve, listEvents, cancel, } from "../../api/fineTunes/index.js";
export function getFineTunes(context) {
    return {
        create: (fineTune, options) => create(context, fineTune, options),
        list: (options) => list(context, options),
        retrieve: (fineTuneId, options) => retrieve(context, fineTuneId, options),
        listEvents: (fineTuneId, options) => listEvents(context, fineTuneId, options),
        cancel: (fineTuneId, options) => cancel(context, fineTuneId, options),
    };
}
export function getFineTunesOperations(context) {
    return {
        ...getFineTunes(context),
    };
}
//# sourceMappingURL=index.js.map