import { mults3or5 } from './../src/js/scripts.js';

describe('mults3or5', () => {

  test('should return something', () => {
    const check = mults3or5();
    expect(check).toEqual(233168)
  })

})