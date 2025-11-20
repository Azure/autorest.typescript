// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { BillingBenefitsContext as Client } from "./index.js";
import {
  SavingsPlanPurchaseValidateRequest,
  savingsPlanPurchaseValidateRequestSerializer,
  SavingsPlanValidateResponse,
  savingsPlanValidateResponseDeserializer,
  errorResponseDeserializer,
} from "../models/models.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { ValidatePurchaseOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _validatePurchaseSend(
  context: Client,
  body: SavingsPlanPurchaseValidateRequest,
  options: ValidatePurchaseOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.BillingBenefits/validate{?api%2Dversion}",
    {
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: savingsPlanPurchaseValidateRequestSerializer(body),
    });
}

export async function _validatePurchaseDeserialize(
  result: PathUncheckedResponse,
): Promise<SavingsPlanValidateResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return savingsPlanValidateResponseDeserializer(result.body);
}

/** Validate savings plan purchase. */
export async function validatePurchase(
  context: Client,
  body: SavingsPlanPurchaseValidateRequest,
  options: ValidatePurchaseOptionalParams = { requestOptions: {} },
): Promise<SavingsPlanValidateResponse> {
  const result = await _validatePurchaseSend(context, body, options);
  return _validatePurchaseDeserialize(result);
}
