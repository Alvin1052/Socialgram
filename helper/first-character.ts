'use client';
export const GetCharacter = (text: string) => {
  if (text === 'undefined') return 'UK';
  let firstWord = text.split(' ')[0].charAt(0).toUpperCase();
  let secondWord = text.split(' ')[1].charAt(0).toUpperCase();

  let initial = firstWord + secondWord;
  return initial;
};
