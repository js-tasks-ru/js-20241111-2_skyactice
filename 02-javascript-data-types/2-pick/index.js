/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  const result = fields.reduce((resultObj, key) => {
    if (key in obj) {
      resultObj[key] = obj[key];
    }
    return resultObj;
  }, {});
  return result;
};
