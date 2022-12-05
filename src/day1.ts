import { sum, select, max, isArray } from 'radash';

// Day 1 - Heaviest Elf

const elves = [[1000, 2000, 3000], [4000], [5000, 6000], [7000, 8000, 9000], [10000]];

const calories = select(elves, sum, isArray);

const heaviest = max(calories);

console.log('RESULT', { elves, calories, heaviest });
