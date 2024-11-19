import { uint8ArrayToString } from "@azure/core-util";
import {
  WidgetData1 as WidgetData1Rest,
  WidgetData as WidgetDataRest
} from "../rest/index.js";
import { WidgetData1, WidgetData } from "../models/models.js";

/** serialize function for WidgetData1 */
function serializeWidgetData1(obj: WidgetData1): WidgetData1Rest {
  return { kind: obj["kind"], data: uint8ArrayToString(obj["data"], "base64") };
}

/** serialize function for WidgetData */
export function serializeWidgetData(obj: WidgetData): WidgetDataRest {
  switch (obj.kind) {
    case "kind1":
      return serializeWidgetData1(obj);
    default:
      return obj;
  }
}
