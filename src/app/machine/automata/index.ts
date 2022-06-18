import { assignValueSlice } from './slices/assign-value.slice';
import { assignVariableSlice } from './slices/assign-variable.slice';
import { baseSlice } from './slices/base.slice';

export const automata = {
  ...baseSlice,
  ...assignValueSlice,
  ...assignVariableSlice,
};
