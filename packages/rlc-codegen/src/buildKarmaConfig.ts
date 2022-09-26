import * as hbs from "handlebars";
import { RLCModel } from "./interfaces";
import { karmaConfig } from "./static/karmaConfig.js";

export function buildKarmaConfigFile(model: RLCModel) {
  const generateMetadata = Boolean(model.options?.generateMetadata);
  if (!generateMetadata) {
    return;
  }
  return {
    path: "karma.conf.js",
    content: hbs.compile(karmaConfig, { noEscape: true })({})
  };
}
