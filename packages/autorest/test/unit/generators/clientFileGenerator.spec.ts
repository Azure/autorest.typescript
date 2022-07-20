import { KnownMediaType } from "@azure-tools/codegen";
import { assert } from "chai";
import { checkForNameCollisions } from "../../../src/generators/clientFileGenerator";
import { PropertyKind } from "../../../src/models/modelDetails";
import { OperationGroupDetails } from "../../../src/models/operationDetails";

describe("clientFileGenerator", () => {
  it("errors out during a name collision", () => {
    const mediaTypes = new Set<KnownMediaType>();
    mediaTypes.add(KnownMediaType.Text);
    mediaTypes.add(KnownMediaType.Json);

    const typeDetails = {
      typeName: "dummy",
      kind: PropertyKind.Primitive,
      usedModels: []
    };

    const lroOptions = { "final-state-via": "dummy" };

    const importedOperations: OperationGroupDetails[] = [
      {
        isTopLevel: false,
        key: "paths",
        name: "Paths",
        operations: [],
        mediaTypes,
        originalKey: "Paths"
      },
      {
        isTopLevel: false,
        key: "samples",
        name: "Samples",
        operations: [],
        mediaTypes,
        originalKey: "Samples"
      }
    ];
    const inlineOperations: OperationGroupDetails[] = [
      {
        isTopLevel: true,
        key: "",
        name: "NameCollisionClient",
        mediaTypes,
        operations: [
          {
            name: "paths",
            fullName: "NameCollisionClient_paths",
            description: "",
            apiVersions: ["v1.0.0.0"],
            parameters: [],
            requests: [],
            responses: [],
            isLro: false,
            lroOptions,
            mediaTypes,
            typeDetails
          },
          {
            name: "samples",
            fullName: "NameCollisionClient_samples",
            description: "",
            apiVersions: ["v1.0.0.0"],
            parameters: [],
            requests: [],
            responses: [],
            isLro: false,
            lroOptions,
            mediaTypes,
            typeDetails
          }
        ],
        originalKey: ""
      }
    ];

    try {
      checkForNameCollisions(importedOperations, inlineOperations);
      assert.fail();
    } catch (ex) {
      assert.deepStrictEqual(
        ex.message,
        `Operation Group(s) 'paths,samples' is/are colliding with client-level operation(s) with the same name.`
      );
    }
  });
});
