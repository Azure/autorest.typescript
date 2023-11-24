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
  deserializeWidgetData0AndWidgetData2Union,
  deserializeWidgetData1AndWidgetData2Union,
  deserializeWidgetData2AndWidgetData3Union,
  deserializeWidgetData0AndWidgetData4Union,
  deserializeWidgetData0AndWidgetData5Union,
  deserializeWidgetData0ArrayAndWidgetData2ArrayUnion,
  deserializeWidgetData1ArrayAndWidgetData2ArrayUnion,
  deserializeWidgetData2ArrayAndWidgetData3ArrayUnion,
  deserializeWidgetData0ArrayAndWidgetData4ArrayUnion,
  deserializeWidgetData0ArrayAndWidgetData5ArrayUnion,
  deserializeWidgetData0ArrayAndWidgetData2Union,
  deserializeWidgetData0AndWidgetData2ArrayUnion,
  deserializeWidgetData1ArrayAndWidgetData2Union,
  deserializeWidgetData1AndWidgetData2ArrayUnion,
  deserializeWidgetData2ArrayAndWidgetData3Union,
  deserializeWidgetData2AndWidgetData3ArrayUnion,
  deserializeWidgetData0ArrayAndWidgetData4Union,
  deserializeWidgetData0AndWidgetData4ArrayUnion,
  deserializeWidgetData0ArrayAndWidgetData5Union,
  deserializeWidgetData0AndWidgetData5ArrayUnion,
  deserializeWidgetData0AndWidgetData3AndWidgetData5ArrayUnion,
  deserializeWidgetData2AndWidgetData4AndWidgetData6ArrayUnion,
} from "../../utils/deserializeUtil.js";
import {
  CustomGet10200Response,
  CustomGet11200Response,
  CustomGet1200Response,
  CustomGet12200Response,
  CustomGet13200Response,
  CustomGet14200Response,
  CustomGet15200Response,
  CustomGet16200Response,
  CustomGet17200Response,
  CustomGet18200Response,
  CustomGet19200Response,
  CustomGet200Response,
  CustomGet20200Response,
  CustomGet21200Response,
  CustomGet2200Response,
  CustomGet22200Response,
  CustomGet23200Response,
  CustomGet24200Response,
  CustomGet25200Response,
  CustomGet26200Response,
  CustomGet3200Response,
  CustomGet4200Response,
  CustomGet5200Response,
  CustomGet6200Response,
  CustomGet7200Response,
  CustomGet8200Response,
  CustomGet9200Response,
  DemoServiceContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
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

export function _customGetSend(
  context: Client,
  options: WidgetServiceCustomGetOptions = { requestOptions: {} }
): StreamableMethod<CustomGet200Response> {
  return context
    .path("/customGet")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGetDeserialize(
  result: CustomGet200Response
): Promise<Widget> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    id: result.body["id"],
    weight: result.body["weight"],
    color: result.body["color"],
  };
}

export async function customGet(
  context: Client,
  options: WidgetServiceCustomGetOptions = { requestOptions: {} }
): Promise<Widget> {
  const result = await _customGetSend(context, options);
  return _customGetDeserialize(result);
}

export function _customGet1Send(
  context: Client,
  options: WidgetServiceCustomGet1Options = { requestOptions: {} }
): StreamableMethod<CustomGet1200Response> {
  return context
    .path("/customGet1")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGet1Deserialize(
  result: CustomGet1200Response
): Promise<Widget1> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    id: result.body["id"],
    weight: result.body["weight"],
    color: result.body["color"],
    data: result.body["data"],
  };
}

export async function customGet1(
  context: Client,
  options: WidgetServiceCustomGet1Options = { requestOptions: {} }
): Promise<Widget1> {
  const result = await _customGet1Send(context, options);
  return _customGet1Deserialize(result);
}

export function _customGet2Send(
  context: Client,
  options: WidgetServiceCustomGet2Options = { requestOptions: {} }
): StreamableMethod<CustomGet2200Response> {
  return context
    .path("/customGet2")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGet2Deserialize(
  result: CustomGet2200Response
): Promise<Widget2> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    id: result.body["id"],
    weight: result.body["weight"],
    color: result.body["color"],
    data: deserializeWidgetData0AndWidgetData2Union(result.body["data"]),
  };
}

