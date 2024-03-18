// Licensed under the MIT license.
import { getAudioTranscriptionsOperations, } from "./transcriptions/index.js";
import { getAudioTranslationsOperations, } from "./translations/index.js";
export function getAudioOperations(context) {
    return {
        transcriptions: getAudioTranscriptionsOperations(context),
        translations: getAudioTranslationsOperations(context),
    };
}
//# sourceMappingURL=index.js.map