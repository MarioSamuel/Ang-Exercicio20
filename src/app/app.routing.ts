import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { UsuariosComponent } from './usuarios/usuarios.component';


const APP_ROUTES: Routes = [
    {path:'usuarios', component: UsuariosComponent},
];

export const routing: ModuleWithProviders<RouterModule> =  RouterModule.forRoot(APP_ROUTES);