import { stringToUint8Array } from "@azure/core-util";
import { WidgetData1Output, WidgetDataOutput } from "../rest/index.js";
import { WidgetData1, WidgetData } from "../models/models.js";

/** deserialize function for WidgetData1 */
function deserializeWidgetData1(obj: WidgetData1Output): WidgetData1 {
  return {
    kind: obj["kind"],
    data:
      typeof obj["data"] === "string"
        ? stringToUint8Array(obj["data"], "base64")
        : obj["data"]
  };
}

/** deserialize function for WidgetDataOutput */
export function deserializeWidgetData(obj: WidgetDataOutput): WidgetData {
  switch (obj.kind) {
    case "kind1":
      return deserializeWidgetData1(obj);
    default:
      return obj;
  }
}
