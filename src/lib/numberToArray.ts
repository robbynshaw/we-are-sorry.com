const numberToArray = (n: number): number[] => {
  const result = [];
  for (let i = 0; i < n; i += 1) {
    result.push(i);
  }
  return result;
};

export default numberToArray;
