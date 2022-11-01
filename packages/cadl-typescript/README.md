# Introduction

This library is the cadl typescript emitter for Rest Level Client. It take [cadl](https://github.com/microsoft/cadl) as input, transform it into RLCModel, then call rlc-common library to generate the RLC code.

On a high level, the entire Rest Level Client generation process would be:

Cadl Input -> Cadl Compiler -> Cadl Program -> Transform RLCModel -> Call RLC Common library to Generate Code

Within the Transform RLCModel, it has the following stages:

Cadl Program + User Options -> Transform RLCModel Paths -> Transform RLCModel Options -> Transform RLCModel Schemas -> Transform RLCModel Response and Parameter Types -> call RLCCommon libraries to generate the code.  
