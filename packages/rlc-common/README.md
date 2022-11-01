# Introduction

In this library, we abstract the common generation logic for RLC generation from both swaggers and cadl. In this way, the autorest.typescript part will only need to transform the code model into RLCModel, and the cadl emitter will only need to transform the cadl program into RLCModel, then the rlc-common library will take the rest generation part to build the file content of from the RLCModel.
