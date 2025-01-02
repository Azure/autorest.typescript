import { assert } from "chai";
import { emitClientDefinitionFromTypeSpec, emitParameterFromTypeSpec } from "../util/emitUtil.js";
import { assertEqualContent } from "../util/testUtil.js";

describe("Client definition generation", () => {
  it("should generate wrapper object for path allowReserved parameter", async () => {
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
    import { RequestParameters } from "@azure-rest/core-client";

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
        import { TemplateParameters, TemplateParamPathParam } from "./parameters.js";
        import { Template204Response } from "./responses.js";
        import { Client, StreamableMethod } from "@azure-rest/core-client";

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

  it("should generate wrapper object for query parameter", async () => {
    const tsp = `
    @route("template")
    op template(@query("include[]") include?: string[]): void;
        `;
    const parameters = await emitParameterFromTypeSpec(
      tsp
    );
    assert.ok(parameters);
    console.log(parameters?.content!);
    await assertEqualContent(
      parameters?.content!,
      `
    import { RequestParameters } from "@azure-rest/core-client";

    /** This is the wrapper object for the parameter \`include[]\` with explode set to false and style set to form. */        
    export interface TemplateIncludeQueryParam {
        /** Value of the parameter */
        value: string[];
        /** Should we explode the value? */
        explode: false;
        /** Style of the value */
        style: "form";
    }

    export interface TemplateQueryParamProperties {
        "include[]"?: string[] | TemplateIncludeQueryParam;
    }

    export interface TemplateQueryParam {
        queryParameters?: TemplateQueryParamProperties;
    }

    export type TemplateParameters = TemplateQueryParam & RequestParameters;
      `
    );
  });
});