/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  // handle if there is one plot and that first plot is empty
  if (flowerbed.length === 1 && flowerbed[0] === 0) {
    n--;
  } else {
    flowerbed.forEach((plot, index) => {
      if (plot === 0) {
        // handle if the first plot is empty
        if (index === 0 && flowerbed[index + 1] === 0) {
          flowerbed[index] = 1;
          n--;
        }
        // handle if the last plot is empty
        if (index === flowerbed.length - 1 && flowerbed[index - 1] === 0) {
          flowerbed[index] = 1;
          n--;
        }
        // handle rest of the plots
        if (flowerbed[index - 1] === 0 && flowerbed[index + 1] === 0) {
          flowerbed[index] = 1;
          n--;
        }
      }
    });
  }
  return n <= 0;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2));
console.log(canPlaceFlowers([0, 0, 1, 0, 1], 1));
console.log(canPlaceFlowers([0, 0, 1, 0, 0], 2));
console.log(canPlaceFlowers([0], 1));
