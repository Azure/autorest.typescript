export function getFixmeForMultilineDocs(fixme: string[]): string[] {
  return fixme.map((fixme) => ` @fixme ${fixme}`);
}

export function getDocsFromDescription(description?: string): string[] {
  if (!description || description.trim().length === 0) {
    return [];
  }
  return [description];
}

export function getDocsWithTags(
  description?: string,
  options: { deprecation?: string; extraDocs?: string[] } = {}
): string[] {
  const docs = getDocsFromDescription(description);
  if (options.extraDocs) {
    docs.push(...options.extraDocs.filter((doc) => doc.trim().length > 0));
  }
  if (options.deprecation && options.deprecation.trim().length > 0) {
    docs.push(`@deprecated ${options.deprecation}`);
  }
  return docs;
}
