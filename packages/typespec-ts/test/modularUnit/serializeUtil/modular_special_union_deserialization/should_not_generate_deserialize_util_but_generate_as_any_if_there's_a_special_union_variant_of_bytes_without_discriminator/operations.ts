import {
  Widget1,
  WidgetData0,
  Widget,
  WidgetColor,
  Widget1Data
} from "../models/models.js";
import {
  Widget1Output as Widget1Rest,
  WidgetData0Output as WidgetData0Rest,
  WidgetOutput as WidgetRest,
  WidgetColorOutput as WidgetColorRest
} from "../index.js";

export function serializeWidget1(o: Widget1): Widget1Rest {
  return { ...o, ...serializeWidget(o), data: serializeWidget1Data(o["data"]) };
}

export function deserializeWidget1(o: Widget1Rest): Widget1 {
  return {
    ...o,
    ...deserializeWidget(o),
    data: deserializeWidget1Data(o["data"])
  };
}

export function serializeWidgetData0(o: WidgetData0): WidgetData0Rest {
  return o;
}

export function deserializeWidgetData0(o: WidgetData0Rest): WidgetData0 {
  return o;
}

export function serializeWidget(o: Widget): WidgetRest {
  return {
    ...o,
    color: serializeWidgetColor(o["color"])
  };
}

export function deserializeWidget(o: WidgetRest): Widget {
  return {
    ...o,
    color: deserializeWidgetColor(o["color"])
  };
}

export function serializeWidgetColor(o: WidgetColor): WidgetColorRest {
  return o;
}

export function deserializeWidgetColor(o: WidgetColorRest): WidgetColor {
  return o;
}

export function serializeWidget1Data(o: Widget1Data): any {
  return (() => {
    throw Error("Not implemented.");
  })();
}

export function deserializeWidget1Data(o: any): Widget1Data {
  return (() => {
    throw Error("Not implemented.");
  })();
}
