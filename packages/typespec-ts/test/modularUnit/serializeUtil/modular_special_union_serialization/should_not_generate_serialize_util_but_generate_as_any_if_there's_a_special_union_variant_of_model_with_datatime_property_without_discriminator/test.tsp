model WidgetData0 {
  fooProp: string;
}

model WidgetData1 {
  start: utcDateTime;
  end?: utcDateTime;
}

model Widget {
  @key id: string;
  weight: int32;
  color: "red" | "blue";
}

model Widget1 extends Widget {
  data: WidgetData0 | WidgetData1;
}

interface WidgetService {
  @get @route("customGet1") customGet1(@body body: Widget1): void;
}
