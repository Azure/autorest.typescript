import { CreateTranscriptionRequest, CreateTranscriptionResponse } from "../../../models/models.js";
import { AudioTranscriptionsCreate200Response, AudioTranscriptionsCreateDefaultResponse, OpenAIContext as Client } from "../../../rest/index.js";
import { StreamableMethod } from "@typespec/ts-http-runtime";
import { AudioTranscriptionsCreateOptions } from "../../../models/options.js";
export declare function _createSend(context: Client, audio: CreateTranscriptionRequest, options?: AudioTranscriptionsCreateOptions): StreamableMethod<AudioTranscriptionsCreate200Response | AudioTranscriptionsCreateDefaultResponse>;
export declare function _createDeserialize(result: AudioTranscriptionsCreate200Response | AudioTranscriptionsCreateDefaultResponse): Promise<CreateTranscriptionResponse>;
export declare function create(context: Client, audio: CreateTranscriptionRequest, options?: AudioTranscriptionsCreateOptions): Promise<CreateTranscriptionResponse>;
//# sourceMappingURL=index.d.ts.map