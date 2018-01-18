import { NoticiasService } from './noticias.service';
import { Component, OnInit } from '@angular/core';
import { Noticia } from './noticia/noticia.interface';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  public noticias: Noticia[];

  constructor(private noticiaService: NoticiasService) { }


  ngOnInit() {
    this.noticiaService.getNews().subscribe((noticias: Noticia[]) => {
      this.noticias = noticias;
    });
  }

}
