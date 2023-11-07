// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: to fix the handlebars issue
import hbs from "handlebars";
import { RLCModel } from "../interfaces.js";
import { karmaConfig } from "./template.js";

export function buildKarmaConfigFile(model: RLCModel) {
  return {
    path: "karma.conf.js",
    content: hbs.compile(karmaConfig, { noEscape: true })({})
  };
}
