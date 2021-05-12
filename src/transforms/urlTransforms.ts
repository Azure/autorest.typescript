import { CodeModel } from "@autorest/codemodel";
import { getLanguageMetadata } from "../utils/languageHelpers";

export interface EndpointDetails {
  isCustom: boolean;
  endpoint?: string;
}

export async function transformBaseUrl(
  codeModel: CodeModel
): Promise<EndpointDetails> {
  let endpoint: string | undefined = "";
  let isCustom = false;

  const $host = (codeModel.globalParameters || []).find(p => {
    const { name } = getLanguageMetadata(p.language);
    return name === "$host" && Boolean(p.clientDefaultValue);
  });

  if (!$host) {
    // No support yet for multi-baseUrl yet Issue #553
    if (codeModel.operationGroups && codeModel.operationGroups.length) {
      const { requests } = codeModel.operationGroups[0].operations[0];
      isCustom = true;
      endpoint = requests![0].protocol.http!.uri;
    }
  } else {
    endpoint = $host.clientDefaultValue;
  }

  return {
    endpoint: endpoint?.replace("http://", "https://"),
    isCustom
  };
}
