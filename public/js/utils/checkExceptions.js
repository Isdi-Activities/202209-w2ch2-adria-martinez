export const checkZeroAndMinusZero = (value1, value2) => {
  const zero = 0;
  const minusZero = -0;
  if (
    Object.is(value1, zero) ||
    Object.is(value1, minusZero) ||
    Object.is(value2, zero) ||
    Object.is(value2, minusZero)
  ) {
    return true;
  }
};

export const checkNaN = (value1, value2) => {
  if (Object.is(value1, NaN) || Object.is(value2, NaN)) {
    return false;
  }
};
