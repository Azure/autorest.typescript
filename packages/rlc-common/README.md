# Introduction

In this library, we abstract the common generation logic for RLC generation from both swaggers and typespec. In this way, the autorest.typescript part will only need to transform the code model into RLCModel, and the TypeSpec emitter will only need to transform the TypeSpec program into RLCModel, then the rlc-common library will take the rest generation part to build the file content of from the RLCModel.
