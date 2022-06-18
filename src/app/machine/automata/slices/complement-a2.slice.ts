import { LAMBDA, MOVEMENT } from '../../constants';
import { goToA4Slice, goToB4Slice, goToC4Slice } from '../generators';

export const complementA2Slice = {
  'CA2-1': {
    0: ['0', MOVEMENT.right, 'CA2-2'],
    1: ['1', MOVEMENT.right, 'CA2-11'],
  },
  'CA2-2': {
    0: ['X', MOVEMENT.right, 'CA2-GTA4-1-0'],
    1: ['Y', MOVEMENT.right, 'CA2-GTA4-2-0'],
  },
  ...goToA4Slice('CA2-GTA4-1', {
    0: ['0', MOVEMENT.left, 'CA2-3'],
    1: ['1', MOVEMENT.left, 'CA2-6'],
  }),
  ...goToA4Slice('CA2-GTA4-2', {
    0: ['X', MOVEMENT.right, 'CA2-GTB4-1-0'],
    1: ['Y', MOVEMENT.right, 'CA2-GTB4-1-0'],
  }),
  ...goToB4Slice('CA2-GTB4-1', {
    0: ['0', MOVEMENT.left, 'CA2-7'],
    1: ['1', MOVEMENT.left, 'CA2-10'],
  }),
  'CA2-3': {
    0: ['0', MOVEMENT.left, 'CA2-4'],
    1: ['1', MOVEMENT.left, 'CA2-6'],
  },
  'CA2-4': {
    0: ['0', MOVEMENT.left, 'CA2-5'],
    1: ['1', MOVEMENT.left, 'CA2-6'],
  },
  'CA2-5': {
    0: ['0', MOVEMENT.right, 'CA2-15'],
    1: ['1', MOVEMENT.left, 'CA2-6'],
  },
  'CA2-6': {
    0: ['1', MOVEMENT.left, 'CA2-6'],
    1: ['0', MOVEMENT.left, 'CA2-6'],
    [LAMBDA.left]: [LAMBDA.left, MOVEMENT.right, 'CA2-15'],
  },
  'CA2-7': {
    0: ['0', MOVEMENT.left, 'CA2-8'],
    1: ['1', MOVEMENT.left, 'CA2-10'],
  },
  'CA2-8': {
    0: ['0', MOVEMENT.left, 'CA2-9'],
    1: ['1', MOVEMENT.left, 'CA2-10'],
  },
  'CA2-9': {
    0: ['0', MOVEMENT.left, 'CA2-10'],
    1: ['1', MOVEMENT.left, 'CA2-10'],
  },
  'CA2-10': {
    0: ['1', MOVEMENT.left, 'CA2-10'],
    1: ['0', MOVEMENT.left, 'CA2-10'],
    X: ['0', MOVEMENT.right, 'CA2-15'],
    Y: ['1', MOVEMENT.right, 'CA2-15'],
  },
  'CA2-11': {
    0: ['X', MOVEMENT.right, 'CA2-GTB4-2-0'],
  },
  ...goToB4Slice('CA2-GTB4-2', {
    0: ['X', MOVEMENT.right, 'CA2-GTC4-1-0'],
    1: ['Y', MOVEMENT.right, 'CA2-GTC4-1-0'],
  }),
  ...goToC4Slice('CA2-GTC4-1', {
    0: ['0', MOVEMENT.left, 'CA2-12'],
    1: ['1', MOVEMENT.left, 'CA2-10'],
  }),
  'CA2-12': {
    0: ['0', MOVEMENT.left, 'CA2-13'],
    1: ['1', MOVEMENT.left, 'CA2-10'],
  },
  'CA2-13': {
    0: ['0', MOVEMENT.left, 'CA2-14'],
    1: ['1', MOVEMENT.left, 'CA2-10'],
  },
  'CA2-14': {
    0: ['0', MOVEMENT.left, 'CA2-10'],
    1: ['1', MOVEMENT.left, 'CA2-10'],
  },
  'CA2-15': {
    0: ['0', MOVEMENT.right, 'CA2-15'],
    1: ['1', MOVEMENT.right, 'CA2-15'],
    S: ['S', MOVEMENT.right, 'CA2-15'],
    X: ['0', MOVEMENT.right, 'CA2-16'],
    Y: ['1', MOVEMENT.right, 'CA2-16'],
  },
  'CA2-16': {
    0: ['0', MOVEMENT.neutral, 'MB-1'],
    1: ['1', MOVEMENT.neutral, 'MB-1'],
    [LAMBDA.right]: [LAMBDA.right, MOVEMENT.neutral, 'MB-1'],
  },
};
