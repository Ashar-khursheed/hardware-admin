
// export const titleCreate = (params, setTitle) => {
//   const splitTitle = params.split("_");
//   const arr = splitTitle.map((item) => Capitalize(item));
//   setTitle(arr.join("") + "Settings");
// };


export const titleCreate = (params, setTitle) => {
  const splitTitle = params.split("_");

  const transformedTitle = splitTitle.map((item) => {
    // Check if the item is a number word and convert it
    const lowercaseItem = item.toLowerCase();
    const numberWords = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety", "hundred", "thousand", "million"];

    if (numberWords.includes(lowercaseItem)) {
      return wordToNumber(lowercaseItem); // Convert the word to a number
    }

    return item; // Capitalize the word if it's not a number word
  });

  const finalTitle = transformedTitle.join("_") + "_settings";
  setTitle(finalTitle);
};

export const wordToNumber = (word) => {
  const numberMap = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
    hundred: 100,
    thousand: 1000,
    million: 1000000,
  };

  return numberMap[word.toLowerCase()] || word; // Return the word itself if not found
};
