import { ClientOptions } from "@typespec/ts-http-runtime";
import { KeyCredential } from "@typespec/ts-http-runtime";
import { OpenAIContext } from "./clientDefinitions.js";
/**
 * Initialize a new instance of `OpenAIContext`
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(credentials: KeyCredential, options?: ClientOptions): OpenAIContext;
//# sourceMappingURL=openAIClient.d.ts.map