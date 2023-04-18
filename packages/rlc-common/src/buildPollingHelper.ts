import { RLCModel } from "./interfaces.js";
import * as path from "path";
// @ts-ignore: to fix the handlebars issue
import hbs from "handlebars";
import { hasPollingOperations } from "./helpers/operationHelpers.js";
import { pollingContent } from "./static/pollingContent.js";

interface LroDetail {
  shouldGenerateOverload?: boolean;
  overloadMap?: ResponseMap[];
  importedResponses?: string[];
}

interface ResponseMap {
  initalResponses: string;
  finalResponses: string;
}

export function buildPollingHelper(model: RLCModel) {
  if (!hasPollingOperations(model)) {
    return;
  }
  let overloadDetail: LroDetail = buildOverloadDetail(model);
  const readmeFileContents = hbs.compile(pollingContent, { noEscape: true });
  const { srcPath } = model;
  return {
    path: path.join(srcPath, "pollingHelper.ts"),
    content: readmeFileContents(overloadDetail)
  };
}

function buildOverloadDetail(model: RLCModel): LroDetail {
  if (!model.helperDetails?.shouldGenerateLroOverload) {
    return {
      shouldGenerateOverload: false
    };
  }
  const detail = [];
  const pathDictionary = model.paths;
  const responses = new Set<string>();
  for (const details of Object.values(pathDictionary)) {
    for (const methodDetails of Object.values(details.methods)) {
      const lroDetail = methodDetails[0].annotations?.lroDetails;
      if (lroDetail?.isLongRunning) {
        const initalResponses = methodDetails[0].responseTypes.success.concat(
          methodDetails[0].responseTypes.error
        );

        const finalRespoonse = lroDetail.logicalResponseTypes?.success.concat(
          methodDetails[0].responseTypes.error
        );

        if (initalResponses && finalRespoonse) {
          initalResponses.forEach((n) => responses.add(n));
          finalRespoonse.forEach((n) => responses.add(n));
          detail!.push({
            initalResponses: initalResponses.join("|"),
            finalResponses: finalRespoonse.join("|")
          });
        }
      }
    }
  }

  return {
    shouldGenerateOverload: responses.size > 0 && detail.length > 0,
    importedResponses: Array.from(responses),
    overloadMap: detail
  };
}
