import { CreateEditRequest, CreateEditResponse } from "../../models/models.js";
import { EditsCreate200Response, EditsCreateDefaultResponse, OpenAIContext as Client } from "../../rest/index.js";
import { StreamableMethod } from "@typespec/ts-http-runtime";
import { EditsCreateOptions } from "../../models/options.js";
export declare function _createSend(context: Client, edit: CreateEditRequest, options?: EditsCreateOptions): StreamableMethod<EditsCreate200Response | EditsCreateDefaultResponse>;
export declare function _createDeserialize(result: EditsCreate200Response | EditsCreateDefaultResponse): Promise<CreateEditResponse>;
export declare function create(context: Client, edit: CreateEditRequest, options?: EditsCreateOptions): Promise<CreateEditResponse>;
//# sourceMappingURL=index.d.ts.map