export async function customGet2(
  context: Client,
  options: WidgetServiceCustomGet2Options = { requestOptions: {} }
): Promise<Widget2> {
  const result = await _customGet2Send(context, options);
  return _customGet2Deserialize(result);
}

export function _customGet3Send(
  context: Client,
  options: WidgetServiceCustomGet3Options = { requestOptions: {} }
): StreamableMethod<CustomGet3200Response> {
  return context
    .path("/customGet3")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGet3Deserialize(
  result: CustomGet3200Response
): Promise<Widget3> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    id: result.body["id"],
    weight: result.body["weight"],
    color: result.body["color"],
    data: deserializeWidgetData1AndWidgetData2Union(result.body["data"]),
  };
}

export async function customGet3(
  context: Client,
  options: WidgetServiceCustomGet3Options = { requestOptions: {} }
): Promise<Widget3> {
  const result = await _customGet3Send(context, options);
  return _customGet3Deserialize(result);
}

export function _customGet4Send(
  context: Client,
  options: WidgetServiceCustomGet4Options = { requestOptions: {} }
): StreamableMethod<CustomGet4200Response> {
  return context
    .path("/customGet4")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGet4Deserialize(
  result: CustomGet4200Response
): Promise<Widget4> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    id: result.body["id"],
    weight: result.body["weight"],
    color: result.body["color"],
    data: deserializeWidgetData2AndWidgetData3Union(result.body["data"]),
  };
}

export async function customGet4(
  context: Client,
  options: WidgetServiceCustomGet4Options = { requestOptions: {} }
): Promise<Widget4> {
  const result = await _customGet4Send(context, options);
  return _customGet4Deserialize(result);
}

export function _customGet5Send(
  context: Client,
  options: WidgetServiceCustomGet5Options = { requestOptions: {} }
): StreamableMethod<CustomGet5200Response> {
  return context
    .path("/customGet5")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGet5Deserialize(
  result: CustomGet5200Response
): Promise<Widget5> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    id: result.body["id"],
    weight: result.body["weight"],
    color: result.body["color"],
    data: deserializeWidgetData0AndWidgetData4Union(result.body["data"]),
  };
}

export async function customGet5(
  context: Client,
  options: WidgetServiceCustomGet5Options = { requestOptions: {} }
): Promise<Widget5> {
  const result = await _customGet5Send(context, options);
  return _customGet5Deserialize(result);
}

export function _customGet6Send(
  context: Client,
  options: WidgetServiceCustomGet6Options = { requestOptions: {} }
): StreamableMethod<CustomGet6200Response> {
  return context
    .path("/customGet6")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGet6Deserialize(
  result: CustomGet6200Response
): Promise<Widget6> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    id: result.body["id"],
    weight: result.body["weight"],
    color: result.body["color"],
    data: deserializeWidgetData0AndWidgetData5Union(result.body["data"]),
  };
}

export async function customGet6(
  context: Client,
  options: WidgetServiceCustomGet6Options = { requestOptions: {} }
): Promise<Widget6> {
  const result = await _customGet6Send(context, options);
  return _customGet6Deserialize(result);
}

export function _customGet7Send(
  context: Client,
  options: WidgetServiceCustomGet7Options = { requestOptions: {} }
): StreamableMethod<CustomGet7200Response> {
  return context
    .path("/customGet7")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGet7Deserialize(
  result: CustomGet7200Response
): Promise<Widget7> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    id: result.body["id"],
    weight: result.body["weight"],
    color: result.body["color"],
    data: result.body["data"],
  };
}

export async function customGet7(
  context: Client,
  options: WidgetServiceCustomGet7Options = { requestOptions: {} }
): Promise<Widget7> {
  const result = await _customGet7Send(context, options);
  return _customGet7Deserialize(result);
}

export function _customGet8Send(
  context: Client,
  options: WidgetServiceCustomGet8Options = { requestOptions: {} }
): StreamableMethod<CustomGet8200Response> {
  return context
    .path("/customGet8")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGet8Deserialize(
  result: CustomGet8200Response
): Promise<Widget8> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    id: result.body["id"],
    weight: result.body["weight"],
    color: result.body["color"],
    data: deserializeWidgetData0ArrayAndWidgetData2ArrayUnion(
      result.body["data"]
    ),
  };
}

export async function customGet8(
  context: Client,
  options: WidgetServiceCustomGet8Options = { requestOptions: {} }
): Promise<Widget8> {
  const result = await _customGet8Send(context, options);
  return _customGet8Deserialize(result);
}

