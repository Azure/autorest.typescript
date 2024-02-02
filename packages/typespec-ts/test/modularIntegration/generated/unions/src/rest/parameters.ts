// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  StringExtensibleNamedUnion,
  Cat,
  Dog,
  EnumsOnlyCases,
  StringAndArrayCases,
  MixedLiteralsCases,
  MixedTypesCases,
} from "./models.js";

export type StringsOnlyGetParameters = RequestParameters;

export interface StringsOnlySendBodyParam {
  body?: { prop: "a" | "b" | "c" };
}

export type StringsOnlySendParameters = StringsOnlySendBodyParam &
  RequestParameters;
export type StringExtensibleGetParameters = RequestParameters;

export interface StringExtensibleSendBodyParam {
  body?: { prop: string | "b" | "c" };
}

export type StringExtensibleSendParameters = StringExtensibleSendBodyParam &
  RequestParameters;
export type StringExtensibleNamedGetParameters = RequestParameters;

export interface StringExtensibleNamedSendBodyParam {
  body?: { prop: StringExtensibleNamedUnion };
}

export type StringExtensibleNamedSendParameters =
  StringExtensibleNamedSendBodyParam & RequestParameters;
export type IntsOnlyGetParameters = RequestParameters;

export interface IntsOnlySendBodyParam {
  body?: { prop: 1 | 2 | 3 };
}

export type IntsOnlySendParameters = IntsOnlySendBodyParam & RequestParameters;
export type FloatsOnlyGetParameters = RequestParameters;

export interface FloatsOnlySendBodyParam {
  body?: { prop: 1.1 | 2.2 | 3.3 };
}

export type FloatsOnlySendParameters = FloatsOnlySendBodyParam &
  RequestParameters;
export type ModelsOnlyGetParameters = RequestParameters;

export interface ModelsOnlySendBodyParam {
  body?: { prop: Cat | Dog };
}

export type ModelsOnlySendParameters = ModelsOnlySendBodyParam &
  RequestParameters;
export type EnumsOnlyGetParameters = RequestParameters;

export interface EnumsOnlySendBodyParam {
  body?: { prop: EnumsOnlyCases };
}

export type EnumsOnlySendParameters = EnumsOnlySendBodyParam &
  RequestParameters;
export type StringAndArrayGetParameters = RequestParameters;

export interface StringAndArraySendBodyParam {
  body?: { prop: StringAndArrayCases };
}

export type StringAndArraySendParameters = StringAndArraySendBodyParam &
  RequestParameters;
export type MixedLiteralsGetParameters = RequestParameters;

export interface MixedLiteralsSendBodyParam {
  body?: { prop: MixedLiteralsCases };
}

export type MixedLiteralsSendParameters = MixedLiteralsSendBodyParam &
  RequestParameters;
export type MixedTypesGetParameters = RequestParameters;

export interface MixedTypesSendBodyParam {
  body?: { prop: MixedTypesCases };
}

export type MixedTypesSendParameters = MixedTypesSendBodyParam &
  RequestParameters;
