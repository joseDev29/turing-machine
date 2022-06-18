import { State } from '../../interfaces';
import { goToPosition } from './go-to-position.generator';

export const goToA1Slice = (id: string, finalState: State) => {
  return goToPosition(id, 0, finalState);
};

export const goToA2Slice = (id: string, finalState: State) => {
  return goToPosition(id, 1, finalState);
};

export const goToA3Slice = (id: string, finalState: State) => {
  return goToPosition(id, 2, finalState);
};

export const goToA4Slice = (id: string, finalState: State) => {
  return goToPosition(id, 3, finalState);
};

export const goToB1Slice = (id: string, finalState: State) => {
  return goToPosition(id, 4, finalState);
};

export const goToB2Slice = (id: string, finalState: State) => {
  return goToPosition(id, 5, finalState);
};

export const goToB3Slice = (id: string, finalState: State) => {
  return goToPosition(id, 6, finalState);
};

export const goToB4Slice = (id: string, finalState: State) => {
  return goToPosition(id, 7, finalState);
};

export const goToC1Slice = (id: string, finalState: State) => {
  return goToPosition(id, 8, finalState);
};

export const goToC2Slice = (id: string, finalState: State) => {
  return goToPosition(id, 9, finalState);
};

export const goToC3Slice = (id: string, finalState: State) => {
  return goToPosition(id, 10, finalState);
};

export const goToC4Slice = (id: string, finalState: State) => {
  return goToPosition(id, 11, finalState);
};

export const goToT1Slice = (id: string, finalState: State) => {
  return goToPosition(id, 12, finalState);
};

export const goToT2Slice = (id: string, finalState: State) => {
  return goToPosition(id, 13, finalState);
};

export const goToT3Slice = (id: string, finalState: State) => {
  return goToPosition(id, 14, finalState);
};

export const goToT4Slice = (id: string, finalState: State) => {
  return goToPosition(id, 15, finalState);
};
