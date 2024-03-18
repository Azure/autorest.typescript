import { OpenAIContext } from "../../../api/OpenAIContext.js";
import { CreateTranscriptionRequest, CreateTranscriptionResponse } from "../../../models/models.js";
import { AudioTranscriptionsCreateOptions } from "../../../models/options.js";
export interface AudioTranscriptionsOperations {
    create: (audio: CreateTranscriptionRequest, options?: AudioTranscriptionsCreateOptions) => Promise<CreateTranscriptionResponse>;
}
export declare function getAudioTranscriptions(context: OpenAIContext): {
    create: (audio: CreateTranscriptionRequest, options?: AudioTranscriptionsCreateOptions) => Promise<CreateTranscriptionResponse>;
};
export declare function getAudioTranscriptionsOperations(context: OpenAIContext): AudioTranscriptionsOperations;
//# sourceMappingURL=index.d.ts.map