import { assert } from "chai";
import { emitClientDefinitionFromTypeSpec } from "../util/emitUtil.js";
import { assertEqualContent } from "../util/testUtil.js";

describe("Client definition generation", () => {
  it("should generate method-level parameter", async () => {
    const clientDef = await emitClientDefinitionFromTypeSpec(
      `
      @route("/{id}")
      @doc("This is the longer description")
      op read(@path id: string): {};
      `
    );
    assert.ok(clientDef);
    assertEqualContent(
      clientDef?.content!,
      `
      import { ReadParameters } from "./parameters";
      import { Read200Response } from "./responses";
      import { Client, StreamableMethod } from "@azure-rest/core-client";

      export interface Read {
          /** This is the longer description */
          get(options?: ReadParameters): StreamableMethod<Read200Response>;
      }

      export interface Routes {
          /** Resource for '/\\{id\\}' has methods for the following verbs: get */
          (path: "/{id}", id: string): Read;
      }
      
      export type testClient = Client & {
              path: Routes;
      };
    `
    );
  });

  it("should normalize method-level parameter", async () => {
    const clientDef = await emitClientDefinitionFromTypeSpec(
      `
      @route("/{TransactionID}")
      @doc("This is the longer description")
      op read(@path TransactionID: string): {};
      `
    );
    assert.ok(clientDef);
    assertEqualContent(
      clientDef?.content!,
      `
      import { ReadParameters } from "./parameters";
      import { Read200Response } from "./responses";
      import { Client, StreamableMethod } from "@azure-rest/core-client";

      export interface Read {
          /** This is the longer description */
          get(options?: ReadParameters): StreamableMethod<Read200Response>;
      }

      export interface Routes {
          /** Resource for '/\\{TransactionID\\}' has methods for the following verbs: get */
          (path: "/{TransactionID}", transactionID: string): Read;
      }
      
      export type testClient = Client & {
              path: Routes;
      };
    `
    );
  });
});
