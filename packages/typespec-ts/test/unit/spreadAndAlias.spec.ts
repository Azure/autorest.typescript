import { assert } from "chai";
import { emitParameterFromTypeSpec } from "../util/emitUtil.js";
import { assertEqualContent } from "../util/testUtil.js";

describe("Spread(...) and alias", () => {
  describe("Parameter generation", async () => {
    it("should flatten query and body properties with spread top-level model", async () => {
      const parameters = await emitParameterFromTypeSpec(`
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
      await assertEqualContent(
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
      const parameters = await emitParameterFromTypeSpec(`
          model SimpleModel {
            id: string;
            prop: string;
          }
          @post op read(...SimpleModel): void;
          `);
      assert.ok(parameters);
      await assertEqualContent(
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
      const parameters = await emitParameterFromTypeSpec(`
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
      await assertEqualContent(
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

    it("should flatten properties with one property in alias group and without position decorator", async () => {
      const parameters = await emitParameterFromTypeSpec(`
        alias SimpleModel = {
            name: string;
            value?: int32;
        };
        @post op read(...SimpleModel): void;
      `);
      assert.ok(parameters);
      await assertEqualContent(
        parameters?.content!,
        `
              import { RequestParameters } from "@azure-rest/core-client";
      
              export interface ReadBodyParam {
                body?: { name: string; value?: number };
              }  
      
              export type ReadParameters = ReadBodyParam & RequestParameters;
            `
      );
    });

    it("should flatten properties with more than one properties in alias group with no position decorator", async () => {
      const parameters = await emitParameterFromTypeSpec(`
        model User {
          name: string;
        }    
        alias SimpleModel = {
          @query
          @key
          id: string;
          user:User;
        };
        @post op read(...SimpleModel): void;
        `);
      assert.ok(parameters);
      await assertEqualContent(
        parameters?.content!,
        `
                import { RequestParameters } from "@azure-rest/core-client";
                import { User } from "./models";
        
                export interface ReadBodyParam {
                  body?: { user: User };
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

    it("should flatten properties without any spread", async () => {
      const parameters = await emitParameterFromTypeSpec(`
        model User {
          name: string;
        }    
        @post op read(@query
          @key
          id: string;
          user:User;): void;
        `);
      assert.ok(parameters);
      await assertEqualContent(
        parameters?.content!,
        `
                import { RequestParameters } from "@azure-rest/core-client";
                import { User } from "./models";
        
                export interface ReadBodyParam {
                  body?: { user: User };
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
  });
});
