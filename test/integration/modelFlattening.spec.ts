import { assert } from "chai";
import { ModelFlatteningClient } from "./generated/modelFlattening/src";
import {
  FlattenedProduct,
  FlattenParameterGroup,
  ResourceCollection,
  SimpleProduct
} from "./generated/modelFlattening/src/models";
import { responseStatusChecker } from "../utils/responseStatusChecker";

describe("ModelFlatteningClient", () => {
  let client: ModelFlatteningClient;

  beforeEach(() => {
    client = new ModelFlatteningClient({ allowInsecureConnection: true });
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

    await client.putArray({
      ...responseStatusChecker,
      resourceArray
    });
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

    await client.putDictionary({
      ...responseStatusChecker,
      resourceDictionary
    });
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

    await client.putResourceCollection({
      ...responseStatusChecker,
      resourceComplexObject
    });
  });

  it("should put a simple product", async () => {
    const simpleBodyProduct: SimpleProduct = {
      productId: "123",
      description: "product description",
      maxProductDisplayName: "max name",
      odataValue: "http://foo",
      genericValue: "https://generic"
    };
    const expected: SimpleProduct = { ...simpleBodyProduct, capacity: "Large" };
    const result = await client.putSimpleProduct({ simpleBodyProduct });
    assert.deepEqual(result, expected);
  });

  it("should post simple product", async () => {
    const simpleBodyProduct: SimpleProduct = {
      productId: "123",
      description: "product description",
      maxProductDisplayName: "max name",
      capacity: "Large",
      odataValue: "http://foo"
    };
    const result = await client.postFlattenedSimpleProduct("123", {
      description: "product description",
      maxProductDisplayName: "max name",
      odataValue: "http://foo"
    });
    assert.deepEqual(result, simpleBodyProduct);
  });

  it("should put flattened and grouped product", async () => {
    const paramGroup: FlattenParameterGroup = {
      productId: "123",
      description: "product description",
      maxProductDisplayName: "max name",
      odataValue: "http://foo",
      name: "groupproduct"
    };
    const result = await client.putSimpleProductWithGrouping(paramGroup);

    assert.deepEqual(result, {
      capacity: "Large",
      description: "product description",
      maxProductDisplayName: "max name",
      odataValue: "http://foo",
      productId: "123"
    });
  });
});
