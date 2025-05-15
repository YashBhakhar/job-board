export function cleanQuery(params) {
  const queryParts = [];
  for (const key in params) {
    if (params[key] !== undefined) {
      queryParts.push(
        `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
      );
    }
  }
  return queryParts.join("&");
}
