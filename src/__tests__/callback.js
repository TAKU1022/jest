const fetchDataWithCallback = (callback) => {
  setTimeout(callback, 3000, 'lemon');
};

test('return lemon', (done) => {
  const callback = (data) => {
    expect(data).toBe('lemon');
    done();
  };

  fetchDataWithCallback(callback);
});
