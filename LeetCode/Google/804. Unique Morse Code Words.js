/**
 * @param {string[]} words
 * @return {number}
 */
uniqueMorseRepresentations = words => {
  let morseCodeMap = new Map();
  let morseCodes = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..'
  ];
  morseCodes.forEach((morseCode, index) =>
    morseCodeMap.set(String.fromCharCode(97 + index), morseCode)
  );
  let resultMap = new Map();
  let resultCount = 0;
  let morseCode = [];
  words.forEach(word => {
    for (let i = 0; i < word.length; i++) {
      morseCode.push(morseCodeMap.get(word[i]));
    }
    if (resultMap.get(morseCode.join('')) === undefined) {
      resultMap.set(morseCode.join(''), true);
      resultCount++;
    }
    morseCode = [];
  });
  return resultCount;
};

uniqueMorseRepresentationsWithoutMap = words => {
  let resultMap = new Map();
  let morseCode = [];
  let resultCount = 0;
  let morseCodes = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..'
  ];
  words.forEach(word => {
    for (let i = 0; i < word.length; i++) {
      morseCode.push(morseCodes[word[i].charCodeAt(0) - 97]);
    }
    if (resultMap.get(morseCode.join('')) === undefined) {
      resultMap.set(morseCode.join(''), true);
      resultCount++;
    }
    morseCode = [];
  });
  return resultCount;
};
console.log(uniqueMorseRepresentationsWithoutMap(['gin', 'zen', 'gig', 'msg']));
