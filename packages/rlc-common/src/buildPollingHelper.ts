import { OPERATION_LRO_HIGH_PRIORITY, RLCModel } from "./interfaces.js";
import * as path from "path";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: to fix the handlebars issue
import hbs from "handlebars";
import { hasPollingOperations } from "./helpers/operationHelpers.js";
import { pollingContent } from "./static/pollingContent.js";

interface LroDetail {
  clientOverload?: boolean;
  overloadMap?: ResponseMap[];
  importedResponses?: string[];
  isEsm?: boolean;
}

interface ResponseMap {
  initialResponses: string;
  finalResponses: string;
  precedence?: number;
}

export function buildPollingHelper(model: RLCModel) {
  if (!hasPollingOperations(model)) {
    return;
  }

  const lroDetail: LroDetail = buildLroHelperDetail(model);
  const readmeFileContents = hbs.compile(pollingContent, { noEscape: true });
  const { srcPath } = model;
  return {
    path: path.join(srcPath, "pollingHelper.ts"),
    content: readmeFileContents(lroDetail)
  };
}

function buildLroHelperDetail(model: RLCModel): LroDetail {
  if (!model.helperDetails?.clientLroOverload) {
    return {
      clientOverload: false,
      isEsm: model.options?.moduleKind === "esm"
    };
  }
  const mapDetail = [];
  const pathDictionary = model.paths;
  const responses = new Set<string>();
  for (const details of Object.values(pathDictionary)) {
    for (const methodDetails of Object.values(details.methods)) {
      const lroDetail = methodDetails[0].operationHelperDetail?.lroDetails;
      if (lroDetail?.isLongRunning) {
        const initialResponses = methodDetails[0].responseTypes.success.concat(
          methodDetails[0].responseTypes.error
        );

        const finalResponse = lroDetail.logicalResponseTypes?.success.concat(
          methodDetails[0].responseTypes.error
        );

        if (initialResponses && finalResponse) {
          initialResponses.forEach((n) => responses.add(n));
          finalResponse.forEach((n) => responses.add(n));
          mapDetail!.push({
            initialResponses: initialResponses.join("|"),
            finalResponses: finalResponse.join("|"),
            precedence: lroDetail.precedence ?? OPERATION_LRO_HIGH_PRIORITY
          });
        }
      }
    }
  }

  // Sorted by the precedence
  mapDetail.sort((d1, d2) => d1.precedence - d2.precedence);
  return {
    clientOverload: responses.size > 0 && mapDetail.length > 0,
    importedResponses: Array.from(responses),
    overloadMap: mapDetail,
    isEsm: model.options?.moduleKind === "esm"
  };
}
