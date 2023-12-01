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
  Widget27,
  Widget28,
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
  deserializeWidgetData0AndDateUnion,
  deserializeWidgetData0AndUint8ArrayUnion,
} from "../../utils/deserializeUtil.js";
import {
  serializeWidgetData0AndWidgetData2Union,
  serializeWidgetData1AndWidgetData2Union,
  serializeWidgetData2AndWidgetData3Union,
  serializeWidgetData0AndWidgetData4Union,
  serializeWidgetData0AndWidgetData5Union,
  serializeWidgetData0ArrayAndWidgetData2ArrayUnion,
  serializeWidgetData1ArrayAndWidgetData2ArrayUnion,
  serializeWidgetData2ArrayAndWidgetData3ArrayUnion,
  serializeWidgetData0ArrayAndWidgetData4ArrayUnion,
  serializeWidgetData0ArrayAndWidgetData5ArrayUnion,
  serializeWidgetData0ArrayAndWidgetData2Union,
  serializeWidgetData0AndWidgetData2ArrayUnion,
  serializeWidgetData1ArrayAndWidgetData2Union,
  serializeWidgetData1AndWidgetData2ArrayUnion,
  serializeWidgetData2ArrayAndWidgetData3Union,
  serializeWidgetData2AndWidgetData3ArrayUnion,
  serializeWidgetData0ArrayAndWidgetData4Union,
  serializeWidgetData0AndWidgetData4ArrayUnion,
  serializeWidgetData0ArrayAndWidgetData5Union,
  serializeWidgetData0AndWidgetData5ArrayUnion,
  serializeWidgetData0AndWidgetData3AndWidgetData5ArrayUnion,
  serializeWidgetData2AndWidgetData4AndWidgetData6ArrayUnion,
  serializeWidgetData0AndDateUnion,
  serializeWidgetData0AndUint8ArrayUnion,
} from "../../utils/serializeUtil.js";
import {
  CustomGetRequest10204Response,
  CustomGetRequest11204Response,
  CustomGetRequest1204Response,
  CustomGetRequest12204Response,
  CustomGetRequest13204Response,
  CustomGetRequest14204Response,
  CustomGetRequest15204Response,
  CustomGetRequest16204Response,
  CustomGetRequest17204Response,
  CustomGetRequest18204Response,
  CustomGetRequest19204Response,
  CustomGetRequest20204Response,
  CustomGetRequest204Response,
  CustomGetRequest21204Response,
  CustomGetRequest2204Response,
  CustomGetRequest22204Response,
  CustomGetRequest23204Response,
  CustomGetRequest24204Response,
  CustomGetRequest25204Response,
  CustomGetRequest26204Response,
  CustomGetRequest27204Response,
  CustomGetRequest28204Response,
  CustomGetRequest3204Response,
  CustomGetRequest4204Response,
  CustomGetRequest5204Response,
  CustomGetRequest6204Response,
  CustomGetRequest7204Response,
  CustomGetRequest8204Response,
  CustomGetRequest9204Response,
  CustomGetResponse10200Response,
  CustomGetResponse11200Response,
  CustomGetResponse1200Response,
  CustomGetResponse12200Response,
  CustomGetResponse13200Response,
  CustomGetResponse14200Response,
  CustomGetResponse15200Response,
  CustomGetResponse16200Response,
  CustomGetResponse17200Response,
  CustomGetResponse18200Response,
  CustomGetResponse19200Response,
  CustomGetResponse200Response,
  CustomGetResponse20200Response,
  CustomGetResponse21200Response,
  CustomGetResponse2200Response,
  CustomGetResponse22200Response,
  CustomGetResponse23200Response,
  CustomGetResponse24200Response,
  CustomGetResponse25200Response,
  CustomGetResponse26200Response,
  CustomGetResponse27200Response,
  CustomGetResponse28200Response,
  CustomGetResponse3200Response,
  CustomGetResponse4200Response,
  CustomGetResponse5200Response,
  CustomGetResponse6200Response,
  CustomGetResponse7200Response,
  CustomGetResponse8200Response,
  CustomGetResponse9200Response,
  DemoServiceContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
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
  WidgetServiceCustomGetResponse27Options,
  WidgetServiceCustomGetResponse28Options,
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
  WidgetServiceCustomGetRequest27Options,
  WidgetServiceCustomGetRequest28Options,
} from "../../models/options.js";

