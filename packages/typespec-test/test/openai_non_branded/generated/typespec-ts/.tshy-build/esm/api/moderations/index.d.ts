import { CreateModerationRequest, CreateModerationResponse } from "../../models/models.js";
import { ModerationsCreate200Response, ModerationsCreateDefaultResponse, OpenAIContext as Client } from "../../rest/index.js";
import { StreamableMethod } from "@typespec/ts-http-runtime";
import { ModerationsCreateOptions } from "../../models/options.js";
export declare function _createSend(context: Client, content: CreateModerationRequest, options?: ModerationsCreateOptions): StreamableMethod<ModerationsCreate200Response | ModerationsCreateDefaultResponse>;
export declare function _createDeserialize(result: ModerationsCreate200Response | ModerationsCreateDefaultResponse): Promise<CreateModerationResponse>;
export declare function create(context: Client, content: CreateModerationRequest, options?: ModerationsCreateOptions): Promise<CreateModerationResponse>;
//# sourceMappingURL=index.d.ts.map