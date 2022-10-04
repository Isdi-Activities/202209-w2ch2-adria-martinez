import { checkNaN, checkZeroAndMinusZero } from "./utils/checkExceptions.js";

const strictEqual = (value1, value2) => {
  if (checkZeroAndMinusZero(value1, value2)) {
    return true;
  } else if (checkNaN(value1, value2)) {
    return false;
  } else return Object.is(value1, value2);
};

export default strictEqual;
