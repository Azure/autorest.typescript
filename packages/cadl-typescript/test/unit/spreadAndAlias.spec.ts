import { assert } from "chai";
import { emitParameterFromCadl } from "../emitUtil.js";
import { assertEqualContent } from "../testUtil.js";

describe("Spread(...) and alias", () => {
  describe("Parameter generation", async () => {
    it("should flatten query and body properties with spread top-level model", async () => {
      const parameters = await emitParameterFromCadl(`
          model User {
            name: string;
          }
          model SimpleModel {
            @query
            skip: string;
            @body 
            body:User;
          }
          @post op read(...SimpleModel): void;
          `);
      assert.ok(parameters);
      assertEqualContent(
        parameters?.content!,
        `
            import { RequestParameters } from "@azure-rest/core-client";
            import { User } from "./models";

            export interface ReadBodyParam {
              body: User;
            }

            export interface ReadQueryParamProperties {
              skip: string;
            }
    
            export interface ReadQueryParam {
             queryParameters: ReadQueryParamProperties;
            }  
    
            export type ReadParameters = ReadQueryParam & ReadBodyParam & RequestParameters;
          `
      );
    });

    it("should NOT flatten model properties with no other parts defined and top-level spread", async () => {
      const parameters = await emitParameterFromCadl(`
          model SimpleModel {
            id: string;
            prop: string;
          }
          @post op read(...SimpleModel): void;
          `);
      assert.ok(parameters);
      assertEqualContent(
        parameters?.content!,
        `
            import { RequestParameters } from "@azure-rest/core-client";
            import { SimpleModel } from "./models";
    
            export interface ReadBodyParam {
               body?: SimpleModel;
            }  
    
            export type ReadParameters = ReadBodyParam & RequestParameters;
          `
      );
    });

    it("should flatten query and body properties with alias group properties", async () => {
      const parameters = await emitParameterFromCadl(`
          model User {
            name: string;
          }
          alias SimpleModel = {
            @query
            @key
            id: string;
            @body 
            body:User;
          };
          @post op read(...SimpleModel): void;
          `);
      assert.ok(parameters);
      assertEqualContent(
        parameters?.content!,
        `
            import { RequestParameters } from "@azure-rest/core-client";
            import { User } from "./models";

            export interface ReadBodyParam {
                body: User;
            }

            export interface ReadQueryParamProperties {
               id: string;
            }

            export interface ReadQueryParam {
            queryParameters: ReadQueryParamProperties;
            }  

            export type ReadParameters = ReadQueryParam & ReadBodyParam & RequestParameters;
          `
      );
    });

    // FIXME https://github.com/Azure/autorest.typescript/issues/1701
    it.skip("should flatten properties with one property in alias group and without position decorator", async () => {
      const parameters = await emitParameterFromCadl(`
        alias SimpleModel = {
            body: string;
        };
        @post op read(...SimpleModel): void;
      `);
      assert.ok(parameters);
      assertEqualContent(
        parameters?.content!,
        `
              import { RequestParameters } from "@azure-rest/core-client";
              import { SimpleModel } from "./models";
      
              export interface ReadQueryParam {
                body: Record<string, SimpleModel>;
              }  
      
              export type ReadParameters = ReadQueryParam & RequestParameters;
            `
      );
    });

    // FIXME https://github.com/Azure/autorest.typescript/issues/1701
    it.skip("should flatten properties with more than one properties in alias group with no position decorator", async () => {
      const parameters = await emitParameterFromCadl(`
          alias SimpleModel = {
              id: string;
              body: string;
          };
          @post op read(...SimpleModel): void;
        `);
      assert.ok(parameters);
      assertEqualContent(
        parameters?.content!,
        `
                import { RequestParameters } from "@azure-rest/core-client";
                import { SimpleModel } from "./models";
        
                export interface ReadQueryParam {
                  body: Record<string, SimpleModel>;
                }  
        
                export type ReadParameters = ReadQueryParam & RequestParameters;
              `
      );
    });
  });
});
