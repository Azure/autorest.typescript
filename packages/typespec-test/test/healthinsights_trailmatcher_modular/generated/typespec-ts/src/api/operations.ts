// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "./pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { TrialMatcherData, TrialMatcherResults } from "../models/models.js";
import {
  isUnexpected,
  AzureHealthInsightsContext as Client,
  TrialMatcherCreateJob200Response,
  TrialMatcherCreateJob202Response,
  TrialMatcherCreateJobDefaultResponse,
  TrialMatcherCreateJobLogicalResponse,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { MatchTrialsOptions } from "../models/options.js";

export function _matchTrialsSend(
  context: Client,
  body: TrialMatcherData,
  options: MatchTrialsOptions = { requestOptions: {} },
): StreamableMethod<
  | TrialMatcherCreateJob200Response
  | TrialMatcherCreateJob202Response
  | TrialMatcherCreateJobDefaultResponse
  | TrialMatcherCreateJobLogicalResponse
> {
  return context
    .path("/trialmatcher/jobs")
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.repeatabilityRequestId !== undefined
          ? { "Repeatability-Request-ID": options?.repeatabilityRequestId }
          : {}),
        ...(options?.repeatabilityFirstSent !== undefined
          ? {
              "Repeatability-First-Sent":
                options?.repeatabilityFirstSent?.toUTCString(),
            }
          : {}),
      },
      body: {
        patients: body["patients"].map((p) => ({
          id: p["id"],
          info: !p.info
            ? undefined
            : {
                sex: p.info?.["sex"],
                birthDate: p.info?.["birthDate"]?.toDateString(),
                clinicalInfo: !p.info?.["clinicalInfo"]
                  ? p.info?.["clinicalInfo"]
                  : p.info?.["clinicalInfo"].map((p) => ({
                      system: p["system"],
                      code: p["code"],
                      name: p["name"],
                      value: p["value"],
                    })),
              },
          data: !p["data"]
            ? p["data"]
            : p["data"].map((p) => ({
                type: p["type"],
                clinicalType: p["clinicalType"],
                id: p["id"],
                language: p["language"],
                createdDateTime: p["createdDateTime"]?.toISOString(),
                content: {
                  sourceType: p.content["sourceType"],
                  value: p.content["value"],
                },
              })),
        })),
        configuration: !body.configuration
          ? undefined
          : {
              verbose: body.configuration?.["verbose"],
              includeEvidence: body.configuration?.["includeEvidence"],
              clinicalTrials: {
                customTrials: !body.configuration?.clinicalTrials[
                  "customTrials"
                ]
                  ? body.configuration?.clinicalTrials["customTrials"]
                  : body.configuration?.clinicalTrials["customTrials"].map(
                      (p) => ({
                        id: p["id"],
                        eligibilityCriteriaText: p["eligibilityCriteriaText"],
                        demographics: !p.demographics
                          ? undefined
                          : {
                              acceptedSex: p.demographics?.["acceptedSex"],
                              acceptedAgeRange: !p.demographics
                                ?.acceptedAgeRange
                                ? undefined
                                : {
                                    minimumAge: !p.demographics
                                      ?.acceptedAgeRange?.minimumAge
                                      ? undefined
                                      : {
                                          unit: p.demographics?.acceptedAgeRange
                                            ?.minimumAge?.["unit"],
                                          value:
                                            p.demographics?.acceptedAgeRange
                                              ?.minimumAge?.["value"],
                                        },
                                    maximumAge: !p.demographics
                                      ?.acceptedAgeRange?.maximumAge
                                      ? undefined
                                      : {
                                          unit: p.demographics?.acceptedAgeRange
                                            ?.maximumAge?.["unit"],
                                          value:
                                            p.demographics?.acceptedAgeRange
                                              ?.maximumAge?.["value"],
                                        },
                                  },
                            },
                        metadata: {
                          phases: p.metadata["phases"],
                          studyType: p.metadata["studyType"],
                          recruitmentStatus: p.metadata["recruitmentStatus"],
                          conditions: p.metadata["conditions"],
                          sponsors: p.metadata["sponsors"],
                          contacts: !p.metadata["contacts"]
                            ? p.metadata["contacts"]
                            : p.metadata["contacts"].map((p) => ({
                                name: p["name"],
                                email: p["email"],
                                phone: p["phone"],
                              })),
                          facilities: !p.metadata["facilities"]
                            ? p.metadata["facilities"]
                            : p.metadata["facilities"].map((p) => ({
                                name: p["name"],
                                city: p["city"],
                                state: p["state"],
                                countryOrRegion: p["countryOrRegion"],
                              })),
                        },
                      }),
                    ),
                registryFilters: !body.configuration?.clinicalTrials[
                  "registryFilters"
                ]
                  ? body.configuration?.clinicalTrials["registryFilters"]
                  : body.configuration?.clinicalTrials["registryFilters"].map(
                      (p) => ({
                        conditions: p["conditions"],
                        studyTypes: p["studyTypes"],
                        recruitmentStatuses: p["recruitmentStatuses"],
                        sponsors: p["sponsors"],
                        phases: p["phases"],
                        purposes: p["purposes"],
                        ids: p["ids"],
                        sources: p["sources"],
                        facilityNames: p["facilityNames"],
                        facilityLocations: !p["facilityLocations"]
                          ? p["facilityLocations"]
                          : p["facilityLocations"].map((p) => ({
                              city: p["city"],
                              state: p["state"],
                              countryOrRegion: p["countryOrRegion"],
                            })),
                        facilityAreas: !p["facilityAreas"]
                          ? p["facilityAreas"]
                          : p["facilityAreas"].map((p) => ({
                              type: p["type"],
                              geometry: {
                                type: p.geometry["type"],
                                coordinates: p.geometry["coordinates"],
                              },
                              properties: {
                                subType: p.properties["subType"],
                                radius: p.properties["radius"],
                              },
                            })),
                      }),
                    ),
              },
            },
      },
    });
}

