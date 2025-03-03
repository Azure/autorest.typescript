import { assert } from "chai";
import { emitClientDefinitionFromTypeSpec, emitParameterFromTypeSpec } from "../util/emitUtil.js";
import { assertEqualContent } from "../util/testUtil.js";

describe("Client definition generation", () => {
  it("should generate method-level parameter for path parameters", async () => {
    const tsp = `
    @route("template/{+param}")
    op template(param: string): void;
        `;
    const parameters = await emitParameterFromTypeSpec(
      tsp
    );
    assert.ok(parameters);
    await assertEqualContent(
      parameters?.content!,
      `
    import type { RequestParameters } from "@azure-rest/core-client";

    /** This is the wrapper object for the parameter \`param\` with allowReserved set to true. */
    export interface TemplateParamPathParam {
      /** A sequence of textual characters. */
      value: string;
      /** Whether to allow reserved characters */
      allowReserved: true;
    }

    export type TemplateParameters = RequestParameters;
      `
    );

    const clientDef = await emitClientDefinitionFromTypeSpec(
      tsp);
    assert.ok(clientDef);
    await assertEqualContent(
      clientDef!.content,
      `
        import type { TemplateParameters, TemplateParamPathParam } from "./parameters.js";
        import type { Template204Response } from "./responses.js";
        import type { Client, StreamableMethod } from "@azure-rest/core-client";

        export interface Template {
            get(options?: TemplateParameters): StreamableMethod<Template204Response>;
        }

        export interface Routes {
            /** Resource for '/template/\\{param\\}' has methods for the following verbs: get */
            (path: "/template/{param}", param: TemplateParamPathParam): Template;
        }

        export type testClient = Client & {
            path: Routes;
        };
    `
    );
  });

  it("should generate method-level parameter for query parameters", async () => {
    const tsp = `
    union RunAdditionalFieldList {
      string,

      /** File search result content. */
      FileSearchContents: "step_details.tool_calls[*].file_search.results[*].content",
    }
    @route("template/query")
    op template(@query("include[]")
    include?: RunAdditionalFieldList[]): void;
        `;
    const parameters = await emitParameterFromTypeSpec(
      tsp
    );
    assert.ok(parameters);
    console.log(parameters?.content);
    await assertEqualContent(
      parameters?.content!,
      `
    import type { RequestParameters } from "@azure-rest/core-client";
    import type { RunAdditionalFieldList } from "./models.js";

    /** This is the wrapper object for the parameter \`include[]\` with explode set to false and style set to form. */
    export interface TemplateIncludeQueryParam {
        /** Value of the parameter */
        value: RunAdditionalFieldList[];
        /** Should we explode the value? */
        explode: false;
        /** Style of the value */
        style: "form";
    }

    export interface TemplateQueryParamProperties {
        "include[]"?: RunAdditionalFieldList[] | TemplateIncludeQueryParam;
    }

    export interface TemplateQueryParam {
        queryParameters?: TemplateQueryParamProperties;
    }
        
    export type TemplateParameters = TemplateQueryParam & RequestParameters;
      `
    );

    const clientDef = await emitClientDefinitionFromTypeSpec(
      tsp);
    assert.ok(clientDef);
    await assertEqualContent(
      clientDef!.content,
      `
        import type { TemplateParameters } from "./parameters.js";
        import type { Template204Response } from "./responses.js";
        import type { Client, StreamableMethod } from "@azure-rest/core-client";

        export interface Template {
            get(options?: TemplateParameters): StreamableMethod<Template204Response>;
        }

        export interface Routes {
            /** Resource for '/template/query' has methods for the following verbs: get */
            (path: "/template/query"): Template;
        }

        export type testClient = Client & {
            path: Routes;
        };
    `
    );
  });
});

