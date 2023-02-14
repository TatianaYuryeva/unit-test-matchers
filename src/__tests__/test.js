import sortByHealth from '../js/sort-by-health';

const data = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const sortedData = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

test('sorting characters by health', () => {
  const sortedCharacters = sortByHealth(data);
  const expected = sortedData;
  expect(sortedCharacters).toEqual(expected);
});
