// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureKeyCredential } from "@azure/core-auth";
import createHealthInsightsClinicalMatchingClient, {
  getLongRunningPoller,
} from "@azure-rest/health-insights-clinicalmatching";
import "dotenv/config";

/**
 * This sample demonstrates how to call operation CreateJob
 *
 * @summary call operation CreateJob
 */
async function createJobSample(): Promise<void> {
  const endpointParam = "{Your endpointParam}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createHealthInsightsClinicalMatchingClient(endpointParam, credential);
  const initialResponse = await client
    .path("/trialmatcher/jobs")
    .post({
      body: {
        patients: [
          {
            id: "{Your id}",
            info: {
              sex: "female",
              birthDate: new Date(),
              clinicalInfo: [
                {
                  system: "{Your system}",
                  code: "{Your code}",
                  name: "{Your name}",
                  value: "{Your value}",
                },
              ],
            },
            data: [
              {
                type: "note",
                clinicalType: "consultation",
                id: "{Your id}",
                language: "{Your language}",
                createdDateTime: new Date(),
                content: { sourceType: "inline", value: "{Your value}" },
              },
            ],
          },
        ],
        configuration: {
          verbose: true,
          includeEvidence: true,
          clinicalTrials: {
            customTrials: [
              {
                id: "{Your id}",
                eligibilityCriteriaText: "{Your eligibilityCriteriaText}",
                demographics: {
                  acceptedSex: "all",
                  acceptedAgeRange: {
                    minimumAge: { unit: "years", value: 123 },
                    maximumAge: { unit: "years", value: 123 },
                  },
                },
                metadata: {
                  phases: ["notApplicable"],
                  studyType: "interventional",
                  recruitmentStatus: "unknownStatus",
                  conditions: ["{Your conditions}"],
                  sponsors: ["{Your sponsors}"],
                  contacts: [{ name: "{Your name}", email: "{Your email}", phone: "{Your phone}" }],
                  facilities: [
                    {
                      name: "{Your name}",
                      city: "{Your city}",
                      state: "{Your state}",
                      countryOrRegion: "{Your countryOrRegion}",
                    },
                  ],
                },
              },
            ],
            registryFilters: [
              {
                conditions: ["{Your conditions}"],
                studyTypes: ["interventional"],
                recruitmentStatuses: ["unknownStatus"],
                sponsors: ["{Your sponsors}"],
                phases: ["notApplicable"],
                purposes: ["notApplicable"],
                ids: ["{Your ids}"],
                sources: ["custom"],
                facilityNames: ["{Your facilityNames}"],
                facilityLocations: [
                  {
                    city: "{Your city}",
                    state: "{Your state}",
                    countryOrRegion: "{Your countryOrRegion}",
                  },
                ],
                facilityAreas: [
                  {
                    type: "Feature",
                    geometry: { type: "Point", coordinates: [123] },
                    properties: { subType: "Circle", radius: 123 },
                  },
                ],
              },
            ],
          },
        },
      },
      headers: {
        "Repeatability-Request-ID": "{Your Repeatability-Request-ID}",
        "Repeatability-First-Sent": "{Your Repeatability-First-Sent}",
      },
    });
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main(): Promise<void> {
  await createJobSample();
}

main().catch(console.error);
