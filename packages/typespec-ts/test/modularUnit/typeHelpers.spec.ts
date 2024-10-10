import { expect } from "chai";
import { Type } from "../../src/modular/modularCodeModel.js";
import { getType, buildType } from "../../src/modular/helpers/typeHelpers.js";

describe("typeHelpers", () => {
  describe("getType", () => {
    describe("integer type", () => {
      it("should handle basic any", () => {
        const type: Type = {
          type: "any"
        };
        const result = getType(type);
        expect(result.name).to.equal("Record<string, any>");
        expect(Boolean(result.nullable)).to.be.false;
      });
      it("should handle basic integer", () => {
        const type: Type = {
          type: "integer"
        };
        const result = getType(type);
        expect(result.name).to.equal("number");
        expect(Boolean(result.nullable)).to.be.false;
      });

      it("should handle nullable integer", () => {
        const type: Type = {
          type: "integer",
          tcgcType: { kind: "nullable" } as any
        };
        const result = getType(type);
        expect(result.name).to.equal("(number | null)");
      });
    });

    describe("byte-array type", () => {
      it("should handle basic byte-array", () => {
        const type: Type = {
          type: "byte-array"
        };
        const result = getType(type);
        expect(result.name).to.equal("Uint8Array");
        expect(Boolean(result.nullable)).to.be.false;
      });
    });

    describe("list type", () => {
      it("should handle basic list", () => {
        const type: Type = {
          type: "list",
          elementType: {
            type: "integer"
          }
        };
        const result = getType(type);
        expect(result.name).to.equal("number[]");
        expect(Boolean(result.nullable)).to.be.false;
      });
    });

    describe("model type", () => {
      it("should handle model with name", () => {
        const type: Type = {
          type: "model",
          name: "SomeModel"
        };
        const result = getType(type);
        expect(result.name).to.equal("SomeModel");
        expect(result.originModule).to.equal("models.js");
        expect(Boolean(result.nullable)).to.be.false;
      });

      describe("anonymous model", () => {
        it("should handle empty anonymous model", () => {
          const type: Type = {
            type: "model",
            name: ""
          };
          const result = getType(type);
          expect(result.name).to.equal("{}");
        });

        it("should handle anonymous model with properties", () => {
          const type: Type = {
            type: "model",
            name: "",

            properties: [
              {
                clientName: `foo/bar`,
                type: {
                  type: "string"
                }
              },
              {
                clientName: "bar",
                type: {
                  type: "integer"
                }
              }
            ] as any
          };
          const result = getType(type);
          expect(result.name).to.equal(`{"foo/bar": string;"bar": number;}`);
        });
      });
    });

    describe("datetime types", () => {
      it("should handle basic datetime", () => {
        const type: Type = {
          type: "datetime"
        };
        const result = getType(type);
        expect(result.name).to.equal("Date");
        expect(Boolean(result.nullable)).to.be.false;
      });

      it("should handle nullable datetime", () => {
        const type: Type = {
          type: "datetime",
          tcgcType: { kind: "nullable" } as any
        };
        const result = getType(type);
        expect(result.name).to.equal("(Date | null)");
      });

      it("should handle string type with default format", () => {
        const type: Type = {
          type: "string"
        };
        const result = getType(type);
        expect(result.name).to.equal("string");
        expect(Boolean(result.nullable)).to.be.false;
      });

      it("should handle duration type with default format", () => {
        const type: Type = {
          type: "duration"
        };
        const result = getType(type);
        expect(result.name).to.equal("string");
        expect(Boolean(result.nullable)).to.be.false;
      });

      it("should handle duration type formatted as seconds", () => {
        const type: Type = {
          type: "duration"
        };
        const result = getType(type, "seconds");
        expect(result.name).to.equal("number");
        expect(Boolean(result.nullable)).to.be.false;
      });

      // Let's consider an edge case where the format doesn't match any predefined formats.
      it("should handle unknown format for string type", () => {
        const type: Type = {
          type: "string"
        };
        const result = getType(type, "unknownFormat");
        expect(result.name).to.equal("string"); // It defaults to string if the format is not recognized.
        expect(Boolean(result.nullable)).to.be.false;
      });
    });

    describe("list within a list type", () => {
      it("should handle a nested list", () => {
        const type: Type = {
          type: "list",

          elementType: {
            type: "list",
            elementType: {
              type: "integer"
            }
          }
        };
        const result = buildType("foo", type);
        expect(result.type).to.equal("number[][]");
      });

      it("should handle a nested list of nullable elements", () => {
        const type: Type = {
          type: "list",

          elementType: {
            type: "list",
            elementType: {
              type: "integer",
              tcgcType: { kind: "nullable" } as any
            }
          }
        };
        const result = buildType("foo", type);
        expect(result.type).to.equal("(number | null)[][]");
      });

      it("should handle a nested list of nullable list of elements", () => {
        const type: Type = {
          type: "list",

          elementType: {
            type: "list",
            tcgcType: { kind: "nullable" } as any,
            elementType: {
              type: "integer"
            }
          }
        };
        const result = buildType("foo", type);
        expect(result.type).to.equal("(number[] | null)[]");
      });

      it("should handle a nested nullable list of nullable list of non-nullable elements", () => {
        const type: Type = {
          type: "list",
          tcgcType: { kind: "nullable" } as any,
          elementType: {
            type: "list",
            tcgcType: { kind: "nullable" } as any,
            elementType: {
              type: "integer"
            }
          }
        };
        const result = buildType("foo", type);
        expect(result.type).to.equal("((number[] | null)[] | null)");
      });

      it("should handle a nullable list of floats", () => {
        const type: Type = {
          type: "list",
          tcgcType: { kind: "nullable" } as any,
          elementType: {
            type: "float"
          }
        };
        const result = buildType("foo", type);
        expect(result.type).to.equal("(number[] | null)");
      });

      it("should handle a nested nullable list of nullable list of nullable elements", () => {
        const type: Type = {
          type: "list",
          tcgcType: { kind: "nullable" } as any,
          elementType: {
            type: "list",
            tcgcType: { kind: "nullable" } as any,
            elementType: {
              type: "integer",
              tcgcType: { kind: "nullable" } as any
            }
          }
        };
        const result = buildType("foo", type);
        expect(result.type).to.equal("(((number | null)[] | null)[] | null)");
      });
    });

    describe("dict with list values type", () => {
      it("should handle dictionary type with list values", () => {
        const type: Type = {
          type: "dict",
          elementType: {
            type: "list",
            elementType: {
              type: "integer"
            }
          }
        };
        const result = buildType("foo", type);
        expect(result.type).to.equal("Record<string, number[]>");
      });

      it("should handle dictionary type with list nullable values", () => {
        const type: Type = {
          type: "dict",
          elementType: {
            type: "list",
            elementType: {
              type: "integer",
              tcgcType: { kind: "nullable" } as any
            }
          }
        };
        const result = buildType("foo", type);
        expect(result.type).to.equal("Record<string, (number | null)[]>");
      });
    });

    describe("list of dictionaries type", () => {
      it("should handle a list of dictionaries", () => {
        const type: Type = {
          type: "list",

          elementType: {
            type: "dict",
            elementType: {
              type: "string"
            }
          }
        };
        const result = getType(type);
        expect(result.name).to.equal("Record<string, string>[]");
      });
    });

    describe("string type", () => {
      it("should handle basic string", () => {
        const type: Type = {
          type: "string"
        };
        const result = getType(type);
        expect(result.name).to.equal("string");
        expect(Boolean(result.nullable)).to.be.false;
      });

      it("should handle nullable string", () => {
        const type: Type = {
          type: "string",
          tcgcType: { kind: "nullable" } as any
        };
        const result = getType(type);
        expect(result.name).to.equal("(string | null)");
      });
    });

    describe("combined type", () => {
      it("should handle combined types", () => {
        const type: Type = {
          type: "combined",
          types: [
            {
              type: "string"
            },
            {
              type: "integer"
            }
          ]
        };
        const result = getType(type);
        expect(result.name).to.equal("(string | number)");
        expect(Boolean(result.nullable)).to.be.false;
      });
    });

    describe("dict type", () => {
      it("should handle dictionary type with integer values", () => {
        const type: Type = {
          type: "dict",
          elementType: {
            type: "integer"
          }
        };
        const result = getType(type);
        expect(result.name).to.equal("Record<string, number>");
      });

      it("should handle dictionary type with string values", () => {
        const type: Type = {
          type: "dict",
          elementType: {
            type: "string"
          }
        };
        const result = getType(type);
        expect(result.name).to.equal("Record<string, string>");
      });
    });

    it("should handle Key type", () => {
      const type: Type = { type: "Key" };
      const result = getType(type);
      expect(result.name).to.equal("KeyCredential");
    });

    it("should handle OAuth2 type", () => {
      const type: Type = { type: "OAuth2" };
      const result = getType(type);
      expect(result.name).to.equal("TokenCredential");
    });

    it("should handle  nullable boolean type", () => {
      const type: Type = {
        type: "boolean",
        tcgcType: { kind: "nullable" } as any
      };
      const result = getType(type);
      expect(result.name).to.equal("(boolean | null)");
    });

    it("should handle constant type", () => {
      const type: Type = {
        type: "constant",
        value: "TEST",
        valueType: { type: "string" }
      };
      const result = getType(type);
      expect(result.name).to.equal('"TEST"');
    });

    it("should handle nullable constant type", () => {
      const type: Type = {
        type: "constant",
        value: "TEST",
        valueType: { type: "string" },
        tcgcType: { kind: "nullable" } as any
      };
      const result = getType(type);
      expect(result.name).to.equal('("TEST" | null)');
    });

    it("should handle constant type", () => {
      const type: Type = {
        type: "constant",
        value: "true",
        valueType: { type: "boolean" }
      };
      const result = getType(type);
      expect(result.name).to.equal("true");
    });

    it("should handle datetime type", () => {
      const type: Type = {
        type: "datetime",
        tcgcType: { kind: "nullable" } as any
      };
      const result = getType(type);
      expect(result.name).to.equal("(Date | null)");
    });

    it("should handle named enum type", () => {
      const type: Type = {
        type: "enum",
        name: "TestEnum",
        valueType: { type: "string" },
        values: [
          { name: "A", value: "A_VAL", description: "Value A" },
          { name: "B", value: "B_VAL", description: "Value B" }
        ]
      };
      const result = getType(type);
      expect(result.name).to.equal("TestEnum");
      expect(result.originModule).to.equal("models.js");
    });

    it("should handle enum member type as string literal", () => {
      const type: Type = {
        type: "constant",
        name: "A_VAL",
        valueType: { type: "string" },
        value: "A_VAL"
      };
      const result = getType(type);
      expect(result.name).to.equal('"A_VAL"');
    });

    it("should handle enum member type as number literal", () => {
      const type: Type = {
        type: "constant",
        name: "1",
        valueType: { type: "integer" },
        value: "1"
      };
      const result = getType(type);
      expect(result.name).to.equal("1");
    });

    it("should handle enum member type as number literal", () => {
      const type: Type = {
        type: "constant",
        name: "true",
        valueType: { type: "boolean" },
        value: "true"
      };
      const result = getType(type);
      expect(result.name).to.equal("true");
    });

    it("should handle float type", () => {
      const type: Type = { type: "float" };
      const result = getType(type);
      expect(result.name).to.equal("number");
    });

    it("should return `any` for unknown types", () => {
      const type: Type = { type: "unknown" as any }; // Forcing an unknown type.
      const result = getType(type);
      expect(result.name).to.equal("any");
    });
  });

  describe("buildType", () => {
    describe("integer type", () => {
      it("should build type for integer", () => {
        const type: Type = {
          type: "integer"
        };
        const result = buildType("SomeClient", type);
        expect(result.type).to.equal("number");
      });

      it("should build type for nullable integer", () => {
        const type: Type = {
          type: "integer",
          tcgcType: { kind: "nullable" } as any
        };
        const result = buildType("SomeClient", type);
        expect(result.type).to.equal("(number | null)");
      });
    });

    describe("byte-array type", () => {
      it("should build type for byte-array", () => {
        const type: Type = {
          type: "byte-array"
        };
        const result = buildType("ClientByteArray", type);
        expect(result.type).to.equal("Uint8Array");
      });

      it("should build type for nullable byte-array", () => {
        const type: Type = {
          type: "byte-array",
          tcgcType: { kind: "nullable" } as any
        };
        const result = buildType("ClientByteArray", type);
        expect(result.type).to.equal("(Uint8Array | null)");
      });
    });

    describe("list type", () => {
      it("should build type for list", () => {
        const type: Type = {
          type: "list",
          elementType: {
            type: "integer"
          }
        };
        const result = buildType("ClientList", type);
        expect(result.type).to.equal("number[]");
      });

      it("should build type for nullable list", () => {
        const type: Type = {
          type: "list",
          elementType: {
            type: "integer"
          },
          tcgcType: { kind: "nullable" } as any
        };
        const result = buildType("ClientList", type);
        expect(result.type).to.equal("(number[] | null)");
      });

      it("should build type for non-nullable list with nullable element", () => {
        const type: Type = {
          type: "list",
          elementType: {
            type: "integer",
            tcgcType: { kind: "nullable" } as any
          }
        };
        const result = buildType("ClientList", type);
        expect(result.type).to.equal("(number | null)[]");
      });

      it("should build type for nullable list and nullable element", () => {
        const type: Type = {
          type: "list",
          elementType: {
            type: "integer",
            tcgcType: { kind: "nullable" } as any
          },
          tcgcType: { kind: "nullable" } as any
        };
        const result = buildType("ClientList", type);
        expect(result.type).to.equal("((number | null)[] | null)");
      });
    });

    describe("model type", () => {
      it("should build type for model with name", () => {
        const type: Type = {
          type: "model",
          name: "SomeModel"
        };
        const result = buildType("ClientModel", type);
        expect(result.type).to.equal("SomeModel");
      });

      it("should build type for nullable model with name", () => {
        const type: Type = {
          type: "model",
          name: "SomeModel",
          tcgcType: { kind: "nullable" } as any
        };
        const result = buildType("ClientModel", type);
        expect(result.type).to.equal("(SomeModel | null)");
      });
    });

    describe("string type", () => {
      it("should build type for string", () => {
        const type: Type = {
          type: "string"
        };
        const result = buildType("ClientString", type);
        expect(result.type).to.equal("string");
      });

      it("should build type for nullable string", () => {
        const type: Type = {
          type: "string",
          tcgcType: { kind: "nullable" } as any
        };
        const result = buildType("ClientString", type);
        expect(result.type).to.equal("(string | null)");
      });
    });

    describe("combined type", () => {
      it("should build type for combined types", () => {
        const type: Type = {
          type: "combined",
          types: [
            {
              type: "string"
            },
            {
              type: "integer"
            }
          ]
        };
        const result = buildType("ClientCombined", type);
        expect(result.name).to.equal("ClientCombined");
        expect(result.type).to.equal("(string | number)");
      });

      it("should build type for list of combined types", () => {
        const type: Type = {
          type: "list",
          elementType: {
            type: "combined",
            types: [
              {
                type: "constant",
                value: `1`,
                valueType: { type: "integer" }
              },
              {
                type: "constant",
                value: `false`,
                valueType: { type: "boolean" }
              },
              {
                type: "constant",
                value: "t",
                valueType: { type: "string" }
              }
            ]
          }
        };
        const result = buildType("ClientCombined", type);
        expect(result.name).to.equal("ClientCombined");
        expect(result.type).to.equal('(1 | false | "t")[]');
      });

      it("should build type for combined types, string literals", () => {
        const type: Type = {
          type: "combined",
          types: [
            {
              type: "constant",
              value: `"str1"`
            },
            {
              type: "constant",
              value: `"str2"`
            }
          ]
        };
        const result = buildType("ClientCombined", type);
        expect(result.name).to.equal("ClientCombined");
        expect(result.type).to.equal(`("str1" | "str2")`);
      });

      it("should build type for combined types, one nullable", () => {
        const type: Type = {
          type: "combined",
          types: [
            {
              type: "string",
              tcgcType: { kind: "nullable" } as any
            },
            {
              type: "integer"
            }
          ]
        };
        const result = buildType("ClientCombined", type);
        expect(result.name).to.equal("ClientCombined");
        expect(result.type).to.equal("((string | null) | number)");
      });

      it("should build type for combined types, both nullable", () => {
        const type: Type = {
          type: "combined",
          types: [
            {
              type: "string",
              tcgcType: { kind: "nullable" } as any
            },
            {
              type: "integer",
              tcgcType: { kind: "nullable" } as any
            }
          ]
        };
        const result = buildType("ClientCombined", type);
        expect(result.name).to.equal("ClientCombined");
        expect(result.type).to.equal("((string | null) | (number | null))");
      });
    });

    describe("dict type", () => {
      it("should build type for dictionary type with integer values", () => {
        const type: Type = {
          type: "dict",
          elementType: {
            type: "integer"
          }
        };
        const result = buildType("ClientDictInt", type);
        expect(result.type).to.equal("Record<string, number>");
      });

      it("should build type for nullable dictionary type", () => {
        const type: Type = {
          type: "dict",
          tcgcType: { kind: "nullable" } as any,
          elementType: {
            type: "integer"
          }
        };
        const result = buildType("ClientDictInt", type);
        expect(result.type).to.equal("(Record<string, number> | null)");
      });

      it("should build type for dictionary type with nullable integer values", () => {
        const type: Type = {
          type: "dict",
          elementType: {
            type: "integer",
            tcgcType: { kind: "nullable" } as any
          }
        };
        const result = buildType("ClientDictInt", type);
        expect(result.type).to.equal("Record<string, (number | null)>");
      });
    });
  });
});
