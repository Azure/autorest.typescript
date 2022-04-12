// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Recorder } from "@azure-tools/test-recorder";
import * as assert from "assert";
import { createRecorder } from "./utils/recordedClient";
import { Context } from "mocha";

describe("My test", () => {
  let recorder: Recorder;

  beforeEach(async function(this: Context) {
    recorder = await createRecorder(this);
  });

  afterEach(async function() {
    await recorder.stop();
  });

  it("sample test", async function() {
    assert.equal(1, 1);
  });
});
