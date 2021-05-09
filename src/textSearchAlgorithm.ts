interface RelationMap {
  [index: string]: { [index: string]: number[] };
}
export const stringToNestedRelationMap = (text: string): RelationMap => {
  //Computation Complexity O(n)
  let relationMap: any = {};
  for (let i = 0; i < text.length - 1; i++) {
    if (!relationMap[text[i]]) {
      relationMap[text[i]] = { [text[i + 1]]: [i] };
    } else if (!relationMap[text[i]][text[i + 1]]) {
      relationMap[text[i]][text[i + 1]] = [i];
    } else {
      relationMap[text[i]][text[i + 1]].push(i);
    }
  }
  return relationMap;
};

export const searchRlationMap = (relationMap: RelationMap, word: string) => {
  let lastIndexs: any;

  for (let i = 0; i < word.length - 1; i++) {
    const current = word[i];
    const next = word[i + 1];

    if (!relationMap[current][next]) return false;
    let currentIndexs = relationMap[current][next];
    let acceptableIndexes: number[] = [];

    if (lastIndexs) {
      currentIndexs.forEach((ci) => {
        if (lastIndexs.includes(ci - 1)) {
          acceptableIndexes.push(ci);
        }
      });
      if (acceptableIndexes.length === 0) return false;
      currentIndexs = acceptableIndexes;
    }
    lastIndexs = currentIndexs;
  }
  return true;
};
