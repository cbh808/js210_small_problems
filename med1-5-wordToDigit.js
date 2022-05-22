const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

function wordToDigit(string) {
  let wordArray = string.split(' ').map(word => {
    let cleanWord = word.replace(/[^a-z]/ig, '');

    if (words.includes(cleanWord)) {
      return word.replace(cleanWord, words.indexOf(cleanWord));
    } else return word;
  });
  return wordArray.join(' ');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));

// "Please call me at 5 5 5 1 2 3 4. Thanks."