import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

import { Automata, State } from './interfaces';
import { INITIAL_TAPE, LAMBDA, MOVEMENT } from './constants';
import { automata } from './automata';

@Injectable()
export class MachineStateService {
  tape: string[] = [...INITIAL_TAPE];
  head: number | 'lambdaL' | 'lambdaR' = 16;
  currentState: string = 'MB-1';
  automata: Automata = automata;
  timeStamp: number = 20;

  constructor(private readonly messageService: MessageService) {}

  loadChain = (value: string) => {
    const chain = value.trim().split('');

    const isValid = chain.every((item) => item === '0' || item === '1');

    if (!isValid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Invalid chain',
      });

      return;
    }

    this.tape = [...this.tape, ...chain];

    this.messageService.add({
      severity: 'success',
      summary: 'Load success',
    });
  };

  init = () => {
    console.log('AUTOMATA: ', this.automata);
    this.head = (this.head as number) + 1;
    setTimeout(() => this.runRound(), this.timeStamp);
  };

  reset = () => {
    this.tape = [...INITIAL_TAPE];
    this.head = 16;
    this.currentState = 'MB-1';
  };

  getCurrentSymbol = (): string => {
    if (this.head === LAMBDA.right) return LAMBDA.right;
    else if (this.head === LAMBDA.left) return LAMBDA.left;
    return this.tape[this.head];
  };

  lambdaManagement = () => {
    const state: State = this.automata[this.currentState] as State;

    const symbol = this.getCurrentSymbol();

    const transition = state[symbol];

    const movement = transition[1] as MOVEMENT;

    const isMovementNeutral = movement === MOVEMENT.neutral;

    if (this.head === LAMBDA.right && !isMovementNeutral) {
      this.head = this.tape.length - 1;
    } else if (this.head === LAMBDA.left && !isMovementNeutral) {
      this.head = 0;
    }

    this.currentState = transition[2] as string;

    if (transition[3]) {
      return this.messageService.add({
        severity: 'success',
        summary: 'Process successfully completed',
      });
    }

    return this.runRound();
  };

  runRound = (): any => {
    if (this.head === LAMBDA.right || this.head === LAMBDA.left) {
      return setTimeout(() => this.lambdaManagement(), this.timeStamp);
    }

    const state: State = this.automata[this.currentState] as State;

    const symbol = this.getCurrentSymbol();

    const transition = state[symbol];

    const movement = transition[1] as MOVEMENT;

    this.tape[this.head] = transition[0] as string;
    this.currentState = transition[2] as string;

    switch (movement) {
      case MOVEMENT.right: {
        const condition = this.head === this.tape.length - 1;
        this.head = condition ? LAMBDA.right : this.head + 1;
        break;
      }
      case MOVEMENT.left: {
        const condition = this.head === 0;
        this.head = condition ? LAMBDA.left : this.head - 1;
        break;
      }
    }

    if (transition[3]) {
      return this.messageService.add({
        severity: 'success',
        summary: 'Process successfully completed',
      });
    }

    return setTimeout(() => this.runRound(), this.timeStamp);
  };
}
