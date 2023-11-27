// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DemoServiceContext } from "../../api/DemoServiceContext.js";
import {
  Widget,
  Widget1,
  Widget2,
  Widget3,
  Widget4,
  Widget5,
  Widget6,
  Widget7,
  Widget8,
  Widget9,
  Widget10,
  Widget11,
  Widget12,
  Widget13,
  Widget14,
  Widget15,
  Widget16,
  Widget17,
  Widget18,
  Widget19,
  Widget20,
  Widget21,
  Widget22,
  Widget23,
  Widget24,
  Widget25,
  Widget26,
} from "../../models/models.js";
import {
  customGetResponse,
  customGetResponse1,
  customGetResponse2,
  customGetResponse3,
  customGetResponse4,
  customGetResponse5,
  customGetResponse6,
  customGetResponse7,
  customGetResponse8,
  customGetResponse9,
  customGetResponse10,
  customGetResponse11,
  customGetResponse12,
  customGetResponse13,
  customGetResponse14,
  customGetResponse15,
  customGetResponse16,
  customGetResponse17,
  customGetResponse18,
  customGetResponse19,
  customGetResponse20,
  customGetResponse21,
  customGetResponse22,
  customGetResponse23,
  customGetResponse24,
  customGetResponse25,
  customGetResponse26,
  customGetRequest,
  customGetRequest1,
  customGetRequest2,
  customGetRequest3,
  customGetRequest4,
  customGetRequest5,
  customGetRequest6,
  customGetRequest7,
  customGetRequest8,
  customGetRequest9,
  customGetRequest10,
  customGetRequest11,
  customGetRequest12,
  customGetRequest13,
  customGetRequest14,
  customGetRequest15,
  customGetRequest16,
  customGetRequest17,
  customGetRequest18,
  customGetRequest19,
  customGetRequest20,
  customGetRequest21,
  customGetRequest22,
  customGetRequest23,
  customGetRequest24,
  customGetRequest25,
  customGetRequest26,
} from "../../api/widgetService/index.js";
import {
  WidgetServiceCustomGetResponseOptions,
  WidgetServiceCustomGetResponse1Options,
  WidgetServiceCustomGetResponse2Options,
  WidgetServiceCustomGetResponse3Options,
  WidgetServiceCustomGetResponse4Options,
  WidgetServiceCustomGetResponse5Options,
  WidgetServiceCustomGetResponse6Options,
  WidgetServiceCustomGetResponse7Options,
  WidgetServiceCustomGetResponse8Options,
  WidgetServiceCustomGetResponse9Options,
  WidgetServiceCustomGetResponse10Options,
  WidgetServiceCustomGetResponse11Options,
  WidgetServiceCustomGetResponse12Options,
  WidgetServiceCustomGetResponse13Options,
  WidgetServiceCustomGetResponse14Options,
  WidgetServiceCustomGetResponse15Options,
  WidgetServiceCustomGetResponse16Options,
  WidgetServiceCustomGetResponse17Options,
  WidgetServiceCustomGetResponse18Options,
  WidgetServiceCustomGetResponse19Options,
  WidgetServiceCustomGetResponse20Options,
  WidgetServiceCustomGetResponse21Options,
  WidgetServiceCustomGetResponse22Options,
  WidgetServiceCustomGetResponse23Options,
  WidgetServiceCustomGetResponse24Options,
  WidgetServiceCustomGetResponse25Options,
  WidgetServiceCustomGetResponse26Options,
  WidgetServiceCustomGetRequestOptions,
  WidgetServiceCustomGetRequest1Options,
  WidgetServiceCustomGetRequest2Options,
  WidgetServiceCustomGetRequest3Options,
  WidgetServiceCustomGetRequest4Options,
  WidgetServiceCustomGetRequest5Options,
  WidgetServiceCustomGetRequest6Options,
  WidgetServiceCustomGetRequest7Options,
  WidgetServiceCustomGetRequest8Options,
  WidgetServiceCustomGetRequest9Options,
  WidgetServiceCustomGetRequest10Options,
  WidgetServiceCustomGetRequest11Options,
  WidgetServiceCustomGetRequest12Options,
  WidgetServiceCustomGetRequest13Options,
  WidgetServiceCustomGetRequest14Options,
  WidgetServiceCustomGetRequest15Options,
  WidgetServiceCustomGetRequest16Options,
  WidgetServiceCustomGetRequest17Options,
  WidgetServiceCustomGetRequest18Options,
  WidgetServiceCustomGetRequest19Options,
  WidgetServiceCustomGetRequest20Options,
  WidgetServiceCustomGetRequest21Options,
  WidgetServiceCustomGetRequest22Options,
  WidgetServiceCustomGetRequest23Options,
  WidgetServiceCustomGetRequest24Options,
  WidgetServiceCustomGetRequest25Options,
  WidgetServiceCustomGetRequest26Options,
} from "../../models/options.js";

