import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: any = [];

  constructor(usuariosServ: UsuariosService) {
    this.usuarios = usuariosServ.getTodos();
    usuariosServ.getTodos().subscribe(usuarios => this.usuarios = usuarios);
    
  }

  ngOnInit(): void {
  }

}


