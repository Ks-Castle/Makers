export const uppercaseReg = (str: string) => {
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  str = str.replace(/([A-Z])([A-Z][a-z])/g, "$1 $2");
  str = str.toLowerCase().replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
  return str;
};
