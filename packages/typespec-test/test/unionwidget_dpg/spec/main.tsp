import "@typespec/http";
import "@typespec/rest";

@service({
  title: "Widget Service",
})
namespace DemoService;

using TypeSpec.Http;
using TypeSpec.Rest;

model WidgetData0 {
  fooProp: string;
}

model WidgetData1 {
  barProp: string;
}

model WidgetData2 {
  @projectedName("json", "foo_prop")
  fooProp: string;
}

model WidgetData3 {
  @projectedName("json", "bar_prop")
  barProp: string;
}

model WidgetData4 {
  start: utcDateTime;
  end?: utcDateTime;
}

model WidgetData5 {
  data: bytes;
}

model Widget {
  @key id: string;
  weight: int32;
  color: "red" | "blue";
}

model Widget1 extends Widget {
  data: WidgetData0 | WidgetData1
}

model Widget2 extends Widget {
  data: WidgetData0 | WidgetData2
}

model Widget3 extends Widget {
  data: WidgetData1 | WidgetData2
}

model Widget4 extends Widget {
  data: WidgetData2 | WidgetData3
}

model Widget5 extends Widget {
  data: WidgetData0 | WidgetData4
}

model Widget6 extends Widget {
  data: WidgetData0 | WidgetData5
}

model Widget7 extends Widget {
  data: WidgetData0[] | WidgetData1[]
}

model Widget8 extends Widget {
  data: WidgetData0[] | WidgetData2[]
}

model Widget9 extends Widget {
  data: WidgetData1[] | WidgetData2[]
}

model Widget10 extends Widget {
  data: WidgetData2[] | WidgetData3[]
}

model Widget11 extends Widget {
  data: WidgetData0[] | WidgetData4[]
}

model Widget12 extends Widget {
  data: WidgetData0[] | WidgetData5[]
}

model Widget13 extends Widget {
  data: WidgetData0[] | WidgetData1;
}

model Widget14 extends Widget {
  data: WidgetData0 | WidgetData1[];
}

model Widget15 extends Widget {
  data: WidgetData0[] | WidgetData2;
}

model Widget16 extends Widget {
  data: WidgetData0 | WidgetData2[];
}

model Widget17 extends Widget {
  data: WidgetData1[] | WidgetData2;
}

model Widget18 extends Widget {
  data: WidgetData1 | WidgetData2[];
}

model Widget19 extends Widget {
  data: WidgetData2[] | WidgetData3;
}

model Widget20 extends Widget {
  data: WidgetData2 | WidgetData3[];
}

model Widget21 extends Widget {
  data: WidgetData0[] | WidgetData4
}

model Widget22 extends Widget {
  data: WidgetData0 | WidgetData4[]
}

model Widget23 extends Widget {
  data: WidgetData0[] | WidgetData5
}

model Widget24 extends Widget {
  data: WidgetData0 | WidgetData5[]
}

@error
model Error {
  code: int32;
  message: string;
}

interface WidgetService {
  @get @route("customGet") customGet(): Widget;
  @get @route("customGet1") customGet1(): Widget1;
  @get @route("customGet2") customGet2(): Widget2;
  @get @route("customGet3") customGet3(): Widget3;
  @get @route("customGet4") customGet4(): Widget4;
  @get @route("customGet5") customGet5(): Widget5;
  @get @route("customGet6") customGet6(): Widget6;
  @get @route("customGet7") customGet7(): Widget7;
  @get @route("customGet8") customGet8(): Widget8;  
  @get @route("customGet9") customGet9(): Widget9;
  @get @route("customGet10") customGet10(): Widget10;
  @get @route("customGet11") customGet11(): Widget11;
  @get @route("customGet12") customGet12(): Widget12;
  @get @route("customGet13") customGet13(): Widget13;
  @get @route("customGet14") customGet14(): Widget14;
  @get @route("customGet15") customGet15(): Widget15;
  @get @route("customGet16") customGet16(): Widget16;  
  @get @route("customGet17") customGet17(): Widget17;  
  @get @route("customGet18") customGet18(): Widget18;
  @get @route("customGet19") customGet19(): Widget19;
  @get @route("customGet20") customGet20(): Widget20;
  @get @route("customGet21") customGet21(): Widget21;
  @get @route("customGet22") customGet22(): Widget22;
  @get @route("customGet23") customGet23(): Widget23;
  @get @route("customGet24") customGet24(): Widget24; 
}

