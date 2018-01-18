import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosotrosRoutingModule } from './nosotros-routing.module';
import { NosotrosComponent } from './nosotros.component';

@NgModule({
  imports: [
    CommonModule,
    NosotrosRoutingModule
  ],
  declarations: [NosotrosComponent],
  exports: [NosotrosComponent]
})
export class NosotrosModule { }
