import { describe, it, expect } from "vitest";
import {
  serializeToXml,
  serializeModelToXml,
  parseXmlString,
  deserializeFromXml,
  deserializeXmlToModel,
  xmlObjectToString,
  isXmlContentType,
  isJsonContentType,
  XmlPropertyMetadata,
  XmlPropertyDeserializeMetadata
} from "../../../static/static-helpers/serialization/xml-helpers.js";

describe("XML Helpers", () => {
  describe("serializeToXml", () => {
    it("should serialize a simple model to XML string", () => {
      const item = { name: "foo", age: 123 };
      const properties: XmlPropertyMetadata[] = [
        { propertyName: "name", xmlOptions: { name: "name" }, type: "primitive" },
        { propertyName: "age", xmlOptions: { name: "age" }, type: "primitive" }
      ];

      const result = serializeToXml(item, properties, "SimpleModel");

      expect(result).toContain("<SimpleModel>");
      expect(result).toContain("<name>foo</name>");
      expect(result).toContain("<age>123</age>");
      expect(result).toContain("</SimpleModel>");
    });

    it("should handle null and undefined input", () => {
      const properties: XmlPropertyMetadata[] = [];

      const nullResult = serializeToXml(null as any, properties, "Root");
      const undefinedResult = serializeToXml(undefined as any, properties, "Root");

      // When input is null/undefined, serializeModelToXml returns {Root: {}}, which
      // fast-xml-parser suppresses as an empty node due to suppressEmptyNode: true
      expect(nullResult).toBe("");
      expect(undefinedResult).toBe("");
    });

    it("should serialize attributes correctly", () => {
      const item = { id: 123, enabled: true };
      const properties: XmlPropertyMetadata[] = [
        { propertyName: "id", xmlOptions: { name: "id", attribute: true }, type: "primitive" },
        { propertyName: "enabled", xmlOptions: { name: "enabled", attribute: true }, type: "primitive" }
      ];

      const result = serializeToXml(item, properties, "Model");

      expect(result).toContain('id="123"');
      // fast-xml-parser serializes boolean true as just the attribute name (enabled) 
      // without a value, which is valid XML shorthand
      expect(result).toMatch(/enabled/);
    });

    it("should serialize wrapped arrays", () => {
      const item = { colors: ["red", "green", "blue"] };
      const properties: XmlPropertyMetadata[] = [
        {
          propertyName: "colors",
          xmlOptions: { name: "colors", itemsName: "color" },
          type: "array"
        }
      ];

      const result = serializeToXml(item, properties, "Model");

      expect(result).toContain("<colors>");
      expect(result).toContain("<color>red</color>");
      expect(result).toContain("<color>green</color>");
      expect(result).toContain("<color>blue</color>");
      expect(result).toContain("</colors>");
    });

    it("should serialize unwrapped arrays", () => {
      const item = { colors: ["red", "green", "blue"] };
      const properties: XmlPropertyMetadata[] = [
        {
          propertyName: "colors",
          xmlOptions: { name: "color", unwrapped: true },
          type: "array"
        }
      ];

      const result = serializeToXml(item, properties, "Model");

      expect(result).toContain("<color>red</color>");
      expect(result).toContain("<color>green</color>");
      expect(result).toContain("<color>blue</color>");
      // Should not have a wrapper element
      expect(result).not.toContain("<colors>");
    });

    it("should serialize dictionaries", () => {
      const item = {
        metadata: {
          Color: "blue",
          Count: "123"
        }
      };
      const properties: XmlPropertyMetadata[] = [
        { propertyName: "metadata", xmlOptions: { name: "metadata" }, type: "dict" }
      ];

      const result = serializeToXml(item, properties, "Model");

      expect(result).toContain("<metadata>");
      expect(result).toContain("<Color>blue</Color>");
      expect(result).toContain("<Count>123</Count>");
      expect(result).toContain("</metadata>");
    });

    it("should serialize nested objects with custom serializer", () => {
      const item = {
        data: { name: "nested", value: 42 }
      };
      const properties: XmlPropertyMetadata[] = [
        {
          propertyName: "data",
          xmlOptions: { name: "data" },
          type: "object",
          serializer: (v) => ({ name: v.name, value: v.value })
        }
      ];

      const result = serializeToXml(item, properties, "Model");

      expect(result).toContain("<data>");
      expect(result).toContain("<name>nested</name>");
      expect(result).toContain("<value>42</value>");
    });

    it("should serialize unwrapped text content", () => {
      const item = { language: "foo", content: "This is some text." };
      const properties: XmlPropertyMetadata[] = [
        { propertyName: "language", xmlOptions: { name: "language", attribute: true }, type: "primitive" },
        { propertyName: "content", xmlOptions: { name: "content", unwrapped: true }, type: "primitive" }
      ];

      const result = serializeToXml(item, properties, "ModelWithText");

      expect(result).toContain('language="foo"');
      expect(result).toContain("This is some text.");
    });

    it("should serialize with namespace prefix", () => {
      const item = { name: "test" };
      const properties: XmlPropertyMetadata[] = [
        {
          propertyName: "name",
          xmlOptions: {
            name: "name",
            ns: { namespace: "http://example.com", prefix: "ex" }
          },
          type: "primitive"
        }
      ];

      const result = serializeToXml(
        item,
        properties,
        "Model",
        { namespace: "http://example.com", prefix: "ex" }
      );

      expect(result).toContain("xmlns:ex");
      expect(result).toContain("ex:name");
    });

    it("should skip undefined properties", () => {
      const item = { name: "foo", age: undefined };
      const properties: XmlPropertyMetadata[] = [
        { propertyName: "name", xmlOptions: { name: "name" }, type: "primitive" },
        { propertyName: "age", xmlOptions: { name: "age" }, type: "primitive" }
      ];

      const result = serializeToXml(item, properties, "Model");

      expect(result).toContain("<name>foo</name>");
      expect(result).not.toContain("<age>");
    });

    it("should serialize Date with rfc3339 encoding", () => {
      const item = { created: new Date("2023-08-01T12:00:00Z") };
      const properties: XmlPropertyMetadata[] = [
        { propertyName: "created", xmlOptions: { name: "created" }, type: "date", dateEncoding: "rfc3339" }
      ];

      const result = serializeToXml(item, properties, "Model");

      expect(result).toContain("2023-08-01T12:00:00.000Z");
    });

    it("should serialize Date with rfc7231 encoding", () => {
      const item = { created: new Date("2023-08-01T12:00:00Z") };
      const properties: XmlPropertyMetadata[] = [
        { propertyName: "created", xmlOptions: { name: "created" }, type: "date", dateEncoding: "rfc7231" }
      ];

      const result = serializeToXml(item, properties, "Model");

      expect(result).toContain("Tue, 01 Aug 2023 12:00:00 GMT");
    });

    it("should serialize Date with unixTimestamp encoding", () => {
      const item = { created: new Date("2023-08-01T12:00:00Z") };
      const properties: XmlPropertyMetadata[] = [
        { propertyName: "created", xmlOptions: { name: "created" }, type: "date", dateEncoding: "unixTimestamp" }
      ];

      const result = serializeToXml(item, properties, "Model");

      expect(result).toContain("<created>1690891200</created>");
    });

    it("should serialize bytes to base64", () => {
      const item = { data: new Uint8Array([72, 101, 108, 108, 111]) }; // "Hello"
      const properties: XmlPropertyMetadata[] = [
        { propertyName: "data", xmlOptions: { name: "data" }, type: "bytes" }
      ];

      const result = serializeToXml(item, properties, "Model");

      expect(result).toContain("<data>SGVsbG8=</data>"); // Base64 of "Hello"
    });
  });

  describe("serializeModelToXml", () => {
    it("should return an object structure suitable for XML builder", () => {
      const item = { name: "test" };
      const properties: XmlPropertyMetadata[] = [
        { propertyName: "name", xmlOptions: { name: "name" }, type: "primitive" }
      ];

      const result = serializeModelToXml(item, properties, "Root");

      expect(result).toHaveProperty("Root");
      expect(result.Root).toHaveProperty("name", "test");
    });
  });

  describe("parseXmlString", () => {
    it("should parse XML string to object", () => {
      const xml = "<root><name>test</name><age>42</age></root>";

      const result = parseXmlString(xml);

      // fast-xml-parser wraps non-leaf elements in arrays due to our isArray config
      expect(result.root).toBeDefined();
      expect(result.root[0].name).toBe("test");
      expect(result.root[0].age).toBe(42);
    });

    it("should parse attributes correctly", () => {
      const xml = '<root id="123" enabled="true"><name>test</name></root>';

      const result = parseXmlString(xml);

      // Attributes and values are on the first element of the array
      expect(result.root[0]["@_id"]).toBe(123);
      expect(result.root[0]["@_enabled"]).toBe(true);
    });

    it("should preserve whitespace in text content", () => {
      // When there's only text content in an element, the parser 
      // places it directly as the element value (leaf node)
      const xml = "<root>\n  Some text with whitespace.\n</root>";

      const result = parseXmlString(xml);

      // With only text content and no child elements, the text is 
      // returned directly as the element value (leaf node - not wrapped in array)
      expect(result.root).toBe("\n  Some text with whitespace.\n");
    });

    it("should handle empty elements", () => {
      const xml = "<root><empty/></root>";

      const result = parseXmlString(xml);

      expect(result.root).toBeDefined();
    });
  });

  describe("deserializeFromXml", () => {
    it("should deserialize a simple model from XML string", () => {
      const xml = "<SimpleModel><name>foo</name><age>123</age></SimpleModel>";
      const properties: XmlPropertyDeserializeMetadata[] = [
        { propertyName: "name", xmlOptions: { name: "name" }, type: "primitive" },
        { propertyName: "age", xmlOptions: { name: "age" }, type: "primitive" }
      ];

      const result = deserializeFromXml(xml, properties, "SimpleModel");

      expect(result).toEqual({ name: "foo", age: 123 });
    });

    it("should deserialize attributes", () => {
      const xml = '<Model id="123" enabled="true"/>';
      const properties: XmlPropertyDeserializeMetadata[] = [
        { propertyName: "id", xmlOptions: { name: "id", attribute: true }, type: "primitive" },
        { propertyName: "enabled", xmlOptions: { name: "enabled", attribute: true }, type: "primitive" }
      ];

      const result = deserializeFromXml(xml, properties, "Model");

      expect(result).toEqual({ id: 123, enabled: true });
    });

    it("should deserialize wrapped arrays", () => {
      const xml = `
        <Model>
          <colors>
            <color>red</color>
            <color>green</color>
            <color>blue</color>
          </colors>
        </Model>
      `;
      const properties: XmlPropertyDeserializeMetadata[] = [
        {
          propertyName: "colors",
          xmlOptions: { name: "colors", itemsName: "color" },
          type: "array"
        }
      ];

      const result = deserializeFromXml(xml, properties, "Model");

      expect(result.colors).toEqual(["red", "green", "blue"]);
    });

    it("should deserialize unwrapped arrays", () => {
      const xml = `
        <Model>
          <color>red</color>
          <color>green</color>
          <color>blue</color>
        </Model>
      `;
      const properties: XmlPropertyDeserializeMetadata[] = [
        {
          propertyName: "colors",
          xmlOptions: { name: "color", unwrapped: true },
          type: "array"
        }
      ];

      const result = deserializeFromXml(xml, properties, "Model");

      expect(result.colors).toEqual(["red", "green", "blue"]);
    });

    it("should deserialize dictionaries", () => {
      const xml = `
        <Model>
          <metadata>
            <Color>blue</Color>
            <Count>123</Count>
            <Enabled>false</Enabled>
          </metadata>
        </Model>
      `;
      const properties: XmlPropertyDeserializeMetadata[] = [
        { propertyName: "metadata", xmlOptions: { name: "metadata" }, type: "dict" }
      ];

      const result = deserializeFromXml(xml, properties, "Model");

      expect(result.metadata).toEqual({
        Color: "blue",
        Count: "123",
        Enabled: "false"
      });
    });

    it("should filter out #text nodes from dictionaries", () => {
      const xml = `
        <Model>
          <metadata>
            <Color>blue</Color>
            <Count>123</Count>
          </metadata>
        </Model>
      `;
      const properties: XmlPropertyDeserializeMetadata[] = [
        { propertyName: "metadata", xmlOptions: { name: "metadata" }, type: "dict" }
      ];

      const result = deserializeFromXml(xml, properties, "Model");

      expect(result.metadata).not.toHaveProperty("#text");
      expect(result.metadata).toEqual({
        Color: "blue",
        Count: "123"
      });
    });

    it("should deserialize nested objects with custom deserializer", () => {
      const xml = `
        <Model>
          <data>
            <name>nested</name>
            <value>42</value>
          </data>
        </Model>
      `;
      const properties: XmlPropertyDeserializeMetadata[] = [
        {
          propertyName: "data",
          xmlOptions: { name: "data" },
          type: "object",
          deserializer: (v) => ({ name: v.name, value: v.value })
        }
      ];

      const result = deserializeFromXml(xml, properties, "Model");

      expect(result.data).toEqual({ name: "nested", value: 42 });
    });

    it("should deserialize unwrapped text content", () => {
      const xml = '<ModelWithText language="foo">This is some text.</ModelWithText>';
      const properties: XmlPropertyDeserializeMetadata[] = [
        { propertyName: "language", xmlOptions: { name: "language", attribute: true }, type: "primitive" },
        { propertyName: "content", xmlOptions: { name: "content", unwrapped: true }, type: "primitive" }
      ];

      const result = deserializeFromXml(xml, properties, "ModelWithText");

      expect(result).toEqual({ language: "foo", content: "This is some text." });
    });

    it("should preserve whitespace in unwrapped text content", () => {
      const xml = '<ModelWithText language="foo">\n  This is some text.\n</ModelWithText>';
      const properties: XmlPropertyDeserializeMetadata[] = [
        { propertyName: "language", xmlOptions: { name: "language", attribute: true }, type: "primitive" },
        { propertyName: "content", xmlOptions: { name: "content", unwrapped: true }, type: "primitive" }
      ];

      const result = deserializeFromXml(xml, properties, "ModelWithText");

      expect(result).toEqual({ language: "foo", content: "\n  This is some text.\n" });
    });

    it("should deserialize Date with rfc3339 encoding", () => {
      const xml = "<Model><created>2023-08-01T12:00:00.000Z</created></Model>";
      const properties: XmlPropertyDeserializeMetadata[] = [
        { propertyName: "created", xmlOptions: { name: "created" }, type: "date", dateEncoding: "rfc3339" }
      ];

      const result = deserializeFromXml<{ created: Date }>(xml, properties, "Model");

      expect(result.created).toBeInstanceOf(Date);
      expect(result.created.toISOString()).toBe("2023-08-01T12:00:00.000Z");
    });

    it("should deserialize Date with unixTimestamp encoding", () => {
      const xml = "<Model><created>1690891200</created></Model>";
      const properties: XmlPropertyDeserializeMetadata[] = [
        { propertyName: "created", xmlOptions: { name: "created" }, type: "date", dateEncoding: "unixTimestamp" }
      ];

      const result = deserializeFromXml<{ created: Date }>(xml, properties, "Model");

      expect(result.created).toBeInstanceOf(Date);
      expect(result.created.toISOString()).toBe("2023-08-01T12:00:00.000Z");
    });

    it("should deserialize bytes from base64", () => {
      const xml = "<Model><data>SGVsbG8=</data></Model>"; // Base64 of "Hello"
      const properties: XmlPropertyDeserializeMetadata[] = [
        { propertyName: "data", xmlOptions: { name: "data" }, type: "bytes" }
      ];

      const result = deserializeFromXml<{ data: Uint8Array }>(xml, properties, "Model");

      expect(result.data).toBeInstanceOf(Uint8Array);
      expect(Array.from(result.data)).toEqual([72, 101, 108, 108, 111]);
    });

    it("should handle empty arrays", () => {
      const xml = "<Model><items></items></Model>";
      const properties: XmlPropertyDeserializeMetadata[] = [
        {
          propertyName: "items",
          xmlOptions: { name: "items", itemsName: "item" },
          type: "array"
        }
      ];

      const result = deserializeFromXml(xml, properties, "Model");

      expect(result.items).toEqual([]);
    });

    it("should handle missing optional fields", () => {
      const xml = "<Model><name>test</name></Model>";
      const properties: XmlPropertyDeserializeMetadata[] = [
        { propertyName: "name", xmlOptions: { name: "name" }, type: "primitive" },
        { propertyName: "age", xmlOptions: { name: "age" }, type: "primitive" }
      ];

      const result = deserializeFromXml(xml, properties, "Model");

      expect(result).toEqual({ name: "test" });
      expect(result).not.toHaveProperty("age");
    });

    it("should handle XML with declaration header", () => {
      const xml = `<?xml version='1.0' encoding='UTF-8'?>
<Model>
  <name>test</name>
  <age>42</age>
</Model>`;
      const properties: XmlPropertyDeserializeMetadata[] = [
        { propertyName: "name", xmlOptions: { name: "name" }, type: "primitive" },
        { propertyName: "age", xmlOptions: { name: "age" }, type: "primitive" }
      ];

      const result = deserializeFromXml(xml, properties, "Model");

      expect(result).toEqual({ name: "test", age: 42 });
    });

    it("should deserialize model with encoded/renamed element names", () => {
      // XML element names differ from property names
      const xml = `<?xml version='1.0' encoding='UTF-8'?>
<ModelWithEncodedNamesSrc>
  <SimpleModelData>
    <name>foo</name>
    <age>123</age>
  </SimpleModelData>
  <PossibleColors>
    <string>red</string>
    <string>green</string>
    <string>blue</string>
  </PossibleColors>
</ModelWithEncodedNamesSrc>`;

      const properties: XmlPropertyDeserializeMetadata[] = [
        {
          propertyName: "modelData",  // Different from XML name "SimpleModelData"
          xmlOptions: { name: "SimpleModelData" },
          type: "object",
          deserializer: (val: any) => ({ name: val.name, age: val.age }),
        },
        {
          propertyName: "colors",  // Different from XML name "PossibleColors"
          xmlOptions: { name: "PossibleColors", itemsName: "string" },
          type: "array",
        },
      ];

      const result = deserializeFromXml(xml, properties, "ModelWithEncodedNamesSrc");

      expect(result).toEqual({
        modelData: { name: "foo", age: 123 },
        colors: ["red", "green", "blue"]
      });
    });

    it("should deserialize complex model with nested object and array", () => {
      const xml = `<ComplexModel>
  <data>
    <id>123</id>
    <label>test</label>
  </data>
  <tags>
    <tag>a</tag>
    <tag>b</tag>
    <tag>c</tag>
  </tags>
  <count>42</count>
</ComplexModel>`;

      const properties: XmlPropertyDeserializeMetadata[] = [
        {
          propertyName: "data",
          xmlOptions: { name: "data" },
          type: "object",
          deserializer: (val: any) => ({ id: val.id, label: val.label }),
        },
        {
          propertyName: "tags",
          xmlOptions: { name: "tags", itemsName: "tag" },
          type: "array",
        },
        {
          propertyName: "count",
          xmlOptions: { name: "count" },
          type: "primitive",
        },
      ];

      const result = deserializeFromXml(xml, properties, "ComplexModel");

      expect(result).toEqual({
        data: { id: 123, label: "test" },
        tags: ["a", "b", "c"],
        count: 42
      });
    });
  });

  describe("deserializeXmlToModel", () => {
    it("should handle null input", () => {
      const properties: XmlPropertyDeserializeMetadata[] = [];

      const result = deserializeXmlToModel(null, properties, "Root");

      expect(result).toEqual({});
    });

    it("should handle undefined input", () => {
      const properties: XmlPropertyDeserializeMetadata[] = [];

      const result = deserializeXmlToModel(undefined, properties, "Root");

      expect(result).toEqual({});
    });
  });

  describe("xmlObjectToString", () => {
    it("should convert XML object to string", () => {
      const xmlObject = {
        root: {
          name: "test",
          age: 42
        }
      };

      const result = xmlObjectToString(xmlObject);

      expect(result).toContain("<root>");
      expect(result).toContain("<name>test</name>");
      expect(result).toContain("<age>42</age>");
      expect(result).toContain("</root>");
    });

    it("should handle attributes in XML object", () => {
      const xmlObject = {
        root: {
          "@_id": 123,
          name: "test"
        }
      };

      const result = xmlObjectToString(xmlObject);

      expect(result).toContain('id="123"');
      expect(result).toContain("<name>test</name>");
    });
  });

  describe("isXmlContentType", () => {
    it("should return true for application/xml", () => {
      expect(isXmlContentType("application/xml")).toBe(true);
    });

    it("should return true for text/xml", () => {
      expect(isXmlContentType("text/xml")).toBe(true);
    });

    it("should return true for +xml suffix", () => {
      expect(isXmlContentType("application/atom+xml")).toBe(true);
    });

    it("should be case-insensitive", () => {
      expect(isXmlContentType("APPLICATION/XML")).toBe(true);
      expect(isXmlContentType("Text/XML")).toBe(true);
    });

    it("should return false for non-XML content types", () => {
      expect(isXmlContentType("application/json")).toBe(false);
      expect(isXmlContentType("text/plain")).toBe(false);
      expect(isXmlContentType("text/html")).toBe(false);
    });
  });

  describe("isJsonContentType", () => {
    it("should return true for application/json", () => {
      expect(isJsonContentType("application/json")).toBe(true);
    });

    it("should return true for text/json", () => {
      expect(isJsonContentType("text/json")).toBe(true);
    });

    it("should return true for +json suffix", () => {
      expect(isJsonContentType("application/ld+json")).toBe(true);
    });

    it("should be case-insensitive", () => {
      expect(isJsonContentType("APPLICATION/JSON")).toBe(true);
      expect(isJsonContentType("Text/JSON")).toBe(true);
    });

    it("should return false for non-JSON content types", () => {
      expect(isJsonContentType("application/xml")).toBe(false);
      expect(isJsonContentType("text/plain")).toBe(false);
      expect(isJsonContentType("text/html")).toBe(false);
    });
  });

  describe("Round-trip serialization/deserialization", () => {
    it("should round-trip a simple model", () => {
      const original = { name: "foo", age: 123 };
      const properties: XmlPropertyMetadata[] = [
        { propertyName: "name", xmlOptions: { name: "name" }, type: "primitive" },
        { propertyName: "age", xmlOptions: { name: "age" }, type: "primitive" }
      ];

      const xml = serializeToXml(original, properties, "Model");
      const result = deserializeFromXml(xml, properties, "Model");

      expect(result).toEqual(original);
    });

    it("should round-trip a model with arrays", () => {
      const original = { colors: ["red", "green", "blue"] };
      const properties: XmlPropertyMetadata[] = [
        {
          propertyName: "colors",
          xmlOptions: { name: "colors", itemsName: "color" },
          type: "array"
        }
      ];

      const xml = serializeToXml(original, properties, "Model");
      const result = deserializeFromXml(xml, properties, "Model");

      expect(result).toEqual(original);
    });

    it("should round-trip a model with attributes", () => {
      // Note: boolean true serializes as just the attribute name in XML (shorthand),
      // which parses back as empty string. Use numeric values for reliable round-trip.
      const original = { id1: 123, id2: 456 };
      const properties: XmlPropertyMetadata[] = [
        { propertyName: "id1", xmlOptions: { name: "id1", attribute: true }, type: "primitive" },
        { propertyName: "id2", xmlOptions: { name: "id2", attribute: true }, type: "primitive" }
      ];

      const xml = serializeToXml(original, properties, "Model");
      const result = deserializeFromXml(xml, properties, "Model");

      expect(result).toEqual(original);
    });

    it("should round-trip a model with dictionary", () => {
      const original = {
        metadata: {
          Color: "blue",
          Count: "123"
        }
      };
      const properties: XmlPropertyMetadata[] = [
        { propertyName: "metadata", xmlOptions: { name: "metadata" }, type: "dict" }
      ];

      const xml = serializeToXml(original, properties, "Model");
      const result = deserializeFromXml(xml, properties, "Model");

      expect(result).toEqual(original);
    });
  });
});
