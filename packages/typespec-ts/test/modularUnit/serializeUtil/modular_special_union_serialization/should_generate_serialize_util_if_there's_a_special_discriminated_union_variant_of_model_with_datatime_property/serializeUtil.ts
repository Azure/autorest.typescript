import {
  WidgetData1 as WidgetData1Rest,
  WidgetData as WidgetDataRest
} from "../rest/index.js";
import { WidgetData1, WidgetData } from "../models/models.js";

/** serialize function for WidgetData1 */
function serializeWidgetData1(obj: WidgetData1): WidgetData1Rest {
  return {
    kind: obj["kind"],
    start: obj["start"].toISOString(),
    end: obj["end"]?.toISOString()
  };
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
