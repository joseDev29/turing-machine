import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { MachineStateService } from './machine-state.service';

import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, FormsModule, PrimeNgModule],
  exports: [HomeComponent],
  providers: [MachineStateService],
})
export class MachineModule {}
