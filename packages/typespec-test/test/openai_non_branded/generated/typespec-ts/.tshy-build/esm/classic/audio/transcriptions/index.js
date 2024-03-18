// Licensed under the MIT license.
import { create } from "../../../api/audio/transcriptions/index.js";
export function getAudioTranscriptions(context) {
    return {
        create: (audio, options) => create(context, audio, options),
    };
}
export function getAudioTranscriptionsOperations(context) {
    return {
        ...getAudioTranscriptions(context),
    };
}
//# sourceMappingURL=index.js.map