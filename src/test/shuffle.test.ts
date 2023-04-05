import { it, describe, expect } from "@jest/globals";
import { shuffle } from './shuffle';

describe('shuffle', () => {
  it('should shuffle array in random order', () => {
    const array = [
      { id: '1', name: 'Card 1', image: 'card1.jpg' },
      { id: '2', name: 'Card 2', image: 'card2.jpg' },
      { id: '3', name: 'Card 3', image: 'card3.jpg' },
    ];

    const shuffled = shuffle(array);

    expect(shuffled).toHaveLength(array.length);
    expect(shuffled).not.toEqual(array);
  });
});
