import { CreateTranslationRequest, CreateTranslationResponse } from "../../../models/models.js";
import { AudioTranslationsCreate200Response, AudioTranslationsCreateDefaultResponse, OpenAIContext as Client } from "../../../rest/index.js";
import { StreamableMethod } from "@typespec/ts-http-runtime";
import { AudioTranslationsCreateOptions } from "../../../models/options.js";
export declare function _createSend(context: Client, audio: CreateTranslationRequest, options?: AudioTranslationsCreateOptions): StreamableMethod<AudioTranslationsCreate200Response | AudioTranslationsCreateDefaultResponse>;
export declare function _createDeserialize(result: AudioTranslationsCreate200Response | AudioTranslationsCreateDefaultResponse): Promise<CreateTranslationResponse>;
export declare function create(context: Client, audio: CreateTranslationRequest, options?: AudioTranslationsCreateOptions): Promise<CreateTranslationResponse>;
//# sourceMappingURL=index.d.ts.map