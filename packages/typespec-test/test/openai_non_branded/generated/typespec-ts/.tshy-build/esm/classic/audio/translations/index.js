// Licensed under the MIT license.
import { create } from "../../../api/audio/translations/index.js";
export function getAudioTranslations(context) {
    return {
        create: (audio, options) => create(context, audio, options),
    };
}
export function getAudioTranslationsOperations(context) {
    return {
        ...getAudioTranslations(context),
    };
}
//# sourceMappingURL=index.js.map