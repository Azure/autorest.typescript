// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

import { PetStoreInc } from "./generated/ExtensibleEnum/petStoreInc";
import { DaysOfWeekExtensibleEnum, IntEnum } from "./generated/ExtensibleEnum/models";

import * as assert from "assert";

const testClient = new PetStoreInc();

describe("Extensible enums", function () {
  it("should handle expectedEnum", async function () {
    const pet = await testClient.pet.getByPetId("tommy");
    assert.equal(pet.intEnum, IntEnum.One);
    assert.equal(pet.daysOfWeek, DaysOfWeekExtensibleEnum.Monday);
    assert.equal(pet.name, "Tommy Tomson");
  });

  it("should handle unexpectedEnum", async function () {
    const pet = await testClient.pet.getByPetId("casper");
    assert.equal(pet.daysOfWeek, "Weekend");
    assert.equal(pet.intEnum, IntEnum.Two);
    assert.equal(pet.name, "Casper Ghosty");
  });

  it("should handle allowedValueEnum", async function () {
    const pet = await testClient.pet.getByPetId("scooby");
    assert.equal(pet.daysOfWeek, DaysOfWeekExtensibleEnum.Thursday);
    assert.equal(pet.intEnum, "2.1");
    assert.equal(pet.name, "Scooby Scarface");
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