export interface WidgetServiceOperations {
  customGetResponse: (
    options?: WidgetServiceCustomGetResponseOptions
  ) => Promise<Widget>;
  customGetResponse1: (
    options?: WidgetServiceCustomGetResponse1Options
  ) => Promise<Widget1>;
  customGetResponse2: (
    options?: WidgetServiceCustomGetResponse2Options
  ) => Promise<Widget2>;
  customGetResponse3: (
    options?: WidgetServiceCustomGetResponse3Options
  ) => Promise<Widget3>;
  customGetResponse4: (
    options?: WidgetServiceCustomGetResponse4Options
  ) => Promise<Widget4>;
  customGetResponse5: (
    options?: WidgetServiceCustomGetResponse5Options
  ) => Promise<Widget5>;
  customGetResponse6: (
    options?: WidgetServiceCustomGetResponse6Options
  ) => Promise<Widget6>;
  customGetResponse7: (
    options?: WidgetServiceCustomGetResponse7Options
  ) => Promise<Widget7>;
  customGetResponse8: (
    options?: WidgetServiceCustomGetResponse8Options
  ) => Promise<Widget8>;
  customGetResponse9: (
    options?: WidgetServiceCustomGetResponse9Options
  ) => Promise<Widget9>;
  customGetResponse10: (
    options?: WidgetServiceCustomGetResponse10Options
  ) => Promise<Widget10>;
  customGetResponse11: (
    options?: WidgetServiceCustomGetResponse11Options
  ) => Promise<Widget11>;
  customGetResponse12: (
    options?: WidgetServiceCustomGetResponse12Options
  ) => Promise<Widget12>;
  customGetResponse13: (
    options?: WidgetServiceCustomGetResponse13Options
  ) => Promise<Widget13>;
  customGetResponse14: (
    options?: WidgetServiceCustomGetResponse14Options
  ) => Promise<Widget14>;
  customGetResponse15: (
    options?: WidgetServiceCustomGetResponse15Options
  ) => Promise<Widget15>;
  customGetResponse16: (
    options?: WidgetServiceCustomGetResponse16Options
  ) => Promise<Widget16>;
  customGetResponse17: (
    options?: WidgetServiceCustomGetResponse17Options
  ) => Promise<Widget17>;
  customGetResponse18: (
    options?: WidgetServiceCustomGetResponse18Options
  ) => Promise<Widget18>;
  customGetResponse19: (
    options?: WidgetServiceCustomGetResponse19Options
  ) => Promise<Widget19>;
  customGetResponse20: (
    options?: WidgetServiceCustomGetResponse20Options
  ) => Promise<Widget20>;
  customGetResponse21: (
    options?: WidgetServiceCustomGetResponse21Options
  ) => Promise<Widget21>;
  customGetResponse22: (
    options?: WidgetServiceCustomGetResponse22Options
  ) => Promise<Widget22>;
  customGetResponse23: (
    options?: WidgetServiceCustomGetResponse23Options
  ) => Promise<Widget23>;
  customGetResponse24: (
    options?: WidgetServiceCustomGetResponse24Options
  ) => Promise<Widget24>;
  customGetResponse25: (
    options?: WidgetServiceCustomGetResponse25Options
  ) => Promise<Widget25>;
  customGetResponse26: (
    options?: WidgetServiceCustomGetResponse26Options
  ) => Promise<Widget26>;
  customGetRequest: (
    body: Widget,
    options?: WidgetServiceCustomGetRequestOptions
  ) => Promise<void>;
  customGetRequest1: (
    body: Widget1,
    options?: WidgetServiceCustomGetRequest1Options
  ) => Promise<void>;
  customGetRequest2: (
    body: Widget2,
    options?: WidgetServiceCustomGetRequest2Options
  ) => Promise<void>;
  customGetRequest3: (
    body: Widget3,
    options?: WidgetServiceCustomGetRequest3Options
  ) => Promise<void>;
  customGetRequest4: (
    body: Widget4,
    options?: WidgetServiceCustomGetRequest4Options
  ) => Promise<void>;
  customGetRequest5: (
    body: Widget5,
    options?: WidgetServiceCustomGetRequest5Options
  ) => Promise<void>;
  customGetRequest6: (
    body: Widget6,
    options?: WidgetServiceCustomGetRequest6Options
  ) => Promise<void>;
  customGetRequest7: (
    body: Widget7,
    options?: WidgetServiceCustomGetRequest7Options
  ) => Promise<void>;
  customGetRequest8: (
    body: Widget8,
    options?: WidgetServiceCustomGetRequest8Options
  ) => Promise<void>;
  customGetRequest9: (
    body: Widget9,
    options?: WidgetServiceCustomGetRequest9Options
  ) => Promise<void>;
  customGetRequest10: (
    body: Widget10,
    options?: WidgetServiceCustomGetRequest10Options
  ) => Promise<void>;
  customGetRequest11: (
    body: Widget11,
    options?: WidgetServiceCustomGetRequest11Options
  ) => Promise<void>;
  customGetRequest12: (
    body: Widget12,
    options?: WidgetServiceCustomGetRequest12Options
  ) => Promise<void>;
  customGetRequest13: (
    body: Widget13,
    options?: WidgetServiceCustomGetRequest13Options
  ) => Promise<void>;
  customGetRequest14: (
    body: Widget14,
    options?: WidgetServiceCustomGetRequest14Options
  ) => Promise<void>;
  customGetRequest15: (
    body: Widget15,
    options?: WidgetServiceCustomGetRequest15Options
  ) => Promise<void>;
  customGetRequest16: (
    body: Widget16,
    options?: WidgetServiceCustomGetRequest16Options
  ) => Promise<void>;
  customGetRequest17: (
    body: Widget17,
    options?: WidgetServiceCustomGetRequest17Options
  ) => Promise<void>;
  customGetRequest18: (
    body: Widget18,
    options?: WidgetServiceCustomGetRequest18Options
  ) => Promise<void>;
  customGetRequest19: (
    body: Widget19,
    options?: WidgetServiceCustomGetRequest19Options
  ) => Promise<void>;
  customGetRequest20: (
    body: Widget20,
    options?: WidgetServiceCustomGetRequest20Options
  ) => Promise<void>;
  customGetRequest21: (
    body: Widget21,
    options?: WidgetServiceCustomGetRequest21Options
  ) => Promise<void>;
  customGetRequest22: (
    body: Widget22,
    options?: WidgetServiceCustomGetRequest22Options
  ) => Promise<void>;
  customGetRequest23: (
    body: Widget23,
    options?: WidgetServiceCustomGetRequest23Options
  ) => Promise<void>;
  customGetRequest24: (
    body: Widget24,
    options?: WidgetServiceCustomGetRequest24Options
  ) => Promise<void>;
  customGetRequest25: (
    body: Widget25,
    options?: WidgetServiceCustomGetRequest25Options
  ) => Promise<void>;
  customGetRequest26: (
    body: Widget26,
    options?: WidgetServiceCustomGetRequest26Options
  ) => Promise<void>;
}

