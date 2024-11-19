import { stringToUint8Array } from "@azure/core-util";
import {
  WidgetData0Output,
  WidgetData1Output,
  WidgetDataOutput
} from "../rest/index.js";
import { WidgetData0, WidgetData1, WidgetData } from "../models/models.js";

/** deserialize function for WidgetData0 */
function deserializeWidgetData0(obj: WidgetData0Output): WidgetData0 {
  return {
    kind: obj["kind"],
    fooProp:
      typeof obj["fooProp"] === "string"
        ? stringToUint8Array(obj["fooProp"], "base64")
        : obj["fooProp"]
  };
}

/** deserialize function for WidgetData1 */
function deserializeWidgetData1(obj: WidgetData1Output): WidgetData1 {
  return { kind: obj["kind"], data: new Date(obj["data"]) };
}

/** deserialize function for WidgetDataOutput */
export function deserializeWidgetData(obj: WidgetDataOutput): WidgetData {
  switch (obj.kind) {
    case "kind0":
      return deserializeWidgetData0(obj);
    case "kind1":
      return deserializeWidgetData1(obj);
    default:
      return obj;
  }
}
