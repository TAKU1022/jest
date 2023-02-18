const fetchData = (category = 'fruit') =>
  category === 'fruit'
    ? Promise.resolve('lemon')
    : Promise.reject(new Error('not exist'));

test('resolves to lemon', () => {
  return expect(fetchData('fruit')).resolves.toBe('lemon');
});

test('rejects with fish', () => {
  return expect(fetchData('fish')).rejects.toThrow('not exist');
});
