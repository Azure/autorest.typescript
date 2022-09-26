import * as hbs from "handlebars";
import { RLCModel } from "../interfaces.js";
import { karmaConfig } from "./karmaConfig.js";

export function buildKarmaConfigFile(model: RLCModel) {
  const generateTest = Boolean(model.options?.generateTest);
  if (!generateTest) {
    return;
  }
  return {
    path: "karma.conf.js",
    content: hbs.compile(karmaConfig, { noEscape: true })({})
  };
}
