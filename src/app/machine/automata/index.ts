import { assignValueSlice } from './slices/assign-value.slice';
import { assignVariableSlice } from './slices/assign-variable.slice';
import { baseSlice } from './slices/base.slice';
import { complementA2Slice } from './slices/complement-a2.slice';
import { displacementSlice } from './slices/displacement.slice';

export const automata = {
  ...baseSlice,
  ...assignValueSlice,
  ...assignVariableSlice,
  ...complementA2Slice,
  ...displacementSlice,
};
