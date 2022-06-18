import { LAMBDA, MOVEMENT } from '../../constants';
import {
  goToA1Slice,
  goToA4Slice,
  goToB1Slice,
  goToB4Slice,
  goToC1Slice,
  goToC4Slice,
} from '../generators';

export const displacementSlice = {
  'DP-1': {
    0: ['0', MOVEMENT.right, 'DP-2'],
    1: ['1', MOVEMENT.right, 'DP-29'],
  },
  'DP-2': {
    0: ['0', MOVEMENT.right, 'DP-3'],
    1: ['1', MOVEMENT.right, 'DP-16'],
  },
  'DP-3': {
    0: ['X', MOVEMENT.left, 'DP-GTA4-1-0'],
    1: ['Y', MOVEMENT.left, 'DP-GTA1-1-0'],
  },
  ...goToA4Slice('DP-GTA4-1', {
    0: ['0', MOVEMENT.left, 'DP-4'],
    1: ['1', MOVEMENT.left, 'DP-7'],
  }),
  ...goToA1Slice('DP-GTA1-1', {
    0: ['0', MOVEMENT.right, 'DP-10'],
    1: ['1', MOVEMENT.right, 'DP-13'],
  }),

  // A L
  'DP-4': {
    0: ['0', MOVEMENT.left, 'DP-5'],
    1: ['0', MOVEMENT.left, 'DP-8'],
  },
  'DP-5': {
    0: ['0', MOVEMENT.left, 'DP-6'],
    1: ['0', MOVEMENT.left, 'DP-9'],
  },
  'DP-6': {
    0: ['0', MOVEMENT.right, 'DP-GTA4-2-0'],
    1: ['0', MOVEMENT.right, 'DP-GTA4-3-0'],
  },
  ...goToA4Slice('DP-GTA4-2', {
    0: ['0', MOVEMENT.right, 'DP-43'],
    1: ['0', MOVEMENT.right, 'DP-43'],
  }),
  ...goToA4Slice('DP-GTA4-3', {
    0: ['1', MOVEMENT.right, 'DP-43'],
    1: ['1', MOVEMENT.right, 'DP-43'],
  }),
  'DP-7': {
    0: ['1', MOVEMENT.left, 'DP-5'],
    1: ['1', MOVEMENT.left, 'DP-8'],
  },
  'DP-8': {
    0: ['1', MOVEMENT.left, 'DP-6'],
    1: ['1', MOVEMENT.left, 'DP-9'],
  },
  'DP-9': {
    0: ['1', MOVEMENT.right, 'DP-GTA4-2-0'],
    1: ['1', MOVEMENT.right, 'DP-GTA4-3-0'],
  },

  // -- A R
  'DP-10': {
    0: ['0', MOVEMENT.right, 'DP-11'],
    1: ['0', MOVEMENT.right, 'DP-14'],
  },
  'DP-11': {
    0: ['0', MOVEMENT.right, 'DP-6'],
    1: ['0', MOVEMENT.right, 'DP-9'],
  },
  'DP-12': {
    0: ['0', MOVEMENT.left, 'DP-GTA1-2-0'],
    1: ['0', MOVEMENT.left, 'DP-GTA1-3-0'],
  },
  ...goToA1Slice('DP-GTA1-2', {
    0: ['0', MOVEMENT.left, 'DP-43'],
    1: ['0', MOVEMENT.left, 'DP-43'],
  }),
  ...goToA1Slice('DP-GTA1-3', {
    0: ['1', MOVEMENT.left, 'DP-43'],
    1: ['1', MOVEMENT.left, 'DP-43'],
  }),
  'DP-13': {
    0: ['1', MOVEMENT.right, 'DP-11'],
    1: ['1', MOVEMENT.right, 'DP-14'],
  },
  'DP-14': {
    0: ['1', MOVEMENT.right, 'DP-12'],
    1: ['1', MOVEMENT.right, 'DP-15'],
  },
  'DP-15': {
    0: ['1', MOVEMENT.left, 'DP-GTA1-2-0'],
    1: ['1', MOVEMENT.left, 'DP-GTA1-3-0'],
  },

  'DP-16': {
    0: ['X', MOVEMENT.left, 'DP-GTB4-1-0'],
    1: ['Y', MOVEMENT.left, 'DP-GTB1-1-0'],
  },
  ...goToB4Slice('DP-GTB4-1', {
    0: ['0', MOVEMENT.left, 'DP-17'],
    1: ['1', MOVEMENT.left, 'DP-20'],
  }),
  ...goToB1Slice('DP-GTB1-1', {
    0: ['0', MOVEMENT.right, 'DP-23'],
    1: ['1', MOVEMENT.right, 'DP-26'],
  }),

  // B L
  'DP-17': {
    0: ['0', MOVEMENT.left, 'DP-18'],
    1: ['0', MOVEMENT.left, 'DP-21'],
  },
  'DP-18': {
    0: ['0', MOVEMENT.left, 'DP-19'],
    1: ['0', MOVEMENT.left, 'DP-22'],
  },
  'DP-19': {
    0: ['0', MOVEMENT.right, 'DP-GTB4-2-0'],
    1: ['0', MOVEMENT.right, 'DP-GTB4-3-0'],
  },
  ...goToB4Slice('DP-GTB4-2', {
    0: ['0', MOVEMENT.right, 'DP-43'],
    1: ['0', MOVEMENT.right, 'DP-43'],
  }),
  ...goToB4Slice('DP-GTB4-3', {
    0: ['1', MOVEMENT.right, 'DP-43'],
    1: ['1', MOVEMENT.right, 'DP-43'],
  }),
  'DP-20': {
    0: ['1', MOVEMENT.left, 'DP-18'],
    1: ['1', MOVEMENT.left, 'DP-21'],
  },
  'DP-21': {
    0: ['1', MOVEMENT.left, 'DP-19'],
    1: ['1', MOVEMENT.left, 'DP-22'],
  },
  'DP-22': {
    0: ['1', MOVEMENT.right, 'DP-GTB4-2-0'],
    1: ['1', MOVEMENT.right, 'DP-GTB4-3-0'],
  },

  // B R
  'DP-23': {
    0: ['0', MOVEMENT.right, 'DP-24'],
    1: ['0', MOVEMENT.right, 'DP-27'],
  },
  'DP-24': {
    0: ['0', MOVEMENT.right, 'DP-25'],
    1: ['0', MOVEMENT.right, 'DP-28'],
  },
  'DP-25': {
    0: ['0', MOVEMENT.left, 'DP-GTB1-2-0'],
    1: ['0', MOVEMENT.left, 'DP-GTB1-3-0'],
  },
  ...goToB1Slice('DP-GTB1-2', {
    0: ['0', MOVEMENT.left, 'DP-43'],
    1: ['0', MOVEMENT.left, 'DP-43'],
  }),
  ...goToB1Slice('DP-GTB1-3', {
    0: ['1', MOVEMENT.left, 'DP-43'],
    1: ['1', MOVEMENT.left, 'DP-43'],
  }),
  'DP-26': {
    0: ['1', MOVEMENT.right, 'DP-24'],
    1: ['1', MOVEMENT.right, 'DP-27'],
  },
  'DP-27': {
    0: ['1', MOVEMENT.right, 'DP-25'],
    1: ['1', MOVEMENT.right, 'DP-28'],
  },
  'DP-28': {
    0: ['1', MOVEMENT.left, 'DP-GTB1-2-0'],
    1: ['1', MOVEMENT.left, 'DP-GTB1-3-0'],
  },

  'DP-29': {
    0: ['0', MOVEMENT.right, 'DP-30'],
  },
  'DP-30': {
    0: ['X', MOVEMENT.left, 'DP-GTC4-1-0'],
    1: ['Y', MOVEMENT.left, 'DP-GTC1-1-0'],
  },
  ...goToC4Slice('DP-GTC4-1', {
    0: ['0', MOVEMENT.left, 'DP-31'],
    1: ['1', MOVEMENT.left, 'DP-34'],
  }),
  ...goToC1Slice('DP-GTC1-1', {
    0: ['0', MOVEMENT.right, 'DP-37'],
    1: ['1', MOVEMENT.right, 'DP-40'],
  }),

  // C L
  'DP-31': {
    0: ['0', MOVEMENT.left, 'DP-32'],
    1: ['0', MOVEMENT.left, 'DP-35'],
  },
  'DP-32': {
    0: ['0', MOVEMENT.left, 'DP-33'],
    1: ['0', MOVEMENT.left, 'DP-36'],
  },
  'DP-33': {
    0: ['0', MOVEMENT.right, 'DP-GTC4-2-0'],
    1: ['0', MOVEMENT.right, 'DP-GTC4-3-0'],
  },
  ...goToC4Slice('DP-GTC4-2', {
    0: ['0', MOVEMENT.right, 'DP-43'],
    1: ['0', MOVEMENT.right, 'DP-43'],
  }),
  ...goToC4Slice('DP-GTC4-3', {
    0: ['1', MOVEMENT.right, 'DP-43'],
    1: ['1', MOVEMENT.right, 'DP-43'],
  }),
  'DP-34': {
    0: ['1', MOVEMENT.left, 'DP-32'],
    1: ['1', MOVEMENT.left, 'DP-35'],
  },
  'DP-35': {
    0: ['1', MOVEMENT.left, 'DP-33'],
    1: ['1', MOVEMENT.left, 'DP-36'],
  },
  'DP-36': {
    0: ['1', MOVEMENT.right, 'DP-GTC4-2-0'],
    1: ['1', MOVEMENT.right, 'DP-GTC4-3-0'],
  },

  // C R
  'DP-37': {
    0: ['0', MOVEMENT.right, 'DP-38'],
    1: ['0', MOVEMENT.right, 'DP-41'],
  },
  'DP-38': {
    0: ['0', MOVEMENT.right, 'DP-39'],
    1: ['0', MOVEMENT.right, 'DP-42'],
  },
  'DP-39': {
    0: ['0', MOVEMENT.left, 'DP-GTC1-2-0'],
    1: ['0', MOVEMENT.left, 'DP-GTC1-3-0'],
  },
  ...goToC1Slice('DP-GTC1-2', {
    0: ['0', MOVEMENT.left, 'DP-43'],
    1: ['0', MOVEMENT.left, 'DP-43'],
  }),
  ...goToC1Slice('DP-GTC1-3', {
    0: ['1', MOVEMENT.left, 'DP-43'],
    1: ['1', MOVEMENT.left, 'DP-43'],
  }),
  'DP-40': {
    0: ['1', MOVEMENT.right, 'DP-38'],
    1: ['1', MOVEMENT.right, 'DP-41'],
  },
  'DP-41': {
    0: ['1', MOVEMENT.right, 'DP-39'],
    1: ['1', MOVEMENT.right, 'DP-42'],
  },
  'DP-42': {
    0: ['1', MOVEMENT.left, 'DP-GTC1-2-0'],
    1: ['1', MOVEMENT.left, 'DP-GTC1-3-0'],
  },

  'DP-43': {
    0: ['0', MOVEMENT.right, 'DP-43'],
    1: ['1', MOVEMENT.right, 'DP-43'],
    S: ['S', MOVEMENT.right, 'DP-43'],
    X: ['0', MOVEMENT.right, 'DP-44'],
    Y: ['1', MOVEMENT.right, 'DP-44'],
  },

  'DP-44': {
    0: ['0', MOVEMENT.neutral, 'MB-1'],
    1: ['1', MOVEMENT.neutral, 'MB-1'],
    [LAMBDA.right]: [LAMBDA.right, MOVEMENT.neutral, 'MB-1'],
  },
};
