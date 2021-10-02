import createLocalstorage from '../src';

describe('localstorage', () => {
  it('exports', () => {
    let hook = createLocalstorage('abc', 5);

    expect(hook).toBeDefined();
    expect(hook).toBeInstanceOf(Function);
  });

  it('stores data', () => {
    let hook = createLocalstorage('xyz', 5);
    expect(hook.getState()).toBe(5);
    hook.setState(10);
    expect(hook.getState()).toBe(10);
  });
});
