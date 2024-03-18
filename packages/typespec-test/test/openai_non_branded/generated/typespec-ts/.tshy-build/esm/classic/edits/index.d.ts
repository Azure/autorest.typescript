import { OpenAIContext } from "../../api/OpenAIContext.js";
import { CreateEditRequest, CreateEditResponse } from "../../models/models.js";
import { EditsCreateOptions } from "../../models/options.js";
export interface EditsOperations {
    create: (edit: CreateEditRequest, options?: EditsCreateOptions) => Promise<CreateEditResponse>;
}
export declare function getEdits(context: OpenAIContext): {
    create: (edit: CreateEditRequest, options?: EditsCreateOptions) => Promise<CreateEditResponse>;
};
export declare function getEditsOperations(context: OpenAIContext): EditsOperations;
//# sourceMappingURL=index.d.ts.map