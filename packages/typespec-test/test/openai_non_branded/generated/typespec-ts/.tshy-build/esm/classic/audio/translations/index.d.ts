import { OpenAIContext } from "../../../api/OpenAIContext.js";
import { CreateTranslationRequest, CreateTranslationResponse } from "../../../models/models.js";
import { AudioTranslationsCreateOptions } from "../../../models/options.js";
export interface AudioTranslationsOperations {
    create: (audio: CreateTranslationRequest, options?: AudioTranslationsCreateOptions) => Promise<CreateTranslationResponse>;
}
export declare function getAudioTranslations(context: OpenAIContext): {
    create: (audio: CreateTranslationRequest, options?: AudioTranslationsCreateOptions) => Promise<CreateTranslationResponse>;
};
export declare function getAudioTranslationsOperations(context: OpenAIContext): AudioTranslationsOperations;
//# sourceMappingURL=index.d.ts.map