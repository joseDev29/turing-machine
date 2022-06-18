import { LAMBDA, MOVEMENT } from '../../constants';
import {
  goToA1Slice,
  goToA2Slice,
  goToA3Slice,
  goToA4Slice,
  goToB1Slice,
  goToB2Slice,
  goToB3Slice,
  goToB4Slice,
  goToC1Slice,
  goToC2Slice,
  goToC3Slice,
  goToC4Slice,
} from '../generators';

// ID: AV

export const assignValueSlice = {
  'AV-1': {
    0: ['0', MOVEMENT.right, 'AV-2'],
    1: ['1', MOVEMENT.right, 'AV-25'],
  },
  'AV-2': {
    0: ['0', MOVEMENT.right, 'AV-3'],
    1: ['1', MOVEMENT.right, 'AV-14'],
  },
  'AV-3': {
    0: ['0', MOVEMENT.right, 'AV-4'],
    1: ['1', MOVEMENT.right, 'AV-4'],
  },
  'AV-4': {
    0: ['0', MOVEMENT.right, 'AV-5'],
    1: ['1', MOVEMENT.right, 'AV-5'],
  },
  'AV-5': {
    0: ['0', MOVEMENT.right, 'AV-6'],
    1: ['1', MOVEMENT.right, 'AV-6'],
  },
  'AV-6': {
    0: ['X', MOVEMENT.left, 'AV-GTA4-1-0'],
    1: ['Y', MOVEMENT.left, 'AV-GTA4-2-0'],
  },
  ...goToA4Slice('AV-GTA4-1', {
    0: ['0', MOVEMENT.right, 'AV-7'],
    1: ['0', MOVEMENT.right, 'AV-7'],
  }),
  ...goToA4Slice('AV-GTA4-2', {
    0: ['1', MOVEMENT.right, 'AV-7'],
    1: ['1', MOVEMENT.right, 'AV-7'],
  }),
  'AV-7': {
    0: ['0', MOVEMENT.right, 'AV-7'],
    1: ['1', MOVEMENT.right, 'AV-7'],
    S: ['S', MOVEMENT.right, 'AV-7'],
    X: ['X', MOVEMENT.left, 'AV-8'],
    Y: ['Y', MOVEMENT.left, 'AV-8'],
  },
  'AV-8': {
    0: ['X', MOVEMENT.left, 'AV-GTA3-1-0'],
    1: ['Y', MOVEMENT.left, 'AV-GTA3-2-0'],
  },
  ...goToA3Slice('AV-GTA3-1', {
    0: ['0', MOVEMENT.right, 'AV-9'],
    1: ['0', MOVEMENT.right, 'AV-9'],
  }),
  ...goToA3Slice('AV-GTA3-2', {
    0: ['1', MOVEMENT.right, 'AV-9'],
    1: ['1', MOVEMENT.right, 'AV-9'],
  }),
  'AV-9': {
    0: ['0', MOVEMENT.right, 'AV-9'],
    1: ['1', MOVEMENT.right, 'AV-9'],
    S: ['S', MOVEMENT.right, 'AV-9'],
    X: ['X', MOVEMENT.left, 'AV-10'],
    Y: ['Y', MOVEMENT.left, 'AV-10'],
  },
  'AV-10': {
    0: ['X', MOVEMENT.left, 'AV-GTA2-1-0'],
    1: ['Y', MOVEMENT.left, 'AV-GTA2-2-0'],
  },
  ...goToA2Slice('AV-GTA2-1', {
    0: ['0', MOVEMENT.right, 'AV-11'],
    1: ['0', MOVEMENT.right, 'AV-11'],
  }),
  ...goToA2Slice('AV-GTA2-2', {
    0: ['1', MOVEMENT.right, 'AV-11'],
    1: ['1', MOVEMENT.right, 'AV-11'],
  }),
  'AV-11': {
    0: ['0', MOVEMENT.right, 'AV-11'],
    1: ['1', MOVEMENT.right, 'AV-11'],
    S: ['S', MOVEMENT.right, 'AV-11'],
    X: ['X', MOVEMENT.left, 'AV-12'],
    Y: ['Y', MOVEMENT.left, 'AV-12'],
  },
  'AV-12': {
    0: ['X', MOVEMENT.left, 'AV-GTA1-1-0'],
    1: ['Y', MOVEMENT.left, 'AV-GTA1-2-0'],
  },
  ...goToA1Slice('AV-GTA1-1', {
    0: ['0', MOVEMENT.right, 'AV-13'],
    1: ['0', MOVEMENT.right, 'AV-13'],
  }),
  ...goToA1Slice('AV-GTA1-2', {
    0: ['1', MOVEMENT.right, 'AV-13'],
    1: ['1', MOVEMENT.right, 'AV-13'],
  }),
  'AV-13': {
    0: ['0', MOVEMENT.right, 'AV-13'],
    1: ['1', MOVEMENT.right, 'AV-13'],
    S: ['S', MOVEMENT.right, 'AV-13'],
    X: ['0', MOVEMENT.right, 'AV-37'],
    Y: ['1', MOVEMENT.right, 'AV-37'],
  },

  // ----

  'AV-14': {
    0: ['0', MOVEMENT.right, 'AV-15'],
    1: ['1', MOVEMENT.right, 'AV-15'],
  },
  'AV-15': {
    0: ['0', MOVEMENT.right, 'AV-16'],
    1: ['1', MOVEMENT.right, 'AV-16'],
  },
  'AV-16': {
    0: ['0', MOVEMENT.right, 'AV-17'],
    1: ['1', MOVEMENT.right, 'AV-17'],
  },
  'AV-17': {
    0: ['X', MOVEMENT.left, 'AV-GTB4-1-0'],
    1: ['Y', MOVEMENT.left, 'AV-GTB4-2-0'],
  },
  ...goToB4Slice('AV-GTB4-1', {
    0: ['0', MOVEMENT.right, 'AV-18'],
    1: ['0', MOVEMENT.right, 'AV-18'],
  }),
  ...goToB4Slice('AV-GTB4-2', {
    0: ['1', MOVEMENT.right, 'AV-18'],
    1: ['1', MOVEMENT.right, 'AV-18'],
  }),
  'AV-18': {
    0: ['0', MOVEMENT.right, 'AV-18'],
    1: ['1', MOVEMENT.right, 'AV-18'],
    S: ['S', MOVEMENT.right, 'AV-18'],
    X: ['X', MOVEMENT.left, 'AV-19'],
    Y: ['Y', MOVEMENT.left, 'AV-19'],
  },
  'AV-19': {
    0: ['X', MOVEMENT.left, 'AV-GTB3-1-0'],
    1: ['Y', MOVEMENT.left, 'AV-GTB3-2-0'],
  },
  ...goToB3Slice('AV-GTB3-1', {
    0: ['0', MOVEMENT.right, 'AV-20'],
    1: ['0', MOVEMENT.right, 'AV-20'],
  }),
  ...goToB3Slice('AV-GTB3-2', {
    0: ['1', MOVEMENT.right, 'AV-20'],
    1: ['1', MOVEMENT.right, 'AV-20'],
  }),
  'AV-20': {
    0: ['0', MOVEMENT.right, 'AV-20'],
    1: ['1', MOVEMENT.right, 'AV-20'],
    S: ['S', MOVEMENT.right, 'AV-20'],
    X: ['X', MOVEMENT.left, 'AV-21'],
    Y: ['Y', MOVEMENT.left, 'AV-21'],
  },
  'AV-21': {
    0: ['X', MOVEMENT.left, 'AV-GTB2-1-0'],
    1: ['Y', MOVEMENT.left, 'AV-GTB2-2-0'],
  },
  ...goToB2Slice('AV-GTB2-1', {
    0: ['0', MOVEMENT.right, 'AV-22'],
    1: ['0', MOVEMENT.right, 'AV-22'],
  }),
  ...goToB2Slice('AV-GTB2-2', {
    0: ['1', MOVEMENT.right, 'AV-22'],
    1: ['1', MOVEMENT.right, 'AV-22'],
  }),
  'AV-22': {
    0: ['0', MOVEMENT.right, 'AV-22'],
    1: ['1', MOVEMENT.right, 'AV-22'],
    S: ['S', MOVEMENT.right, 'AV-22'],
    X: ['X', MOVEMENT.left, 'AV-23'],
    Y: ['Y', MOVEMENT.left, 'AV-23'],
  },
  'AV-23': {
    0: ['X', MOVEMENT.left, 'AV-GTB1-1-0'],
    1: ['Y', MOVEMENT.left, 'AV-GTB1-2-0'],
  },
  ...goToB1Slice('AV-GTB1-1', {
    0: ['0', MOVEMENT.right, 'AV-24'],
    1: ['0', MOVEMENT.right, 'AV-24'],
  }),
  ...goToB1Slice('AV-GTB1-2', {
    0: ['1', MOVEMENT.right, 'AV-24'],
    1: ['1', MOVEMENT.right, 'AV-24'],
  }),
  'AV-24': {
    0: ['0', MOVEMENT.right, 'AV-24'],
    1: ['1', MOVEMENT.right, 'AV-24'],
    S: ['S', MOVEMENT.right, 'AV-24'],
    X: ['0', MOVEMENT.right, 'AV-37'],
    Y: ['1', MOVEMENT.right, 'AV-37'],
  },

  // ----

  'AV-25': {
    0: ['0', MOVEMENT.right, 'AV-26'],
  },
  'AV-26': {
    0: ['0', MOVEMENT.right, 'AV-27'],
    1: ['1', MOVEMENT.right, 'AV-27'],
  },
  'AV-27': {
    0: ['0', MOVEMENT.right, 'AV-28'],
    1: ['1', MOVEMENT.right, 'AV-28'],
  },
  'AV-28': {
    0: ['0', MOVEMENT.right, 'AV-29'],
    1: ['1', MOVEMENT.right, 'AV-29'],
  },
  'AV-29': {
    0: ['X', MOVEMENT.left, 'AV-GTC4-1-0'],
    1: ['Y', MOVEMENT.left, 'AV-GTC4-2-0'],
  },
  ...goToC4Slice('AV-GTC4-1', {
    0: ['0', MOVEMENT.right, 'AV-30'],
    1: ['0', MOVEMENT.right, 'AV-30'],
  }),
  ...goToC4Slice('AV-GTC4-2', {
    0: ['1', MOVEMENT.right, 'AV-30'],
    1: ['1', MOVEMENT.right, 'AV-30'],
  }),
  'AV-30': {
    0: ['0', MOVEMENT.right, 'AV-30'],
    1: ['1', MOVEMENT.right, 'AV-30'],
    S: ['S', MOVEMENT.right, 'AV-30'],
    X: ['X', MOVEMENT.left, 'AV-31'],
    Y: ['Y', MOVEMENT.left, 'AV-31'],
  },
  'AV-31': {
    0: ['X', MOVEMENT.left, 'AV-GTC3-1-0'],
    1: ['Y', MOVEMENT.left, 'AV-GTC3-2-0'],
  },
  ...goToC3Slice('AV-GTC3-1', {
    0: ['0', MOVEMENT.right, 'AV-32'],
    1: ['0', MOVEMENT.right, 'AV-32'],
  }),
  ...goToC3Slice('AV-GTC3-2', {
    0: ['1', MOVEMENT.right, 'AV-32'],
    1: ['1', MOVEMENT.right, 'AV-32'],
  }),
  'AV-32': {
    0: ['0', MOVEMENT.right, 'AV-32'],
    1: ['1', MOVEMENT.right, 'AV-32'],
    S: ['S', MOVEMENT.right, 'AV-32'],
    X: ['X', MOVEMENT.left, 'AV-33'],
    Y: ['Y', MOVEMENT.left, 'AV-33'],
  },
  'AV-33': {
    0: ['X', MOVEMENT.left, 'AV-GTC2-1-0'],
    1: ['Y', MOVEMENT.left, 'AV-GTC2-2-0'],
  },
  ...goToC2Slice('AV-GTC2-1', {
    0: ['0', MOVEMENT.right, 'AV-34'],
    1: ['0', MOVEMENT.right, 'AV-34'],
  }),
  ...goToC2Slice('AV-GTC2-2', {
    0: ['1', MOVEMENT.right, 'AV-34'],
    1: ['1', MOVEMENT.right, 'AV-34'],
  }),
  'AV-34': {
    0: ['0', MOVEMENT.right, 'AV-34'],
    1: ['1', MOVEMENT.right, 'AV-34'],
    S: ['S', MOVEMENT.right, 'AV-34'],
    X: ['X', MOVEMENT.left, 'AV-35'],
    Y: ['Y', MOVEMENT.left, 'AV-35'],
  },
  'AV-35': {
    0: ['X', MOVEMENT.left, 'AV-GTC1-1-0'],
    1: ['Y', MOVEMENT.left, 'AV-GTC1-2-0'],
  },
  ...goToC1Slice('AV-GTC1-1', {
    0: ['0', MOVEMENT.right, 'AV-36'],
    1: ['0', MOVEMENT.right, 'AV-36'],
  }),
  ...goToC1Slice('AV-GTC1-2', {
    0: ['1', MOVEMENT.right, 'AV-36'],
    1: ['1', MOVEMENT.right, 'AV-36'],
  }),
  'AV-36': {
    0: ['0', MOVEMENT.right, 'AV-36'],
    1: ['1', MOVEMENT.right, 'AV-36'],
    S: ['S', MOVEMENT.right, 'AV-36'],
    X: ['0', MOVEMENT.right, 'AV-37'],
    Y: ['1', MOVEMENT.right, 'AV-37'],
  },

  // ----

  'AV-37': {
    X: ['0', MOVEMENT.right, 'AV-37'],
    Y: ['1', MOVEMENT.right, 'AV-37'],
    0: ['0', MOVEMENT.neutral, 'AV-38'],
    1: ['1', MOVEMENT.neutral, 'AV-38'],
    [LAMBDA.right]: [LAMBDA.right, MOVEMENT.neutral, 'AV-38'],
  },
  'AV-38': {
    0: ['0', MOVEMENT.neutral, 'MB-1'],
    1: ['1', MOVEMENT.neutral, 'MB-1'],
    [LAMBDA.right]: [LAMBDA.right, MOVEMENT.neutral, 'MB-1'],
  },
};
