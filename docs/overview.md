# Table of Contents

1.  [Autorest.Typescript](# Autorest.Typescript)
    1.  [Overview](# Overview)
        1.  [What is Autorest (core)](#org89a3066)
        2.  [What is Autorest.Typescript](#org9b5d6b1)
        3.  [Why writing a new version of Autorest](#org47f1d3e)
    2.  [High level design](#orga880ede)
        1.  [Code generation flow](#orgcfafb9a)
    3.  [Detailed description](#org2b92ed7)
        1.  [Entry Points](#org6fa7dee)
        2.  [Basic Generators](#orgec24606)
        3.  [Operations](#orgd9f217c)
        4.  [Operation Specs](#orgff54626)
        5.  [Parameters](#org22bdc54)
        6.  [Mappers](#org5efb54d)
        7.  [Models](#orge55796f)

# Autorest.Typescript

## Overview

<a id="org89a3066"></a>

### What is Autorest (core)

- Autorest is an OpenAPI (Swagger) specification code generator.
- The new version of autorest (v3) supports [OpenApi v3](https://github.com/OAI/OpenAPI-Specification)
- Autorest v3 uses[ @azure/modelerfour](https://github.com/Azure/autorest.modelerfour) to parse the OpenAPI (Swagger) document and generates a language agnostic code model
- Autorest supports plugins, these plugins are responsible for Language specific code generation
- Autorest communicates with the plugins through stdin/stdout using JsonRPC
- Autorest core is written in Typescript, however the plugins can be written in any language

<a id="org9b5d6b1"></a>

### What is Autorest.Typescript

- Autorest.Typescript is a plugin for Autorest (core) which takes the code model generated buy Autorest (core) and generates a Typescript SDK
- Autorest.Typescript is written in Typescript (of course)

<a id="org47f1d3e"></a>

### Why writing a new version of Autorest

- The main reason is that, to support OpenAPI v4, changes in the previous version would be substantial requiring big architecture changes, so a re-write was a more attractive investment

<a id="orga880ede"></a>

## High level design

<a id="orgcfafb9a"></a>

### Code generation flow

1.  Transforms

    - Once the code model is handed off to Autorest.Typescript, we need to add some language specific metadata in order to generate the Typescript Library
    - We have a layer called Transforms \`src/transforms\` which take each part of the code model and applies transform to get a code model with richer information
    - Most of the logic should live in this layer, and the code model passed to generators should be ready to easily output as Typescript

2.  GENERATORS

    - Once the transforms finished generating the enhanced code model, it is handed off to the Generators layer
    - Our each generator is responsible of generating one part of the SDK, so far this is the structure of the generated SDK
      src/
      models/
      index.ts
      mappers.ts
      parameters.ts
      operations/
      index.ts
      <OperationName1>.ts
      &#x2026;
      <OperationNameN>.ts
      <Name>Client.ts
      <Nane>ClientContext.ts
      - We use [ts-morph](https://github.com/dsherret/ts-morph) library to generate typescript

<a id="org2b92ed7"></a>

## Detailed description

Project structure

- src/
  - generators/
  - models/
  - transforms/
  - utils/
  - main.ts
  - typescriptGenerator.ts
- test/
  - integration/
  - unit/
  - utils

<a id="org6fa7dee"></a>

### Entry Points

1.  main.ts & typescriptGenerator.ts

    - These are the main entry points, main.ts makes the plugin available to Autorest (core) and calls typescriptGenerator which is the integration point of Transforms and Generators

<a id="orgec24606"></a>

### Basic Generators

1.  static/

    - Contains generators for static files such as
      - licenseFile
      - package.json
      - README
      - rollup
      - tsconfig

2.  clientContextFileGenerator.ts

    - This generator is responsible for generating the clientContext file for a library
    - In the generated class all the Client level parameters are set as properties on this class
      - The generated class extends coreHttp.Service client

3.  clientFileGenerator.cs

    - This generator is responsible for generating the ClientClass file for a library
    - The generated class is the main entry point of the library, whcih is instantiated by consumers to access the operations
    - The generated class extends the generated ClientContext class
    - The generated class has each operation group as property, form which consumers can access each operation

      - There are also operations that don't belong to any operation group and belong to the clientFileGenerator
```ts
      const client = new ServiceNameClient();

      // Calling an operation which is part of an operation group. Where paths is the operation group
      // and getAll is the operation
      const paths = await client.paths.getAll();

      // Calling a client operation
      const paths = await client.getConfig();
```

<a id="orgd9f217c"></a>

### Operations

1.  Operation Transform

    - During the transform, each operationGroup from the CodeModel is processed to extract information about the Operations
    - Each operation is given a name in the following format

    > <OperationGroup><OperationName>

    - Each operation may contain Request and Responses definitions, these are transformed
    - An Operation model is returned from the transform which includes data for the Generation
    - Here we track if an operation is "TopLevel", which means that, it should be included in as part of the client instead of on its own operation group
    - Once this transform is complete, the generator layer will now have the information required to:
      - Add any operations to the Client
      - Generate a file for each operation group under src/operations
      - Generate each operation

2.  Operation Generator

    - During generation, a file for each operation group will be created and each of the operations will be generated inside its corresponding file
    - The generator will determine which parameters need to be added to the operation signature
      - All required parameters are added to the signature
      - Any optional parameters are grouped in the options Parameter, which is optional
    - All the generated operations are asynchronous
    - Paging is work in progress, generating Pageable operations will follow a different path
    - The generated operations will call coreHttp.ServiceClient's sendOperationRequest, providing it with the parameters and an OperationSpec (see Operation Specs section)
    - In general a generated operation looks like this:

    ```typescript
    /**
     * Class representing a Basic.
     */
    export class Basic {
      private readonly client: BodyComplexClient;

      /**
       * Initialize a new instance of the class Basic class.
       * @param client Reference to the service client
       */
      constructor(client: BodyComplexClient) {
        this.client = client;
      }

      /**
       * Get complex type {id: 2, name: 'abc', color: 'YELLOW'}
       * @param name name of the valid item.
       * @param options The options parameters.
       */
      getValid(
        name: string,
        options?: coreHttp.BasicGetValidOptions
      ): Promise<Models.BasicGetValidResponse> {
        return this.client.sendOperationRequest(
          { name, options },
          getValidOperationSpec
        ) as Promise<Models.BasicGetValidResponse>;
      }
    }
    ```

<a id="orgff54626"></a>

### Operation Specs

-   The operation spec is an specification provided to coreHttp.ServiceClient.sendOperationRequest, which is used to be able to craft and send the request to the service.
-   The Operation Spec contains information about:
    -   Which HttpMethod should be used
    -   The Path to be called
    -   Mappers to serialize the responses
    -   Where each parameter should be put into, for example QueryParameters, PathParameters, etc.
    -   How does the requestBody should be

1.  Operation Spec Transforms

    -   These transforms, located in the same file as operationTransforms, take as input the Operation object generated by the Operation Transform and generates the OperationSpec based on the Operation
    -   The operation spec can reference Mappers and Parameters located in other generated files, or define the mappers inline. We try to reference as much as possible and only inline primitive mappers such as string

2.  Operation Spec Generator

    -   We generate the operationSpecs in the same file as the operations, we may consider moving them to their own file in the future to help reducing verbosity
    -   Generating these is a simple process, the only interesting thing done is figuring out if a mapper should be inline or referenced.
    -   A generated Operation Spec would look like this
   ```typescript
        const putValidOperationSpec: coreHttp.OperationSpec = {
          path: "/complex/basic/valid",
          httpMethod: "PUT",
          responses: {
            200: {},
            default: {
              bodyMapper: Mappers.ErrorModel
            }
          },
          requestBody: Parameters.complexBody,
          queryParameters: [Parameters.apiVersion],
          urlParameters: [Parameters.$host],
          serializer
        };
````

<a id="org22bdc54"></a>

### Parameters

1.  Parameters Transforms

    - During the Parameters Transform, we need to extract all the parameters from the CodeModel. We do this by looping though each operation to find out which parameters we need to generate.
    - The same parameter may be used by one or more operations, so we need to be able to identify where each parameter is used to be able to reuse them.
    - Parameter transform happens as follows
      1 Create a collection of parameter to track which parameter we have already seen
      1.  Extract all the parameters from each operation
      2.  For each operation's parameter:
          1.  If we have not seen the parameter before:
              1.  Create a new ParameterDetails object that contains all the data necessary for generating the parameter and referencing it
              2.  ParameterDetails has a property named "operationsIn" which is a collection of the names of the operations that receive this parameter
          2.  If we have seen the parameter before, that means that we already processed it, we just need to track the current operation as a consumer of it
              1.  Make sure that the parameter that we saw before is actually the same parameter. There are cases when the parameter has the same name but is of a different type
                  1.  If the we find out that the parameter is different but with the same name, in the generated code, we'll reference this with a numerical suffix i.e param, param1, param2
                  2.  If they are not different we just need to update the existing parameter's OperationsIn list with the name of the current operation
      3.  Here we also inject Synthetic parameters, these are parameters that are not defined in the CodeModel or Swagger but we use as part of our implementation. For example, the credentials parameter is injected as a synthetic parameter, we also inject endpoint as a client level synthetic parameter
      4.  Return a collection with all the parameters

2.  Parameters Generator

    - We generate a constant for each parameter of type coreHttp.Operation<Query | Url | "">Parameter. These contain metadata for coreHttp to handle them correctly during serialization
    - Parts of the parameter definition:

      - **parameterPath:** This is used to define where to find the parameter. It can be represented as a String or as an array of strings
        - For required parameters we just need to represent it as a string with the name of the parameter
        - For optional parameters we need to provide an array with the options object that wraps the parameter for example "["options", "parameterName"]"
      - **mapper:** This is used to provide information about the shape of the parameter to use during serialization. We can inline the parameter or use a reference to another generated mapper
      - **skipEncoding:** This is used to tell coreHttp not to encode the parameters, used in some URL parameters

    - Sample generated parameters

```typescript
export const apiVersion: coreHttp.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2016-02-29",
    serializedName: "api-version",
    isConstant: true,
    type: {
      name: "String"
    }
  }
};

export const complexBody: coreHttp.OperationParameter = {
  parameterPath: "complexBody",
  mapper: Mappers.Basic
};
```

<a id="org5efb54d"></a>

### Mappers

- Mappers are definitions of the Data models used in the library, these data models are part of the Operation or Client definitions in the responses or parameters
- These mapper definitions are used by coreHttp during serialization to serialize the data that comes in the wire to the data structures defined in our SDK
- A mapper contains 2 main properties
  - **serializedName:** is the name that comes and goes over the wire
  - **type:** metadata about how to handle serialization and deserialization. An object type will contain modelProperties which is an object with all the properties that the object contains
- Mapper generation starts in the transform layer in mapperTransforms.ts which does the following
  1.  From the CodeModel (Autorest Core output), extracts the Headers and Object definitions
  2.  Determines if Xml metadata needs to be included based on the operations mediaType
  3.  Passes the Object and Headers through a transform pipeline,
      1.  Each step of the pipeline checks if it know how to handle de object
      2.  If the step can handle the Object, the in generates a mapper and returns it
          1.  An object is only processed by a single step, the following steps will skip
      3.  If the current step doesn't know how to process the Object, the it just hands it off to the next step (transform)
  4.  Once all the Object have been transformed, this transform returns a collection of Mappers to be generated by the Generator
- **Mapper Generator:** Simply takes the Mappers transformed in the transforms layer and generates code for them
  - Some of the interesting the mapper generator does are:
    - Generates a mapping to help serializing Polymorphic Objects which is used by @azure/core-http for serializing polymorphic objects. This is a mapping tells core-http which mapper to use, given a discriminator value.
    - If a Object's mapper has a parent, the generator will generate the mapper in a way that the parent's properties are spread, and then add all the properties form the object

```typescript
    const mapper = {
       serializedName: "child"
       modelProperties: {
          ...Mappers.Parent,
          color: {
            type: {
              name: "String"
            },
            serializedName: "color"
          }
       }
    }
```

<a id="orge55796f"></a>

### Models

- We use models to provide type information in the generated SDK. Contrary to Mappers, Parameters and OperationSpecs, these models are not used for serialization

1.  Model Transforms

    1.  Object Transforms

        - Currently we extract models from 2 parts of the CodeModel (1) Object Schemas (2) Headers which are converted as Objects
        - Returns a collection of ObjectDetails that contain information for generating the interfaces

    2.  Choice Transforms

        - This is responsible for transforming Enums

2.  Model Generation

    1.  Union Types

        - This part of the generator is responsible for generating Union types, these are the Types that can have different shapes. This is used for polymorphic objects. An union type will contain the parent plus all its children
        - An example of a multi level hierarchy
```ts 
export type FishUnion = Fish | SalmonUnion | SharkUnion;
export type SalmonUnion = Salmon | SmartSalmon;
export type SharkUnion = Shark | Sawshark | Goblinshark | Cookiecuttershark;
```

    2.  Objects

        -   These are the definition of all the objects found in Operations as Responses. There are 2 ways we represent this

            1.  When an Object has a parent, we create an intersection type of the parent plus the current Object's properties.
            2.  Otherwise we just create any interface with the object itself


```typescript
export interface Fish {
  /**
   * Polymorphic discriminator, which specifies the different types this object can be
   */
  fishtype:
    | "salmon"
    | "smart_salmon"
    | "shark"
    | "sawshark"
    | "goblin"
    | "cookiecuttershark";
  species?: string;
  length: number;
  siblings?: FishUnion[];
}

export type Salmon = Fish & {
  location?: string;
  iswild?: boolean;
};

export type SmartSalmon = Salmon & {
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  collegeDegree?: string;
};

export type Shark = Fish & {
  age?: number;
  birthday: Date;
};

export type Sawshark = Shark & {
  picture?: Uint8Array;
};

export type Goblinshark = Shark & {
  jawsize?: number;
  /**
   * Colors possible
   */
  color?: GoblinSharkColor;
};

export type Cookiecuttershark = Shark & {};
```

 -   Note that the "fishtype" property is known as the polymorphicDiscriminator, this is helpful to specify that an Object and be of many shapes but during serialization being able to produce the right shape.

    3.  Operation Models

        -   Here we generate the types for the Operation Responses
        -   We loop through the operations and generate one type per operation
        -   Each operation may be defined as an union type with the model representing its body or headers (if it has any) otherwise it will just contain the basic response properties
        -   Example:


```typescript
export type PolymorphismGetComplicatedResponse = SalmonHeaders &
  SalmonUnion & {
    /**
     * The underlying HTTP response.
     */
    _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SalmonUnion;
    };
  };
```

    4.  Choices

        -   Here we generate the choices which are the Enums. We represent the Enums as union types. For example:


```typescript
export type CMYKColors = "cyan" | "Magenta" | "YELLOW" | "blacK";
export type GoblinSharkColor = "pink" | "gray" | "brown" | "RED" | "red";
```
