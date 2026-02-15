export const ConvertDate = (date: string) => new Date(date).toDateString();

export const CapitalizeFirstLetter = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1);

export const Initials = (name: string) => {
  const firstLetter = CapitalizeFirstLetter(name.match(/\b\w/g)?.[0] || '');
  const secondLetter = CapitalizeFirstLetter(name.match(/\b\w/g)?.[1] || '');
  const result = firstLetter + secondLetter;
  return result;
};
