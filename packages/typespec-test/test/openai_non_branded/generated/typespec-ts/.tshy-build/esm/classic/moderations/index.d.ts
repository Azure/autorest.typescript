import { OpenAIContext } from "../../api/OpenAIContext.js";
import { CreateModerationRequest, CreateModerationResponse } from "../../models/models.js";
import { ModerationsCreateOptions } from "../../models/options.js";
export interface ModerationsOperations {
    create: (content: CreateModerationRequest, options?: ModerationsCreateOptions) => Promise<CreateModerationResponse>;
}
export declare function getModerations(context: OpenAIContext): {
    create: (content: CreateModerationRequest, options?: ModerationsCreateOptions) => Promise<CreateModerationResponse>;
};
export declare function getModerationsOperations(context: OpenAIContext): ModerationsOperations;
//# sourceMappingURL=index.d.ts.map