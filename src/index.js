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
            (element) => element != word
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
  
  module.exports = {
    getOriginalFromWords,
  };

