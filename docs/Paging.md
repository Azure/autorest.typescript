
# Table of Contents

1.  [How is Paging specified in OpenApi?](#org53458f8)
    1.  [Common Pagging Patters](#org6fd6cdb)
    2.  [x-ms-pageable](#org62649d8)
    3.  [(Next Link)Example](#org642271a)
2.  [How is Paging represented in ModelerFour](#org597cbf2)
3.  [Handling paging in Autores.Typescript](#orgfbc6661)
    1.  [Implementation Ideas:](#orgeef9d67)



<a id="org53458f8"></a>

# How is Paging specified in OpenApi?

The operation response is modeled in OPENAPI as a list of items (a "page") and a link to the next page,
effectibly resembling a singly linked list

An operation is marked with \`x-ms-pageable\` extension that contains a property \`nextLinkName\`
which specifies the name of the property in the response that holds the link to the next page


<a id="org6fd6cdb"></a>

## Common Pagging Patters

-   NextLink
    -   Response contains an array with the page results and a nextLink to get the next pagea
-   ContinuationToken
    -   Response contains the array with page results and a continuation token to send to the service


<a id="org62649d8"></a>

## x-ms-pageable

-   The extension can have the following properties:
    -   **nextLinkName:** Which specifies which property in the response contains the link to the next page. If null it means a single page result
    -   **value:** specifies which property contains the current page (overrides "value")
    -   **operationName:** name of the operation for receiving the next page (defult: <operationName>Next)

-   Note that this extension does not consider Metadata for the scenario where the service returns a ContinuationToken.
    -   ContinuationToken response would look the same as the nextLink one, however the metadata to give information on how to handle should be different
    -   We'll need metadata to know if it is a NextLink vs ContinuationToken
        -   If ContinuationToken we need extra metadata to (1) Operation to call with continuationToken (we could reuse OperationName) (2) How we pass the continuationToken, as a Header, QueryParam, URL, Body, etc&#x2026; Including the name of the parameter to use


<a id="org642271a"></a>

## (Next Link)Example

```yaml 
    swagger: '2.0'
    info:
      version: 1.0.0
      title: Simple API
    procudes:
      - application/json
    paths:
      /getIntegers:
        operationId: list
        description: "Gets those integers."
        x-ms-pageable:                            # EXTENSION
          nextLinkName: nextLink                  # property name for next page URL
        responses:
          200:
            description: OK
            schema:
              $ref: '#/definitions/PagedIntegerCollection'
     definitions:
       PagedIntegerCollection:
         description: "Page of integers."
         type: object
         properties:
           value:                                    # the current page
             type: array
             items:
               type: integer
            nextLink:                                 # next page URL (referred to by "nextLinkName")
              type: string
```

<a id="org597cbf2"></a>

# How is Paging represented in ModelerFour

-   ModelerFour processes the extension information and adds a "paging" object to in operation.language.default. This object has the following shape
```typescript
    interface PagingExtension {
      nextLinkName: string; // Nane of the property containing the nextLink value
      itemName?: string; // Name of the property in the Response containing the page value. The default is values. 
      nextLinkOperation?: Operation; // Reference to the operation to call to get the next page. The default is itself
      group?: string; // nextLinkOperation OperationGroup Name 
      member?: string; // nextLinkOperation operation name
    }
```

<a id="orgfbc6661"></a>

# Handling paging in Autores.Typescript

-   A common patter implemented in the convenience layer of some of our Track2 SDKs is to use AsyncIterators
-   Manual code has been written to wrap auto generated functions with an AsyncIterator function.
-   The new version of AutoRest should try to auto-generate Paging operations using AsyncIterators


<a id="orgeef9d67"></a>

## Implementation Ideas:

-   ModelerFour includes paging metadata to operations in operation.language.default.paging
-   There are 4 main scenarios we would like to handle for paging
    1 Service returns a relative URL to get the next page
    2 Service returns an absolute URL to get the next page
    3 Service returns a continuation token
    4 Service returns any of the previous, plus an operationId
    -   This operationId is the operation to call for getting the next page

-   From the operation definition, we can infer if the paging operation is of type (3) vs (1) or (2)
-   Operations of type (3) will have a parameter with the same name as the nextLink name
-   Operations of type (1) and (2) won't have a parameter with the same name as nextLinkOperation

1.  Handling Operations of type (1) and (2)

    -   We can handle these types of operations by modifying a bit the way its OperationSpec is generated
        -   This operation spec will be very similar to the original, with 2 differences:
            1 Have the Path parametrized, instead of the actual PATH in the operation specification. This parametrized path will take the "original" value as defaultValue 
            2 Add a Path parameter to the urlParameters array in the Operation spec
        -   This way we just need to call the same method with the optional pathParameter whenever we get a nextLink
        -   ****Note**** that core-http seems to be able to extract host and path with no issues. This probably means that we need no special handling between (1) and (2), if the parametrized path is an absolute or relative URL core-http seems to figure it out.
```typescript           
                // This would be de "Default" generated spec. See below for an example of the modifications described above
                const getMultiplePagesOperationSpec: coreHttp.OperationSpec = {
                  path: "paging/multiple",
                  httpMethod: "GET",
                  responses: {
                    200: {
                      bodyMapper: Mappers.ProductResult
                    },
                    default: {}
                  },
                  urlParameters: [Parameters.$host],
                  headerParameters: [
                    Parameters.clientRequestId,
                    Parameters.maxresults,
                    Parameters.timeout
                  ],
                  serializer
                };
                
                // This is the modified spec
                const getMultiplePagesOperationSpec: coreHttp.OperationSpec = {
                  path: "{path}", // Made this parametrized
                  httpMethod: "GET",
                  responses: {
                    200: {
                      bodyMapper: Mappers.ProductResult
                    },
                    default: {}
                  },
                  urlParameters: [Parameters.$host, Parameters.path /*Added this guy*/],
                  headerParameters: [
                    Parameters.clientRequestId,
                    Parameters.maxresults,
                    Parameters.timeout
                  ],
                  serializer
                };
                
                // In parameters.ts
                export const path: coreHttp.OperationURLParameter = {
                  parameterPath: ["options", "path"],
                  mapper: {
                    serializedName: "path",
                    required: true,
                    defaultValue: "http://localhost:3000/paging/multiple",
                    type: {
                      name: "String"
                    }
                  },
                  skipEncoding: true
                };
```
2.  Handling Operations of type (3)

    -   These are the operations that return a ContinuationToken instead of a link.
    -   This operations tiplically have a parameter with the same name of the nextLink
    -   To get the next page, we just need to call the same function passing nextLink

3.  Handling Operations of Type (4)

    -   These operations have a reference to another operation to get the next page
    -   We hould be able to generate the operation function so that instead of calling itself to get the next page, it calls the specified operation

