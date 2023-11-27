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

model WidgetData6 {
  data: WidgetData5;
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

model Widget25 extends Widget {
  data: WidgetData0 | WidgetData3 | WidgetData5[]
}

model Widget26 extends Widget {
  data: WidgetData2 | WidgetData4 | WidgetData6[]
}

@error
model Error {
  code: int32;
  message: string;
}

interface WidgetService {
  @get @route("customGet/response") customGetResponse(): Widget;
  @get @route("customGet1/response") customGetResponse1(): Widget1;
  @get @route("customGet2/response") customGetResponse2(): Widget2;
  @get @route("customGet3/response") customGetResponse3(): Widget3;
  @get @route("customGet4/response") customGetResponse4(): Widget4;
  @get @route("customGet5/response") customGetResponse5(): Widget5;
  @get @route("customGet6/response") customGetResponse6(): Widget6;
  @get @route("customGet7/response") customGetResponse7(): Widget7;
  @get @route("customGet8/response") customGetResponse8(): Widget8;  
  @get @route("customGet9/response") customGetResponse9(): Widget9;
  @get @route("customGet10/response") customGetResponse10(): Widget10;
  @get @route("customGet11/response") customGetResponse11(): Widget11;
  @get @route("customGet12/response") customGetResponse12(): Widget12;
  @get @route("customGet13/response") customGetResponse13(): Widget13;
  @get @route("customGet14/response") customGetResponse14(): Widget14;
  @get @route("customGet15/response") customGetResponse15(): Widget15;
  @get @route("customGet16/response") customGetResponse16(): Widget16;  
  @get @route("customGet17/response") customGetResponse17(): Widget17;  
  @get @route("customGet18/response") customGetResponse18(): Widget18;
  @get @route("customGet19/response") customGetResponse19(): Widget19;
  @get @route("customGet20/response") customGetResponse20(): Widget20;
  @get @route("customGet21/response") customGetResponse21(): Widget21;
  @get @route("customGet22/response") customGetResponse22(): Widget22;
  @get @route("customGet23/response") customGetResponse23(): Widget23;
  @get @route("customGet24/response") customGetResponse24(): Widget24; 
  @get @route("customGet25/response") customGetResponse25(): Widget25;
  @get @route("customGet26/response") customGetResponse26(): Widget26;
  @get @route("customGet/request") customGetRequest(@body body: Widget): void;
  @get @route("customGet1/request") customGetRequest1(@body body: Widget1): void;
  @get @route("customGet2/request") customGetRequest2(@body body: Widget2): void;
  @get @route("customGet3/request") customGetRequest3(@body body: Widget3): void;
  @get @route("customGet4/request") customGetRequest4(@body body: Widget4): void;
  @get @route("customGet5/request") customGetRequest5(@body body: Widget5): void;
  @get @route("customGet6/request") customGetRequest6(@body body: Widget6): void;
  @get @route("customGet7/request") customGetRequest7(@body body: Widget7): void;
  @get @route("customGet8/request") customGetRequest8(@body body: Widget8): void;  
  @get @route("customGet9/request") customGetRequest9(@body body: Widget9): void;
  @get @route("customGet10/request") customGetRequest10(@body body: Widget10): void;
  @get @route("customGet11/request") customGetRequest11(@body body: Widget11): void;
  @get @route("customGet12/request") customGetRequest12(@body body: Widget12): void;
  @get @route("customGet13/request") customGetRequest13(@body body: Widget13): void;
  @get @route("customGet14/request") customGetRequest14(@body body: Widget14): void;
  @get @route("customGet15/request") customGetRequest15(@body body: Widget15): void;
  @get @route("customGet16/request") customGetRequest16(@body body: Widget16): void;  
  @get @route("customGet17/request") customGetRequest17(@body body: Widget17): void;  
  @get @route("customGet18/request") customGetRequest18(@body body: Widget18): void;
  @get @route("customGet19/request") customGetRequest19(@body body: Widget19): void;
  @get @route("customGet20/request") customGetRequest20(@body body: Widget20): void;
  @get @route("customGet21/request") customGetRequest21(@body body: Widget21): void;
  @get @route("customGet22/request") customGetRequest22(@body body: Widget22): void;
  @get @route("customGet23/request") customGetRequest23(@body body: Widget23): void;
  @get @route("customGet24/request") customGetRequest24(@body body: Widget24): void; 
  @get @route("customGet25/request") customGetRequest25(@body body: Widget25): void;
  @get @route("customGet26/request") customGetRequest26(@body body: Widget26): void;  
}

