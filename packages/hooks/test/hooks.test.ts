import { useScroll, useSize, useQuery } from '../src/index';

test('functions are exported', () => {
  expect(typeof useScroll).toBe('function');
  expect(typeof useSize).toBe('function');
  expect(typeof useQuery).toBe('function');
});
