// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

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
} from "../models/models.js";
import {
  CustomGet10200Response,
  CustomGet11200Response,
  CustomGet1200Response,
  CustomGet12200Response,
  CustomGet13200Response,
  CustomGet14200Response,
  CustomGet15200Response,
  CustomGet16200Response,
  CustomGet200Response,
  CustomGet2200Response,
  CustomGet3200Response,
  CustomGet4200Response,
  CustomGet5200Response,
  CustomGet6200Response,
  CustomGet7200Response,
  CustomGet8200Response,
  CustomGet9200Response,
  DemoServiceContext as Client,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import {
  deserializeWidgetData0AndWidgetData2Union,
  deserializeWidgetData1AndWidgetData2Union,
  deserializeWidgetData2AndWidgetData3Union,
  deserializeWidgetData0ArrayAndWidgetData2ArrayUnion,
  deserializeWidgetData1ArrayAndWidgetData2ArrayUnion,
  deserializeWidgetData2ArrayAndWidgetData3ArrayUnion,
  deserializeWidgetData0ArrayAndWidgetData2Union,
  deserializeWidgetData0AndWidgetData2ArrayUnion,
  deserializeWidgetData1ArrayAndWidgetData2Union,
  deserializeWidgetData1AndWidgetData2ArrayUnion,
  deserializeWidgetData2ArrayAndWidgetData3Union,
  deserializeWidgetData2AndWidgetData3ArrayUnion,
} from "../utils/deserializeUtil.js";
import {
  CustomGetOptions,
  CustomGet1Options,
  CustomGet2Options,
  CustomGet3Options,
  CustomGet4Options,
  CustomGet5Options,
  CustomGet6Options,
  CustomGet7Options,
  CustomGet8Options,
  CustomGet9Options,
  CustomGet10Options,
  CustomGet11Options,
  CustomGet12Options,
  CustomGet13Options,
  CustomGet14Options,
  CustomGet15Options,
  CustomGet16Options,
} from "../models/options.js";

export function _customGetSend(
  context: Client,
  options: CustomGetOptions = { requestOptions: {} }
): StreamableMethod<CustomGet200Response> {
  return context
    .path("/customGet")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGetDeserialize(
  result: CustomGet200Response
): Promise<Widget> {
  return {
    id: result.body["id"],
    weight: result.body["weight"],
    color: result.body["color"],
  };
}

export async function customGet(
  context: Client,
  options: CustomGetOptions = { requestOptions: {} }
): Promise<Widget> {
  const result = await _customGetSend(context, options);
  return _customGetDeserialize(result);
}

export function _customGet1Send(
  context: Client,
  options: CustomGet1Options = { requestOptions: {} }
): StreamableMethod<CustomGet1200Response> {
  return context
    .path("/customGet1")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGet1Deserialize(
  result: CustomGet1200Response
): Promise<Widget1> {
  return {
    data: result.body["data"],
  };
}

export async function customGet1(
  context: Client,
  options: CustomGet1Options = { requestOptions: {} }
): Promise<Widget1> {
  const result = await _customGet1Send(context, options);
  return _customGet1Deserialize(result);
}

export function _customGet2Send(
  context: Client,
  options: CustomGet2Options = { requestOptions: {} }
): StreamableMethod<CustomGet2200Response> {
  return context
    .path("/customGet2")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGet2Deserialize(
  result: CustomGet2200Response
): Promise<Widget2> {
  return {
    data: deserializeWidgetData0AndWidgetData2Union(result.body["data"]),
  };
}

export async function customGet2(
  context: Client,
  options: CustomGet2Options = { requestOptions: {} }
): Promise<Widget2> {
  const result = await _customGet2Send(context, options);
  return _customGet2Deserialize(result);
}

export function _customGet3Send(
  context: Client,
  options: CustomGet3Options = { requestOptions: {} }
): StreamableMethod<CustomGet3200Response> {
  return context
    .path("/customGet3")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGet3Deserialize(
  result: CustomGet3200Response
): Promise<Widget3> {
  return {
    data: deserializeWidgetData1AndWidgetData2Union(result.body["data"]),
  };
}

export async function customGet3(
  context: Client,
  options: CustomGet3Options = { requestOptions: {} }
): Promise<Widget3> {
  const result = await _customGet3Send(context, options);
  return _customGet3Deserialize(result);
}

export function _customGet4Send(
  context: Client,
  options: CustomGet4Options = { requestOptions: {} }
): StreamableMethod<CustomGet4200Response> {
  return context
    .path("/customGet4")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGet4Deserialize(
  result: CustomGet4200Response
): Promise<Widget4> {
  return {
    data: deserializeWidgetData2AndWidgetData3Union(result.body["data"]),
  };
}

export async function customGet4(
  context: Client,
  options: CustomGet4Options = { requestOptions: {} }
): Promise<Widget4> {
  const result = await _customGet4Send(context, options);
  return _customGet4Deserialize(result);
}

export function _customGet5Send(
  context: Client,
  options: CustomGet5Options = { requestOptions: {} }
): StreamableMethod<CustomGet5200Response> {
  return context
    .path("/customGet5")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGet5Deserialize(
  result: CustomGet5200Response
): Promise<Widget5> {
  return {
    data: result.body["data"],
  };
}

export async function customGet5(
  context: Client,
  options: CustomGet5Options = { requestOptions: {} }
): Promise<Widget5> {
  const result = await _customGet5Send(context, options);
  return _customGet5Deserialize(result);
}

export function _customGet6Send(
  context: Client,
  options: CustomGet6Options = { requestOptions: {} }
): StreamableMethod<CustomGet6200Response> {
  return context
    .path("/customGet6")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGet6Deserialize(
  result: CustomGet6200Response
): Promise<Widget6> {
  return {
    data: deserializeWidgetData0ArrayAndWidgetData2ArrayUnion(
      result.body["data"]
    ),
  };
}

export async function customGet6(
  context: Client,
  options: CustomGet6Options = { requestOptions: {} }
): Promise<Widget6> {
  const result = await _customGet6Send(context, options);
  return _customGet6Deserialize(result);
}

export function _customGet7Send(
  context: Client,
  options: CustomGet7Options = { requestOptions: {} }
): StreamableMethod<CustomGet7200Response> {
  return context
    .path("/customGet7")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGet7Deserialize(
  result: CustomGet7200Response
): Promise<Widget7> {
  return {
    data: deserializeWidgetData1ArrayAndWidgetData2ArrayUnion(
      result.body["data"]
    ),
  };
}

export async function customGet7(
  context: Client,
  options: CustomGet7Options = { requestOptions: {} }
): Promise<Widget7> {
  const result = await _customGet7Send(context, options);
  return _customGet7Deserialize(result);
}

export function _customGet8Send(
  context: Client,
  options: CustomGet8Options = { requestOptions: {} }
): StreamableMethod<CustomGet8200Response> {
  return context
    .path("/customGet8")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGet8Deserialize(
  result: CustomGet8200Response
): Promise<Widget8> {
  return {
    data: deserializeWidgetData2ArrayAndWidgetData3ArrayUnion(
      result.body["data"]
    ),
  };
}

export async function customGet8(
  context: Client,
  options: CustomGet8Options = { requestOptions: {} }
): Promise<Widget8> {
  const result = await _customGet8Send(context, options);
  return _customGet8Deserialize(result);
}

export function _customGet9Send(
  context: Client,
  options: CustomGet9Options = { requestOptions: {} }
): StreamableMethod<CustomGet9200Response> {
  return context
    .path("/customGet9")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGet9Deserialize(
  result: CustomGet9200Response
): Promise<Widget9> {
  return {
    data: result.body["data"],
  };
}

export async function customGet9(
  context: Client,
  options: CustomGet9Options = { requestOptions: {} }
): Promise<Widget9> {
  const result = await _customGet9Send(context, options);
  return _customGet9Deserialize(result);
}

export function _customGet10Send(
  context: Client,
  options: CustomGet10Options = { requestOptions: {} }
): StreamableMethod<CustomGet10200Response> {
  return context
    .path("/customGet10")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGet10Deserialize(
  result: CustomGet10200Response
): Promise<Widget10> {
  return {
    data: result.body["data"],
  };
}

export async function customGet10(
  context: Client,
  options: CustomGet10Options = { requestOptions: {} }
): Promise<Widget10> {
  const result = await _customGet10Send(context, options);
  return _customGet10Deserialize(result);
}

export function _customGet11Send(
  context: Client,
  options: CustomGet11Options = { requestOptions: {} }
): StreamableMethod<CustomGet11200Response> {
  return context
    .path("/customGet11")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGet11Deserialize(
  result: CustomGet11200Response
): Promise<Widget11> {
  return {
    data: deserializeWidgetData0ArrayAndWidgetData2Union(result.body["data"]),
  };
}

export async function customGet11(
  context: Client,
  options: CustomGet11Options = { requestOptions: {} }
): Promise<Widget11> {
  const result = await _customGet11Send(context, options);
  return _customGet11Deserialize(result);
}

export function _customGet12Send(
  context: Client,
  options: CustomGet12Options = { requestOptions: {} }
): StreamableMethod<CustomGet12200Response> {
  return context
    .path("/customGet12")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGet12Deserialize(
  result: CustomGet12200Response
): Promise<Widget12> {
  return {
    data: deserializeWidgetData0AndWidgetData2ArrayUnion(result.body["data"]),
  };
}

export async function customGet12(
  context: Client,
  options: CustomGet12Options = { requestOptions: {} }
): Promise<Widget12> {
  const result = await _customGet12Send(context, options);
  return _customGet12Deserialize(result);
}

export function _customGet13Send(
  context: Client,
  options: CustomGet13Options = { requestOptions: {} }
): StreamableMethod<CustomGet13200Response> {
  return context
    .path("/customGet13")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGet13Deserialize(
  result: CustomGet13200Response
): Promise<Widget13> {
  return {
    data: deserializeWidgetData1ArrayAndWidgetData2Union(result.body["data"]),
  };
}

export async function customGet13(
  context: Client,
  options: CustomGet13Options = { requestOptions: {} }
): Promise<Widget13> {
  const result = await _customGet13Send(context, options);
  return _customGet13Deserialize(result);
}

export function _customGet14Send(
  context: Client,
  options: CustomGet14Options = { requestOptions: {} }
): StreamableMethod<CustomGet14200Response> {
  return context
    .path("/customGet14")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGet14Deserialize(
  result: CustomGet14200Response
): Promise<Widget14> {
  return {
    data: deserializeWidgetData1AndWidgetData2ArrayUnion(result.body["data"]),
  };
}

export async function customGet14(
  context: Client,
  options: CustomGet14Options = { requestOptions: {} }
): Promise<Widget14> {
  const result = await _customGet14Send(context, options);
  return _customGet14Deserialize(result);
}

export function _customGet15Send(
  context: Client,
  options: CustomGet15Options = { requestOptions: {} }
): StreamableMethod<CustomGet15200Response> {
  return context
    .path("/customGet15")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGet15Deserialize(
  result: CustomGet15200Response
): Promise<Widget15> {
  return {
    data: deserializeWidgetData2ArrayAndWidgetData3Union(result.body["data"]),
  };
}

export async function customGet15(
  context: Client,
  options: CustomGet15Options = { requestOptions: {} }
): Promise<Widget15> {
  const result = await _customGet15Send(context, options);
  return _customGet15Deserialize(result);
}

export function _customGet16Send(
  context: Client,
  options: CustomGet16Options = { requestOptions: {} }
): StreamableMethod<CustomGet16200Response> {
  return context
    .path("/customGet16")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGet16Deserialize(
  result: CustomGet16200Response
): Promise<Widget16> {
  return {
    data: deserializeWidgetData2AndWidgetData3ArrayUnion(result.body["data"]),
  };
}

export async function customGet16(
  context: Client,
  options: CustomGet16Options = { requestOptions: {} }
): Promise<Widget16> {
  const result = await _customGet16Send(context, options);
  return _customGet16Deserialize(result);
}
