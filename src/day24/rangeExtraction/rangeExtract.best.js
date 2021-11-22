function splitIntoRanges(ranges, number) {
  if (!ranges.length) {
    ranges.push([number]);
    return ranges;
  }

  const lastRange = ranges[ranges.length - 1];
  const lastNumber = lastRange[lastRange.length - 1];

  if (number === lastNumber + 1) {
    lastRange.push(number);
  } else {
    ranges.push([number]);
  }

  return ranges;
}

function convertToRange(range) {
  return range.length < 3 
    ? range.join(',') 
    : `${range[0]}-${range[range.length - 1]}`;
}

function rangeExtraction(individualIntegers) {
  return individualIntegers
    .reduce(splitIntoRanges, [])
    .map(convertToRange)
    .join(',');
}

export default rangeExtraction;
