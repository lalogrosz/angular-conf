import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopbarComponent } from './topbar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [TopbarComponent],
  exports: [TopbarComponent],
  providers: []
})
export class TopbarModule { }
