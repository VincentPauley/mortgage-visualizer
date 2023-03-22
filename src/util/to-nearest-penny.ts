// common help to round up longer decimals to the nearest penny
const ToNearestPenny = (value: number): number => {
  return Math.ceil(value * 100) / 100;
};

export default ToNearestPenny;
