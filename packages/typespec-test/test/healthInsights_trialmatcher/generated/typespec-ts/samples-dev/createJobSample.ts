// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AzureKeyCredential } from "@azure/core-auth";
import createHealthInsightsClinicalMatchingClient, {
  getLongRunningPoller,
} from "@azure-rest/health-insights-clinicalmatching";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation CreateJob
 *
 * @summary call operation CreateJob
 */
async function createJobSample() {
  const endpoint = "{Your endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createHealthInsightsClinicalMatchingClient(
    endpoint,
    credential,
  );
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
                  conditions: ["notApplicable"],
                  sponsors: ["notApplicable"],
                  contacts: [
                    {
                      name: "{Your name}",
                      email: "{Your email}",
                      phone: "{Your phone}",
                    },
                  ],
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
                conditions: ["notApplicable"],
                studyTypes: ["notApplicable"],
                recruitmentStatuses: ["notApplicable"],
                sponsors: ["notApplicable"],
                phases: ["notApplicable"],
                purposes: ["notApplicable"],
                ids: ["notApplicable"],
                sources: ["notApplicable"],
                facilityNames: ["notApplicable"],
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

async function main() {
  createJobSample();
}

main().catch(console.error);
