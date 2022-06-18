import { Automata, State } from '../../interfaces';
import { LAMBDA, MOVEMENT } from '../../constants';

export const goToPosition = (
  id: string,
  position: number,
  finalState: State
) => {
  const slice: Automata = {
    [`${id}-0`]: {
      0: ['0', MOVEMENT.left, `${id}-0`],
      1: ['1', MOVEMENT.left, `${id}-0`],
      X: ['X', MOVEMENT.left, `${id}-0`],
      Y: ['Y', MOVEMENT.left, `${id}-0`],
      S: ['S', MOVEMENT.left, `${id}-0`],
      [LAMBDA.right]: [LAMBDA.right, MOVEMENT.left, `${id}-0`],
      [LAMBDA.left]: [LAMBDA.left, MOVEMENT.right, `${id}-1`],
    },
  };

  for (let i = 0; i < position; i++) {
    slice[`${id}-${i + 1}`] = {
      0: ['0', MOVEMENT.right, `${id}-${i + 2}`],
      1: ['1', MOVEMENT.right, `${id}-${i + 2}`],
      X: ['X', MOVEMENT.right, `${id}-${i + 2}`],
      Y: ['Y', MOVEMENT.right, `${id}-${i + 2}`],
      S: ['S', MOVEMENT.right, `${id}-${i + 2}`],
    };
  }

  slice[`${id}-${position + 1}`] = { ...finalState };

  return slice;
};
