// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: to fix the handlebars issue
import hbs from "handlebars";
import { snippetsContent } from "./template.js";
import { RLCModel } from "../interfaces.js";
import { getClientName } from "../helpers/nameConstructors.js";

export function buildSnippets(
  model: RLCModel,
  clientName?: string,
  azureSdkForJs?: boolean
) {
  const azureSdkForJsInfo = azureSdkForJs
    ? azureSdkForJs
    : model.options?.azureSdkForJs;
  // to keep the same config for azure scope in buildReadmeFile.ts
  if (
    (model?.options?.packageDetails?.scopeName === "azure" ||
      model?.options?.packageDetails?.scopeName === "azure-rest") &&
    model.options.addCredentials &&
    azureSdkForJsInfo
  ) {
    return {
      path: "test/snippets.spec.ts",
      content: hbs.compile(snippetsContent, { noEscape: true })({
        clientClassName: clientName ? clientName : getClientName(model),
        azureArm: model.options?.azureArm,
        azureSdkForJs: azureSdkForJsInfo,
        isModularLibrary: model.options.isModularLibrary
      })
    };
  }
}
