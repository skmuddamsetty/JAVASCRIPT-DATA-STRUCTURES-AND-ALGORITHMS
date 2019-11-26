/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  let secretMap = new Map();
  let countMap = new Map();
  let bulls = 0;
  let cows = 0;
  for (let i = 0; i < secret.length; i++) {
    secretMap.set(secret[i], i);
    if (countMap.get(secret[i]) === undefined) {
      countMap.set(secret[i], 1);
    } else {
      countMap.set(secret[i], countMap.get(secret[i]) + 1);
    }
  }
  for (let i = 0; i < guess.length; i++) {
    if (secretMap.get(guess[i]) !== undefined) {
      if (secret[i] === guess[i]) {
        bulls++;
        countMap.set(guess[i], countMap.get(guess[i]) - 1);
      } else if (countMap.get(guess[i]) > 0) {
        cows++;
        countMap.set(guess[i], countMap.get(guess[i]) - 1);
      }
    }
  }
  return bulls + 'A' + cows + 'B';
};

// console.log(getHint('1807', '7810'));
console.log(getHint('1122', '1222'));
