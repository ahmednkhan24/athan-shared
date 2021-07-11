import { myFunction } from '.';

describe('index', () => {
  it('tests', () => {
    const actual = myFunction('Ahmed');
    expect(actual).toEqual(4);
  });
});
