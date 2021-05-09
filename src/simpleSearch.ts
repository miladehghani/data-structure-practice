export const search = (text: string, word: string) => {
  for (let i = 0; i < text.length; i++) {
    const currentChar = text[i];
    if (currentChar === word[0]) {
      let w;
      for (w = 0; w < word.length; w++) {
        if (text[i + w] !== word[w]) {
          i = i + w;
          break;
        }
      }
      if (w === word.length) return true;
    }
  }
  return false;
};