export function _customGetResponseSend(
  context: Client,
  options: WidgetServiceCustomGetResponseOptions = { requestOptions: {} }
): StreamableMethod<CustomGetResponse200Response> {
  return context
    .path("/customGet/response")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGetResponseDeserialize(
  result: CustomGetResponse200Response
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

export async function customGetResponse(
  context: Client,
  options: WidgetServiceCustomGetResponseOptions = { requestOptions: {} }
): Promise<Widget> {
  const result = await _customGetResponseSend(context, options);
  return _customGetResponseDeserialize(result);
}

export function _customGetResponse1Send(
  context: Client,
  options: WidgetServiceCustomGetResponse1Options = { requestOptions: {} }
): StreamableMethod<CustomGetResponse1200Response> {
  return context
    .path("/customGet1/response")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGetResponse1Deserialize(
  result: CustomGetResponse1200Response
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

export async function customGetResponse1(
  context: Client,
  options: WidgetServiceCustomGetResponse1Options = { requestOptions: {} }
): Promise<Widget1> {
  const result = await _customGetResponse1Send(context, options);
  return _customGetResponse1Deserialize(result);
}

export function _customGetResponse2Send(
  context: Client,
  options: WidgetServiceCustomGetResponse2Options = { requestOptions: {} }
): StreamableMethod<CustomGetResponse2200Response> {
  return context
    .path("/customGet2/response")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGetResponse2Deserialize(
  result: CustomGetResponse2200Response
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

export async function customGetResponse2(
  context: Client,
  options: WidgetServiceCustomGetResponse2Options = { requestOptions: {} }
): Promise<Widget2> {
  const result = await _customGetResponse2Send(context, options);
  return _customGetResponse2Deserialize(result);
}

export function _customGetResponse3Send(
  context: Client,
  options: WidgetServiceCustomGetResponse3Options = { requestOptions: {} }
): StreamableMethod<CustomGetResponse3200Response> {
  return context
    .path("/customGet3/response")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGetResponse3Deserialize(
  result: CustomGetResponse3200Response
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

export async function customGetResponse3(
  context: Client,
  options: WidgetServiceCustomGetResponse3Options = { requestOptions: {} }
): Promise<Widget3> {
  const result = await _customGetResponse3Send(context, options);
  return _customGetResponse3Deserialize(result);
}

export function _customGetResponse4Send(
  context: Client,
  options: WidgetServiceCustomGetResponse4Options = { requestOptions: {} }
): StreamableMethod<CustomGetResponse4200Response> {
  return context
    .path("/customGet4/response")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGetResponse4Deserialize(
  result: CustomGetResponse4200Response
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

export async function customGetResponse4(
  context: Client,
  options: WidgetServiceCustomGetResponse4Options = { requestOptions: {} }
): Promise<Widget4> {
  const result = await _customGetResponse4Send(context, options);
  return _customGetResponse4Deserialize(result);
}

export function _customGetResponse5Send(
  context: Client,
  options: WidgetServiceCustomGetResponse5Options = { requestOptions: {} }
): StreamableMethod<CustomGetResponse5200Response> {
  return context
    .path("/customGet5/response")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGetResponse5Deserialize(
  result: CustomGetResponse5200Response
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

export async function customGetResponse5(
  context: Client,
  options: WidgetServiceCustomGetResponse5Options = { requestOptions: {} }
): Promise<Widget5> {
  const result = await _customGetResponse5Send(context, options);
  return _customGetResponse5Deserialize(result);
}

export function _customGetResponse6Send(
  context: Client,
  options: WidgetServiceCustomGetResponse6Options = { requestOptions: {} }
): StreamableMethod<CustomGetResponse6200Response> {
  return context
    .path("/customGet6/response")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGetResponse6Deserialize(
  result: CustomGetResponse6200Response
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

export async function customGetResponse6(
  context: Client,
  options: WidgetServiceCustomGetResponse6Options = { requestOptions: {} }
): Promise<Widget6> {
  const result = await _customGetResponse6Send(context, options);
  return _customGetResponse6Deserialize(result);
}

export function _customGetResponse7Send(
  context: Client,
  options: WidgetServiceCustomGetResponse7Options = { requestOptions: {} }
): StreamableMethod<CustomGetResponse7200Response> {
  return context
    .path("/customGet7/response")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGetResponse7Deserialize(
  result: CustomGetResponse7200Response
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

export async function customGetResponse7(
  context: Client,
  options: WidgetServiceCustomGetResponse7Options = { requestOptions: {} }
): Promise<Widget7> {
  const result = await _customGetResponse7Send(context, options);
  return _customGetResponse7Deserialize(result);
}

export function _customGetResponse8Send(
  context: Client,
  options: WidgetServiceCustomGetResponse8Options = { requestOptions: {} }
): StreamableMethod<CustomGetResponse8200Response> {
  return context
    .path("/customGet8/response")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGetResponse8Deserialize(
  result: CustomGetResponse8200Response
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

export async function customGetResponse8(
  context: Client,
  options: WidgetServiceCustomGetResponse8Options = { requestOptions: {} }
): Promise<Widget8> {
  const result = await _customGetResponse8Send(context, options);
  return _customGetResponse8Deserialize(result);
}

export function _customGetResponse9Send(
  context: Client,
  options: WidgetServiceCustomGetResponse9Options = { requestOptions: {} }
): StreamableMethod<CustomGetResponse9200Response> {
  return context
    .path("/customGet9/response")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGetResponse9Deserialize(
  result: CustomGetResponse9200Response
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

export async function customGetResponse9(
  context: Client,
  options: WidgetServiceCustomGetResponse9Options = { requestOptions: {} }
): Promise<Widget9> {
  const result = await _customGetResponse9Send(context, options);
  return _customGetResponse9Deserialize(result);
}

export function _customGetResponse10Send(
  context: Client,
  options: WidgetServiceCustomGetResponse10Options = { requestOptions: {} }
): StreamableMethod<CustomGetResponse10200Response> {
  return context
    .path("/customGet10/response")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGetResponse10Deserialize(
  result: CustomGetResponse10200Response
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

export async function customGetResponse10(
  context: Client,
  options: WidgetServiceCustomGetResponse10Options = { requestOptions: {} }
): Promise<Widget10> {
  const result = await _customGetResponse10Send(context, options);
  return _customGetResponse10Deserialize(result);
}

export function _customGetResponse11Send(
  context: Client,
  options: WidgetServiceCustomGetResponse11Options = { requestOptions: {} }
): StreamableMethod<CustomGetResponse11200Response> {
  return context
    .path("/customGet11/response")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGetResponse11Deserialize(
  result: CustomGetResponse11200Response
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

export async function customGetResponse11(
  context: Client,
  options: WidgetServiceCustomGetResponse11Options = { requestOptions: {} }
): Promise<Widget11> {
  const result = await _customGetResponse11Send(context, options);
  return _customGetResponse11Deserialize(result);
}

export function _customGetResponse12Send(
  context: Client,
  options: WidgetServiceCustomGetResponse12Options = { requestOptions: {} }
): StreamableMethod<CustomGetResponse12200Response> {
  return context
    .path("/customGet12/response")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGetResponse12Deserialize(
  result: CustomGetResponse12200Response
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

export async function customGetResponse12(
  context: Client,
  options: WidgetServiceCustomGetResponse12Options = { requestOptions: {} }
): Promise<Widget12> {
  const result = await _customGetResponse12Send(context, options);
  return _customGetResponse12Deserialize(result);
}

export function _customGetResponse13Send(
  context: Client,
  options: WidgetServiceCustomGetResponse13Options = { requestOptions: {} }
): StreamableMethod<CustomGetResponse13200Response> {
  return context
    .path("/customGet13/response")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGetResponse13Deserialize(
  result: CustomGetResponse13200Response
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

export async function customGetResponse13(
  context: Client,
  options: WidgetServiceCustomGetResponse13Options = { requestOptions: {} }
): Promise<Widget13> {
  const result = await _customGetResponse13Send(context, options);
  return _customGetResponse13Deserialize(result);
}

export function _customGetResponse14Send(
  context: Client,
  options: WidgetServiceCustomGetResponse14Options = { requestOptions: {} }
): StreamableMethod<CustomGetResponse14200Response> {
  return context
    .path("/customGet14/response")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGetResponse14Deserialize(
  result: CustomGetResponse14200Response
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

export async function customGetResponse14(
  context: Client,
  options: WidgetServiceCustomGetResponse14Options = { requestOptions: {} }
): Promise<Widget14> {
  const result = await _customGetResponse14Send(context, options);
  return _customGetResponse14Deserialize(result);
}

export function _customGetResponse15Send(
  context: Client,
  options: WidgetServiceCustomGetResponse15Options = { requestOptions: {} }
): StreamableMethod<CustomGetResponse15200Response> {
  return context
    .path("/customGet15/response")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGetResponse15Deserialize(
  result: CustomGetResponse15200Response
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

export async function customGetResponse15(
  context: Client,
  options: WidgetServiceCustomGetResponse15Options = { requestOptions: {} }
): Promise<Widget15> {
  const result = await _customGetResponse15Send(context, options);
  return _customGetResponse15Deserialize(result);
}

export function _customGetResponse16Send(
  context: Client,
  options: WidgetServiceCustomGetResponse16Options = { requestOptions: {} }
): StreamableMethod<CustomGetResponse16200Response> {
  return context
    .path("/customGet16/response")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGetResponse16Deserialize(
  result: CustomGetResponse16200Response
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

export async function customGetResponse16(
  context: Client,
  options: WidgetServiceCustomGetResponse16Options = { requestOptions: {} }
): Promise<Widget16> {
  const result = await _customGetResponse16Send(context, options);
  return _customGetResponse16Deserialize(result);
}

export function _customGetResponse17Send(
  context: Client,
  options: WidgetServiceCustomGetResponse17Options = { requestOptions: {} }
): StreamableMethod<CustomGetResponse17200Response> {
  return context
    .path("/customGet17/response")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGetResponse17Deserialize(
  result: CustomGetResponse17200Response
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

export async function customGetResponse17(
  context: Client,
  options: WidgetServiceCustomGetResponse17Options = { requestOptions: {} }
): Promise<Widget17> {
  const result = await _customGetResponse17Send(context, options);
  return _customGetResponse17Deserialize(result);
}

export function _customGetResponse18Send(
  context: Client,
  options: WidgetServiceCustomGetResponse18Options = { requestOptions: {} }
): StreamableMethod<CustomGetResponse18200Response> {
  return context
    .path("/customGet18/response")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGetResponse18Deserialize(
  result: CustomGetResponse18200Response
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

export async function customGetResponse18(
  context: Client,
  options: WidgetServiceCustomGetResponse18Options = { requestOptions: {} }
): Promise<Widget18> {
  const result = await _customGetResponse18Send(context, options);
  return _customGetResponse18Deserialize(result);
}

export function _customGetResponse19Send(
  context: Client,
  options: WidgetServiceCustomGetResponse19Options = { requestOptions: {} }
): StreamableMethod<CustomGetResponse19200Response> {
  return context
    .path("/customGet19/response")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGetResponse19Deserialize(
  result: CustomGetResponse19200Response
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

export async function customGetResponse19(
  context: Client,
  options: WidgetServiceCustomGetResponse19Options = { requestOptions: {} }
): Promise<Widget19> {
  const result = await _customGetResponse19Send(context, options);
  return _customGetResponse19Deserialize(result);
}

export function _customGetResponse20Send(
  context: Client,
  options: WidgetServiceCustomGetResponse20Options = { requestOptions: {} }
): StreamableMethod<CustomGetResponse20200Response> {
  return context
    .path("/customGet20/response")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGetResponse20Deserialize(
  result: CustomGetResponse20200Response
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

export async function customGetResponse20(
  context: Client,
  options: WidgetServiceCustomGetResponse20Options = { requestOptions: {} }
): Promise<Widget20> {
  const result = await _customGetResponse20Send(context, options);
  return _customGetResponse20Deserialize(result);
}

export function _customGetResponse21Send(
  context: Client,
  options: WidgetServiceCustomGetResponse21Options = { requestOptions: {} }
): StreamableMethod<CustomGetResponse21200Response> {
  return context
    .path("/customGet21/response")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGetResponse21Deserialize(
  result: CustomGetResponse21200Response
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

export async function customGetResponse21(
  context: Client,
  options: WidgetServiceCustomGetResponse21Options = { requestOptions: {} }
): Promise<Widget21> {
  const result = await _customGetResponse21Send(context, options);
  return _customGetResponse21Deserialize(result);
}

export function _customGetResponse22Send(
  context: Client,
  options: WidgetServiceCustomGetResponse22Options = { requestOptions: {} }
): StreamableMethod<CustomGetResponse22200Response> {
  return context
    .path("/customGet22/response")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGetResponse22Deserialize(
  result: CustomGetResponse22200Response
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

export async function customGetResponse22(
  context: Client,
  options: WidgetServiceCustomGetResponse22Options = { requestOptions: {} }
): Promise<Widget22> {
  const result = await _customGetResponse22Send(context, options);
  return _customGetResponse22Deserialize(result);
}

export function _customGetResponse23Send(
  context: Client,
  options: WidgetServiceCustomGetResponse23Options = { requestOptions: {} }
): StreamableMethod<CustomGetResponse23200Response> {
  return context
    .path("/customGet23/response")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGetResponse23Deserialize(
  result: CustomGetResponse23200Response
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

export async function customGetResponse23(
  context: Client,
  options: WidgetServiceCustomGetResponse23Options = { requestOptions: {} }
): Promise<Widget23> {
  const result = await _customGetResponse23Send(context, options);
  return _customGetResponse23Deserialize(result);
}

export function _customGetResponse24Send(
  context: Client,
  options: WidgetServiceCustomGetResponse24Options = { requestOptions: {} }
): StreamableMethod<CustomGetResponse24200Response> {
  return context
    .path("/customGet24/response")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGetResponse24Deserialize(
  result: CustomGetResponse24200Response
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

export async function customGetResponse24(
  context: Client,
  options: WidgetServiceCustomGetResponse24Options = { requestOptions: {} }
): Promise<Widget24> {
  const result = await _customGetResponse24Send(context, options);
  return _customGetResponse24Deserialize(result);
}

export function _customGetResponse25Send(
  context: Client,
  options: WidgetServiceCustomGetResponse25Options = { requestOptions: {} }
): StreamableMethod<CustomGetResponse25200Response> {
  return context
    .path("/customGet25/response")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGetResponse25Deserialize(
  result: CustomGetResponse25200Response
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

export async function customGetResponse25(
  context: Client,
  options: WidgetServiceCustomGetResponse25Options = { requestOptions: {} }
): Promise<Widget25> {
  const result = await _customGetResponse25Send(context, options);
  return _customGetResponse25Deserialize(result);
}

export function _customGetResponse26Send(
  context: Client,
  options: WidgetServiceCustomGetResponse26Options = { requestOptions: {} }
): StreamableMethod<CustomGetResponse26200Response> {
  return context
    .path("/customGet26/response")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGetResponse26Deserialize(
  result: CustomGetResponse26200Response
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

export async function customGetResponse26(
  context: Client,
  options: WidgetServiceCustomGetResponse26Options = { requestOptions: {} }
): Promise<Widget26> {
  const result = await _customGetResponse26Send(context, options);
  return _customGetResponse26Deserialize(result);
}

export function _customGetResponse27Send(
  context: Client,
  options: WidgetServiceCustomGetResponse27Options = { requestOptions: {} }
): StreamableMethod<CustomGetResponse27200Response> {
  return context
    .path("/customGet27/response")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGetResponse27Deserialize(
  result: CustomGetResponse27200Response
): Promise<Widget27> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    id: result.body["id"],
    weight: result.body["weight"],
    color: result.body["color"],
    data: deserializeWidgetData0AndDateUnion(result.body["data"]),
  };
}

export async function customGetResponse27(
  context: Client,
  options: WidgetServiceCustomGetResponse27Options = { requestOptions: {} }
): Promise<Widget27> {
  const result = await _customGetResponse27Send(context, options);
  return _customGetResponse27Deserialize(result);
}

export function _customGetResponse28Send(
  context: Client,
  options: WidgetServiceCustomGetResponse28Options = { requestOptions: {} }
): StreamableMethod<CustomGetResponse28200Response> {
  return context
    .path("/customGet28/response")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _customGetResponse28Deserialize(
  result: CustomGetResponse28200Response
): Promise<Widget28> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    id: result.body["id"],
    weight: result.body["weight"],
    color: result.body["color"],
    data: deserializeWidgetData0AndUint8ArrayUnion(result.body["data"]),
  };
}

export async function customGetResponse28(
  context: Client,
  options: WidgetServiceCustomGetResponse28Options = { requestOptions: {} }
): Promise<Widget28> {
  const result = await _customGetResponse28Send(context, options);
  return _customGetResponse28Deserialize(result);
}

export function _customGetRequestSend(
  context: Client,
  body: Widget,
  options: WidgetServiceCustomGetRequestOptions = { requestOptions: {} }
): StreamableMethod<CustomGetRequest204Response> {
  return context
    .path("/customGet/request")
    .get({
      ...operationOptionsToRequestParameters(options),
      body: { id: body["id"], weight: body["weight"], color: body["color"] },
    });
}

export async function _customGetRequestDeserialize(
  result: CustomGetRequest204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function customGetRequest(
  context: Client,
  body: Widget,
  options: WidgetServiceCustomGetRequestOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _customGetRequestSend(context, body, options);
  return _customGetRequestDeserialize(result);
}

export function _customGetRequest1Send(
  context: Client,
  body: Widget1,
  options: WidgetServiceCustomGetRequest1Options = { requestOptions: {} }
): StreamableMethod<CustomGetRequest1204Response> {
  return context
    .path("/customGet1/request")
    .get({
      ...operationOptionsToRequestParameters(options),
      body: {
        id: body["id"],
        weight: body["weight"],
        color: body["color"],
        data: body["data"],
      },
    });
}

export async function _customGetRequest1Deserialize(
  result: CustomGetRequest1204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function customGetRequest1(
  context: Client,
  body: Widget1,
  options: WidgetServiceCustomGetRequest1Options = { requestOptions: {} }
): Promise<void> {
  const result = await _customGetRequest1Send(context, body, options);
  return _customGetRequest1Deserialize(result);
}

export function _customGetRequest2Send(
  context: Client,
  body: Widget2,
  options: WidgetServiceCustomGetRequest2Options = { requestOptions: {} }
): StreamableMethod<CustomGetRequest2204Response> {
  return context
    .path("/customGet2/request")
    .get({
      ...operationOptionsToRequestParameters(options),
      body: {
        id: body["id"],
        weight: body["weight"],
        color: body["color"],
        data: serializeWidgetData0AndWidgetData2Union(body["data"]),
      },
    });
}

export async function _customGetRequest2Deserialize(
  result: CustomGetRequest2204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function customGetRequest2(
  context: Client,
  body: Widget2,
  options: WidgetServiceCustomGetRequest2Options = { requestOptions: {} }
): Promise<void> {
  const result = await _customGetRequest2Send(context, body, options);
  return _customGetRequest2Deserialize(result);
}

export function _customGetRequest3Send(
  context: Client,
  body: Widget3,
  options: WidgetServiceCustomGetRequest3Options = { requestOptions: {} }
): StreamableMethod<CustomGetRequest3204Response> {
  return context
    .path("/customGet3/request")
    .get({
      ...operationOptionsToRequestParameters(options),
      body: {
        id: body["id"],
        weight: body["weight"],
        color: body["color"],
        data: serializeWidgetData1AndWidgetData2Union(body["data"]),
      },
    });
}

export async function _customGetRequest3Deserialize(
  result: CustomGetRequest3204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function customGetRequest3(
  context: Client,
  body: Widget3,
  options: WidgetServiceCustomGetRequest3Options = { requestOptions: {} }
): Promise<void> {
  const result = await _customGetRequest3Send(context, body, options);
  return _customGetRequest3Deserialize(result);
}

export function _customGetRequest4Send(
  context: Client,
  body: Widget4,
  options: WidgetServiceCustomGetRequest4Options = { requestOptions: {} }
): StreamableMethod<CustomGetRequest4204Response> {
  return context
    .path("/customGet4/request")
    .get({
      ...operationOptionsToRequestParameters(options),
      body: {
        id: body["id"],
        weight: body["weight"],
        color: body["color"],
        data: serializeWidgetData2AndWidgetData3Union(body["data"]),
      },
    });
}

export async function _customGetRequest4Deserialize(
  result: CustomGetRequest4204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function customGetRequest4(
  context: Client,
  body: Widget4,
  options: WidgetServiceCustomGetRequest4Options = { requestOptions: {} }
): Promise<void> {
  const result = await _customGetRequest4Send(context, body, options);
  return _customGetRequest4Deserialize(result);
}

export function _customGetRequest5Send(
  context: Client,
  body: Widget5,
  options: WidgetServiceCustomGetRequest5Options = { requestOptions: {} }
): StreamableMethod<CustomGetRequest5204Response> {
  return context
    .path("/customGet5/request")
    .get({
      ...operationOptionsToRequestParameters(options),
      body: {
        id: body["id"],
        weight: body["weight"],
        color: body["color"],
        data: serializeWidgetData0AndWidgetData4Union(body["data"]),
      },
    });
}

export async function _customGetRequest5Deserialize(
  result: CustomGetRequest5204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function customGetRequest5(
  context: Client,
  body: Widget5,
  options: WidgetServiceCustomGetRequest5Options = { requestOptions: {} }
): Promise<void> {
  const result = await _customGetRequest5Send(context, body, options);
  return _customGetRequest5Deserialize(result);
}

export function _customGetRequest6Send(
  context: Client,
  body: Widget6,
  options: WidgetServiceCustomGetRequest6Options = { requestOptions: {} }
): StreamableMethod<CustomGetRequest6204Response> {
  return context
    .path("/customGet6/request")
    .get({
      ...operationOptionsToRequestParameters(options),
      body: {
        id: body["id"],
        weight: body["weight"],
        color: body["color"],
        data: serializeWidgetData0AndWidgetData5Union(body["data"]),
      },
    });
}

export async function _customGetRequest6Deserialize(
  result: CustomGetRequest6204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function customGetRequest6(
  context: Client,
  body: Widget6,
  options: WidgetServiceCustomGetRequest6Options = { requestOptions: {} }
): Promise<void> {
  const result = await _customGetRequest6Send(context, body, options);
  return _customGetRequest6Deserialize(result);
}

export function _customGetRequest7Send(
  context: Client,
  body: Widget7,
  options: WidgetServiceCustomGetRequest7Options = { requestOptions: {} }
): StreamableMethod<CustomGetRequest7204Response> {
  return context
    .path("/customGet7/request")
    .get({
      ...operationOptionsToRequestParameters(options),
      body: {
        id: body["id"],
        weight: body["weight"],
        color: body["color"],
        data: body["data"],
      },
    });
}

export async function _customGetRequest7Deserialize(
  result: CustomGetRequest7204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function customGetRequest7(
  context: Client,
  body: Widget7,
  options: WidgetServiceCustomGetRequest7Options = { requestOptions: {} }
): Promise<void> {
  const result = await _customGetRequest7Send(context, body, options);
  return _customGetRequest7Deserialize(result);
}

export function _customGetRequest8Send(
  context: Client,
  body: Widget8,
  options: WidgetServiceCustomGetRequest8Options = { requestOptions: {} }
): StreamableMethod<CustomGetRequest8204Response> {
  return context
    .path("/customGet8/request")
    .get({
      ...operationOptionsToRequestParameters(options),
      body: {
        id: body["id"],
        weight: body["weight"],
        color: body["color"],
        data: serializeWidgetData0ArrayAndWidgetData2ArrayUnion(body["data"]),
      },
    });
}

export async function _customGetRequest8Deserialize(
  result: CustomGetRequest8204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function customGetRequest8(
  context: Client,
  body: Widget8,
  options: WidgetServiceCustomGetRequest8Options = { requestOptions: {} }
): Promise<void> {
  const result = await _customGetRequest8Send(context, body, options);
  return _customGetRequest8Deserialize(result);
}

export function _customGetRequest9Send(
  context: Client,
  body: Widget9,
  options: WidgetServiceCustomGetRequest9Options = { requestOptions: {} }
): StreamableMethod<CustomGetRequest9204Response> {
  return context
    .path("/customGet9/request")
    .get({
      ...operationOptionsToRequestParameters(options),
      body: {
        id: body["id"],
        weight: body["weight"],
        color: body["color"],
        data: serializeWidgetData1ArrayAndWidgetData2ArrayUnion(body["data"]),
      },
    });
}

export async function _customGetRequest9Deserialize(
  result: CustomGetRequest9204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function customGetRequest9(
  context: Client,
  body: Widget9,
  options: WidgetServiceCustomGetRequest9Options = { requestOptions: {} }
): Promise<void> {
  const result = await _customGetRequest9Send(context, body, options);
  return _customGetRequest9Deserialize(result);
}

export function _customGetRequest10Send(
  context: Client,
  body: Widget10,
  options: WidgetServiceCustomGetRequest10Options = { requestOptions: {} }
): StreamableMethod<CustomGetRequest10204Response> {
  return context
    .path("/customGet10/request")
    .get({
      ...operationOptionsToRequestParameters(options),
      body: {
        id: body["id"],
        weight: body["weight"],
        color: body["color"],
        data: serializeWidgetData2ArrayAndWidgetData3ArrayUnion(body["data"]),
      },
    });
}

export async function _customGetRequest10Deserialize(
  result: CustomGetRequest10204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function customGetRequest10(
  context: Client,
  body: Widget10,
  options: WidgetServiceCustomGetRequest10Options = { requestOptions: {} }
): Promise<void> {
  const result = await _customGetRequest10Send(context, body, options);
  return _customGetRequest10Deserialize(result);
}

export function _customGetRequest11Send(
  context: Client,
  body: Widget11,
  options: WidgetServiceCustomGetRequest11Options = { requestOptions: {} }
): StreamableMethod<CustomGetRequest11204Response> {
  return context
    .path("/customGet11/request")
    .get({
      ...operationOptionsToRequestParameters(options),
      body: {
        id: body["id"],
        weight: body["weight"],
        color: body["color"],
        data: serializeWidgetData0ArrayAndWidgetData4ArrayUnion(body["data"]),
      },
    });
}

export async function _customGetRequest11Deserialize(
  result: CustomGetRequest11204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function customGetRequest11(
  context: Client,
  body: Widget11,
  options: WidgetServiceCustomGetRequest11Options = { requestOptions: {} }
): Promise<void> {
  const result = await _customGetRequest11Send(context, body, options);
  return _customGetRequest11Deserialize(result);
}

export function _customGetRequest12Send(
  context: Client,
  body: Widget12,
  options: WidgetServiceCustomGetRequest12Options = { requestOptions: {} }
): StreamableMethod<CustomGetRequest12204Response> {
  return context
    .path("/customGet12/request")
    .get({
      ...operationOptionsToRequestParameters(options),
      body: {
        id: body["id"],
        weight: body["weight"],
        color: body["color"],
        data: serializeWidgetData0ArrayAndWidgetData5ArrayUnion(body["data"]),
      },
    });
}

export async function _customGetRequest12Deserialize(
  result: CustomGetRequest12204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function customGetRequest12(
  context: Client,
  body: Widget12,
  options: WidgetServiceCustomGetRequest12Options = { requestOptions: {} }
): Promise<void> {
  const result = await _customGetRequest12Send(context, body, options);
  return _customGetRequest12Deserialize(result);
}

export function _customGetRequest13Send(
  context: Client,
  body: Widget13,
  options: WidgetServiceCustomGetRequest13Options = { requestOptions: {} }
): StreamableMethod<CustomGetRequest13204Response> {
  return context
    .path("/customGet13/request")
    .get({
      ...operationOptionsToRequestParameters(options),
      body: {
        id: body["id"],
        weight: body["weight"],
        color: body["color"],
        data: body["data"],
      },
    });
}

export async function _customGetRequest13Deserialize(
  result: CustomGetRequest13204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function customGetRequest13(
  context: Client,
  body: Widget13,
  options: WidgetServiceCustomGetRequest13Options = { requestOptions: {} }
): Promise<void> {
  const result = await _customGetRequest13Send(context, body, options);
  return _customGetRequest13Deserialize(result);
}

export function _customGetRequest14Send(
  context: Client,
  body: Widget14,
  options: WidgetServiceCustomGetRequest14Options = { requestOptions: {} }
): StreamableMethod<CustomGetRequest14204Response> {
  return context
    .path("/customGet14/request")
    .get({
      ...operationOptionsToRequestParameters(options),
      body: {
        id: body["id"],
        weight: body["weight"],
        color: body["color"],
        data: body["data"],
      },
    });
}

export async function _customGetRequest14Deserialize(
  result: CustomGetRequest14204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function customGetRequest14(
  context: Client,
  body: Widget14,
  options: WidgetServiceCustomGetRequest14Options = { requestOptions: {} }
): Promise<void> {
  const result = await _customGetRequest14Send(context, body, options);
  return _customGetRequest14Deserialize(result);
}

export function _customGetRequest15Send(
  context: Client,
  body: Widget15,
  options: WidgetServiceCustomGetRequest15Options = { requestOptions: {} }
): StreamableMethod<CustomGetRequest15204Response> {
  return context
    .path("/customGet15/request")
    .get({
      ...operationOptionsToRequestParameters(options),
      body: {
        id: body["id"],
        weight: body["weight"],
        color: body["color"],
        data: serializeWidgetData0ArrayAndWidgetData2Union(body["data"]),
      },
    });
}

export async function _customGetRequest15Deserialize(
  result: CustomGetRequest15204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function customGetRequest15(
  context: Client,
  body: Widget15,
  options: WidgetServiceCustomGetRequest15Options = { requestOptions: {} }
): Promise<void> {
  const result = await _customGetRequest15Send(context, body, options);
  return _customGetRequest15Deserialize(result);
}

export function _customGetRequest16Send(
  context: Client,
  body: Widget16,
  options: WidgetServiceCustomGetRequest16Options = { requestOptions: {} }
): StreamableMethod<CustomGetRequest16204Response> {
  return context
    .path("/customGet16/request")
    .get({
      ...operationOptionsToRequestParameters(options),
      body: {
        id: body["id"],
        weight: body["weight"],
        color: body["color"],
        data: serializeWidgetData0AndWidgetData2ArrayUnion(body["data"]),
      },
    });
}

export async function _customGetRequest16Deserialize(
  result: CustomGetRequest16204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function customGetRequest16(
  context: Client,
  body: Widget16,
  options: WidgetServiceCustomGetRequest16Options = { requestOptions: {} }
): Promise<void> {
  const result = await _customGetRequest16Send(context, body, options);
  return _customGetRequest16Deserialize(result);
}

export function _customGetRequest17Send(
  context: Client,
  body: Widget17,
  options: WidgetServiceCustomGetRequest17Options = { requestOptions: {} }
): StreamableMethod<CustomGetRequest17204Response> {
  return context
    .path("/customGet17/request")
    .get({
      ...operationOptionsToRequestParameters(options),
      body: {
        id: body["id"],
        weight: body["weight"],
        color: body["color"],
        data: serializeWidgetData1ArrayAndWidgetData2Union(body["data"]),
      },
    });
}

export async function _customGetRequest17Deserialize(
  result: CustomGetRequest17204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function customGetRequest17(
  context: Client,
  body: Widget17,
  options: WidgetServiceCustomGetRequest17Options = { requestOptions: {} }
): Promise<void> {
  const result = await _customGetRequest17Send(context, body, options);
  return _customGetRequest17Deserialize(result);
}

export function _customGetRequest18Send(
  context: Client,
  body: Widget18,
  options: WidgetServiceCustomGetRequest18Options = { requestOptions: {} }
): StreamableMethod<CustomGetRequest18204Response> {
  return context
    .path("/customGet18/request")
    .get({
      ...operationOptionsToRequestParameters(options),
      body: {
        id: body["id"],
        weight: body["weight"],
        color: body["color"],
        data: serializeWidgetData1AndWidgetData2ArrayUnion(body["data"]),
      },
    });
}

export async function _customGetRequest18Deserialize(
  result: CustomGetRequest18204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function customGetRequest18(
  context: Client,
  body: Widget18,
  options: WidgetServiceCustomGetRequest18Options = { requestOptions: {} }
): Promise<void> {
  const result = await _customGetRequest18Send(context, body, options);
  return _customGetRequest18Deserialize(result);
}

export function _customGetRequest19Send(
  context: Client,
  body: Widget19,
  options: WidgetServiceCustomGetRequest19Options = { requestOptions: {} }
): StreamableMethod<CustomGetRequest19204Response> {
  return context
    .path("/customGet19/request")
    .get({
      ...operationOptionsToRequestParameters(options),
      body: {
        id: body["id"],
        weight: body["weight"],
        color: body["color"],
        data: serializeWidgetData2ArrayAndWidgetData3Union(body["data"]),
      },
    });
}

export async function _customGetRequest19Deserialize(
  result: CustomGetRequest19204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function customGetRequest19(
  context: Client,
  body: Widget19,
  options: WidgetServiceCustomGetRequest19Options = { requestOptions: {} }
): Promise<void> {
  const result = await _customGetRequest19Send(context, body, options);
  return _customGetRequest19Deserialize(result);
}

export function _customGetRequest20Send(
  context: Client,
  body: Widget20,
  options: WidgetServiceCustomGetRequest20Options = { requestOptions: {} }
): StreamableMethod<CustomGetRequest20204Response> {
  return context
    .path("/customGet20/request")
    .get({
      ...operationOptionsToRequestParameters(options),
      body: {
        id: body["id"],
        weight: body["weight"],
        color: body["color"],
        data: serializeWidgetData2AndWidgetData3ArrayUnion(body["data"]),
      },
    });
}

export async function _customGetRequest20Deserialize(
  result: CustomGetRequest20204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function customGetRequest20(
  context: Client,
  body: Widget20,
  options: WidgetServiceCustomGetRequest20Options = { requestOptions: {} }
): Promise<void> {
  const result = await _customGetRequest20Send(context, body, options);
  return _customGetRequest20Deserialize(result);
}

export function _customGetRequest21Send(
  context: Client,
  body: Widget21,
  options: WidgetServiceCustomGetRequest21Options = { requestOptions: {} }
): StreamableMethod<CustomGetRequest21204Response> {
  return context
    .path("/customGet21/request")
    .get({
      ...operationOptionsToRequestParameters(options),
      body: {
        id: body["id"],
        weight: body["weight"],
        color: body["color"],
        data: serializeWidgetData0ArrayAndWidgetData4Union(body["data"]),
      },
    });
}

export async function _customGetRequest21Deserialize(
  result: CustomGetRequest21204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function customGetRequest21(
  context: Client,
  body: Widget21,
  options: WidgetServiceCustomGetRequest21Options = { requestOptions: {} }
): Promise<void> {
  const result = await _customGetRequest21Send(context, body, options);
  return _customGetRequest21Deserialize(result);
}

export function _customGetRequest22Send(
  context: Client,
  body: Widget22,
  options: WidgetServiceCustomGetRequest22Options = { requestOptions: {} }
): StreamableMethod<CustomGetRequest22204Response> {
  return context
    .path("/customGet22/request")
    .get({
      ...operationOptionsToRequestParameters(options),
      body: {
        id: body["id"],
        weight: body["weight"],
        color: body["color"],
        data: serializeWidgetData0AndWidgetData4ArrayUnion(body["data"]),
      },
    });
}

export async function _customGetRequest22Deserialize(
  result: CustomGetRequest22204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function customGetRequest22(
  context: Client,
  body: Widget22,
  options: WidgetServiceCustomGetRequest22Options = { requestOptions: {} }
): Promise<void> {
  const result = await _customGetRequest22Send(context, body, options);
  return _customGetRequest22Deserialize(result);
}

export function _customGetRequest23Send(
  context: Client,
  body: Widget23,
  options: WidgetServiceCustomGetRequest23Options = { requestOptions: {} }
): StreamableMethod<CustomGetRequest23204Response> {
  return context
    .path("/customGet23/request")
    .get({
      ...operationOptionsToRequestParameters(options),
      body: {
        id: body["id"],
        weight: body["weight"],
        color: body["color"],
        data: serializeWidgetData0ArrayAndWidgetData5Union(body["data"]),
      },
    });
}

export async function _customGetRequest23Deserialize(
  result: CustomGetRequest23204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function customGetRequest23(
  context: Client,
  body: Widget23,
  options: WidgetServiceCustomGetRequest23Options = { requestOptions: {} }
): Promise<void> {
  const result = await _customGetRequest23Send(context, body, options);
  return _customGetRequest23Deserialize(result);
}

export function _customGetRequest24Send(
  context: Client,
  body: Widget24,
  options: WidgetServiceCustomGetRequest24Options = { requestOptions: {} }
): StreamableMethod<CustomGetRequest24204Response> {
  return context
    .path("/customGet24/request")
    .get({
      ...operationOptionsToRequestParameters(options),
      body: {
        id: body["id"],
        weight: body["weight"],
        color: body["color"],
        data: serializeWidgetData0AndWidgetData5ArrayUnion(body["data"]),
      },
    });
}

export async function _customGetRequest24Deserialize(
  result: CustomGetRequest24204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function customGetRequest24(
  context: Client,
  body: Widget24,
  options: WidgetServiceCustomGetRequest24Options = { requestOptions: {} }
): Promise<void> {
  const result = await _customGetRequest24Send(context, body, options);
  return _customGetRequest24Deserialize(result);
}

export function _customGetRequest25Send(
  context: Client,
  body: Widget25,
  options: WidgetServiceCustomGetRequest25Options = { requestOptions: {} }
): StreamableMethod<CustomGetRequest25204Response> {
  return context
    .path("/customGet25/request")
    .get({
      ...operationOptionsToRequestParameters(options),
      body: {
        id: body["id"],
        weight: body["weight"],
        color: body["color"],
        data: serializeWidgetData0AndWidgetData3AndWidgetData5ArrayUnion(
          body["data"]
        ),
      },
    });
}

export async function _customGetRequest25Deserialize(
  result: CustomGetRequest25204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function customGetRequest25(
  context: Client,
  body: Widget25,
  options: WidgetServiceCustomGetRequest25Options = { requestOptions: {} }
): Promise<void> {
  const result = await _customGetRequest25Send(context, body, options);
  return _customGetRequest25Deserialize(result);
}

export function _customGetRequest26Send(
  context: Client,
  body: Widget26,
  options: WidgetServiceCustomGetRequest26Options = { requestOptions: {} }
): StreamableMethod<CustomGetRequest26204Response> {
  return context
    .path("/customGet26/request")
    .get({
      ...operationOptionsToRequestParameters(options),
      body: {
        id: body["id"],
        weight: body["weight"],
        color: body["color"],
        data: serializeWidgetData2AndWidgetData4AndWidgetData6ArrayUnion(
          body["data"]
        ),
      },
    });
}

export async function _customGetRequest26Deserialize(
  result: CustomGetRequest26204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function customGetRequest26(
  context: Client,
  body: Widget26,
  options: WidgetServiceCustomGetRequest26Options = { requestOptions: {} }
): Promise<void> {
  const result = await _customGetRequest26Send(context, body, options);
  return _customGetRequest26Deserialize(result);
}

export function _customGetRequest27Send(
  context: Client,
  body: Widget27,
  options: WidgetServiceCustomGetRequest27Options = { requestOptions: {} }
): StreamableMethod<CustomGetRequest27204Response> {
  return context
    .path("/customGet27/request")
    .get({
      ...operationOptionsToRequestParameters(options),
      body: {
        id: body["id"],
        weight: body["weight"],
        color: body["color"],
        data: serializeWidgetData0AndDateUnion(body["data"]),
      },
    });
}

export async function _customGetRequest27Deserialize(
  result: CustomGetRequest27204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function customGetRequest27(
  context: Client,
  body: Widget27,
  options: WidgetServiceCustomGetRequest27Options = { requestOptions: {} }
): Promise<void> {
  const result = await _customGetRequest27Send(context, body, options);
  return _customGetRequest27Deserialize(result);
}

export function _customGetRequest28Send(
  context: Client,
  body: Widget28,
  options: WidgetServiceCustomGetRequest28Options = { requestOptions: {} }
): StreamableMethod<CustomGetRequest28204Response> {
  return context
    .path("/customGet28/request")
    .get({
      ...operationOptionsToRequestParameters(options),
      body: {
        id: body["id"],
        weight: body["weight"],
        color: body["color"],
        data: serializeWidgetData0AndUint8ArrayUnion(body["data"]),
      },
    });
}

export async function _customGetRequest28Deserialize(
  result: CustomGetRequest28204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function customGetRequest28(
  context: Client,
  body: Widget28,
  options: WidgetServiceCustomGetRequest28Options = { requestOptions: {} }
): Promise<void> {
  const result = await _customGetRequest28Send(context, body, options);
  return _customGetRequest28Deserialize(result);
}
