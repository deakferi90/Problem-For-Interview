const { getOriginalFromWords, multiply, sum } = require("./index");

describe("testing getOriginalFromWords function", () => {
  it("Given the set of words 'quick', 'brown', 'the', 'fox', and the string 'thequickbrownfox', should return ['the', 'quick', 'brown', 'fox'].", () => {
    expect(
      getOriginalFromWords(["quick", "brown", "the", "fox"], "thequickbrownfox")
    ).toEqual(["the", "quick", "brown", "fox"]);
  });

  it("Given the set of words 'bed', 'bath', 'bedbath', 'and', 'beyond', and the string 'bedbathandbeyond', should return  ['bed', 'bath', 'and', 'beyond].", () => {
    expect(
      getOriginalFromWords(
        ["bed", "bath", "bedbath", "and", "beyond"],
        "bedbathandbeyond"
      )
    ).toEqual(["bed", "bath", "and", "beyond"]);
  });

  it("Given the set of words 'bed', 'bath', 'bedbath', 'and', 'beyond', and the string 'thefoxisnothere', should return [].", () => {
    expect(
      getOriginalFromWords(
        ["bed", "bath", "bedbath", "and", "beyond"],
        "bedbathandbeyond"
      )
    ).toEqual([]);
  });

  it("should return an empty array if listOfWors id undefined", () => {
    expect(getOriginalFromWords(undefined, "testword")).toEqual([]);
  });

  it("should return an empty array if text is undefined", () => {
    expect(getOriginalFromWords("testword", undefined)).toEqual([]);
  });

  it("should return an empty array if paramaters are undefined", () => {
    expect(getOriginalFromWords(undefined, undefined)).toEqual([]);
  });
});
