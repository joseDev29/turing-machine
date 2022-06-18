import { NgModule } from '@angular/core';

import { MessageService } from 'primeng/api';

import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

@NgModule({
  exports: [InputTextareaModule, ButtonModule, ToastModule],
  providers: [MessageService],
})
export class PrimeNgModule {}
