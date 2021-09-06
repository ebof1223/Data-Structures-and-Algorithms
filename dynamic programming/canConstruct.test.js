const countConstruct = require('./canConstruct');

describe('the number of times a target word can be constructed from word bank', () => {
  it('test1', () => {
    const result = countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']);
    expect(result).toBe(2);
  });
  it('test2', () => {
    const result = countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']);
    expect(result).toBe(1);
  });
  it('test3', () => {
    const result = countConstruct('skateboard', [
      'bo',
      'rd',
      'ate',
      't',
      'ska',
      'sk',
      'boar',
    ]);
    expect(result).toBe(0);
  });
  it('test4', () => {
    const result = countConstruct('enterapotentpot', [
      'a',
      'p',
      'ent',
      'enter',
      'ot',
      'o',
      't',
    ]);
    expect(result).toBe(4);
  });

  it('test5', () => {
    const result = countConstruct(
      'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',
      ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']
    );
    expect(result).toBe(0);
  });
});
