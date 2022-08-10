interface WithDocs {
  doc?: string | string[];
}

export function generateDocs({ doc }: WithDocs) {
  if (!doc) {
    return;
  }

  if (Array.isArray(doc) && !doc.length) {
    return;
  }

  const docString = Array.isArray(doc) ? doc.join("\n") : doc;

  return `@doc("${docString}")`;
}
