// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureKeyCredential } from "@azure/core-auth";
import createHealthInsightsClinicalMatchingClient, {
  CreateJobParameters,
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
    credential
  );
  const options: CreateJobParameters = {
    body: {
      patients: [
        {
          id: "{Your id}",
          info: {
            sex: "{Your sex}",
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
              type: "{Your type}",
              clinicalType: "{Your clinicalType}",
              id: "{Your id}",
              language: "{Your language}",
              createdDateTime: new Date(),
              content: {
                sourceType: "{Your sourceType}",
                value: "{Your value}",
              },
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
                acceptedSex: "{Your acceptedSex}",
                acceptedAgeRange: {
                  minimumAge: { unit: "{Your unit}", value: 123 },
                  maximumAge: {} as any /**FIXME */,
                },
              },
              metadata: {
                phases: ["{Your phases}"],
                studyType: "{Your studyType}",
                recruitmentStatus: "{Your recruitmentStatus}",
                conditions: ["{Your conditions}"],
                sponsors: ["{Your sponsors}"],
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
              conditions: ["{Your conditions}"],
              studyTypes: ["{Your studyTypes}"],
              recruitmentStatuses: ["{Your recruitmentStatuses}"],
              sponsors: ["{Your sponsors}"],
              phases: ["{Your phases}"],
              purposes: ["{Your purposes}"],
              ids: ["{Your ids}"],
              sources: ["{Your sources}"],
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
                  type: "{Your type}",
                  geometry: { type: "{Your type}", coordinates: [123] },
                  properties: { subType: "{Your subType}", radius: 123 },
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
  };
  const initialResponse = await client.path("/trialmatcher/jobs").post(options);
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  createJobSample();
}

main().catch(console.error);
