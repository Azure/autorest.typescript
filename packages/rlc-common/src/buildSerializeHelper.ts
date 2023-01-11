import { RLCModel } from "./interfaces.js";
import * as path from "path";
// @ts-ignore: to fix the handlebars issue
import hbs from "handlebars";
import {
  hasMultiCollection,
  hasPipeCollection,
  hasSsvCollection,
  hasTsvCollection
} from "./helpers/operationHelpers.js";
import {
  buildMultiCollectionContent,
  buildPipeCollectionContent,
  buildSsvCollectionContent,
  buildTsvCollectionContent
} from "./static/serializeHelper";

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
