async function read() {
  const client = new TestingClient();
  const result = await client.read({
    strValue: "00000000-0000-0000-0000-00000000000",
    numValue: 0.12,
    enumValue: "red",
    modelValue: { bar: "bar value" },
    dateValue: new Date("2022-08-09"),
    arrValue: ["x", "y"],
    unionValue: test,
    nullValue: null,
    additionalProp: "additional prop",
  });
  console.log(result);
}

async function main() {
  read();
}

main().catch(console.error);
