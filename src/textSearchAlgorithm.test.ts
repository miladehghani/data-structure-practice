import {
  stringToNestedRelationMap,
  searchRlationMap,
} from "./textSearchAlgorithm";
import { readFileSync } from "fs";

test('should searchRlationMap works on "big file"', () => {
  const fileContent = readFileSync("./complex.txt", {
    encoding: "utf-8",
  });
  const startTime = Date.now();
  const relation = stringToNestedRelationMap(fileContent);
  for (let i = 0; i < 100; i++) {
    expect(searchRlationMap(relation, "akjshdkajhdkajhsdkjahsdk")).toBeTruthy();
  }
  console.log(Date.now() - startTime);
});

test('should searchRlationMap works on "big file"', () => {
  const fileContent = readFileSync("./complex.txt", {
    encoding: "utf-8",
  });
  const startTime = Date.now();
  const relation = stringToNestedRelationMap(fileContent);
  for (let i = 0; i < 100; i++) {
    expect(
      searchRlationMap(relation, "akjshdkajh5465465dkajhsdkjahsdk")
    ).toBeFalsy();
  }
  console.log(Date.now() - startTime);
});

test('should native includes works on "big file"', () => {
  const fileContent = readFileSync("./complex.txt", {
    encoding: "utf-8",
  });
  const startTime = Date.now();
  for (let i = 0; i < 100; i++) {
    expect(
      fileContent.includes("akjshdkajhdkaj65465132hsdkjahsdk")
    ).toBeFalsy();
  }
  console.log("native", Date.now() - startTime);
});

test('should native string includes works on "big file"', () => {
  const fileContent = readFileSync("./complex.txt", {
    encoding: "utf-8",
  });
  const startTime = Date.now();
  for (let i = 0; i < 100; i++) {
    expect(fileContent.includes("akjshdkajhdkajhsdkjahsdk")).toBeTruthy();
  }
  console.log("native", Date.now() - startTime);
});

test('should searchString works on "354686231453" and "354686231453"', () => {
  const relation = stringToNestedRelationMap("354686231453");
  expect(searchRlationMap(relation, "354686231453")).toBeTruthy();
});

test('should searchString works on "354686231453" and "8623"', () => {
  const relation = stringToNestedRelationMap("354686231453");
  expect(searchRlationMap(relation, "153215")).toBeFalsy();
});

test('should searchString works on "354686231453" and "45a6sdas2"', () => {
  const relation = stringToNestedRelationMap(
    "354686231a3s2d1a3sd45a6sdas2d1a3s2d56ad6as2d13a453"
  );

  expect(searchRlationMap(relation, "45a6sdas2")).toBeTruthy();
});

test('should searchString works on "babcdar" and "bar"', () => {
  const relation = stringToNestedRelationMap("babcdar");

  expect(searchRlationMap(relation, "bar")).toBeFalsy();
});
