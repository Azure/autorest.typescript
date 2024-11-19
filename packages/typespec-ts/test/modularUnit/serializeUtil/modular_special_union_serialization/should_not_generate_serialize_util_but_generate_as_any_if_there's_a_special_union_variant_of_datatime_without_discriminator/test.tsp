model WidgetData0 {
  fooProp: string;
}

model Widget {
  @key id: string;
  weight: int32;
  color: "red" | "blue";
}

model Widget1 extends Widget {
  data: WidgetData0 | utcDateTime;
}

interface WidgetService {
  @get @route("customGet1") customGet1(@body body: Widget1): void;
}
