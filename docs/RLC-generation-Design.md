# RLC generation Design

## Overview

In the JavaScript/TypeScript RLC generator, we support generate RLC code from both CADL input and Swagger input. This document will mainly talk about how the high level design of JavaScript/TypeScript Rest Level Client (RLC) generator looks like. we will first show the whole workflow and then introduce the RLC generation from CADL and Swagger separately.

## Overall Workflow

Basically, the whole workflow is shown in the below flowchart.

```mermaid
graph TD
A[CADL Files] -->|CADL compiler| B(CADL Program)
B -->|CADL TypeScript emitter| C{RLCModel}
C --> |RLC common| D{RLC File Content}
D --> |CADL TypeScript emitter| E(JS RLC Code)
F(Swager Files) -->|Autorest core & m4 plugin| G(Modelerfour)
G -->|Autotest TypeScript Plugin| C
D --> |Autorest TypeScript Plugin| E
```

## Basic Terms

To better understand the above flowchart, we list some basic terms here.

- **Cadl Files**: A Service API that is defined using the [CADL](https://github.com/microsoft/cadl) language.
- **Swagger Files**: A REST api specification that follows the [OpenAPI](https://swagger.io/) definition.
- **CADL Program**: An internal model that is provided after CADL compiler has processed the CADL input.
- **Modelerfour**: A code model that is provided after Autorest core and Modelerfour plugin have processed the swagger input.
- **RLCModel**: An internally defined model that contains all the necessary information required to build the RLC file content.
- **CADL compiler**: A module that compiles the CADL input and provides a set of APIs to the CADL emitter to retrieve the CADL program model.
- **Autorest core & m4 plugin**: A module that takes swagger files as input and outputs the code model Modelerfour.
- **CADL TypeScript emitter**: A module that transforms the CADL program into RLCModel.
- **RLC common**: A common part that takes RLCModel as input and builds the RLC file content.
- **Autorest TypeScript plugin**: A module that transforms the Modelerfour into RLCModel.

## RLC generation from CADL

On a high level, the RLC generation process from CADL input involves the following steps:
1. The CADL input is processed by the CADL compiler to generate a CADL program model.
1. The CADL program model is transformed into an RLCModel.
1. The RLCModel is passed to the RLC Common library, which generates the code for the RLC file.

```mermaid
graph TD
A[CADL Files] -->|CADL compiler| B(CADL Program)
B -->|CADL TypeScript emitter| C{RLCModel}
C --> |RLC common| D(RLC File Content)
D --> |CADL TypeScript emitter| E(JS RLC Code)
```

## RLC generation from Swagger

On a high level, the RLC generation process from Swagger input involves the following steps:
1. The Swagger input is processed by the Autorest core & Modelerfour plugin to generate a code model Modelerfour.
1. The Modelerfour model is transformed into an RLCModel.
1. The RLCModel is passed to the RLC Common library, which generates the code for the RLC file.

```mermaid
graph TD
C{RLCModel} --> |RLC common| D(RLC File Content)
F(Swager Files) -->|Autorest core & m4 plugin| G(Modelerfour)
G -->|Autotest TypeScript Plugin| C
D --> |Autorest TypeScript Plugin| E(JS RLC code)
```
