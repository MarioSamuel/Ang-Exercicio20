import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/* REGISTRO DE USARIO DE API URL  IMPORTAR A EXPORTAR  */
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  usuarios: any = [];

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get('https://jsonplaceholder.typicode.com/users/');
  }

}
