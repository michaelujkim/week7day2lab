module.exports = function minInteger(array) {
  if (array == undefined) {
    return null;
  }
  let result = [];
  for (let i = 1; i < array.length; i++) {
    if (0 <= array[i]) {
      result[array[i]] = true;
    }
  }

  for (let i = 1; i < result.length; i++) {
    if (result[i] == undefined) {
      return i;
    }
  }
  return 1;
};
