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
  customGet,
  customGet1,
  customGet2,
  customGet3,
  customGet4,
  customGet5,
  customGet6,
  customGet7,
  customGet8,
  customGet9,
  customGet10,
  customGet11,
  customGet12,
  customGet13,
  customGet14,
  customGet15,
  customGet16,
  customGet17,
  customGet18,
  customGet19,
  customGet20,
  customGet21,
  customGet22,
  customGet23,
  customGet24,
  customGet25,
  customGet26,
} from "../../api/widgetService/index.js";
import {
  WidgetServiceCustomGetOptions,
  WidgetServiceCustomGet1Options,
  WidgetServiceCustomGet2Options,
  WidgetServiceCustomGet3Options,
  WidgetServiceCustomGet4Options,
  WidgetServiceCustomGet5Options,
  WidgetServiceCustomGet6Options,
  WidgetServiceCustomGet7Options,
  WidgetServiceCustomGet8Options,
  WidgetServiceCustomGet9Options,
  WidgetServiceCustomGet10Options,
  WidgetServiceCustomGet11Options,
  WidgetServiceCustomGet12Options,
  WidgetServiceCustomGet13Options,
  WidgetServiceCustomGet14Options,
  WidgetServiceCustomGet15Options,
  WidgetServiceCustomGet16Options,
  WidgetServiceCustomGet17Options,
  WidgetServiceCustomGet18Options,
  WidgetServiceCustomGet19Options,
  WidgetServiceCustomGet20Options,
  WidgetServiceCustomGet21Options,
  WidgetServiceCustomGet22Options,
  WidgetServiceCustomGet23Options,
  WidgetServiceCustomGet24Options,
  WidgetServiceCustomGet25Options,
  WidgetServiceCustomGet26Options,
} from "../../models/options.js";

export interface WidgetServiceOperations {
  customGet: (options?: WidgetServiceCustomGetOptions) => Promise<Widget>;
  customGet1: (options?: WidgetServiceCustomGet1Options) => Promise<Widget1>;
  customGet2: (options?: WidgetServiceCustomGet2Options) => Promise<Widget2>;
  customGet3: (options?: WidgetServiceCustomGet3Options) => Promise<Widget3>;
  customGet4: (options?: WidgetServiceCustomGet4Options) => Promise<Widget4>;
  customGet5: (options?: WidgetServiceCustomGet5Options) => Promise<Widget5>;
  customGet6: (options?: WidgetServiceCustomGet6Options) => Promise<Widget6>;
  customGet7: (options?: WidgetServiceCustomGet7Options) => Promise<Widget7>;
  customGet8: (options?: WidgetServiceCustomGet8Options) => Promise<Widget8>;
  customGet9: (options?: WidgetServiceCustomGet9Options) => Promise<Widget9>;
  customGet10: (options?: WidgetServiceCustomGet10Options) => Promise<Widget10>;
  customGet11: (options?: WidgetServiceCustomGet11Options) => Promise<Widget11>;
  customGet12: (options?: WidgetServiceCustomGet12Options) => Promise<Widget12>;
  customGet13: (options?: WidgetServiceCustomGet13Options) => Promise<Widget13>;
  customGet14: (options?: WidgetServiceCustomGet14Options) => Promise<Widget14>;
  customGet15: (options?: WidgetServiceCustomGet15Options) => Promise<Widget15>;
  customGet16: (options?: WidgetServiceCustomGet16Options) => Promise<Widget16>;
  customGet17: (options?: WidgetServiceCustomGet17Options) => Promise<Widget17>;
  customGet18: (options?: WidgetServiceCustomGet18Options) => Promise<Widget18>;
  customGet19: (options?: WidgetServiceCustomGet19Options) => Promise<Widget19>;
  customGet20: (options?: WidgetServiceCustomGet20Options) => Promise<Widget20>;
  customGet21: (options?: WidgetServiceCustomGet21Options) => Promise<Widget21>;
  customGet22: (options?: WidgetServiceCustomGet22Options) => Promise<Widget22>;
  customGet23: (options?: WidgetServiceCustomGet23Options) => Promise<Widget23>;
  customGet24: (options?: WidgetServiceCustomGet24Options) => Promise<Widget24>;
  customGet25: (options?: WidgetServiceCustomGet25Options) => Promise<Widget25>;
  customGet26: (options?: WidgetServiceCustomGet26Options) => Promise<Widget26>;
}

export function getWidgetService(context: DemoServiceContext) {
  return {
    customGet: (options?: WidgetServiceCustomGetOptions) =>
      customGet(context, options),
    customGet1: (options?: WidgetServiceCustomGet1Options) =>
      customGet1(context, options),
    customGet2: (options?: WidgetServiceCustomGet2Options) =>
      customGet2(context, options),
    customGet3: (options?: WidgetServiceCustomGet3Options) =>
      customGet3(context, options),
    customGet4: (options?: WidgetServiceCustomGet4Options) =>
      customGet4(context, options),
    customGet5: (options?: WidgetServiceCustomGet5Options) =>
      customGet5(context, options),
    customGet6: (options?: WidgetServiceCustomGet6Options) =>
      customGet6(context, options),
    customGet7: (options?: WidgetServiceCustomGet7Options) =>
      customGet7(context, options),
    customGet8: (options?: WidgetServiceCustomGet8Options) =>
      customGet8(context, options),
    customGet9: (options?: WidgetServiceCustomGet9Options) =>
      customGet9(context, options),
    customGet10: (options?: WidgetServiceCustomGet10Options) =>
      customGet10(context, options),
    customGet11: (options?: WidgetServiceCustomGet11Options) =>
      customGet11(context, options),
    customGet12: (options?: WidgetServiceCustomGet12Options) =>
      customGet12(context, options),
    customGet13: (options?: WidgetServiceCustomGet13Options) =>
      customGet13(context, options),
    customGet14: (options?: WidgetServiceCustomGet14Options) =>
      customGet14(context, options),
    customGet15: (options?: WidgetServiceCustomGet15Options) =>
      customGet15(context, options),
    customGet16: (options?: WidgetServiceCustomGet16Options) =>
      customGet16(context, options),
    customGet17: (options?: WidgetServiceCustomGet17Options) =>
      customGet17(context, options),
    customGet18: (options?: WidgetServiceCustomGet18Options) =>
      customGet18(context, options),
    customGet19: (options?: WidgetServiceCustomGet19Options) =>
      customGet19(context, options),
    customGet20: (options?: WidgetServiceCustomGet20Options) =>
      customGet20(context, options),
    customGet21: (options?: WidgetServiceCustomGet21Options) =>
      customGet21(context, options),
    customGet22: (options?: WidgetServiceCustomGet22Options) =>
      customGet22(context, options),
    customGet23: (options?: WidgetServiceCustomGet23Options) =>
      customGet23(context, options),
    customGet24: (options?: WidgetServiceCustomGet24Options) =>
      customGet24(context, options),
    customGet25: (options?: WidgetServiceCustomGet25Options) =>
      customGet25(context, options),
    customGet26: (options?: WidgetServiceCustomGet26Options) =>
      customGet26(context, options),
  };
}

export function getWidgetServiceOperations(
  context: DemoServiceContext
): WidgetServiceOperations {
  return {
    ...getWidgetService(context),
  };
}
