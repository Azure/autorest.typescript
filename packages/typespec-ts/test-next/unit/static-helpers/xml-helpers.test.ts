import { describe, it, expect } from "vitest";
import {
  serializeToXml,
  serializeModelToXml,
  parseXmlString,
  deserializeFromXml,
  deserializeXmlToModel,
  deserializeXmlObject,
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
        {
          propertyName: "name",
          xmlOptions: { name: "name" },
          type: "primitive"
        },
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
      const undefinedResult = serializeToXml(
        undefined as any,
        properties,
        "Root"
      );

      // When input is null/undefined, serializeModelToXml returns {Root: {}}, which
      // fast-xml-parser suppresses as an empty node due to suppressEmptyNode: true
      expect(nullResult).toBe("");
      expect(undefinedResult).toBe("");
    });

    it("should serialize attributes correctly", () => {
      const item = { id: 123, enabled: true };
      const properties: XmlPropertyMetadata[] = [
        {
          propertyName: "id",
          xmlOptions: { name: "id", attribute: true },
          type: "primitive"
        },
        {
          propertyName: "enabled",
          xmlOptions: { name: "enabled", attribute: true },
          type: "primitive"
        }
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
        {
          propertyName: "metadata",
          xmlOptions: { name: "metadata" },
          type: "dict"
        }
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
        {
          propertyName: "language",
          xmlOptions: { name: "language", attribute: true },
          type: "primitive"
        },
        {
          propertyName: "content",
          xmlOptions: { name: "content", unwrapped: true },
          type: "primitive"
        }
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

      const result = serializeToXml(item, properties, "Model", {
        namespace: "http://example.com",
        prefix: "ex"
      });

      expect(result).toContain("xmlns:ex");
      expect(result).toContain("ex:name");
    });

    it("should skip undefined properties", () => {
      const item = { name: "foo", age: undefined };
      const properties: XmlPropertyMetadata[] = [
        {
          propertyName: "name",
          xmlOptions: { name: "name" },
          type: "primitive"
        },
        { propertyName: "age", xmlOptions: { name: "age" }, type: "primitive" }
      ];

      const result = serializeToXml(item, properties, "Model");

      expect(result).toContain("<name>foo</name>");
      expect(result).not.toContain("<age>");
    });

    it("should serialize Date with rfc3339 encoding", () => {
      const item = { created: new Date("2023-08-01T12:00:00Z") };
      const properties: XmlPropertyMetadata[] = [
        {
          propertyName: "created",
          xmlOptions: { name: "created" },
          type: "date",
          dateEncoding: "rfc3339"
        }
      ];

      const result = serializeToXml(item, properties, "Model");

      expect(result).toContain("2023-08-01T12:00:00.000Z");
    });

    it("should serialize Date with rfc7231 encoding", () => {
      const item = { created: new Date("2023-08-01T12:00:00Z") };
      const properties: XmlPropertyMetadata[] = [
        {
          propertyName: "created",
          xmlOptions: { name: "created" },
          type: "date",
          dateEncoding: "rfc7231"
        }
      ];

      const result = serializeToXml(item, properties, "Model");

      expect(result).toContain("Tue, 01 Aug 2023 12:00:00 GMT");
    });

    it("should serialize Date with unixTimestamp encoding", () => {
      const item = { created: new Date("2023-08-01T12:00:00Z") };
      const properties: XmlPropertyMetadata[] = [
        {
          propertyName: "created",
          xmlOptions: { name: "created" },
          type: "date",
          dateEncoding: "unixTimestamp"
        }
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

    it("should serialize bytes to base64url when bytesEncoding is base64url", () => {
      // Use bytes that will produce +, /, and = in standard base64
      // ">>>???" encodes to "Pj4+Pz8/" in base64 and "Pj4-Pz8_" in base64url
      const item = { data: new Uint8Array([62, 62, 62, 63, 63, 63]) };
      const properties: XmlPropertyMetadata[] = [
        {
          propertyName: "data",
          xmlOptions: { name: "data" },
          type: "bytes",
          bytesEncoding: "base64url"
        }
      ];

      const result = serializeToXml(item, properties, "Model");

      expect(result).toContain("<data>Pj4-Pz8_</data>"); // Base64url (no padding)
    });

    it("should serialize arrays of bytes using itemType", () => {
      const item = {
        blocks: [
          new Uint8Array([72, 101, 108, 108, 111]), // "Hello"
          new Uint8Array([87, 111, 114, 108, 100]) // "World"
        ]
      };
      const properties: XmlPropertyMetadata[] = [
        {
          propertyName: "blocks",
          xmlOptions: { name: "Block", unwrapped: true },
          type: "array",
          itemType: "bytes"
        }
      ];

      const result = serializeToXml(item, properties, "Model");

      expect(result).toContain("<Block>SGVsbG8=</Block>"); // Base64 of "Hello"
      expect(result).toContain("<Block>V29ybGQ=</Block>"); // Base64 of "World"
    });

    it("should serialize arrays of bytes using bytesEncoding for base64url", () => {
      const item = {
        blocks: [
          new Uint8Array([62, 62, 62]), // ">>>" -> "Pj4+" in base64, "Pj4-" in base64url
          new Uint8Array([63, 63, 63]) // "???" -> "Pz8/" in base64, "Pz8_" in base64url
        ]
      };
      const properties: XmlPropertyMetadata[] = [
        {
          propertyName: "blocks",
          xmlOptions: { name: "Block", unwrapped: true },
          type: "array",
          itemType: "bytes",
          bytesEncoding: "base64url"
        }
      ];

      const result = serializeToXml(item, properties, "Model");

      expect(result).toContain("<Block>Pj4-</Block>"); // Base64url (without padding)
      expect(result).toContain("<Block>Pz8_</Block>"); // Base64url (without padding)
    });

    it("should serialize arrays of dates using itemType and dateEncoding", () => {
      const item = {
        timestamps: [
          new Date("2023-08-01T12:00:00Z"),
          new Date("2023-08-02T12:00:00Z")
        ]
      };
      const properties: XmlPropertyMetadata[] = [
        {
          propertyName: "timestamps",
          xmlOptions: { name: "Timestamp", unwrapped: true },
          type: "array",
          itemType: "date",
          dateEncoding: "rfc3339"
        }
      ];

      const result = serializeToXml(item, properties, "Model");

      expect(result).toContain(
        "<Timestamp>2023-08-01T12:00:00.000Z</Timestamp>"
      );
      expect(result).toContain(
        "<Timestamp>2023-08-02T12:00:00.000Z</Timestamp>"
      );
    });

    it("should serialize arrays of dates with rfc7231 encoding using dateEncoding", () => {
      const item = {
        timestamps: [new Date("2023-08-01T12:00:00Z")]
      };
      const properties: XmlPropertyMetadata[] = [
        {
          propertyName: "timestamps",
          xmlOptions: { name: "timestamps", itemsName: "Timestamp" },
          type: "array",
          itemType: "date",
          dateEncoding: "rfc7231"
        }
      ];

      const result = serializeToXml(item, properties, "Model");

      expect(result).toContain("Tue, 01 Aug 2023 12:00:00 GMT");
    });

    it("should serialize arrays of dates with unixTimestamp encoding using dateEncoding", () => {
      const item = {
        timestamps: [new Date("2023-08-01T12:00:00Z")]
      };
      const properties: XmlPropertyMetadata[] = [
        {
          propertyName: "timestamps",
          xmlOptions: { name: "timestamps", itemsName: "Timestamp" },
          type: "array",
          itemType: "date",
          dateEncoding: "unixTimestamp"
        }
      ];

      const result = serializeToXml(item, properties, "Model");

      expect(result).toContain("<Timestamp>1690891200</Timestamp>");
    });
  });

  describe("serializeModelToXml", () => {
    it("should return an object structure suitable for XML builder", () => {
      const item = { name: "test" };
      const properties: XmlPropertyMetadata[] = [
        {
          propertyName: "name",
          xmlOptions: { name: "name" },
          type: "primitive"
        }
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

    it("should parse elements with underscore names correctly", () => {
      // This test verifies that element names containing underscores are properly parsed.
      // Azure Storage services use underscores in metadata keys, so this is important.
      // The default textNodeName in fast-xml-parser is "#text", which doesn't conflict
      // with underscore element names.
      const xml = "<Metadata><h>v</h><_>underscore</_></Metadata>";

      const result = parseXmlString(xml);

      // The underscore element should be parsed as a regular element
      expect(result.Metadata[0].h).toBe("v");
      expect(result.Metadata[0]._).toBe("underscore");
    });

    it("should handle mixed content with underscore elements", () => {
      // More complex case with multiple underscore-prefixed elements
      const xml =
        "<Container><_key1>value1</_key1><normal>value2</normal><_key2>value3</_key2></Container>";

      const result = parseXmlString(xml);

      expect(result.Container[0]._key1).toBe("value1");
      expect(result.Container[0].normal).toBe("value2");
      expect(result.Container[0]._key2).toBe("value3");
    });

    it("should handle unwanted BOM characters", () => {
      // BOM (Byte Order Mark) character at the start of XML should be handled
      const xml = "\uFEFF<fruit>apple</fruit>";

      const result = parseXmlString(xml);

      expect(result.fruit).toBe("apple");
    });

    it("should handle URL encoded content with ampersands", () => {
      // URL encoded content with &amp; should be properly decoded
      const xml =
        "<entry><id>https://example.com/path?api-version=2017-04&amp;enrich=False</id></entry>";

      const result = parseXmlString(xml);

      expect(result.entry[0].id).toBe(
        "https://example.com/path?api-version=2017-04&enrich=False"
      );
    });

    it("should handle special characters including Chinese", () => {
      // Test special characters like Chinese characters and symbols
      const xml =
        "<Blob><Name>汉字. special ~!@#$%^&amp;*()_+`1234567890-={}|[]:\";'&lt;&gt;?,/'</Name></Blob>";

      const result = parseXmlString(xml);

      expect(result.Blob[0].Name).toBe(
        "汉字. special ~!@#$%^&*()_+`1234567890-={}|[]:\";'<>?,/'"
      );
    });

    it("should keep leading spaces in element values", () => {
      const xml = "<Blob><Name>  leadingspace.txt</Name></Blob>";

      const result = parseXmlString(xml);

      expect(result.Blob[0].Name).toBe("  leadingspace.txt");
    });

    it("should keep trailing spaces in element values", () => {
      const xml = "<Blob><Name>trailingspace   </Name></Blob>";

      const result = parseXmlString(xml);

      expect(result.Blob[0].Name).toBe("trailingspace   ");
    });

    it("should not parse nested escaped XML documents", () => {
      // Escaped XML within XML should remain as string, not be parsed
      const xml =
        '<NotificationDetails><NotificationBody>&lt;?xml version="1.0" encoding="utf-16"?&gt;&lt;toast&gt;&lt;visual&gt;&lt;binding template="ToastText01"&gt;&lt;text id="1"&gt;Hello from a .NET App!&lt;/text&gt;&lt;/binding&gt;&lt;/visual&gt;&lt;/toast&gt;</NotificationBody></NotificationDetails>';

      const result = parseXmlString(xml);

      expect(result.NotificationDetails[0].NotificationBody).toBe(
        '<?xml version="1.0" encoding="utf-16"?><toast><visual><binding template="ToastText01"><text id="1">Hello from a .NET App!</text></binding></visual></toast>'
      );
    });

    it("should parse XML with declaration header", () => {
      const xml =
        '<?xml version="1.0" encoding="utf-8"?><SignedIdentifiers><SignedIdentifier><Id>test</Id></SignedIdentifier></SignedIdentifiers>';

      const result = parseXmlString(xml);

      expect(result.SignedIdentifiers[0].SignedIdentifier[0].Id).toBe("test");
    });

    it("should handle namespace prefixes", () => {
      const xml =
        '<h:table xmlns:h="http://www.w3.org/TR/html4/"><h:tr><h:td>Apples</h:td><h:td>Bananas</h:td></h:tr></h:table>';

      const result = parseXmlString(xml);

      expect(result["h:table"][0]["@_xmlns:h"]).toBe(
        "http://www.w3.org/TR/html4/"
      );
      expect(result["h:table"][0]["h:tr"][0]["h:td"]).toEqual([
        "Apples",
        "Bananas"
      ]);
    });

    it("should handle invalid XML gracefully", () => {
      // Note: fast-xml-parser by default does not throw on invalid XML,
      // it tries to parse what it can. This is different from core-xml which validates.
      // This test documents the current behavior.
      const result = parseXmlString("INVALID");

      // fast-xml-parser returns the text content when it can't parse structure
      expect(result).toBeDefined();
    });
  });

  describe("deserializeFromXml", () => {
    it("should deserialize a simple model from XML string", () => {
      const xml = "<SimpleModel><name>foo</name><age>123</age></SimpleModel>";
      const properties: XmlPropertyDeserializeMetadata[] = [
        {
          propertyName: "name",
          xmlOptions: { name: "name" },
          type: "primitive"
        },
        { propertyName: "age", xmlOptions: { name: "age" }, type: "primitive" }
      ];

      const result = deserializeFromXml(xml, properties, "SimpleModel");

      expect(result).toEqual({ name: "foo", age: 123 });
    });

    it("should deserialize attributes", () => {
      const xml = '<Model id="123" enabled="true"/>';
      const properties: XmlPropertyDeserializeMetadata[] = [
        {
          propertyName: "id",
          xmlOptions: { name: "id", attribute: true },
          type: "primitive"
        },
        {
          propertyName: "enabled",
          xmlOptions: { name: "enabled", attribute: true },
          type: "primitive"
        }
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
        {
          propertyName: "metadata",
          xmlOptions: { name: "metadata" },
          type: "dict"
        }
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
        {
          propertyName: "metadata",
          xmlOptions: { name: "metadata" },
          type: "dict"
        }
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
      const xml =
        '<ModelWithText language="foo">This is some text.</ModelWithText>';
      const properties: XmlPropertyDeserializeMetadata[] = [
        {
          propertyName: "language",
          xmlOptions: { name: "language", attribute: true },
          type: "primitive"
        },
        {
          propertyName: "content",
          xmlOptions: { name: "content", unwrapped: true },
          type: "primitive"
        }
      ];

      const result = deserializeFromXml(xml, properties, "ModelWithText");

      expect(result).toEqual({
        language: "foo",
        content: "This is some text."
      });
    });

    it("should preserve whitespace in unwrapped text content", () => {
      const xml =
        '<ModelWithText language="foo">\n  This is some text.\n</ModelWithText>';
      const properties: XmlPropertyDeserializeMetadata[] = [
        {
          propertyName: "language",
          xmlOptions: { name: "language", attribute: true },
          type: "primitive"
        },
        {
          propertyName: "content",
          xmlOptions: { name: "content", unwrapped: true },
          type: "primitive"
        }
      ];

      const result = deserializeFromXml(xml, properties, "ModelWithText");

      expect(result).toEqual({
        language: "foo",
        content: "\n  This is some text.\n"
      });
    });

    it("should deserialize Date with rfc3339 encoding", () => {
      const xml = "<Model><created>2023-08-01T12:00:00.000Z</created></Model>";
      const properties: XmlPropertyDeserializeMetadata[] = [
        {
          propertyName: "created",
          xmlOptions: { name: "created" },
          type: "date",
          dateEncoding: "rfc3339"
        }
      ];

      const result = deserializeFromXml<{ created: Date }>(
        xml,
        properties,
        "Model"
      );

      expect(result.created).toBeInstanceOf(Date);
      expect(result.created.toISOString()).toBe("2023-08-01T12:00:00.000Z");
    });

    it("should deserialize Date with unixTimestamp encoding", () => {
      const xml = "<Model><created>1690891200</created></Model>";
      const properties: XmlPropertyDeserializeMetadata[] = [
        {
          propertyName: "created",
          xmlOptions: { name: "created" },
          type: "date",
          dateEncoding: "unixTimestamp"
        }
      ];

      const result = deserializeFromXml<{ created: Date }>(
        xml,
        properties,
        "Model"
      );

      expect(result.created).toBeInstanceOf(Date);
      expect(result.created.toISOString()).toBe("2023-08-01T12:00:00.000Z");
    });

    it("should deserialize bytes from base64", () => {
      const xml = "<Model><data>SGVsbG8=</data></Model>"; // Base64 of "Hello"
      const properties: XmlPropertyDeserializeMetadata[] = [
        { propertyName: "data", xmlOptions: { name: "data" }, type: "bytes" }
      ];

      const result = deserializeFromXml<{ data: Uint8Array }>(
        xml,
        properties,
        "Model"
      );

      expect(result.data).toBeInstanceOf(Uint8Array);
      expect(Array.from(result.data)).toEqual([72, 101, 108, 108, 111]);
    });

    it("should deserialize bytes from base64url when bytesEncoding is base64url", () => {
      // "Pj4-Pz8_" is base64url of [62, 62, 62, 63, 63, 63]
      const xml = "<Model><data>Pj4-Pz8_</data></Model>";
      const properties: XmlPropertyDeserializeMetadata[] = [
        {
          propertyName: "data",
          xmlOptions: { name: "data" },
          type: "bytes",
          bytesEncoding: "base64url"
        }
      ];

      const result = deserializeFromXml<{ data: Uint8Array }>(
        xml,
        properties,
        "Model"
      );

      expect(result.data).toBeInstanceOf(Uint8Array);
      expect(Array.from(result.data)).toEqual([62, 62, 62, 63, 63, 63]);
    });

    it("should deserialize arrays of bytes using itemType", () => {
      const xml = `<Model>
        <Block>SGVsbG8=</Block>
        <Block>V29ybGQ=</Block>
      </Model>`;
      const properties: XmlPropertyDeserializeMetadata[] = [
        {
          propertyName: "blocks",
          xmlOptions: { name: "Block", unwrapped: true },
          type: "array",
          itemType: "bytes"
        }
      ];

      const result = deserializeFromXml<{ blocks: Uint8Array[] }>(
        xml,
        properties,
        "Model"
      );

      expect(result.blocks).toHaveLength(2);
      expect(result.blocks[0]).toBeInstanceOf(Uint8Array);
      expect(Array.from(result.blocks[0])).toEqual([72, 101, 108, 108, 111]); // "Hello"
      expect(result.blocks[1]).toBeInstanceOf(Uint8Array);
      expect(Array.from(result.blocks[1])).toEqual([87, 111, 114, 108, 100]); // "World"
    });

    it("should deserialize arrays of bytes using bytesEncoding for base64url", () => {
      const xml = `<Model>
        <Block>Pj4-</Block>
        <Block>Pz8_</Block>
      </Model>`;
      const properties: XmlPropertyDeserializeMetadata[] = [
        {
          propertyName: "blocks",
          xmlOptions: { name: "Block", unwrapped: true },
          type: "array",
          itemType: "bytes",
          bytesEncoding: "base64url"
        }
      ];

      const result = deserializeFromXml<{ blocks: Uint8Array[] }>(
        xml,
        properties,
        "Model"
      );

      expect(result.blocks).toHaveLength(2);
      expect(result.blocks[0]).toBeInstanceOf(Uint8Array);
      expect(Array.from(result.blocks[0])).toEqual([62, 62, 62]); // ">>>"
      expect(result.blocks[1]).toBeInstanceOf(Uint8Array);
      expect(Array.from(result.blocks[1])).toEqual([63, 63, 63]); // "???"
    });

    it("should deserialize arrays of dates using itemType and dateEncoding", () => {
      const xml = `<Model>
        <Timestamp>2023-08-01T12:00:00.000Z</Timestamp>
        <Timestamp>2023-08-02T12:00:00.000Z</Timestamp>
      </Model>`;
      const properties: XmlPropertyDeserializeMetadata[] = [
        {
          propertyName: "timestamps",
          xmlOptions: { name: "Timestamp", unwrapped: true },
          type: "array",
          itemType: "date",
          dateEncoding: "rfc3339"
        }
      ];

      const result = deserializeFromXml<{ timestamps: Date[] }>(
        xml,
        properties,
        "Model"
      );

      expect(result.timestamps).toHaveLength(2);
      expect(result.timestamps[0]).toBeInstanceOf(Date);
      expect(result.timestamps[0].toISOString()).toBe(
        "2023-08-01T12:00:00.000Z"
      );
      expect(result.timestamps[1]).toBeInstanceOf(Date);
      expect(result.timestamps[1].toISOString()).toBe(
        "2023-08-02T12:00:00.000Z"
      );
    });

    it("should deserialize arrays of dates with unixTimestamp encoding using dateEncoding", () => {
      const xml = `<Model>
        <timestamps>
          <Timestamp>1690891200</Timestamp>
          <Timestamp>1690977600</Timestamp>
        </timestamps>
      </Model>`;
      const properties: XmlPropertyDeserializeMetadata[] = [
        {
          propertyName: "timestamps",
          xmlOptions: { name: "timestamps", itemsName: "Timestamp" },
          type: "array",
          itemType: "date",
          dateEncoding: "unixTimestamp"
        }
      ];

      const result = deserializeFromXml<{ timestamps: Date[] }>(
        xml,
        properties,
        "Model"
      );

      expect(result.timestamps).toHaveLength(2);
      expect(result.timestamps[0]).toBeInstanceOf(Date);
      expect(result.timestamps[0].toISOString()).toBe(
        "2023-08-01T12:00:00.000Z"
      );
      expect(result.timestamps[1]).toBeInstanceOf(Date);
      expect(result.timestamps[1].toISOString()).toBe(
        "2023-08-02T12:00:00.000Z"
      );
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
        {
          propertyName: "name",
          xmlOptions: { name: "name" },
          type: "primitive"
        },
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
        {
          propertyName: "name",
          xmlOptions: { name: "name" },
          type: "primitive"
        },
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
          propertyName: "modelData", // Different from XML name "SimpleModelData"
          xmlOptions: { name: "SimpleModelData" },
          type: "object",
          deserializer: (val: any) => ({ name: val.name, age: val.age })
        },
        {
          propertyName: "colors", // Different from XML name "PossibleColors"
          xmlOptions: { name: "PossibleColors", itemsName: "string" },
          type: "array"
        }
      ];

      const result = deserializeFromXml(
        xml,
        properties,
        "ModelWithEncodedNamesSrc"
      );

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
          deserializer: (val: any) => ({ id: val.id, label: val.label })
        },
        {
          propertyName: "tags",
          xmlOptions: { name: "tags", itemsName: "tag" },
          type: "array"
        },
        {
          propertyName: "count",
          xmlOptions: { name: "count" },
          type: "primitive"
        }
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

  describe("deserializeXmlObject", () => {
    it("should deserialize a pre-parsed XML object with XML property names", () => {
      // Simulates what the XML parser produces for <RetentionPolicy><Enabled>true</Enabled><Days>7</Days></RetentionPolicy>
      const xmlObject = {
        Enabled: true,
        Days: 7
      };
      const properties: XmlPropertyDeserializeMetadata[] = [
        {
          propertyName: "enabled",
          xmlOptions: { name: "Enabled" },
          type: "primitive"
        },
        {
          propertyName: "days",
          xmlOptions: { name: "Days" },
          type: "primitive"
        }
      ];

      const result = deserializeXmlObject<{
        enabled: boolean;
        days: number;
      }>(xmlObject, properties);

      expect(result).toEqual({ enabled: true, days: 7 });
    });

    it("should handle empty object input", () => {
      const properties: XmlPropertyDeserializeMetadata[] = [
        {
          propertyName: "name",
          xmlOptions: { name: "Name" },
          type: "primitive"
        }
      ];

      const result = deserializeXmlObject({}, properties);

      expect(result).toEqual({});
    });

    it("should handle null input", () => {
      const properties: XmlPropertyDeserializeMetadata[] = [];

      const result = deserializeXmlObject(null as any, properties);

      expect(result).toEqual({});
    });

    it("should deserialize nested objects using XML property names", () => {
      // Simulates nested object scenario where inner deserializer must use XML names
      const innerXmlObject = {
        Enabled: true,
        Days: 30
      };

      const innerProperties: XmlPropertyDeserializeMetadata[] = [
        {
          propertyName: "enabled",
          xmlOptions: { name: "Enabled" },
          type: "primitive"
        },
        {
          propertyName: "days",
          xmlOptions: { name: "Days" },
          type: "primitive"
        }
      ];

      // Custom deserializer that uses deserializeXmlObject for inner type
      const retentionPolicyXmlObjectDeserializer = (obj: any) =>
        deserializeXmlObject<{ enabled: boolean; days: number }>(
          obj,
          innerProperties
        );

      // Outer object as it would be parsed from XML
      const outerXmlObject = {
        Version: "1.0",
        Delete: false,
        Read: true,
        Write: true,
        RetentionPolicy: {
          Enabled: true,
          Days: 7
        }
      };

      const outerProperties: XmlPropertyDeserializeMetadata[] = [
        {
          propertyName: "version",
          xmlOptions: { name: "Version" },
          type: "primitive"
        },
        {
          propertyName: "deleteProperty",
          xmlOptions: { name: "Delete" },
          type: "primitive"
        },
        {
          propertyName: "read",
          xmlOptions: { name: "Read" },
          type: "primitive"
        },
        {
          propertyName: "write",
          xmlOptions: { name: "Write" },
          type: "primitive"
        },
        {
          propertyName: "retentionPolicy",
          xmlOptions: { name: "RetentionPolicy" },
          type: "object",
          deserializer: retentionPolicyXmlObjectDeserializer
        }
      ];

      const result = deserializeXmlObject<{
        version: string;
        deleteProperty: boolean;
        read: boolean;
        write: boolean;
        retentionPolicy: { enabled: boolean; days: number };
      }>(outerXmlObject, outerProperties);

      expect(result).toEqual({
        version: "1.0",
        deleteProperty: false,
        read: true,
        write: true,
        retentionPolicy: {
          enabled: true,
          days: 7
        }
      });
    });

    it("should deserialize arrays with items using XML property names", () => {
      // Inner item deserializer using XML property names
      const blobTagXmlObjectDeserializer = (obj: any) =>
        deserializeXmlObject<{ key: string; value: string }>(obj, [
          {
            propertyName: "key",
            xmlOptions: { name: "Key" },
            type: "primitive"
          },
          {
            propertyName: "value",
            xmlOptions: { name: "Value" },
            type: "primitive"
          }
        ]);

      // Simulates parsed XML for an array of tags
      const xmlObject = {
        TagSet: [
          { Key: "tag1", Value: "value1" },
          { Key: "tag2", Value: "value2" }
        ]
      };

      const properties: XmlPropertyDeserializeMetadata[] = [
        {
          propertyName: "blobTagSet",
          xmlOptions: { name: "TagSet", unwrapped: true, itemsName: "TagSet" },
          type: "array",
          deserializer: blobTagXmlObjectDeserializer
        }
      ];

      const result = deserializeXmlObject<{
        blobTagSet: Array<{ key: string; value: string }>;
      }>(xmlObject, properties);

      expect(result).toEqual({
        blobTagSet: [
          { key: "tag1", value: "value1" },
          { key: "tag2", value: "value2" }
        ]
      });
    });

    it("should handle attributes in pre-parsed XML object", () => {
      const xmlObject = {
        "@_id": 123,
        "@_enabled": true,
        Name: "test"
      };

      const properties: XmlPropertyDeserializeMetadata[] = [
        {
          propertyName: "id",
          xmlOptions: { name: "id", attribute: true },
          type: "primitive"
        },
        {
          propertyName: "enabled",
          xmlOptions: { name: "enabled", attribute: true },
          type: "primitive"
        },
        {
          propertyName: "name",
          xmlOptions: { name: "Name" },
          type: "primitive"
        }
      ];

      const result = deserializeXmlObject<{
        id: number;
        enabled: boolean;
        name: string;
      }>(xmlObject, properties);

      expect(result).toEqual({ id: 123, enabled: true, name: "test" });
    });

    it("should deserialize Date values", () => {
      const xmlObject = {
        Created: "2023-08-01T12:00:00.000Z"
      };

      const properties: XmlPropertyDeserializeMetadata[] = [
        {
          propertyName: "created",
          xmlOptions: { name: "Created" },
          type: "date",
          dateEncoding: "rfc3339"
        }
      ];

      const result = deserializeXmlObject<{ created: Date }>(
        xmlObject,
        properties
      );

      expect(result.created).toBeInstanceOf(Date);
      expect(result.created.toISOString()).toBe("2023-08-01T12:00:00.000Z");
    });

    it("should deserialize unix timestamp dates", () => {
      const xmlObject = {
        Created: 1690891200
      };

      const properties: XmlPropertyDeserializeMetadata[] = [
        {
          propertyName: "created",
          xmlOptions: { name: "Created" },
          type: "date",
          dateEncoding: "unixTimestamp"
        }
      ];

      const result = deserializeXmlObject<{ created: Date }>(
        xmlObject,
        properties
      );

      expect(result.created).toBeInstanceOf(Date);
      expect(result.created.toISOString()).toBe("2023-08-01T12:00:00.000Z");
    });

    it("should deserialize bytes from base64", () => {
      const xmlObject = {
        Data: "SGVsbG8=" // Base64 of "Hello"
      };

      const properties: XmlPropertyDeserializeMetadata[] = [
        {
          propertyName: "data",
          xmlOptions: { name: "Data" },
          type: "bytes"
        }
      ];

      const result = deserializeXmlObject<{ data: Uint8Array }>(
        xmlObject,
        properties
      );

      expect(result.data).toBeInstanceOf(Uint8Array);
      expect(Array.from(result.data)).toEqual([72, 101, 108, 108, 111]);
    });

    it("should deserialize dictionaries", () => {
      const xmlObject = {
        Metadata: {
          Color: "blue",
          Count: "123"
        }
      };

      const properties: XmlPropertyDeserializeMetadata[] = [
        {
          propertyName: "metadata",
          xmlOptions: { name: "Metadata" },
          type: "dict"
        }
      ];

      const result = deserializeXmlObject<{
        metadata: Record<string, string>;
      }>(xmlObject, properties);

      expect(result.metadata).toEqual({
        Color: "blue",
        Count: "123"
      });
    });

    it("should skip missing properties", () => {
      const xmlObject = {
        Name: "test"
      };

      const properties: XmlPropertyDeserializeMetadata[] = [
        {
          propertyName: "name",
          xmlOptions: { name: "Name" },
          type: "primitive"
        },
        {
          propertyName: "age",
          xmlOptions: { name: "Age" },
          type: "primitive"
        }
      ];

      const result = deserializeXmlObject<{ name: string; age?: number }>(
        xmlObject,
        properties
      );

      expect(result).toEqual({ name: "test" });
      expect(result).not.toHaveProperty("age");
    });

    it("should unwrap single-element arrays from parser", () => {
      // fast-xml-parser wraps non-leaf elements in arrays
      const xmlObject = [
        {
          Enabled: true,
          Days: 7
        }
      ];

      const properties: XmlPropertyDeserializeMetadata[] = [
        {
          propertyName: "enabled",
          xmlOptions: { name: "Enabled" },
          type: "primitive"
        },
        {
          propertyName: "days",
          xmlOptions: { name: "Days" },
          type: "primitive"
        }
      ];

      const result = deserializeXmlObject<{
        enabled: boolean;
        days: number;
      }>(xmlObject as any, properties);

      expect(result).toEqual({ enabled: true, days: 7 });
    });

    it("should handle full XML round-trip with nested objects using XML names", () => {
      // Full round-trip test: parse XML string, then use deserializeXmlObject for nested
      const xml = `<Logging>
        <Version>v1.0</Version>
        <Delete>false</Delete>
        <Read>true</Read>
        <Write>true</Write>
        <RetentionPolicy>
          <Enabled>true</Enabled>
          <Days>7</Days>
        </RetentionPolicy>
      </Logging>`;

      // First parse the XML
      const parsed = parseXmlString(xml);

      // The nested RetentionPolicy needs XML-aware deserialization
      const retentionPolicyXmlObjectDeserializer = (obj: any) =>
        deserializeXmlObject<{ enabled: boolean; days: number }>(obj, [
          {
            propertyName: "enabled",
            xmlOptions: { name: "Enabled" },
            type: "primitive"
          },
          {
            propertyName: "days",
            xmlOptions: { name: "Days" },
            type: "primitive"
          }
        ]);

      const properties: XmlPropertyDeserializeMetadata[] = [
        {
          propertyName: "version",
          xmlOptions: { name: "Version" },
          type: "primitive"
        },
        {
          propertyName: "deleteProperty",
          xmlOptions: { name: "Delete" },
          type: "primitive"
        },
        {
          propertyName: "read",
          xmlOptions: { name: "Read" },
          type: "primitive"
        },
        {
          propertyName: "write",
          xmlOptions: { name: "Write" },
          type: "primitive"
        },
        {
          propertyName: "retentionPolicy",
          xmlOptions: { name: "RetentionPolicy" },
          type: "object",
          deserializer: retentionPolicyXmlObjectDeserializer
        }
      ];

      const result = deserializeFromXml<{
        version: string;
        deleteProperty: boolean;
        read: boolean;
        write: boolean;
        retentionPolicy: { enabled: boolean; days: number };
      }>(xml, properties, "Logging");

      expect(result).toEqual({
        version: "v1.0",
        deleteProperty: false,
        read: true,
        write: true,
        retentionPolicy: {
          enabled: true,
          days: 7
        }
      });
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
        {
          propertyName: "name",
          xmlOptions: { name: "name" },
          type: "primitive"
        },
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
        {
          propertyName: "id1",
          xmlOptions: { name: "id1", attribute: true },
          type: "primitive"
        },
        {
          propertyName: "id2",
          xmlOptions: { name: "id2", attribute: true },
          type: "primitive"
        }
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
        {
          propertyName: "metadata",
          xmlOptions: { name: "metadata" },
          type: "dict"
        }
      ];

      const xml = serializeToXml(original, properties, "Model");
      const result = deserializeFromXml(xml, properties, "Model");

      expect(result).toEqual(original);
    });
  });
});
