// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

import { PetStoreInc } from "./generated/ExtensibleEnum/petStoreInc";
import { DaysOfWeekExtensibleEnum, IntEnum } from "./generated/ExtensibleEnum/models";

import * as assert from "assert";

const testClient = new PetStoreInc();

describe("Extensible enums", function () {
  it("should handle expectedEnum", async function () {
    await testClient.pet.getByPetId("tommy");
  });

  it("should handle unexpectedEnum", async function () {
    await testClient.pet.getByPetId("casper");
  });

  it("should handle allowedValueEnum", async function () {
    await testClient.pet.getByPetId("scooby");
  });

  it("should handle roundTripEnum", async function () {
    const response = await testClient.pet.addPet({
      petParam: {
        name: "Retriever",
        daysOfWeek: "Funday" as DaysOfWeekExtensibleEnum,
        intEnum: "42" as IntEnum
      }
    });

    assert.equal(response.name, "Retriever");
    assert.equal(response.daysOfWeek, "Funday");
    assert.equal(response.intEnum, "42");
  });
});