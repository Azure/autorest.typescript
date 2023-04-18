import { RLCModel } from "./interfaces.js";
import * as path from "path";
// @ts-ignore: to fix the handlebars issue
import hbs from "handlebars";
import { hasPollingOperations } from "./helpers/operationHelpers.js";
import { pollingContent } from "./static/pollingContent.js";

interface LroOverloadDetail {
  shouldGenerate: boolean;
  detail?: ResponseMap[];
}

interface ResponseMap {
  initalResponses: string;
  finalResponses: string;
}

export function buildPollingHelper(model: RLCModel) {
  if (!hasPollingOperations(model)) {
    return;
  }
  let overloadDetail: LroOverloadDetail = buildOverloadDetail(model);
  const readmeFileContents = hbs.compile(pollingContent, { noEscape: true });
  const { srcPath } = model;
  return {
    path: path.join(srcPath, "pollingHelper.ts"),
    content: readmeFileContents(overloadDetail)
  };
}

function buildOverloadDetail(model: RLCModel): LroOverloadDetail {
  if (!model.helperDetails?.shouldGenerateLroOverload) {
    return {
      shouldGenerate: false
    };
  }
  const res: LroOverloadDetail = {
    shouldGenerate: true,
    detail: []
  };
  const pathDictionary = model.paths;
  for (const details of Object.values(pathDictionary)) {
    for (const methodDetails of Object.values(details.methods)) {
      const lroDetail = methodDetails[0].annotations?.lroDetails;
      if (lroDetail?.isLongRunning) {
        const initalResponses = methodDetails[0].responseTypes.success
          .concat(methodDetails[0].responseTypes.error)
          .join("|");
        const finalRespoonse = lroDetail.logicalResponseTypes?.success
          .concat(methodDetails[0].responseTypes.error)
          .join("|");
        if (!initalResponses && !finalRespoonse) {
          res.detail!.push({
            initalResponses: initalResponses,
            finalResponses: finalRespoonse!
          });
        }
      }
    }
  }

  return res;
}
