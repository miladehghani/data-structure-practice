import { readFileSync } from "fs";
import { search } from "./simpleSearch";

test('should searchRlationMap works on "big file"', () => {
  const fileContent = readFileSync("./complex.txt", {
    encoding: "utf-8",
  });
  const startTime = Date.now();
  for (let i = 0; i < 100; i++) {
    expect(search(fileContent, "akjshdkajhdkajhsdkjahsdk")).toBeTruthy();
  }
  console.log("simple search", Date.now() - startTime);
});
