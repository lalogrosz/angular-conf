import {ModuleWithProviders} from '@angular/core';
import { RouterModule } from '@angular/router';

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(
    [
        {path: '', redirectTo: 'nosotros', pathMatch: 'full'},
        {path: 'nosotros', loadChildren: './nosotros/nosotros.module#NosotrosModule'},
        {path: 'noticias', loadChildren: './noticias/noticias.module#NoticiasModule'}
    ],
    {
        useHash: true
    }
);