export function _customGet9Send(
  context: Client,
  options: WidgetServiceCustomGet9Options = { requestOptions: {} }
): StreamableMethod<CustomGet9200Response> {
  return context
    .path("/customGet9")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGet9Deserialize(
  result: CustomGet9200Response
): Promise<Widget9> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    id: result.body["id"],
    weight: result.body["weight"],
    color: result.body["color"],
    data: deserializeWidgetData1ArrayAndWidgetData2ArrayUnion(
      result.body["data"]
    ),
  };
}

export async function customGet9(
  context: Client,
  options: WidgetServiceCustomGet9Options = { requestOptions: {} }
): Promise<Widget9> {
  const result = await _customGet9Send(context, options);
  return _customGet9Deserialize(result);
}

export function _customGet10Send(
  context: Client,
  options: WidgetServiceCustomGet10Options = { requestOptions: {} }
): StreamableMethod<CustomGet10200Response> {
  return context
    .path("/customGet10")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGet10Deserialize(
  result: CustomGet10200Response
): Promise<Widget10> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    id: result.body["id"],
    weight: result.body["weight"],
    color: result.body["color"],
    data: deserializeWidgetData2ArrayAndWidgetData3ArrayUnion(
      result.body["data"]
    ),
  };
}

export async function customGet10(
  context: Client,
  options: WidgetServiceCustomGet10Options = { requestOptions: {} }
): Promise<Widget10> {
  const result = await _customGet10Send(context, options);
  return _customGet10Deserialize(result);
}

export function _customGet11Send(
  context: Client,
  options: WidgetServiceCustomGet11Options = { requestOptions: {} }
): StreamableMethod<CustomGet11200Response> {
  return context
    .path("/customGet11")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGet11Deserialize(
  result: CustomGet11200Response
): Promise<Widget11> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    id: result.body["id"],
    weight: result.body["weight"],
    color: result.body["color"],
    data: deserializeWidgetData0ArrayAndWidgetData4ArrayUnion(
      result.body["data"]
    ),
  };
}

export async function customGet11(
  context: Client,
  options: WidgetServiceCustomGet11Options = { requestOptions: {} }
): Promise<Widget11> {
  const result = await _customGet11Send(context, options);
  return _customGet11Deserialize(result);
}

export function _customGet12Send(
  context: Client,
  options: WidgetServiceCustomGet12Options = { requestOptions: {} }
): StreamableMethod<CustomGet12200Response> {
  return context
    .path("/customGet12")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGet12Deserialize(
  result: CustomGet12200Response
): Promise<Widget12> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    id: result.body["id"],
    weight: result.body["weight"],
    color: result.body["color"],
    data: deserializeWidgetData0ArrayAndWidgetData5ArrayUnion(
      result.body["data"]
    ),
  };
}

export async function customGet12(
  context: Client,
  options: WidgetServiceCustomGet12Options = { requestOptions: {} }
): Promise<Widget12> {
  const result = await _customGet12Send(context, options);
  return _customGet12Deserialize(result);
}

export function _customGet13Send(
  context: Client,
  options: WidgetServiceCustomGet13Options = { requestOptions: {} }
): StreamableMethod<CustomGet13200Response> {
  return context
    .path("/customGet13")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGet13Deserialize(
  result: CustomGet13200Response
): Promise<Widget13> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    id: result.body["id"],
    weight: result.body["weight"],
    color: result.body["color"],
    data: result.body["data"],
  };
}

export async function customGet13(
  context: Client,
  options: WidgetServiceCustomGet13Options = { requestOptions: {} }
): Promise<Widget13> {
  const result = await _customGet13Send(context, options);
  return _customGet13Deserialize(result);
}

export function _customGet14Send(
  context: Client,
  options: WidgetServiceCustomGet14Options = { requestOptions: {} }
): StreamableMethod<CustomGet14200Response> {
  return context
    .path("/customGet14")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGet14Deserialize(
  result: CustomGet14200Response
): Promise<Widget14> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    id: result.body["id"],
    weight: result.body["weight"],
    color: result.body["color"],
    data: result.body["data"],
  };
}

export async function customGet14(
  context: Client,
  options: WidgetServiceCustomGet14Options = { requestOptions: {} }
): Promise<Widget14> {
  const result = await _customGet14Send(context, options);
  return _customGet14Deserialize(result);
}

