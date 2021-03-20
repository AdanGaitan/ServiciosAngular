import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from '../models/articulos';
import { ArticulosService } from '../services/articulos.service';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articulos: Array<Articulo> = new Array<Articulo>();
  constructor(public UsuarioInyectado: UsuariosService, public ArticuloInyectado:ArticulosService,
    public Ruta:Router
    
    ) { }

  ngOnInit(): void {

    this.articulos.push({
      titulo:'Curso Programacion',
      descripcion:'Angular 5v',
      fecha:new Date(),
      usuario: `${this.UsuarioInyectado.usuario.nombre} ${this.UsuarioInyectado.usuario.apellido}`
    },
    {
      titulo:'Curso Programacion Java',
      descripcion:'java ',
      fecha:new Date(),
      usuario: `${this.UsuarioInyectado.usuario.nombre} ${this.UsuarioInyectado.usuario.apellido}`
    },{
      titulo:'Curso Programacion React',
      descripcion:'React 5v',
      fecha:new Date(),
      usuario: `${this.UsuarioInyectado.usuario.nombre} ${this.UsuarioInyectado.usuario.apellido}`
    })
  }

  irAlDetalle(articulo: Articulo)
  {
      this.ArticuloInyectado.articulo = articulo;
      this.Ruta.navigateByUrl('/articulo-detalle')
  }

}
