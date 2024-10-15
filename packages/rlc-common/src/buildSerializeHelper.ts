import { ParameterBuilderKind, RLCModel } from "./interfaces.js";
import * as path from "path";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: to fix the handlebars issue
import hbs from "handlebars";
import {
  hasCsvCollection,
  hasMultiCollection,
  hasPipeCollection,
  hasSsvCollection,
  hasTsvCollection
} from "./helpers/operationHelpers.js";
import {
  buildAllowReservedContent,
  buildCsvCollectionContent,
  buildExplodedAndFormStyleContent,
  buildMultiCollectionContent,
  buildNonExplodedAndFormStyleContent,
  buildNonExplodedAndPipeStyleContent,
  buildNonExplodedAndSpaceStyleContent,
  buildPipeCollectionContent,
  buildSsvCollectionContent,
  buildTsvCollectionContent
} from "./static/serializeHelper.js";

export function buildSerializeHelper(model: RLCModel) {
  let serializeHelperContent = "";
  if (hasMultiCollection(model)) {
    serializeHelperContent += "\n" + buildMultiCollectionContent;
  }
  if (hasPipeCollection(model)) {
    serializeHelperContent += "\n" + buildPipeCollectionContent;
  }
  if (hasSsvCollection(model)) {
    serializeHelperContent += "\n" + buildSsvCollectionContent;
  }
  if (hasTsvCollection(model)) {
    serializeHelperContent += "\n" + buildTsvCollectionContent;
  }
  if (hasCsvCollection(model)) {
    serializeHelperContent += "\n" + buildCsvCollectionContent;
  }
  for (const helper of model.helperDetails?.parameterBuilders ?? []) {
    switch (helper) {
      case ParameterBuilderKind.AllowReserved:
        serializeHelperContent += "\n" + buildAllowReservedContent;
        break;
      case ParameterBuilderKind.ExplodedFormStyle:
        serializeHelperContent += "\n" + buildExplodedAndFormStyleContent;
        break;
      case ParameterBuilderKind.UnexplodedFormStyle:
        serializeHelperContent += "\n" + buildNonExplodedAndFormStyleContent;
        break;
      case ParameterBuilderKind.UnexplodedPipeStyle:
        serializeHelperContent += "\n" + buildNonExplodedAndPipeStyleContent;
        break;
      case ParameterBuilderKind.UnexplodedSpaceStyle:
        serializeHelperContent += "\n" + buildNonExplodedAndSpaceStyleContent;
        break;
    }
  }
  if (serializeHelperContent !== "") {
    const readmeFileContents = hbs.compile(serializeHelperContent, {
      noEscape: true
    });
    const { srcPath } = model;
    return {
      path: path.join(srcPath, "serializeHelper.ts"),
      content: readmeFileContents({})
    };
  }
}
