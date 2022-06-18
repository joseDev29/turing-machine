export interface State {
  [key: number | string]: Array<string | number | boolean>;
}

export interface Automata {
  [key: string]: State;
}