export async function _matchTrialsDeserialize(
  result:
    | TrialMatcherCreateJob200Response
    | TrialMatcherCreateJob202Response
    | TrialMatcherCreateJobDefaultResponse
    | TrialMatcherCreateJobLogicalResponse,
): Promise<TrialMatcherResults> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as TrialMatcherCreateJobLogicalResponse;
  if (result?.body?.results === undefined) {
    throw createRestError(
      `Expected a result in the response at position "result.body.results"`,
      result,
    );
  }

  return {
    patients: result.body.results["patients"].map((p) => ({
      id: p["id"],
      inferences: p["inferences"].map((p) => ({
        type: p["type"],
        value: p["value"],
        description: p["description"],
        confidenceScore: p["confidenceScore"],
        evidence: !p["evidence"]
          ? p["evidence"]
          : p["evidence"].map((p) => ({
              eligibilityCriteriaEvidence: p["eligibilityCriteriaEvidence"],
              patientDataEvidence: !p.patientDataEvidence
                ? undefined
                : {
                    id: p.patientDataEvidence?.["id"],
                    text: p.patientDataEvidence?.["text"],
                    offset: p.patientDataEvidence?.["offset"],
                    length: p.patientDataEvidence?.["length"],
                  },
              patientInfoEvidence: !p.patientInfoEvidence
                ? undefined
                : {
                    system: p.patientInfoEvidence?.["system"],
                    code: p.patientInfoEvidence?.["code"],
                    name: p.patientInfoEvidence?.["name"],
                    value: p.patientInfoEvidence?.["value"],
                  },
              importance: p["importance"],
            })),
        id: p["id"],
        source: p["source"],
        metadata: !p.metadata
          ? undefined
          : {
              phases: p.metadata?.["phases"],
              studyType: p.metadata?.["studyType"],
              recruitmentStatus: p.metadata?.["recruitmentStatus"],
              conditions: p.metadata?.["conditions"],
              sponsors: p.metadata?.["sponsors"],
              contacts: !p.metadata?.["contacts"]
                ? p.metadata?.["contacts"]
                : p.metadata?.["contacts"].map((p) => ({
                    name: p["name"],
                    email: p["email"],
                    phone: p["phone"],
                  })),
              facilities: !p.metadata?.["facilities"]
                ? p.metadata?.["facilities"]
                : p.metadata?.["facilities"].map((p) => ({
                    name: p["name"],
                    city: p["city"],
                    state: p["state"],
                    countryOrRegion: p["countryOrRegion"],
                  })),
            },
      })),
      neededClinicalInfo: !p["neededClinicalInfo"]
        ? p["neededClinicalInfo"]
        : p["neededClinicalInfo"].map((p) => ({
            system: p["system"],
            code: p["code"],
            name: p["name"],
            value: p["value"],
            semanticType: p["semanticType"],
            category: p["category"],
          })),
    })),
    modelVersion: result.body.results["modelVersion"],
    knowledgeGraphLastUpdateDate:
      result.body.results["knowledgeGraphLastUpdateDate"] !== undefined
        ? new Date(result.body.results["knowledgeGraphLastUpdateDate"])
        : undefined,
  };
}

/** Creates a Trial Matcher job with the given request body. */
export function matchTrials(
  context: Client,
  body: TrialMatcherData,
  options: MatchTrialsOptions = { requestOptions: {} },
): PollerLike<OperationState<TrialMatcherResults>, TrialMatcherResults> {
  return getLongRunningPoller(context, _matchTrialsDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _matchTrialsSend(context, body, options),
  }) as PollerLike<OperationState<TrialMatcherResults>, TrialMatcherResults>;
}
