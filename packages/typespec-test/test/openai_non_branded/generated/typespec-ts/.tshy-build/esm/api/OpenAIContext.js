// Licensed under the MIT license.
import getClient from "../rest/index.js";
/** The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details. */
export function createOpenAI(credential, options = {}) {
    const clientContext = getClient(credential, options);
    return clientContext;
}
//# sourceMappingURL=OpenAIContext.js.map