export const sample = (arr: string[]) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const range = (start: number, end: number, step: number = 1) => {
  let output: number[] = [];
  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};
