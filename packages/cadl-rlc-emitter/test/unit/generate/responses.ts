// When it is consumed as body it should also be string so no model generated
// const schemas = await generatedAsBodyType(cadlType, cadlTypeDefinition);
// verfiyEmptyModels(schemas);
// function verfiyEmptyModels(schemas: any) {
//   const { inputModelFile, outputModelFile } = schemas;
//   assert.ok(!inputModelFile);
//   assert.ok(!outputModelFile);
// }

// async function generatedAsBodyType(cadlType: string, typeDefinition = "") {
//   const schemaOutput = await generateInputOutputModelsFromCadl(`
//   ${typeDefinition}
//   @route("/models")
//   @get
//   op getModel(@body input: ${cadlType}): ${cadlType};`);
//   assert.ok(schemaOutput);
//   return schemaOutput!;
// }
