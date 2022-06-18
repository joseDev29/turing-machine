import { LAMBDA, MOVEMENT } from '../../constants';

export const baseSlice = {
  'MB-1': {
    0: ['0', MOVEMENT.right, 'MB-2'],
    1: ['1', MOVEMENT.right, 'MB-5'],
    [LAMBDA.right]: [LAMBDA.right, MOVEMENT.right, 'MB-9', true],
  },
  'MB-2': {
    0: ['0', MOVEMENT.right, 'MB-3'],
    1: ['1', MOVEMENT.right, 'MB-4'],
  },
  'MB-3': {
    0: ['0', MOVEMENT.right, 'AV-1'],
    1: ['1', MOVEMENT.right, 'AVR-1'],
  },
  'MB-4': {
    0: ['0', MOVEMENT.right, 'DP-1'],
    1: ['1', MOVEMENT.right, 'SM-1'],
  },
  'MB-5': {
    0: ['0', MOVEMENT.right, 'MB-6'],
    1: ['1', MOVEMENT.right, 'MB-7'],
  },
  'MB-6': {
    0: ['0', MOVEMENT.right, 'CA2-1'],
    1: ['1', MOVEMENT.right, 'IR-1'],
  },
  'MB-7': {
    0: ['0', MOVEMENT.right, 'FR-1'],
    1: ['1', MOVEMENT.right, 'MB-8'],
  },
  'MB-8': {
    0: ['0', MOVEMENT.neutral, 'MB-9'],
    1: ['1', MOVEMENT.neutral, 'MB-9'],
    [LAMBDA.right]: [LAMBDA.right, MOVEMENT.neutral, 'MB-9'],
  },
};
