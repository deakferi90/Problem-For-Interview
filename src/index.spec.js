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
        "thefoxisnothere"
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

describe("testing for multiply functions", () => {
  it('should return 6 if 2 and 3 is provided', () => {
    expect(multiply(2,3)).toEqual(6);
  })
});

describe("testing for sum functions", () => {
  it('should return 5 if 2 and 3 is provided', () => {
    expect(sum(2,3)).toEqual(5);
  })
});

describe("testing for sum functions", () => {
  it('should return 5 if 2 and 3 is provided', () => {
    expect(sum(undefined, 3)).toEqual(0);
  })
});

describe("testing for sum functions", () => {
  it('should return 5 if 2 and 3 is provided', () => {
    expect(sum(2, undefined)).toEqual(0);
  })
});