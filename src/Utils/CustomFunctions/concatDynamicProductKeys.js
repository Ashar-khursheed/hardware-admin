export const concatDynamicProductKeys = (obj) => {
  const result = [];
  function traverse(obj) {
    for (const key in obj) {
      if ((key === "product_ids" || key.endsWith("Product")) && Array.isArray(obj[key])) {
        result.push(...obj[key]);
      } else if (typeof obj[key] === "object" && obj[key] !== null) {
        traverse(obj[key]);
      } else if (key === "product_ids" || key.endsWith("Product")) {
        result.push(obj[key]);
      }
    }
  }
  traverse(obj);
  return Array.from(new Set(result.filter(id => id !== null && id !== undefined && id !== "")));
};
