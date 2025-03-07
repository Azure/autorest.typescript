import { RoutesClient } from "./generated/routes/src/index.js";
import { assert } from "chai";
describe("Routes Client", () => {
    let client: RoutesClient;

    beforeEach(() => {
        client = new RoutesClient({
            allowInsecureConnection: true,
            endpoint: "http://localhost:3002"
        });
    });

    it("Routes_InInterface", async () => {
        await client.inInterface.fixed();
    });

    it("Routes_fixed", async () => {
        await client.fixed();
    });

    it("Routes_PathParameters_templateOnly", async () => {
        await client.pathParameters.templateOnly("a");
    });

    it("Routes_PathParameters_explicit", async () => {
        await client.pathParameters.explicit("a");
    });
    it("Routes_PathParameters_annotationOnly", async () => {
        await client.pathParameters.annotationOnly("a");
    });
    it("Routes_PathParameters_ReservedExpansion_template", async () => {
        await client.pathParameters.reservedExpansion.template("foo/bar baz");
    });
    it("Routes_PathParameters_ReservedExpansion_template & skipUrlEncoding=true", async () => {
        // Should not encode the path parameter
        await client.pathParameters.reservedExpansion.template("foo/bar baz", {
            requestOptions: {
                skipUrlEncoding: true
            }
        });
    });

    it("Routes_PathParameters_ReservedExpansion_template & skipUrlEncoding=false", async () => {
        try {
            // Should encode the path parameter because skipUrlEncoding is explicitly set to false
            await client.pathParameters.reservedExpansion.template("foo/bar baz", {
                requestOptions: {
                    skipUrlEncoding: false
                }
            });
            assert.fail("Should fail this case if path parameter is not encoded");
        }
        catch (error: any) {
            assert.equal(error.statusCode, 404);
            assert.isTrue(error?.request?.url.includes("/foo%2Fbar%20ba"));
        }
    });
    it("Routes_PathParameters_ReservedExpansion_annotation", async () => {
        await client.pathParameters.reservedExpansion.annotation("foo/bar baz");
    });
    it("Routes_PathParameters_SimpleExpansion_Standard_primitive", async () => {
        await client.pathParameters.simpleExpansion.standard.primitive("a");
    });
    it("Routes_PathParameters_SimpleExpansion_Standard_array", async () => {
        await client.pathParameters.simpleExpansion.standard.array(["a", "b"]);
    });
    it("Routes_PathParameters_SimpleExpansion_Standard_record", async () => {
        await client.pathParameters.simpleExpansion.standard.record({ a: 1, b: 2 });
    });
    it("Routes_PathParameters_PathExpansion_Standard_primitive", async () => {
        await client.pathParameters.pathExpansion.standard.primitive("a");
    });

    it("Routes_PathParameters_PathExpansion_Standard_array", async () => {
        await client.pathParameters.pathExpansion.standard.array(["a", "b"]);
    });

    it("Routes_PathParameters_PathExpansion_Standard_record", async () => {
        await client.pathParameters.pathExpansion.standard.record({ a: 1, b: 2 });
    });
    it("Routes_PathParameters_LabelExpansion_Standard_primitive", async () => {
        await client.pathParameters.labelExpansion.standard.primitive("a");
    });

    it("Routes_PathParameters_LabelExpansion_Standard_array", async () => {
        await client.pathParameters.labelExpansion.standard.array(["a", "b"]);
    });
    it("Routes_PathParameters_LabelExpansion_Standard_record", async () => {
        await client.pathParameters.labelExpansion.standard.record({ a: 1, b: 2 });
    });
    it("Routes_PathParameters_SimpleExpansion_Explode_primitive", async () => {
        await client.pathParameters.simpleExpansion.explode.primitive("a");
    });
    it("Routes_PathParameters_SimpleExpansion_Explode_array", async () => {
        await client.pathParameters.simpleExpansion.explode.array(["a", "b"]);
    });
    it("Routes_PathParameters_SimpleExpansion_Explode_record", async () => {
        await client.pathParameters.simpleExpansion.explode.record({ a: 1, b: 2 });
    });
    it("Routes_PathParameters_PathExpansion_Explode_primitive", async () => {
        await client.pathParameters.pathExpansion.explode.primitive("a");
    });
    it("Routes_PathParameters_PathExpansion_Explode_array", async () => {
        await client.pathParameters.pathExpansion.explode.array(["a", "b"]);
    });
    it("Routes_PathParameters_PathExpansion_Explode_record", async () => {
        await client.pathParameters.pathExpansion.explode.record({ a: 1, b: 2 });
    });
    it("Routes_PathParameters_LabelExpansion_Explode_primitive", async () => {
        await client.pathParameters.labelExpansion.explode.primitive("a");
    });
    it("Routes_PathParameters_LabelExpansion_Explode_array", async () => {
        await client.pathParameters.labelExpansion.explode.array(["a", "b"]);
    });
    it("Routes_PathParameters_LabelExpansion_Explode_record", async () => {
        await client.pathParameters.labelExpansion.explode.record({ a: 1, b: 2 });
    });
    it("Routes_PathParameters_MatrixExpansion_Standard_primitive", async () => {
        await client.pathParameters.matrixExpansion.standard.primitive("a");
    });
    it("Routes_PathParameters_MatrixExpansion_Standard_array", async () => {
        await client.pathParameters.matrixExpansion.standard.array(["a", "b"]);
    });
    it("Routes_PathParameters_MatrixExpansion_Standard_record", async () => {
        await client.pathParameters.matrixExpansion.standard.record({ a: 1, b: 2 });
    });
    it("Routes_PathParameters_MatrixExpansion_Explode_primitive", async () => {
        await client.pathParameters.matrixExpansion.explode.primitive("a");
    });
    it("Routes_PathParameters_MatrixExpansion_Explode_array", async () => {
        await client.pathParameters.matrixExpansion.explode.array(["a", "b"]);
    });
    it("Routes_PathParameters_MatrixExpansion_Explode_record", async () => {
        await client.pathParameters.matrixExpansion.explode.record({ a: 1, b: 2 });
    });

    it("Routes_QueryParameters_templateOnly", async () => {
        await client.queryParameters.templateOnly("a");
    });
    it("Routes_QueryParameters_explicit", async () => {
        await client.queryParameters.explicit("a");
    });
    it("Routes_QueryParameters_annotationOnly", async () => {
        await client.queryParameters.annotationOnly("a");
    });
    it("Routes_QueryParameters_QueryExpansion_Standard_primitive", async () => {
        await client.queryParameters.queryExpansion.standard.primitive("a");
    });
    it("Routes_QueryParameters_QueryExpansion_Standard_array", async () => {
        await client.queryParameters.queryExpansion.standard.array(["a", "b"]);
    });
    it("Routes_QueryParameters_QueryExpansion_Standard_record", async () => {
        await client.queryParameters.queryExpansion.standard.record({ a: 1, b: 2 });
    });
    it("Routes_QueryParameters_QueryExpansion_Explode_primitive", async () => {
        await client.queryParameters.queryExpansion.explode.primitive("a");
    });
    it("Routes_QueryParameters_QueryExpansion_Explode_array", async () => {
        await client.queryParameters.queryExpansion.explode.array(["a", "b"]);
    });
    it("Routes_QueryParameters_QueryExpansion_Explode_record", async () => {
        await client.queryParameters.queryExpansion.explode.record({ a: 1, b: 2 });
    });
    it("Routes_QueryParameters_QueryContinuation_Standard_primitive", async () => {
        await client.queryParameters.queryContinuation.standard.primitive("a");
    });
    it("Routes_QueryParameters_QueryContinuation_Standard_array", async () => {
        await client.queryParameters.queryContinuation.standard.array(["a", "b"]);
    });
    it("Routes_QueryParameters_QueryContinuation_Standard_record", async () => {
        await client.queryParameters.queryContinuation.standard.record({ a: 1, b: 2 });
    });
    it("Routes_QueryParameters_QueryContinuation_Explode_primitive", async () => {
        await client.queryParameters.queryContinuation.explode.primitive("a");
    });
    it("Routes_QueryParameters_QueryContinuation_Explode_array", async () => {
        await client.queryParameters.queryContinuation.explode.array(["a", "b"]);
    });
    it("Routes_QueryParameters_QueryContinuation_Explode_record", async () => {
        await client.queryParameters.queryContinuation.explode.record({ a: 1, b: 2 });
    });
});