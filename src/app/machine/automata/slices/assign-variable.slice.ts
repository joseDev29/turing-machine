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

//ID: AVR

export const assignVariableSlice = {
  'AVR-1': {
    0: ['0', MOVEMENT.right, 'AVR-2'],
    1: ['1', MOVEMENT.right, 'AVR-11'],
  },
  'AVR-2': {
    0: ['0', MOVEMENT.right, 'AVR-3'],
    1: ['1', MOVEMENT.right, 'AVR-8'],
  },
  'AVR-3': {
    0: ['0', MOVEMENT.right, 'AVR-4'],
    1: ['1', MOVEMENT.right, 'AVR-7'],
  },

  // -- A=B

  'AVR-4': {
    1: ['Y', MOVEMENT.right, 'AVR-GTB1-1-0'],
  },

  ...goToB1Slice('AVR-GTB1-1', {
    0: ['0', MOVEMENT.left, 'AVR-GTA1-1-0'],
    1: ['1', MOVEMENT.left, 'AVR-GTA1-2-0'],
  }),

  ...goToA1Slice('AVR-GTA1-1', {
    0: ['0', MOVEMENT.right, 'AVR-GTB2-1-0'],
    1: ['0', MOVEMENT.right, 'AVR-GTB2-1-0'],
  }),
  ...goToA1Slice('AVR-GTA1-2', {
    0: ['1', MOVEMENT.right, 'AVR-GTB2-1-0'],
    1: ['1', MOVEMENT.right, 'AVR-GTB2-1-0'],
  }),

  ...goToB2Slice('AVR-GTB2-1', {
    0: ['0', MOVEMENT.left, 'AVR-GTA2-1-0'],
    1: ['1', MOVEMENT.left, 'AVR-GTA2-2-0'],
  }),

  ...goToA2Slice('AVR-GTA2-1', {
    0: ['0', MOVEMENT.right, 'AVR-GTB3-1-0'],
    1: ['0', MOVEMENT.right, 'AVR-GTB3-1-0'],
  }),
  ...goToA2Slice('AVR-GTA2-2', {
    0: ['1', MOVEMENT.right, 'AVR-GTB3-1-0'],
    1: ['1', MOVEMENT.right, 'AVR-GTB3-1-0'],
  }),

  ...goToB3Slice('AVR-GTB3-1', {
    0: ['0', MOVEMENT.left, 'AVR-GTA3-1-0'],
    1: ['1', MOVEMENT.left, 'AVR-GTA3-2-0'],
  }),

  ...goToA3Slice('AVR-GTA3-1', {
    0: ['0', MOVEMENT.right, 'AVR-GTB4-1-0'],
    1: ['0', MOVEMENT.right, 'AVR-GTB4-1-0'],
  }),
  ...goToA3Slice('AVR-GTA3-2', {
    0: ['1', MOVEMENT.right, 'AVR-GTB4-1-0'],
    1: ['1', MOVEMENT.right, 'AVR-GTB4-1-0'],
  }),

  ...goToB4Slice('AVR-GTB4-1', {
    0: ['0', MOVEMENT.left, 'AVR-GTA4-1-0'],
    1: ['1', MOVEMENT.left, 'AVR-GTA4-2-0'],
  }),

  ...goToA4Slice('AVR-GTA4-1', {
    0: ['0', MOVEMENT.right, 'AVR-5'],
    1: ['0', MOVEMENT.right, 'AVR-5'],
  }),
  ...goToA4Slice('AVR-GTA4-2', {
    0: ['1', MOVEMENT.right, 'AVR-5'],
    1: ['1', MOVEMENT.right, 'AVR-5'],
  }),

  // --- FINAL STATES

  'AVR-5': {
    0: ['0', MOVEMENT.right, 'AVR-5'],
    1: ['1', MOVEMENT.right, 'AVR-5'],
    S: ['S', MOVEMENT.right, 'AVR-5'],
    X: ['0', MOVEMENT.right, 'AVR-6'],
    Y: ['1', MOVEMENT.right, 'AVR-6'],
  },
  'AVR-6': {
    0: ['0', MOVEMENT.neutral, 'MB-1'],
    1: ['1', MOVEMENT.neutral, 'MB-1'],
    [LAMBDA.right]: [LAMBDA.right, MOVEMENT.neutral, 'MB-1'],
  },

  // -- A=C

  'AVR-7': {
    0: ['X', MOVEMENT.right, 'AVR-GTC1-1-0'],
  },

  ...goToC1Slice('AVR-GTC1-1', {
    0: ['0', MOVEMENT.left, 'AVR-GTA1-3-0'],
    1: ['1', MOVEMENT.left, 'AVR-GTA1-4-0'],
  }),

  ...goToA1Slice('AVR-GTA1-3', {
    0: ['0', MOVEMENT.right, 'AVR-GTC2-1-0'],
    1: ['0', MOVEMENT.right, 'AVR-GTC2-1-0'],
  }),
  ...goToA1Slice('AVR-GTA1-4', {
    0: ['1', MOVEMENT.right, 'AVR-GTC2-1-0'],
    1: ['1', MOVEMENT.right, 'AVR-GTC2-1-0'],
  }),

  ...goToC2Slice('AVR-GTC2-1', {
    0: ['0', MOVEMENT.left, 'AVR-GTA2-3-0'],
    1: ['1', MOVEMENT.left, 'AVR-GTA2-4-0'],
  }),

  ...goToA2Slice('AVR-GTA2-3', {
    0: ['0', MOVEMENT.right, 'AVR-GTC3-1-0'],
    1: ['0', MOVEMENT.right, 'AVR-GTC3-1-0'],
  }),
  ...goToA2Slice('AVR-GTA2-4', {
    0: ['1', MOVEMENT.right, 'AVR-GTC3-1-0'],
    1: ['1', MOVEMENT.right, 'AVR-GTC3-1-0'],
  }),

  ...goToC3Slice('AVR-GTC3-1', {
    0: ['0', MOVEMENT.left, 'AVR-GTA3-3-0'],
    1: ['1', MOVEMENT.left, 'AVR-GTA3-4-0'],
  }),

  ...goToA3Slice('AVR-GTA3-3', {
    0: ['0', MOVEMENT.right, 'AVR-GTC4-1-0'],
    1: ['0', MOVEMENT.right, 'AVR-GTC4-1-0'],
  }),
  ...goToA3Slice('AVR-GTA3-4', {
    0: ['1', MOVEMENT.right, 'AVR-GTC4-1-0'],
    1: ['1', MOVEMENT.right, 'AVR-GTC4-1-0'],
  }),

  ...goToC4Slice('AVR-GTC4-1', {
    0: ['0', MOVEMENT.left, 'AVR-GTA4-3-0'],
    1: ['1', MOVEMENT.left, 'AVR-GTA4-4-0'],
  }),

  ...goToA4Slice('AVR-GTA4-3', {
    0: ['0', MOVEMENT.right, 'AVR-5'],
    1: ['0', MOVEMENT.right, 'AVR-5'],
  }),
  ...goToA4Slice('AVR-GTA4-4', {
    0: ['1', MOVEMENT.right, 'AVR-5'],
    1: ['1', MOVEMENT.right, 'AVR-5'],
  }),

  'AVR-8': {
    0: ['0', MOVEMENT.right, 'AVR-9'],
    1: ['1', MOVEMENT.right, 'AVR-10'],
  },

  // -- B=A

  'AVR-9': {
    0: ['X', MOVEMENT.right, 'AVR-GTA1-5-0'],
  },

  ...goToA1Slice('AVR-GTA1-5', {
    0: ['0', MOVEMENT.left, 'AVR-GTB1-2-0'],
    1: ['1', MOVEMENT.left, 'AVR-GTB1-3-0'],
  }),

  ...goToB1Slice('AVR-GTB1-2', {
    0: ['0', MOVEMENT.right, 'AVR-GTA2-5-0'],
    1: ['0', MOVEMENT.right, 'AVR-GTA2-5-0'],
  }),
  ...goToB1Slice('AVR-GTB1-3', {
    0: ['1', MOVEMENT.right, 'AVR-GTA2-5-0'],
    1: ['1', MOVEMENT.right, 'AVR-GTA2-5-0'],
  }),

  ...goToA2Slice('AVR-GTA2-5', {
    0: ['0', MOVEMENT.left, 'AVR-GTB2-2-0'],
    1: ['1', MOVEMENT.left, 'AVR-GTB2-3-0'],
  }),

  ...goToB2Slice('AVR-GTB2-2', {
    0: ['0', MOVEMENT.right, 'AVR-GTA3-5-0'],
    1: ['0', MOVEMENT.right, 'AVR-GTA3-5-0'],
  }),
  ...goToB2Slice('AVR-GTB2-3', {
    0: ['1', MOVEMENT.right, 'AVR-GTA3-5-0'],
    1: ['1', MOVEMENT.right, 'AVR-GTA3-5-0'],
  }),

  ...goToA3Slice('AVR-GTA3-5', {
    0: ['0', MOVEMENT.left, 'AVR-GTB3-2-0'],
    1: ['1', MOVEMENT.left, 'AVR-GTB3-3-0'],
  }),

  ...goToB3Slice('AVR-GTB3-2', {
    0: ['0', MOVEMENT.right, 'AVR-GTB4-1-0'],
    1: ['0', MOVEMENT.right, 'AVR-GTB4-1-0'],
  }),
  ...goToB3Slice('AVR-GTB3-3', {
    0: ['1', MOVEMENT.right, 'AVR-GTB4-1-0'],
    1: ['1', MOVEMENT.right, 'AVR-GTB4-1-0'],
  }),

  ...goToA4Slice('AVR-GTA4-5', {
    0: ['0', MOVEMENT.left, 'AVR-GTB4-2-0'],
    1: ['1', MOVEMENT.left, 'AVR-GTB4-3-0'],
  }),

  ...goToB4Slice('AVR-GTB4-2', {
    0: ['0', MOVEMENT.right, 'AVR-5'],
    1: ['0', MOVEMENT.right, 'AVR-5'],
  }),
  ...goToB4Slice('AVR-GTB4-3', {
    0: ['1', MOVEMENT.right, 'AVR-5'],
    1: ['1', MOVEMENT.right, 'AVR-5'],
  }),

  // -- B=C

  'AVR-10': {
    0: ['X', MOVEMENT.right, 'AVR-GTC1-2-0'],
  },

  ...goToC1Slice('AVR-GTC1-2', {
    0: ['0', MOVEMENT.left, 'AVR-GTB1-4-0'],
    1: ['1', MOVEMENT.left, 'AVR-GTB1-5-0'],
  }),

  ...goToB1Slice('AVR-GTB1-4', {
    0: ['0', MOVEMENT.right, 'AVR-GTC2-2-0'],
    1: ['0', MOVEMENT.right, 'AVR-GTC2-2-0'],
  }),
  ...goToB1Slice('AVR-GTB1-5', {
    0: ['1', MOVEMENT.right, 'AVR-GTC2-2-0'],
    1: ['1', MOVEMENT.right, 'AVR-GTC2-2-0'],
  }),

  ...goToC2Slice('AVR-GTC2-2', {
    0: ['0', MOVEMENT.left, 'AVR-GTB2-4-0'],
    1: ['1', MOVEMENT.left, 'AVR-GTB2-5-0'],
  }),

  ...goToB2Slice('AVR-GTB2-4', {
    0: ['0', MOVEMENT.right, 'AVR-GTC3-2-0'],
    1: ['0', MOVEMENT.right, 'AVR-GTC3-2-0'],
  }),
  ...goToB2Slice('AVR-GTB2-5', {
    0: ['1', MOVEMENT.right, 'AVR-GTC3-2-0'],
    1: ['1', MOVEMENT.right, 'AVR-GTC3-2-0'],
  }),

  ...goToC3Slice('AVR-GTC3-2', {
    0: ['0', MOVEMENT.left, 'AVR-GTB3-4-0'],
    1: ['1', MOVEMENT.left, 'AVR-GTB3-5-0'],
  }),

  ...goToB3Slice('AVR-GTB3-4', {
    0: ['0', MOVEMENT.right, 'AVR-GTC4-2-0'],
    1: ['0', MOVEMENT.right, 'AVR-GTC4-2-0'],
  }),
  ...goToB3Slice('AVR-GTB3-5', {
    0: ['1', MOVEMENT.right, 'AVR-GTC4-2-0'],
    1: ['1', MOVEMENT.right, 'AVR-GTC4-2-0'],
  }),

  ...goToC4Slice('AVR-GTC4-2', {
    0: ['0', MOVEMENT.left, 'AVR-GTB4-4-0'],
    1: ['1', MOVEMENT.left, 'AVR-GTB4-5-0'],
  }),

  ...goToB4Slice('AVR-GTB4-4', {
    0: ['0', MOVEMENT.right, 'AVR-5'],
    1: ['0', MOVEMENT.right, 'AVR-5'],
  }),
  ...goToB4Slice('AVR-GTB4-5', {
    0: ['1', MOVEMENT.right, 'AVR-5'],
    1: ['1', MOVEMENT.right, 'AVR-5'],
  }),

  'AVR-11': {
    0: ['0', MOVEMENT.right, 'AVR-12'],
  },

  'AVR-12': {
    0: ['0', MOVEMENT.right, 'AVR-13'],
  },

  'AVR-13': {
    0: ['X', MOVEMENT.right, 'AVR-GTA1-6-0'],
    1: ['Y', MOVEMENT.right, 'AVR-GTB1-6-0'],
  },

  // -- C=A
  ...goToA1Slice('AVR-GTA1-6', {
    0: ['0', MOVEMENT.left, 'AVR-GTC1-3-0'],
    1: ['1', MOVEMENT.left, 'AVR-GTC1-4-0'],
  }),

  ...goToC1Slice('AVR-GTC1-3', {
    0: ['0', MOVEMENT.right, 'AVR-GTA2-6-0'],
    1: ['0', MOVEMENT.right, 'AVR-GTA2-6-0'],
  }),
  ...goToC1Slice('AVR-GTC1-4', {
    0: ['1', MOVEMENT.right, 'AVR-GTA2-6-0'],
    1: ['1', MOVEMENT.right, 'AVR-GTA2-6-0'],
  }),

  ...goToA2Slice('AVR-GTA2-6', {
    0: ['0', MOVEMENT.left, 'AVR-GTC2-3-0'],
    1: ['1', MOVEMENT.left, 'AVR-GTC2-4-0'],
  }),

  ...goToC2Slice('AVR-GTC2-3', {
    0: ['0', MOVEMENT.right, 'AVR-GTA3-6-0'],
    1: ['0', MOVEMENT.right, 'AVR-GTA3-6-0'],
  }),
  ...goToC2Slice('AVR-GTC2-4', {
    0: ['1', MOVEMENT.right, 'AVR-GTA3-6-0'],
    1: ['1', MOVEMENT.right, 'AVR-GTA3-6-0'],
  }),

  ...goToA3Slice('AVR-GTA3-6', {
    0: ['0', MOVEMENT.left, 'AVR-GTC3-3-0'],
    1: ['1', MOVEMENT.left, 'AVR-GTC3-4-0'],
  }),

  ...goToC3Slice('AVR-GTC3-3', {
    0: ['0', MOVEMENT.right, 'AVR-GTA4-6-0'],
    1: ['0', MOVEMENT.right, 'AVR-GTA4-6-0'],
  }),
  ...goToC3Slice('AVR-GTC3-4', {
    0: ['1', MOVEMENT.right, 'AVR-GTA4-6-0'],
    1: ['1', MOVEMENT.right, 'AVR-GTA4-6-0'],
  }),

  ...goToA4Slice('AVR-GTA4-6', {
    0: ['0', MOVEMENT.left, 'AVR-GTC4-3-0'],
    1: ['1', MOVEMENT.left, 'AVR-GTC4-4-0'],
  }),

  ...goToC4Slice('AVR-GTC4-3', {
    0: ['0', MOVEMENT.right, 'AVR-5'],
    1: ['0', MOVEMENT.right, 'AVR-5'],
  }),
  ...goToC4Slice('AVR-GTC4-4', {
    0: ['1', MOVEMENT.right, 'AVR-5'],
    1: ['1', MOVEMENT.right, 'AVR-5'],
  }),

  // -- C=B
  ...goToB1Slice('AVR-GTB1-6', {
    0: ['0', MOVEMENT.left, 'AVR-GTC1-5-0'],
    1: ['1', MOVEMENT.left, 'AVR-GTC1-6-0'],
  }),

  ...goToC1Slice('AVR-GTC1-5', {
    0: ['0', MOVEMENT.right, 'AVR-GTB2-6-0'],
    1: ['0', MOVEMENT.right, 'AVR-GTB2-6-0'],
  }),
  ...goToC1Slice('AVR-GTC1-6', {
    0: ['1', MOVEMENT.right, 'AVR-GTB2-6-0'],
    1: ['1', MOVEMENT.right, 'AVR-GTB2-6-0'],
  }),

  ...goToB2Slice('AVR-GTB2-6', {
    0: ['0', MOVEMENT.left, 'AVR-GTC2-5-0'],
    1: ['1', MOVEMENT.left, 'AVR-GTC2-6-0'],
  }),

  ...goToC2Slice('AVR-GTC2-5', {
    0: ['0', MOVEMENT.right, 'AVR-GTB3-6-0'],
    1: ['0', MOVEMENT.right, 'AVR-GTB3-6-0'],
  }),
  ...goToC2Slice('AVR-GTC2-6', {
    0: ['1', MOVEMENT.right, 'AVR-GTB3-6-0'],
    1: ['1', MOVEMENT.right, 'AVR-GTB3-6-0'],
  }),

  ...goToB3Slice('AVR-GTB3-6', {
    0: ['0', MOVEMENT.left, 'AVR-GTC3-5-0'],
    1: ['1', MOVEMENT.left, 'AVR-GTC3-6-0'],
  }),

  ...goToC3Slice('AVR-GTC3-5', {
    0: ['0', MOVEMENT.right, 'AVR-GTB4-6-0'],
    1: ['0', MOVEMENT.right, 'AVR-GTB4-6-0'],
  }),
  ...goToC3Slice('AVR-GTC3-6', {
    0: ['1', MOVEMENT.right, 'AVR-GTB4-6-0'],
    1: ['1', MOVEMENT.right, 'AVR-GTB4-6-0'],
  }),

  ...goToB4Slice('AVR-GTB4-6', {
    0: ['0', MOVEMENT.left, 'AVR-GTC4-5-0'],
    1: ['1', MOVEMENT.left, 'AVR-GTC4-5-0'],
  }),

  ...goToC4Slice('AVR-GTC4-5', {
    0: ['0', MOVEMENT.right, 'AVR-5'],
    1: ['0', MOVEMENT.right, 'AVR-5'],
  }),
  ...goToC4Slice('AVR-GTC4-6', {
    0: ['1', MOVEMENT.right, 'AVR-5'],
    1: ['1', MOVEMENT.right, 'AVR-5'],
  }),
};
