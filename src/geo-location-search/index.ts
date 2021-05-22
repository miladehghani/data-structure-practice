const storageSize = 10_000_000;
const scale = 100;
const lengthOfPartition = 1;

const getLocationData = (): [[number, number]] => {
  let storage: any = [];

  for (let i = 0; i < storageSize; i++) {
    storage.push([
      Math.floor(Math.random() * scale * 100) / 100,
      Math.floor(Math.random() * scale * 100) / 100,
    ]);
  }

  return storage;
};

const getIndex = (point: [number, number], lengthOfPartition: number) => {
  return [
    Math.floor(point[0] / lengthOfPartition),
    Math.floor(point[1] / lengthOfPartition),
  ];
};

const getIndexedData = (lengthOfPartition: number) => {
  const data = getLocationData();
  let indexedData: any = {};

  data.forEach((point) => {
    const index = getIndex(point, lengthOfPartition);
    if (!indexedData[`${index[0]}${index[1]}`])
      indexedData[`${index[0]}${index[1]}`] = [point];
    else indexedData[`${index[0]}${index[1]}`].push(point);
  });

  return indexedData;
};

const indexedData = getIndexedData(lengthOfPartition);
const findSameBlockPoints = (point: [number, number]): [[number, number]] => {
  const index = getIndex(point, lengthOfPartition);
  return indexedData[`${index[0]}${index[1]}`];
};

const startTime = Date.now();
console.log("[15.56, 65.23]=> ", findSameBlockPoints([15.56, 65.23]).length);
console.log("searchTime: ", Date.now() - startTime + " ms");
