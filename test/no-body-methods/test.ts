import * as assert from "assert";
import { AutoRestSwaggerBATService } from "./generated/BodyString/autoRestSwaggerBATService";

describe("--generate-body-methods=false", function() {
    it("should perform basic operations", async function() {
        const client = new AutoRestSwaggerBATService();
        const response = await client.enumModel.getNotExpandable();
        const color = response.parsedBody;
        assert(color);
    });
});
