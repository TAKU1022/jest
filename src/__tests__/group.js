import { isSour } from '../isSour';

describe('#isSour', () => {
  test('lemonade is sour', () => {
    expect(isSour('lemonade')).toBe(true);
  });

  test('cola is not sour', () => {
    expect(isSour('cola')).toBe(false);
  });
});
