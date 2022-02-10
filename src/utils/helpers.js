export const sortList = (field, list) => {
  if (list.length === 0) {
    return [];
  }
  switch (typeof list[0][field]) {
    case "string":
      return [...list].sort((a, b) => a[field].localeCompare(b[field]));
    case "number":
      return [...list].sort((a, b) => b[field] - a[field]);
    default:
      return list;
  }
};