export function _customGet15Send(
  context: Client,
  options: WidgetServiceCustomGet15Options = { requestOptions: {} }
): StreamableMethod<CustomGet15200Response> {
  return context
    .path("/customGet15")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGet15Deserialize(
  result: CustomGet15200Response
): Promise<Widget15> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    id: result.body["id"],
    weight: result.body["weight"],
    color: result.body["color"],
    data: deserializeWidgetData0ArrayAndWidgetData2Union(result.body["data"]),
  };
}

export async function customGet15(
  context: Client,
  options: WidgetServiceCustomGet15Options = { requestOptions: {} }
): Promise<Widget15> {
  const result = await _customGet15Send(context, options);
  return _customGet15Deserialize(result);
}

export function _customGet16Send(
  context: Client,
  options: WidgetServiceCustomGet16Options = { requestOptions: {} }
): StreamableMethod<CustomGet16200Response> {
  return context
    .path("/customGet16")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGet16Deserialize(
  result: CustomGet16200Response
): Promise<Widget16> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    id: result.body["id"],
    weight: result.body["weight"],
    color: result.body["color"],
    data: deserializeWidgetData0AndWidgetData2ArrayUnion(result.body["data"]),
  };
}

export async function customGet16(
  context: Client,
  options: WidgetServiceCustomGet16Options = { requestOptions: {} }
): Promise<Widget16> {
  const result = await _customGet16Send(context, options);
  return _customGet16Deserialize(result);
}

export function _customGet17Send(
  context: Client,
  options: WidgetServiceCustomGet17Options = { requestOptions: {} }
): StreamableMethod<CustomGet17200Response> {
  return context
    .path("/customGet17")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGet17Deserialize(
  result: CustomGet17200Response
): Promise<Widget17> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    id: result.body["id"],
    weight: result.body["weight"],
    color: result.body["color"],
    data: deserializeWidgetData1ArrayAndWidgetData2Union(result.body["data"]),
  };
}

export async function customGet17(
  context: Client,
  options: WidgetServiceCustomGet17Options = { requestOptions: {} }
): Promise<Widget17> {
  const result = await _customGet17Send(context, options);
  return _customGet17Deserialize(result);
}

export function _customGet18Send(
  context: Client,
  options: WidgetServiceCustomGet18Options = { requestOptions: {} }
): StreamableMethod<CustomGet18200Response> {
  return context
    .path("/customGet18")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGet18Deserialize(
  result: CustomGet18200Response
): Promise<Widget18> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    id: result.body["id"],
    weight: result.body["weight"],
    color: result.body["color"],
    data: deserializeWidgetData1AndWidgetData2ArrayUnion(result.body["data"]),
  };
}

export async function customGet18(
  context: Client,
  options: WidgetServiceCustomGet18Options = { requestOptions: {} }
): Promise<Widget18> {
  const result = await _customGet18Send(context, options);
  return _customGet18Deserialize(result);
}

export function _customGet19Send(
  context: Client,
  options: WidgetServiceCustomGet19Options = { requestOptions: {} }
): StreamableMethod<CustomGet19200Response> {
  return context
    .path("/customGet19")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGet19Deserialize(
  result: CustomGet19200Response
): Promise<Widget19> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    id: result.body["id"],
    weight: result.body["weight"],
    color: result.body["color"],
    data: deserializeWidgetData2ArrayAndWidgetData3Union(result.body["data"]),
  };
}

export async function customGet19(
  context: Client,
  options: WidgetServiceCustomGet19Options = { requestOptions: {} }
): Promise<Widget19> {
  const result = await _customGet19Send(context, options);
  return _customGet19Deserialize(result);
}

export function _customGet20Send(
  context: Client,
  options: WidgetServiceCustomGet20Options = { requestOptions: {} }
): StreamableMethod<CustomGet20200Response> {
  return context
    .path("/customGet20")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGet20Deserialize(
  result: CustomGet20200Response
): Promise<Widget20> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    id: result.body["id"],
    weight: result.body["weight"],
    color: result.body["color"],
    data: deserializeWidgetData2AndWidgetData3ArrayUnion(result.body["data"]),
  };
}

export async function customGet20(
  context: Client,
  options: WidgetServiceCustomGet20Options = { requestOptions: {} }
): Promise<Widget20> {
  const result = await _customGet20Send(context, options);
  return _customGet20Deserialize(result);
}

