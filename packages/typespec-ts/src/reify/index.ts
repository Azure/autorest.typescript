import _ from "lodash";
import {} from "ts-morph";

export type Statement = ReturnStatement;

export interface ReturnStatement {
  kind: "return";
  value?: string;
}

export interface SwitchReturn {
  kind: "switch return";
  expr: string;
  cases: Map<Statement[], Set<string | undefined>>;
}

export function reifySwitchReturn(switchReturn: SwitchReturn): string {
  const [cases, defaultCase] = _([...switchReturn.cases])
    .groupBy(([__, ids]) => _(ids).some(_.isUndefined))
    .at(["false", "true[0]"])
    .value() as [
    [ReturnStatement[], Set<string>][],
    ReturnStatement[] | undefined
  ];
  const fallthroughCases = cases.map(
    ([body, ids]): [string, ReturnStatement[]] => [
      _(ids)
        .map((id) => `case ${id}:`)
        .join("\n"),
      body
    ]
  );
  const fallthroughCasesWithDefault = defaultCase
    ? fallthroughCases.concat(["default:", defaultCase])
    : fallthroughCases;
  return [
    `switch (${switchReturn.expr}) {`,
    ...fallthroughCasesWithDefault,
    "}"
  ].join("\n");
}
