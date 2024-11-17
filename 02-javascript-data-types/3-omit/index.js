/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  const objKeys = Object.keys(obj);
  const result = objKeys.reduce((resultObj, key) => {
    if (!fields.includes(key)) {
      resultObj[key] = obj[key];
    }
    return resultObj;
  }, {});
  return result;
};