export function getWidgetService(context: DemoServiceContext) {
  return {
    customGetResponse: (options?: WidgetServiceCustomGetResponseOptions) =>
      customGetResponse(context, options),
    customGetResponse1: (options?: WidgetServiceCustomGetResponse1Options) =>
      customGetResponse1(context, options),
    customGetResponse2: (options?: WidgetServiceCustomGetResponse2Options) =>
      customGetResponse2(context, options),
    customGetResponse3: (options?: WidgetServiceCustomGetResponse3Options) =>
      customGetResponse3(context, options),
    customGetResponse4: (options?: WidgetServiceCustomGetResponse4Options) =>
      customGetResponse4(context, options),
    customGetResponse5: (options?: WidgetServiceCustomGetResponse5Options) =>
      customGetResponse5(context, options),
    customGetResponse6: (options?: WidgetServiceCustomGetResponse6Options) =>
      customGetResponse6(context, options),
    customGetResponse7: (options?: WidgetServiceCustomGetResponse7Options) =>
      customGetResponse7(context, options),
    customGetResponse8: (options?: WidgetServiceCustomGetResponse8Options) =>
      customGetResponse8(context, options),
    customGetResponse9: (options?: WidgetServiceCustomGetResponse9Options) =>
      customGetResponse9(context, options),
    customGetResponse10: (options?: WidgetServiceCustomGetResponse10Options) =>
      customGetResponse10(context, options),
    customGetResponse11: (options?: WidgetServiceCustomGetResponse11Options) =>
      customGetResponse11(context, options),
    customGetResponse12: (options?: WidgetServiceCustomGetResponse12Options) =>
      customGetResponse12(context, options),
    customGetResponse13: (options?: WidgetServiceCustomGetResponse13Options) =>
      customGetResponse13(context, options),
    customGetResponse14: (options?: WidgetServiceCustomGetResponse14Options) =>
      customGetResponse14(context, options),
    customGetResponse15: (options?: WidgetServiceCustomGetResponse15Options) =>
      customGetResponse15(context, options),
    customGetResponse16: (options?: WidgetServiceCustomGetResponse16Options) =>
      customGetResponse16(context, options),
    customGetResponse17: (options?: WidgetServiceCustomGetResponse17Options) =>
      customGetResponse17(context, options),
    customGetResponse18: (options?: WidgetServiceCustomGetResponse18Options) =>
      customGetResponse18(context, options),
    customGetResponse19: (options?: WidgetServiceCustomGetResponse19Options) =>
      customGetResponse19(context, options),
    customGetResponse20: (options?: WidgetServiceCustomGetResponse20Options) =>
      customGetResponse20(context, options),
    customGetResponse21: (options?: WidgetServiceCustomGetResponse21Options) =>
      customGetResponse21(context, options),
    customGetResponse22: (options?: WidgetServiceCustomGetResponse22Options) =>
      customGetResponse22(context, options),
    customGetResponse23: (options?: WidgetServiceCustomGetResponse23Options) =>
      customGetResponse23(context, options),
    customGetResponse24: (options?: WidgetServiceCustomGetResponse24Options) =>
      customGetResponse24(context, options),
    customGetResponse25: (options?: WidgetServiceCustomGetResponse25Options) =>
      customGetResponse25(context, options),
    customGetResponse26: (options?: WidgetServiceCustomGetResponse26Options) =>
      customGetResponse26(context, options),
    customGetRequest: (
      body: Widget,
      options?: WidgetServiceCustomGetRequestOptions
    ) => customGetRequest(context, body, options),
    customGetRequest1: (
      body: Widget1,
      options?: WidgetServiceCustomGetRequest1Options
    ) => customGetRequest1(context, body, options),
    customGetRequest2: (
      body: Widget2,
      options?: WidgetServiceCustomGetRequest2Options
    ) => customGetRequest2(context, body, options),
    customGetRequest3: (
      body: Widget3,
      options?: WidgetServiceCustomGetRequest3Options
    ) => customGetRequest3(context, body, options),
    customGetRequest4: (
      body: Widget4,
      options?: WidgetServiceCustomGetRequest4Options
    ) => customGetRequest4(context, body, options),
    customGetRequest5: (
      body: Widget5,
      options?: WidgetServiceCustomGetRequest5Options
    ) => customGetRequest5(context, body, options),
    customGetRequest6: (
      body: Widget6,
      options?: WidgetServiceCustomGetRequest6Options
    ) => customGetRequest6(context, body, options),
    customGetRequest7: (
      body: Widget7,
      options?: WidgetServiceCustomGetRequest7Options
    ) => customGetRequest7(context, body, options),
    customGetRequest8: (
      body: Widget8,
      options?: WidgetServiceCustomGetRequest8Options
    ) => customGetRequest8(context, body, options),
    customGetRequest9: (
      body: Widget9,
      options?: WidgetServiceCustomGetRequest9Options
    ) => customGetRequest9(context, body, options),
    customGetRequest10: (
      body: Widget10,
      options?: WidgetServiceCustomGetRequest10Options
    ) => customGetRequest10(context, body, options),
    customGetRequest11: (
      body: Widget11,
      options?: WidgetServiceCustomGetRequest11Options
    ) => customGetRequest11(context, body, options),
    customGetRequest12: (
      body: Widget12,
      options?: WidgetServiceCustomGetRequest12Options
    ) => customGetRequest12(context, body, options),
    customGetRequest13: (
      body: Widget13,
      options?: WidgetServiceCustomGetRequest13Options
    ) => customGetRequest13(context, body, options),
    customGetRequest14: (
      body: Widget14,
      options?: WidgetServiceCustomGetRequest14Options
    ) => customGetRequest14(context, body, options),
    customGetRequest15: (
      body: Widget15,
      options?: WidgetServiceCustomGetRequest15Options
    ) => customGetRequest15(context, body, options),
    customGetRequest16: (
      body: Widget16,
      options?: WidgetServiceCustomGetRequest16Options
    ) => customGetRequest16(context, body, options),
    customGetRequest17: (
      body: Widget17,
      options?: WidgetServiceCustomGetRequest17Options
    ) => customGetRequest17(context, body, options),
    customGetRequest18: (
      body: Widget18,
      options?: WidgetServiceCustomGetRequest18Options
    ) => customGetRequest18(context, body, options),
    customGetRequest19: (
      body: Widget19,
      options?: WidgetServiceCustomGetRequest19Options
    ) => customGetRequest19(context, body, options),
    customGetRequest20: (
      body: Widget20,
      options?: WidgetServiceCustomGetRequest20Options
    ) => customGetRequest20(context, body, options),
    customGetRequest21: (
      body: Widget21,
      options?: WidgetServiceCustomGetRequest21Options
    ) => customGetRequest21(context, body, options),
    customGetRequest22: (
      body: Widget22,
      options?: WidgetServiceCustomGetRequest22Options
    ) => customGetRequest22(context, body, options),
    customGetRequest23: (
      body: Widget23,
      options?: WidgetServiceCustomGetRequest23Options
    ) => customGetRequest23(context, body, options),
    customGetRequest24: (
      body: Widget24,
      options?: WidgetServiceCustomGetRequest24Options
    ) => customGetRequest24(context, body, options),
    customGetRequest25: (
      body: Widget25,
      options?: WidgetServiceCustomGetRequest25Options
    ) => customGetRequest25(context, body, options),
    customGetRequest26: (
      body: Widget26,
      options?: WidgetServiceCustomGetRequest26Options
    ) => customGetRequest26(context, body, options),
  };
}

export function getWidgetServiceOperations(
  context: DemoServiceContext
): WidgetServiceOperations {
  return {
    ...getWidgetService(context),
  };
}
