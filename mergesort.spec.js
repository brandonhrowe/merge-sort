describe('split function', () => {
  it('exists', () => {
    expect(typeof split).toEqual('function');
  });

  it('splits arrays in two', () => {
    expect(split([1, 2])).toEqual([[1], [2]]);
  });
  it('handles arrays of odd lengths', () => {
    expect(split([1, 2, 3])).toEqual([[1], [2, 3]]);
  });
});

describe('merge function', () => {
  it('returns an array', () => {
    expect(merge([], [])).toEqual([]);
  });
  it('has an output array length equal to the lengths of its inputs', () => {
    expect(merge([1], [2]).length).toEqual(2);
  });
  it('merges two sorted arrays into one', () => {
    expect(merge([1], [2])).toEqual([1, 2]);
    expect(merge([1, 2, 3, 4], [5, 6, 7, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(merge([0, 4, 5], [1, 9, 20])).toEqual([0, 1, 4, 5, 9, 20]);
  });
  it('handles arrays of different lengths', () => {
    expect(merge([1, 9], [0, 2, 3, 10])).toEqual([0, 1, 2, 3, 9, 10]);
    expect(merge([0, 2, 3, 10], [1, 9])).toEqual([0, 1, 2, 3, 9, 10]);
  });
});

describe('merge sort function', () => {
  it('returns an array', () => {
    expect(Array.isArray(mergeSort([1, 3, 8, 2, 90, 15, 300]))).toEqual(true);
  });
  it('has an output with the same length as its input', () => {
    expect(mergeSort([1, 3, 8, 2, 90, 15, 300]).length).toEqual(7);
  });

  it('works with an array of two elements', () => {
    expect(mergeSort([2, 1])).toEqual([1, 2]);
  });

  it('works with an array of three elements', () => {
    expect(mergeSort([3, 2, 1])).toEqual([1, 2, 3]);
  })

  it('returns the original array if the input is sorted', () => {
    expect(mergeSort([])).toEqual([]);
    expect(mergeSort([3, 3, 3, 3])).toEqual([3, 3, 3, 3]);
    expect(mergeSort([1])).toEqual([1]);
    expect(mergeSort([2, 3, 4, 5])).toEqual([2, 3, 4, 5]);
  });
  it('returns a sorted array', () => {
    expect(mergeSort([1, 3, 8, 2, 90, 15, 300])).toEqual([
      1,
      2,
      3,
      8,
      15,
      90,
      300,
    ]);
    expect(mergeSort([5, 4, 2, 1])).toEqual([1, 2, 4, 5]);
    expect(mergeSort([1, 9, 0, 2, 3, 10])).toEqual([0, 1, 2, 3, 9, 10]);
  });
});
