import { assert } from "chai";
import { emitResponsesFromCadl } from "../emitUtil.js";
import { assertEqualContent } from "../testUtil.js";

describe("Responses.ts", () => {
  it("should generate property name with custome name", async () => {
    const responses = await emitResponsesFromCadl(`
        @doc("Metadata for long running operation status monitor locations")
        model LongRunningStatusLocation {
            @doc("The location for monitoring the operation state.")
            @header("Operation-Location")
            operationLocation: ResourceLocation<string>;
        }
        op read(): LongRunningStatusLocation;
    `);
    assert.ok(responses);
    assertEqualContent(
      responses!.content,
      `
    import { RawHttpHeaders } from "@azure/core-rest-pipeline";
    import { HttpResponse } from "@azure-rest/core-client";
    
    export interface Read204Headers {
      /** The location for monitoring the operation state. */
      "operation-location": string;
    }
    
    /** Metadata for long running operation status monitor locations */
    export interface Read204Response extends HttpResponse {
      status: "204";
      headers: RawHttpHeaders & Read204Headers;
    }`
    );
  });

  it("should generate property name without custome name", async () => {
    const responses = await emitResponsesFromCadl(`
        @doc("Metadata for long running operation status monitor locations")
        model LongRunningStatusLocation {
            @doc("The location for monitoring the operation state.")
            @header
            operationLocation: ResourceLocation<string>;
        }
        op read(): LongRunningStatusLocation;
    `);
    assert.ok(responses);
    assertEqualContent(
      responses!.content,
      `
    import { RawHttpHeaders } from "@azure/core-rest-pipeline";
    import { HttpResponse } from "@azure-rest/core-client";
    
    export interface Read204Headers {
      /** The location for monitoring the operation state. */
      "operation-location": string;
    }
    
    /** Metadata for long running operation status monitor locations */
    export interface Read204Response extends HttpResponse {
      status: "204";
      headers: RawHttpHeaders & Read204Headers;
    }`
    );
  });
});
