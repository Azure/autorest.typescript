Overview of RLC generation design

Basic Terms:
Cadl Files: cloud service API definition written in CADL 
Swagger Files: REST api specification written in OpenAPI.
CADL Program: The model we get after @cadl-lang/compiler has processed the cadl input.
Modelerfour: The code model we get after autorest core and modelerfour plugin has processed the swagger input.
RLCModel: The model we defined internally which contains all the necessary information we need to build the RLC file content.
@cadl-lang/compiler:
Autorest core & m4 plugin: 
@azure-tools/cadl-typescript: The CADL TypeScript emitter, which transforms the CADL program into RLCModel.
@azure-tools/rlc-common: The common part that takes RLCModel as input and build the RLC file content. 
@autorest/typescript: The Autorest plugin which transforms the Modelerfour into RLCModel.

CADL Pipeline


```mermaid
  graph TD;
      A-->B;
      A-->C;
      B-->D;
      C-->D;
```