import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticiasRoutingModule } from './noticias-routing.module';
import { NoticiasComponent } from './noticias.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { NoticiasService } from './noticias.service';

@NgModule({
  imports: [
    CommonModule,
    NoticiasRoutingModule
  ],
  declarations: [NoticiasComponent, NoticiaComponent],
  exports: [NoticiasComponent],
  providers: [NoticiasService]
})
export class NoticiasModule { }
