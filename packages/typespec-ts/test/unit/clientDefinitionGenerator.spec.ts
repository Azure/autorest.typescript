import { assert } from "chai";
import {
  emitClientDefinitionFromTypeSpec,
  emitModelsFromTypeSpec
} from "../util/emitUtil.js";
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
    await assertEqualContent(
      clientDef?.content!,
      `
      import { ReadParameters } from "./parameters.js";
      import { Read200Response } from "./responses.js";
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
    await assertEqualContent(
      clientDef?.content!,
      `
      import { ReadParameters } from "./parameters.js";
      import { Read200Response } from "./responses.js";
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

  describe("union & enum parameter in path", () => {
    it("should import the name of named union", async () => {
      const tsp = `
      union IdParam {
        a: "foo";
        b: "bar";
      }
      @route("/{id}")
      @doc("This is the longer description")
      op read(@path id: IdParam): {};
      `;
      const clientDef = await emitClientDefinitionFromTypeSpec(tsp);
      assert.ok(clientDef);
      await assertEqualContent(
        clientDef?.content!,
        `
        import { ReadParameters } from "./parameters.js";
        import { Read200Response } from "./responses.js";
        import { IdParam } from "./models.js";
        import { Client, StreamableMethod } from "@azure-rest/core-client";
  
        export interface Read {
            /** This is the longer description */
            get(options?: ReadParameters): StreamableMethod<Read200Response>;
        }
  
        export interface Routes {
            /** Resource for '/\\{id\\}' has methods for the following verbs: get */
            (path: "/{id}", id: IdParam): Read;
        }
        
        export type testClient = Client & {
                path: Routes;
        };
      `
      );
      const modelsDef = await emitModelsFromTypeSpec(tsp);
      await assertEqualContent(
        modelsDef.inputModelFile?.content!,
        `
      /** Alias for IdParam */
      export type IdParam = "foo" | "bar";
      `
      );
    });
    it("should generate the anonymous union", async () => {
      const clientDef = await emitClientDefinitionFromTypeSpec(
        `
        @route("/{id}")
        @doc("This is the longer description")
        op read(@path id: "foo" | "bar"): {};
        `
      );
      assert.ok(clientDef);
      await assertEqualContent(
        clientDef?.content!,
        `
        import { ReadParameters } from "./parameters.js";
        import { Read200Response } from "./responses.js";
        import { Client, StreamableMethod } from "@azure-rest/core-client";
  
        export interface Read {
            /** This is the longer description */
            get(options?: ReadParameters): StreamableMethod<Read200Response>;
        }
  
        export interface Routes {
            /** Resource for '/\\{id\\}' has methods for the following verbs: get */
            (path: "/{id}", id: "foo" | "bar"): Read;
        }
        
        export type testClient = Client & {
                path: Routes;
        };
      `
      );
    });

    it("should import the name for enum", async () => {
      const tsp = `
      union EnumParam {
        "foo",
        "bar"
      }
      @route("/{id}")
      @doc("This is the longer description")
      op read(@path id: EnumParam): {};
      `;
      const clientDef = await emitClientDefinitionFromTypeSpec(tsp);
      assert.ok(clientDef);
      await assertEqualContent(
        clientDef?.content!,
        `
        import { ReadParameters } from "./parameters.js";
        import { Read200Response } from "./responses.js";
        import { EnumParam } from "./models.js";
        import { Client, StreamableMethod } from "@azure-rest/core-client";
  
        export interface Read {
            /** This is the longer description */
            get(options?: ReadParameters): StreamableMethod<Read200Response>;
        }
  
        export interface Routes {
            /** Resource for '/\\{id\\}' has methods for the following verbs: get */
            (path: "/{id}", id: EnumParam): Read;
        }
        
        export type testClient = Client & {
                path: Routes;
        };
      `
      );

      const modelsDef = await emitModelsFromTypeSpec(tsp);
      await assertEqualContent(
        modelsDef.inputModelFile?.content!,
        `
      /** Alias for EnumParam */
      export type EnumParam = "foo" | "bar";
      `
      );
    });
  });
});
