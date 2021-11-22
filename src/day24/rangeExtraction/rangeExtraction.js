const rangeExtraction = (list) => {
  if (!list || !list.length) return '';

  if (list.length === 1) return `${list[0]}`;

  let sets = [list[0]];
  const ranges = [];
  let index = 1;
  
  while (index < list.length) {
    const current = list[index];
    const isLastIndex = index === list.length - 1; 

    if (current - sets[sets.length - 1] === 1) {
      sets.push(current);
    } else if (sets.length < 3) {
      ranges.push(...sets);
      sets = [current];
    } else if (sets.length >= 3) {
      ranges.push({ low: sets[0], high: sets[sets.length - 1] });
      sets = [current];
    }

    // only executed on last index to unload sets into ranges
    if (isLastIndex) {
      if (sets.length < 3) {
        ranges.push(...sets);
      } else if (sets.length >= 3) {
        ranges.push({ low: sets[0], high: sets[sets.length - 1] });
      }
    }

    index += 1;
  }
    
  return ranges
    .map((e) => ((typeof e === 'number') ? e : `${e.low}-${e.high}`))
    .join(',');
};

export default rangeExtraction;
