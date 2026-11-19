export const useState = (value: string) => {
  let current = value;

  return [
    current,
    (newValue: string): string => {
      current = newValue;
      return current;
    },
  ];
};
