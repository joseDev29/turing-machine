import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MachineStateService } from '../../machine-state.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent {
  inputValue: string = '';

  constructor(public readonly machineState: MachineStateService) {}

  onLoad = () => {
    this.machineState.reset();
    this.machineState.loadChain(this.inputValue);
  };

  onInit = () => {
    this.machineState.init();
  };

  onReset = () => {
    this.machineState.reset();
  };
}
