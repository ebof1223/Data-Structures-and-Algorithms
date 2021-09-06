const canConstruct = require('./canConstruct');

describe('if target can be constructed from word bank array', () => {
  it('test1', () => {
    const result = canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']);
    expect(result).toBeTruthy();
  });

  it('test2', () => {
    const result = canConstruct('skateboard', [
      'bo',
      'rd',
      'ate',
      't',
      'ska',
      'sk',
      'boar',
    ]);
    expect(result).toBeFalsy();
  });
  it('test3', () => {
    const result = canConstruct('enterapotentpot', [
      'a',
      'p',
      'ent',
      'enter',
      'ot',
      'o',
      't',
    ]);
    expect(result).toBeTruthy();
  });

  it('test4', () => {
    const result = canConstruct(
      'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',
      ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']
    );
    expect(result).toBeFalsy();
  });
});
