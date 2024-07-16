@discriminator("kind")
union WidgetData {
    kind0: WidgetData0,
    kind1: WidgetData1,
}

model WidgetData0 {
    kind: "kind0";
    fooProp: string;
}

model WidgetData1 {
    kind: "kind1";
    start: utcDateTime;
    end?: utcDateTime;
}

model Widget {
    @key id: string;
    weight: int32;
    color: "red" | "blue";
}

model Widget1 extends Widget {
    data: WidgetData;
}

interface WidgetService {
    @get @route("customGet1") customGet1(): Widget1;
}
