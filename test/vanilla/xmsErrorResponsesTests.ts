// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

import * as assert from "assert";
import { XMSErrorResponseExtensions } from './generated/XMSErrorResponses/xMSErrorResponseExtensions';
import { deserializationPolicy } from 'ms-rest-js';

const testClient = new XMSErrorResponseExtensions({ baseUri: "http://localhost:3000", requestPolicyFactories: [deserializationPolicy()] });

describe("XMS Error Responses", function () {
  it("should handle expectedNoErrors", async function () {
    const response = await testClient.pet.getPetById("tommy");
    assert.equal(response.name, "Tommy Tomson");
    assert.equal(response.aniType, "Dog");
  });

  it.skip("should handle expectedPetSadError", async function () {
    const res = await testClient.pet.doSomething("jump");
  });
});