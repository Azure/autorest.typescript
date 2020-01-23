import { CodeModel } from "@azure-tools/codemodel";
import { getLanguageMetadata } from "../utils/languageHelpers";

export interface BaseUrlDetails {
  isCustom: boolean;
  baseUrl?: string;
}

export async function transformBaseUrl(
  codeModel: CodeModel
): Promise<BaseUrlDetails> {
  let baseUrl: string | undefined = "";
  let isCustom = false;

  const $host = (codeModel.globalParameters || []).find(p => {
    const { serializedName } = getLanguageMetadata(p.language);
    serializedName === "$host";
  });

  if (!$host) {
    const { request } = codeModel.operationGroups[0].operations[0];
    isCustom = true;
    baseUrl = request.protocol.http!.uri;
  } else {
    baseUrl = $host.clientDefaultValue;
  }

  return {
    baseUrl,
    isCustom
  };
}

export async function customBaseUrlTransform(codeModel: CodeModel) {}