export function _customGet21Send(
  context: Client,
  options: WidgetServiceCustomGet21Options = { requestOptions: {} }
): StreamableMethod<CustomGet21200Response> {
  return context
    .path("/customGet21")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGet21Deserialize(
  result: CustomGet21200Response
): Promise<Widget21> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    id: result.body["id"],
    weight: result.body["weight"],
    color: result.body["color"],
    data: deserializeWidgetData0ArrayAndWidgetData4Union(result.body["data"]),
  };
}

export async function customGet21(
  context: Client,
  options: WidgetServiceCustomGet21Options = { requestOptions: {} }
): Promise<Widget21> {
  const result = await _customGet21Send(context, options);
  return _customGet21Deserialize(result);
}

export function _customGet22Send(
  context: Client,
  options: WidgetServiceCustomGet22Options = { requestOptions: {} }
): StreamableMethod<CustomGet22200Response> {
  return context
    .path("/customGet22")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGet22Deserialize(
  result: CustomGet22200Response
): Promise<Widget22> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    id: result.body["id"],
    weight: result.body["weight"],
    color: result.body["color"],
    data: deserializeWidgetData0AndWidgetData4ArrayUnion(result.body["data"]),
  };
}

export async function customGet22(
  context: Client,
  options: WidgetServiceCustomGet22Options = { requestOptions: {} }
): Promise<Widget22> {
  const result = await _customGet22Send(context, options);
  return _customGet22Deserialize(result);
}

export function _customGet23Send(
  context: Client,
  options: WidgetServiceCustomGet23Options = { requestOptions: {} }
): StreamableMethod<CustomGet23200Response> {
  return context
    .path("/customGet23")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGet23Deserialize(
  result: CustomGet23200Response
): Promise<Widget23> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    id: result.body["id"],
    weight: result.body["weight"],
    color: result.body["color"],
    data: deserializeWidgetData0ArrayAndWidgetData5Union(result.body["data"]),
  };
}

export async function customGet23(
  context: Client,
  options: WidgetServiceCustomGet23Options = { requestOptions: {} }
): Promise<Widget23> {
  const result = await _customGet23Send(context, options);
  return _customGet23Deserialize(result);
}

export function _customGet24Send(
  context: Client,
  options: WidgetServiceCustomGet24Options = { requestOptions: {} }
): StreamableMethod<CustomGet24200Response> {
  return context
    .path("/customGet24")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGet24Deserialize(
  result: CustomGet24200Response
): Promise<Widget24> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    id: result.body["id"],
    weight: result.body["weight"],
    color: result.body["color"],
    data: deserializeWidgetData0AndWidgetData5ArrayUnion(result.body["data"]),
  };
}

export async function customGet24(
  context: Client,
  options: WidgetServiceCustomGet24Options = { requestOptions: {} }
): Promise<Widget24> {
  const result = await _customGet24Send(context, options);
  return _customGet24Deserialize(result);
}

export function _customGet25Send(
  context: Client,
  options: WidgetServiceCustomGet25Options = { requestOptions: {} }
): StreamableMethod<CustomGet25200Response> {
  return context
    .path("/customGet25")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGet25Deserialize(
  result: CustomGet25200Response
): Promise<Widget25> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    id: result.body["id"],
    weight: result.body["weight"],
    color: result.body["color"],
    data: deserializeWidgetData0AndWidgetData3AndWidgetData5ArrayUnion(
      result.body["data"]
    ),
  };
}

export async function customGet25(
  context: Client,
  options: WidgetServiceCustomGet25Options = { requestOptions: {} }
): Promise<Widget25> {
  const result = await _customGet25Send(context, options);
  return _customGet25Deserialize(result);
}

export function _customGet26Send(
  context: Client,
  options: WidgetServiceCustomGet26Options = { requestOptions: {} }
): StreamableMethod<CustomGet26200Response> {
  return context
    .path("/customGet26")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGet26Deserialize(
  result: CustomGet26200Response
): Promise<Widget26> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    id: result.body["id"],
    weight: result.body["weight"],
    color: result.body["color"],
    data: deserializeWidgetData2AndWidgetData4AndWidgetData6ArrayUnion(
      result.body["data"]
    ),
  };
}

export async function customGet26(
  context: Client,
  options: WidgetServiceCustomGet26Options = { requestOptions: {} }
): Promise<Widget26> {
  const result = await _customGet26Send(context, options);
  return _customGet26Deserialize(result);
}
