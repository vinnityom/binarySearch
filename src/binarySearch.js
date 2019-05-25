export default (numbers, numberToSearchFor) => {
  if (numbers.length === 0) {
    return null;
  }

  const iter = (arr, currentIndex) => {  
    if (arr.length === 1) {
      return arr[0] === numberToSearchFor ? currentIndex : null;
    }

    const halfWay = Math.floor(arr.length / 2);
    const [halfWithElem, newIndex] = arr[halfWay] > numberToSearchFor
      ? [arr.slice(0, halfWay), currentIndex]
      : [arr.slice(halfWay), currentIndex + halfWay];

    return iter(halfWithElem, newIndex);
  };

  return iter(numbers, 0);
};
