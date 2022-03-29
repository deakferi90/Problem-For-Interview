const getOriginalFromWords = (listOfWords, text) => {
    if (listOfWords === undefined || text === undefined || text == "") {
      return [];
    }
    let compareText = "";
    let splitedText = text;
    let final = [];
    let i = 0;
    while (i < splitedText.length) {
      compareText = compareText + text[i];
      listOfWords.forEach((word) => {
        if (compareText == word) {
          final.push(compareText);
          const splitted = splitedText.split(word)[1];
          const filteredElments = listOfWords.filter(
            (element) => console.log(element != word)
          );
          const returnedWords = getOriginalFromWords(filteredElments, splitted);
          final.push(...returnedWords);
          i = splitedText.length;
        }
      });
      i++;
    }
    return final;
  };

  console.log(getOriginalFromWords(["learning", "is", "Feri", "to", "code"], "Feriislearningtocode"));


  const multiply = (a, b) => {
    if (a == undefined || b == undefined) {
      return null;
    }
    if(a == "" || b == "") {
      return undefined;
    }
    return a * b;
  }

  const sum = (a, b) => {
    if (a == undefined || b == undefined) {
      return 0;
    }
    return a + b;
  }
  
  module.exports = {
    getOriginalFromWords,
    multiply, 
    sum
  };