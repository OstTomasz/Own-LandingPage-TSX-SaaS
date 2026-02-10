export const fixOrphans = (text: string) => {
  return text.replace(/ (\w{1,2}) /g, " $1\u00A0");
};
