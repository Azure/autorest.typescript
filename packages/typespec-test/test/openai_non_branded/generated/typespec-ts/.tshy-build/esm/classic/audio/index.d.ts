import { OpenAIContext } from "../../api/OpenAIContext.js";
import { AudioTranscriptionsOperations } from "./transcriptions/index.js";
import { AudioTranslationsOperations } from "./translations/index.js";
export interface AudioOperations {
    transcriptions: AudioTranscriptionsOperations;
    translations: AudioTranslationsOperations;
}
export declare function getAudioOperations(context: OpenAIContext): AudioOperations;
//# sourceMappingURL=index.d.ts.map