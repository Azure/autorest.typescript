import { assert } from "chai";
import { ModelFlatteningClient } from "./generated/modelFlattening/src/modelFlatteningClient";
import {
  Resource,
  FlattenedProduct,
  ResourceCollection
} from "./generated/modelFlattening/src/models";

describe("ModelFlatteningClient", () => {
  let client: ModelFlatteningClient;

  beforeEach(() => {
    client = new ModelFlatteningClient();
  });

  it("should get array", async () => {
    const expected: FlattenedProduct[] = [
      {
        id: "1",
        location: "Building 44",
        name: "Resource1",
        pName: "Product1",
        provisioningState: "Succeeded",
        provisioningStateValues: "OK",
        type: "Microsoft.Web/sites",
        tags: {
          tag1: "value1",
          tag2: "value3"
        },
        typePropertiesType: "Flat"
      },
      {
        id: "2",
        location: "Building 44",
        name: "Resource2"
      },
      {
        id: "3",
        name: "Resource3"
      }
    ];
    const result = await client.getArray();
    // When flattened, properties property should not be present
    assert.notProperty(result[0], "properties");
    assert.deepEqual(result, expected);
  });

  it("should put array", async () => {
    const resourceArray: FlattenedProduct[] = [
      {
        id: "1",
        location: "West US",
        tags: {
          tag1: "value1",
          tag2: "value3"
        }
      },
      {
        id: "2",
        location: "Building 44",
        name: "Resource2"
      }
    ];

    const result = await client.putArray({ resourceArray });
    assert.equal(result._response.status, 200);
  });

  it("should get dictionary", async () => {
    const expected: { [propertyName: string]: FlattenedProduct } = {
      Product1: {
        id: "1",
        location: "Building 44",
        pName: "Product1",
        name: "Resource1",
        provisioningState: "Succeeded",
        provisioningStateValues: "OK",
        tags: {
          tag1: "value1",
          tag2: "value3"
        },
        type: "Microsoft.Web/sites",
        typePropertiesType: "Flat"
      },
      Product2: {
        id: "2",
        location: "Building 44",
        name: "Resource2"
      },
      Product3: {
        id: "3",
        name: "Resource3"
      }
    };
    const result = await client.getDictionary();
    assert.deepEqual(result, expected);
  });

  it("should put dictionary", async () => {
    const resourceDictionary: {
      [propertyName: string]: FlattenedProduct;
    } = {
      Resource1: {
        location: "West US",
        tags: { tag1: "value1", tag2: "value3" },
        pName: "Product1",
        typePropertiesType: "Flat"
      },
      Resource2: {
        location: "Building 44",
        pName: "Product2",
        typePropertiesType: "Flat"
      }
    };

    const result = await client.putDictionary({ resourceDictionary });

    assert.equal(result._response.status, 200);
  });

  it("should get complex type", async () => {
    const expected: ResourceCollection = {
      arrayofresources: [
        {
          id: "4",
          location: "Building 44",
          name: "Resource4",
          pName: "Product4",
          provisioningState: "Succeeded",
          provisioningStateValues: "OK",
          tags: {
            tag1: "value1",
            tag2: "value3"
          },
          type: "Microsoft.Web/sites",
          typePropertiesType: "Flat"
        },
        {
          id: "5",
          location: "Building 44",
          name: "Resource5"
        },
        {
          id: "6",
          name: "Resource6"
        }
      ],
      dictionaryofresources: {
        Product1: {
          id: "1",
          location: "Building 44",
          name: "Resource1",
          pName: "Product1",
          provisioningState: "Succeeded",
          provisioningStateValues: "OK",
          tags: {
            tag1: "value1",
            tag2: "value3"
          },
          type: "Microsoft.Web/sites",
          typePropertiesType: "Flat"
        },
        Product2: {
          id: "2",
          location: "Building 44",
          name: "Resource2"
        },
        Product3: {
          id: "3",
          name: "Resource3"
        }
      },
      productresource: {
        id: "7",
        location: "Building 44",
        name: "Resource7"
      }
    };

    const result = await client.getResourceCollection();

    assert.deepEqual(result, expected);
  });

  it("should put a complex type", async () => {
    const resourceComplexObject: ResourceCollection = {
      arrayofresources: [
        {
          location: "West US",
          tags: {
            tag1: "value1",
            tag2: "value3"
          },
          pName: "Product1",
          typePropertiesType: "Flat"
        },
        {
          location: "East US",
          pName: "Product2",
          typePropertiesType: "Flat"
        }
      ],
      dictionaryofresources: {
        Resource1: {
          location: "West US",
          tags: {
            tag1: "value1",
            tag2: "value3"
          },
          pName: "Product1",
          typePropertiesType: "Flat"
        },
        Resource2: {
          location: "Building 44",
          pName: "Product2",
          typePropertiesType: "Flat"
        }
      },
      productresource: {
        location: "India",
        pName: "Azure",
        typePropertiesType: "Flat"
      }
    };

    const result = await client.putResourceCollection({
      resourceComplexObject
    });

    assert.equal(result._response.status, 200);
  });
});
